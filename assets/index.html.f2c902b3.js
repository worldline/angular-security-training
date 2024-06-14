import{d as e}from"./app.d2e07122.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=e(`<h1 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h1><ul><li>Basic knowledge of Angular.</li><li>OWASP Top 10 Vulnerabilities.</li></ul><h1 id="development-environment-for-practical-work" tabindex="-1"><a class="header-anchor" href="#development-environment-for-practical-work" aria-hidden="true">#</a> Development environment for practical work</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If it is allowed by your local security policy, you can work under a Linux VM, to get a better development experience. This is not mandatory for this training though.</p></div><p>To implement practical works on your local system, you need the following:</p><ul><li>Node.js v16.10+ (https://nodejs.org/en/download/)</li><li>npm package manager (installed with Node.js)</li><li>Maven 3 (https://maven.apache.org/download.cgi)</li><li>Java 11 (https://www.azul.com/downloads/?architecture=x86-64-bit&amp;package=jdk)</li><li>Visual Studio Code (https://code.visualstudio.com/) or any IDE</li></ul><h1 id="practical-work-setup-your-project" tabindex="-1"><a class="header-anchor" href="#practical-work-setup-your-project" aria-hidden="true">#</a> Practical work: Setup your project</h1><p>The project used for practical works stands as the webapp backend and hosts the RESTful api of the ecommerce website based on Spring stack. It is composed of two prject:</p><ul><li>A server created using Spring</li><li>A client created using Angular</li></ul><h2 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get started</h2><ul><li><p><strong>Clone the project</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/worldline/angular-security-training.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>Go to first practical work</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> angular-security-training/pw/pw-jwt-oauth
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>Open the &quot;server&quot; folder in a terminal and execute &quot;mvn&quot;</strong></p><p><strong>Optional</strong> : only in case of error on jdk version during execution, export JAVA_HOME variable and re-execute mvn</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token string">&#39;PATH_TO_JDK11_ROOT_FOLDER&#39;</span><span class="token punctuation">;</span>
mvn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><strong>Open the &quot;client&quot; folder in another terminal</strong></p></li><li><p><strong>npm install</strong> (only for the first time)</p></li><li><p><strong>npm start</strong></p></li><li><p><strong>Open the url &quot;http://localhost:4200&quot; in a browser</strong></p></li></ul>`,11);function s(r,i){return t}var c=a(n,[["render",s]]);export{c as default};
