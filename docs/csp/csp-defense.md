# CSP Defense

## What are the risks of CSP ?

As shown in the overview section, there are many policies available to setup and maintain for your CSP.
This raises a high risk of policies misconfiguration which can lead to unavailability of some features of your application.
In this situation, teams become too lazy to bother about maintaining the policies and fall in the risk of using too permissive policies.

## How to implement CSP in real life ?

For sensitive web applications like banking sites, you want to make sure that only the resources you've written yourself can be loaded with CSP.
In this use case, you can use a lockdown approach by starting with a default policy that blocks absolutely everything :  `default-src 'none'` and build up your white list from there.

[csp setup guide book](https://owasp.org/www-pdf-archive//2019-02-22_-_How_do_I_Content_Security_Policy_-_Print.pdf)
