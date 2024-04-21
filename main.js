// ==UserScript==
// @name         YTADskipper
// @namespace    http://tampermonkey.net/
// @version      2024-04-09
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

const ADKEY = "ytp-ad-text";
const SKIPKEY = "ytp-ad-skip-button-modern ytp-button";

function skipAD(){
    if(document.getElementsByClassName(ADKEY).length) {
         //document.querySelector("video").playbackRate = 16;
        document.querySelector("video").currentTime = 999;
        if(document.getElementsByClassName(SKIPKEY).length) document.getElementsByClassName(SKIPKEY)[0].click();

        console.log("AD SKIP");
    }
}

(function() {
    'use strict';
    setInterval(skipAD, 1000);
})();