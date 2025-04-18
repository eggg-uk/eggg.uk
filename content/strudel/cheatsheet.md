+++
date = '2025-04-18'
draft = false
title = 'strudel cheatsheet'
tags = ['livecoding','strudel','cheatsheet','music']
+++


## todo
- [ ] find more fun instruments and modifiers
- [ ] build a song out with played through examples of a bunch of effects

### instrument names 
auto-pull from docs 

or list some favs

### synths
auto-pull from docs 

or list some favs

### effects with brief explainer
```js
.transpose(2) //scales up/down
```

```js
//speed values in the negative result in reversed sounds (samples mainly?)
$: s("bd!4").bank("RolandTR808").gain(.75).speed(-8)

$: n("<0 - 1!2>, <3 -  4!2>")
  .s("sawtooth")
  .scale("G2:minor")
  .fast(2)
  .speed(1)
  .gain(.6)
  .transpose(-7)
  .fm(2)
  .ply(8)

$: s("crow -")
.speed(-1)
```


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

### spagda / hubda - if using strudel you may need to import this to use those functions which are natively part of nudel
```js
function spag(name){return'https://spag.cc/'+name} function listToArray(stringList){if(Array.isArray(stringList)){return stringList.map(listToArray).flat()} return stringList.replaceAll(' ',',').split(',').map((v)=>v.trim()).filter((v)=>v)} async function spagda(nameList){const names=listToArray(nameList);if(names.length===0){return} const map={};for(const name of names){map[name]=spag(name)} samples(map)} async function speechda(wordList='',locale='en-GB',gender='f',){if(wordList.includes(':')){const[localeArg,wordsArg]=wordList.split(':');if(localeArg.includes('-')){locale=localeArg}else{gender=localeArg} wordList=wordsArg} if(locale.includes('/')){const[localeArg,genderArg]=locale.split('/');locale=localeArg;gender=genderArg} const words=listToArray(wordList);if(words.length===0){return} samples('shabda/speech/'+locale+'/'+gender+':'+words.join(','))} async function hubda(orgList,repoList=''){const orgs=listToArray(orgList);const orgRepos=[];const orgChoices=[];for(const org of orgs){if(org.includes('/')){const[orgName,repoName]=org.split('/');orgRepos.push({org:orgName,repo:repoName})}else{orgChoices.push(org)}} const repoChoices=listToArray(repoList);for(const orgChoice of orgChoices){for(const repoChoice of repoChoices){orgRepos.push({org:orgChoice,repo:repoChoice})}} const addresses=orgRepos.map(({org,repo})=>'github:'+org+'/'+repo);for(const address of addresses){samples(address)}} window.speechda=speechda;window.spagda=spagda;window.spag=spag;window.hubda=hubda
```

### changelog
[[2025-03-26]] began to write up instument/effect detail
[[2025-04-18]] updates as i prep for posting