# CSRF - Cross-Site Request Forgery

## CSRF in a nutshell

CSRF is an attack where a malicious website causes a logged-on user’s web browser to perform an unwanted action on a trusted site.

Source: https://owasp.org/www-community/attacks/csrf

## Why CSRF is dangerous ?

A successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

## What are CSRF famous real life cases ?

- **TikTok** : In 2020, a vulnerability that allowed attackers to send messages containing malware to Tiktok users. The attackers could perform CSRF or cross-site scripting (XSS) attacks, causing other user accounts to submit requests on their behalf to the TikTok application.

Source: https://www.zdnet.com/article/tiktok-patches-reflected-xss-bug-one-click-account-takeover-exploit/

- **Netflix** : In 2006, Netflix website had numerous vulnerabilities regarding CSRF, which could have allowed any attacker to perform actions such as adding a DVD to the victim’s rental queue, changing the shipping address on the account, or altering the victim’s login credentials to fully compromise the account.

Source:  https://appsecnotes.blogspot.com/2009/01/netflix-csrf-revisited.html

- **ING Direct** : In 2008, ING Direct, the banking website of a Dutch-owned multinational banking group, had a CSRF vulnerability that allowed attackers to transfer money from users’ accounts, even though users were authenticated with SSL. The website did not have any protection against CSRF attacks, and the process of transferring funds was easy for attackers to see and replicate. 

Source: https://people.eecs.berkeley.edu/~daw/teaching/cs261-f11/reading/csrf.pdf

## What makes CSRF attacks possible ?

Browser requests automatically include all cookies including session cookies. The attackers use social engineering to trick users which browsers cannot distinguish between legitimate authorized requests and forged authenticated requests.

## How do I know if my application is vulnerable to CSRF ?

The best ways to detect if you CSRF attacks are possible in your application are to perform pentests or a **DAST** scan.

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

Source: https://owasp.org/www-community/attacks/csrf

## What can I do to continuously prevent CSRF attacks ?

- Use built-in CSRF protection in your Framework. Check the Security Hardening by Framework section bellow.
- CSRF prevention needs to be done on both client (front-end) and server (back-end) side:
 TO_DO add table here
  
- Apply OWASP CSRF prevention cheat sheet
- Use sonarLint in your IDE in order to alert on vulnerable code while you are developing. 
  
- Request code reviews from aknowledged Security Reviewers in your team.
  
- Scan your code with automated code analysis tools like SonarQube in your merge requests and prevent pushing any vulnerable code in your application.
  
- Perform regular SAST scans of your code with SonarQube and fix the vulnerabilities raised.
  
- Perform regular penetration testing with DAST tools like OWASP ZAP and fix the findings.

## What are the defense mechanisms against CSRF available in Angular ?

### Built-in prevention

Angular has a built-in CSRF prevention mechanism called cookie-to-header token.

### cookie-to-header workflow

1. The server-side program sends a random CSRF token in a cookie for each request.
2. Angular reads the token from the cookie.
3. Angular sends the cookie in the headers for each request.
4. Server compares the token received from the client.
5. Server decides to verify the action only if the tokens match.
 TO_DO add image/diagram
::: warning
CSRF prevention needs to be implemented in both your server (back-end) side, and your client (front-end) side.

As Angular provides solution as a client, you must investigate your back-end framework in order to generate and handle the random CSRF token.
:::

### Enabling CSRF in Angular

Use HttpClientXsrfModule in the import section of the module where your components are declared.

You can customize the cookie and header name with the withOptions method.

The CSRF module implements the default interceptor HttpXsrfInterceptor