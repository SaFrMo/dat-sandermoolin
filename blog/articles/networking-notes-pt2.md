date: 07-03-2018
title: Networking, part 2

Since the previous post's research into networking, [Scott Nelson](http://scottnelson.co/) and I were talking some more about p2p discovery in general and Dat in particular. Scott mentioned that

> I was curious about Dat peer discovery and learned it uses the same technology as BitTorrent "magnet links".  These magnet links are similar to Dat hashes and mostly eliminate the need for centralized trackers.  They, like Dat hashes, are keys in a distributed hash table where the values are the IPs/ports of nodes containing the content (https://en.wikipedia.org/wiki/Mainline_DHT).

This is a huge leap forward in understanding more about how Dat discovery works and how the technology is possible! The first few thoughts that jumped to my mind immediately afterwards were:

1. The distributed hash table seems like the equivalent of a shared DNS server - is that a fair comparison?
1. How can the integrity of the hash table be verified?
1. Does this mean that two computers connected to nothing but each other can create their own hash table, and therefore their own p2p network, that can then be added onto the main Dat DHT if they're ever connected to another Dat-connected device? If so, ow do they know how to create, share, append to, and verify that has table?

Let's dig in on these questions!

## The Hash Table
Now that we've got a new target to look for - the "distributed hash table," or maybe just "hash table" - let's head back to to the [paper](https://datproject.org/paper) to learn more. (That link is to the current version of the paper - [here](/blog/assets/dat-paper-05-march-2018.pdf) is a copy of the one I'm using while writing this post.)

Searching "distributed hash table" in the PDF brings up a section called "Kademlia Mainline Distributed Hash Table." This is familiar from the article Scott linked to earlier - the first sentence of that article is:

> Mainline DHT is the name given to the Kademlia-based Distributed Hash Table (DHT) used by BitTorrent clients to find peers via the BitTorrent protocol.

"Kademlia" seems like something we should be paying attention to!

## A Brief History of P2P
This section of the Wikipedia article on Kademlia is fascinating, so I'm just going to lift it entirely from the page:

> The first generation peer-to-peer file sharing networks, such as Napster, relied on a central database to co-ordinate look ups on the network. Second generation peer-to-peer networks, such as Gnutella, used flooding to locate files, searching every node on the network. Third generation peer-to-peer networks use Distributed hash tables to look up files in the network. Distributed hash tables store resource locations throughout the network.

It sounds like the Kademlia algorithm is either a member or the entirety of this third generation of p2p networks, so we're definitely on the right track!

It seems like the answer to that first question, "The distributed hash table seems like the equivalent of a shared DNS server - is that a fair comparison?", is a simple "yes" - if you have the hash of a resource, you'll be able to look up the IP/port(s) of a location or locations where that resource is provided, which is the same function as DNS servers.

Why, then, can't we use human-readable names as keys to the IP/port values - why can't we just completely match the behavior of a DNS in a distributed system?

### Dat DNS
It looks like the answer is, "because Dat isn't IPFS!"

[IPFS](https://ipfs.io), or "Interplanetary File System", is another decentralized/p2p distribution protocol. The IPFS [overview](https://github.com/ipfs/ipfs#quick-summary) mentions how IPFS comes with "IPNS," a name system that allows for human-readable URLs like a DNS uses. Dat doesn't seem to have this capability (yet?), meaning the Dat links users exchange are actually DHT keys (or references to those keys? I'm not completely sure yet!).

## Stepping Back
I'm getting in a little over my head here - I want to understand the following systems a bit more before continuing with Dat in particular:

1. Content hashing
1. Public key cryptography

These are much more basic computer science topics, so they might be better material for creating a game to help understand. (Developing games helps me personally understand topics much better anyway - the amount of research that goes into converting an existing system to a gamified version of that system really makes you understand a technical topic inside and out.)

More in the coming week!
