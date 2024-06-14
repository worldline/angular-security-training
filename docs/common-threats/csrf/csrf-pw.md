# 2.5 CSRF Practical Work

![pw](../../assets/pw-coding.png)

Practical Work Web-Application directory : **[pw/pw-csrf](https://github.com/worldline/angular-security-training/tree/main/pw/pw-csrf)**

1 - Enable and configure the csrf server-side protection 
- declare the csrf protection in `/server/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java`
- use cookie strategy
- make sure the cookie is NOT `HttpOnly`

- Hint : <span style="color:white; background-color:white"> HttpSecurity#csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())</span>

2 - Test the CSRF server-side protection 
- in "Home" page, add a "news" : analyze request and response's headers using the client Firefox Browser Network Monitor , what do you notice ? 
- Hint : <span style="color:white; background-color:white">  verify that expected cookies (XSRF-TOKEN) is set and client-side header (X-XSRF-Token) is missing </span>
  
3 - Notice the csrf client-side protection 

- in "Home" page, add a "news" : analyze request and response's headers using the client Firefox Browser Network Monitor , what do you notice ? 
  
  - Hint : <span style="color:white; background-color:white">  verify that expected cookies (XSRF-TOKEN) is set and client-side header (X-XSRF-Token) is set with the same value </span>

4 - Test the CSRF protection
- Try to forge a request : use a curl command on  `http://localhost:8080/api/news/like/8` (use Firefox Browser Network Monitor, right-click on the request ("Add" a like on a news to see the request), "select copy for curl", then, execute the command in a shell)
Explain the result ?  How can we change this result ?
  
    - Hint : <span style="color:white; background-color:white"> it's ok as far as you post the header and the cookie with same token - if we modify one of the token values or remove it, we get forbidden access to the page because the CsrfFilter</span>
- Do the same for `http://localhost:8080/api/news` GET request and modify CSRF tokens and explain the result.

    - Hint : <span style="color:white; background-color:white"> Angular doesn't send X-XSRF-TOKEN for GET or HEAD methods (see github.com/angular/angular/blob/5.2.8/packages/common/http/src/xsrf.ts#L81).Also, at server-side level, GET requests are allowed by default (see CsrfFilter#DefaultRequiresCsrfMatcher) </span>
  
5 - Try to understand the spring implementation of the csrf protection. Take a look at the following source files : 
- `org.springframework.security.web.csrf.CsrfFilter` class : <span style="color:white; background-color:white"> the csrf filter, check that token from header and from cookie match. Otherwise, redirect to error page with HTTP 403 status</span>
- `org.springframework.security.web.csrf.CookieCsrfTokenRepository` class : <span style="color:white; background-color:white"> used for CSRF token repository strategy (session, cookie, ...) </span>
- `org.springframework.security.config.annotation.web.configurers.CsrfConfigurer` class : <span style="color:white; background-color:white"> Adds CSRF protection for the methods  (uses antMatchers)</span>
