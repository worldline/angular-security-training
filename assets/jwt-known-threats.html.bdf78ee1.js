import{r as i,o as n,c as r,a as e,e as o,F as s,d as c,b as t}from"./app.d2e07122.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},l=c('<h1 id="_1-4-jwt-known-threats" tabindex="-1"><a class="header-anchor" href="#_1-4-jwt-known-threats" aria-hidden="true">#</a> 1.4 JWT Known Threats</h1><h2 id="weak-signature-and-insufficient-signature-validation" tabindex="-1"><a class="header-anchor" href="#weak-signature-and-insufficient-signature-validation" aria-hidden="true">#</a> Weak signature and insufficient Signature validation</h2><p>Design flaws of some libraries and applications have led to the following attacks:</p><ul><li><p>The <code>alg</code> property in the JOSE header can be changed to <code>none</code> by an attacker, and the badly designed libraries or application will trust this <code>none</code> value and consider the token valid without checking the signature.</p></li><li><p>An <code>RS256</code> alg value can be changed to <code>HS256</code> and some weak libraries will try to validate the signature using the RSA public key as the HMAC shared secret.</p></li></ul><h2 id="weak-symmetric-keys" tabindex="-1"><a class="header-anchor" href="#weak-symmetric-keys" aria-hidden="true">#</a> Weak Symmetric Keys</h2><p>Using a weak symmetric key for HS256 signature can open the door to offline brute-force or dictionary attacks.</p><h2 id="incorrect-composition-of-encryption-and-signature" tabindex="-1"><a class="header-anchor" href="#incorrect-composition-of-encryption-and-signature" aria-hidden="true">#</a> Incorrect Composition of Encryption and Signature</h2><p>Some libraries that decrypt a JWE-encrypted Token to obtain a JWS-signed object do not go further and validate the internal signature.</p><h2 id="insecure-use-of-elliptic-curve-encryption" tabindex="-1"><a class="header-anchor" href="#insecure-use-of-elliptic-curve-encryption" aria-hidden="true">#</a> Insecure use of Elliptic Curve Encryption</h2><p>Several JOSE fail to validate their inputs correctly when using ECDH-ES algorithm. An attacked can send JWE of its choosing that uses invalid curve points and observe the cleartext output resulting from decryption with the invalid curve points to recover the recipient&#39;s private key.</p><h2 id="multiplicity-of-json-encodings" tabindex="-1"><a class="header-anchor" href="#multiplicity-of-json-encodings" aria-hidden="true">#</a> Multiplicity of JSON Encodings</h2><p>Previous obsolete JSON formats allowed several character encodings : UTF-8, UTF-16, and UTF-32. Today, only UTF-8 is allowed.</p><p>Attackers use this ambiguity between both implementations to bypass the recipient&#39;s validation checks.</p><h2 id="substitution-attacks" tabindex="-1"><a class="header-anchor" href="#substitution-attacks" aria-hidden="true">#</a> Substitution Attacks</h2><p>An attacker can use a legit JWT that was initially intended for a resource A and will attempt to use the same JWT for a different resource B. If such situations are not caught, this can result to attackers to successfully gain access to resources that it is not entitled to access.</p><h2 id="indirect-attacks-on-the-server" tabindex="-1"><a class="header-anchor" href="#indirect-attacks-on-the-server" aria-hidden="true">#</a> Indirect Attacks on the server</h2><p>Many JWT claims are used by the recipient to perform lookup operations in databases and LDAP. Any of these claims can be used by attackers as vector for injection attacks or server-side request forgery attacks.</p>',17),u=t("Source: "),p={href:"https://www.rfc-editor.org/rfc/rfc8725.html",target:"_blank",rel:"noopener noreferrer"},f=t("RFC-8725");function g(k,y){const a=i("ExternalLinkIcon");return n(),r(s,null,[l,e("p",null,[u,e("a",p,[f,o(a)])])],64)}var v=d(h,[["render",g]]);export{v as default};
