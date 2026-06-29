const config = {
  title: 'The HEVIDS Standard',
  tagline: 'An Open Standard for Enterprise AI Governance',
  favicon: 'img/favicon.svg',
  url: 'https://hevids.org',
  baseUrl: '/',
  organizationName: 'aprewitt',
  projectName: 'hevids-standard',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: '1.0',
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
      title: 'The HEVIDS Standard',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/aprewitt/hevids-standard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} The HEVIDS Standard`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;