# CSP implementation

For sensitive web applications like banking sites, you want to make sure that only the resources you've written yourself can be loaded with CSP.
In this use case, you can use a lockdown approach by starting with a default policy that blocks absolutely everything :  `default-src 'none'` and build up your white list from there. 