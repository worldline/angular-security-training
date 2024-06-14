import{r,o as n,c as o,a as e,e as s,F as i,d as c,b as t}from"./app.d2e07122.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var h="/angular-security-training/assets/csrf-wf-1.0da21377.png",u="/angular-security-training/assets/csrf-wf-2.7000dccb.png",d="/angular-security-training/assets/csrf-wf-3.daaa85f8.png",f="/angular-security-training/assets/csrf-wf-4.c8b1833c.png";const g={},p=c('<h1 id="_2-1-csrf-overview" tabindex="-1"><a class="header-anchor" href="#_2-1-csrf-overview" aria-hidden="true">#</a> 2.1 CSRF Overview</h1><h2 id="csrf-in-a-nutshell" tabindex="-1"><a class="header-anchor" href="#csrf-in-a-nutshell" aria-hidden="true">#</a> CSRF in a nutshell</h2><p>CSRF (Cross-Site Request Forgery) is an attack where a malicious website causes a logged-on user\u2019s web browser to <strong>perform an unwanted action on a trusted site</strong>.</p><p><img src="'+h+'" alt="csrf-wf-1"></p><p><img src="'+u+'" alt="csrf-wf-2"></p><p><img src="'+d+'" alt="csrf-wf-3"></p><p><img src="'+f+'" alt="csrf-wf-4"></p><h2 id="why-csrf-can-be-dangerous" tabindex="-1"><a class="header-anchor" href="#why-csrf-can-be-dangerous" aria-hidden="true">#</a> Why CSRF can be dangerous ?</h2><p>A successful CSRF attack can <strong>force the user</strong> to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an <strong>administrator account</strong>, CSRF can <strong>compromise the entire web application</strong>.</p><h2 id="what-are-csrf-famous-real-life-cases" tabindex="-1"><a class="header-anchor" href="#what-are-csrf-famous-real-life-cases" aria-hidden="true">#</a> What are CSRF famous real life cases ?</h2>',10),m={href:"https://www.zdnet.com/article/tiktok-patches-reflected-xss-bug-one-click-account-takeover-exploit/",target:"_blank",rel:"noopener noreferrer"},_=t("TikTok"),w=t(" : In 2020, a vulnerability that allowed attackers to send messages containing malware to Tiktok users. The attackers could perform CSRF or cross-site scripting (XSS) attacks, causing other user accounts to submit requests on their behalf to the TikTok application."),k={href:"https://appsecnotes.blogspot.com/2009/01/netflix-csrf-revisited.html",target:"_blank",rel:"noopener noreferrer"},b=t("Netflix"),v=t(" : In 2006, Netflix website had numerous vulnerabilities regarding CSRF, which could have allowed any attacker to perform actions such as adding a DVD to the victim\u2019s rental queue, changing the shipping address on the account, or altering the victim\u2019s login credentials to fully compromise the account."),S={href:"https://people.eecs.berkeley.edu/~daw/teaching/cs261-f11/reading/csrf.pdf",target:"_blank",rel:"noopener noreferrer"},y=t("ING Direct"),x=t(" : In 2008, ING Direct, the banking website of a Dutch-owned multinational banking group, had a CSRF vulnerability that allowed attackers to transfer money from users\u2019 accounts, even though users were authenticated with SSL. The website did not have any protection against CSRF attacks, and the process of transferring funds was easy for attackers to see and replicate."),F=e("h2",{id:"what-makes-csrf-attacks-possible",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-makes-csrf-attacks-possible","aria-hidden":"true"},"#"),t(" What makes CSRF attacks possible ?")],-1),C=e("p",null,[t("Browser requests automatically "),e("strong",null,"include all cookies including session cookies"),t(". The attackers use "),e("strong",null,"social engineering"),t(" to trick users which browsers cannot distinguish between "),e("strong",null,"legitimate authorized requests"),t(" and "),e("strong",null,"forged authenticated requests"),t(".")],-1);function R(T,I){const a=r("ExternalLinkIcon");return n(),o(i,null,[p,e("ul",null,[e("li",null,[e("p",null,[e("strong",null,[e("a",m,[_,s(a)])]),w])]),e("li",null,[e("p",null,[e("strong",null,[e("a",k,[b,s(a)])]),v])]),e("li",null,[e("p",null,[e("strong",null,[e("a",S,[y,s(a)])]),x])])]),F,C],64)}var D=l(g,[["render",R]]);export{D as default};
