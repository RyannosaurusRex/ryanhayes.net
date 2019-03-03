---
id: 1001347285
title: Will XNA be available in Windows 8 Metro Apps?
date: 2011-09-15T21:45:23+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347285
permalink: /will-xna-be-available-in-windows-8-metro-apps/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "1998"
image: img/wp-content/uploads/2013/10/panic_ackmmv.gif
categories:
  - Software
tags:
  - Build
  - Windows 8
  - windows phone 7
  - XNA
---
One of the big things I&#8217;ve seen flying around Twitter lately is the question of whether or not XNA is being depricated or faded off into the sunset or whatever.  I can understand how if you base your entire career on a single technology this might be scary, but remember that XNA isn&#8217;t available in METRO UI apps only, and that&#8217;s because Metro UI uses DirectX 11, and the current XNA implementation uses DirectX 9, which is still supported by the standard desktop view.  This means that XNA is still very much alive and well in the Desktop, and I would say thriving.  XNA isn&#8217;t going away anytime soon, and here&#8217;s why:<!--more-->

**XNA is multi-platform, popular, and just an abstraction.**

While I don&#8217;t speak for Microsoft or have any insider information on XNA in particular, I do know that they are invested in XNA in a lot of areas.  Windows Phone uses XNA for games and rich applications.  Xbox has TONS of indie games using XNA and many Xbox Live Arcade games are written using it.  It&#8217;s so popular in fact that there are [third parties building full game engines](http://www.garagegames.com/products/torque-x) on top of it.  It&#8217;s a gaming platform for Mobile, Xbox, and Windows (including Windows 8).  At the end of the day, it&#8217;s just a a  really awesome platform built on top of DirectX.  All it does is help game developers by making them not have to write all the lame and boring boilerplate code for every single game.  It&#8217;s not going anywhere unless DirectX changes bigtime or something more awesome comes out, and that&#8217;s highly unlikely on the former, and the later is probably just going to be the next version of XNA which supports DirectX 11 (Metro UI!).

<div style="width: 245px" class="wp-caption alignright">
  <img title="Windows Phone 7 Metro UI" src="http://techiser.comimg/wp-content/uploads/2010/10/Samsung-Focus-Windows-Phone-7.jpg" alt="" width="235" height="237" />
  
  <p class="wp-caption-text">
    Metro UI on WP7
  </p>
</div>

<div style="width: 326px" class="wp-caption alignright">
  <img title="Windows Phone 7 XNA Game" src="http://4.bp.blogspot.com/_RHC2dZOTRJo/THem_fs9wNI/AAAAAAAAAbE/WXZCG8AJUm0/s1600/catapultwars3.png" alt="" width="316" height="173" />
  
  <p class="wp-caption-text">
    XNA Game on WP7 - Nobody cares it's not a part of the Metro UI. It's all seamless at the user level.
  </p>
</div>

**XNA being separate from the Metro UI shouldn&#8217;t shock you (you&#8217;ve seen it before!).** Have you ever used a Windows Phone?  The UI is all written in Silverlight and has a Metro UI that Windows 8 uses as inspiration.  In Windows Phone, you have the Metro UI for most everything and any games you see are written in XNA.  This is essentially what Microsoft has shown with Windows 8.  The Metro UI is the new interface for **touch apps**, not Photoshop or Visual Studio or any other application that requires a lot of tools and a lot of text entry.  Touch isn&#8217;t for everything &#8211; any good UX person (including those at Microsoft) knows this.  Even if there were no such thing as the Windows Seven-esque chrome UI anymore, I would still expect XNA to be separate and run separately.  At the end of the day the separation isn&#8217;t seen or cared about by the user.  They&#8217;ll go to the Metro UI home screen and slide through tiles; they&#8217;ll click on your game icon; your game will run and they&#8217;ll be happy.  The seamlessness is still there and the user doesn&#8217;t care if XNA is &#8220;inside&#8221; a Metro app or not.  They just have fun &#8211; how things should be.