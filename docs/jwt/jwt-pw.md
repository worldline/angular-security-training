# 1.6 XSS Practical Work

![pw](../assets/uncle-pw.png)


1 - In app/src/services/auth/auth-jwt.service.ts, implement the "authenticateSuccess" function by following the comments

2 - Implement HttpInterceptor "app/src/services/auth/auth-jwt.interceptor.ts" in order to send the JWT via the Authorization request header

3 - Make sure that the JWT controller filter is active - See /bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java

4 - Test the JWT authentication : http://localhost:4200/#/login - Check that the JWT is stored in client storage
