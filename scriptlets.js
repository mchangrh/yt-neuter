/// replace-class.js
/// alias repc.js
// example.com##+js(repc, selctor, oldClass, newClass)
(() => {
    'use strict';
    const selector = '{{1}}';
    const oldClass = '{{2}}';
    const newClass = '{{3}}';
    const addclass = ev => {
        if (ev) { window.removeEventListener(ev.type, addclass, true);  }
        const nodes = document.querySelectorAll(selector);
        try {
            for ( const node of nodes ) {
                node.classList.remove(oldClass);
                node.classList.add(newClass);
            }
        } catch { }
    };
    if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', addclass, true);
        } else {
            addclass();
        }
})();