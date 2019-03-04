---
id: 1001346743
title: 'Android Project Part I: Background'
date: 2010-05-31T06:55:35+00:00
author: Ryan Hayes
layout: post
guid: http://blog.ryanhayes.net/post/649180253
permalink: /android-project-part-i-background/
image: img/demo1.jpg
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "1493"
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
tags:
  - android
  - Java
  - requirements
  - software
---
For starters, let me give you some background on starting this blog series.  I spend a lot of time looking things up and learning.  The downside?  I forget things.  So, this will be a win/win.  I can write things I find out down here so that I don’t forget them AND since Google will crawl this site, I will be more likely to re-find it in the future!

I’m going to be writing a miniseries on Android App development.  My home church is [Harvest Community Church](http://www.harvesttn.com/) (or Harvest for short) in Kingsport, TN.  Like many churches, you can get updates, listen to sermon recordings, watch videos, and the like.  The problem for people like me who are very mobile oriented, is that I rarely “go” to a site from a real web browser anymore.  There’s an “app for that” on my phone that aggregates all that information and brings it straight to me.  My calendar, contacts are all synchronized with Facebook and Twitter and my information is all brought to me via Google Reader and the magic of RSS.

The problem is that trying to stay up-to-date with what’s going on at the church from day-to-day is hard!  Nobody wants to have to spend 15 minutes [swyping](http://www.swypeinc.com/) the bulletin calendar into their phone.  This is the motivation behind HarvestDroid and what I want eventually to be an open source ChurchDroid template for any church to use (replacing RSS/Photosharing/Content addresses and locations). My initial requirements and posts will be:

### Requirements

  * A Tab menu to divide the following sections
  * News Tab 
      * This is a list of announcements
  * Radio Tab
  * Sermon list
  * Videos 
      * Open media with music player intent
      * Open media with embedded player
  * Visit! Tab 
      * Phone call integration
      * Email integration
      * Google Maps Directions/Navigation Integration
  * Future Enhancements 
      * Android notifications of updates
      * Social integration 
          * Facebook?
          * Foursquare?
      * UI Skinning (Gotta fancy it up, right?)
      * Offline Access/Caching (This targets 3G/Media, so I assume the app to be connected 99% of the time you use it)
      * Add events to the Google Calendar app

So, as of now, that seems like a nice list.  What do you think?  If you had a mobile app for your church, what would you want to help you stay connected?