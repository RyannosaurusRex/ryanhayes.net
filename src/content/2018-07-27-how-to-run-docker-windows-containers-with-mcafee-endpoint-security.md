---
id: 1001347862
title: How to run Docker Windows Containers with McAfee Endpoint Security
date: 2018-07-27T15:14:27+00:00
author: Ryan Hayes
layout: post
guid: https://ryanhayes.net/?p=1001347862
permalink: /how-to-run-docker-windows-containers-with-mcafee-endpoint-security/
image: img/boat-container.jpeg
hestia_layout_select:
  - full-width
categories:
  - Blog
  - Software
tags:
  - Docker
  - McAfee
---
McAfee Endpoint Security and I have a love/hate relationship in that I hate it when it gets in my way and love it when it's not installed. In general, I appreciate security and security research, but recently I had been trying out (or attempting to try out) Docker and Kubernetes for a project I'm working on. It's a .NET 4.6 web application, and as such, requires Windows Server Core (as opposed to the much lighterweight, new Windows Nano Server or a Linux-based container).  The fact that we now have an option to effectively containerize any application, including a windows application, is incredible. So yesterday, I decided to try and set it up. Here's how it went.

[<img class="alignnone size-large wp-image-1001347863" src="/img/wp-content/uploads/2018/07/image1-1024x521.png" alt="What OS to target with .NET Containers" width="1024" height="521" srcset="/img/wp-content/uploads/2018/07/image1-1024x521.png 1024w, /img/wp-content/uploads/2018/07/image1-300x153.png 300w, /img/wp-content/uploads/2018/07/image1-768x391.png 768w, /img/wp-content/uploads/2018/07/image1-1080x550.png 1080w" sizes="(max-width: 1024px) 100vw, 1024px" />](/img/wp-content/uploads/2018/07/image1.png)

The only potential downside that I had heard about Windows Server Core containers were that they were pretty big. When I say big I mean like real big. 10GB big.

<blockquote class="twitter-tweet" data-lang="en">
  <p dir="ltr" lang="en">
    Any issues with the size?&#8230;we were playing with those and they were up into the 10 gig range.
  </p>
  
  <p>
    — Tom Pardue (@tparlimited) <a href="https://twitter.com/tparlimited/status/1016732280138731521?ref_src=twsrc%5Etfw">July 10, 2018</a>
  </p>
</blockquote>



Ok, fine, that's&#8230;that's not good but there's no other way to run full framework .NET apps without it a WindowsServerCore container, so I can get past that.

## Installing Docker and gotchas

Installing Docker on Windows with McAfee is pretty straightforward. This was the first time I'd installed it in a couple years, so I was pleasantly surprised when the entire thing was pretty seamless. The wizard created the necessary docker-users security group and added me to it and has a pretty nice interface now. There were a few initial setup steps that were unclear I had to lookup, though:

  1. **You need to add your user to the Hyper-V Administrators group.** For whatever reason, the Docker for Windows installation created the docker-users group and added me there, but didn't to the existing Hyper-V Administrators group. 🤷

  2. **When building a docker container via the command line interface (Docker CLI)**, the login information is different from what you use to log into the website.  The website accepts you username OR your email address (I use my email address), but **the CLI will only accept your username, and not the email address.**  It also doesn't tell you why the login fails, so just get in a habit of using your username.

## Issues building a docker image with McAfee Endpoint Security installed

Everything seemed to be going as well as I could expect until it came time to run `docker build` on my dockerfile and get everything set up.  It seemed to be pulling things from the registry OK, but then I was met with this error message:

`PS C:\WINDOWS\system32> docker pull microsoft/windowsservercore  
Using default tag: latest  
latest: Pulling from microsoft/windowsservercore  
9c7f9c7d9bc2: Extracting [==================================================>] 3.738 GB/3.738 GB  
d33fff6043a1: Download complete  
failed to register layer: rename C:\ProgramData\Docker\image\windowsfilter\layerdb\tmp\write-set-925881297 C:\ProgramData\Docker\image\windowsfilter\layerdb\sha256\3fd27ecef6a323f5ea7f3fde1f7b87a2dbfb1afa797f88fd7d20e8dbdc856f67: Access is denied.`

Ok, so let's look at what's happening here.  **It's saying it can't register a layer because access is denied on my computer's file system&#8230;but I'm administrator! **What could possibly be the issue? Then I remember. _McAfee. _A quick Google search showed a lot of other folks having the same kind of issue, and ends up that McAfee doesn't even support Windows containers. Yea, that's right.

### McAfee Endpoint Security Does Not Support Windows-based Docker Containers!

After tons of research, the answer from McAfee itself (according to a knowledge base article), is that McAfee Endpoint Security does not support Windows Docker containers! It seems the main issues were:

  * DNS does not resolve
  * Performance issues with containers
  * Slowness in opening containers
  * Firewall/NAT issues

To take a look for yourself, here's the original [KB article on Windows Docker containers not being supported by McAfee](https://kc.mcafee.com/corporate/index?page=content&id=KB90041&actp=null&viewlocale=en_US&showDraft=false&platinum_status=false&locale=en_US).

## How can I run Windows Docker Containers on Windows if McAfee doesn't support it?

There are actually a few workarounds that have been successful for me and my team:

### Virtual Machines

First, you can use the docker tools inside a separate "real" virtual machine (using VMWare, VirtualBox, etc) and actually perform the work there. This gets you around McAfee being on the VM directly, but also has a few drawbacks. It will slow your workflow down as you'll have the VM to jump through from your local machine to the docker tools and images you may be running. This is not ideal, but might give you some runway until McAfee can add support.

### .NET Core!

**McAfee says that Linux-based containers are OK**. This means if you're using a language or tools that require Windows containers, you may be able to move to something that doesn't require them.

I know this isn't much help, particularly if you have a large application already that you're moving to Docker, but can be an option if you're just starting out or if you are able to adjust your stack enough to be able to drop the Windows requirement.

### Remove McAfee?

One of the possible solutions is to move away from McAfee. If Windows Docker containers are a hard requirement for you and no other options work well for your team, this might be the only option. 

## The bottom line

Basically, McAfee is really tough to work around as a developer, and Windows Docker containers are no exception. You have a limited options in the meantime, but I feel like the best recommendation is to not waste your time with workarounds and wait it out. McAfee should have an update at some point in the future to fix the issue. If you can't afford to wait and the workarounds aren't options, remember that making your voice heard on Twitter and Email and letting McAfee know this is important will go a long way in having them increase this as a priority.