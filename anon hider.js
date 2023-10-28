// tamper monkey script

// ==UserScript==
// @name         Anon hider
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Hides anons on ourworldoftext
// @author       uksfx
// @match        *://ourworldoftext.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ourworldoftext.com
// @grant        none
// ==/UserScript==

(function() {
w.on('chatmod', (e) => {
if(e.type == 'anon' || e.type == 'anon_nick'){
e.hide = true;
}
})
})();

// normal script


w.on('chatmod', (e) => {
	if(e.type == 'anon' || e.type == 'anon_nick'){
		e.hide = true;
	}
})
