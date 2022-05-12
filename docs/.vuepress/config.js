module.exports = {
    // site config
    base: '/angular-security-training/',
    lang: 'en-US',
    title: 'Angular Security Hardening Training',
    description: 'Learn how to prevent common threats in your Angular web application !',
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
       // ['meta', { name: 'theme-color', content: '#C3002F' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    // theme and its config
   // theme: '@vuepress/theme-default',
    themeConfig: {

        logo: '/logo.svg',
        sidebar: [
            "/prerequisites/",
            "/introduction/",
            "/common-threats/",
            "/common-threats/jwt/jwt-overview.md",
            "/common-threats/jwt/jwt-workflow.md",
            "/common-threats/jwt/jwt-storage.md",
            "/common-threats/jwt/jwt-known-threats.md",
            "/common-threats/jwt/jwt-best-current-practices.md",
            "/common-threats/jwt/jwt-pw.md",
            "/common-threats/csrf/csrf-overview.md",
            "/common-threats/csrf/csrf-detection.md",
            "/common-threats/csrf/csrf-defense.md",
            "/common-threats/csrf/csrf-angular.md",
            "/common-threats/csrf/csrf-pw.md",
            "/common-threats/xss/xss-overview.md",
            "/common-threats/xss/xss-detection.md",
            "/common-threats/xss/xss-defense.md",
            "/common-threats/xss/xss-angular.md",
            "/common-threats/xss/xss-pw.md",
            "/csp/csp-overview.md",
            "/csp/csp-defense.md",
            "/csp/csp-angular.md",
            "/csp/csp-pw.md",
            "/common-threats/sca/sca-overview.md",
            "/common-threats/sca/sca-detection.md",
            "/common-threats/sca/sca-defense.md",
            "/common-threats/sca/sca-angular.md",
            "/common-threats/sca/sca-pw.md",
            "/common-threats/ssti/ssti-overview.md",
            "/common-threats/ssti/ssti-defense.md",
            "/common-threats/ssti/ssti-angular.md",
            "/common-threats/api/api-overview.md",
            "/common-threats/api/api-defense.md",
            "/common-threats/api/api-pw.md",
            "/common-threats/xssi/xssi-overview.md",
            "/common-threats/xssi/xssi-defense.md",
            "/common-threats/xssi/xssi-angular.md",
            "/common-threats/xssi/xssi-pw.md",
            "/continuous-prevention/",
        ]
    },
}