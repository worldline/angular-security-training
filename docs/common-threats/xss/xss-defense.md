# 2.1.4 XSS Defense Best Practices

## What can I do to prevent XSS ?

- Use frameworks that natively escape XSS by design.
- Sanitize all users inputs. Sanitization is the inspection of an untrusted value, turning it into a value that is safe to use in the DOM.
- Apply [OWASP XSS prevention rules](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#xss-prevention-rules)
- Use SAST in your IDE in order to alert on vulnerable code while you are developing.
- Request code reviews from acknowledged Security Reviewers in your team.
- Scan your code with automated code analysis tools in your merge requests and prevent pushing any vulnerable code in your application.
- Perform regular SAST scans of your code and fix the vulnerabilities raised.
- Perform regular SCA scans of your dependencies with Dependency Track and fix the vulnerabilities raised.
- Perform regular penetration testing with DAST tools like OWASP ZAP and fix the findings.

https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)