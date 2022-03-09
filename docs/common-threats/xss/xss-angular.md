# 2.2.3 XSS Protection in Angular

## What are the XSS defense mechanisms available in Angular ?

### Angular Built in defense

The good news is that Angular treats all users inputs as untrusted data by default.

Therefore, it has an XSS defense by default.

### Contextual escaping

*insert image here*

Angular displays any input (malicious or not) as plain text on your webpage.

It won't interpret the input as HTML (for example in comments) if you don't explicitly tell him to.

### Input Sanitization

Use angular properties to bind user inputs:

- `[innerHtml]`: binds html tags
- `[style]`: binds CSS attributes
- `[href]`: binds dynamic links

Angular will interpret the bound inputs if you explicitly use the corresponding property.

Angular automatically recognizes `<script>` tags as unsafe and removes it. A warning appears in the browser console to notify you if Angular has sanitized an input value.

##Further resources

https://owasp.org/www-community/attacks/xss/
