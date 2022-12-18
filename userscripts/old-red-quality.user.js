// ==UserScript==
// @name         YT Old Red Quality Indicator
// @namespace    yt-neuter
// @version      1.0.1
// @description  Make YT Quality icons red again
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/old-red-quality.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/old-red-quality.user.js
// @grant        GM_addStyle
// ==/UserScript==

/* ubo rule:
youtube.com##.ytp-menuitem sup.ytp-swatch-color-white:style(color: var(--yt-spec-static-brand-red, #f00) !important;)
*/

GM_addStyle(".ytp-menuitem sup.ytp-swatch-color-white { color: var(--yt-spec-static-brand-red, #f00) !important; }");