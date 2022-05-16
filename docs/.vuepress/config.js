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
            "/",
             {
                title: 'prerequisites',
                path: '/prerequisites/',
            },
             {
                title: 'introduction',
                path: '/introduction/',
            },
            {
                title: 'common-threats',
                path: '/common-threats/',
                collapsable: true,
                children: [
                    {
                        title: 'jwt',
                        path: '/common-threats/jwt/',
                        collapsable: true      
                    },
                    {
                        title: 'csrf',
                        path: '/common-threats/csrf/',
                        collapsable: true
                    }
                  ]
            },
            "/continuous-prevention/"
        ]
    },
}
