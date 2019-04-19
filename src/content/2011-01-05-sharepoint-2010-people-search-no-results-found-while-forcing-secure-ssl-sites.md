---
id: 1001347099
title: 'SharePoint 2010 People Search: No Results Found While Forcing Secure (SSL) Sites'
date: 2011-01-05T14:57:25+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347099
permalink: /sharepoint-2010-people-search-no-results-found-while-forcing-secure-ssl-sites/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "2705"
image: img/wp-content/uploads/2013/10/SharePoint2010-WallPaper-03_lpubqc.jpg
categories:
  - Software
---
Recently, I had a problem with SharePoint 2010's people search.  It stopped working, particularly after the network guys set us up with auto-forwarding https:// requests over to https://.   Once that was set up, it broke the search.  We couldn't get any results to come back for the regular search or people search.  Turns out you need to point SharePoint 2010's search crawler not only to your content, but also use the proper protocol.  If you force SSL, then you need to change the protocol accordingly.  Here's how.<!--more-->

  * First, navigate to your **SharePoint Central Administration** area.  From there, under **Application Management**, select **Manage Service Applications.**
  * Select the **Search Service Application**.
  * Select **Content Sources**.
  * Select **Local SharePoint sites** or any of the content sources you have set up on the list.
  * Look at the **Start Addresses** area.

This is where you see all of the places that the SharePoint crawler will start at.  There are several different types of protocols that you can use here, but the main one is **sps3://**.  If you are using **https://** here, it's obvious you'll need to change it to **https://**, which was the first thing I did.  Regular search kept working.  However, I didn't know that to access secure content, you will need to change **sps3:// to sps3s://**.  That is basically the equivalent of the switch to https.  Once you've got the protocols/paths all set up, select the **start full crawl** to have the crawler flush out everything get your search working again.