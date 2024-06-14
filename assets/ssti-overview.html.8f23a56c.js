import{r as n,o as s,c as r,a as e,e as i,F as o,d as l,b as a}from"./app.d2e07122.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var p="/angular-security-training/assets/template-injection-angular.4eedd4d6.png";const d={},u=l(`<h1 id="_5-1-ssti-overview" tabindex="-1"><a class="header-anchor" href="#_5-1-ssti-overview" aria-hidden="true">#</a> 5.1 SSTI Overview</h1><h2 id="ssti-in-a-nutshell" tabindex="-1"><a class="header-anchor" href="#ssti-in-a-nutshell" aria-hidden="true">#</a> SSTI in a nutshell</h2><p>Server-Side Template Injection is an attack where a <strong>malicious payload is injected into a template</strong> which is then executed server-side.</p><h2 id="what-are-templates" tabindex="-1"><a class="header-anchor" href="#what-are-templates" aria-hidden="true">#</a> What are Templates ?</h2><p>Templates allow to <strong>pre-populate dynamic data from the server into a web page.</strong> Web pages coming from web templates can structure the component of web pages in such a way that can be modified independently of each other. Templates are commonly used for:</p><ul><li>Displaying information about users (username, bio...), products, companies.</li><li>Sending bulk emails.</li><li>Displaying a gallery of photos or videos.</li></ul><p>Example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Hello <span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="example-of-vulnerable-angular-template" tabindex="-1"><a class="header-anchor" href="#example-of-vulnerable-angular-template" aria-hidden="true">#</a> Example of vulnerable Angular Template</h2><p><img src="`+p+'" alt="template-injection-example"></p><p>A malicious user can inject malicious code from unknown origin which will be executed in <code>potentialUserInput</code>.</p>',11),h=a("Source: "),m={href:"https://snyk.io/blog/angular-security-best-practices/",target:"_blank",rel:"noopener noreferrer"},g=a("https://snyk.io/blog/angular-security-best-practices/");function b(f,_){const t=n("ExternalLinkIcon");return s(),r(o,null,[u,e("p",null,[h,e("a",m,[g,i(t)])])],64)}var w=c(d,[["render",b]]);export{w as default};
