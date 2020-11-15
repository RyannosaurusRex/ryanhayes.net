module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"enableIdentityWidget":true},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1170,"quality":100,"withWebp":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://ryanhayes.net"},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-15608898-1","head":true,"anonymize":true,"respectDNT":false,"exclude":["/preview/**"],"sampleRate":100,"siteSpeedSampleRate":10},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
