---
layout: post
title: Oh Twitter, What Have You Done?
tags:
- Technology
---

I’ve used and enjoyed Twitter for what seems like a very long time now. To be clear, I don’t “enjoy” Twitter like all the “social media experts” or Klout junkies, or anyone looking to help “maximize my personal brand awareness”, I just like it. It’s quick. It’s simple. Lots of available tools. Easy to develop on.

Those last two go hand in hand of course, and it’s the first thing I usually mention when someone gets me started on what I think about Twitter, or how an API should be created. There’s no doubt in my mind that the rise of Twitter can be directly attributed to it’s beautifully simple API. No doubt. None. Suer it’s simple, and people can figure it out quickly, and lots of interesting people were on it from the beginning so it fostered a great atomphere for geeks, who then told their non-geeky friends and so on…but without that API, that really simple, “I can make a script that pulls new tweets in 5 seconds” kinda way, it would not be where it is today. There wouldn’t have been a ton of clients for every phone, desktop, and website letting people easily make tweets. There wouldn’t have a little widget in the side bar of every blog showing who’s talking about the blog at that moment, of if you’re less popular, what the author is talking about at that moment. And there wouldn’t have been whole businesses started about looking at the data and pulling out trends or market data. More important to Twitter corporate, there also wouldn’t have been: Twitter’s own search technology, or Twitter’s own iOS/Mac client as both of those were third party services that Twitter acquired later on down the road.

And now this: <a href="https://dev.twitter.com/blog/changes-coming-to-twitter-api">https://dev.twitter.com/blog/changes-coming-to-twitter-api</a>

There’s <a title="marco.org" href="http://www.marco.org/2012/08/16/twitter-api-changes">lots</a> and <a title="Daringfireball.net" href="http://daringfireball.net/linked/2012/08/16/twitter-drop-dead">lots</a> and <a title="dashes.com" href="http://dashes.com/anil/2012/08/what-twitters-api-announcement-could-have-said.html">lots</a> of reaction to this already, but here’s the short version:
<ol>
  <li>You always have to authenticate on the API. No matter what. Even for public stuff.</li>
  <li>You can only display Tweets in the way we want you to.</li>
  <li>Don’t make a client.</li>
</ol>
The sound you’re hearing is the collective “WTF?!” from the very same group of people that made Twitter what it is today: The developers. The current client developers are screwed because if their app gets popular they get capped, and even more importantly, new developers that were thinking about doing something with Twitter data now probably won’t.

It’s not the Klout’s or other big data apps that will get hurt since they already have plenty of reasons to obey the new API laws and already authenticate, it’s the small apps actually. The apps developers make one night to see if they want to make something bigger. Even something as simple as the little js code I threw together the other day to display tweets from people replying to the @answersdotcom account, now would seem like a pain in the ass. “I have to authenticate for public tweet searches? Never mind. I’ll do my actual work instead.” …and that’s the key. Twitter, while big, still isn’t a necessity. It isn’t email or instant messaging. You might think someone’s weird for not having a Twitter account, but it’s not like you can’t share with them another way. Twitter is still, at some level, “extra”. Do I want to show my developers Tweets of people talking to the company or using a certain hash tag? Yeah, I think that kind of stuff is fun. Do I <em>need</em> to make that happen? No. So if it’s a pain to implement, I won’t. It’s that simple.

There is one silver lining: When I get on my high horse about making APIs simple, making sure that while all the authenticated functionality is there, we also have a easy path to get up and running with the data in minutes…the part where I always use the early Twitter API as an example…I can follow it up with the counter example: The latter Twitter API that none of them use because it’s a pain with added steps and rules just to get a simple app off the ground. It will really help bring the point home.