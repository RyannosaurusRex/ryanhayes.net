const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/pages/about.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/pages/contact.tsx"))),
  "component---src-pages-now-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/pages/now.tsx"))),
  "component---src-templates-author-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/templates/author.tsx"))),
  "component---src-templates-index-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/templates/index.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/templates/post.tsx"))),
  "component---src-templates-tags-tsx": hot(preferDefault(require("/Users/jason.hayes/git/github/ryanhayes.net/src/templates/tags.tsx")))
}

