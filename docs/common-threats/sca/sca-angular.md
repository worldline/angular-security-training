# 6.4 Vulnerable Components Protection in Angular

## Checking JavaScript libraries integrity

Including code from third-party providers requires a lot of trust
- What if the provider gets compromised?
- What if the provider decides to change the code you are including ?

## npm audit

You can update your npm modules with `npm audit fix` command.
It checks a vulnerabilities from the Github Advisory Repository.
This repository is different than OSS index used for Dependency-Track.
Therefore, reports from both npm audit and Dependency Track may defer.

## Sub-Resource Integrity (SRI)

``` typescript
<script src="https://example.com/angular.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

- SRI allows you to define what you want to include
- Browser calculates and verifies the checksum before including the resources
- Hash is provided by online tools / by CDN / webpack plugin in your build process
- Supported by Chrome, firefox and Opera (backward compatible)

