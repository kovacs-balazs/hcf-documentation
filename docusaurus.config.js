// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hardcore Factions Plus',
  tagline: 'HCF Core, Multi-Language, Addons, Fully Configurable',
  favicon: 'img/HCFKek (1).png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'idbi', // Usually your GitHub org/user name.
  projectName: 'hcfplus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          path: 'changelogs',
          routeBasePath: 'changelogs',
          showReadingTime: false,
          blogSidebarTitle: 'Updates'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'HCFPlus',
          src: 'img/hcflogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/changelogs', label: 'Changelogs', position: 'left'},
          {
            href: 'https://builtbybit.com/resources/hardcore-factions-plus-hcf-core.29108/',
            label: 'Buy it now!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/commands/commands',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pSfHNB9hEP',
              },
              {
                label: 'Our plugin (BuiltByBit)',
                href: 'https://builtbybit.com/resources/hardcore-factions-plus-hcf-core.29108/',
              },
              {
                label: 'Our plugin (Polymart)',
                href: 'https://polymart.org/resource/hardcore-factions-plus-core.4402',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelogs',
                to: '/changelogs',
              }
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'yaml']
      },
    }),
};

module.exports = config;