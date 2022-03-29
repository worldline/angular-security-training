# Vulnerable Components Protection in Angular

## Checking JavaScript libraries integrity

Including code from third-party providers requires a lot of trust
- What if the provider gets compromised?
- What if the provider decides to change the code you are including ?

## Sub-Resource Integrity (SRI)

TO_DO add image

- SRI allows you to define what you want to include
- Browser calculates and verifies the checksum before including the resources
- Hash is provided by online tools / by CDN / webpack plugin in your build process
- Supported by Chrome, firefox and Opera (backward compatible)

