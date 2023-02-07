## yt-neuter
The main filter list  
[docs](./yt-neuter.md) | short link: `https://neuter.mchang.xyz/filter`

## nolive
Hide all Live/ Upcoming/ Premiere/ Streamed videos  
[docs](./filters/nolive.md) | short link: `https://neuter.mchang.xyz/filter/nolive`

## noshorts
Block YouTube Shorts  
This works best alongside [BlockTube](https://github.com/amitbl/blocktube)'s shorts blocking feature, adds some filters on channel pages  
[docs](./filters/noshorts.md) | short link: `https://neuter.mchang.xyz/filter/noshorts`

## nomusic
Hide all videos by verified artists and Music recommendations  
[docs](./filters/nomusic.md) | short link: `https://neuter.mchang.xyz/filter/nomusic`

## notrack
Block video tracking endpoints  
!! Will break history and recommendations !!  
[docs](./filters/notrack.md) | short link: `https://neuter.mchang.xyz/filter/notrack`

## misc
Extremely aggressive misc filters  
[docs](./filters/misc.md) | short link: `https://neuter.mchang.xyz/filter/misc`

## reflow
filters to accompany the [reflow userscript](../userscripts/reflow.user.js)  
[docs](./filters/reflow.md) | short link: `https://neuter.mchang.xyz/filter/reflow`

## funkey
niche filters for funkey

## excluding filter
to add an exclusion for a costmetic filter, copy the offending filter to "Your Filters" and replace the `##` after youtube.com with `#@#`

to add an exclusion for a URL filter, replace `||` with `@@`

example:
```diff
! block subscribe button
- youtube.com###subscribe-button
+ youtube.com#@##subscribe-button

! block endscreen
- ||www.youtube.com/s/player/*/player_ias.vflset/*/endscreen.js^$script
+ @@www.youtube.com/s/player/*/player_ias.vflset/*/endscreen.js^$script
```