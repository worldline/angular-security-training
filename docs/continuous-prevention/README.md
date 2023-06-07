# 4. Global recommendations

- Use Angular built-in protection (CSRF, XSS, JSON hijacking)
- Recommend your users to have recent browsers (CSP3 support, subresource integrity, “SameSite” cookie attribute, …)
- Do not mix client and server templates.
- Do not trust user-provided content without proper sanitization.
- Consider using CSP as a defense in depth.
- Consider using JWT for authentication.
- Do not blindly trust 3rd party components (audit, «Subresource integrity» browser feature)
- Always treat all data read from localStorage/sessionStorage as untrusted user input.
- Review Angular Security guidelines at each new version: [https://angular.io/guide/security](https://angular.io/guide/security)
