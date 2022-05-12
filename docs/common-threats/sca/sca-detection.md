# 6.2 Vulnerable Components Detection

## How do I know if my application has vulnerable components ?

**Software composition Analysis** (SCA) tools enable you to **perform automated scan** of all client-side and server-side components, and their dependencies used in your web application.
These SCA tools continuously monitor vulnerabilities databases like NVD or OSS Index and alert you of potential threats in your project.
Here is a list of SCA tools we recommend to use: Dependency-Track, Dependency-Check, retire.js

::: warning
SCA reports requires further analysis from your end in order to identify the real impact based on your context and filter out false positives.
:::

## Detecting known vulnerable JavaScript libraries with Retire.js

[Retire.js Setup Guide](http://retirejs.github.io/retire.js/)

Features :
- For Single Page Application , NodeJS apps, traditional web applications
- Scan js files, bower and node modules
- List vulnerabilities with corresponding CVE code, a link to the detail (changelog, issue github, ...)

Usage :

- command line
- grunt
- gulp task
- browser plugin
- pentest tool plugin

## Detecting known vulnerable maven dependencies with Dependency-Check

- Dependency-Check: Open source, maven plugin
- Features:
    - Scan all maven dependencies
    - Access to the NVD and check CVE
    - Generate a complete report (HTML format): vulnerabilitties, criticality level, CVE code, patched versions ...
    
- Execute the maven command mvn org.owasp:dependency-check-maven:check

- See usage & configuration

## Tracking project vulnerabilities with Dependency-Track

Dependency-Track is an Open source tool provided by OWASP which allows continuous component analysis.

Features:
- CycloneDX and SPDX bill-of-material formats
- Dependency-Check XML
- Jenkins and gitlab-ci integration
