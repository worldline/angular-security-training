module.exports = {
    // site config
    lang: 'en-US',
    title: 'Angular Security Hardening Training',
    description: 'Learn how to prevent common threats in your Angular web application !',

    // theme and its config
   // theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.svg',
        nav : [
            { text: 'Home', link: '/'},
            { text: 'Common Threats', link: '/common-threats/'},
            { text: 'Prevention', link: '/prevention/'},
        ],
        sidebar : [
            { text: 'Home', link: '/'},
            { text: 'Common Threats', link: '/common-threats/'},
            { text: 'Prevention', link: '/prevention/'},
        ]
    },
}