import{r,o as s,c as i,a as e,e as a,F as n,b as o,d as c}from"./app.d2e07122.js";import{_ as l}from"./pw-coding.b255a857.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=e("h1",{id:"_2-5-csrf-practical-work",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-5-csrf-practical-work","aria-hidden":"true"},"#"),o(" 2.5 CSRF Practical Work")],-1),h=e("p",null,[e("img",{src:l,alt:"pw"})],-1),f=o("Practical Work Web-Application directory : "),w={href:"https://github.com/worldline/angular-security-training/tree/main/pw/pw-csrf",target:"_blank",rel:"noopener noreferrer"},k=o("pw/pw-csrf"),g=c('<p>1 - Enable and configure the csrf server-side protection</p><ul><li><p>declare the csrf protection in <code>/server/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java</code></p></li><li><p>use cookie strategy</p></li><li><p>make sure the cookie is NOT <code>HttpOnly</code></p></li><li><p>Hint : <span style="color:white;background-color:white;"> HttpSecurity#csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())</span></p></li></ul><p>2 - Test the CSRF server-side protection</p><ul><li>in &quot;Home&quot; page, add a &quot;news&quot; : analyze request and response&#39;s headers using the client Firefox Browser Network Monitor , what do you notice ?</li><li>Hint : <span style="color:white;background-color:white;"> verify that expected cookies (XSRF-TOKEN) is set and client-side header (X-XSRF-Token) is missing </span></li></ul><p>3 - Notice the csrf client-side protection</p><ul><li><p>in &quot;Home&quot; page, add a &quot;news&quot; : analyze request and response&#39;s headers using the client Firefox Browser Network Monitor , what do you notice ?</p><ul><li>Hint : <span style="color:white;background-color:white;"> verify that expected cookies (XSRF-TOKEN) is set and client-side header (X-XSRF-Token) is set with the same value </span></li></ul></li></ul><p>4 - Test the CSRF protection</p><ul><li><p>Try to forge a request : use a curl command on <code>http://localhost:8080/api/news/like/8</code> (use Firefox Browser Network Monitor, right-click on the request (&quot;Add&quot; a like on a news to see the request), &quot;select copy for curl&quot;, then, execute the command in a shell) Explain the result ? How can we change this result ?</p><ul><li>Hint : <span style="color:white;background-color:white;"> it&#39;s ok as far as you post the header and the cookie with same token - if we modify one of the token values or remove it, we get forbidden access to the page because the CsrfFilter</span></li></ul></li><li><p>Do the same for <code>http://localhost:8080/api/news</code> GET request and modify CSRF tokens and explain the result.</p><ul><li>Hint : <span style="color:white;background-color:white;"> Angular doesn&#39;t send X-XSRF-TOKEN for GET or HEAD methods (see github.com/angular/angular/blob/5.2.8/packages/common/http/src/xsrf.ts#L81).Also, at server-side level, GET requests are allowed by default (see CsrfFilter#DefaultRequiresCsrfMatcher) </span></li></ul></li></ul><p>5 - Try to understand the spring implementation of the csrf protection. Take a look at the following source files :</p><ul><li><code>org.springframework.security.web.csrf.CsrfFilter</code> class : <span style="color:white;background-color:white;"> the csrf filter, check that token from header and from cookie match. Otherwise, redirect to error page with HTTP 403 status</span></li><li><code>org.springframework.security.web.csrf.CookieCsrfTokenRepository</code> class : <span style="color:white;background-color:white;"> used for CSRF token repository strategy (session, cookie, ...) </span></li><li><code>org.springframework.security.config.annotation.web.configurers.CsrfConfigurer</code> class : <span style="color:white;background-color:white;"> Adds CSRF protection for the methods (uses antMatchers)</span></li></ul>',10);function m(y,_){const t=r("ExternalLinkIcon");return s(),i(n,null,[u,h,e("p",null,[f,e("strong",null,[e("a",w,[k,a(t)])])]),g],64)}var T=p(d,[["render",m]]);export{T as default};
