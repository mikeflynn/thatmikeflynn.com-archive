---
layout: post
title: Alexa, Lets Play Jeopardy!
---

[![Alexa Jeopardy Demo](http://i.imgur.com/1lNgQjB.png)](https://www.youtube.com/watch?v=mDIEGUtoSjw)

I've been playing around with my new Amazon Echo and writing up some "Skills" for the Amazon Alexa voice assistant and so far so good! What I've got above is a link to a YouTube video I did demoing a "Jeopardy" skill. It's not fully baked in that you can't play a complete game of Jeopardy, but you can choose a category, get a question, and it will keep score for you. There's no way I can release this officially without the cold hand of Jeopardy Corp. slapping me down, but it was a great first project for Alexa development as it involved multiple voice intents, keeping an active session, etc.

Everything is written in Go using my Go Alexa Skill library that kind of formed by accident as I was working through the initial build and keeps the Jeopardy-specific portion to a 350 line file. You can find the code for everything, the library, the Jeopardy example and even the Amazon API configuration files (voice intents and sample utterances) here: [github.com/mikeflynn/go-alexa](https://github.com/mikeflynn/go-alexa)

Please reach out on Twitter or file a GitHub issue if you have any questions (or a pull request). I'm happy to dive in to more detail as needed.

Going forward I've got a few much larger ideas I can implement with the Alexa Skill API, and I might go back and flesh out Jeopardy a little more. It needs Double Jeopardy.