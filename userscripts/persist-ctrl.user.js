// ==UserScript==
// @name         YT Persist Controls
// @namespace    yt-neuter
// @version      1.1.0
// @description  Make youtube controls persist
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/persist-ctrl.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/persist-ctrl.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

/* ubo rule:
youtube.com##.ytp-chrome-bottom:style(opacity: 1 !important;)
youtube.com##.ytp-gradient-bottom:style(opacity: 1 !important; display: block !important; )
*/

GM_addStyle(".ytp-chrome-bottom { opacity: 1 !important; }");
GM_addStyle(".ytp-gradient-bottom { opacity: 1 !important; display: block !important; }");