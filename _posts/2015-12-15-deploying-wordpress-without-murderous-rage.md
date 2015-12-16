---
layout: post
title: How to Deploy Wordpress without Murderous Rage
tags:
- Tech
---

![Wordpress Logo](/public/images/wordpress-logo.png)

Wordpress. Ugh. Wordpress. The Windows 98 of the internet! The thing that everyone thinks they're an expert on because they used to run a blog a few years back on it (now they use Medium) and they had this great FTP client they used...they can't remember the name...but it was great...uploaded a ton of plugins...oh, do you know about the W3 Total Cache? It's super important. Blah blah blah.

I dislike Wordpress. I understand why it's popular. I understand when it's a good tool to use. I even understand why it's a great tool to use for people with a single webserver from Dreamhost that want to share pictures of their kids and this amazing lunch place by their office...but I still dislike it. My dislike comes from having to run multiple Wordpress servers for lots of little disconnected brands. Some of the sites get traffic, others don't, but we run them all on a small cluster of web server, with each site (ideally) running on at least two servers. We don't want to run the security risk of FTP, and even if we did, we can't allow users writing directly to the servers because of the load balancing. Wordpress is terrible at this...or should I say, we as a tech team, were terrible at finding a way to make Wordpress work like this.

The primary issues we had with Wordpress were, in no particular order:

1. Development

We used to keep a repo for each of these Wordpress sites. In that repo was a full copy of Wordpress with their theme (sometimes custom, sometime off the Theme Forest shelf), and a copy of all the plugins they needed. In reality this isn't really development. Maybe we were tweaking a theme, but the vast majority of what was happening in the repo was pushing in new plugin code or updating the theme or Wordpress itself by `cp`ing in tons of files.

2. Deployment

Deployment consisted of cloning the repo to the deploy server and syncing out the files. It was assumed that the developer making the change must have ran the Wordpress site locally and activated any plugins that write files to the system first and committed those new files to the repo.

3. Preventing Writes to the Server

Every time we started a new site we would send out an email to the team that reminded everyone to not install plugins or use the Wordpress code editor to change anything as that would break the site...and then a few weeks later when the team's "Wordpress Ninja" (aka the intern) tried to make a "super small tweak" for them "super quick" and it broke the site, I would send the email again. Maybe this time I would put certain lines in a bold type face.

...but that was in the past. Now we don't have these problems! Lets discuss.

Most of our research pointed to using Docker, which sounds good and we might get there, but for now that felt like more of an infrastructure change than we had the time and inclination to do. Instead we settled on a classic solution: `make` Setting up a simple Makefile for Wordpress allowed us to store only the essential pieces of each site: a few lines of configuration, the theme, and a few specific plugins. Everything else is blown away, downloaded, and copied in to place on deployment. We have several sites using this, so we have a .mk file that holds the common functionality and is included in to each of the sites' local Makefiles. Here's an example of a site Makefile and the global `wordpress.mk` file

<script src="https://gist.github.com/mikeflynn/176c35430a141641ef2c.js"></script>

You can see in the first site-level Makefile, we're just defining the specifics for this site. We configure the site with temp (or local development) DB configuration via `wp-cli` (which is installed as a part of the included global Makefile), install the theme that lives in the site's directory as a zip file and then a series of plugins. In this case, we are installing a few plugins we use to have the media files live on S3.

In the global `wordpress.mk` file you can see all the real work. Blowing away the `wordpress` directory, downloading a fresh copy of the latest Wordpress, looking for a `content.xml` file to auto-import and installing `wp-cli`. There are two quirks to this setup that are worth calling attention to: 1. We don't use `wp-cli` to add the plugin files. The reason is that it requires a DB connection to activate the plugin and we don't want this to expect a DB connection as we're just building the filesystem to sync out. Instead we simply copy the plugins and themes in to place and worry about activating them when the site is in place in production. 2. You'll notice that the `make deploy` command applies a patch to the wp-config.php file. `wp-cli` has a great function where you can throw arbitrary PHP in to the wp-config.php, which we were using but we also need to modify the structure of the DB configuration (we have the site look for environmental variables for the DB connection data) so we have to do this patch workaround to accomplish both.

As for our #3 problem, we found the solution after going deeper in the Google search results than I think I've ever had to. It turns out that Wordpress supports the following configuration flags:

```php
define('DISALLOW_FILE_EDIT',true);
define('DISALLOW_FILE_MODS',true);
```

Setting those two flags to true removes the plugin installation and file editing UI from the admin. We did see some issues when activating a theme or a new site installation when those config options on, but we were able to get the site setup and then reapply the config options.

We converted our Wordpress sites repos to the Makefile structure a few weeks ago and the change has been significant. Simple tasks like adding a new plugin is now actually simple as all it involves is adding a couple of lines to the `Makefile`. Upgrading Wordpress is even easier as it simply requires a deployment.

Wordpress(.org) still just isn't designed to work well enough in a multi-server environment but with the Makefile and a few tweaks we've been able to fix a huge headache...or at least downgrade it to a small headache.
