# RyanHayes.NET public website

Hey! I'm Ryan. You may know me as RyannosaurusRex from the Internet. This is my personal site, which has over a decade of history from Blogspot, Tumblr, Wordpress, Ghost, Jekyll, back to Wordpress, and now Gatsby.js. I write about software development and team building. Feel free to fork the repo and make your own personal site - it's a good investment as a software developer. If you want to ask questions about this, one of my other repos, or any question related to software development, you can contact me through this site, on Twitter or Twitch. I'm @RyannosaurusRex pretty much everywhere.

## Follow Along on Twitch

I stream development of this site as well as other .NET and Web Dev related content every week on [Twitch](https://twitch.tv/ryannosaurusrex). Come hang out!

## Theme used:
- Modified Gatsby Casper

Located at [https://ryanhayes.net](https://ryanhayes.net)

This is a static blog generator and starter gatsby repo. A port of [Casper](https://github.com/TryGhost/Casper) v2 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

## Getting Started
Edit website-config.ts with your website settings.
Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/scttcper/gatsby-casper)

## How to configure Google Analytics
Edit `gatsby-config.js` and add your tracking ID


```javascript
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'UA-XXXX-Y',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    },
  },
```

## How to edit your site title and description
Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```

## How to adjust pagination
In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.
