# 7.1 Unprotected APIs Overview

- OWASP Top 10+ 2017 new topic (draft version)
- REST API architecture growing (mobile, SPA, IoT,…)
- Restrict access to API for authenticated/authorized users/clients
- This area impacts or is related to many others potential vulnerabilities :
    - Broken Authentication & Session Management
    - Broken Access Control
    - Sensitive data exposure,
    - Insufficient Attack Protection
    - Cross-Site Request Forgery
    - JSONP vulnerability
    - Service Availability Threats

## Authorization

- Used with strong authentication : JWT OAuth, multi-factor authentication, …
- Web address request security: approach to secure your request URIs
- Implement Service layer and Domain object security: separation of concerns, reusability, support for rich clients and web services
- Define a realm: user, group, role, permission, right management …