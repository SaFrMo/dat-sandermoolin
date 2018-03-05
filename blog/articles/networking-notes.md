date: 05-03-2018
title: Networking

I mentioned last week that I wanted to get a better understanding of networking, especially the Dat network, before continuing with more Dat app development. I'm going to get started this week, and I'll be using this post to keep track of notes - sort of live-tweeting my research process. Let's jump in!

## First Steps
Paul Frazee and Tara Vancil are two of the main developers on the Beaker browser, so I'm starting off with a trustworthy resource - [Paul Frazee's blog post](https://pfrazee.github.io/blog/what-is-the-p2p-web) ([p2p version](dat://pfrazee.github.io/blog/what-is-the-p2p-web)) called "What is the P2P Web?" (which seems like a solid place to start).

After reading the article, this section is jumping out to me:

> It [publishing P2P sites] does not require a Blockchain or Proof-of-Work; it’s more similar to BitTorrent in design.

Looks like I'll need to look some more at the tech behind BitTorrent.

## BitTorrent tech
A quick Google search on `bittorrent technical details` is bringing up things like [i2p](https://en.wikipedia.org/wiki/I2P), [bittorrent.org](http://www.bittorrent.org/beps/bep_0003.html), and more, and while these are really interesting, they're not really helpful for beginners like me.

[This article](https://www.howtogeek.com/141257/htg-explains-how-does-bittorrent-work/) on How-To Geek looks promising, but I always worry a bit about whether or not these resources are up-to-date (this article was last updated September 21st, 2016). Still, even if it's not the most current, it probably won't be a bad place to start and learn some generalities.

## Swarms and More Info
Already there's some useful information:

![A diagram of a swarm below a paragraph reading BitTorrent is a peer-to-peer protocol, which means that the computers in a BitTorrent “swarm” (a group of computers downloading and uploading the same torrent) transfer data between each other without the need for a central server.](/blog/images/swarm-definition.png)

I've seen the term "swarm" used a bit in p2p circles but never had a really clear definition of what it meant, so this (pending some more double-checking!) is the working definition I'll use for now.

Here's some more excellent information:

> Traditionally, a computer joins a BitTorrent swarm by loading a .torrent file into a BitTorrent client. The BitTorrent client contacts a “tracker” specified in the .torrent file. The tracker is a special server that keeps track of the connected computers. The tracker shares their IP addresses with other BitTorrent clients in the swarm, allowing them to connect to each other.

This is great info, but I'm specifically interested in the Dat protocol. I've learned some useful terms already, so let's Google search for "swarms in Dat."

Not everything super helpful:

![Google search results for "swarms in dat"](/blog/images/swarms-in-dat.png)

The couple articles quoting a 17th-century essay on beekeeping aren't quite what we're looking for, but the Dat whitepaper [here](https://datproject.org/paper) is a much better bet.

As an aside, I hope this article shows a little about why I didn't just jump into the whitepaper at the start - while it might provide everything we need to know, it's helpful to establish other details like the link between Dat and BitTorrent, a working definition for "swarms," and a newfound knowledge that this is what one article on beekeeping from 1638 looked like:

![](/blog/images/beekeeping.png)

(to be continued!)
