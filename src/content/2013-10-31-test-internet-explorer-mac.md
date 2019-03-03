---
id: 1001347521
title: 3 Ways to Web Test that will Change Your Life
date: 2013-10-31T02:19:13+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347521
permalink: /test-internet-explorer-mac/
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
wpb_post_views_count:
  - "3257"
categories:
  - Blog
---
As a web developer, it&#8217;s important to make sure our web apps and sites have a great experience for users no matter what browser they&#8217;re using. One of the ways we can do that is adhering to web standards. **When we don&#8217;t write standards-compliant code and markup, we&#8217;re basically betting that all browsers will just magically guess what we meant and somehow do the right thing.**  Once you&#8217;ve run your markup through [http://validator.w3.org](http://validator.w3.org/), and made sure to use feature detection instead of [browser sniffing, which doesn&#8217;t work anymore](http://msdn.microsoft.com/en-us/library/ie/hh869301(v=vs.85).aspx), the next step is to test on actual browsers.  If you only have a Mac, though, how do you even go about testing IE in the first place?  For starters, that sounds expensive&#8230;getting a Windows license, maybe hardware, not to mention different OS licenses for IE11, IE9, etc.  **What if I told you that you can test IE for FREE (any OS/version combination that&#8217;s relevant today)?  Here&#8217;s 2 different ways how:<!--more-->**

## Step 1: Visit [Modern.ie](http://modern.ie)

Modern.ie is Microsoft&#8217;s hub for building great experiences for the Web.  Notice I didn&#8217;t say &#8220;great experiences for IE&#8221;.  The Microsoft team over the last 3 years have made such great strides in standards compliance and interoperability that any improvements in performance or experience that you make for Chrome or another browser will improve IE as well, and vice-versa.  **There are a [lots of tools](http://www.modern.ie/en-us/report) here to help you write code that adheres to standards and works great everywhere, much like the w3c&#8217;s validator, but takes it a bit further in order to help you make improvements beyond just being &#8220;valid&#8221;.**

## Step 2, Option 1: [Get Free VMs for any (relevant) Windows OS/IE combination](http://www.modern.ie/en-us/virtualization-tools#downloads)

Modern.ie has downloads for just about any Windows OS/IE version you can imagine.  They&#8217;re on a 90 day license, but if you&#8217;ve used any VM before, you know you can snapshot it on day 1 and just revert when it expires.  You can run these using [VirtualBox](https://www.virtualbox.org/) (free, and what I use), [VMWare](http://www.vmware.com/), [Parallels](http://www.parallels.com/), or any other VM software of choice on a Mac.  You can download as many different combinations as you want so you can make sure everything works great, and even use IE11&#8217;s new dev tools if you want.

## Step 3, Option 2: Use browser-as-a-service [Browserstack](http://www.browserstack.com/)

Sometimes you may not have room for a VM, and that&#8217;s totally understandable.  A lot of us developers trade 1TB hard drives for much smaller but WAY faster flash storage and SSDs.  If you&#8217;re running low on space, **you can sign up for Browserstack&#8217;s service and they&#8217;ll spin up on-demand any OS/Browser combination you want, including Windows, Mac and Linux combinations with obscure browsers!**  This means even if you just have a PC, you can test on Safari as well!  It&#8217;s $19/month for an individual plan, but is well worth the money if you spend a lot of time building webapps, and you can even find 3 months free via a link on Modern.ie!  **To take it one step further, if you&#8217;ve ever used [Selenium WebDriver](http://www.seleniumhq.org/) to automate front-end tests, Browserstack has a full API you can use to run tests and get screenshots along the way.  It&#8217;s basically like having your own Selenium grid in the cloud!**

So there you have it, two different ways to test IE on a Mac, and even a way to test Safari on a PC!  It&#8217;s pretty awesome, but remember, web standards are there for a reason.  Write standards-compliant code and use feature detection and you&#8217;ll be giving your users a great experience while saving yourself a TON of future headache!