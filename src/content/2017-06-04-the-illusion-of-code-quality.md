---
id: 1001347687
title: The Illusion of Code Quality
date: 2017-06-04T17:26:27+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347687
permalink: /the-illusion-of-code-quality/
image: img/demo1.jpg
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
  - "114"
dsq_thread_id:
  - ""
categories:
  - Blog
  - Featured
  - Software
---
Code quality is something that I believe every developer strives for.  We want code to be the best it can be and there are tons of opinions on things developers can do to make quality high. Over the years **as teams have moved to Agile from Waterfall, and as build and test automation has become better, a lot of the code quality metrics that experts have developed are becoming less helpful, or, dare I say, counter-productive.**

**The larger a team gets, but more importantly, the higher turnover gets (developers leaving the team/company and new developers without context come on to the team/are hired), the harder it is for code to remain high quality over time**. We&#8217;re all human, we can&#8217;t keep everything in our head, we can&#8217;t mind-read the original developer who left the company and wrote this code. The worst part is that we don&#8217;t know what we don&#8217;t know. We duplicate effort because we didn&#8217;t know there was a design document on Box, or we don&#8217;t go update it.  There&#8217;s also setup information on the Wiki that should be changed, but we&#8217;ve not asked anyone where it is yet, because we didn&#8217;t know to, so our sweeping changes to the project aren&#8217;t reflected there.  We&#8217;re also on a deadline, and there were already existing comments that StyleCop saw, and it can&#8217;t automatically tell me that something in my code is now out of sync with the comments, so now developers can&#8217;t make any assumptions about the comments being right.  Any of this sound familiar?

That&#8217;s ok, though! That&#8217;s human nature! We aren&#8217;t computers (I&#8217;m glad we&#8217;re not) and we&#8217;re not good at keeping documentation in sync, especially when most teams now use Agile (I say that loosely), but still carry assumptions over from the Waterfall days that are literally duplicated with automation today.  So what should we do to help keep down the illusion of quality and actually introduce REAL quality into our code?<!--more-->

## A couple ways to avoid &#8220;fake&#8221; quality:

### Avoid &#8220;comment rot&#8221;

Comments are a great way to document code, provide extra information about the code, and make hard to understand sections much more readable.  However, comments need to be used only as a last resort.  Comments aren&#8217;t enforced by the compiler and can get out of sync with what the code actually does over time.  Never use comments in place of meaningful variable and method names, or in place of unit tests to explain how things should be working.  Make sure you try to keep comment documentation down to only what&#8217;s necessary after you&#8217;ve used other avenues that will get flagged/updated in the future when someone else inadvertently changes how things work.

### Be careful what you target (you just might get it)

[blockquote source=&#8221;Goodhart&#8217;s Law&#8221;]When a measure becomes a target, it ceases to be a good measure.[/blockquote]

Today we have so many tools, like TeamCity and VSTS, that can automatically run tests, static analysis, and gather a TON of metrics about our code.  That&#8217;s a whole lot of data, and it&#8217;s easy to start using these metrics as a target.  Take code coverage for example.  It gives us great insight into how many lines of production code a unit test covers.  20% coverage vs 80% coverage gives you a great indication on whether you have tests or not, but it&#8217;s harder to tell if the tests that are covering those lines actually test anything other than &#8220;please don&#8217;t blow up&#8221;. **If your team mandates 80%+ coverage without using code reviews to encourage good tests, coverage can mean a lot of very useless tests and wasted, counter-productive time spent. **That doesn&#8217;t even count all the time you&#8217;re now going to be spending _maintaining_ those useless tests.

&nbsp;