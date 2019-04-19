---
id: 1001347662
title: Use CSS background:rbga to Darken Background Photos For Improved UX
date: 2014-09-01T01:47:00+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.wpengine.com/?p=1001347662
permalink: /use-css-background-rbga-darken-background-photos-improved-ux/
tags:
  - uncategorized
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
  - "26798"
dsq_thread_id:
  - ""
dsq_needs_sync:
  - "1"
image: img/wp-content/uploads/2014/09/rbga-css-on_yezm5r.png
categories:
  - Blog
---
If you've been to any new websites lately, you'll know that [parallax scrolling](https://en.wikipedia.org/wiki/Parallax_scrolling) and large background images are incredibly popular right now. They're great because they are able to help better tell stories, with big, gorgeous photos on the background and relevant text in the foreground overlaying those images as you scroll. In addition, responsive design means that the text overlaying these photos can move around. One of the challenges in this is that you're likely to run into an issue where you have the text the same color as the image behind it. There are a couple of ways to deal with this, but let me show you my personal favorite.  
There is a relatively newer CSS property that you can apply to a background where you can overlay it with a color and specify the opacity (seethrough-ness). Using this is a _great_ way to darken the background just enough to make white text more readable and pop. Here's an example of the before and after shot on my blog:  
<!--more-->

## The Problem {#theproblem}

Here's the original background photo. You can see that on the right side of the Macbook that **the photo clashes with the white text and makes it really hard to read.**:<section id="image\_upload\_2" class="js-drop-zone pre-image-uploader">

<img class="js-upload-target" src="https://res.cloudinary.com/ryanhayes-net/image/upload/v1408201310/rbga-css-off_vupjyt.png" alt="" /> </section> 

## The Solution {#thesolution}

What we want to do is create a div that overlays the background image entirely, and then basically **add an rbga background property in order to make it act as a filter over top of the image.** Here's the code where the first 3 parameters are the standard red, green, blue values to create the color (gray in this case), and the last parameter determines the opacity, or how see-through you want the div.:

    .someDivOverlay {
       background: rgba(70, 72, 82, 0.3)
    }
    

Here's what it looks like when we've added the overlay. You can see you can make out the text _much_ more clearly on the right-hand side. Since the overlay in this case is gray and very light, **it adds just enough to be able to read without taking away the ability for the background image to really be a part of the story.** Take a look!:

&nbsp;<section id="image\_upload\_3" class="js-drop-zone pre-image-uploader">

<img class="js-upload-target" src="https://res.cloudinary.com/ryanhayes-net/image/upload/v1408201310/rbga-css-on_yezm5r.png" alt="" /> </p> 

<div class="description" style="display: none;">
  Add image of <strong>With the rbga CSS property</strong>
</div>

### Why not just modify the image itself?</section> 

Well, there are a couple of reasons you may want this:

It means the browser can download a single background image, cache it, use it in multiple places, but still be able to use multiple colors in certain situations. An example is by using media queries where you can make `if` statements in your CSS so that you could even have darker filters on mobile vs tablet, vs desktop if the image is placed in a different spot due to responsive design. You can use this technique to darken only the ones you need, but still only have a single image being served

Anther reason you may want this is if you are serving an image from an external site via an API, such as Facebook or Instagram. You can use this CSS as well as others to create your own image filters and even get a little crazy &#8211; all within the browser. That means you don't have to modify the original image or do any server-side manipulation, which is great for scalability, but also ensures you conserve the original image while saving bandwidth and storage space if that's something you need.

Are there any other similar CSS tricks you've found to save yourself from having to edit the original image in Photoshop multiple times?