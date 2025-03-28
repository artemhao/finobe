// ==UserScript==
// @name         austiblox to finobe favicon and title
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  it just changes idk
// @author       artemhao
// @match        *://*.austiblox.net/*
// @icon         https://finobe.com/img/finnobenotclay.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function changeFavicon(url) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = url;
    }

    function changeTitle() {
        document.title = document.title.replace('Austiblox', 'Finobe');
    }

    changeFavicon('https://finobe.com/img/finnobenotclay.png');
    changeTitle();
})();
