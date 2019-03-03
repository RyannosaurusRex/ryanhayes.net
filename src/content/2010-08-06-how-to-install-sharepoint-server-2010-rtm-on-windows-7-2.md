---
id: 1001346732
title: How To Install SharePoint Server 2010 RTM on Windows 7
date: 2010-08-06T03:37:00+00:00
author: Ryan Hayes
excerpt: "If you've developed for SharePoint in the past, you know how painful it is to have to do all development on a Windows Server machine.  In this article, I'll show you how to get SharePoint 2010 up and running on your Windows 7 development box."
layout: post
guid: http://blog.ryanhayes.net/post/910790633
permalink: /how-to-install-sharepoint-server-2010-rtm-on-windows-7-2/
Thumbnail:
  - img/wp-content/uploads/2010/08/SharePoint2010-WallPaper-03.jpg
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "1781"
image: img/wp-content/uploads/2013/10/SharePoint2010-WallPaper-03_lpubqc.jpg
categories:
  - Blog
  - Software
tags:
  - development
  - SharePoint
---
When developing SharePoint 2010 Applications, you must have an instance of SharePoint 2010 installed on the same machine to both allow for access to SharePoint .dlls as well as for easy deployment and debugging purposes.  One of the problems with this is that SharePoint 2010 has always been solely supported on Windows Server operating systems.  With SharePoint 2010 you can now install and develop on Windows 7 (x64 versions only)!<!--more-->

When SharePoint 2010 was out in Beta, you could download the single, very large setup.exe file and [follow the MSDN instructions](http://msdn.microsoft.com/en-us/library/ee554869%28office.14%29.aspx) line-by-line to get it installed on Windows 7 perfectly.  With SharePoint 2010 RTM, things are a little different, but not by much.  My modified instructions will get you up and running in minutes with the new assumption that **months after RTM is out, you still DON’T want to install the Beta!**

First off, go ahead and open [those instructions](http://msdn.microsoft.com/en-us/library/ee554869%28office.14%29.aspx) I told you about.  **These instructions assume you STILL are using a single SharePoint Server installation file**, which is how the Beta was distributed.  This can be confusing when trying to install the RTM version, since it is now likely that you will be installing from an .iso image, and very much _not_ in the form that is assumed by the official Microsoft setup instructions.

The contents of the RTM .iso file for SharePoint are actually what you get when you follow steps 1 and 2.  This is _fantastic_ because Microsoft actually has a typo in the line they tell you to run in the command prompt, so it doesn’t work as advertised anyway (but that’s a correction post for another day).  So, read throught the instructions (don’t forget the hotfixes that you have to install before step 1…yes, steps before step 1…I know) but **replace steps 1 and 2 with this step:**

> Instead of step 1 and 2, create a new folder (c:\SharePointFiles) and do a direct copy of all the contents of the SharePoint installation disk into the folder.  This will give you write access to the SharePoint config files to add settings to unlock installation on Windows 7.

Besides those changes, everything else is exactly as the MSDN instructions outline.  Just use the new folder as if you have just extracted the single .exe file that they assume you are starting with.  Now go write some webparts or something!