// ==UserScript==
// @name         YouTube No AutoPlay
// @namespace    yt-neuter
// @version      1.1
// @description  Disable YouTube AutoPlay by default
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://github.com/mchangrh/yt-neuter/raw/main/userscripts/yt-no-autoplay.user.js
// @downloadURL  https://github.com/mchangrh/yt-neuter/raw/main/userscripts/yt-no-autoplay.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  const autonav = document.querySelector(".ytp-autonav-toggle-button")
  const playlistMgr = document.querySelector("yt-playlist-manager")
  
  function disable() {
    if (autonav?.ariaChecked === "true") autonav.click()
    if (playlistMgr) playlistMgr.canAutoAdvance_ = false
  }

  let frequency = 5000
  setInterval(disable, frequency)
})();