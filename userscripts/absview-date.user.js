// ==UserScript==
// @name         Absolute views, dates
// @namespace    mchang.name
// @version      1.0.4
// @description  Replces YouTube rounded views and relative date with absolute values
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/uscripts/main/yt/yt-absview-date.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/uscripts/main/yt/yt-absview-date.user.js
// @require      https://neuter.mchang.xyz/require/wfke.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

function replaceViewDate() {
    const parent = document.querySelector("#info-container>#info")
    // pull views, date with n-th
    const views = parent.querySelector(":nth-child(1)")
    const date = parent.querySelector(":nth-child(3)")

    // pull real data from tooltip
    const [realViews, realDate] = document.querySelector("tp-yt-paper-tooltip[for=info]>#tooltip").textContent
    .split("•").map(s => s.trim())

    // replace
    views.textContent = realViews
    date.textContent = realDate
}
wfke("#description-inner", replaceViewDate)
document.addEventListener("yt-text-inline-expander-expanded-changed", replaceViewDate)