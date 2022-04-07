# 6.3 Unprotected API Practical Work

![pw](../../assets/uncle-pw.png)

## Part 1

For this PW, we need to have an authentication process. So, we recommend implementing/use the JWT authentication before starting.
You can get the JWT OAuth implementation from the previous PW-JWT-OAuth  : `git clone -b PW-JWT-OAuth TO_DO /secure-angular-training-app.git`

1 - Protect your API - Add server-side protection for the following actions :
- Unauthenticated users have access to the news API (/api/news/**)
- Only "Admin" profile can delete a news (authenticated user with `ROLE_ADMIN` role)
- Only "User" profile can add news (authenticated user with `ROLE_USER` role)
- Any authenticated user can "like" news

Hints : 
- use spring security annotation `org.springframework.security.access.annotation.Secured` to protect your REST endpoints
- Check existing roles in `/bookstore/src/main/resources/config/liquibase/authorities.csv` file
- for a global setting, use the `org.springframework.security.config.annotation.web.builders.HttpSecurity` in `SecurityConfiguration#configure` method
- More details on spring security api : `https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#jc-method`

2 - Protect the GUI  - Adapt client-side according to server-side protection:

- Unauthenticated users have access to the news API (/api/news/**)
- Only "Admin" profile can delete a news (authenticated user with `ROLE_ADMIN` role)
- Only "User" profile can add news (authenticated user with `ROLE_USER` role)
- Any authenticated user can "like" news

Hints : 
- in `src/app/services/auth/principal.service.ts`, declare implement functions `isAdmin` and `isUser` (check roles from authorities list of "this._identity" attribute)
- in home.html, use `ngIf` directive and previous functions to hide portions of template
- declare `principal` service in constructor as public in home.ts to make it accessible from home.html
- don't forget to `ng build` the frontend (and 'mvn' the backend) after any modification (no live reloading for this PW)


## Part 2

Configure CORS

1 - Protect your API against other domains:

CORS is effective only in case of cross-origin requests, to simulate a cross-origin request:
    
    
- Modify app/src/services/newsService.ts, in `getNews()` function, update the existing request `api/news`
    - Use an absolute url with the port 8080
    - Explicit the `Content-Type` header for the request
    - Stop using a proxy (`ng serve --proxy-config proxy.conf.json`) if any and launch `ng build` command to update the `dist` repo (needed for the next steps)
      
Hint : to set a header for a request, use a Headers object and pass it as a second param of the http#get method
``` typescript     
let headers = new Headers({'Content-Type': 'application/json'});
return this.http.get(_url_, {headers: headers}) 
```    

- Launch a second server in a different port : `mvn -Drun.arguments="--server.port=9000"` and access to corresponding home page `http://localhost:9000/#/home`
  
- What's the result ? Why ? Observe the client console. 
  
Hint : Read about Single Origin Policy(SOP)

2 - Allow cross-origin requests

- Configure CORS in order to allow cross-origin request from localhost only (choose the right port)
  
- Observe the network traffic - Look for CORS headers for the `api/news` request/response
  
Hint : 
- To enable CORS, see bookstore/src/main/resources/config/application.yml 
  
- To authorize an HTTP method for an API, use  `HttpSecurity#authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll() `
