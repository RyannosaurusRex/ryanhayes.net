---
id: 1001347678
title: 'NServiceBus: Could not enumerate all types'
date: 2014-10-24T19:41:03+00:00
author: Ryan Hayes
guid: https://ryanhayes.net/?p=1001347678
tags:
  - .NET
  - NServiceBus
permalink: /nservicebus-enumerate-types/
image: img/things/bus.jpg
categories:
  - Blog
---
Did you get an NServiceBus `Could not enumerate all types` error? Then you've come to the right place. I've recently started using NServiceBus for the first time in a long time.  The initial setup was great, but once I started integrating it into a really large, complex, existing app, it took a bit of re-working.  One of the errors I ran into was a HUGE string of errors all centering around not being able to enumerate all types.  In this case, the root cause turned out to be NServiceBus scanning every single .dll of your app looking for handlers.  By default, it searches everything, and when that happens it can run into situations where it can break. The out of the box, greenfield developer experience works great, but if you're adding NServiceBus to an existing app, then you need to add the line below to fix the error.

Basically in an existing app where you've added NServiceBus code to handle/send messages, then you know exactly the assembly where it lives.  Again, **by default, NServiceBus scans everything, so in NServiceBus 5.0 and above, when you create the actual Bus object, you need to specify in the configuration the assemblies you want to scan.** Otherwise, you'll get an "Could not enumerate all types" exception. Generally, the code is going to be in right in the webapp/console app that you are adding it to, so in that case just add:

```csharp
var config = new BusConfiguration();

// config.AllYourOtherConfigurationGoesHere

config.AssembliesToScan(Assembly.GetExecutingAssembly());
var bus = Bus.Create(config);
```

This tells NServiceBus to only scan the assembly that is currently in use (This will fix things 95% of the time, unless your consumer/sender code is in a different project and pulled in).  Once this is configured, NServiceBus will not scan every single assembly in hopes of finding a handler somewhere, which helps a ton if you have really old assemblies that are fragile and busted.  🙂