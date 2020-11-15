var plugins = [{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-remark-embed-gist/gatsby-ssr'),
      options: {"plugins":[],"username":"RyannosaurusRex","includeDefaultCss":true},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":1170,"quality":100,"withWebp":true},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://ryanhayes.net"},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jason.hayes/git/github/ryanhayes.net/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-15608898-1","head":true,"anonymize":true,"respectDNT":false,"exclude":["/preview/**"],"sampleRate":100,"siteSpeedSampleRate":10},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
