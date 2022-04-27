# 8.2 CSP Defense

## What are the risks of CSP ?

As shown in the overview section, there are many policies available to setup and maintain for your CSP.
This raises a high risk of policies misconfiguration which can lead to unavailability of some features of your application.
In this situation, teams become too lazy to bother about maintaining the policies and fall in the risk of using too permissive policies.

## How to implement CSP in real life ?

For sensitive web applications, you want to make sure that only the resources you've written yourself can be loaded with CSP.
In case of whitelist strategy, you can use a lockdown approach by starting with a default policy that blocks absolutely everything :  `default-src 'none'` and build up your white list from there.
In case of strict-dynamic strategy, you need to refactor your javascript code, include nonce generation in your application and add the nonce attribute to all your script tags.

In either case, it is highly recommended testing your CSP in report only mode(`report-uri` or `report-to`) during a certain period first and resolve the alerts before applying the CSP. Also, use the same CSP in all your environments (tests and production) in order to avoid incompatibility incidents.
[This page](https://github.com/nico3333fr/CSP-useful/blob/master/csp-wtf/explained.md) can help you analyse CSP notifications that may be difficult to understand.

To learn further:
[OWASP CSP setup guide book](https://owasp.org/www-pdf-archive//2019-02-22_-_How_do_I_Content_Security_Policy_-_Print.pdf)
