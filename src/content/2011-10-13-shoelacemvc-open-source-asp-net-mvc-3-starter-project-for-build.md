---
id: 1001347299
title: ShoelaceMVC, My Newest Open Source Project - ASP.NET MVC 3 Starter Project for Building Fast AND Production Quality Webapps.
date: 2011-10-13T16:34:45+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347299
permalink: /shoelacemvc-open-source-asp-net-mvc-3-starter-project-for-build/
dsq_thread_id:
  - ""
robotsmeta:
  - index,follow
wpb_post_views_count:
  - "8889"
image: img/wp-content/uploads/2013/10/Shoelace-MVC_hpejxp.png
categories:
  - Blog
  - Software
tags:
  - ASP.NET
  - EntityFramework
  - MVC
  - NuGet
  - open source
  - SQLMigrations
---
I recently came to the conclusion that I needed a MUCH better starter project for building ASP.NET MVC applications.  You see, I'm not a designer.  I just don't have those skills.  I can make things look good in my head, but I can't translate that to Photoshop and then to CSS attributes.  Then one day I stumbled upon [Twitter's Bootstrap](https://twitter.github.com/bootstrap/) project, which is a free, open source CSS/JS framework/library that has literally everything you need to build a quality, production ready application (from a design perspective).  It's by far the most exciting project for me in a long time, as it fills the huge void and weakness that I have in building good-looking stylesheets from scratch.  Then, this past week I found [CodeFirstMembership](https://codefirstmembership.codeplex.com/) &#8211; an open source membership provider, similar to the ASP.NET .mdf file in the default starter projects, but that is written using EntityFramework Code First.  This&#8230;this was huge.  So I decided to begin to curate all these technologies in to an ASP.NET MVC starter project to end all starter projects (ya know, if you plan to go live very soon after you start and expect folks to not throw up when they see your site).

<!--more-->

I now had exactly what I needed for building apps really, really quickly and I wanted to make a starter project that had everything out of the box to get something not just functional, but GREAT out the door fast.  Bootstrap gives me big, beautiful buttons, text areas, navigation, sidebars, and (most importantly) amazing cross browser compatibility &#8211; with extremely clean CSS classes.  It's so easy and makes your applications LOOK production-ready.  Let's face it, **I don't care how solid your code is on the back-end, if it looks basic and lame and is broken in the browser your user views it with (I don't care WHAT browser), you look bad.**  Really.  It's inevitable.  So I added Bootstrap and styled everything so it looks great.

<p style="text-align: center;">
  <a href="https://beta.ryanhayes.netimg/wp-content/uploads/2011/10/Shoelace-MVC.png"><img class="size-large wp-image-1001347301 aligncenter" title="Shoelace-MVC" src="https://res.cloudinary.com/ryanhayes-net/image/upload/h_1024,w_1889/v1382116582/Shoelace-MVC_hpejxp.png" alt="" width="491" height="266" /></a><strong>Second</strong>, I added in <a href="https://codefirstmembership.codeplex.com/">CodeFirst Membership Provider</a>.  I'm in the <a href="https://www.microsoft.com/bizspark/Default.aspx">Bizspark </a>program, and with that I get free Azure time.  Awesome!  I built my application for my startup, went to deploy to Azure and then realized that I only had ONE database I could use for free.  Oh noes (I'm<del> a cheapskate</del> frugal)!   I immediately tried to find a way around this.  I had my ASP.NET membership database and my application database separate (it's kind of a hassle editing the .mdf&#8230;too slow for multiple, rapid deployments for me).  So then I read where you can<a href="https://weblogs.asp.net/sukumarraju/archive/2009/10/02/installing-asp-net-membership-services-database-in-sql-server-expreess.aspx"> generate the membership database anywhere I want</a>, where it didn't have to be in the .mdf that was provided.  I immediately thought to generate it alongside the other tables in my application DB. When I tried generating it, as I was developing the application and using the regular entity framework to generate my application tables in the same database, the provider and DB would become out of sync and start throwing errors occasionally.  It was extremely frustrating.  It didn't happen all the time, but enough to make me lose time.  I knew it would WORK, but the hassle of dealing with it wasn't worth it to save me from having to purchase an extra database instance to keep them separate.  This is where CodeFirst Membership came it.  It's an implementation of a membership provider (same security and everything), but uses a DbContext and CodeFirst!  What does this mean?  This means I can use EntityFramework CodeFirst for my application code, and just use the same DbContext for the provider and my application!
</p>

## CodeFirst Membership gives me a few things:

  * **Everything can** (of course, it still doesn't have to be &#8211; it's up to you) **be in a single database,** which simplifies deployment and development, particularly at the database level.  Remember, if you don't like them in the same DB  you can always break them apart later, but my focus with this project is to build your application FAST and get you USERS so that you have enough traffic to WARRANT fancy architectures that take much more time to maintain.
  * **CodeFirst makes it fast and easy to test in real life, too!  **You always want to make sure that you have sufficient unit tests so that you can sleep at night after you do a new release.  However, a lot of times you can't beat making a change, hitting F5, and watching your application in action.  It's still a great way to catch both logic and visual bugs.  CodeFirst's create/delete database and seed options let you hit play and have a fresh database with new demo data that you can count on **every time**.  It makes debugging simple, effective, and FAST.
  * **CodeFirst lets you add DataAnnotations directly to your Entities without creating partial classes.  **Now, some would argue that you should use the MVVM pattern and keep entities and viewmodels separate, and I can understand that.  The purpose of this project is, yep, you guessed it, to build applications FAST.  There are times when viewmodels are necessary, and sometimes your model and viewmodel are so far off that you have to do that, however CodeFirst really does let us use the model classes without much pushback from "purists".  Remember, in CodeFirst the model classes are just POCO objects!  They're just classes and that's it.  There's literally no code that you have to write that's specific to the EntityFramework (that's all done through unicorn magic via the DbContext).  So you're free to add as many DataAnnotations as you want!  Go ahead!
  * **[EntityFramework.Migrations](https://nuget.org/list/packages/entityframework.migrations) &#8211;**  If you've never heard of this, you need to check it out, fast.  It's essentially the db:migrate functionality from Ruby on Rails, but for EntityFramework and SQL Server.   I can't explain it all here, but it **generates the SQL update script for you** from one database (most recent production, for example) to another (whatever you have in your project right now).  It also takes into account data loss, so you won't lose any data on an update.  You can also specify exactly what it should do in situations, but out of the box it pretty well does exactly what you want &#8211; upgrade the current production database to incorporate your changes/additions without losing data.

<div>
  So there you have it.  That's why I started and what's in<a href="https://github.com/RyannosaurusRex/Shoelace-MVC"> ShoelaceMVC on Github</a>.  If you're looking for a head start to your next MVC project, you should try starting with ShoelaceMVC and contribute where you see improvements.  I'd like to incorporate other projects as I find them that are very condusive to FAST deployment.
</div>

## **UPDATE 10/20/11:**

These are some things I just added:

  * **MVCScaffolding templates for Twitter's Bootstrap** &#8211; I included the NuGet package MVCScaffolding.  This lets you customize the templates that are used to generate the CRUD screens when you generate all the views for a controller.  I modified the templates so that the views created will comply with Twitter's Bootstrap framework and look great right out of the box.  Some issues still may exist around dropdowns and checkboxes, which will be fixed in future releases.  You can still manually add the classes once they're generated, though.

## <span style="color: #0000ff;"><a href="https://visualstudiogallery.msdn.microsoft.com/f94ba670-d5db-4b91-9a8f-6c53023c2c18"><span style="color: #0000ff;">Download</span></a> </span>via Visual Studio Gallery

## <span style="color: #0000ff;"><a href="https://github.com/RyannosaurusRex/Shoelace-MVC"><span style="color: #0000ff;">Contribute </span></a></span>or Follow ShoelaceMVC on Github