const drawerWidth = 240;
const baseUrl = 'https://api.quotosophy.com';
const tabs = [
    'Getting Started',
    'Base URL',
    'Quotes',
    'Source Texts',
    'Authors'
];
const localLinks = [
    {
        name: 'Subscribe',
        link: '/subscribe',
    },
    {
        name: 'Manage Subscription',
        link: 'https://billing.stripe.com/p/login/test_5kAeYXdq37yCd3y6oo',
    },
    {
        name: 'Recover API Key',
        link: '/recover',
    },
]
const socialLinks = [
    {
        name: 'GitHub',
        link: 'https://github.com/lukejlackey',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lukejlackey',
    },
];


const contextVariables = {
    drawerWidth,
    baseUrl,
    tabs,
    localLinks,
    socialLinks
}

export default contextVariables;