// ==UserScript==
// @name         YouTube No AutoPlay
// @namespace    yt-neuter
// @version      1.2.3
// @description  Disable YouTube AutoPlay by default
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/yt-no-autoplay.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/yt-no-autoplay.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

const player = document.querySelector(".ytd-player>.html5-video-player")
const playlistMgr = document.querySelector("yt-playlist-manager")
const autonavButton = document.querySelector(".ytp-autonav-toggle-button")

const disable = () => {
    if (autonavButton?.ariaChecked === "true") autonavButton.click()
    if (player) player.setAutonav(0, 1)
    if (playlistMgr) playlistMgr.canAutoAdvance_ = false
}

const check = () => {
    if (playlistMgr?.canAutoAdvance_ || autonavButton?.isAriaChecked) disable()
}

disable()
setInterval(check, 5000)
