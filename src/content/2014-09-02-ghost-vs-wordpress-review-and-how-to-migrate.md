---
id: 1001347671
title: Ghost VS WordPress (and Why I Migrated Back to WordPress)
date: 2014-09-02T04:10:32+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347671
permalink: /ghost-vs-wordpress-review-and-how-to-migrate/
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
  - "9937"
dsq_thread_id:
  - ""
image: img/wp-content/uploads/2014/09/creepy-curve-dark-1096.jpg
categories:
  - Blog
---
A few weeks ago I decided to hop on the Ghost train.  Ghost is a blogging engine, written in Node.js (JavaScript) and is only a little over a year old now, but has a huge backing for how young it is.  In general, there's a ton of hype around new tools and frameworks in the development community, and this is no different.  I've had my blog on WordPress since the beginning, so I decided to run an experiment for a bit and get an objective answer as to which is better for me and document my experiences, so here we go.  Let's compare Ghost VS WordPress!<!--more-->

## The Goal

I blog because I love teaching, but I also do it to document what I know and have done in hopes people will [hire me and my team of subcontractors for their project](http://sonatacove.com).  So in general I wanted the following after migrating my blog to Ghost:

**Increase in Page Views**

It takes a LONG time to increase unique visitors through SEO/links/etc, so that wasn't in the scope of this experiment, though page views was.  I needed the site to keep visitors reading.

**Increase in Speed**

I was using a HostGator reseller account for my hosting, which let me allocate "unlimited" resources to my site, but Google was seriously dinging me because HostGator throttles EVERYONE and oversells their hosting.  Reseller hosting there gives you a few more tools to be able to manage your account if you know what you're doing, but there was still nothing I could do at times. Additionally, part of it was that WordPress has just grown over the years to the point that it can many times be overkill for just a simple blog.

## Migrating to Ghost

I self-host WordPress, and I knew I wanted to self-host Ghost as well.  **One problem with Ghost is that since it uses Node.JS, you are limited to where you can host it.**  I ended up choosing Azure as their websites have Git-enabled deployments, scaling, backups, and a ton of tools in addition to being one of the few Node.JS hosting platforms out there.  A side benefit of this is that Azure is really, really fast.

[blockquote] **IMPORTANT!: Make no mistake, Ghost is a blogging platform for developers who know what they're doing.**  A WordPress install can generally be hacked together with enough reading and tutorials, however Ghost is currently a bit touchy, and unless you are a developer you're likely to find yourself spending a lot of time debugging issues. If you aren't a developer, I suggest paying for them or someone to host and manage it for you.[/blockquote]

To actually migrate to Ghost, it was a pretty easy 3 step process:

  1. Set up a new Ghost blog somewhere (pretty obvious, right?).
  2. Migrate your images: 
      1. The easiest way is to install the [Cloudinary plugin for WordPress](http://wordpress.org/plugins/cloudinary-image-management-and-manipulation-in-the-cloud-cdn/) and migrate your images there before step 3.  In doing so you get your URLs automatically moved to Ghost, but with the added benefit of Cloudinary's CDN, which is pretty nice.
      2. Back up your wp-content/uploads folder, and upload it to a wp-content/uploads folder under your ghost install so that things all match up.
  3. Install the [Ghost Export plugin for WordPress](http://www.wordpress.org/plugins/ghost/), and then export your WordPress blog to a .json file that you can then upload into Ghost

All in all the installation was quick.  The hardest part was getting all of the redirects set up in the web.config.  WordPress handles 301 redirects for you if you ever change a permalink, however Ghost has just introduced the concept of plugins, so the majority of things, like 301 redirects, you have to do yourself (more on this in a bit).

## Results of Moving to Ghost

Here's what I changed on the site at this point:

  * Moved to Ghost
  * Moved hosting from HostGator to Microsoft's Azure
  * Used a modified version of the Casper theme that ships with Ghost

The results were:

  * <span style="color: #008000;">Page speeds dropped from about 5 seconds to 1 second (awesome!)</span>
  * <span style="color: #008000;">Actual writing experience in Ghost is amazing, and inspired me to write two new posts, so traffic was up for a bit.</span>
  * <span style="color: #993300;">Bounce rate went from ~1% to >70%! (This is BAD!!!)</span>
  * <span style="color: #993300;">Page views decreased while unique visitors stayed constant.</span>
  * <span style="color: #993300;">Lost my ability to manage images (ended up managing them in Cloudinary and then just linking to them)</span>

<div id="attachment_1001347673" style="width: 310px" class="wp-caption alignright">
  <a class="lightbox" href="http://ryanhayes.netimg/wp-content/uploads/2014/09/ghost.png"><img class="wp-image-1001347673 size-medium" src="http://ryanhayes.netimg/wp-content/uploads/2014/09/ghost-300x142.png" alt="ghost" width="300" height="142" srcset="https://ryanhayes.netimg/wp-content/uploads/2014/09/ghost-300x142.png 300w, https://ryanhayes.netimg/wp-content/uploads/2014/09/ghost-1024x485.png 1024w" sizes="(max-width: 300px) 100vw, 300px" /></a>
  
  <p class="wp-caption-text">
    Ghost allows you to use Markdown and live-edit side-by-side!
  </p>
</div>

I _love_ the 2-pane way that Ghost's editor does side-by side editing, how fast it is, and that it's built using Node.JS (there are few languages I hate working with more than PHP).  **The deal-breaker for me was that Ghost lacks the MASSIVE community, support, and plugins that help make blogs grow themselves. ** The data clearly show that my bounce rate increased, page views dropped, while my incoming visitors stayed constant. This means that once users finished reading the article they came to read, they left. [  
](http://ryanhayes.netimg/wp-content/uploads/2014/09/ghost.png){.lightbox} This was largely due to my WordPress blog's plugins that help users discover other content on the site.  I've got about four different places on my WordPress blog that help guide users into related content on my site that just weren't there in Ghost. That's not really Ghost's fault, as it does the actual content authoring extremely well, however it doesn't change the fact **a big reason you write content on a blog is to have someone read it.** This downside of Ghost will get better with time, but right now, there's next to nothing as far as plugins are concerned.  You can, of course, write your own plugins or hand-code all of these other features that you may need, but then we get back to the part where you're at a huge disadvantage if you aren't a developer.

## Back to WordPress

I ended up moving back to WordPress because keeping my page views are more important to me than being able to edit and preview on the same screen.  Luckily I had a backup that I could flip back to, but I still had the problem of HostGator being pretty slow and taking my site down whenever a post would get featured on a big website somewhere (I had [one post](http://ryanhayes.net/how-the-xbox-one-lost-me-and-then-won-me-back-with-the-cloud/ "How the Xbox One lost me, and then won me back with 24-Hour DRM and the cloud.") get really high on Reddit one day and my site was down for most of the day, sadly).

Here's what I did differently this time:

  * Moved hosting (as well as the majority of my clients) over to WPEngine
  * Just bit the bullet and did a [page speed audit](http://www.webpagetest.org/ "Web page speed audit") on my site to speed things up 
      * [Optimized all my site images](http://pnggauntlet.com/)
      * Deactivated and removed unused plugins
  * Leveraged a CDN (content delivery network) using WPEngine

With these changes, I actually got my site loading VERY quickly, which was part of the original goal anyway.  In addition, I got all my discovery features back to get my pageviews back up, which I didn't want to lose with the work I had done over the years.

## Ghost vs WordPress: The Takeaway

I love Ghost, and I'll likely be spending some free time contributing plugins (called "apps") in order to get Ghost up to speed so I can move.  The Ghost team is awesome and for WordPress having a 10 year head start on Ghost, it's come surprisingly far in such a short amount of time.  However, **the 10 extra years of plugins and features that WordPress has are hard to beat.**  If you're trying to decide between the two:

### Use Ghost If:

  * Your blog is just starting out (301 redirects for a lot of history require setting them up the old fashioned way)
  * You care more about getting your ideas down than having people read everything you've written
  * Are a hacker/dev and want a site that runs on Node.JS (this was a big reason I loved Ghost)

### Use WordPress if:

  * You want something hackable, but not something you need to potentially need to babysit
  * Need more features than just blogging
  * Have very minimal dev experience and don't want to _have to_ invest in learning the platform
  * The command line scares you

Your mileage may vary, of course.  Keep in mind I am a developer and was looking to self-host, or at least have 100% full access to the guts of my install.  **Both of these platforms work great for pure blogging and you can hire someone to host/manage them if you're not a developer, however WordPress clearly wins if you're looking pure features as opposed to the raw speed and simplicity of Ghost.**

Have **you** tried both?  Which one did you land on?  **What is the one critical plugin you absolutely have to have in Ghost before you would make the move? ** Let me know in the comments below!

&nbsp;