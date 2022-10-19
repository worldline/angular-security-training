# 1.3 JWT Storage

Storing the JWT in localStorage or sessionStorage will expose your application to XSS attacks.

## Using Cookies for JWT storage

Using cookies is the best way to store safely your JWT. 
This tactic can be vulnerable to CSRF though.
Therefore, you need to ensure to set `SameSite=strict` and `httpOnly` flag for JWT authentication cookies.
Also, enable the CSRF defense mechanisms provided by your framework.
