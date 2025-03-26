// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Platform Documentation',
  tagline: 'Alpha Version',
  favicon: 'img/favicon.ico',

  url: 'https://Atlas-Design.github.io',
  baseUrl: '/atlas_platform_documentation/',
  organizationName: 'Atlas-Design',
  projectName: 'atlas_platform_documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Atlas Platform Documentation',
      logo: {
        alt: 'Atlas Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'right',
          label: 'Alpha Version',
          href: '#',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Atlas Platform.`,
    },
  },
};

export default config;
