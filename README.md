# Aggressive YouTube uBlock filter list

Originally on a [gist](https://gist.github.com/mchangrh/a51e72bb36a492bfda37a6a9fa537f22) but ported over to better track new elements to block

if you like this, you'll probably also like [blocktube](https://github.com/amitbl/blocktube) (no affiliation)

-----

## Install

[add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter&title=YouTube%20Neuter)  

Filter URLs  
GitHub: `https://raw.githubusercontent.com/mchangrh/yt-neuter/main/yt-neuter.txt`  
Serverless Redirect: `https://neuter.mchang.xyz/filter`  

### SponsorBlock sub-list
Less aggressive in elements to block

[add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/sponsorblock&title=yt-neuter%20sponsorblock)  

Filter URLs  
GitHub: `https://raw.githubusercontent.com/mchangrh/yt-neuter/main/filters/sponsorblock.txt`  
Serverless Redirect: `https://neuter.mchang.xyz/filter/sponsorblock`  

### noview
Hide force-pushed low-view videos

[add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter/noview&title=YouTube%20Neuter%20noview)  

Filter URLs  
GitHub: `https://raw.githubusercontent.com/mchangrh/yt-neuter/main/filters/noview.txt`  
Serverless Redirect: `https://neuter.mchang.xyz/filter/noview`  

## Userscripts
 - Disable recommended and playlist AutoPlay [Install](https://neuter.mchang.xyz/script/yt-no-autoplay.user.js)
 - Change "Subscribe" background to blend in with the rest of the theme [Install](https://neuter.mchang.xyz/script/mute-subscribe.user.js)
 - Make YT Quality icons red again [Install](https://neuter.mchang.xyz/script/old-red-quality.user.js)
 - Remove everything from description links but hostname [Install](https://neuter.mchang.xyz/script/no-link-path)
 - Remove Emojis in Titles [Install](https://neuter.mchang.xyz/script/no-emoji)
 - Remove channel trailers [Install](https://neuter.mchang.xyz/script/no-trailer)
 - Remove Experiment Flags [Install](https://neuter.mchang.xyz/script/flag-remover)
 - Persist YT Controls [Install](https://uscript.mchang.xyz/yt/yt-persist-ctrl.user.js)
 - Replaces YouTube rounded views and relative date with absolute values [Install](https://uscript.mchang.xyz/yt/yt-absview-date.user.js)
 - ~~Force YouTube grid to fit more elements per row [Install](https://neuter.mchang.xyz/script/reflow.user.js)~~
   - broken due to YouTube changes with static values
   - Replacment script: [Roki100/YouTube-rows-fix](https://github.com/Roki100/YouTube-rows-fix)  

More scripts at [mchangrh/uscripts](https://github.com/mchangrh/uscripts/tree/main/yt)

## Filters
More specific or generic filters [docs](./docs)

## Scriptlets
Addon scriptlets for uBlock Origin to block/replace elements [Instructions](https://github.com/gorhill/uBlock/wiki/Advanced-settings#userresourceslocation)  
`https://raw.githubusercontent.com/mchangrh/yt-neuter/main/scriptlets.js`