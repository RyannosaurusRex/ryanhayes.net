---
id: 1001347845
title: Azure Bot Service and Why You Should Check It Out
date: 2017-01-16T18:59:02+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.net/?p=1001347845
permalink: /azure-bot-service-check/
categories:
  - Blog
  - Software
---
At Build last year (2018) I had some free time and dropped into a chatbot presentation. I&#8217;ll be honest, I didn&#8217;t really care much about chatbots. I use them a bit in slack, but honestly, they aren&#8217;t overly helpful. &#8220;/giphy nick cage&#8221; will find a gif for me, but it&#8217;s usually faster to Google things, particularly when I&#8217;m at a keyboard. Skype and facebook bots, in general, have always felt more like a choose your own adventure book than typing to an actual person and, again, there are usually faster UIs for finding information like that. So why is Microsoft&#8217;s service for building chatbot&#8217;s so compelling to me now? I&#8217;ll give it to you with one word:<!--more-->

**Voice.**

This year I got 2 more Echo devices for my home, mostly for music, but also for getting calendar, weather, movie, and other info from anywhere in the main part of my house. I order stuff from Amazon, add things to my Wunderlist for shopping out later, and even call my wife sometimes from it. I&#8217;ve been a long-time fan of Siri on iOS and use it a ton to open things and get around the phone &#8211; and Google Assistant is even better on Android. I&#8217;ve also started using Cortana more to open things on my PC recently. All of this is to say that **voice user experiences are becoming huge**.

With [Azure Bot Service](https://azure.microsoft.com/en-us/services/bot-service/), one of the publishing targets is Cortana, and it&#8217;s fairly easy to wire up an Alexa skill to it. On the back-end, you just write some C# logic to service conversations and intents from the user, can hook it to some AI with Azure Cognitive Services, and you have the brains of a chatbot. That chatbot can then be published or really easily wired to any of the popular voice assistants that support skills. **It&#8217;s like [Cordova](https://cordova.apache.org/) for text and voice assistants!  **It&#8217;s also really easy to get started.

**Azure bot service: https://azure.microsoft.com/en-us/services/bot-service/?&WT.srch=1&WT.mc\_id=AID631184\_SEM\_20TbeIFB&lnkd=Google\_Azure\_Brand&gclid=Cj0KCQiAh\_DTBRCTARIsABlT9MYt2BQIIghcs63YL62vuZTC0w5g6o5xcRWiI7aRWsX0BhtUqjXTCh8aAgsyEALw_wcB**