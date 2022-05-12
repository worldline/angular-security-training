# 6.3 Vulnerable Component Defense

## How do I prevent using vulnerable components ?

Continuously monitoring SCA tools reports and addressing the vulnerabilities raised will allow to reduce the risk of using vulnerable components.
You can also add fail gates in your CI pipelines to avoid adding new vulnerable components in new code changes.
::: tip
Continuously grooming and maintaining your application with a proper obsolescence management is key to reduce risks of having high/critical vulnerabilities.
:::

## How to address existing vulnerable components ?

1. **Identify** the Business criticality of your application (high or low importance ?)
   
1. **Prioritize** by using the prioritization matrix (CVSS x business criticality) and order the vulnerabilities by their final priority.
    
1. **Analyze** and discuss with your team about the vulnerability description by starting with the most critical vulnerabilities.
    
1. **Filter** out false positives and ensure evidence is well documented and accessible.

1. **Document** evidence and justification of your decisions and ensure they are always accessible.
    
1. **Plan** to process vulnerabilities within their corresponding remediation time.
    
1. **Fix** and remediate the  vulnerabilities by agreeing on a resolution action for each vulnerability such as:
        
    - Patch vulnerable code.
        
    - Upgrade vulnerable component version.
    
    - Virtual Patch your application with WAF in case patching vulnerable code is impossible.
        
    - Block vulnerable functionality.
    
1. **Test** any fix made to ensure the vulnerabilities are no longer present and exploitable. If possible, add unit tests for this specific flow.
   
1. **Monitor** the security scans on a regular basis.
    
1. **Repeat** the previous steps at each new vulnerability scan report.

