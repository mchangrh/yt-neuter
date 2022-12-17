// ==UserScript==
// @name         YT Persist Controls
// @namespace    yt-neuter
// @version      1.0.0
// @description  Make youtube controls persist
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/persist-ctrl.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/persist-ctrl.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

/* ubo rule:
youtube.com##.ytp-chrome-bottom:style(opacity: 1 !important;)
*/

GM_addStyle(".ytp-chrome-bottom { opacity: 1 !important; }");