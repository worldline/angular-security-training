# 2.2.4 XSS Protection in Angular

## What are the XSS defense mechanisms available in Angular ?

### Angular Built in defense

The good news is that Angular treats all users inputs as untrusted data by default.

Therefore, it has an XSS defense by default.

### Contextual escaping

![xss-contextual-escaping](../../assets/xss-contextual-escaping.png)

Angular displays any input (malicious or not) as plain text on your webpage.

It won't interpret the input as HTML (for example in comments) if you don't explicitly tell him to.

### Input Sanitization

![xss-contextual-escaping](../../assets/xss-input-sanitazation.png)

Use angular properties to bind user inputs:

- `[innerHtml]`: binds html tags
- `[style]`: binds CSS attributes
- `[href]`: binds dynamic links

Angular will interpret the bound inputs if you explicitly use the corresponding property.

Angular automatically recognizes `<script>` tags as unsafe and removes it. A warning appears in the browser console to notify you if Angular has sanitized an input value.

### Input Sanitization Bypassing

::: warning
:warning: Use with care :warning:
:::

Sometimes application need to include executable code, display an iframe from an url or construct potentially dangerous urls...

:warning: You must discuss this use case with your Security Officer before going further. :warning:

If you really need to use validated user input in your application, you must mark it as trusted input.

You can use the byPassSecurityTrust...() functions from the DomSanitizer class:

``` typescript
abstract class DomSanitizer implements Sanitizer {
  abstract sanitize(context: SecurityContext, value: string | SafeValue): string | null
  abstract bypassSecurityTrustHtml(value: string): SafeHtml
  abstract bypassSecurityTrustStyle(value: string): SafeStyle
  abstract bypassSecurityTrustScript(value: string): SafeScript
  abstract bypassSecurityTrustUrl(value: string): SafeUrl
  abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl
}
```

### Templates

Angular templates are trusted by default and should be treated as executable code.

::: warning
Never generate templates by adding user inputs to template syntax !

It will expose your application to XSS attacks and enable attackers to inject arbitrary code.


:warning:You must discuss this use case with your Security Officer before going further.:warning:

If you really need to generate templates with users inputs, you must always use the AOT template compiler in production deployments.
:::

### Further protection

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
To learn further please check this page: https://web.dev/strict-csp/

- Use Trusted Types by configuring your web server to emit HTTP headers with one of the following Angular policies:
  
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

- Use the AOT template compiler for all production deployments. Another alternative is JIT compiler which compiles templates to executable template code within the browser runtime.

##Further resources

https://owasp.org/www-community/attacks/xss/
