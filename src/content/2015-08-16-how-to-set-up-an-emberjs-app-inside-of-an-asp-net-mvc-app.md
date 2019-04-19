---
id: 1001347704
title: How To Set Up an EmberJS App Inside of an ASP.NET MVC App
date: 2015-08-16T02:47:01+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347704
permalink: /how-to-set-up-an-emberjs-app-inside-of-an-asp-net-mvc-app/
image: img/demo1.jpg
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
  - "3348"
dsq_thread_id:
  - ""
categories:
  - Blog
---
I love Ember. It helps me build _fantastic_ UIs, but security isn't super straightforward and I suck at it. I love ASP.NET MVC. It help me build secure applications and solid APIs, but for some apps I need a great responsive UI with great interaction.

Together, these two technologies can be used together to create really amazing apps (and really quickly, too). So this guide is to show you how to set them up together.<!--more-->

_Note:_ This article assumes you have created a stock new ASP.NET project within Visual Studio and included MVC and WebAPI options. It also assumes you have EmberCLI installed and have run`ember new my-ember-app` into a directory in the root of your ASP.NET MVC project.

## [](https://gist.github.com/RyannosaurusRex/063c76e2d3eb756989f3#set-the-emberjs-indexhtml-as-the-app-route-in-your-mvc-app){#user-content-set-the-emberjs-indexhtml-as-the-app-route-in-your-mvc-app.anchor}Set the EmberJS index.html as the /App route in your MVC app

In whatever route in your MVC app that goes to /App (or whatever you want your "app" route to be named), return the `index.html` that's built from your Ember app.

<div class="highlight highlight-source-cs">
  <pre>    [RequireHttps]
    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">AppController</span> : <span class="pl-k">Controller</span>
    {
        [Authorize]
        <span class="pl-k">public</span> ActionResult <span class="pl-en">Index</span>()
        {
            <span class="pl-k">return</span> File(Server.MapPath(<span class="pl-s"><span class="pl-pds">"</span>~/my-ember-app/dist/<span class="pl-pds">"</span></span>) + <span class="pl-s"><span class="pl-pds">"</span>index.html<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>text/html<span class="pl-pds">"</span></span>);
        }
    }</pre>
</div>

## [](https://gist.github.com/RyannosaurusRex/063c76e2d3eb756989f3#update-asset-urls){#user-content-update-asset-urls.anchor}Update asset URLS

ASP.NET MVC will set the root of the app and make it different than if you were serving the Ember.js app by itself, so you'll need to modify the asset folder URL to the folder relative to the MVC app, like so:

Change the following in index.html:

`<link rel="stylesheet" href="/assets/vendor.css">`

to

`<link rel="stylesheet" href="/my-ember-app/dist/assets/vendor.css">`

&#8230;and continue for any other .js apps you are serving in your Ember app's index.html

## [](https://gist.github.com/RyannosaurusRex/063c76e2d3eb756989f3#setup-camel-casing-of-json-for-ember-data){#user-content-setup-camel-casing-of-json-for-ember-data.anchor}Setup Camel Casing of JSON for Ember Data

Ember Data is certainly not required, but it definitely helps in a lot of cases. In order to save yourself from writing any adapters for Ember Data to support non-camelcase (the default in ASP.NET WebAPI), you use the following code in your Global.asax.cs to force JSON.NET to camelcase all of your responses, and expect the same in return. This also means you're closer to supporting the jsonapi.org spec!

In your `Global.asax.cs`, import `using Newtonsoft.Json;` and `using Newtonsoft.Json.Serialization;`and then include the following in your ApplicationStart() method:

<div class="highlight highlight-source-cs">
  <pre>    <span class="pl-c">//Camel case the JSON to format correctly for Ember</span>
    <span class="pl-k">var</span> formatters = GlobalConfiguration.Configuration.Formatters;
    <span class="pl-k">var</span> jsonFormatter = formatters.JsonFormatter;
    <span class="pl-k">var</span> settings = jsonFormatter.SerializerSettings;
    settings.Formatting = Formatting.Indented;
    settings.ContractResolver = <span class="pl-k">new</span> CamelCasePropertyNamesContractResolver();</pre>
</div>