---
id: 1001347483
title: IE11 Brings Long-Awaited, All-New Developer Tools for Single Page Apps
date: '2013-06-26T17:57:54+00:00'
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347483
slug: ie11-brings-long-awaited-all-new-developer-tools-for-single-page-apps
image: img/demo1.jpg
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
wpb_post_views_count:
  - "3281"
categories:
  - Blog
---
Today at Build 2013, Microsoft announced IE11 that ships with Windows 8.1.  Actually, before I go any further, I want to say that they should have named this release Internet Explorer 12. Like a smart kid that skips a grade in school, **this version brings so many features (WebGL!!!!) in compatability, performance and an all-new completely awesome dev tools (yes, you heard me right!), that they should just skip to the next version number.  **This is literally the version of IE that developers have been screaming for since IE8.  I'm not kidding. ** For the first time in a long time, IE is now a _DEVELOPER's browser._**_ _From IE9, MS has focused on performance and interoperability to the point where developing a standards-compliant site literally means it just works (99.9% of the time in IE). ** In fact, JQuery 2.0 now has more fixes to support bad standards implementations in Chrome, Safari, and Firefox than IE ([true story](https://blog.jquery.com/2013/01/14/the-state-of-jquery-2013/)).**_ _Here are my favorite updates for IE11:<!--more-->

### [F12 Developer Tools](https://msdn.microsoft.com/en-US/library/ie/bg182632(v=vs.85))

  1. <span style="line-height: 13px;"><b>No Refresh Button &#8211; </b>I do a lot of work on Single Page Applications that are incredibly responsive and one of the problems with the old tools is that the dom didn't update automatically and you were forced to hit a refresh button any time you wanted to see updates from AJAX or even just basic JavaScript updates.  It was a pain with so much going on on the page. Now things update on the fly.  On top of that, you don't have to refresh the page to start debugging Javascript.  Awesome.</span>
  2. **Visual Studio In my IE Developer Tools &#8211; **Wow, ok, so one of the best things.  I don't know if they got the Visual Studio team to come help out or what, but if you're a VS developer you'll see _a ton _of features that feel like you're in VS.  Intellisense is now available in a lot of areas to make is much easier to add CSS without having to know exactly what you want.
  3. **Performance evaluation tools &#8211; **Ok, so maybe this is my favorite.  Now there are tools to do performance snapshots while your app is running so that you can see memory usage differences between a few different points in time.  But wait, there's more!  You can drill into individual variables and functions and it'll give you very detailed readouts of where your performance bottlenecks or leaks are. It's incredibly powerful for building Single Page Applications where leaks are critically important for pages and scripts that run for very long periods of time.

[<img class="alignnone size-full wp-image-1001347488" alt="IE11 Developer Tools" src="https://res.cloudinary.com/ryanhayes-net/image/upload/v1382116574/IC666321_drlrxz.png" width="735" height="500" />](https://res.cloudinary.com/ryanhayes-net/image/upload/v1382116574/IC666321_drlrxz.png)

## [<img class="alignnone size-full wp-image-1001347485" alt="IE11 Developer Tools" src="https://res.cloudinary.com/ryanhayes-net/image/upload/v1382116575/IC6663221_nv7qzv.png" width="735" height="500" />](https://res.cloudinary.com/ryanhayes-net/image/upload/v1382116575/IC6663221_nv7qzv.png)

Incredible, incredible update with a lot more stuff.  It's been much needed.  With these top features, GPS emulation, WebGL support, and much more, **it makes me so happy to see IE on-par as a web development browser.**

What are _you _most excited about and what other features would you love to see in the dev tools that this update may have missed?  [Also, check out more of what's new in IE11 in Microsoft's official post.](https://msdn.microsoft.com/en-US/library/ie/bg182625(v=vs.85))
