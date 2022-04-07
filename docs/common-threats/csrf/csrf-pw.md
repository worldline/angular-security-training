# 2.5 CSRF Practical Work

![pw](../../assets/uncle-pw.png)

1 - Enable and configure the csrf protection server-side
- declare the csrf protection in `/bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java`
- use cookie strategy
- make sure the cookie is NOT `HttpOnly`

2 - Test the CSRF protection
- in "Home" page, add a "news" : analyze request and response's headers, verify that expected cookies (`XSRF-TOKEN`) and headers (`X-XSRF-Token`) are set (use a client debugger)
- Try to forge a request : use a curl command on  `http://localhost:8080/api/news/like/8` (use firefox client debugger, right click on the request ("Add" a like on a news to see the request), "select copy for curl", then, execute the command in a shell)
Explain the result ?  How can we change this result ?
- Do the same for `http://localhost:8080/api/news` and modify CSRF tokens and explain the result.
  
Hint : Try to understand the spring implementation of the csrf protection. Take a look at the following source files : 
- `org.springframework.security.web.csrf.CsrfFilter` class
- `org.springframework.security.web.csrf.CookieCsrfTokenRepository` class
- `org.springframework.security.config.annotation.web.configurers.CrsfConfigurer` class
