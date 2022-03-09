# 2.1.4 CSRF Defense Best Practices

## What are the primary defense mechanisms against CSRF ?

::: tip
The most robust defense against CSRF is to make the contents of each request unpredictable using randomly generated Tokens.
:::

TO_DO add table

::: warning
XSS Attacks can defeat any CSRF protection even if it perfectly implemented !

XSS attackers can retrieve your tokens from the user's browser if your application is not protected.

Solid XSS prevention is a mandatory prerequisite for CSRF defenses.
:::

## What are the bad misconceptions about CSRF defenses ?

Here are some myths which unfortunately will not save your application from CSRF attacks:

- **Using a secret cookie:** even secret cookies are submitted with every request The authentication tokens will be submitted in any case !
- **Only accepting POST requests:** Attackers have numerous methods to trick a victim into submitting a forged POST request.
- **Multi-Step transactions:** Attackers can always predict and deduce transaction steps.
- **URL rewriting:** The session cookie is exposed in the url which introduces another security flaw.
- **HTTPS alone** does nothing to defend against CSRF by itself.
- **http_only** session cookie will not protect you from CSRF
- **JSON APIs** are also vulnerable to CSRF attacks
- **Samesite Cookie Attribute** can be useful against CSRF but not sufficient by itself because it is not support by all browsers and can be bypassed by attackers.

## What can I do to continuously prevent CSRF attacks ?

- Use built-in CSRF protection in your Framework. Check the Security Hardening by Framework section bellow.
- CSRF prevention needs to be done on both client (front-end) and server (back-end) side:
 TO_DO add table here
  
- Apply OWASP CSRF prevention cheat sheet
- Use sonarLint in your IDE in order to alert on vulnerable code while you are developing. 
  
- Request code reviews from acknowledged Security Reviewers in your team.
  
- Scan your code with automated code analysis tools like SonarQube in your merge requests and prevent pushing any vulnerable code in your application.
  
- Perform regular SAST scans of your code with SonarQube and fix the vulnerabilities raised.
  
- Perform regular penetration testing with DAST tools like OWASP ZAP and fix the findings.
