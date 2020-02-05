const package = require('./package.json')

const remarkPlugins = [
  `gatsby-remark-smartypants`,
  {
    resolve: `gatsby-remark-external-links`,
    options: {
      target: `_blank`,
      rel: `nofollow`
    }
  }
]

module.exports = {
  siteMetadata: {
    title: package.name,
    description: package.description,
    author: `@astralfrontier`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1FclXP69w6vN51QOEmrU_1IaIkPz0Z5EyLhajO0LDk80",
        spreadsheetName: "Playbooks",
        typePrefix: "GoogleSpreadsheet",
        credentials: require(`./credentials.json`),
        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,
    
        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: remarkPlugins
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: package.name,
        short_name: package.name,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
