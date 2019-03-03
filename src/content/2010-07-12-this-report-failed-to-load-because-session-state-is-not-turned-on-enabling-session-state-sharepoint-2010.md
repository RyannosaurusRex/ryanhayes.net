---
id: 1001346733
title: '&quot;Enabling SessionState for SharePoint 2010&quot; OR &quot;This report failed to load because session state is not turned on.&quot;'
date: 2010-07-12T14:48:00+00:00
author: Ryan Hayes
layout: post
guid: http://blog.ryanhayes.net/post/802228928
permalink: /this-report-failed-to-load-because-session-state-is-not-turned-on-enabling-session-state-sharepoint-2010/
dsq_thread_id:
  - ""
robotsmeta:
  - index,follow
wpb_post_views_count:
  - "4413"
image: img/wp-content/uploads/2013/10/SharePoint2010-WallPaper-03_lpubqc.jpg
categories:
  - Blog
tags:
  - SharePoint
  - software
---
<span id="ctl00_PlaceHolderMain_LabelMessage">SharePoint is a configuration nightmare.  There are so many settings that the more configuration settings you learn, the more you learn there are more settings that you’ve not even discovered yet.  For reporting, and specifically for me, running reports under an Issue Tracking site, SessionState must be turned on for the SharePoint 2010 web application.  If you don’t, you’ll get the error: </span>

> <span id="ctl00_PlaceHolderMain_LabelMessage"><strong>“</strong></span>**This report failed to load because session state is not turned on. Contact your SharePoint farm administrator.”**

**<span>To enable SessionState, follow these steps:<!--more-->

<br /> </span>**

  1. Open Internet Information Services (IIS) Manager
  2. Navigate to down to the site that is your SharePoint 2010 instance.  Typically, this will be named “SharePoint &#8211; 80”.
  3. Open the **Modules** settings.
  4. Under the **Actions** menu to the right, select **Add Managed Module…**
  5. **Wait** for the dialog to pop up…(it takes a bit)
  6. Enter a name for the new module, like “SessionState” (this is for reference only), and select the type of **System.Web.SessionState.SessionStateModule, Version=2.0.0.0**.

Now SessionState is enabled for your SharePoint site!

**Note:  If you decide to install Project Server or Team Foundation Server on the same server farm as your standard SharePoint instance(s), then they will automatically install the SessionState module during their configuration.  If you have previously installed the SessionState module and then install SPS or TFS, then you will need to go back in and remove the SessionState module that you added, as there will then be two conflicting references and will bring down all SharePoint sites with an error.  Just remove your reference and everything will be back to normal.**