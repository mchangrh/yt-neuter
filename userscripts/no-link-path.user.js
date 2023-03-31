// ==UserScript==
// @name         YT Neuter - no link path
// @namespace    yt-neuter
// @version      1.1.0
// @description  Removes trailing paths to links in description
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-link-path.user.js
// @downloadURL  https://raw.githubusercontent.com/mchangrh/yt-neuter/main/userscripts/no-link-path.user.js
// @require      https://neuter.mchang.xyz/require/wfke.js
// @grant        none
// ==/UserScript==

// remove path from URL, remove www. prefix
const neuterLink = (elem) => {
    try {
        const hostname = new URL(elem.textContent).hostname
            .replace(/^www\./, '')
            .split(".")
        if (hostname.length > 2) hostname.shift()
        elem.textContent = hostname.join(".")
    }
    catch { return }
}
// iterate over all in description
const neuterDescLinks = () =>
    document.querySelector("#description-inner")
        .querySelectorAll(`a[target="_blank"]`)
        .forEach(neuterLink)
wfke("#description-inner", neuterDescLinks)
// re-run on description expand
// timeout is needed on un-expanding
document.addEventListener("yt-text-inline-expander-expanded-changed", () => setTimeout(() => neuterDescLinks(), 0))