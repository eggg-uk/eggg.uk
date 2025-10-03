+++
date = '2025-09-01'
draft = false
title = 'strudel cheatsheet'
tags = ['livecoding','strudel','cheatsheet','music']
+++


### todo
- [ ] find more fun instruments and modifiers and post examples
- [ ] build a song out with played through examples

### learning
Honestly the thing which has helped me the most in learning these tools is spending time participating on [nudel.cc](https://nudel.cc)

If you're not familiar, you should first visit [pastagang.cc](https://www.pastagang.cc/) which should tell you a bit about all this

### instruments and synths

#todo: auto-pull from docs and list some favs

Listed under sounds in the right side panel on strudel.cc

categorised under samples, drum-machines, synths, wavetables, user, import-sounds

### a few effects with brief explainers

```js
//todo: more examples

//drums:
$: s("bd!4,cp?*8") //plays a bass drum sound and sometimes (?) plays a clap sound (on eighth notes)
  .bank("RolandTR808") //from the 808 bank of drums
  .gain(.75) //lowers the volume (default is 1)
  .speed(-8) //plays the sample at 8x speed in reverse

//plays some notes. items between angled brackets 
//Commas are kind of an "and", thus there are two patterns playing at once
$: n("<0 - 1!2>, <3 -  4!2>")
  .s("sawtooth") //the sound for this note is a sawtooth
  .scale("G2:minor") //the scale applied to the notes
  .fast(2) //the pattern plays through twice as quickly in relation to everything else
  .speed(1) //default speed is 1
  .gain(.6) 
  .transpose("<0 -7>".slow(3)) //transposes the notes in the scale down by 0 or 7 semitones
  .fm("<1 2 8>") //rotates through a few values for frequency modulation, 1 is the default
  .ply("4 8") //fires each note 4 or 8 times instead of the default 1 

//crow(s):
$: s("crow -") //plays a crow sound intermittently
  .speed(-1) //backwards
```
<iframe
src="https://strudel.cc/#Ly9kcnVtczoKJDogcygiYmQhNCxjcD8qOCIpIC8vcGxheXMgYSBiYXNzIGRydW0gc291bmQgYW5kIHNvbWV0aW1lcyAoPykgcGxheXMgYSBjbGFwIHNvdW5kIChvbiBlaWdodGggbm90ZXMpCiAgLmJhbmsoIlJvbGFuZFRSODA4IikgLy9mcm9tIHRoZSA4MDggYmFuayBvZiBkcnVtcwogIC5nYWluKC43NSkgLy9sb3dlcnMgdGhlIHZvbHVtZSAoZGVmYXVsdCBpcyAxKQogIC5zcGVlZCgtOCkgLy9wbGF5cyB0aGUgc2FtcGxlIGF0IDh4IHNwZWVkIGluIHJldmVyc2UKCi8vcGxheXMgc29tZSBub3Rlcy4gaXRlbXMgYmV0d2VlbiBhbmdsZWQgYnJhY2tldHMgCi8vQ29tbWFzIGFyZSBraW5kIG9mIGFuICJhbmQiLCB0aHVzIHRoZXJlIGFyZSB0d28gcGF0dGVybnMgcGxheWluZyBhdCBvbmNlCiQ6IG4oIjwwIC0gMSEyPiwgPDMgLSAgNCEyPiIpCiAgLnMoInNhd3Rvb3RoIikgLy90aGUgc291bmQgZm9yIHRoaXMgbm90ZSBpcyBhIHNhd3Rvb3RoCiAgLnNjYWxlKCJHMjptaW5vciIpIC8vdGhlIHNjYWxlIGFwcGxpZWQgdG8gdGhlIG5vdGVzCiAgLmZhc3QoMikgLy90aGUgcGF0dGVybiBwbGF5cyB0aHJvdWdoIHR3aWNlIGFzIHF1aWNrbHkgaW4gcmVsYXRpb24gdG8gZXZlcnl0aGluZyBlbHNlCiAgLnNwZWVkKDEpIC8vZGVmYXVsdCBzcGVlZCBpcyAxCiAgLmdhaW4oLjYpIAogIC50cmFuc3Bvc2UoIjwwIC03PiIuc2xvdygzKSkgLy90cmFuc3Bvc2VzIHRoZSBub3RlcyBpbiB0aGUgc2NhbGUgZG93biBieSAwIG9yIDcgc2VtaXRvbmVzCiAgLmZtKCI8MSAyIDg%2BIikgLy9yb3RhdGVzIHRocm91Z2ggYSBmZXcgdmFsdWVzIGZvciBmcmVxdWVuY3kgbW9kdWxhdGlvbiwgMSBpcyB0aGUgZGVmYXVsdAogIC5wbHkoIjQgOCIpIC8vZmlyZXMgZWFjaCBub3RlIDQgb3IgOCB0aW1lcyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IDEgCgovL2Nyb3cocyk6CiQ6IHMoImNyb3cgLSIpIC8vcGxheXMgYSBjcm93IHNvdW5kIGludGVybWl0dGVudGx5CiAgLnNwZWVkKC0xKSAvL2JhY2t3YXJkcw%3D%3D"
width="900"
height="900"
></iframe>

```js
//young buck - get buck beat/tuba
setcpm(80/4)

$: s("bd - - bd cp - bd - - - bd - cp bd - -")
.bank("RolandTR909")

.early(.02)
.gain(.5)
.room(.25)

$: note("b1 - - b1 - - c2 - b1 - d2 - d2 c#2 c2 - ")
.s("gm_tuba")
.gain(1.25)
.crush(4.5)
.delay(.15)
.sometimesBy(.1,n=>n.jux(rev))
```

### Nudel has features beyond the native tools 
Such as Spagda and Hubda. 
  
  - if you're exporting what you found into strudel you may need to import additional js to use some of the code you exfiltrate
  - the latest version of this lives [here](https://codeberg.org/pastagang/nudel/src/commit/e838bdc30bbf793bc0e462ac51bd5bed6e44f7fa/public/assets/std.js#) on codeberg


### changelog
[2025-03-26] began to write up instument/effect detail

[2025-04-18] updates as i prep for posting

[2025-10-03] Lil bit more stuff included, if you find yourself here, sorry it's not more fleshed out :-)
