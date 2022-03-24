# SSTI Protection in Angular

**Angular** offers ahead-of-time **AOT compilation** which turns the application into executable code:

- Compiler is not even available anymore in the browser.
- Data bindings are already resolved, and encoded into the JS.
- Prevents you to dynamically generate template code.

![ssti-aot](../../assets/ssti-aot.png)

**AOT compilation** effectively stops template injection attacks:

- At the moment of injection, the application is already compiled.
- The injected code will simply be rendered, not executed.