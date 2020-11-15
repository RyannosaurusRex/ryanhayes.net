---
id: 1001347859
title: 'How to Permanently Fix "Could not copy "C:\MyProject\MyDLL.dll" to "C:\MyProject\bin\Debug\MyDLL.dll".'
date: '2018-06-18T19:03:02+00:00'
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347859
image: img/demo1.jpg
permalink: how-to-permanently-fix-could-not-copy-dll-to-dll/
categories:
  - Blog
---
Recently I had an issue where when I would try to run and debug a webapp inside Visual Studio 2017, I would get an error where the .dlls couldn't be copied out to the bin directory, which meant I couldn't actually run the app at all! I would keep getting this error:

> "Could not copy "C:\MyProject\MyDLL.dll" to "C:\MyProject\bin\Debug\MyDLL.dll"

**This error is usually caused by a lock on the target file, preventing it from being deleted.**

There was only one problem &#8211; I had restarted Visual Studio and it was still happening.

I even restarted my computer, which fixed the problem once, but subsequent runs brought the error back.

## The Root Cause

The actual root cause ended up that I actually had multiple projects set up as my startup project, but ONE of the projects wasn't set up to debug, while the other was.

**When you set the configuration in Visual Studio for a project to run without debugging, it actually doesn't give the app the hooks that Visual Studio needs in order to close the app once you select "Stop Debugging".**  This causes you to have an orphaned process, particularly if the app is set up as a headless console app or a windows service, where you don't see anything on your screen to give you an indication of what's running that has a hold on the files in your project's /bin directory.

## The Solution

The solution is a few things:

  1. **Open _Task Manager_ and close any orphaned processes** you may have spun up -or- restart your machine to make sure everything is cleaned out.
  2. **Ensure that all the projects are set to a debug configuration.**  This is _probably_ what you want, and will fix the could not copy error permanently.  If this is _not_ what you want, then leave it, but now at least you're aware of the cause.

I hope this helps point you in the right direction, particularly on projects where you may have a webapp and then a scheduler all in the same solution, but have a mix of debugger/no debugging for them and start to have the "Could not copy dll" error message.

&nbsp;

&nbsp;
