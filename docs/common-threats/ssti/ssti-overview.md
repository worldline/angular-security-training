# 3.1 SSTI Overview

## SSTI in a nutshell

Server-Side Template Injection is an attack where a malicious payload is injected into a template which is then executed server-side.

## What are Templates ?

Templates allow to pre-populate dynamic data from the server into a web page.
Web pages coming from web templates can structure the component of web pages in such a way that can be modified independently of each other.
Templates are commonly used for:
- Displaying information about users (username, bio...), products, companies.
- Sending bulk emails.
- Displaying a gallery of photos or videos.

Example:

``` typescript
Hello {{user.name}}
```

## Expression Sandbox

Expression Sandbox is a mechanism that checks Angular expressions inside {{}}

- Expressions are evaluated in your html. For example, {{1+1}} renders at 2.
- To support the basic logic that is necessary to be able to render the user interface.
- Allows a limited subset of JavaScript inside templates / prevent accessing global objects (window, ...)

::: warning
Expression Sandbox is not intended for security purpose, but developers tend to use it as a secure sandbox (which is not!)
:::

## Template Injection using Expression Sandbox

This attack exploits vulnerable expression sandbox as shown in this example:

``` typescript
<p> Welcome
{{constructor.constructor('alert(1)')}}
</p>
```
![template-injection-example](../../assets/template-injection-example.png)

