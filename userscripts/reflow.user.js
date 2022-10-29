// ==UserScript==
// @name         YouTube Grid Reflow
// @namespace    yt-neuter
// @version      0.2
// @description  Force YouTube grid to fit more elements per row
// @author       michael mchang.name
// @match        https://www.youtube.com/*
// @run-at       document-idle
// @icon         https://www.youtube.com/favicon.ico
// @updateURL    https://github.com/mchangrh/yt-neuter/raw/main/userscripts/reflow.user.js
// @downloadURL  https://github.com/mchangrh/yt-neuter/raw/main/userscripts/reflow.user.js
// @grant        none
// ==/UserScript==

const vidPerRow = 6;

const isVisible = (elem) => elem.offsetWidth > 0 || elem.offsetHeight > 0;

// wait for visible key elements
function wfke(selector, callback) {
    var els = document.querySelectorAll(selector);
    for (const el of els)
        if (el && isVisible(el)) return callback();
    setTimeout(wfke, 100, selector, callback);
}

// run until key elements
function ruke(selector, callback, parent) {
    var el = parent.querySelector(selector);
    if (el && isVisible(el)) return;
    callback(parent);
    setTimeout(ruke, 700, selector, callback, parent);
}

// dispatch reflow event to fill in empty spaces
const trigger_reflow = (parent) => parent.dispatchEvent(new Event('yt-rich-grid-reflow'));

function reflow() {
    // select browse-results-renderer (to increase maxwidth)
    const browseResultsRenderer = document.querySelector('ytd-two-column-browse-results-renderer');
    // force results to fit as many per row
    browseResultsRenderer.width = '100% !important'
    // target rich grid renderer
    const grids = document.querySelectorAll('ytd-rich-grid-renderer')

    // calculate # of elements per row
    const postPerRow = Math.floor(vidPerRow * 1.3); // post is 1.3x width of video
    // slim and game are 1/2 width of post
    const slimPerRow = Math.floor(postPerRow / 2);
    const gamePerRow = Math.floor(postPerRow / 2);

    for (const grid of grids) {
        if (!isVisible(grid)) continue;
        // set elements per row on element
        grid.style.setProperty('--ytd-rich-grid-items-per-row', vidPerRow);
        grid.elementsPerRow = vidPerRow;
        // disable rich grid post, slim and game since they aren't limited
        /*
        grid.style.setProperty('--ytd-rich-grid-posts-per-row', postPerRow);
        grid.postsPerRow = postPerRow;
        grid.style.setProperty('--ytd-rich-grid-slim-items-per-row', slimPerRow);
        grid.slimItemsPerRow = slimPerRow;
        grid.style.setProperty('--ytd-rich-grid-game-cards-per-row', gamePerRow);
        grid.gameCardsPerRow = gamePerRow;
        */
        // trigger reflow on delay
        setTimeout(trigger_reflow, 700, grid)
        // trigger reflow with ruke
        ruke("#contents.ytd-rich-grid-row:has(>:nth-child(5))", trigger_reflow, grid);
    }
}

// add delay so that previous grid will disappear
const navigateFinish = () => setTimeout(reflow, 50)

document.addEventListener('yt-navigate-finish', navigateFinish);
wfke('ytd-rich-grid-media', reflow)
