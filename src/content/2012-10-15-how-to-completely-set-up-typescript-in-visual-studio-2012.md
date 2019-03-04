---
id: 1001347398
title: 'How To &#8220;Completely&#8221; Set-Up TypeScript in Visual Studio 2012'
date: 2012-10-15T21:11:49+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347398
permalink: /how-to-completely-set-up-typescript-in-visual-studio-2012/
image: img/demo1.jpg
dsq_thread_id:
  - ""
standard_seo_post_level_layout:
  - ""
standard_link_url_field:
  - ""
robotsmeta:
  - index,follow
wpb_post_views_count:
  - "12627"
categories:
  - Blog
  - Software
---
So for the past couple days, I&#8217;ve been deep into **[TypeScript](http://www.typescriptlang.org/), which is a super-set of the Javascript language that adds optional typing, classes, and module support in addition to standard Javascript**.  I&#8217;d recently been checking out [Dart](http://dartlang.org), from Google, as a way to write Javascript-intensive applications in a way that multiple humans can write code and eliminate a lot of the errors that come along with the dynamic typing.  See, dynamic typing is powerful.  You can do a whole lot of cool things when you can do anything you want.  The issue comes when the app gets so big you can&#8217;t keep everything in your head, or you have someone else working with you.  Then, you need a way to know what methods are accepting and returning without having to crack open that method and read the code (that&#8217;s why we HAVE classes so we can write something once, and then forget about the specifics of it and only care about the passed argument and return value).  Typescript&#8217;s beauty is that it adds all this extra stuff, while still keeping the syntax of Javascript intact.  In fact, **Javascript is valid Typescript!**  That means you can add types, classes and coolness right alongside regular Javascript code!  Don&#8217;t need type checking or anything? &#8211; Just use Javascript.  Getting into some really hairy Javascript that you need to make sure what you&#8217;re passing around is a valid object? &#8211; Add in some classes, interfaces, and types. Once you&#8217;ve done that, Visual Studio or the command line compiler will check all the code for errors like it would a typed language, and spit out the plain Javascript for it.  So, at it&#8217;s core, it&#8217;s not so much a new language as it is sugar for letting tools have something more concrete to check against.  You can even create a definition file for libraries like jQuery to get checking from them as well.  In future versions there&#8217;ll be a generator that you can point to an existing Javascript file and generate a definition file.  Pretty sweet!

I tried setting it up in Visual Studio, but had a hard time getting it to compile on build.  I was still having to run the command line compiler (this was on an existing project, so that may have had something to do with it).

## Here are the steps to get it working to compile your Typescript files on build in Visual Studio 2012:

<!--more-->

  1. [Download and Install the Typescript plugin for Visual Studio](http://www.microsoft.com/en-us/download/details.aspx?id=34790)
  2. [Download and Install the Web Essentials 2012 plugin for Visual Studio](http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6)
  3. In Visual Studio, go to **TOOLS > Options**
  4. Select **Web Essentials**
  5. Change the Option for **Compile all TypeScript files on build** to **True**.

<div>
  That&#8217;s all you need to get you going!  Plus, Web Essentials has a lot of other handy features included as well, like minifying your JavaScript to improve performance.  Pretty nice!
</div>

<div>
</div>

<div>
  Have you used TypeScript yet?  What do you think about it?  If you don&#8217;t like it, what are some good alternatives for building large-scale, JavaScript-intensive applications and keeping them human readable and more easily debuggable?
</div>

<div>
</div>

<div>
  <a href="http://ryanhayes.wpengine.comimg/wp-content/uploads/2013/10/TypeScript-Settings_odh81v.png"><img class="alignnone size-full wp-image-1001347399" title="TypeScript Settings" alt="TypeScript Settings" src="http://ryanhayes.wpengine.comimg/wp-content/uploads/2013/10/TypeScript-Settings_odh81v.png" width="761" height="444" srcset="https://ryanhayes.netimg/wp-content/uploads/2013/10/TypeScript-Settings_odh81v.png 761w, https://ryanhayes.netimg/wp-content/uploads/2013/10/TypeScript-Settings_odh81v-300x175.png 300w" sizes="(max-width: 761px) 100vw, 761px" /></a>
</div>

<div>
</div>