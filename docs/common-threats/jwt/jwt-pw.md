# 1.6 JWT Practical Work

![pw](../../assets/uncle-pw.png)

Practical Work Web-Application directory : **pw/pw-jwt**

1 - In `app/src/services/auth/auth-jwt.service.ts`, implement the `authenticateSuccess` function by following the comments.

2 - Implement HttpInterceptor "app/src/services/auth/auth-jwt.interceptor.ts" in order to send the JWT via the Authorization request header

3 - Make sure that the JWT configurer is active - See `/bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java`

4 - Test the JWT authentication : http://localhost:4200/#/login 
- Check that the JWT is stored in client storage
- Check the JWT after login process in the response header and then in all following request headers.
- Decode the token in https://jwt.io/

5 - Suggest how to improve the jwt security
