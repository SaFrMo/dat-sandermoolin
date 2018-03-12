date: 12-03-2018
title: Networking, part 3

I've been focusing a lot on p2p networking lately, but I want to take some time and cover some of the gaps in my CS knowledge - gaps that are turning out to be pretty fundamental to p2p networking. Specifically, I mentioned working on content hashing and public key cryptography, so let's start out with public-key cryptography!

## What The Hell Is Public-Key Cryptography
I'm a bit frustrated trying to find a good answer to this question. Almost all of the answers I've seen while researching are pretty convoluted - it's coming across as a difficult concept to understand, so I feel like I'm either (a) missing some even more basic knowledge, or (b) not finding an explanation that resonates with me.

### Learning New Things
Studying and working in programming has made me think that problems like this, where a concept appears too complicated to understand, are just an issue of breaking that concept down into smaller parts until those parts are solvable. That's not a revolutionary thought, but it's unusually concrete in computer science.

Let's say I don't understand this line of code:

`(function(){ console.log('example!') })()`

I can parse it out into things that I do know:

```
(function(){ console.log('example!') })()
 ^ a function is being declared!       ^ a function is being called!
   but why is it in parentheses?
```

Then search out the things I don't know:

* Google `js why declare a function in parentheses`

* Find [Stack Overflow answer](https://stackoverflow.com/questions/440739/what-do-parentheses-surrounding-an-object-function-class-declaration-mean)

* Understand the name:
> It is a self-executing anonymous function.

* Understand the reason:
> It is a useful construct when trying to hide variables from the parent namespace. All the code within the function is contained in the private scope of the function, meaning it can't be accessed at all from outside the function, making it truly private.

Then test it and make sure I understand:

```
// I think I just learned how to create a variable called x, but make it private to my anonymous function - let's see!
(function(){
    const x = 'example!'
    console.log(x) // -> 'example!'
})()

console.log(x) // -> error: x is not defined

// perfect - x is private to the anonymous function!
```

I could've just Googled it, gotten a quick answer, and carried on, but parsing out what I do know and then synthesizing everything together at the end lets me review what I already know and incorporate new information. It's ended up being one of the more effective ways for me personally to learn something, especially when it's in a field as cut-and-dry as mathematics, or computer-science.

Continuing tomorrow with the best non-programmer description of public-key cryptography I've seen, from [Panayoties Vryonis](https://blog.vrypan.net/2013/08/28/public-key-cryptography-for-non-geeks/)!
