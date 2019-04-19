---
id: 1001346740
title: 'How To Check a Web Page For a String Using .NET C# Using HttpWebRequest'
date: 2010-06-01T14:59:58+00:00
author: Ryan Hayes
image: img/demo1.jpg
layout: post
guid: https://blog.ryanhayes.net/post/653497196
permalink: /how-to-check-a-web-page-for-a-string-using-net-c-sharp-using-httpwebrequest/
dsq_thread_id:
  - ""
wpb_post_views_count:
  - "2264"
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
categories:
  - Blog
tags:
  - .NET
  - CSharp
  - How-To
  - software
  - Web
---
`using System.Text;<br />
using System.Net;using System.IO;<br />
HttpWebRequest myRequest = (HttpWebRequest)WebRequest.Create(URL);myRequest.Method = "GET";WebResponse myResponse = myRequest.GetResponse();StreamReader sr = new StreamReader(myResponse.GetResponseStream(), System.Text.Encoding.UTF8);string result = sr.ReadToEnd();sr.Close();myResponse.Close();`

`//Now, once you have this, perform the search on result string<br />
int stringFound = result.IndexOf("My search string");`