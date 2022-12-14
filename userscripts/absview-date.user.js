// ==UserScript==
// @name         Absolute views, dates
// @namespace    yt-neuter
// @version      1.0.0
// @description  Replces YouTube rounded views and relative date with absolute values
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/absview-date.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/absview-date.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

// wait for visible key elements
function wfke(selector, callback) {
  var el = document.querySelector(selector);
  if (el) return callback();
  setTimeout(wfke, 100, selector, callback);
}

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