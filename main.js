// ==UserScript==
// @name         YTADskipper
// @namespace    http://tampermonkey.net/
// @version      2024-04-09
// @description  try to take over the world!
// @author       WaKaBaP
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

const ADKEY = "ytp-ad-player-overlay";
const SKIPKEY = "ytp-ad-skip-button-modern ytp-button";

function skipAD(){
    console.log("Enter skipAD");

    if(!document.getElementsByClassName(ADKEY).length) {
        console.log("Leave skipAD");
        return;
    }

    //document.querySelector("video").playbackRate = 16;
    document.querySelector("video").currentTime = 999;

    setTimeout(()=>{
        document.getElementsByClassName(SKIPKEY)[0].click();
    }, 500)

    console.log("AD SKIP");

    setTimeout(()=>{
        skipAD();
    }, 1000);
}

(function() {
    'use strict';

    window.onload = function(){
        setTimeout(()=>{
            skipAD();
        }, 1000);
    }

    window.navigation.addEventListener("navigate", (event) => {
        setTimeout(()=>{
            skipAD();
        }, 1500);
    });
})();