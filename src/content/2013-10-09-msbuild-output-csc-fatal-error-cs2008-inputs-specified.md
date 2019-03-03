---
id: 1001347494
title: '[MSBuild output] CSC : fatal error CS2008: No inputs specified'
date: 2013-10-09T02:03:31+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347494
permalink: /msbuild-output-csc-fatal-error-cs2008-inputs-specified/
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "5461"
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
Today I was setting up an automated build using TeamCity and came across an issue where the build of the solution kept failing.  The only reason that was given was this:

> [MSBuild output] CSC : fatal error CS2008: No inputs specified

Turns out that **MSBuild actually fails the whole build when you&#8217;re running it from the command line like this if there&#8217;s not a file that it can build**.  The project in question was actually just full of XML and configuration files that other projects referenced and got published with a NuGet package to our private feed.  **To fix it, I just added a simple .cs file, so that MSBuild had something to do.  🙂**

Here&#8217;s the code:

[syntax type=&#8221;html|php|js|css&#8221;]

using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Text;

namespace Configuration  
{  
class MSBuildBugFix  
{  
// MSBuild has a bug where if no source files are found, the build fails when  
// running from the commandline (or in our case, TeamCity). This file is only here  
// to allow the build to complete.  
}  
}

[/syntax]

&nbsp;