---
id: 1001347453
title: 'IE10 on Windows 7: Happiness for the Web'
date: '2013-02-26T14:27:50+00:00'
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347453
image: img/demo1.jpg
slug: ie10-on-windows-7
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
wpb_post_views_count:
  - "2726"
bluth_post_layout:
  - right_side
bluth_post_right_sidebar:
  - sidebar_right
bluth_post_left_sidebar:
  - sidebar_left
bluth_facebook_status:
  - ""
bluth_twitter_status:
  - ""
bluth_google_status:
  - ""
categories:
  - Blog
---
Today is a great day for the Web.  [IE10 has officially been released for Windows 7](https://blogs.msdn.com/b/ie/archive/2013/02/26/ie10-for-windows-7-globally-available-for-consumers-and-businesses.aspx) (Sorry, XP, you're what, 12 years old now?).  This release will play a significant role in getting the majority of the web up to the latest version of Internet Explorer, which is THE release we've been waiting for as web developers for years now.  IE "just works".  With huge strides in interoperability, **a 60% increase in supported web standards over IE9**, IE10 allows you to write standards compliant HTML and JavaScript and know that it'll work across all modern browser, including IE10.   This DRASTICALLY reduces development time for web applications and makes the web the best platform for delivering apps (IMHO, of course).  Not to mention it's the [fastest browser on Windows 7 now](https://ie.microsoft.com/testdrive/Benchmarks/SunSpider/Default.html).

## With great power comes great responsibility.

Ok, now that IE10 is standards compliant, there's no more excuses for web developers.  **It's now on US to write standards-compliant code.**  If we do things like checking for IE across the board and serve up IE7 JavaScript, then _you_ are making the web worse, not IE.  If we were to check for Chrome, and run a totally Chrome-specific version of code, that would be unnecessary complexity, and a degraded user experience.  **Nowadays, the best practice is feature detection. ** By that, I mean doing checks like "does this browser support feature X?" instead of "Is this browser IE9?" Even checking for a particular version can introduce issues if there is a bug or a patch that comes out mid-stream, for example.  So, make sure you use things like [Modernizr](https://modernizr.com/) to ensure you check for features specifically.  In addition, this makes your code work better across even MORE browsers, not just IE, Chrome, Firefox, and Safari.

### IE 10 Auto-updates Incoming

Most users will auto-update to IE10 over the coming weeks/months, though if you're on Windows 7 and want to get rolling sooner (like, now), then [you can download IE10 here](https://windows.microsoft.com/en-us/internet-explorer/download-ie).  If you want to have a little fun, go play [Minesweeper](https://ie.microsoft.com/testdrive/Performance/Minesweeper/Default.html) (yes, THAT Minesweeper) in IE9 and look at the performance, then go download IE10 and check it out to see the performance improvement.

Happy browsing!
