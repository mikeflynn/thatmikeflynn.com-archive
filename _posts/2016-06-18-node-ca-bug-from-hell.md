---
layout: post
title: The Nodejs CA Bug From Hell...and Mozilla
tags:
- Technology
- Studio71
---

Can I tell you about this doozy of a bug we just resolved at Studio71? When I say doozy, I mean a total mess and the path led us down to some questionable npm package decisions and eventually to Mozilla...and thankfully nothing overly stupid that we did!

Lets back up though...

Studio71's stack is pretty simple by design. We have an API and offline data system that is written in Clojure which powers the various web applications, the largest of which is built with React.JS on top of a Nodejs middleware.

Make sense? Ok, lets get in to the bug.

Late the other night we got reports of something not working on one of our apps. It seemed like the app just couldn't connect to a particular outside service. We'll check on it in the morning. By morning we had even more reports of various, seemingly unrelated, services breaking. We dove in and found a lot of issues in the logs about not being able to verify the local CA cert for SSL connections. For those who aren't aware, this isn't an SSL to our servers, but when our app is making SSL connections to other services. The log message was saying we could verify the third party connection because something was wrong with our local Certificate Authority file. Ok...lets update the system's CA file. No change. I can curl and wget from these web services fine, but the node application is unable to. Why is that?!

It doesn't help that I'm less than familiar with our Node application. We're in the middle of some "corporate restructuring" which means I'm down 2/3 of my JS developers at the moment. Nothing else is moving while I frantically read up on CA certs, Node JS in general, and better familiarize myself with the inner workings of how we request outside services in Node. I discover we use the `ssl-root-cas` module...but everything looks fine and it's set to fetch and use the latest CA during the build process. I take a break. I get back on it looking for other ways things can break. Maybe I need to update the calls and point the CA location to the system's CA file...but the stage server works fine, so why should I have to do that here? I certainly don't want a bunch of production file paths all over the code every time we make an SSL request. Lets take another break. Back at it, looking through the build logs when I see...

`* Mozilla's root CA store`
`* generated from https://mxr.mozilla.org/nss/source/lib/ckfw/builtins/certdata.txt?raw=1`

...and then, thankfully, I visited that URL. Probably out of something to do rather than anything else as it was late and I had run out of viable ideas hours ago...but I'm oh so happy I did because I saw...

![Mozilla Maintenance](/public/images/mozilla_maintenance.png)

Well that doesn't look like a CA cert...ah, dammit.

![Those assholes!](/public/images/mozilla_maintenance_2.png)

Mozilla put that page on maintenance and the node module downloaded an HTML file rather than a CA file. Grrrrrrrrrrrrrr! Ok, ok, the need for a maintenance page can certainly come up. Why did that module download the damn HTML file?! ...well, that's Mozilla's fault too. If you click that link and watch your Network tab, you'll see a 302 temporary redirect to the maintenance page (totally fine) and then a 200 OK response from the maintenance page! A 200?! Come on! They return a 200 code and the node module downloads the file, stores it, and then tries to use it as a CA for all request. That's not gonna work.

I've created and submitted a pull request on GitHub that updates the module to check the response content type in addition to the status code: [github.com/coolaj86/node-ssl-root-cas/pull/23](https://github.com/coolaj86/node-ssl-root-cas/pull/23) I'll never get that day of work back, but in the end these in the weeds moments are kinda fun...right?