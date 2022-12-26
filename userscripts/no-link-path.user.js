// ==UserScript==
// @name         YT Neuter - no link path
// @namespace    yt-neuter
// @version      1.0.0
// @description  Removes trailing paths to links in description
// @author       michael mchang.name
// @match        https://www.youtube.com/watch*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-link-path.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-link-path.user.js
// @grant        none
// ==/UserScript==

// remove path from URL, remove www. prefix
const neuterLink = (elem) => {
    try { elem.textContent = new URL(elem.textContent).hostname.replace(/^www\./, '') }
    catch { return }
}
// iterate over all in description
const neuterDescLinks = () =>
    document.querySelector("#description-inner")
        .querySelectorAll("a.yt-simple-endpoint.yt-formatted-string")
        .forEach(neuterLink)
// wait for description to be visible
const wfke = (selector, callback) => {
    var el = document.querySelector(selector);
    if (el) return callback();
    setTimeout(wfke, 100, selector, callback);
}
wfke("#description-inner", neuterDescLinks)
// re-run on description expand
document.addEventListener("yt-text-inline-expander-expanded-changed", neuterDescLinks)