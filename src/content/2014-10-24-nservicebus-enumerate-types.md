---
id: 1001347678
title: 'NServiceBus: Could not enumerate all types'
date: 2014-10-24T19:41:03+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347678
permalink: /nservicebus-enumerate-types/
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
  - "6762"
dsq_thread_id:
  - ""
image: img/wp-content/uploads/2014/10/nservicebus_logo-black.png
categories:
  - Blog
---
I've recently started using NServiceBus for the first time in a long time.  The initial setup was great, but once I started integrating it into a really large, complex, existing app, it took a bit of re-working.  One of the errors I ran into was a HUGE string of errors all centering around not being able to enumerate all types.  In this case, the root cause turned out to be NServiceBus scanning every single .dll of your app looking for handlers.  By default, it searches everything, and when that happens it can run into situations where it can break.  The out of the box, greenfield developer experience works great, but if you're adding NServiceBus to an existing app, then you need to add the line below to fix the error.

Basically in an existing app where you've added NServiceBus code to handle/send messages, then you know exactly the assembly where it lives.  Again, **by default, NServiceBus scans everything, so in NServiceBus 5.0 and above, when you create the actual Bus object, you need to specify in the configuration the assemblies you want to scan.**  Generally, the code is going to be in right int he webapp/console app that you are adding it to, so in that case just add:

[syntax type="html|php|js|css"]

var config = new BusConfiguration();

// config.AllYourOtherConfigurationGoesHere

**config.AssembliesToScan(Assembly.GetExecutingAssembly());**

var bus = Bus.Create(config);

[/syntax]

This tells NServiceBus to only scan the assembly that is currently in use (This will fix things 95% of the time, unless your comsumer/sender code is in a different project and pulled in).  Once this is configured, NServiceBus will not scan every single assembly in hopes of finding a handler somewhere, which helps a ton if you have really old assemblies that are fragile and busted.  🙂