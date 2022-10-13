# 2.3 CSRF Defense Best Practices

## What are the primary defense mechanisms against CSRF ?

### Synchronizer Tokens

- **Description**: The server adds a request parameter to each form, assigning the field a different random value for each session (or for each request.) The server confirms that each subsequent request has this field and that its value matches the one assigned for the session.
- **Token type**: Random
- **Strategy**: Stored in HTTP session and sent as request parameter.
- **Server-side validation**: Session token against request parameter.

### Double-Submitted Cookie

- **Description**: The random token value is saved in a cookie on the client. Every subsequent request must include the same value in a request parameter. On each request the server confirms that the request parameter is present and that its value matches that in the cookie.
- **Token type**: Random
- **Strategy**: Sent as a cookie and request parameter.
- **Server-side validation**: Cookie token against request parameter.

### Custom Request Header

- **Description**: Using a custom header works as a defense because only JavaScript can create custom headers, and the browser’s single-origin policy (SOP) blocks cross-site JavaScript calls.
- **Token type**: No matter.
- **Strategy**: Sent as Request header.
- **Server-side validation**: Check request header exists.

### Encrypted Token

- **Description**: Encrypting the token value using a private key known only on the server. The encrypted value should be a time stamp. Validate subsequent requests by confirming that each contains the request parameter, that you can decrypt the field value, that the decrypted value is a timestamp, and that the timestamp has not expired.
- **Token type**: Signed/ Encrypted
- **Strategy**: Sent as Request header.
- **Server-side validation**: Check request header exists.

::: warning
XSS Attacks can defeat any CSRF protection even if it perfectly implemented !

XSS attackers can retrieve your tokens from the user's browser if your application is not protected.

**Solid XSS prevention is a mandatory prerequisite for CSRF defenses.**
:::

## What are the bad misconceptions about CSRF defenses ?

Here are some myths which unfortunately will not save your application from CSRF attacks:

- **Using a secret cookie:** even secret cookies are submitted with every request The authentication tokens will be submitted in any case !
- **Only accepting POST requests:** Attackers have numerous methods to trick a victim into submitting a forged POST request.
- **Multi-Step transactions:** Attackers can always predict and deduce transaction steps.
- **URL rewriting:** The session cookie is exposed in the url which introduces another security flaw.
- **HTTPS alone** does nothing to defend against CSRF by itself.
- **http_only** session cookie will not protect you from CSRF.
- **JSON APIs** are also vulnerable to CSRF attacks.
- **Same-site Cookie Attribute** can be useful against CSRF but not sufficient by itself because it is not support by all browsers allowing attackers to bypass it.

## What can I do to continuously prevent CSRF attacks ?

- Use built-in CSRF protection in your Framework. Check the Security Hardening by Framework section bellow.
- CSRF prevention needs to be done on both client (front-end) and server (back-end) side:
  
  - Server side prevention measures:
    
    - Reject requests that have mismatched CSRF cookie/header.
    - Send a randomly generated CSRF cookie to the client (cannot be http_only).
    - Use CORS to prevent cross-origin AJAX from untrusted pages.
   
  - Client side prevention measures: 
 
    - Send the CSRF value for each request.
    - Send a matching header with each request.
  
- Apply [OWASP CSRF prevention cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
  
- Use sonarLint in your IDE in order to alert on vulnerable code while you are developing. 
  
- Request code reviews from acknowledged Security Reviewers in your team.
  
- Scan your code with automated code analysis tools in your merge requests and prevent pushing any vulnerable code in your application.
  
- Perform regular SAST scans of your code and fix the vulnerabilities raised.
  
- Perform regular penetration testing with DAST tools like OWASP ZAP and fix the findings.
