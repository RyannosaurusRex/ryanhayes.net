---
id: 1001346731
title: How to Build an RSS Feed Reader in Windows Phone 7 – Part I - Retrieving, Parsing, and Displaying Post Titles
date: '2010-08-24T03:05:00+00:00'
author: Ryan Hayes
excerpt: Read along as we write a simple RSS reader for Windows Phone 7 using the secret, ready-made syndication libraries in the .NET framework.
layout: post
guid: https://blog.ryanhayes.net/post/1001346643
slug: how-to-build-an-rss-feed-reader-in-windows-phone-7part-i-retrieving-parsing-and-displaying-post-titles
Thumbnail:
  - img/wp-content/uploads/2010/11/four-glossy-rss-icons_full.jpg
dsq_thread_id:
  - ""
robotsmeta:
  - index,follow
wpb_post_views_count:
  - "6039"
image: img/wp-content/uploads/2013/10/474975762_67c1c8a5bf_o-300x300_zyivxt.jpg
categories:
  - Blog
  - Software
tags:
  - visual studio 2010
  - windows
  - windows phone 7
---
One of the first applications that I write for a new platform to learn the ropes is an RSS reader.  That rule holds true for Windows Phone 7.  The great thing about the Windows Phone 7 SDK and the .NET 4.0 platform is that everything you need to work with RSS or any other syndication feed is ready for you right out of the box!  With Android development, you need to parse the XML and return values yourself.  For just reading an RSS feed, it’s a nightmare.  The references don’t, however, show up in Visual Studio 2010 automatically, so you’ll need to add them manually.  I’ll go over it all in this guide to programming RSS feeds in Windows Phone 7.<!--more-->

<!-- more -->

If you’re creating a Windows Phone 7 app for the first time, you’ll notice that there are two types of applications that you can create:

  * Silverlight (List/Form/Standard Graphics)
  * XNA (Enhanced/Custom Graphics)

XNA applications are great for games or fancy-pants apps, but not for RSS readers.  For our blog/RSS app, we’ll need to just select the standard Silverlight list template.  This gives us a great head start with the UI that we can use as the main menu of post titles (and more that we’ll use in later posts).

Now for the magic!  If you’ve read my other post on [how to read RSS feeds in Android](https://blog.ryanhayes.net/post/649210287/android-project-part-ii-reading-rss-feeds-in-android), you’ll be relieved to know that Windows Phone 7 is leaps and bounds easier than Android!  Microsoft was kind enough to give us **System.ServiceModel.Syndication**, which contains absolutely everything you need for dealing with RSS feeds and xml-based syndication.  However **you must add System.ServiceModel.Syndication.dll manually** as Visual Studio 2010 does not show it in the list of references out of the box.

**To add System.ServiceModel.Syn****dication.dll:  
** 

  1. Right-click **References** in the under the Windows Phone 7 project in the **Solution Explorer**.
  2. Select **Add Reference**
  3. Go to the **Browse** tab (_Note: This may be added to the .NET tab as usual in future releases of the Windows Phone 7 SDK.  Keep that in mind if you’re reading this…from the FUTURE!)_
  4. On your C: (or equivalent) drive, browse to **\Program Files**<span>\Microsoft SDKs\Silverlight\v4.0\Libraries\Client</span>
  5. In the list, select **System.ServiceModel.Syndication.dll** and click **OK.**

Now you’re all set to work with RSS feeds!  Everything we do in this post will be working with the MainPage.xaml and its MainPage.xaml.cs code behind file.  First, let’s add some code to the **OnNavigatedTo** method in the **MainPage.xaml.cs** file:

 `protected override void OnNavigatedTo(NavigationEventArgs e)<br />
{<br />
base.OnNavigatedTo(e);<br />
string url = "https://feeds.feedburner.com/blogryanhayesnet";<br />
HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(new Uri(url));<br />
request.BeginGetResponse(ResponseHandler, request);<br />
}` 

This little piece of code does a few things whenever the Windows Phone 7 application hits the MainPage:

  * Sets the RSS feed URL of the feed you want to display.
  * Creates a new HttpWebRequest with that url to fetch.
  * Starts an **asynchronous** request to grab the feed.

You’ll notice that I bolded asynchronous.  This is because if you’ve done a lot of web requests in the past, you just shoot the request and immediately get the response in the next line.  With phones, however, your connection can come and go, and from different sources.  For this reason the HttpWebRequest is split into two parts.  First, this **request**, which fires off a **.BeginGetResponse(ResponseHandler, request);**.  Once the request is completed, an event fires, which is what the ResponseHandler part is for.  This method that we need to create fires as soon as the RSS feed is received, and we’ll also use that method to update the contents of the MainListBox with the items that we get back!  Let’s take a look at it now:

![](https://media.tumblr.com/tumblr_l7mgfwLsbA1qb9rmw.png) 

The first few lines of the method make sure the HttpWebRequest came back with an _OK_ status and gets the response information.  If everything checks out, then we proceed to parsing the RSS feed that was returned.  First, we use **XmlReader to get the response as an XML document.** Once we have that, we **load the reader into a new Syndication Feed**.  The SyndicationFeed is basically a wrapper around a standard XML object that already has all the properties ready to grab that you would expect in an RSS feed and its posts!** __**_**Awesome!**_ From here you can the SyndicationFeed however you want.  For my blog application, I chose to set the SyndicationFeed object as the ItemsSource for the MainListBox in my UI.

From here, we’re almost done.  The last thing that we need to do is set the ItemText and DetailsText’s Text properties to bind to the Title property in the Feed’s list of Items.  For this, I bound both to just the Title text &#8211; take a look:

![](https://media.tumblr.com/tumblr_l7mva1mCDS1qb9rmw.png) 

_**And that’s it!**_ Seriously, that’s all you need to get started with reading RSS feeds in Windows 7.  In part II of this series I’ll finish up the project and show you how to maneuver to a second page and show the full post in the blog app.
