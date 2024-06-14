import{r as n,o,c as a,a as e,e as i,F as l,d as t,b as s}from"./app.d2e07122.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t('<h1 id="_2-3-csrf-defense-best-practices" tabindex="-1"><a class="header-anchor" href="#_2-3-csrf-defense-best-practices" aria-hidden="true">#</a> 2.3 CSRF Defense Best Practices</h1><h2 id="what-are-the-primary-defense-mechanisms-against-csrf" tabindex="-1"><a class="header-anchor" href="#what-are-the-primary-defense-mechanisms-against-csrf" aria-hidden="true">#</a> What are the primary defense mechanisms against CSRF ?</h2><h3 id="synchronizer-tokens" tabindex="-1"><a class="header-anchor" href="#synchronizer-tokens" aria-hidden="true">#</a> Synchronizer Tokens</h3><ul><li><strong>Description</strong>: The server <strong>adds a request parameter to each form</strong>, assigning the field a different <strong>random value for each session</strong> (or for each request.) The server <strong>confirms that each subsequent request has this field</strong> and that its <strong>value matches</strong> the one assigned for the session.</li><li><strong>Token type</strong>: Random</li><li><strong>Strategy</strong>: Stored in <strong>HTTP session</strong> and sent as request parameter.</li><li><strong>Server-side validation</strong>: Session token against request parameter.</li></ul><h3 id="double-submitted-cookie" tabindex="-1"><a class="header-anchor" href="#double-submitted-cookie" aria-hidden="true">#</a> Double-Submitted Cookie</h3><ul><li><strong>Description</strong>: The random token value is saved in a <strong>cookie on the client</strong>. Every subsequent request <strong>must include the same value</strong> in a request parameter. On each request the server confirms that the request <strong>parameter is present</strong> and that its <strong>value matches</strong> that in the cookie.</li><li><strong>Token type</strong>: Random</li><li><strong>Strategy</strong>: Sent as a <strong>cookie</strong> and request parameter.</li><li><strong>Server-side validation</strong>: Cookie token against request parameter.</li></ul><h3 id="custom-request-header" tabindex="-1"><a class="header-anchor" href="#custom-request-header" aria-hidden="true">#</a> Custom Request Header</h3><ul><li><strong>Description</strong>: Using a custom header works as a defense because <strong>only JavaScript can create custom headers</strong>, and the browser\u2019s single-origin policy (SOP) <strong>blocks cross-site JavaScript calls</strong>.</li><li><strong>Token type</strong>: No matter.</li><li><strong>Strategy</strong>: Sent as <strong>Request header</strong>.</li><li><strong>Server-side validation</strong>: Check request header exists.</li></ul><h3 id="encrypted-token" tabindex="-1"><a class="header-anchor" href="#encrypted-token" aria-hidden="true">#</a> Encrypted Token</h3><ul><li><strong>Description</strong>: Encrypting the token value using a <strong>private key</strong> known only on the server. The encrypted value should be a <strong>time stamp</strong>. Validate subsequent requests by confirming that each contains the request parameter, that you can <strong>decrypt</strong> the field value, verify the <strong>decrypted value is a timestamp</strong>, and that the <strong>timestamp has not expired</strong>.</li><li><strong>Token type</strong>: Signed/ Encrypted</li><li><strong>Strategy</strong>: Sent as <strong>Request header</strong>.</li><li><strong>Server-side validation</strong>: Check request header exists.</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>XSS Attacks</strong> can defeat any CSRF protection <strong>even if CSRF protection is perfectly implemented</strong> !</p><p>XSS attackers can retrieve your tokens from the user&#39;s browser if your application is not protected.</p><p><strong>Solid XSS prevention is a mandatory prerequisite for CSRF defenses.</strong></p></div><h2 id="what-are-the-bad-misconceptions-about-csrf-defenses" tabindex="-1"><a class="header-anchor" href="#what-are-the-bad-misconceptions-about-csrf-defenses" aria-hidden="true">#</a> What are the bad misconceptions about CSRF defenses ?</h2><p>Here are some myths which unfortunately will not save your application from CSRF attacks:</p><ul><li><strong>Using a secret cookie:</strong> even secret cookies are submitted with every request The authentication tokens will be submitted in any case !</li><li><strong>Only accepting POST requests:</strong> Attackers have numerous methods to trick a victim into submitting a forged POST request.</li><li><strong>Multi-Step transactions:</strong> Attackers can always predict and deduce transaction steps.</li><li><strong>URL rewriting:</strong> The session cookie is exposed in the url which introduces another security flaw.</li><li><strong>HTTPS alone</strong> does nothing to defend against CSRF by itself.</li><li><strong>http_only</strong> session cookie will not protect you from CSRF.</li><li><strong>JSON APIs</strong> are also vulnerable to CSRF attacks.</li><li><strong>Same-site Cookie Attribute</strong> can be useful against CSRF but not sufficient by itself because it is not support by all browsers allowing attackers to bypass it.</li></ul><h2 id="what-can-i-do-to-continuously-prevent-csrf-attacks" tabindex="-1"><a class="header-anchor" href="#what-can-i-do-to-continuously-prevent-csrf-attacks" aria-hidden="true">#</a> What can I do to continuously prevent CSRF attacks ?</h2>',15),g=t("<li><p>Use built-in CSRF protection in your <strong>Framework</strong>. Check the Security Hardening by Framework section bellow.</p></li><li><p>CSRF prevention needs to be done on <strong>both client</strong> (front-end) and <strong>server</strong> (back-end) side:</p><ul><li><p>Server side prevention measures:</p><ul><li><strong>Reject</strong> requests that have <strong>mismatched</strong> CSRF cookie/header.</li><li>Send a <strong>randomly</strong> generated CSRF cookie to the client (cannot be http_only).</li><li>Use <strong>CORS</strong> to prevent cross-origin AJAX from untrusted pages.</li></ul></li><li><p>Client side prevention measures:</p><ul><li><strong>Send the CSRF</strong> value for each request.</li><li><strong>Send a matching header</strong> with each request.</li></ul></li></ul></li>",2),u=s("Apply "),p={href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",target:"_blank",rel:"noopener noreferrer"},m=s("OWASP CSRF prevention cheat sheet"),f=t("<li><p>Use <strong>IDE plugins</strong> code scanners in order to <strong>alert on vulnerable code while you are developing</strong>.</p></li><li><p>Request <strong>code reviews</strong> from acknowledged Security Reviewers in your team.</p></li><li><p><strong>Scan your code</strong> with automated code analysis tools in your merge requests and prevent pushing any vulnerable code in your application.</p></li><li><p>Perform regular SCA <strong>scans of your dependencies</strong> and fix the vulnerabilities raised.</p></li><li><p>Perform regular <strong>penetration testing</strong> with DAST tools like OWASP ZAP and fix the findings.</p></li>",5);function y(S,v){const r=n("ExternalLinkIcon");return o(),a(l,null,[h,e("ul",null,[g,e("li",null,[e("p",null,[u,e("a",p,[m,i(r)])])]),f])],64)}var _=c(d,[["render",y]]);export{_ as default};
