# 4.3 CSP in Angular

Angular suggests completing their built-in XSS prevention with the following:

- Use Content-Security-Policy HTTP header:
  We recommend you to use strict CSP instead of allow-list CSP as it is more effective and does not need customization.
  You can choose to use Nonce-based strict CSP or Hash-based strict CSP.

``` typescript
Content-Security-Policy:
  script-src 'nonce-{RANDOM}' 'strict-dynamic';
  object-src 'none';
  base-uri 'none';
```
``` typescript
Content-Security-Policy:
  script-src 'sha256-{HASHED_INLINE_SCRIPT}' 'strict-dynamic';
  object-src 'none';
  base-uri 'none';
```
Note that using these headers requires you to refactor code that is not compatible with CSP

To learn further please check this page: [web.dev/strict-csp/](https://web.dev/strict-csp/)

- Use [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/#introduction) (an API that allows applications to lock down DOM-XSS injection sinks to only accept non-spoofable, typed values in place of strings) by configuring your web server to emit HTTP headers with one of the following Angular policies:

    - `angular`  This policy is used in security-reviewed code that is internal to Angular, and is required for Angular to function when Trusted Types are enforced. Any inline template values or content sanitized by Angular is treated as safe by this policy.

        ``` typescript
        Content-Security-Policy: 
            trusted-types angular; 
            require-trusted-types-for 'script';
        ```
    - `angular#unsafe-bypass` - This policy is used for applications that use any of the methods in Angular DomSanitizer that bypass security, such as `bypassSecurityTrustHtml`. Any application that uses these methods must enable this policy.
        ``` typescript
        Content-Security-Policy: 
            trusted-types angular angular#unsafe-bypass; 
            require-trusted-types-for 'script';
        ```
    - `angular#unsafe-jit`  This policy is used by the JIT compiler. You must enable this policy if your application interacts directly with the JIT compiler or is running in JIT mode using the platform browser dynamic.
        ``` typescript
        Content-Security-Policy: 
            trusted-types angular angular#unsafe-jit; 
            require-trusted-types-for 'script';
        ```