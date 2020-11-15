---
id: 1001347704
title: How To Set Up an EmberJS App Inside of an ASP.NET MVC App
date: '2015-08-16T02:47:01+00:00'
author: Ryan Hayes
permalink: how-to-set-up-an-emberjs-app-inside-of-an-asp-net-mvc-app/
tags:
  - Web Development
  - Ember
categories:
  - Blog
---
I love Ember. It helps me build _fantastic_ UIs, but security isn't super straightforward and I suck at it. I love ASP.NET MVC. It help me build secure applications and solid APIs, but for some apps I need a great responsive UI with great interaction.

Together, these two technologies can be used in conjunction with one another to create really amazing apps (and really quickly, too). So this guide is to show you how to set them up so that you get ASP.NET's security benefits with authentication and authorization, and then have Ember take over once you're signed in for an incredible Single Page App (SPA) experience.

_Note:_ This article assumes you have created a stock new ASP.NET project within Visual Studio and included MVC and WebAPI options. It also assumes you have EmberCLI installed and have run `ember new my-ember-app` into a directory in the root of your ASP.NET MVC project.

In whatever route in your MVC app that goes to /App (or whatever you want your "app" route to be named), return the `index.html` that's built from your Ember app.

```csharp
[RequireHttps]
public class AppController : Controller
{
    [Authorize]
    public ActionResult Index()
    {
        return File(Server.MapPath("~/my-ember-app/dist/") + "index.html", "text/html");
    }
}
```

ASP.NET MVC will set the root of the app and make it different than if you were serving the Ember.js app by itself, so you'll need to modify the asset folder URL to the folder relative to the MVC app, like so:

Change the following in index.html:

```html
`<link rel="stylesheet" href="/assets/vendor.css">`
```
to

```html
<link rel="stylesheet" href="/my-ember-app/dist/assets/vendor.css">
```
and continue for any other .js apps you are serving in your Ember app's index.html

Ember Data is certainly not required, but it definitely helps in a lot of cases. In order to save yourself from writing any adapters for Ember Data to support non-camelcase (the default in ASP.NET WebAPI), you use the following code in your Global.asax.cs to force JSON.NET to camelcase all of your responses, and expect the same in return. This also means you're closer to supporting the jsonapi.org spec!

### Adjusting APIs for Ember Data

In your `Global.asax.cs`, import `using Newtonsoft.Json;` and `using Newtonsoft.Json.Serialization;`and then include the following in your ApplicationStart() method:

```csharp
//Camel case the JSON to format correctly for Ember
var formatters = GlobalConfiguration.Configuration.Formatters;
var jsonFormatter = formatters.JsonFormatter;
var settings = jsonFormatter.SerializerSettings;
settings.Formatting = Formatting.Indented;
settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
```

This is to change the returned JSON format to be camel case, regardless of what casing your C# models are. Ember Data expects values to comply with the JSON API spec, which is why this is required.
