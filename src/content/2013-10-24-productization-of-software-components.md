---
id: 1001347510
title: Productizing Software Components
date: 2013-10-24T02:38:26+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347510
permalink: /productization-of-software-components/
image: img/demo1.jpg
tags:
  - software
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
wpb_post_views_count:
  - "5503"
categories:
  - Blog
---
One of the most fun things as a software developer is building really awesome components and APIs that other developers will use.  With the current popularity of Github that capitalizes on this love, and with NuGet, we've seen an explosion in the ability for components to become popular and be reused by other developers.  The only problem is that this trend is lagging behind in the enterprise.  On top of that, reusable modules in the enterprise setting typically consist of random project references using svn:externals (yea, I didn't know what that was either, but apparently some people use it for dependency management), .dll includes from who knows where, or worse.  Components may seem awesome to the developer that made them, but are they _really_ reusable?  **The true test of reusability and maintainability is after you're gone, when there's no documentation and someone new has to use (or worse, _modify)_ the code.  **That's why I'm proposing you **productize your components.**  Here's how&#8230;<!--more-->

### Default to closed

Not in the open source sense, where you make it open source until you have a reason to make it closed.  I'm saying **only expose methods and functionality that is absolutely necessary to get the job done**.  Default everything to private except for the highest level methods.  There's a real temptation in software development to make things ultra configurable and extensible and customize-able &#8211; resist this temptation.  All of these things if done for the sake of doing them add complexity for you and for others.  **Whatever complexity level you perceive your code to be, it will be 5x that for any new developer &#8211; code accordingly.  **KISS (Keep it Simple, Stupid) and YAGNI (You &#8216;Aint Gonna Need It) all come into play here.  The less you expose to get the job done, the more secure your system will be and the more likely someone will use it rather than saying "This is too complex, I'll just make a new component that does the same thing, but how I like it".

<p style="text-align: center;">
  <strong>Make it obvious to new developers how to effectively use your library&#8230;</strong>
</p>

<p style="text-align: center;">
  <a href="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/UvgtEi6_nowyz1.gif"><img class="size-full wp-image-1001347515 aligncenter" alt="Trying a new software library." src="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/UvgtEi6_nowyz1.gif" width="360" height="204" /></a>
</p>

<p style="text-align: center;">
  <b>&#8230;by not giving them the power to do horrible, horrible things!</b>
</p>

<p style="text-align: center;">
  <a href="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/yqHO0yO_chimen.gif"><img class="size-full wp-image-1001347514 aligncenter" alt="I immediately regret this decision" src="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/yqHO0yO_chimen.gif" width="500" height="281" /></a>
</p>

### Provide Working Samples (Unit Tests)

The problem with a lot of components is that they're hard to use and easy to misuse.  You should be writing unit tests.  I know, "But Ryan, that's a lot of code and we don't have time to unit test everything".  Well, if you can't test everything, be pragmatic and **use unit tests to create examples of how to use your component the right way**.  Remember, if you default to closed, then you'll have less possible paths, which means you'll be writing fewer unit tests and still be awesome!

### Depricate Correctly

In C# you can depricate methods by using the [Obsolete] annotation over a method.  You can even get fancy and use [Obsolete("Reason to not use this", true)] in order to make compilation fail if someone uses the method if you want to be hardcore.  My point is that you shouldn't just write a comment to say not to use something, or just assume someone else will come along and know to delete unused code.  "If you see something, say something!" in the form of depricating methods in a way that the compiler can warn others.

<p style="text-align: center;">
  <strong>You don't want to get to the point where you can't remember if you should or shouldn't use something!<a href="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/iWRYZI0_nclrk0.gif"><img class="size-full wp-image-1001347513 aligncenter" alt="Should I use this?" src="https://ryanhayes.wpengine.comimg/wp-content/uploads/2014/01/iWRYZI0_nclrk0.gif" width="195" height="201" /></a></strong>
</p>

### Automate Build and Deploy to Maximize Discovery

****While NuGet is a bit specific to .NET, this also goes for delivery via the Node.js package manager, a ruby gem or similar mechanism that developers can discover reusable components.  I personally use [TeamCity](https://jetbrains.com/Teamcity) to automate my builds as it can run continuous integration for .NET, Java, Node.js, and pretty much anything else since you have access to the command line.  The best feature of TeamCity is it has a private NuGet feed built in that makes your automatically built components discoverable.  One huge problem with a lot of organizations I see is discoverability of reusable components, where helper classes and utilities will be hidden deep in source control with no documentation.  Writing a quick .nuspec file and adding a NuPack step in the TeamCity build process (all ready out of the box) lets you give new developers a single NuGet feed URL and have instant access to production-ready components that have been built by TeamCity.  In addition, everything is auditable since the builds are automated from check-in to release, so every NuGet package has "living documentation" as to how to build it, where it is in source control, and is gated so components in the feed are guaranteed to be unit tested and ready to go.  The power of NuGet also lets you pack README.txt or example config files, and even change the web.config if you need to so there's no question how to get rolling with a component.  So awesome!

### The Customer is Always Right

When you're building a reusable component, think about the customer and what someone totally new to the project would want to see.   Make the friction of getting up and running as low as possible.  Make things obvious, get a second opinion if you have to.  At the end of the day, the customer is the junior level programmer that will take over the boring maintenance of this, or even your future self!

&nbsp;

&nbsp;