---
id: 1001347691
title: Synchronize Node.JS Install Version with Visual Studio 2015
date: 2015-07-22T02:47:12+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347691
permalink: /synchronize-node-js-install-version-with-visual-studio-2015/
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
  - "39418"
dsq_thread_id:
  - ""
dsq_needs_sync:
  - "1"
image: img/wp-content/uploads/2015/07/maxresdefault.jpg
categories:
  - Blog
  - Featured
  - Software
---
Visual Studio 2015 is out for download now (and [free](https://www.visualstudio.com/downloads/download-visual-studio-vs) for individual use)!  It&#8217;s been so great to have integrated Grunt and Gulp support, and ES6+ features.  In addition, Visual Studio 2015&#8217;s installer has an option to install Node.JS as part of its regular install in order to support the Gulp and Grunt task runners that are built in.  However I ran into an issue today in which I updated Node.JS outside of Visual Studio, but **since VS uses its own install that is separate from any outside installation, you can potentially run into a node_modules package dependency issue where one version of npm installs a package (which makes it rely on that version of Node/npm), and then you can&#8217;t run commands in the other version (they break).**  Specifically, I had an issue with node-sass and windows bindings.  The solution was to point Visual Studio to the version of Node.JS that I had already set up externally to Visual Studio.  Here&#8217;s how to synchronize them:<!--more-->

  1. First, **find the Node.js installation you already have** and use at the command line.  **By default, Node.js 0.12.7 installs to &#8220;C:\Program Files\nodejs&#8221;**, as an FYI.
  2. Once you&#8217;ve got that all copied out to your clipboard, got to **Tools > Options in Visual Studio 2015.**
  3. In this dialog, go to **Projects and Solutions > External Web Tools **to open the dialog that manages all of the 3rd party tools used within VS.  This is where Node.js is pointed to.
  4. **Add an entry at the top to the path to the node.js directory to force Visual Studio to use that version instead.**

[<img class="alignnone size-full wp-image-1001347693" src="https://ryanhayes.netimg/wp-content/uploads/2015/07/Capture.png" alt="Capture" width="760" height="442" srcset="https://ryanhayes.netimg/wp-content/uploads/2015/07/Capture.png 760w, https://ryanhayes.netimg/wp-content/uploads/2015/07/Capture-300x174.png 300w, https://ryanhayes.netimg/wp-content/uploads/2015/07/Capture-610x355.png 610w" sizes="(max-width: 760px) 100vw, 760px" />](http://ryanhayes.netimg/wp-content/uploads/2015/07/Capture.png){.lightbox}

&nbsp;

And that&#8217;s it!  Now you&#8217;re all synced up!  Having two separate installs is really confusing.  If you&#8217;re starting out with JUST the VS Node.js version, you&#8217;ll eventually come to a point where you may update node.js by installing it outside VS, causing it to get out of sync anyway.  If you&#8217;re a veteran Node.js person, then you&#8217;re already using Node outside VS and will need to do this anyway. It seems like there should be better documentation or indicators to show what version VS is using so this is more apparent.

Hope that helped.  Did this fix it for you?  Do you have a better way of keeping this in sync or a plugin/tool to help out?  Let us know in the comments!