module.exports = {
  siteMetadata: {
    title: `Pura`,
    description: `Pura is an opinionated, but lightweight Gatsby starter kit.`,
    author: `@trendyminds`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pura`,
        short_name: `pura`,
        start_url: `/`,
        background_color: `#333c45`,
        theme_color: `#333c45`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-nested"),
          require("postcss-color-function"),
          require("postcss-hexrgba")
        ]
      }
    }
  ]
};
