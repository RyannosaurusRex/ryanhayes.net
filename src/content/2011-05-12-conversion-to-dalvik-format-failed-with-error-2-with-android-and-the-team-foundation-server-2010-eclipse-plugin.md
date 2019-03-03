---
id: 1001347241
title: '&quot;Conversion to Dalvik format failed with error 2&quot; with Android and the Team Foundation Server 2010 Eclipse Plugin'
date: 2011-05-12T15:03:24+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347241
permalink: /conversion-to-dalvik-format-failed-with-error-2-with-android-and-the-team-foundation-server-2010-eclipse-plugin/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "4568"
image: img/wp-content/uploads/2013/10/android1_rabhvp.gif
categories:
  - Software
tags:
  - android
  - development
  - Eclipse
  - Java
  - software
  - Team Foundation Server 2010
---
Recently I&#8217;ve been working on an big Android application where I work set for release later this year.  It&#8217;s going to be a great help to employees and distributors in the field letting them do all sorts of things they normally need to be at a computer for.  I&#8217;m using my Macbook Pro to do development as it&#8217;s easier to not have to switch back and forth from OSX to windows as I&#8217;m building application features in parallel in an effort to release simultaneously (which may or may not be smart).  One thing, though is that we use Microsoft&#8217;s Team Foundation Server at work, which is, of course, a Microsoft product.  Luckily they bought TeamPrise somewhere along the line and now there&#8217;s [a great Eclipse plugin](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=AF1F5168-C0F7-47C6-BE7A-2A83A6C02E57&displaylang=en) (unfortunately and frustratingly, only available to Bizspark or MSDN Ultimate subscribers &#8211; license key required upon install) to let you check in/out right from within Eclipse.  However, I had one problem that I couldn&#8217;t seem to figure out until I accidentally seemed to find something that works&#8230;<!--more-->

Upon installing the TFS Eclipse plugin and adding a project to source control, you&#8217;ll likely come across this error:

> &#8220;Conversion to Dalvik format failed with error 2&#8221;

Something about the way files are added to TFS causes this error to happen initially, and no amount debugging the code will help at all (just to save you some time).  Here&#8217;s what worked and is the #1 thing to try according to my old pal who taught me how to code Java well in the first place &#8211; Drew Stockdreher.

In Eclipse&#8217;s menu:

  1. Select **Project**
  2. Select **Clean&#8230;**
  3. **Profit!** (or continue in what you were doing because you don&#8217;t need a step 3).

That&#8217;s it to fix this little error.  Now, I&#8217;m not saying this error doesn&#8217;t represent multiple different states, because exceptions can certainly do that to you sometimes.  However, if you&#8217;re getting started with TFS and Android in particular, give this trick a try whenever you come across it to rule it out as it literally almost takes no time at all.

_Did this not help you out?  Did you find that &#8220;Conversion to Dalvik format failed with error 2&#8221; means something else?  Leave a comment and let everyone know!_

&nbsp;