// ==UserScript==
// @name         YT Neuter - no channel trailer
// @namespace    yt-neuter
// @version      0.0.1
// @description  Pause and remove youtube channel trailers
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-trailer.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-trailer.user.js
// @require      https://uscript.mchang.xyz/require/wfke-el.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

// only trigger on channel page
document.addEventListener("yt-navigate-finish", (e) => {
  if (e.detail.pageType != "channel") return // only trigger on channel page
  document.querySelector("ytd-channel-video-player-renderer").style.display = "none" // hide the element
  wfke(".html5-video-player", el => el.cancelPlayback()) // send it into infinite loading state
})