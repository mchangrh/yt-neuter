// ==UserScript==
// @name         YouTube No AutoPlay
// @namespace    yt-neuter
// @version      1.1.1
// @description  Disable YouTube AutoPlay by default
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/yt-no-autoplay.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/yt-no-autoplay.user.js
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

  disable()
  let frequency = 5000
  setInterval(disable, frequency)
})();