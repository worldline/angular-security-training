# 3.1 Template Injection Overview

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

