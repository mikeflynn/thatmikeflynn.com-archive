---
layout: post
title: Sentence Saver for Beats Music
tags:
- Hacks
---

![image](/public/images/beats-music.jpg "Beats Music")

Ever since I made my little Clojure wrapper for the Beats Music API, I was on the lookout for a companion project where I actually use the library the make an app. I know, a totally 100% novel idea.

I just deployed a little web app I'm calling the <a href="http://sentencesaver.theangrytruth.com/">Sentence Saver for Beats Music</a>, and it solves the problem of being able to enjoy the Beats Music "The Sentence" feature (basically their radio feature) while offline by giving you the ability to request a sentence and then having those tracks made in to a playlist. That playlist can then be optionally saved to our local device and then go ahead and board that plane...or enter that military missile silo...or go to your grandma's farm...or other places that don't have or allow internet access...also, probably Denny's.

<em>Update: I also threw in a little feature that I'm still amazed <del>Beats doesn't have in their app</del> (Update x2: They do have that feature, but they <a href="https://support.beatsmusic.com/hc/en-us/articles/200579685-How-do-I-delete-a-playlist-">stashed it under the playlist filter menu.</a>)...the ability to delete playlists! Flip to the Playlists section of the app to see all of your playlists and delete any of them you want.</em>

The app is a self-contained <a href="http://clojure.org/">Clojure</a> app with the API and HTML served from the same jar file. Not something I usually do, but I wanted to try for this project. The UI is done with <a href="http://getbootstrap.com/">Bootstrap</a>, the UX with <a href="http://facebook.github.io/react/">ReactJS</a>, <a href="http://http-kit.org/">http-kit</a> and <a href="https://github.com/weavejester/compojure">compojure</a> for the web server, and of course I'm using <a href="https://github.com/mikeflynn/beats-clj">beats-clj</a> for the API interface. It's all pretty simple and it's <a href="https://github.com/mikeflynn/beats-sentence-to-playlist">open sourced on GitHub</a>. The app is also 100% mobile ready and functions wonderfully as a standalone web app on iOS (using the save to home screen feature).

Please shoot any bugs or requests to <a href="http://twitter.com/thatmikeflynn">@thatmikeflynn</a>.

Enjoy!