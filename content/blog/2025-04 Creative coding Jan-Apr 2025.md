+++
date = '2025-06-04'
draft = false
title = 'Creative coding 2025 Jan-Apr'
tags = ['creativecoding']
+++


## what led me here?
I migrated to mastodon a little while back, and fully weaned myself off the old place last year some time.
I found myself following lots of people I knew from the old place, and then seeing them reposting further interesting people.
I seem to have unconsciously developed a rule of if I see a post by someone I don't follow, I have a gander at a few of their other recent posts and follow them if their posts are interesting to me.
So presumably after some time of doing that i have run into some strudel/algorave content posted by one of the awesome champions of the medium. I'll track it back some time.

## what is keeping me here?
the community of live coders have been INCREDIBLY welcoming, friendly, accepting of anyone at any knowledge level.

Multiple times I've been encouraged to try things I wasn't yet comfortable with, and given nudges/guidance in the right direction, which has really helped to accelerate my learning, and kept me super keen to keep participating.

the events being organised by truly awesome folks who are organising events which they themselves want to attend and perform at
## what've i been doing?
### self guided practice
playing around on nudel and separately on strudel and hydra
reading the ref docs and sounds/synths/etc lists on strudel
reading the short and sweet api ref on hydra's site
trial and error
picking apart things I've seen performed online or in person and trying to understand how the code and its parts work

#### functions/commands i learnt and like, maybe by date:
//possibly a separate post tbh
#### hydra
- modulateblah (2025-03)
	- honestly just throwing a few modulates (scale, rotate, scroll x / y ) fed by osc/voronoi/noise/other outputs can yield  some visual beauty
- fft (2025-04)
	- still trying to figure the full power of these but i love what others are achieving
	- syntax a little weird
- blend (2025-04)
	- pablo showed me that if you feed the whole thing back into itself with a high (e.g 0.99) figure, you get some very cool effects
		- `.blend(o0,0.99)`
#### strudel
- fm and fmh (2025-03)
	- right after march algorhythms, specifically due to the code block below, i read up on fm, fmh, and frequency modulation in general. I had been aware that it existed but lacked any kind of understanding of what it does and how it works. Not saying I get it now, but maybe I know a bit more than I did.
	- I'm using these a hecking lot now, they turn triangle/sine waves delicious
		- supersaw blows up if you use them on it though
- s("bd(5,16)") (2025-04)
	- still trying to figure out how or why this works, but it creates such a satisfying drum pattern. is it being quantized? Dunno. does it bop? heck ya
- off() and press() (2025-04-14)
	- off is an offset command, in seconds, to allow you to add more notes and things to a single block of stuff, with a time offset
	- press shifts everything by a small offset so that it arrives half way through when it's supposed to.
### going to and watching events
#### algorave dec-2024
Anyway, I bought a ticket for the algorave in December at Corsica studios because well dang its £7 how could I not?
Then I got grossly sick with some neverending flu or worse and avoided going and polluting the air. Gutted. Moreso on seeing the awesome videos afterwards.

#### winter solstice stream 2024 (online)
The solstice stream provided me with some huge inspiration, the variety in what the artists were putting out there was amazing. Shout out to switch angel who's album I immediately went and bought on bandcamp.
So when more events began to pop up with a regular cadence I decided to commit to going.
#### algorhythms feb-2025
The first I went to was on 2025-02-05, it was an Algorhythms event hosted £free at Carpet shop in Peckham.

I showed up super early to chat to folks and see how things ran, and then it kicked off. I shan't do a full writeup because I don't have that good of a memory but towards the end during the pastagang set, I was watching along on my phone (not participating) and blown away by how a concept so chaotic could possibly sound so good.
#### algorhythms mar-2025
Last time was brilliant, So I went again.
It was brilliant again. The artists and organisers did an incredible job.
There was a couple who performed together using i think LSDJ on some gameboys. There was also a custom gb studio(?) game being projected
Right towards the end there was a bit which I transcribed from one of the post event videos  which has stuck in my head ever since. I can't explain why this sounds so good/fun/cheeky to me, but it's brilliant. thanks pastagang.

```js
$: note("<g3 g3 c3 bb3>")
.pdecay(.5).penv(5)
.fm(1) //1
.fmh(3) //3
.ply(8)
.lpf(2000)
.clip(.65)
```

I might've been handed a mic and said some animal names into it moments before we got asked to finish by the venue staff. Probably unrelated.

#### algorave apr-25
TWO rooms of algorave? no way.
Wandered in super early and had a looksie around the venue, headed to room two and found Daniel and some other organisers chatting, maybe a little surprised to see me and a few others wander in to say hello.
We then got an unplanned demo of synte(lang), and the open room 2 slots kicked off
One of the early artists performed with a "speakspell" sound in i think tidalcycles (rather than strudel), and the chops / beat they made from the vowel sounds were SO much fun.  I have since found out that this was Heavy Lifting, who is Sheffield based
There was a lot to love throughout the event, though I'm gutted that i couldn't be in both rooms at once.
I ended up mostly staying committed to room 2, but I did catch a good portion of the official synte set when I popped for a beverage.
The pastagang set was about to begin when I got back to room 2, and with a little nudge from someone I went and set up in a gap at the table.
