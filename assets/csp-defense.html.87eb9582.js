import{r as s,o as r,c as a,a as t,e as n,F as i,d as c,b as e}from"./app.d2e07122.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const h={},d=c('<h1 id="_4-2-csp-defense" tabindex="-1"><a class="header-anchor" href="#_4-2-csp-defense" aria-hidden="true">#</a> 4.2 CSP Defense</h1><h2 id="what-are-the-risks-of-csp" tabindex="-1"><a class="header-anchor" href="#what-are-the-risks-of-csp" aria-hidden="true">#</a> What are the risks of CSP ?</h2><p>As shown in the overview section, there are many policies available to setup and maintain for your CSP. This raises a high <strong>risk of policies misconfiguration</strong> which can lead to <strong>unavailability</strong> of some features of your application. In this situation, teams become <strong>too lazy to bother about maintaining the policies</strong> and fall in the <strong>risk of using too permissive policies.</strong></p><h2 id="how-to-implement-csp-in-real-life" tabindex="-1"><a class="header-anchor" href="#how-to-implement-csp-in-real-life" aria-hidden="true">#</a> How to implement CSP in real life ?</h2><p>For sensitive web applications, you want to make sure that <strong>only the resources you&#39;ve written yourself can be loaded</strong> with CSP. In case of <strong>whitelist strategy</strong>, you can use a lockdown approach by starting with a default policy that blocks absolutely everything : <code>default-src &#39;none&#39;</code> and build up your white list from there. In case of <strong>strict-dynamic strategy</strong>, you need to <strong>refactor your javascript code</strong>, include <strong>nonce generation</strong> in your application and add the nonce attribute to all your script tags.</p>',5),p=e("In either case, it is highly recommended testing your CSP in report only mode("),u=t("code",null,"report-uri",-1),_=e(" or "),f=t("code",null,"report-to",-1),g=e(") during a certain period first and resolve the alerts before applying the CSP. Also, "),m=t("strong",null,"use the same CSP in all your environments (tests and production)",-1),y=e(" in order to avoid incompatibility incidents. "),b={href:"https://github.com/nico3333fr/CSP-useful/blob/master/csp-wtf/explained.md",target:"_blank",rel:"noopener noreferrer"},w=e("This page"),k=e(" can help you analyse CSP notifications that may be difficult to understand."),v=e("To learn further: "),P={href:"https://owasp.org/www-pdf-archive//2019-02-22_-_How_do_I_Content_Security_Policy_-_Print.pdf",target:"_blank",rel:"noopener noreferrer"},S=e("OWASP CSP setup guide book");function C(x,I){const o=s("ExternalLinkIcon");return r(),a(i,null,[d,t("p",null,[p,u,_,f,g,m,y,t("a",b,[w,n(o)]),k]),t("p",null,[v,t("a",P,[S,n(o)])])],64)}var V=l(h,[["render",C]]);export{V as default};
