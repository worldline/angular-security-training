# 6.5 Vulnerable Components Practical Work

![pw](../../assets/uncle-pw.png)

1 - Load a js script from Content Delivery Network (CDN) with SRI
-  In index.html, load the minified version 3.2.1 of "jquery" from `cdnjs.cloudflare.com` (take care of the version number)  
-  Implement sub resource integrity (SRI) to check the resource integrity 
   
Hints :
- Get resources with SRI from https://cdnjs.com or use the online tool https://www.srihash.org/ to generate SRI hash
- if CSP is configured, you will have to update it in order to allow external resources from CDN (add appropriate hash in `script-src` directive - work only for Chrome) 

2 - Detect known vulnerable third party components
- execute `npm audit` and review the report.
