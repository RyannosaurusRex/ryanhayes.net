---
id: 1001347052
title: Visual Studio 2010 SP1 brings Intellitrace to x64 and SharePoint 2010
date: 2010-12-07T14:21:41+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347052
permalink: /visual-studio-2010-sp1-brings-intellitrace-to-x64-and-sharepoint-2010/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "2533"
image: img/wp-content/uploads/2013/10/visual_studio_ars_bvocjw.jpg
categories:
  - Blog
  - Software
tags:
  - development
  - Intellitrace
  - SharePoint 2010
  - visual studio 2010
---
Visual Studio 2010 SP1 Beta is out for MSDN subscribers, and brings great new features for everyone &#8211; not to mention SharePoint development.  If you&#8217;ve used Intellitrace to step backwards through your code to debug tricky situations that require more context, you know how awesome it is.  Unfortunately, that&#8217;s not available for x64 bit and SharePoint projects currently.   Finally, SP1 bring that functionality to us along with a lot more.  Here are some of the highlights via [Jason Zanders&#8217; Weblog](http://blogs.msdn.com/b/jasonz/archive/2010/12/07/announcing-visual-studio-2010-service-pack-1-beta.aspx):<!--more-->

  * **Help Viewer &#8211;** The new local Help Viewer is a simple client application that re-introduces key productivity features including a fully-expandable table of contents and a keyword index.  For additional information about these improvements, check out Jeff Braaten’s post [here](http://thirdblogfromthesun.com/2010/10/the-story-of-help-in-visual-studio-2010-part-3/ "here").

<img src="http://blogs.msdn.com/resized-image.ashx/__size/550x0/__key/CommunityServer-Blogs-Components-WeblogFiles/00-00-00-30-15-VS2010+SP1+Beta/1512.Help-Viewer-Keyword-Index.jpg" border="0" alt="" width="451" height="295" /> 

  * **Better platform support &#8211;** Looking at support of platforms newly-available around Visual Studio 2010 release, we wanted to make small investments to upgrade our support for them. [Silverlight 4 Tools for Visual Studio 2010](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=b3deb194-ca86-4fb6-a716-b67c2604a139 "Silverlight 4 Tools for Visual Studio 2010") (with a few updates to RIA Services) is now included in the box along with Silverlight 3 support, underscoring our commitment to that quickly-evolving platform. We’ve also made a number of other targeted changes, including some additional Win7-specific MFC APIs to support use of Direct2D, DirectWrite, and Windows Animation Technologies. There were also a number of areas where you told us we could do better, so we went in and filled some holes: 
      * **Unit Testing on .NET 3.5** – today all unit tests are run under .NET 4. While acceptable for most users because of the compatibility work we did in .NET 4, this caused problems for some of you with .NET 3.5-specific dependencies.
      * **IntelliTrace F5 for 64 bit and SharePoint projects** – you’ve told us that IntelliTrace is great, but you want to use it on all the projects you’re working on.
      * **Performance Wizard for Silverlight** – Similarly, our performance profiling tools are very useful, but you want to use them for your Silverlight development as well. Silverlight projects are included in the Wizard just like your client projects today.
      * **VB Compiler runtime switch** – This switch will enable Visual Basic developers to target their apps and libraries at platforms where the full Visual Basic Runtime hasn’t traditionally been available.

[**Download Service Pack 1 Beta (MSDN Subscribers only)**](http://go.microsoft.com/fwlink/?LinkId=207267 "Download Service Pack 1 Beta (MSDN Subscribers only)")  
[**Download available for everyone 12/9/2010 is** **here**.](http://go.microsoft.com/fwlink/?LinkId=207130)