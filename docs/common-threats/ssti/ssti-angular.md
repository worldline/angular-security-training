# 4.3 SSTI Protection in Angular

Angular templates are trusted by default and should be treated as executable code.

::: warning
Never generate templates by adding user inputs to template syntax !

It will expose your application to XSS attacks and enable attackers to inject arbitrary code.

If you really need to generate templates with users inputs, you must always use the AOT template compiler in production deployments.
:::

**Angular** offers ahead-of-time **AOT compilation** which turns the application into executable code:

- Compiler is not even available anymore in the browser.
- Data bindings are already resolved, and encoded into the JS.
- Prevents you to dynamically generate template code.

![ssti-aot](../../assets/ssti-aot.png)

**AOT compilation** effectively stops template injection attacks:

- At the moment of injection, the application is already compiled.
- The injected code will simply be rendered, not executed.

Another alternative is JIT compiler which compiles templates to executable template code within the browser runtime.