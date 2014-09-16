/**
 * WhatsApp Sharing Button
 * https://github.com/kriskbx/whatsapp-sharing/
 * 
 * Copyright (c) 2014 by Kris Siepert, John Brüggemann, Daniel Stopp
 * http://kris.cool - http://keksbox.com - http://odiumediae.de
 * Licensed under the MIT license.
 */


/**
 * Constructor
 */
waShBtn = function() {
	this.cntLdd( window, this.crBtn );
}

/**
 * Call a function when the content is loaded and the document is ready
 */
waShBtn.prototype.cntLdd = function( win, fn ) {
	var done = false,
	    top = true,
	    doc = win.document,
	    root = doc.documentElement,
	    add = doc.addEventListener ? "addEventListener" : "attachEvent",
	    rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
	    pre = doc.addEventListener ? "" : "on",
	    init = function(e) {
	        if (e.type == "readystatechange" && doc.readyState != "complete") { return; }
	        (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
	        if (!done && (done = true)) { fn.call(win, e.type || e); }
	    },
	    poll = function () {
	        try { root.doScroll("left"); } catch (e) { setTimeout(poll, 50); return; }
	        init("poll");
	    };
	    
    if (doc.readyState == "complete") {
    	fn.call(win, "lazy");
	} else {
        if (doc.createEventObject && root.doScroll) {
            try { top = !win.frameElement; } catch (e) {}
        if (top) {
            poll();
        }
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    win[add](pre + "load", init, false);
    }
}

/**
 * Create the button element
 */
waShBtn.prototype.crBtn = function() {	

	var b = document.getElementsByClassName("wa_btn");
	iframe = new Array();
	
	for (var i = 0; i < b.length; i++) {
		
		b[i].setAttribute('href', 'http://whatsapp-sharing.com');
		b[i].innerHTML = 'This button has to be updated. Please contact the websites administrator';
		b[i].style.backgroundColor = 'red';
		b[i].style.color = 'white';
		b[i].style.display = 'inline-block';
    }
}

/**
 * Instance
 */
var theWaShBtn = new waShBtn();