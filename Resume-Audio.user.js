// ==UserScript==
// @name         Resume-Audio
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      *://hqaudiobooks.com/*
// @include      *://hdaudiobooks.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hdaudiobooks.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var els = document.querySelectorAll('audio');
    console.log("Running script");
    els.forEach(el => {
        const isPlaying = true
        el.addEventListener('play', (event) => {
            const srcCurrentTime = Number(window.localStorage.getItem(el.currentSrc));
            console.log("start playing " + el.currentSrc + " from " + srcCurrentTime);
            if(srcCurrentTime && el.currentTime < srcCurrentTime){
                // if we got any saved time;
                el.currentTime = srcCurrentTime;
            }
        })

        el.addEventListener('timeupdate', (event) => {
            window.localStorage.setItem(el.currentSrc, el.currentTime);
        });

//        el.addEventListener('seeked', ev =>{
//            console.log(el.currentTime)
//        })
    })
})();
