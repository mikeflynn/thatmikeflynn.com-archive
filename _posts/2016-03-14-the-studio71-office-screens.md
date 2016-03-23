---
layout: post
title: The Studio71 Office Screens
image: s71_office_chrome_app_001.jpg
tags:
- Technology
- Studio71
---

_Update: I forgot to mention it in the post, but if there is any interest I could release a generic version to the store and/or the source code to the app. Let me know: [@thatmikeflynn](http://twitter.com/thatmikeflynn)_

I love screens. You love screens. Developers love screens! We have at least two or three on our desk and when that's not enough we like to hang them all over the place so no matter where we look there's a screen in there somewhere. _Is the graph pointing up?_ _Is that counter a high number?_ _How many tickets has that new guy done?_ All important questions resolved by easy access to a well designed screen of information.

We love screens. We want screens. How do we get the screens? There are plenty of apps you can buy to create beautiful dashboards for you, and after researching the options, I want to tell you about the solution I came up with at Studio71.

### Context

We are a Multi-Channel Video Network, so we have YouTube, Vine, Facebook, Instagram, and [INSERT NEW SOCIAL VIDEO NETWORK] creators all over the globe. Our tech team aggregates those stats, moves the videos around, and creates applications for our creators, employees, and brands to log in and see the information we've collected on our network. In short, we already have lots of things to display on screens (Kanban boards, Google Analytics, internal metrics, etc...) we just needed the way to do it.

### Requirements

* Should rotate through $n URLs with an adjustable wait time.
* Easy to run on different machine types, specifically the Chromeboxes we have in the office for our conference rooms.
* Quick and easy setup.
* Remote updating of the application.
* Remote updating of the list of URLs.
* Allow for different displays to run different sets of URLs.

### Solution

I created a Chrome App that met all of the above needs after a couple of hours of tinkering and off and on over the span of two days applying fixes. A Chrome app was perfect to get up and running quickly as it was uploaded to an unlisted Chrome Web Store page, and will run on nearly anything that runs Chrome.

![Studio71 Office Chrome App](/public/images/s71_office_chrome_app_000.jpg)

The app has two layouts: The primary URL rotation screen and a very minimal options panel. The options panel allows the local user to give the app name. The name matches the remote configuration (more on that later). The only other option is to set the wait time between URL rotation, which defaults to 30 seconds.

The application logic is very simple: On load, the application checks the options to get the computer name and rotation delay. It pings a server to get a JSON file that dictates the URLs to rotate for each machine name, downloads the file and looks for it's name (if the name isn't in the list, there is a default configuration it will load). The app then creates web views for each of the URLs and sets and interval to rotate through the list, hiding all the views and displaying the current URL's web view. There's some additional logic for when to optionally reload each URL, and to handle a handful of events like pausing the rotation, advancing to the next URL, or reloading the page.

Security isn't much of a concern as any URL authentication is handled by the local user. I could certainly add some option authorization logic to the URLs but that would have be created for each URL and would mean a massive security requirement on the JSON file location, so it's not worth the trouble.

### Conclusion

I launched the solution on [Chromeboxes](http://www.amazon.com/dp/B00IT1WJZQ) plugged in to two wall-mounted monitors and another Chromebox plugged in to our TV in the waiting area. The wall-mounted boxes are set to a "dev" profile that rotate through Google Analytics dashboards, Jira, our internal status page and a playlist of Studio71's currently most popular YouTube videos. The big TV has a "lobby" profile that just includes the YouTube playlist.

![Studio71 Office Dev Screen](/public/images/s71_office_chrome_app_001.jpg)

Everything has worked perfectly! I've found that fullscreen YouTube playlists tend to just die after about 24 hours of playtime so having those URLs set to auto-reload at 24 hours works perfectly. I've also been able to add new dashboards to rotate through for the "dev" screens by easily updating the JSON file...and I've even added a few [random gifs](https://media.giphy.com/media/bO3TakxSzEguc/giphy.gif) to rotate occasionally.

This solution could also easily be rolled out to out other offices and still all be controlled by a central configuration. I'd long since blocked it from my memory, but I actually did some contract work with a company that created a really really overly-complicated system to do this exact thing in banks but with Flash animations...and I think this solution works better after a few hours banging around the Google Chrome App documentation!

![Studio71 Office Dev Screen](/public/images/s71_office_chrome_app_002.gif)
