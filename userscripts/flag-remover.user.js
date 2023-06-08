// ==UserScript==
// @name         YT Neuter - flag remover
// @namespace    yt-neuter
// @version      0.1.0
// @description  Remove misc flags from YouTube
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/flag-remover.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/flag-remover.user.js
// @require      https://neuter.mchang.xyz/require/flag-pull.js
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

// static flag list
const flagList = {
  "yoodle": [ "enable_yoodle" ],
  "animated-like": [ "web_animated_like" ],
  "button-outline": [ "web_modern_buttons", "web_modern_chips" ]
}

// flags config example
/*
{"flags": [
  "animated-like"
]}
*/

function loadFlags () {
  console.log("YT Neuter: Loading flags")
  if (!GM_getValue("flags")) GM_setValue("flags", [])
  console.log(GM_getValue("flags"))
  const toRemove = GM_getValue("flags")
  console.log("YT Neuter: Removing flags", toRemove)
  for (const flag of toRemove)
    for (const experiment of flagList?.[flag]) {
      console.log("YT Neuter: Removing flag", experiment)
      pull_flag(experiment)
    }
}

loadFlags()