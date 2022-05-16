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
            {
                title: 'jwt',
                path: '/jwt/',
                collapsable: true,
                children: [
                   "/common-threats/jwt/jwt-overview.md",
                   "/common-threats/jwt/jwt-workflow.md",
                   "common-threats/jwt/jwt-storage.md",
                   "common-threats/jwt/jwt-known-threats.md",
                   "common-threats/jwt/jwt-best-current-practices.md",
                   "common-threats/jwt/jwt-pw.md"
                ]
            },
            {
                title: 'csrf',
                path: '/csrf/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/csrf/csrf-overview.md', 'Overview'],
                      ['/common-threats/csrf/csrf-detection.md', 'Detection'],
                      ['/common-threats/csrf/csrf-defense.md', 'Defense'],
                      ['/common-threats/csrf/csrf-angular.md', 'Implementation'],
                      ['/common-threats/csrf/csrf-pw.md', 'Practical works']
                   }
                ]
            },
            {
                title: 'xss',
                path: '/xss/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/xss/xss-overview.md', 'Overview'],
                      ['/common-threats/xss/xss-detection.md', 'Detection'],
                      ['/common-threats/xss/xss-defense.md', 'Defense'],
                      ['/common-threats/xss/xss-angular.md', 'Implementation'],
                      ['/common-threats/xss/xss-pw.md', 'Practical works']
                   }
                ]
            },
            {
                title: 'csp',
                path: '/csp/',
                collapsable: true,
                children: [
                   {
                      ['/csp/csp-overview.md', 'Overview'],
                      ['/csp/csp-defense.md', 'Detection'],
                      ['/csp/csp-angular.md', 'Implementation'],
                      ['/csp/csp-pw.md', 'Practical works']
                   }
                ]
            },
            {
                title: 'ssti',
                path: '/ssti/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/ssti/ssti-overview.md', 'Overview'],
                      ['/common-threats/ssti/ssti-defense.md', 'Defense'],
                      ['/common-threats/ssti/ssti-angular.md', 'Implementation']
                   }
                ]
            },
            {
                title: 'third-party',
                path: '/sca/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/sca/sca-overview.md', 'Overview'],
                      ['/common-threats/sca/sca-detection.md', 'Detection'],
                      ['/common-threats/sca/sca-defense.md', 'Defense'],
                      ['/common-threats/sca/sca-angular.md', 'Implementation'],
                      ['/common-threats/sca/sca-pw.md', 'Practical works']
                   }
                ]
            },
            {
                title: 'api',
                path: '/api/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/api/api-overview.md', 'Overview'],
                      ['/common-threats/api/api-defense.md', 'Defense'],
                      ['/common-threats/api/api-pw.md', 'Practical works']
                   }
                ]
            },
            {
                title: 'xssi',
                path: '/xssi/',
                collapsable: true,
                children: [
                   {
                      ['/common-threats/xssi/xssi-overview.md', 'Overview'],
                      ['/common-threats/sca/sca-defense.md', 'Defense'],
                      ['/common-threats/xssi/xssi-angular.md', 'Implementation'],
                      ['/common-threats/xssi/xssi-pw.md', 'Practical works']
                   }
                ]
            },
            "/continuous-prevention/"
        ]
    },
}
