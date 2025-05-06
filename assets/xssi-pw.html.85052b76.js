import{d as n}from"./app.f04538c2.js";import{_ as s}from"./pw-coding.b255a857.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},p=n('<h1 id="_8-4-xssi-practical-work" tabindex="-1"><a class="header-anchor" href="#_8-4-xssi-practical-work" aria-hidden="true">#</a> 8.4 XSSI Practical Work</h1><p><img src="'+s+`" alt="pw"></p><p>1 - Configure protection against JSONP vulnerability:</p><p>Add this config in /bookstore/src/main/java/com/worldline/bookstore/config/SecurityConfiguration.java</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>      <span class="token doc-comment comment">/**
       * Add config to set a prefix on json response to protect against JSONP vulnerability
       * */</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">Bean</span></span>
      <span class="token keyword">public</span> MappingJackson2HttpMessageConverter <span class="token function">mappingJackson2HttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          MappingJackson2HttpMessageConverter converter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MappingJackson2HttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token doc-comment comment">/**
           * Set the expected prefix for Angular
           * */</span>
          converter<span class="token punctuation">.</span><span class="token function">setJsonPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;)]}&#39;,\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          
          <span class="token doc-comment comment">/**
           * Trick to solve a lazyloading exception when you use collections in your entities
           * See https://stackoverflow.com/a/21760361
           * */</span>        
          ObjectMapper mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">//Registering Hibernate5Module to support lazy objects</span>
          mapper<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Hibernate5Module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          converter<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>mapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 
          <span class="token keyword">return</span> converter<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>2 - Test your protection:</p><p>check that json responses are prefixed by the expected token and that there is no repercussion on the GUI (stripped automatically by Angular)</p>`,7);function t(o,c){return p}var u=a(e,[["render",t]]);export{u as default};
