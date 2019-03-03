---
id: 1001347440
title: Thoughts on Internet Explorer in 2013
date: 2013-01-17T23:19:55+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347440
permalink: /thoughts-on-internet-explorer-versioning-dev-tools-and-web-standards-in-2013/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
wpb_post_views_count:
  - "2027"
image: img/wp-content/uploads/http://res.cloudinary.com/ryanhayes-net/image/upload/v1382116578/ie9-logo_wgf8wu.png
categories:
  - Blog
---
Recently I was re-awarded for my third year as a Microsoft MVP for the IE category focusing on web development.  I occasionally joke (no offence, IE team!), that IE is the least fun category for an MVP.  IE takes a lot of flak over its history of IE6.  [The internet is riddled with folks who hate IE because it&#8217;s fun](http://www.youtube.com/watch?v=lD9FAOPBiDk), or so it seems, but honestly I think the majority are people who have been burned in the past.  Developers under a deadline who have been directed to make their site work with all browsers, only to realize that they&#8217;re spending a majority of their time writing THE SAME FEATURE 6 different times for not just Chrome, Firefox, and IE, but Chrome, Firefox, IE6, IE7, IE8, IE9&#8230;  See how that feels?  It hurts.  It&#8217;s depressing.  The majority of my projects where I&#8217;ve worked late nights are because of compatibility issues and checking browser versions.  **I honestly believe the IE team is trying to make things right.  **The IE MVPs are mostly web developers who have been through the same thing as the rest of the web development community and regularly voice their concerns.  I was lucky enough to become an MVP right before IE9.  **IE9 was the turning point, but there was too much lost ground in the standards race.  **While time will only tell if IE can shake their IE6 legacy and repair the damage done to the hearts of developers worldwide, I&#8217;m going to list a few things the IE team is doing right, wrong, and areas for improvement.<!--more-->

### Versioning

The biggest problem with IE is getting people to upgrade!  **Users using old browser versions is the single biggest problem IE has.**  It&#8217;s reasonable to expect the vast majority of users on Firefox and Chrome are at or very near the most recent version.  Why is this?  **Automatic updates + not making versions a big deal.**  IE has recently put in place automatic updates for IE, which is really awesome. Now users by default get the updates without knowing (or, more importantly, caring).  The difference is that major versions are a big deal. ** IE versions are TIED TO VERSIONS OF WINDOWS.  **IE6 is the XP version.  When XP dies off completely, so will IE6. That same thing will be true for the next version of the browser they decide is to be the highest for Vista, and then 7, and so on.  As long as Microsoft uses IE as a bargaining chip to get people to upgrade Windows itself, they&#8217;re slowing progress of the web.  Slowing progress of the web means developers hate it.  Developers hating it means they tell their family at Thanksgiving to switch to Chrome.  Is that the IE team&#8217;s fault?  Probably not as it&#8217;s most likely overarching management from either the Windows team or higher. Does it still suck?  Yes.  Everyday users don&#8217;t know or care what version of Chrome or Firefox they&#8217;re using, so upgrading is no big deal.  They almost always know when an IE version changes, and hesitate to upgrade as the changes are so drastic, even if better.  **Even with automatic updates, IE needs to be completely upgradeable to the most recent version on ALL version of Windows that have a significant market share, but that also requires users to upgrade Windows at a reasonable pace (If you&#8217;re using Windows XP, it&#8217;s now over 11 years old&#8230;that&#8217;s REALLY OLD).**  I think reports of [Microsoft starting more frequent and smaller updates to the OS](http://www.theverge.com/2012/11/28/3693368/windows-blue-update-low-cost) is a great thing in lowering upgrade friction for users.  Still, the only way to win market share is to win the hearts of developers and users, and there&#8217;s a lot of making up to do.

### Web Standards

Ok, this is a big one.  If you talk to a web developer, the majority will say that IE&#8217;s implementation of the HTML5 spec is pretty slow.  They&#8217;re right.  If you compare it to webkit browsers they do stay behind the curve.  Honestly I don&#8217;t think Microsoft even cared about even trying to comply with standard until IE8, at which point they were so far behind that it would take a ridiculous amount of manpower to catch up.  The great thing though as that it&#8217;s obvious they&#8217;re investing more into IE.  The major difference between Microsoft&#8217;s stance on implementing standards and everyone else&#8217;s is that the IE team generally implements standards only after the spec has nearly completely solidified, and the rest implement on the fly, changing the implementation with the spec.  This, I actually don&#8217;t mind.  If I implement something for a client using something that the browser supports, but then the spec changes and soon the browser implementation changes, then my code is broken.  While I don&#8217;t get implementations as quick as other browsers with IE, I can at least know, with some certainty, that those implementations are based on solidified specs that are more than likely not going to change, which I think is a plus.  Now, I&#8217;m satisfied with this as long as the lack of implementation doesn&#8217;t get too ridiculous, like not implementing CSS rounded corners for year.  Not having rounded corners for the longest time made most of the sites I visited look horrid in IE.  Sometimes you should just implement rounded corners faster (instead of spending time explaining why you can&#8217;t do it, just do it!).  In general, IE&#8217;s been doing much better than the past.  I can see why some decisions are made, but that doesn&#8217;t make things less frustrating.

### Dev Tools

When IE9 came out with their new dev tools several years ago, they were so awesome!  They&#8217;ve barely added features since then.  So, not much to report here except we need more features!  A nice local storage viewer/inspector tool would be nice.  How about having an option for realtime HTML updates after AJAX calls?  Maybe realtime and then I can pause it if I want to stop it at some point.  Whatever it is, it feels like dev tools aren&#8217;t getting any love.  When that happens, developers feel like _they&#8217;re_ not getting any love.

###  Feedback and tl;dr

In general, I feel like Internet Explorer is a _ton_ better than it used to be.  I honestly believe that making less of a fuss about the browser version and just updating it everywhere as fast as possible, even if without user knowledge, is the best way to go.  Web standards have come a long way, they need to keep at it.  Dev tools just need updating, plain and simple.  Those tools are developer&#8217;s toys as well as their secret weapon to be rock stars, and they need to be fun and have more often, useful updates.

I&#8217;m happy of the progress IE has made over the past couple years.  IE9 was a gamechanger and IE10 bulds on that.  At the end of the day, I love the web and programming in general, and the movement towards standards, performance improvements, and general &#8220;syncing up&#8221; and listening to the community is a great thing.

**What direction changes or improvements are on _your_ priority list for making IE better?**