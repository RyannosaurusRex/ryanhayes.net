---
id: 1001347348
title: Why You Should Build Your Website Using Static .html Files
date: 2012-02-04T09:51:13+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347348
permalink: /why-you-should-build-your-website-using-static-html-files/
image: img/demo1.jpg
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "11089"
categories:
  - Blog
  - Software
---
If you've got a website, then chances are it's built using a CMS.  You know, WordPress, Orchard, Joomla, DotNetNuke.  Why wouldn't you?  They let you manage all your content on nice admin screens and PHP, ASP.NET, or whatever serverside technology your CMS is built on will magically and dynamically create your website pages every single time a user hits your page.  It's one of the many ways the web has become so powerful since the olden days when all websites were just a link or two and a flashing, seizure-inducing banner at the top.

**What is a static .html site anyway?**

Well, if you didn't already guess, a static site is the opposite of dynamic.  I'm not saying that nothing on your site moves or it's bland in some way.  Not at all.  What I mean by static .html sites is that the .html has already been pre-generated and is just laying out on the web server as opposed to all your content being stored in a database to be dynamically mashed together when a request comes by a serverside technology like ASP.NET or PHP.  When my friend, [Brian Connatser](https://twitter.com/#!/connatser), first told me about his project [Hera](http://connatser.github.com/hera/), which uses Twitter Bootstrap, Jekyl, Rake, and a few other technologies to pre-generate a static site in seconds, it really got me thinking.  **Why would anyone want a static .html site with the options we have today in CMS products?  Why would you go seemingly backwards to the old days of .html?**  Here's what I learned after doing the research:<!--more-->

  * **Performance is huge on the web.**  I mean, **seconds** can mean the difference between someone getting frustrated and leaving your site vs them staying and reading, buying, or clicking your ad.  With static .html, your site is ready and rearing to go.  No MySQL calls for WordPress.  No mashing together of content and templates.  All that's been done already.  Html is what browsers read anyway.  They have no concept of ASP.NET or PHP.  All they know is html markup, and it's already there waiting for them.
  * **Security is another thing static sites solve (for the most part).  **Whenever you're building sites, you constantly need to watch for sql injection for search or other trickeries from the bad guys.  With static sites, the majority of the security issues go away since your site doesn't have anything to update!  It's just a set of read-only files sitting out on a file server.  Where WordPress or other CMS products have access (potentially write) to the database, they are inherently more hacker-prone than static files.
  * **HTML is portable!  **Think about it &#8211; no more ASP.NET or PHP or Java requirements for your web server!  HTML is the most portable website technology of all time, because at the end of the day it is THE web technology.  You can move it from Apache to IIS to Glassfish to whatever you want and you're guaranteed that it'll work just as great as before you made the move.  Think about the next time your web host supports something like SOPA &#8211; you'll be ready to pack your backs and leave town at the drop of a hat.

My site may not be a static site (yet), but I'll think twice the next time I think about laughing at one.  Many times the keys to the future are sitting right there in the past, and static .html sites are no exception.  If you want to try out your own static site, then check out [HERA on Github](http://connatser.github.com/hera/).  Remember, sometimes thinking outside the box means thinking inside the box that's been neglected for a while.