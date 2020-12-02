---
title: "How to npm install when using McAfee (EPERM: Operation not permitted, rename)"
date: '2019-04-30T13:07:15+00:00'
author: Ryan Hayes
tags:
  - NPM
  - Web Development
image: img/tools.jpg
slug: npm-install-error-eperm-operation-not-permitted-rename
draft: false
---

This is an incredibly quick post so that I can remember what to do, not if, but when, I run into this again. 

It seems that McAfee gets pretty excited when you try to run an npm install sometimes and will attempt to scan files during the process. This causes a lock on certain files, which if npm isn't able to access them after so long, it will just give up. To remedy this, you'll need to edit the npm config file. To do this easily, open npm's config from the npm itself on the command line, like so:

``` powershell
npm config edit
```

Once the config file is open, look for this line:
``` 
; cache-lock-retries=10
```

Now, replace that line with the following, to significantly increase the cache lock retries:

```
cache-lock-retries=1000
```

This will allow npm to keep retrying past the point which McAfee (or other antivirus software) has released its own lock. The only real potential downside here is that if something *truly* has a permanent lock that it can't recover from, the npm install won't fail until much longer, though I'd take "running slow because I have antivirus" over "not able to do an npm install because of antivirus" any day. 

Hope this helps and let me know if you know of another workaround that's faster! Thanks for stopping by!
