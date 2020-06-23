module.exports = {
  siteMetadata: {
    title: `NYC foodie`,
    description: `NYC-based pizza foodie blog`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/instagram.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `jessanotherslice`,
        collection: `restaurants`,
        connectionString: `mongodb+srv://Elle:${process.env.MONGO_PASSWORD}@test-cluster-jcdfi.mongodb.net/jessanotherslice?retryWrites=true&w=majority`,
        auth: {
          user: `Elle`,
          password: process.env.MONGO_PASSWORD
        }
      },
    },
  ],
}
