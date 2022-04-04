---
author: axonasif, pawlean
date: Monday, 11 April 2022 11:00:00 UTC
excerpt: Learn how you can turn your Android phone into a tiny but powerful working machine no matter where you are by utilizing Gitpod. Batteries included!
slug: software-development-from-an-android-with-gitpod
teaserImage: teaser.png
title: Software development from an Android with Gitpod
---

<script context="module">
  export const prerender = true;
</script>

## Outline/ideas

- How you discovered Gitpod
- Your set-up - Android phone with TV
- How you use Gitpod
  - Projects you’ve built on Gitpod as examples
  - Or daily contributions to different open source projects
- How you got into the community
  - Why did you want to start contributing to the community?

—-----------------------------------------------

Hi everyone! My name is Asif, also known as AXON in the Gitpod Community. Today I’ll be sharing my story of, how Gitpod quite literally changed my life and enabled me to continue my journey in learning software development. I’m also pleased to have eventually also scored an internship at Gitpod as a Community Engineer! This is my story.

I got into software development while wandering around the [Android-x86](https://www.android-x86.org/) space, just a handful of years back without even realizing it! As I was learning, however, my laptop, unfortunately, broke due to all the stress I put into such an education laptop 😝. The only other device that I had on me was my Android phone. Luckily this was around the same time I discovered Gitpod! You can probably see where the story is going…

Yes, I started coding solely on my Android phone! I used [Techno Spark 7 Pro](https://www.gsmarena.com/tecno_spark_7_pro-10884.php) with a Bluetooth Mouse & Keyboard combo, which I connected with the TV sometimes. I was amazed by how it worked almost seamlessly. I use 4G mobile internet since that’s the most reliable thing at my place. Of course, there were some issues, for instance, latency. I’m based in Bangledesh by the way and there isn’t an Asian cluster in Gitpod yet but there [will be](https://github.com/gitpod-io/gitpod/issues/5534) and might be already there if you’re reading this in the future time. Despite this, it still worked for my needs and I continued to learn from just Gitpod alone!

In this article, I will be demonstrating how software development can be done from any Android phone these days. In our community Discord server, we have the [#mobile-and-tablets](https://discord.com/channels/816244985187008514/890901203624534026) channel where fellow mobile-dev enthusiasts hang out! If you’re curious about how to get started, follow along!

# Getting started with Gitpod from Android

## Browser

All you need is a browser, in this case I have to prefer the [Kiwi](https://kiwibrowser.com/) browser on Android. Now you might be wondering “Why Kiwi?”, well, this particular browser on Android brings you almost a full blown desktop-like chromium experience but on mobile! That means, you get chrome-devtools, extensions support, keyboard shortcuts and many more (yes, you heard that right!).

> **Important notes about using Gitpod from Kiwi:**
>
> - There is a chromium bug[1](https://bugs.chromium.org/p/chromium/issues/detail?id=1202651) with mouse cursor hover. If you face this bug too, you will have to toggle off your installed accessibility services while you use Kiwi.
> - I recommend toggling off a settings on Kiwi from it's `Settings>Accessibility>Prefer native applications`. Why? I found it to be rather annoying and buggy sometimes with an infinite loop.
> - This is not an Kiwi issue but Android itself, what I want to say is, some shortcuts like `Windows/Meta + Key`, `Control + Space` and etc will not work on VSCODE because they're captured by Android system itself for it's internal shortcuts and you can not disable or remap them in the easy way unfortunately. So you will have to remap some of your VSCODE shortcuts from it's settings.

## Hardware keyboard and mouse

The next thing you need is a way to control your phone like you would do with a PC. There are two easy things you can do:

- You can get a Bluetooth Keyboard and Mouse combo (Most convenient)
- Or you can get an OTG hub for your Android device and use wired Keyboard and Mouse (Most responsive)

I've gone through both routes and ended up sticking with the Bluetooth Keyboard&Mouse after using the wired solution for relatively long, _just because it's more convenient_ 🙃

## Display

This is the tricky one, since phone displays are small, so you will have to kind of get used to its limited screen real estate while Coding on Gitpod's VSCODE. That being said, there's no easy solution for this problem if you got some entry-level or mid-range Android phone like me. To be fair, nowadays even entry-level Android devices are powerful enough to serve you well unless you're an hardcore mobile gamer. But since such cheap phones won't likely come with USB-C 3.0, so you won't be able to get direct VIDEO output to an external monitor/TV. There are some third-party products that untilizes ADB and a mini-CPU on the HDMI end to stream your Android display over a cable, but it's not something I can reliably recommend. However there are some software based things that you can leverage if you don't want to use an external big display or don't have an option to. If you're interested:

- Increase the **Smallest Weight** on your phone's **Developer options**
  > If you don't know what **Developer options** is, search this on Google: `<your phone brand or model here> Developer options` and hopefully you will get the answer. What will it do? It will make things take less space on your tiny screen when the value is increased. **\*Please keep in mind that it can brick some devices when increased too much, so don't go to far.**
- Press `F11` key on a Gitpod workspace to make VSCODE full screen on Kiwi browser.

But hey, if you got a **tablet** or a high-end Android phone with USB-C 3.0, then you probably don't need to care about this particular issue 😆

# Tips & tricks

- Try pressing `Windows/Meta key + /` on Kiwi browser to see all browser and Android-system shortcuts.
  > My favorites are `Alt + Tab` for quick application switching and `Ctrl + T` for creating a new Kiwi tab quickly.
- You can use an app called **[Rotation Control](https://play.google.com/store/apps/details?id=org.crape.rotationcontrol)** to force landscape/auto-rotate mode for every app on Android (including your Home launcher!)

TODOS for :-

# All you need is a browser (well mostly)

# A keyboard and a mouse, if you’re serious about it (Bluetooth or wired via OTG hub)

# A way to stream your tiny phone’s display to a bigger one(optional), could be the TV you have at home.

# Running a complete Linux desktop environment inside your phone natively where you can even do `Open in VSCODE` to run VS CODE locally and all the other crazy stuff!

# Key parts of my inspiration around Gitpod and all.

&lt;Add a conclusion about the Community server and something about: if you’re inspired by this, check out Geoff’s blog post too on software dev on an iPad>

&lt;also end on something like “remote dev is the future and opens up so many possibilities for everyone around the world, regardless of set-up”>
