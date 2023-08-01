# Aggressive YouTube uBlock filter list

Originally on a [gist](https://gist.github.com/mchangrh/a51e72bb36a492bfda37a6a9fa537f22) but ported over to better track new elements to block

if you like this, you'll probably also like [blocktube](https://github.com/amitbl/blocktube) (no affiliation)

-----

Filter URLs

[add to uBo](https://subscribe.adblockplus.org/?location=https://neuter.mchang.xyz/filter&title=YouTube%20Neuter)  
GitHub: [`https://raw.githubusercontent.com/mchangrh/yt-neuter/main/yt-neuter.txt`](https://raw.githubusercontent.com/mchangrh/yt-neuter/main/yt-neuter.txt)  
Serverless Redirect: [`https://neuter.mchang.xyz/filter`](https://neuter.mchang.xyz/filter)

## Userscripts
Automatically disables YouTube recommended and playlist AutoPlay [Install](https://neuter.mchang.xyz/script/yt-no-autoplay.user.js)  
Change "Subscribe" background to blend in with the rest of the theme [Install](https://neuter.mchang.xyz/script/mute-subscribe.user.js)  
Make YT Quality icons red again [Install](https://neuter.mchang.xyz/script/old-red-quality.user.js)  
Remove everything from description links but hostname [Install](https://neuter.mchang.xyz/script/no-link-path)  
Remove Emojis in Titles [Install](https://neuter.mchang.xyz/script/no-emoji)
Remove channel trailers [Install](https://neuter.mchang.xyz/script/no-trailer)  
Remove Experiment Flags [Install](https://neuter.mchang.xyz/script/flag-remover)  

### Migrated/ other scripts
Persist YT Controls [Install](https://uscript.mchang.xyz/yt/yt-persist-ctrl.user.js)  
Replaces YouTube rounded views and relative date with absolute values [Install](https://uscript.mchang.xyz/yt/yt-absview-date.user.js)  

More scripts at [mchangrh/uscripts](https://github.com/mchangrh/uscripts/tree/main/yt)
### Deprecated or broken

#### reflow - broken due to youtube changes using static values
Force YouTube grid to fit more elements per row 
**Replacement Script**: [Roki100/YouTube-rows-fix](https://github.com/Roki100/YouTube-rows-fix)  
[Install](https://neuter.mchang.xyz/script/reflow.user.js)  

## Filters
Misc filters for even more aggressive, specific blocking. A list of elements blocked is automatically generated in [docs](./docs)

## Scriptlets
Addon scriptlets for uBlock Origin to block/replace elements  
[Instructions](https://github.com/gorhill/uBlock/wiki/Advanced-settings#userresourceslocation)  
`https://raw.githubusercontent.com/mchangrh/yt-neuter/main/scriptlets.js`