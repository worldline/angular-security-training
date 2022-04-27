# 3. Global recommendations


- Use the latest Angular possible
- Use Angular built-in protection (CSRF, XSS, JSON hijacking)
- Use/recommend using recent browsers (CSP3 support, subresource integrity, “SameSite” cookie attribute, …)
- Do not mix client and server templates
- Don’t trust user-provided content  (don’t bypass sanitization)
- Consider using CSP and anti-XSS HTTP headers (but don't rely only on CSP)
- Consider using JWT for authentication.
- Do not trust 3rd party components (Retire.JS, «Subresource integrity» browser feature)
- Always treat all data read from localStorage/sessionStorage as untrusted user input.
- Angular Security guidelines : [https://docs.angularjs.org/guide/security](https://docs.angularjs.org/guide/security) & [https://angular.io/docs/ts/latest/guide/security.html](https://angular.io/docs/ts/latest/guide/security.html)
