const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Caribbean Scholar | The #1 Online Learning Community in the West Indies',
    siteURL: 'https://thecaribbeanscholar.com',
    description: 'High-quality information on all things CAPE, CSEC and your future at large. Make the most of detailed SBA guides, subject roadmaps and crash courses.'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TZPCZFF",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "https://writers.flywheelsites.com/graphql"
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-fontawesome-css',
  ],
}
