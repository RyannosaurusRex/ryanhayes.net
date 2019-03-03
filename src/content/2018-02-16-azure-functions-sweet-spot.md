---
id: 1001347848
title: 'Azure Functions: Developer Infrastructure is the Sweet Spot'
date: 2018-02-16T18:04:18+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347848
permalink: /azure-functions-sweet-spot/
image: img/wp-content/uploads/2018/02/download.png
categories:
  - Software
---
I recently gave a talk at TriDev about Azure Functions, the serverless programming product from Microsoft. Azure Functions is basically functions as a service. You can basically write a single function in JavaScript or C# and it manages the entire infrastructure around it. You don&#8217;t need to worry about scaling, networking, load balancing, even containers. In my time evaluating it, one of the things I found was that the best and easiest application for easing into using Azure Functions is as part of your continuous delivery infrastructure.  A lot of times it&#8217;s scary to try new cloud services, or at minimum get experience with these new technologies in a &#8220;real&#8221; setting. Azure functions are perfect for getting developer utilities into production without having to manage our own server.

Here are the slides from my talk.