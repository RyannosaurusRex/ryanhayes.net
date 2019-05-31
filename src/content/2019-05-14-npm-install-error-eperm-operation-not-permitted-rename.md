---
title: "How to npm install when using McAfee (EPERM: Operation not permitted, rename)"
date: 2019-04-30T13:07:15+00:00
author: Ryan Hayes
tags:
  - NPM
  - Web Development
image: img/tools.jpg
permalink: /npm-install-error-eperm-operation-not-permitted-rename
draft: true
---

``` powershell
npm config edit
```

Change this line: 
```
; cache-lock-retries=10
```
```

to this:

```
cache-lock-retries=1000
```