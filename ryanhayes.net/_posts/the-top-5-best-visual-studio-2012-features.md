---
id: 1001347383
title: The Top 5 Best Visual Studio 2012 Features
date: '2012-08-15T20:32:27+00:00'
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347383
image: img/demo1.jpg
permalink: the-top-5-best-visual-studio-2012-features
standard_seo_post_level_layout:
  - ""
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "3037"
categories:
  - Blog
  - Software
---
I love Visual Studio releases.  I remember when 2005 came out when I was in college, and while everyone else was writing their projects in C++, I was using C# and VS 2005.  I asked my professor if I could write my programs in C# (this was an architecture class where the apps could be written in anything).  I remember finishing my program way early, and with time to go back and add bells and whistles (yes, I did non-extra-credit extra-credit for fun&#8230;a nerd through and through).  The thing was, though, is that Visual Studio was such a joy to program in compared to DevC++ and even Eclipse, that I actually WANTED to write more code because it was so much fun.  I've been using the Visual Studio 2012 RC for a couple months now and have loved every minute of it.  So, to celebrate its release, here are my top 5 awesome features for in VS2012.<!--more-->

## Opening VS2010 Projects and Not Breaking Things

Remember when VS2010 came out?  Remember wanting to use it on your team?  **Remember how projects were incompatible so you had to wait forer the whole team to upgrade? ** Yea, that sucked.  Oh wait.  **Remember looking at the .csproj file and seeing the only difference was the version number?  **

In VS 2012 you can open VS2010 files and not break them for the rest of your team.  That's right.  You can use VS2012 TODAY and work right alongside your coworkers using 2010.  In fact, I've been doing just that with my team for months with the RC.  It works great and we've yet to run into a single issue working together.  Peace.  Code.  Harmony.

## Speed

It's super fast.  Way faster than VS2010, which is a feature in itself.  I can get more work done faster when I don't see the VS UI turn into a white snowstorm of death.

## Building Windows 8 Apps

Windows 8 is here and VS2012 lets you build awesome apps in C#, C++, and even Javascript.  That's awesome.  Next.

## Debugging T4 Templates

Debugging T4 Templates has been really hard in the past.  In building [ShoelaceMVC](https://ryanhayes.net/blog/shoelacemvc-open-source-asp-net-mvc-3-starter-project-for-build/), the only way to make sure my T4 templates to generate views actually worked was to generate them live.  Which sucked.  Really.  It's slow and cumbersome and time consuming and manual.  In VS2012, they introduced the ability to step through and debug T4 templates as it generates your code.  This is amazing and a huge timesaver for people who work on frameworks, starter projects, and other awesome tools.

## TFS in the Cloud

Team Foundation Server has always been a good, solid product.  Shelvesets make it easy to share and show others your code.  Gated checkins and automated builds? &#8211; Check.  The problem though is continuous integration and using it with Scrum.  Nobody &#8211; and I mean nobody &#8211; has done a good end-to-end solution from requirements, to agile, to code, to code review, to build, to test, to deployment.  The whole ALM circle at once is what developers have been looking for for years.  You can do Jetbrains TeamCity, but you need another tool to do agile, and another to track bugs.  You can do full application lifecycle management, but you need someone to set it all up and manage it, which is usually different products stitched together with hopes, dreams, and prayers that it won't break and you never have to touch it again (plus it's a lot of work to set up).  **The new TFS in the cloud changes everything.  **It includes agile project management using a card board.  It's got all the branch/merge goodness that TFS has always had, but the best part is automated deployments, particularly to Azure, which is just awesome for people like me who have a 100% in the cloud business and clients who are doing the same.  You can check it out at https://tfspreview.com

&nbsp;

So what are your favorite new features in VS2012?  Let me know in the comments below!
