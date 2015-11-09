---
layout: post
title: Life as a Gopher
tags:
- Technology
- Golang
---

![image](/public/images/google-gopher.jpg "The Go Gopher")

It seems like discussions about [Go (or Golang)](https://golang.org/), Google's new-ish, C-like, programming language, are everywhere these days. I've been using Go in my free time to work on little projects for the last few months and thought it was time to jot down a few thoughts on the language.

## Background

I find in articles like this even a short amount of background helps color the views. For example I recently read an article where someone was saying how he showed his team of Java developers Clojure and they quickly said they didn't like it. Well...did a bunch of OOP devs not know how to read lisp and had neither the time or inclination to learn? That might be your problem. Here's my background: I run a dev team that is all Clojure on the backend and all Javascript (Node.js and ReactJS) on the front (and middleware) side. I used to code in PHP all the live-long day when I worked at Answers.com, and I've experimented with the usual suspects like Java (I made an Android app), Ruby, ObjectiveC...and now Go!

## Why Go?

When I tell people why I'm so excited about Go these days I start with a seemingly odd comment: I love Clojure. I was the Sr. Architect and led the team that brought Clojure to Answers.com and when I left and came to Collective Digital Studio I brought Clojure with me and all our brand new backend technology was written in Clojure. It's a language with a strong philosophy, it has great concurrency sugar, and it's fast...for long-running services. Clojure isn't fast for small scripts, not because of Clojure, but because it runs on the JVM (don't forget to install Java!) and you have to start that up and load in all the Clojure libraries and _then_ your code runs. That's no good for a lot of the scripts I was having to write as a CTO who does most of his coding in short bursts in and effort to block random tasks from hitting his team. I'm writing CLI scripts, or small web servers or apps that need to be run other places that may or may not already have Java running. This issue is when I started looking and quickly found Go. In fact, Go was actually the first place I looked because it shares a lot with Clojure. Go is also a functional language with a very strong opinions but look no further than Clojure's core.async and it's "go blocks" for another key similarity. Where it differs from Clojure is the fact that it compiles to a native executable making it great for my #1 use case (it also differs in that it's far far far more verbose but we'll get to that later).

It's similarity to Clojure is why I started learning about Go, but the breath of amazing projects written in Go kept me there because...well...look at all this cool stuff! [IPFS](http://ipfs.io/), [Pachyderm](http://www.pachyderm.io/), [Cayley](https://github.com/google/cayley), and [a lot more](https://github.com/golang/go/wiki/Projects)

## What's Great?

I've already mentioned a lot of the high-level aspects of Go that I like: functional, fast, and easy concurrency, but there's a bunch of small things that I think are really great too that I should mention. Being someone who  writes both code and words frequently, I'm a huge fan of bullet points! This feels like a spot for that:

* `go fmt` - I love that there is no need to argue about where your brackets go, or when or when not to use spaces, etc. I have a Sublime Text plugin that runs this for me on save and I put it in all of my Makefiles.
* `go get` - It has a lot of issues for libraries (see below) but when you just want to pull down a quick Go app and run it nothing is faster than `go get ...`
* `go-binddata` - A Go library that will generate code to merge static files in to your Go binary. I used this on [my Quackerjack project](https://github.com/mikeflynn/quackerjack) to fold in the basic web ui file in to the binary for easy distribution and it worked wonderfully. -- [github.com/jteeuwen/go-bindata](https://github.com/jteeuwen/go-bindata)
* Go's project format. - This one took me longer to figure out than I would have liked, but once I found out that all .go files in an project directory are simply just concatenated together and you don't have to worry about manually including them, I found it to be pretty great. If you want to group a few files together, then make a sub-project and use `go get`. Easy.
* `flag` - A great [CLI param processing library](https://golang.org/pkg/flag/).
* "Hacking with Andrew and Brad" - Every language should do [videos like these](https://www.youtube.com/watch?v=yG-UaBJXZ80).
* `defer` - Being able to defer a command to when a function ends is such a nice feature. Lots of uses for it, but in a simple example just being able to open a file and then immediately tell the function to close it whenever it exists is pretty great.
* A Bunch of Stuff I Haven't Explored Yet - `go generate`, `go doc`, ...? What did I miss?! Tell me!

## What's Not Great?

The best way to find out what's not great in Go is to swing by Hacker News at any given day. Chances are there will be a discussion or two about what's wrong with Go, or the Go team, or the Go tooling, or [the Gopher](http://www.evanmiller.org/four-days-of-go.html), ...

That's not to say these arguments are wrong. I agree with a lot of them:

1. Holy crap it's verbose! So many if blocks and lots of repetitive code. Maybe I'm still a bit of a newbie, and maybe it's worse coming from Clojure, but it feels like I'm typing A LOT to get something to work.
2. It's Google's language, and therefore is really focused on the Google use cases and process.
3. ...and yet it's not mentioned on this year Google IO schedule?!
4. I wish there was a repl. There are some attempts at them, but the best option is the [Go Playground](https://play.golang.org/) which is less than ideal but I still use it all the time.
5. `go get` is great to pull quick apps down, but ignoring versions is a big big problem. (Check out [getgb.io](http://getgb.io/) for another take on `go get`)
6. [Comments should just be comments](https://news.ycombinator.com/item?id=9522973).

Also...

No one's given me a [plushie Gopher](https://blog.golang.org/gopher) yet...or hell, even a Go sticker! I have Clojure stickers coming out of my ears (parenthesis stickers too) but no Go sticker.

## Summary

I like Go. There's somethings I don't like about Go, but even on those issues I do like the amount of discussion they are getting so I'm hopeful. I've also made some pretty cool stuff with Go in a very short amount of time and I'm noticing the same from a lot of other developers and that says a lot. If I started a brand new tech stack at a new company today would I use Go as the base rather than Clojure? No, probably not...but I a few Go services and CLI scripts are a good thing and I know that no matter where I work or what I'm working on in the future there will be plenty of apps that will be powered by Go that that makes knowing Go a power asset to have. In short, it's a fun language that makes sense to know business wise and that's about as good as a language gets.
