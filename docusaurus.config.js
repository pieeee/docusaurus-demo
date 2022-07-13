// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shopify',
  tagline: 'A complete commerce platform that lets you manage a business.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Shopify',
        logo: {
          alt: 'My Site Logo',
          //   src: 'img/logo.svg',
          src: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
            href: 'https://www.shopify.com/start',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            // href: 'https://github.com/facebook/docusaurus',
            href: 'https://www.shopify.com/online/ecommerce-solutions',
            label: 'Features',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Online Store',
            items: [
              //   {
              //     label: 'Tutorial',
              //     to: '/docs/intro',
              //   },
              {
                label: 'Sell Online',
                to: 'docs/intro',
              },
              {
                label: 'Features',
                to: 'docs/intro',
              },
              {
                label: 'Examples',
                to: 'docs/intro',
              },
              {
                label: 'Website Builder',
                to: 'docs/intro',
              },
            ],
          },
          {
            title: 'Shopify',
            items: [
              {
                label: 'Contact',
                href: 'https://www.shopify.com/contact',
              },
              {
                label: 'Affiliate Program',
                href: 'https://www.shopify.com/partners',
              },
              {
                label: 'Partner Program',
                href: 'https://www.shopify.com/affiliates',
              },
              {
                label: 'App Developers',
                href: 'https://shopify.dev/',
              },
              {
                label: 'Investors',
                href: 'https://investors.shopify.com/home/default.aspx',
              },
              //   {
              //     label: 'Twitter',
              //     href: 'https://twitter.com/docusaurus',
              //   },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: '24/7 support',
                to: '/blog',
              },
              {
                label: 'Free tools',
                to: '/blog',
              },
              {
                label: 'Logo Maker',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shopify Clone, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
