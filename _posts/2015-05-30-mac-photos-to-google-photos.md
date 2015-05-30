---
layout: post
title: Syncing Your Mac Photos Library to Google Photos
---

![image](/public/images/io2015-photos.jpg "Google IO 2015 - Photos")

I'm in the midst of recovering from Google IO but wanted to play with getting my Photos (aka New iPhoto) library from my Mac to [the new Google Photos](https://photos.google.com). Google supplies [a Mac client](https://photos.google.com/apps) for auto-importing but it will only watch a directory for new files and has no explicit import from Photos / iPhoto function. You could drag your folders from Photos to a different folder and have those sync to Google (and then delete them after) but that's a terrible solution.

Here's a better solution:

1. You'll need to open the terminal application (don't be scared).

2. Run the following command:

```ln -s "/Users/`whoami`/Pictures/Photos Library.photoslibrary/Masters/" "/Users/`whoami`/Pictures/Photos Masters"```

3. You'll then see a directory called "Photos Masters" in your Pictures directory.

4. Go to the settings for your Google Photos importer (click on the status bar icon and click "Preferences")

5. Add to the "Desktop folders" list by clicking "Add..." and selecting the new Photos Masters directory.

After that you'll see your Google Photos importer start sucking in all of your photos! It's going to take a while.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ydBjsZnHrwM?rel=0" frameborder="0" allowfullscreen></iframe>