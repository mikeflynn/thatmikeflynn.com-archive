---
layout: post
title: A Home Office DND Button
tags:
- projects
---

I'm extremely fortunate that I have a true home office at our house. It's my favorite room in our whole place with an both an internal door and a door to to the back yard, and it affords me plenty of room to store my various projects and geeky collections. Of course, the most important aspect of my home office is that it's a room where I can get some time work on...well...these days I work on _work_ in there. Not exciting, but it is important.

This has made Pandemic Life pretty easy for me but, and of course I have a but, there is one problem that has come up. When I'm in my office, and the door is shut, it's really hard to tell if I'm on an important Zoom meeting that shouldn't be interrupted by a family member creeping in from the door behind me or not.

This is a problem that needed a solution.

A solution far more complicated and awesome than any of the following: knocking, a small white board, a post-it note, or a shared calendar. Those are fine solutions that any sane person would be proud of, but...I mean...honestly...no. No, we won't be doing any of those.

Here's what I came up with (click to see a short demo video):

[![Demo Video](/public/images/dnd_button_video.jpg)](https://youtu.be/qXXsyncw0hE)

### The Problem

The core issue is that I want to be able to remotely trigger some kind of visual indicator that I am busy and can't be disturbed at the moment. The additional problem is that there is no existing power source in the little area outside of my office door so unless I add a new plug to the wall I can't hang a Raspberry Pi screen or a tablet to be a little billboard, also that kind of stuff wouldn't have been as obvious.

### The Solution

I replaced the one ceiling light bulb in the landing outside of my office door with an color LED bulb from Amazon. If the color is the standard incandescent yellow then all clear, but if the color is red, please hold. Yes, it makes the back of our house look like a hooker might take up residence there when I'm in a meeting, but it's a fairly elegant solution that didn't involve and moderate house surgery.

To control the bulb I have a multi layered solution that involves a complete software solution augmented by some hardware. The software part is really what's doing all of the actual automation, but the hardware...that little glowing button...is the fun part, and does actually serve one real benefit in that it shows me when DND is on as it's easy to forget. Also, clicky buttons are awesome.

Let's start with the software.

### The Software

We're a Google Assistant household as that platform seemed to work the best and better fit how my family and I want to use various "smart home" features. That's important context, because the automation path I settled on is through Google Assistant. It wasn't my first or most likely path, but it's where I ended up after starting with trying to find the API for that random Amazon bulb (Nope!), then looking in to Home Assistant (I already have this running in my home) but found their component for those bulbs [has been broken for some time](https://community.home-assistant.io/t/sudden-problems-with-tuya-smart-life-lights/155847/44) (Strike Two!). Then I realized that my Google Assistant devices could manipulate the bulb just fine. How do you "talk" to Google Assistant over a script? The answer is [Assistant Relay](https://greghesp.github.io/assistant-relay/). Check out their site for the details, but for my story, I got an Assistant Relay instance running via Docker on my home server, configured it and managed to send text commands to Google Assistant from my computer within 15-30 mins. I then wrote [a very simple script](https://gist.githubusercontent.com/mikeflynn/3b7885d5c74040ead2693d18785916f3/raw/3e4147f0f9fcb1a7e439c345a906525c63f9283f/dnd.sh) that I can put on my primary computer to simplify the command to `> dnd.sh on` or `> dnd.sh off`.

Success! ...and this could have been enough. Certainly typing the above commands in a terminal window I always have open anyway is trivial...but it's not as fun as a button! Let's make a button with some stuff I have lying around my workshop!

### The Hardware

![Final Button](/public/images/dnd_button_final.jpg)

I had a small Arduino board, the ItsyBitsy, laying around from a previous project so let's start there. I also had [one of these small clicky buttons with an LED in it](https://www.adafruit.com/product/1442), so let's throw that in as well. Wiring the button with the LED was straight forward once the right resistors arrived from Amazon, and I soldered it down to a proto board I also had in my stash.

![Button Wiring on Bread Board](/public/images/dnd_button_wiring.jpg)

I then flashed the board with [this code](https://gist.github.com/mikeflynn/7152549417f26e8c7a5d3cc23822b66e) tell tell the computer it is a keyboard and to toggle the LED while executing a set of keyboard commands to start the script.

Yes, I could have designed by own button housing, but that is a skill I haven't yet mastered and I found this lovely little box design on [Thingiverse](https://www.thingiverse.com/thing:2034318) and after scaling it up a bit, it fit my proto board perfectly. It's bigger than it needs to be but it's stable and looks fun on my desk. Once the print was complete, I used a stepper bit (these are great for drilling in to plastic) to create a hole in the lid and in the back for the USB cable to connect to the ItsyBitsy.

### The Final Result

This was a fun little project that solved a problem in a way that makes everyone in the house happy. There are still some issues on the hardware side such as it firing a "DND OFF" command when the board first boots, but they are minor enough that I've chosen to ignore them for now.

### The Parts List

Hardware:

* [A color LED Bulb](https://www.amazon.com/gp/product/B07GR2N11V/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
* Wire
* [16mm LED latching button](https://www.adafruit.com/product/1442)
* [ItsyBitsy 32u4 5V](https://www.adafruit.com/product/3677) (You could use a lot of different Arduino-type boards for this, but I had one of these laying around.)
* A micro USB cord
* The ability to print [this little box](https://www.thingiverse.com/thing:2034318)

Software:

* The Arduino IDE
* [Assistant Relay](https://greghesp.github.io/assistant-relay/)
* [This curl script](https://gist.githubusercontent.com/mikeflynn/3b7885d5c74040ead2693d18785916f3/raw/3e4147f0f9fcb1a7e439c345a906525c63f9283f/dnd.sh)
