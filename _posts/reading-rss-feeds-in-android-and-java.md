---
id: 1001346742
title: 'Android Project Part II: Reading RSS Feeds'
date: '2010-05-31T07:08:54+00:00'
author: Ryan Hayes
layout: post
guid: https://blog.ryanhayes.net/post/649210287
image: img/demo1.jpg
slug: reading-rss-feeds-in-android-and-java/
robotsmeta:
  - index,follow
Thumbnail:
  - img/wp-content/uploads/2010/11/androids.gif
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "7801"
categories:
  - Blog
  - Software
tags:
  - android
  - Java
  - RSS
  - software
---
The first real goal for the Android app was getting news updates into the app.  One of the main goals of the app is to be able to get up-to-date information that mirrored that of the harvesttn.com website.  As you probably already know, content is typically served up using an RSS feed in today’s world.   With that in mind, the first real piece that I needed to write for getting news notifications was to build a way to consume and display an RSS feed.

One of the great things is that reading an RSS feed  
in code is an extremely common activity.  The first thing I did was look for a library that I could use to grab and read the feed.  I eventually found [an article from IBM with code using Android’s SAX parser to parse an XML feed and place it into a ListActivity](https://www.ibm.com/developerworks/opensource/library/x-android/index.html).

I copied over the code, and basically used the MessageList class as a template for my NewsUpdates class in my app.  Not much needed to be changed, except for the way it loads the feed.  The code on IBM’s site grabs a feed from a hardcoded URL in the FeedParserFactory, and out of the box only contains a .getParser(ParserType type) method, passing in what method you want to use to parse the XML (I used Android-SAX).  I figured that I may need to reuse the FeedParser again, so I overloaded the getParser method to pass in not just the type, but also a feed url, as you can see me using  in the code below.Once I did that, the rest of the code is just getting and displaying the information that the FeedParser got for me.  first, you just get the items out of the parser into something that you can use. Here’s a simple way to get and parse the RSS feed, modified from the ListActivity in IBM’s code and simplified for easier use. Here’s a simple way to get and parse an RSS feed once it is modified (read the whole article if you’re cutting corners):

> /\*In a ListActivity class, this is in a loadFeed(ParserType type) method. Of course, this isn't really necessary to read a feed. Only down to the "List<Message> messages = parser.parse();" line is necessary. You can then iterate through each message and call standard getters for each of the items to get the Title, Description, etc.\*/
> 
> //Get a new FeedParser from the factory.  
> //Pass in the type of library you want to  
> //use as well as the URL of the feed  
> //you want to grab.  
> FeedParser parser = FeedParserFactory.getParser(type, getString(R.string.News\_RSS\_Feed));
> 
> //Parse the feed into the Messages so you can  
> //use the feed data more easily in your app.  
> List<Message>= parser.parse();  
> String xml = writeXml();
> 
> //Iterate through each RSS entry and grab the titles to use as the content in the ListView  
> List<titles>= new ArrayList<string>(messages.size());  
> for (Message msg : messages){  
> titles.add(msg.getTitle());  
> }
> 
> //Add the ListView via an ArrayAdapter  
> ArrayAdapter<string> adapter =  
> new ArrayAdapter<string>(this, R.layout.row,titles);
> 
> this.setListAdapter(adapter); 

DONE! Simple as that. RSS is a great way to integrate content into you mobile application and have a similar (and often better) experience to the web version. The original IBM post is located below, where you can also download the full source.  This code was writted for Android SDK release 3, but it worked perfectly with the 7th release (Android 2.1). Remember that when you copy over the code into your project, ensure your manifest file properly registers all the appropriate activities. Otherwise, you’ll get a force close.: [](https://www.ibm.com/developerworks/opensource/library/x-android/index.html)<https://www.ibm.com/developerworks/opensource/library/x-android/index.html>
