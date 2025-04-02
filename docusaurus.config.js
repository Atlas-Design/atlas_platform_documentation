// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Platform Documentation',
  tagline: 'Alpha Version',
  favicon: '/img/general/atlas_logo.png',

  //url: 'http://localhost:3000',
  //baseUrl: '/',
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
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
      title: 'Atlas Platform User Guide',
      items: [
      ],
    },
    
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Atlas Platform.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
