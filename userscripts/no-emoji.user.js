// ==UserScript==
// @name         YT no emoji
// @namespace    yt-neuter
// @version      1.0.0
// @description  Blank out emojis with empty font
// @author       michael mchang.name
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-emoji.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-emoji.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`@font-face {
  font-family: 'nofont';
  src: url('https://neuter.mchang.xyz/require/nofont.otf') format('opentype');
  unicode-range: U+10000-1FFFF;
}`);
GM_addStyle('#video-title { font-family: nofont,"Roboto","Arial",sans-serif !important; }')