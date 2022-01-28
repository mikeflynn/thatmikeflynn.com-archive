---
layout: post
title: My Bat Phone Holiday Project
summary: This year, my holiday project was to make a Bat Phone replica. No, that's not weird. 
tags:
- project
- hardware
---

With three kids I don’t need a holiday break project to give me something to do like I used to, but I do still like to find something on my list and give it a time limit so I can use the time to accomplish something fun and improve some non-day job skills.

This year, I decided it was time to make myself a Bat Phone.

![The Batphone](/public/images/2022/batphone.jpg)

As those of you have have been in a Zoom meeting with me know, I have a shelf filled with things as my office backdrop and part of that shelf is dedicated to Batman.

![The Shelf](/public/images/2022/my_shelf.jpeg)

On that shelf I have a rewired Bat Signal, Legos, and prop recreations from the Michael Keaton Batman era, the Christian Bale batman era, and the animated (Kevin Conroy) Batman ear, but the Adam West Batman era was sadly underrepresented. What if I made a replica Bat Phone that actually rang (aka flashed a red light), and when you picked it up Commissioner Gordon talked to you?! Yes x 1000. With that, the “working” Bat Phone became my Holiday Break project for 2021.

A little while ago I had purchased a cheap classic looking red analog phone off Amazon for this project, so I had that already, but with supply chain and shipping issues the rest was going to half to come from what I could find in my workshop. I found a Raspberry Pi for the brains, wire, resistors, a red led, a glowing button that sort of worked for a power button, and I was going to try to use a cheap little momentary switch to handle the receiver being hung up (more on that later). I briefly thought about how I could use the receiver with the phone cord that came with the phone, until I remembered I had a corporate gift from a few years back that was an “old” looking phone that you can plug in to your cellphone…and it just happened to be the perfect shade of red. Huge timesaver.

I grabbed a breadboard and quickly hacked together some sloppy Python to make a proof of concept.

![Prototyping](/public/images/2022/batphone_001.jpeg)

I then took apart the phone, put the guts to the side and removed the dial in the front. To fill the hole where the dial was and where the red flashing light would need to be I had to model and 3D print a custom piece. Here’s an early version:

![Printed Insert Test](/public/images/2022/batphone_002.jpeg)

Once I found a way to get everything mounted inside the phone I painted the insert (now on version #3) to match the phone. 

![Painting](/public/images/2022/batphone_003.jpeg)

I put the LED in place, resealed the phone, and thought I was done for a hot second until I realized that I didn’t like how it felt when you hung up the phone. The switch I was using was pushing back too much, which would release the button and the code would read accidental pick ups. What I needed was a switch that wouldn’t push back, but I didn’t have a switch like that. I took the receiver apart and added weight to it, and that helped a little but not enough. How did the analog phone handle that? They use a lever style switch that doesn’t push back at all. Could I find a way to cut that out of the old phone and somehow wire that to the Pi in a way that I could use the same Python libraries to talk to it? After an hour or so the answer was: Yes!

![The Switch Switch](/public/images/2022/batphone_004.jpeg)

After taking the phone back apart and swapping out that switch, the receiver felt perfect and the project was done.

The Bat Phone now sits on the shelf behind me and rings by flashing it’s red light randomly throughout the day. If I catch it and pick it up, Commissioner Gordon talks to me, and…it’s awesome! (If you pick it up when it’s not ringing you get a dial tone, because of course you do and even Gotham City has quiet moments.)

[I made a short demo YouTube video](https://www.youtube.com/watch?v=4xc30-9TLgI) (volume up if you want to hear the sound from the phone, it's pretty quiet) if you like that sort of thing, and if anyone is interested I have the code, STL files, and parts list (though you might not want to use exactly what I found and made work from my shop inventory) all documented in a GitHub repo. If you’re interested, ping me via email or Twitter ([@thatmikeflynn](https://twitter.com/thatmikeflynn)) I can share the link.

![Ringing](/public/images/2022/batphone_005.jpeg)
![On Shelf](/public/images/2022/batphone_006.jpeg)
![Whole Shelf](/public/images/2022/batphone_008.jpeg)
