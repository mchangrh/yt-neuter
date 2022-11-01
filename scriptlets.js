/// replace-class.js
/// alias repc.js
// example.com##+js(repc, selector, oldClass, newClass)
(() => {
    'use strict';
    const selector = '{{1}}';
    const oldClass = '{{2}}';
    const newClass = '{{3}}';
    const wfke = (selector, callback) => {
        var el = document.querySelector(selector);
        if (el) return callback();
        setTimeout(wfke, 100, selector, callback);
    }
    const addclass = ev => {
        const nodes = document.querySelectorAll(selector);
        try {
            for (const node of nodes) {
                node.classList.remove(oldClass);
                node.classList.add(newClass);
            }
        } catch {}
    };
    wfke(selector, addclass)
})();