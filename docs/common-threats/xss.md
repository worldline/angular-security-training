# 2.2 XSS - Cross Site Scripting

## XSS in a nutshell

Malicious script entered a web application by an attacker through a web request.

The script is included in dynamic content that is reflected back to the victim's web browser without validation for malicious content.

## Why is XSS dangerous ?

The impact of XSS is moderate for reflected and DOM XSS, and severe for stored XSS, with remote code execution on the victim’s browser, such as stealing credentials, sessions, MFA bypass, DOM node replacement or defacement (such as trojan login panels), key logging or delivering malware to the victim.

## What causes XSS ?

This attack happens mostly because the web application or API uses inputs from any users within the output it generates without proper validation or encoding.

## How XSS attacks happen ?

| XSS type                  | Description                                                                                                        |  Payload type                  |  Payload Examples | Real cases                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------|-------------------|-------------------------------------------------------------------------------------------------|
| Reflected                 | Reflected in web server as an error message, search result or any input sent to the server as part of the request. | From request parameter.        |                   |https://www.techspot.com/news/78304-epic-games-weaknesses-check-point-hack-fortnite-accounts.html|
| Stored                    | Injected script is permanently stored in target servers.                                                           | Stored server-side.            |                   |https://www.vice.com/en/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever        |
| DOM based                 | Modifying the DOM environment in the victim browser.                                                               | Introduced by DOM modification.|                   |https://www.neuralegion.com/blog/dom-based-xss/                                                  |
| Mutation                  | ?                                                                                                                  | Mutated by browser.            |                   |                                                                                                 |
| Blind Cross-Site scripting| Script is saved on server side and reflected back in the backend application.                                      |                                |                   |https://samcurry.net/cracking-my-windshield-and-earning-10000-on-the-tesla-bug-bounty-program/   |


## Is my application vulnerable to XSS ?

XSS vulnerabilities are difficult to identify and completely be removed from web applications or API.

DAST tools such as OWASP ZAP can scan your application and help you detect these XSS flaws.

## What can I do to prevent XSS ?

- Use frameworks that natively escape XSS by design.
- Sanitize all users inputs. Sanitization is the inspection of an untrusted value, turning it into a value that is safe to use in the DOM.
- Apply OWASP XSS prevention rules
- Use sonarLint in your IDE in order to alert on vulnerable code while you are developing.
- Request code reviews from acknowledged Security Reviewers in your team.
- Scan your code with automated code analysis tools like SonarQube in your merge requests and prevent pushing any vulnerable code in your application.
- Perform regular SAST scans of your code with SonarQube and fix the vulnerabilities raised.
- Perform regular SCA scans of your dependencies with Dependency Track and fix the vulnerabilities raised.
- Perform regular penetration testing with DAST tools like OWASP ZAP and fix the findings.

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

- **[innerHtml]**: binds html tags
- **[style]**: binds CSS attributes
- **[href]**: binds dynamic links

Angular will interpret the bound inputs if you explicitly use the corresponding property.

Angular automatically recognizes <script> tags as unsafe and removes it. A warning appears in the browser console to notify you if Angular has sanitized an input value.

##Further resources

https://owasp.org/www-community/attacks/xss/
https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)