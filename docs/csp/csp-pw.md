# CSP Practical Work
## Part 1

![pw](../assets/uncle-pw.png)

1 - Starter Content Security Policy

- Configure a minimalistic CSP with the following value and observe the result (see console log) : "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';"
       
Hints : 
          
- This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg inline scripting, inline styles, object, frame, media, etc). It is a good starting point but often too restrictive for many existing sites
          
- You can declare your CSP as a meta tag with "http-equiv" directive in index.html : <meta http-equiv="__directive__" content="__value__">
    
- Update step by step the configuration in order to make the website load properly (Content-Security-Policy-Report-Only header)
       
    - Hint : See https://content-security-policy.com/ for more details on existing CSP directives
        
- Check the security level of this CSP on https://csp-evaluator.withgoogle.com/
    
- Declare the CSP server-side     
       
    - Hints : 
      - Use the spring security API HttpSecurity : HttpSecurity#headers()#contentSecurityPolicy("...")
      - Set the CSP configuration in /bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java
      - Bypass the angular-cli proxy in order to use the server-side CSP configuration ('ng build', then use http://localhost:8080/#/home)     

2 - Configure a CSP 3

- Use CSP to secure your app against inline scripting
  
    - In index.html, declare an arbitrary inline scripting : "<script>document.write('<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>');</script>"
  
    - Update the CSP in order to block the inline scripting.
  
    - Update the CSP in order to allow this inline scripting securely (consider CSP3 SHA-256 hash syntax)
    
    - Hints : To generate the hash, use this online tool : https://report-uri.io/home/hash (beware of spaces and carriage returns...)
    
- Check the security level of this CSP on https://csp-evaluator.withgoogle.com/ 

## Part 2


The purpose of this PW is to implement a CSP based on a dynamic nonce. The CSP will be generated server-side but loaded client-side.
Then we will add inline scripting and secure it with a nonce.

1 - Implement a CSP based on a nonce, server-side:

- Implement a CSPResource REST api endpoint to generate a random nonce and return a content-security-policy which declares this nonce in the "script-src" directive
``` typescript 
            package com.worldline.bookstore.web.rest;

            import java.security.MessageDigest;
            import java.security.NoSuchAlgorithmException;
            import java.security.SecureRandom;
            import java.util.Collections;
            
            import javax.servlet.http.HttpServletResponse;
            
            import org.slf4j.Logger;
            import org.slf4j.LoggerFactory;
            import org.springframework.http.HttpStatus;
            import org.springframework.http.ResponseEntity;
            import org.springframework.security.crypto.codec.Hex;
            import org.springframework.web.bind.annotation.GetMapping;
            import org.springframework.web.bind.annotation.RequestMapping;
            import org.springframework.web.bind.annotation.RestController;
            
            import com.codahale.metrics.annotation.Timed;
            
            /**
             * REST controller for managing Content-Security-Policy confuguration with random nonce.
             */
            @RestController
            @RequestMapping("/api")
            public class CSPResource {
            
            	private final Logger log = LoggerFactory.getLogger(CSPResource.class);
            	
            	/** Used for Script Nonce */
            	private SecureRandom prng = null;
            
            	@GetMapping("/csp")
                @Timed
                // Add Script Nonce CSP Policy
                public ResponseEntity<?> generateCSP(HttpServletResponse response) {
              		// --Get its digest
              		MessageDigest sha;
              		// --Generate a random number
              		String randomNum;
              		try {
              			this.prng = SecureRandom.getInstance("SHA1PRNG");
              			randomNum = new Integer(this.prng.nextInt()).toString();
              			sha = MessageDigest.getInstance("SHA-1");
              		}
              		catch (NoSuchAlgorithmException e) {
              			return new ResponseEntity<>(Collections.singletonMap("CSPException",e.getLocalizedMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
              		}
              		
              		byte[] digest = sha.digest(randomNum.getBytes());
              		
              		// --Encode it into HEXA
              		char[] scriptNonce = Hex.encode(digest);
              
              		String csp = "script-src" +
              				" 'unsafe-eval' 'strict-dynamic' " +
              				" 'nonce-"+String.valueOf(scriptNonce)+"'" +
              				" 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='" + // SRI hashes for https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js (work only for Chrome)
              				";" +
              				// add connect-src directive to adapt CSP over cross-origin requests (CORS)  
              				"connect-src"+
              				" http://localhost:8080 http://localhost:4200 ws://localhost:4200"
              				+ ";"+
              				" style-src" +
              				" 'self' 'unsafe-inline'"+
              				";" +
              				" font-src" +
              				" 'self' "+
              				";" +
              				" img-src" +
              				" 'self' data:" +
              				";" +
              				" child-src" +
              				" 'self' " +
              				";" +
              				" object-src" +
              				" 'none' " +
              				";" +
              				" default-src" +
              		    " 'self' ";
              		
                      CSP conf = new CSP(csp);
                      conf.setNonce(String.valueOf(scriptNonce));
                      
                      log.debug(conf.toString());
                      
                      return ResponseEntity.ok(conf);  
                }
            
            }

```              
           
Note : Implement a CSP wrapper class (used by the CSPResource class) with 2 attributes : 
    - "config" : stores the complete Content-Security-Policy
    - "nonce" : stores the nonce

- Remove the csp configuration loaded from the SecurityConfiguration.java if any


2 - Client-side implementation:

- Create a services/cspConfigService.ts file to GET the CSP config and nonce from the CSPResources REST api
``` typescript         
                import { Injectable, Injector } from '@angular/core';
                import { HttpClient, HttpResponse } from '@angular/common/http';
                
                @Injectable()
                // Thuis service gets the Content-Security-Policy and a random nonce from a REST api endpoint /api/csp
                export class CspConfig {
                
                    private _config: any;
                    private _nonce: any;
                    private http: HttpClient;
                  
                    // can't use classical Angular DI for HttpClient here, because of "cyclic dependency" issues
                    // Use Injector service to instanciate HttpClient 
                  	constructor(injector:Injector) {
                    	this.http = injector.get(HttpClient);
                  	}
                
                    // Load Content-Security-Policy from a REST api endpoint
                    // The returned data will contain the CSP configuration ('value') and the a random generated nonce ('nonce')
                    load(): Promise<any>{
                        return this.http.get('/api/csp')
                              .toPromise()
                              .then(data => {
                                  this._config = data['value'];
                                  this._nonce = data['nonce'];
                                  return data;
                               })
                    }
                    
                    get config(): any {
                        return this._config;
                    }
                
                    get nonce(): any {
                        return this._nonce;
                    }
                }

```        

Note : you will have to import and declare this new service in app.module.ts
        
        
- Load the CSP with a meta tag and add an arbitrary "script" block with a nonce
``` typescript         
        Update app.component.ts to add the following implementation
        
          export class AppComponent {
          	
          	private csp: string;
          	private nonce:string; 
          	
          	constructor(
          		private router: Router, 
          		public userService: UserService,
          		public cspConfig: CspConfig) {
          
          	  	cspConfig.load().then(
          	  		data => {
          	  			
          	  			this.csp = data['value'];
          	  			this.nonce = data['nonce'];;
          	  			
          	  			console.debug('csp : '+this.csp);
          	  			console.debug('nonce : '+this.nonce);
          				
          				  // can't use the Meta#addTags() method to set CSP because it will insert the meta tag too late, so we add it "manually"
          	  			var meta = "<meta http-equiv=\"Content-Security-Policy\" content=\""+this.csp+"\">";
          	  			this.renderHtml(meta, 'head');
          	  			console.log('content-security-policy meta  : '+meta);
                    
                    // Add secure inline scripting (a script block with a nonce)
          	  		  // The script will just render a message at the bottom of the page
          				  // (here, we don't use document.write method otherwise it will replace the whole page rendering)
          				  var yourHtmlString = 
          					"<script nonce='"+this.nonce+"'>"+
          						"document.getElementsByTagName('body')[0].appendChild("+
          							"document.createRange().createContextualFragment("+
          								"'<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>'));</script>";
          			 	  this.renderHtml(yourHtmlString, 'head');
          				  console.log('inline scripting !!! ', yourHtmlString);				    
          	  	});
          	}
          
            ...
            
            /**
          	 *	
          	 *	Renders an html portion inside a given html tag
          	 *	@param message: a string which represents the html portion to render in the page
          	 *	@param parentTag : the html tag name in which the html portion will be inserted as a first child
          	 */
            private renderHtml(message:string, parentTag: string){
          		var fragment = document.createRange().createContextualFragment(message);
          		document.getElementsByTagName(parentTag)[0].appendChild(fragment);
            }
          }
        
```        
        
- Test your app from http://localhost:4200 : the script should be executed without error message
  Check that your DOM contains the Content-Security-Policy meta tag with the nonce and that the inline scripting uses this nonce. 
