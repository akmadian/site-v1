// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    // Change this to the production URL of your website
    url: 'https://example.com',
    title: 'akmadian'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  // Configure the theme
  themeConfig: {
    style: 'light',
    github: 'akmadian',
    twitter: 'akmadian',
    projects: 'pinned-repos',
    sponsorLink: '',
    sponsorTip: 'Support my work',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ]
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    }
  ]
}
