---
layout: post
title: How a Developer Fell in Love with Keyboard Maestro
summary: Keyboard Maestro has quickly become the central database of all of my personal Mac automations.
tags:
- automation
- macos
- c33
---

![Do More](/public/images/2022/do_more_imac.png)

[You may have heard that I’ve been getting more in to automation recently](https://thatmikeflynn.com/2022/01/03/stream-deck/), specifically automating more of my work and personal macOS environments. There are *countless* apps and tools and plugins and widgets for this on the Mac and over my 20 years using the Mac I have ignored all of them. Why? **Because I can code, dammit!** I don't need a menu bar filled with little icons that are the windows to little ram-munching services when I can just write a bash script or even my own Mac app to do what I need!

So what changed? Nothing! I can still code and I still don’t want a bunch of little specialized apps running all the time…but I have seen the light on one automation app in particular.

Why am I writing this? It turns out that I fell in love with [Keyboard Maestro](https://www.keyboardmaestro.com/main/).

Yes, on it’s face it’s a drag and drop way to create automations, making it the Mac automation Swiss Army knife, but even if you can code, it is extremely valuable. Here are a few reasons, and after that I’ll run through a few of my favorite automations.

### Little Scripts Everywhere

I’ve been writing little automation scripts for decades now and they have ended up any number of places over the years, like in Documents, or ~/bin, or in Automator, or a local git repo somewhere. Even if I was diligent about keeping everything in a single directory, over time and when switching hardware, some scripts are lost, some are kept, and some are kept but the context is lost. Scheduling scripts is also an issue. Unix systems, such as macOS can use cron jobs, but they don’t sync or migrate to the next computer or are simply forgotten.

Keyboard Maestro has become a single place for all macOS automation scripts to live. Scripts are embedded in to macros, macros can be scheduled, and it all syncs via your preferred file syncing solution.

### Write Once, Run Everywhere

Having all my scripts in one place has another side benefit, which is the kismet of “Oh wait, that script I wrote for work would also work really nicely on this project too!” When all of your scripts are in one place, it’s way more likely to have those little epiphanies.

Keyboard Maestro gives you the ability to group macros in to folders. Some folders can be set specifically for a single application, other group folders can be set to only be active on one or more computers. It’s really helpful and allows you to share some scripts and not share others.

Like having all your code in a single repo, another benefit of having all the automation scripts in one place is that you can see very clearly where a macro could be broken apart and used as the base subroutine for several macros which allows you to create a lot less bash/javascript/clicks.

### Chasing UX Automation

It’s one thing to write a script that copies a file to a remote server or API, but writing scripts that automate the UI of your computer can be fraught. APIs, resolution, window commands, all change and will break your script causing you to spend hours trying to figure out the new best way to position a window in the top right corner of your second monitor. Keyboard Maestro functions as an abstraction layer for interacting with your macOS UI.

Yes, you can use AppleScript but the thing is…

### AppleScript Displeases Me

AppleScript is weird. To be more precise, in an effort to make a programming language more like a written language, AppleScript’s APIs are best described as unguessable and I’d like to avoid spending hours on Google to try and find out the best way to take the first element from and array and send it to a specific and less than documented Mac app.

Dropping in to AppleScript from time to time is probably unavoidable, but Keyboard Maestro allows me to limit that by letting their built in functions take care of the AppleScripting and let my logic live in Bash or Javascript blocks.

----

Let’s talk automation examples, shall we?

It’s impossible to write anything about automation without some segment of your readers to immediately scream out “SHOW ME WHAT YOU’VE AUTOMATED!” Everyone knows that automation people need a steady stream of automation suggestions fed to them or they die, which is terrible. Plus, after their dead no one knows how to turn off that thing they setup where the lights flash red when the doorbell rings and it’s super annoying.

### Automated Setups or “Modes”

Having a keyboard shortcut, or in my case a button on my Stream Deck, open a series of windows for you is an extremely common use case, but it’s common because it’s really useful! I have several “modes” on my work and personal Macs. Below you can see an example of my “Start” mode that allows me to clear my windows and reset at the beginnning of the day to review Slack, email, my calendar, my notes, and a web browser.

![KM Automation Start](/public/images/2022/km_automation_start.gif)

(Yes, that is my current Mac wallpaper.)

### Google Cast / Catt

I have three monitors on my desk and a TV mounted on the wall to the left of my desk and I really love the idea of treating that TV as a fourth monitor. I threw a Google Cast device on that TV and installed the command line tool [catt](https://github.com/skorokithakis/catt). "catt" is an acronym for “Cast All The Things" and I think that's a nice succinct description.

```Bash
❯ catt -h
Usage: catt [OPTIONS] COMMAND [ARGS]...

Options:
  -d, --device NAME_OR_IP  Select Chromecast device.
  --version                Show the version and exit.
  -h, --help               Show this message and exit.

Commands:
  add           Add a video to the queue (YouTube only).
  cast          Send a video to a Chromecast for playing.
  cast_site     Cast any website to a Chromecast.
  clear         Clear the queue (YouTube only).
  del_alias     Delete the alias name of the selected device.
  del_default   Delete the default device.
  ffwd          Fastforward a video by TIME duration.
  info          Show complete information about the currently-playing video.
  pause         Pause a video.
  play          Resume a video after it has been paused.
  play_toggle   Toggle between playing and paused state.
  remove        Remove a video from the queue (YouTube only).
  restore       Return Chromecast to saved state.
  rewind        Rewind a video by TIME duration.
  save          Save the current state of the Chromecast for later use.
  scan          Scan the local network and show all Chromecasts and their IPs.
  seek          Seek the video to TIME position.
  set_alias     Set an alias name for the selected device (case-insensitive).
  set_default   Set the selected device as default.
  skip          Skip to end of content.
  status        Show some information about the currently-playing video.
  stop          Stop playing.
  volume        Set the volume to LVL [0-100].
  volumedown    Turn down volume by a DELTA increment.
  volumeup      Turn up volume by a DELTA increment.
  write_config  DEPRECATED: Please use "set_default".
```

I then made a series of macros that are based on bash scripts that make catt commands targeting my Office TV:

- Take the URL on my clip board, and if it’s YouTube or Vimeo send the URL to the TV to play as a video, otherwise send it to the TV to be displayed as a webpage.
- Display the Studio71 system status page on the TV
- Shuffle and play my YouTube Watch Later playlist on the TV.
- Pause, Stop, and Skip
- Display a [cyberpunk “pew pew” map](https://threatmap.checkpoint.com) on my TV.

### Quick File Sharing

There are times when I need to fill my role as “typical engineering manager” and send a screenshot of a broken application with “This doesn’t work.” written on them in pink Comic Sans font. When I do, I take a screenshot and then I need to open a browser or Slack to drag it in a few times throughout the day. I simplified this workflow by making a Keyboard Maestro macro that I have assigned to the right click menu of images via [Service Station](https://servicestation.menu). When you click the action, my macro takes the file, generates a hash, uploads it to the Studio71 asset server (I have a different version of this for my personal files), and then puts the link in my clipboard, which I can immediately paste in to anything.

![KM Automation Assets](/public/images/2022/km_automation_assets.gif)

I have so many more macros and I have a list of others I want to experiment with, but I’d love to hear your automation ideas, successfully implemented or otherwise.

Hit me up: [@thatmikeflynn](https://twitter.com/thatmikeflynn)

