---
id: 1001347557
title: How Using jQuery's $.get() Can Cause Subtle Bugs in Single Page Apps
date: 2014-04-02T15:38:25+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347557
permalink: /using-jquerys-get-can-cause-subtle-bugs-single-page-apps/
image: img/demo1.jpg
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
wpb_post_views_count:
  - "3080"
dsq_thread_id:
  - ""
categories:
  - Blog
---
While working with a single page app I inherited the other day, I ran upon a few very subtle bugs where I would save data on the screen and it would update in some places, but look like it wasn't being updated in others. It was maddening, and it ended up just being the difference between getting information from the server via the $.ajax() function vs the $.get() function, which I'll explain after the break.  Subtle bugs are the worst, but they're even harder when you're using a lower level library like jQuery to build a single-page webapp when there are special-built libraries like Angular.js, Ember, and Knockout designed specifically for this purpose. Even still, sometimes you may want to use jQuery to add some dynamic-ness to your app, so I won't judge!  If you do, you HAVE to remember this difference:<!--more-->

First, **people will tell you $.ajax() and $.get() are the same &#8211; they are technically _partially_ right, but dangerously wrong. **[If you take a look on Github, the $.get() method actually uses $.ajax() underneath](https://github.com/jquery/jquery/blob/master/src/ajax.js#L779), pretty much verbatim with your parameters, with the distinct difference that it does _not _allow you to specify the cache: false property.  **If you've used the $.ajax() method before and have had to test on multiple browsers, you'll notice that IE (caches by default) and webkit (does not cache by default) have different ideas of how it should work, and both are somewhat right.**  You can imagine the frustration when all of the calls in the app had used the $.get() method, which doesn't (can't) specify the cache property, so it WAS caching.  In IE, I would pull a list of items, delete one, and then when the app would try and refresh the data it would just pull the cache, which included the item I deleted.  Now, I can kind of see why if you're pulling a static resource, that $.get() would cache, but in a single-page app, you're on the same main page request each time, and since the page can be long-lived, it's important to realize you could go DAYS without a page refresh, potentially.

## The Takeaway

**Considering that in dynamic, always-updating single page apps, you can't assume data in your app will remain the same, it's important to use $.ajax() with the cache:false option ON to ensure that you are always getting the freshest data from the server.  **