---
id: 1001347663
title: Redirect WWW to Non-WWW using the Web.config
date: 2014-09-01T02:10:43+00:00
author: Ryan Hayes
layout: post
guid: http://ryanhayes.wpengine.com/?p=1001347663
permalink: /redirect-www-non-www-using-web-config/
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
  - "25492"
dsq_thread_id:
  - ""
categories:
  - Blog
---
<div class="wrapper">
  By now, most people know that websites&#8217; SEO is dinged by Google when there is both a www and non-www url with the same content on both. Google (and Bing) treat them as two separate sites and they fight for pagerank as everyone else blows your two competing sites out of the water. I&#8217;ve had redirects set up on my WordPress blog for the past 4 years, which is pretty easy to do, but I <a title="Ghost VS WordPress (and Why I Migrated Back to WordPress)" href="http://ryanhayes.net/ghost-vs-wordpress-migrating/">recently moved my blog over to Ghost</a> blogging engine and since it&#8217;s currently at version 0.5, it didn&#8217;t have this 301 redirect functionality built in, so I needed to roll my own. Since I was moving to <a href="http://azure.com">Azure Websites</a>, I needed to add a redirect to get this fixed in the web.config, so I thought I&#8217;d share it with you!&nbsp;</p> 
  
  <h3 id="redirectingtononwwwusingthewebconfig">
    Redirecting to non-www using the Web.config
  </h3>
  
  <p>
    You can always use IIS to explicity set up a redirect, but I find that these types of configurations are best done in the Web.config, since they are (1) more portable, (2) have the ability to be stored in source control, and (3) can be included in Web.config transformations if you want to get all fancy!
  </p>
  
  <p>
    Here&#8217;s what you need to add to your Web.config:
  </p>
  
  <pre><code>&lt;rewrite&gt;
    &lt;rules&gt;
        &lt;rule name="Redirect to non-www" stopProcessing="true"&gt;
            &lt;match url="(.*)" negate="false"&gt;&lt;/match&gt;
            &lt;action type="Redirect" url="http://domain.com/{R:1}"&gt;&lt;/action&gt;
            &lt;conditions&gt;
                &lt;add input="{HTTP_HOST}" pattern="^domain\.com$" negate="true"&gt;&lt;/add&gt;
            &lt;/conditions&gt;
        &lt;/rule&gt;
    &lt;/rules&gt;
&lt;/rewrite&gt;
</code></pre>
  
  <p>
    &nbsp;
  </p>
  
  <blockquote>
    <p>
      Note: You&#8217;ll need to make sure that for redirecting a site like www.example.com to example.com, you&#8217;ll need to make sure that you&#8217;ve configured <em>both</em> of those domains to point to your website. If you never set up the www. site to point to your host, IIS and your Web.config will never be hit to do a redirection.
    </p>
    
    <p>
      &nbsp;
    </p>
  </blockquote>
  
  <p>
    &nbsp;
  </p>
  
  <h3 id="collectlostseo">
    Collect Lost SEO
  </h3>
  
  <p>
    And that&#8217;s it! <strong>These redirects have huge effects on what I call &#8220;accidental&#8221; SEO.</strong> All over the internet you&#8217;ll find people in the habit of hand-linking to websites, and we&#8217;ve got a bad habit of just assuming www and non-www links are inter-changeable, when they&#8217;re not. Setting up these redirects will ensure you get credit for all (or many, many more) of the links to your site that are out there on the web.
  </p>
  
  <p>
  </p>
</div>