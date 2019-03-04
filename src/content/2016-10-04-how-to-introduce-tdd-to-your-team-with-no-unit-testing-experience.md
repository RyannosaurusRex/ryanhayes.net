---
id: 1001347167
title: 'TDD 0 to 60: How to Introduce TDD to Your Team With No Unit Testing Experience'
date: 2016-10-04T13:50:05+00:00
author: Ryan Hayes
layout: post
image: img/demo1.jpg
guid: http://ryanhayes.net/?p=1001347167
permalink: /how-to-introduce-tdd-to-your-team-with-no-unit-testing-experience/
robotsmeta:
  - index,follow
categories:
  - Uncategorized
---
Does your team use Test Driven Development or even unit test at all?  If you&#8217;re like a lot of teams I&#8217;ve come in contact with, that answer would be a resounding &#8220;no&#8221;.   I&#8217;m not sure what the biggest barrier is for most people, though I think it&#8217;s a combination of the following:

  * &#8220;There&#8217;s barely enough time to write the application code, let alone test code!&#8221;
  * &#8220;I&#8217;m not even sure what kind of test to write.&#8221;
  * &#8220;We already have QA guys for that!&#8221;

There are a lot of things that hold back many teams from it.  Where do you get started?  Let&#8217;s address these common questions and show how easy it is to get started with testing and TDD.<!--more-->

## No time? ROI increases with size and complexity.

While it&#8217;s true that tests can take up valuable feature time at the very start, **automated tests are an investment**.  Unit tests take time to write, but the **ROI dramatically increases the longer a project lives and the more developers are simultaneously working on the project**.  With increased lifespan and size of a project, you run the risk of forgetting that changing a particular component interacts with and can break another component if it changes.  With no tests, it&#8217;s up to you or the QA team to catch this.  When you first write the feature, it&#8217;s easy to manually test, because you&#8217;re IN the work and you have specific feature scenarios to test.  As dependencies grow, you may run into a situation where something like adding dependency injection, changing timestamps from eastern to UTC to make things more standard.  These types of changes can call for a system-wide manual regression, and if a large portion of your codebase has tests covering it, you can easily see at a glance if a seemingly smaller change actually warrants a larger full-on regression test of the system, or which other components, specifically, need a closer look.

## Not sure where to start? Try bugs!

I honestly think this is the biggest hurdle for most teams &#8211; not knowing how to write a valuable test or hearing &#8220;write a failing test and then fix it&#8221; and not knowing _what _to write. **There are three things that you need to write a good test &#8211;  a concrete precondition, an action, and a concrete postcondition. If you use scrum or have a bug or feature tracker of any kind, this is already done for you.** If you have an existing system with NO tests, the absolute best way to get your team to start using TDD is to write a test for an existing bug.  Bugs usually have a format that tells you what state the system is in (precondition), what the user did (action), what they expected to happen (postcondition), and then what actually happened (the bug).

  * Start with an automated test that sets up the component or database or system to the precondition state outlined in the bug.
  * Call a method or run the application (if a webapp, [Selenium](http://seleniumhq.org) is a good example of automating the app through code inside a unit testing framework) outlined in the bug.
  * Write an Assert.True(&#8230;) or equivalent line that checks to make sure that the system is in the correct state (if the bug is real, this should fail the test at this point.
  * Fix the application so that the Assert.True(&#8230;) line passes and goes green.

In general, if a team is new to TDD, and particularly automated unit and integration tests in general, it&#8217;s hard to wrap your brain around this &#8220;write a test to fail&#8221; TDD concept when when you haven&#8217;t even written the code yet!  Starting with clear, known bugs and defects gives developers clear and focused practice that builds confidence and shows clear value.  Once this hurdle is passed, TDD for new features is much easier to understand.

## Developers are the first line of QA.

Let&#8217;s be clear, you should not be sending your code to QA without testing it first.  If you don&#8217;t have automated tests, then you have to manually test things anyway. And the next time you or someone else has to touch the feature? That&#8217;s right. Manually test it again. That&#8217;s a lot of time, but it&#8217;s not even the worst part. Many times we don&#8217;t even know that a component interacts with something else! That&#8217;s why automated integration tests are so important. They&#8217;re a running history of system interactions that we can check with the click of the mouse (or as part of your continuous integration process). **To get the most value from starting with no tests, try writing one test for each main component integration in the system.** You don&#8217;t have to check every edge case on day one, but try to get as many big, happy path tests in place as possible, and the more variety the better when starting out. Don&#8217;t try and get 100% coverage on a single component day 1 if you have no tests anywhere else.  Write one test for one component, then move to another. What you want to focus on is making sure all the components at least spin up and perform an action correctly. Once you have that, _then_ return and write tests for other cases.

## Practicing TDD Wrapup

So that&#8217;s it! Tests can be daunting, particularly if you already have a large codebase, but remember that defects and bugs give you great precondition/postcondition criteria to practice with, and covering parts that tend to fail the most first will get you the most bang for your buck. If you just add a little at a time, before you know it you&#8217;ll have a full suite of automated tests you can rely on and be able to write tests before your code much more easily!