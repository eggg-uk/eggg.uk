+++
date = '2025-04-23'
draft = false
title = 'migrating my domains to porkbun from uk2'
tags = ['admin','webhosting']
+++

### what am i doing here?
Migrating domains to a new domain registrar

porkbun seemed reasonable value and I've seen others using them lately. (certainly a saving for me, for .uk and .co.uk)

### steps
- Signed up at porkbun
- read their kb article on transferring, [which led to another on transferring a .uk](https://kb.porkbun.com/article/180-how-to-transfer-a-uk-domain-to-porkbun)
- followed the steps: 
	- tell porkbun the domain to transfer in, 
	- set their requested txt DNS record on UK2
	- hit finish on porkbun
	- then initiate the transfer on UK2
		- this differs from most other registrars, dunno why we have to be different...
	- this took around 2-10 mins for each domain I transferred
	- Once that was done, they let me know with each site
- I then reconfigured each of my sites' DNS. 
	- Thankfully UK2 retained my config and didn't drop it instantly on transfer, but if I were to do this again I'd look to take copies of all that info ahead of time!
- I then checked on my email provider's end to ensure that they could still see my domains no problem
	- I screwed up one mx record, which it found
- I sent some test mails to my email addresses, to see if they made it through
	- most did, but one didn't have an A or AAAA record, which gmail seems to denote as a failed lookup, even though the MX/TXT stuff was all there
		- quickly spun something up for it to point to and this fixed

### summary
all in all, took me a good while, but I've not done this in an awfully long time. 
shout out to porkbun's documentation tbh. 
