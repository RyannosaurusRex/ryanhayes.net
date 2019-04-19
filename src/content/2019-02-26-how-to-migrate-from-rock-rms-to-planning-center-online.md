---
id: 1001347924
title: How to migrate from Rock RMS to Planning Center Online
date: 2019-02-26T13:07:15+00:00
author: Ryan Hayes
layout: post
tags:
  - RockRMS
  - Planning Center
guid: https://ryanhayes.net/?p=1001347924
permalink: /how-to-migrate-from-rock-rms-to-planning-center-online/
image: img/logos/planning-center-online-logo.png
categories:
  - Blog
---
I run the software systems for [Harvest Community Church](https://harvesttn.com/) and also play guitar for our 3 services on Sunday.  We've been using Planning Center's Services app to schedule and manage our Sunday mornings for almost a decade. Recently Harvest moved from Rock RMS to PCO, and it's been great. Below is the database script I used to extract the data needed from RockRMS and get it in the format needed for a Planning Center Online import.

`gist:RyannosaurusRex/1bca0a9dc4e76a0d50640548ab3c38e5#RockRmsExportToPCO.sql`

## Extract the data from Rock RMS

Keep in mind that this script has a "SELECT TOP(1000)" at the top because we had A LOT of data. It's easier to test your export if you don't pull out everyone every time. When ready, you'll want to replace "SELECT TOP(1000)" WITH "*" in order to pull all of the records.

You'll notice that some of the lines are commented out for the migration from Rock RMS to PCO. These records we ended up not needing or were unused. If you do need them, those names are what PCO is looking for, so just add to the script to pull those additional pieces if needed.



Once you have the data extracted, you'll need to get it into a CSV format. I like to use [Azure Data Studio (Download here)](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017) to connect to the database and run the query because you can save the results of the above query as a CSV, which is the format Planning Center needs in order to do an import.

## Importing into Planning Center Online

Once you have the data in a .csv file, log into your Planning Center account, go to the People app, and select CSV Import / Export and upload your file.

[<img src="img/wp-content/uploads/2019/02/Planning-Center-Online-Import-1024x224.png" alt="" class="alignnone size-large wp-image-1001347928" width="750" height="164" srcset="https://img/wp-content/uploads/2019/02/Planning-Center-Online-Import-1024x224.png 1024w, img/wp-content/uploads/2019/02/Planning-Center-Online-Import-300x66.png 300w, img/wp-content/uploads/2019/02/Planning-Center-Online-Import-768x168.png 768w, img/wp-content/uploads/2019/02/Planning-Center-Online-Import.png 1234w" sizes="(max-width: 750px) 100vw, 750px" />](img/wp-content/uploads/2019/02/Planning-Center-Online-Import.png)

Once the file is uploaded, you can review the import. You can revert it within the first few hours in case things don't look quite.

## Cleanup and Gotchas

From there, you may need to merge some people if you already have folks in the system. Keep an eye out for any Services people that you merge and make sure the email they used in Services remains their primary email. If it doesn't, they may stop getting notifications for when they're scheduled to serve or be unable to log in.

Hope this helps your Rock RMS to Planning Center Online migration go a little more smoothly!

&nbsp;