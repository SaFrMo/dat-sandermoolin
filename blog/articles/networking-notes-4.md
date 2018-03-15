date: 14-03-2018
title: Public-Key Cryptography

I mentioned a couple days ago wanting to learn a bit more about public-key cryptography, so let's get into that here!

I'm going to work this out with the following roadmap:

1. What do I know (or think I know) about public-key cryptography (let's call it PKC in the rest of this post)?
1. Are these thoughts correct? If not, why?
1. What I want to know about PKC?
1. What does my research into this expanded information look like?

Let's jump in!

## What do I (think that I) Know?
I've been working professionally as a programmer for a few years now, so these generalizations are going to be based on what PKC look like in my daily life. They won't be deep or even necessarily correct, but I want to see where I'm starting out.

Here's a bullet-point list:

1. **PKC enables users to exchange encrypted information that can only be decoded by someone with a keyphrase.** PKC has always felt like the ability to password-protect raw data - not necessarily a user, group of files, or even a single file, but a string of arbitrary length.
1. **PKC is practically unbreakable without the keyphrase.** "Practically" because yes, it is technically breakable, but the computing power to do so is impractical in just about any situation.
1. **The keyphrase consists of a "private key" and "public key."** This is where it starts to get hazy for me. I know that you can do whatever you want with a public key - commit it to a repo, put it on your business card, skywrite it above a city. But I've seen those ominous-looking warnings about not _ever_ sharing your private key. This makes it feel like the entire system of PKC is basically a distributed password manager.
1. **You should encrypt data with PKC whenever you can.** It can't hurt to keep your data private, and it should be treated as necessary with passwords, private documents/repos, etc.

That's about it! This feels pretty threadbare when I write it out, so let's fill in the gaps in this knowledge.

## Proving and Debunking
Let's move through each point individually.

### Encrypted Information, Decoded by a Keyphrase
Is a message in PKC encoded using any random keyphrase?

(TODO)

### Practically Unbreakable
Is a message encoded with PKC (practically) unbreakable?

[This StackExchange question](https://security.stackexchange.com/questions/86595/why-cant-you-work-backwards-with-public-key-to-decrypt-a-message) is exactly what I'm looking for! In case that site's ever down, here's the question:

> Why can't you work backwards with public key to decrypt a message?
> As the title suggests, I am curious to know why you can't work backwards using a message, public key and encrypted message to work out how to decrypt the message!
> I don't understand how a message can be encrypted using a key and then how you cannot work backwards to "undo" the encryption?

The full top answer (warning before you read - I'm finding the second answer much more helpful!):

> There are one-way functions in computer science (not mathematically proven, but you will be rich and famous if you prove otherwise). These functions are easy to solve one way but hard to reverse e.g. it is easy for you to compute 569 * 757 * 911 = 392397763 in a minute or two on a piece of paper. On the other if I gave you 392397763 and asked you to find the prime factors, you would have a very hard time. Now if these numbers are really big, even the fastest computer in the world will not be able to reverse the factorization in reasonable time.
> In public-key cryptography these one-way functions are used in clever ways to allow somebody to use the public key to encrypt something, but making it very hard to decrypt the resulting message. You should read the Wiki article RSA cryptosystem.

And excerpts from the second highest-rated:

> Your question is a little like this (with apologies to Tom Stoppard): "why can I stir the jam into my rice pudding, but not stir it out again?"
> Public key cryptography takes a pair of keys. In general, the private key provides the parameters a difficult to reverse algorithm going in one direction (e.g. plain text to cypher text), and the public key provides parameters for a difficult to reverse algorithm going in the other.
> So, the reason you can't work backwards is simply because the algorithm is designed to make this hard.

The short answer is that this generalization looks correct - a message encoded with PKC is practically impossible to decode unless you're the specified recipient.

### Private & Public Keys
What are the functions of the public and private keys in PKC?

[Here](https://stackoverflow.com/questions/19017419/how-to-make-a-simple-public-key-cryptographic-algorithm) is an excellent StackOverflow question for this generalization! A summary of question:

> I want to make a simple public-key(asymmetric) encryption. It doesn't have the be secure, I just want to understand the concepts behind them.

And the full answer (skip to the end for a summary):

> OK, just a simple demo-idea, based on adding/modulo operation.

> Lets say we have a modulo value, for our example 256. This is a public-known, common value.

> Let's say you generate a random secret private key in the interval [1-255], for example, pri=133. Keep secret key in the pocket.

> Generate a public key, pub = 256 - pri = 123. This public key (123) you can share to the world. Imagine, 3rd party does not know, how to compute the private key from a public. So, they know only public key (123).

> Someone from the public wants to send you an encrypted ASCII-byte. He gets his byte, and adds to it the public key by modulo 256 operation:

> `encrypted = (input_value + pub) % modulto;`

> For example, I want to send you the letter "X", ASCII code = 88 in encrypted form. So, I compute:

> `(88 + 123) % 256 = 211;`

> I am sending you the value 211 - encrypted byte.

> You decrypt it by the same scheme with your private key:

> `decrypted = (input_value + pri) % 256 = (211 + 133) % 256 = 88;`

Here's the summary:

(WIP on Codepen)

(TODO: Finish!)
