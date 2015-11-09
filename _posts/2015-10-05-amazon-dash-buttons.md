---
layout: post
title: Amazon Dash Buttons are Awesome For Everything but Buying Stuff
tags:
- Hacks
---

![image](/public/images/dashbutton.jpg "Basement Dash Button")

*Sell a wifi-enabled button to buy stuff on Amazon? Sure you'd have to make sure you can't easily modify the button so that people can buy them and _not_ buy stuff on Amazon with them, but that shouldn't be too hard.*

Amazon had barely started selling their $5 "Dash Buttons" before this post on Medium showed up: ["How I Hacked Amazon’s $5 WiFi Button to track Baby Data"](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8). In it, Ted Benson, the co-founder and CTO of Cloudstitch, detailed how he managed to capture the click of an Amazon Dash Button without a single modification and it's very simple: Sit on your wireless network until you see the Dash Button join and request an IP address. Amazon was obviously trying to squeeze as much battery as possible out of these little buttons so they wisely made the wifi antennae only connect when the button was pressed and shutdown right after, but that connection makes ripples in the form of ARP packets that need to be sent to acquire an IP address. If you write a script that listens for those packets and knows the MAC address of a specific button (and if you did just enough of the Dash Button setup process to give it wifi access, but not enough to say which product you want to buy) then you're all set to have yourself a snazzy wireless button!

Pretty cool. I need one of those. Do I need one of those? I can think of something I'm sure...ok, yeah...I thought of something. I'll buy one.

Ted used a Python library called `scapy` to do his network sniffing, but I don't like Python. I don't run any Python scripts in my internal server, and I don't want to, so lets rewrite this functionality in Go (`golang`).

Took some digging around in the Go documentation, but I got it...

<script src="https://gist.github.com/mikeflynn/74c582aa05802eb01966.js"></script>

So what was that thing I wanted to do with the button again...? Right, lights. So here's the back-story: I have two ceiling light fixtures in my basement / home office / my daughter's blanket fort area, with both on different switches. I have Hue Lux light in the fixtures but the problem with wifi lights is that when you hit the switch they are off and you can't control them any more, but turning them off via the app every time is a pain in the ass. Plus the switch for the back lights is in this terrible place that I always forget to hit on the way out...anyway, it would be a lot better if I had one switch that controlled all of the light and that switch didn't turn them off, but turned them *down* so they would still be reachable for the apps.

I looked for a Go Hue light API library, but the only one I found was dead and not very good...so lets write one of those now! Why not?! Actually the Hue API is a little weird, but it's pretty simple. This shouldn't take long (especially in blog post time)...

Ok, all set!

<script src="https://gist.github.com/mikeflynn/394fd16c4a5e4aa57a44.js"></script>

Here it is compiled all together in a single project: [github.com/mikeflynn/go-dash-button](https://github.com/mikeflynn/go-dash-button). It logs out new Dash Buttons it sees, Hue errors, and has a config file option baked in for API keys and stuff. It could stand to be even more flexible and more easily importable in to a Go project, but I figured that not many will use this and stopped short. If you *do* want to use this for your own buttons let me know and I can clean it up further.

So my button works, now what? The finishing touches were capping the light switches (we rent) and adding a little hook to the wall for the button to live. The hook works out great as it's right above the old switch but  you can pull it off the wall and use it as a portable switch by the couch. I also found that regular Office Depot sticky labels are the perfect width to stick on over the brand logo for relabeling.

![image](/public/images/dashbutton_2.jpg "Basement Dash Button on Wall")

Now I'm just thinking of what else in my life needs a wireless button!