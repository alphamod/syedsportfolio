require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    "siteTitle": "Syed Salman",
    "siteTitleAlt": "Syed Salman - Portfolio",
    "siteHeadline": "Syed Salman - Full Stack Developer- Portfolio",
    "siteUrl": "https://syedsportfolio.vercel.app",
    "siteDescription": "Full Stack Developer Based in Chennai, India. \nTechnical Stack: MEAN, MERN, mySQL, & Python.",
    "siteLanguage": "en",
    "siteImage": "/banner.jpg",
    "author": "Syed Salman"
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Syed Salman - Portfolio`,
        short_name: `Syed Salman`,
        description: `Full Stack Developer Based in Chennai, India. \nTechnical Stack: MEAN, MERN, mySQL, & Python.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-typescript-css-modules`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
