---
layout: post
title: STLToday's Paywall is Weak
---

![image](/public/images/stltoday-paywall.png "STLToday Paywall")

I'm originally from St. Louis, and in fact spent my last few years in St. Louis working with and taking on the media <a href="http://punchingkitty.com/">in one form or another</a>. <a href="http://punchingkitty.com/2013/03/13/time-to-kinda-say-goodbye/">I've since moved on</a> and no longer concern myself with the day to day craziness of St. Louis' bizarre media scene...but I do like to check up on the sports.

STLToday is the website of St. Louis' prominent newspaper, The St. Louis Post Dispatch and it's always been kind of a mess. Horrible designs, way too big pictures that take too long to load, crazy ads all over the place, etc...basically the standard crazy failing "old media" company stuff. Today they added: "Paywall" to that list. There's countless articles about why <a href="http://gigaom.com/2013/04/10/one-downside-of-paywalls-where-does-your-growth-come-from/">paywalls don't work</a> and they are at best a way to delay death rather than anything close to a solution, but frankly I just wanted to read the excellent sports coverage supported by ads! Luckily it only took about 5 minutes to bypass the paywall.

When you load a STLToday.com article blocked by the paywall you'll notice that the content is shown for a few seconds and then it will redirect you to the pay screen. Interesting. At first I thought this might have been something along the lines of a enticement plan so you can see what you're going to miss if you don't pay up...but knowing the history of this particular website it made more sense that this was some drop-in paywall script that is loaded after the article and redirects once it reads your cookies and the content and determines you haven't paid. I took a quick look at the page source and found a meta tag named "__sync_contentCategory" it was set to "premium" on <a href="http://www.stltoday.com/sports/columns/bernie-miklasz/daily-bits-blues-starved-on-lack-of-postseason-goals/article_f0b372f8-4190-5fbd-8f53-bb90a534c09b.html">the article I wanted to read</a>, but set to "free" on <a href="http://www.stltoday.com/news/local/columns/editors-desk/from-the-editor-more-news-more-ways-with-our-full/article_f5788fb9-dc22-59ee-8d2c-2df2553ac1b2.html">the article explaining their new paywall</a>. Luckily their site is still slow as hell with all the ads and stuff they are loading, so if I just manage to change that meta tag to "free" on every article I read before their redirect script (probably loading on DOM ready) fires, will that short circuit the whole system?

Yup.

Here's the script (in the form of a user script that can be added to Chrome or Firefox): <a href="https://gist.github.com/mikeflynn/11379028">https://gist.github.com/mikeflynn/11379028</a>

<strong>So what could STLToday do to make this a lot more secure?</strong>
<ol>
  <li>Well they could not use javascript for one and simply have the backend read the user's information and the content type, but I suspect that their CMS isn't setup to do this and it's probably something they licensed so they can't make any changes to it, which explains the drop-in solution.</li>
  <li>They could also make their site faster (a good idea anyway) but one could still figure out a way to inject my script before their's runs.</li>
  <li>They could not rely on a meta tag for content tagging and instead ping back to the server to request the content type (premium vs free). This could still be bypassed by spoofing the server's response to your browser, but it would be a lot harder to write a script like the one I did earlier. This is probably a good enough solution, but if they still can't figure out how to write a server-side response on their CMS it can't happen.</li>
  <li>They could just not care. I very much doubt that they will see a lot of "digital subscriptions" and those that would be interested probably aren't the type to know what a User Script is or <a href="http://twitter.com/thatmikeflynn">follow me on Twitter</a>.</li>
</ol>