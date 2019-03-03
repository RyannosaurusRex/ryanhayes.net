---
id: 1001347195
title: 'Visual Studio 2010 ASP.NET MVC and C# SaaS Starter Kit'
date: 2011-04-02T10:21:11+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347195
permalink: /visual-studio-2010-asp-net-mvc-and-c-saas-starter-kit/
robotsmeta:
  - index,follow
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "8155"
image: img/wp-content/uploads/2013/10/d855b14e-1b6d-486b-a5e5-67d7e898859c1_etugnj.png
categories:
  - Software
tags:
  - Azure
  - MVC
  - PaaS
  - SaaS
---
One of the best ways to learn how to code well is to read code and write it (imagine that!). Luckily, with Visual Studio, Microsoft has graced us with tons of [Starter Kits](http://msdn.microsoft.com/en-us/magazine/cc164097.aspx) that are free to use.  Starter Kits are pre-packaged project templates that are usually completed websites that you can build on top of or read to learn from.  Now, with [WebMatrix](http://www.microsoft.com/web/webmatrix/) and its integration with Visual Studio, you have even more ways to get started fast on your side projects with tons of open source applications to learn about MVC, OAuth, and more.  However, you&#8217;ll be hard-pressed to find a starter kit for a tier-based pricing model Software as a Service (SaaS) web application.  With the rise of cloud computing platforms like Microsoft&#8217;s [Azure](http://windows.azure.com/), and SaaS, it&#8217;s always beneficial to know how to scale a solution not only from a technical aspect, but from a consumer aspect as well.  Wouldn&#8217;t it be nice if there was a starter kit for SaaS applications?<!--more-->

## What is SaaS?

With SaaS applications + the Cloud, your applications can scale like never before.  Startups can write webapps and pay only for what they use.  No more renting entire machines or pumping thousands of dollars into servers and an admin to manage them just to get started.  No more scaling back during non-peak times and then having servers sitting around doing nothing.  Cloud PaaS systems allow you to scale your hardware up and down with your users, but that&#8217;s only half the problem that&#8217;s solved by modern SaaS applications.  The other problem is more business related.  **You need to scale with your customer&#8217;s own growth and success** so that as your customer grows, their account features grow with them.

With Azure, if you are small and don&#8217;t use a lot, you don&#8217;t pay a lot.  When you become successful and use more, you pay more.  It grows with you.  Pricing models for SaaS applications do the same for your customers.  Typically, they offer a free trial, and then monthly/yearly plans that give you access to more of your application&#8217;s features.  The more the customer pays, the more they get.  A few weeks ago I started looking for a SaaS ASP.NET Starter Kit with little luck, until I stumbled upon [Web Application Toolkit: Freemium](http://archive.msdn.microsoft.com/WATFreemium).  Unfortunately, this toolkit is nowhere on the ASP.NET site with all of the other Starter Kits and downloads.  The only place you can find it is in the Microsoft Archives, buried in millions of other cryptically named files.

[<img class="alignright size-full wp-image-1001347198" title="d855b14e-1b6d-486b-a5e5-67d7e898859c[1]" src="http://ryanhayes.wpengine.comimg/wp-content/uploads/2013/10/d855b14e-1b6d-486b-a5e5-67d7e898859c1_etugnj.png" alt="" width="343" height="240" />](http://ryanhayes.wpengine.comimg/wp-content/uploads/2013/10/d855b14e-1b6d-486b-a5e5-67d7e898859c1_etugnj.png)

## The ASP.NET MVC Freemium (SaaS) Starter Kit

Ok, so it&#8217;s not really a Starter Kit in the sense that it&#8217;s a project template, but it does come with all of the source code, databases, and documentation you need to get you started like you would expect.  The main benefit of it is that it comes with all the code for the functionality of setting up tiers of service and pricing plans for a SaaS application.  With minimal changes, you can convert this standard web application into an [Azure web role](http://msdn.microsoft.com/en-us/library/gg432976.aspx) and run it in the cloud.  Microsoft really needs to pick this starter kit up and run with it, or at minimum make this download available in the regular area of starter kits and downloads, as it&#8217;s something I&#8217;m sure many people out there are looking for.

Here&#8217;s the description from the toolkit site:

> When offering services via a Web site, a popular way to attract first time users is to offer a free version of the software that has limited functionality. A good way to convert that non-paying customer into a paying customer is to offer more functionality and features beyond what is available in the free version and allow the transition between versions to be seamless. This business model of delivering “basic services for free, while charging a premium for advanced or special features” is known as the Freemium business model.
> 
> Often developers create custom branches of their core application to enable this type of functionality but this is not the most cost effective solution as maintaining two code-bases is expensive. The migration between different Stock-Keeping Units (SKUs) of the product might also require work on the part of the customer and this is another barrier to adoption.
> 
> This Web Application Toolkit offers a more elegant and cost-effective way to solve this problem by using a SKU/Features matrix to manage which features are available in certain SKUs. The Toolkit makes it easy for the developer to ascertain which SKU the current user has paid for and also which functionality should therefore be available to them by using standard ASP.NET Role Management features together with WCF REST Services to retrieve the SKU/Features information.
> 
> The Toolkit also provides reusable ASP.NET MVC views and controllers for developers to create admin experiences for managing the SKU/Feature matrix and page templates to explain to customers about the different SKUs or versions available.

[Click here to visit the starter kit site](http://archive.msdn.microsoft.com/WATFreemium), or [click here to go straight to the download page](http://archive.msdn.microsoft.com/WATFreemium/Release/ProjectReleases.aspx?ReleaseId=4629).

To learn more about ASP.NET MVC, [visit the ASP.NET website](http://www.asp.net/mvc) and check out the great getting started video by Scott Hanselman.