## yt-neuter
The main filter list  
[docs](./yt-neuter.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter&title=YouTube%20Neuter)

## nolive
Hide all Live/ Upcoming/ Premiere/ Streamed videos  
[docs](./filters/nolive.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/nolive&title=YouTube%20Neuter%20-%20nolive)

## nomusic
Hide all videos by verified artists and Music recommendations  
[docs](./filters/nomusic.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/nomusic&title=YouTube%20Neuter%20-%20nomusic)

## noshorts
Block YouTube Shorts  
This works best alongside [BlockTube](https://github.com/amitbl/blocktube)'s shorts blocking feature, adds some filters on channel pages  
[docs](./filters/noshorts.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/noshorts&title=YouTube%20Neuter%20-%20noshorts)

## notrack
Block video tracking endpoints  
!! Will break history and recommendations !!  
[docs](./filters/notrack.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/notrack&title=YouTube%20Neuter%20-%20notrack)

## misc
Extremely aggressive misc filters  
[docs](./filters/misc.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/misc&title=YouTube%20Neuter%20-%20misc)

## sponsorblock
Conservative subset of yt-neuter for SponsorBlock (PRs require additional scrutiny)  
[docs](./filters/sponsorblock.md) | [add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/sponsorblock&title=YouTube%20Neuter%20-%20SponsorBlock)

## requests
niche transformative filters requested

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