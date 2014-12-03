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
	if( this.isIos === true ) {
		this.cntLdd( window, this.crBtn );
	}
}

/**
 * Check for iOS
 */
waShBtn.prototype.isIos = ((navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod/i)) ? true : false);

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
 * Append styling
 */
waShBtn.prototype.addStyling = function() {
	var s = document.createElement("style"),
		// CSS Styling
		c = "[[minified_css]]";

    s.type = "text/css";
    if (s.styleSheet) {
    	s.styleSheet.cssText = c;
    } else {
    	s.appendChild(document.createTextNode(c));
    }
    return s;
}

/**
 * Create the button element
 */
waShBtn.prototype.crBtn = function() {

	var b = [].slice.call( document.querySelectorAll(".wa_btn") );
	iframe = new Array();

	for (var i = 0; i < b.length; i++) {

		var parent = b[i].parentNode;
        var t = b[i].getAttribute("data-text");
        var u = b[i].getAttribute("data-href");
        var o = b[i].getAttribute("href");
        var at = "?text=" + t;
        if (t) {
            at += " ";
        }
        if (u) {
            at += u;
        } else {
            at += document.URL;
        }
        b[i].setAttribute("href", o + at);
        b[i].setAttribute("target", "_top");
        iframe[i] = document.createElement('iframe');
        iframe[i].width = 1;
        iframe[i].height = 1;
        iframe[i].button = b[i];
        iframe[i].style.border = 0;
        iframe[i].style.overflow = "hidden";
        iframe[i].border = 0;
        iframe[i].setAttribute("scrolling", "no");
	    iframe[i].addEventListener('load', function() {
	    	 this.contentDocument.body.appendChild( this.button );
	    	 this.contentDocument.getElementsByTagName('head')[0].appendChild( theWaShBtn.addStyling() );

	    	 var meta = document.createElement('meta');
	    	 meta.setAttribute('charset', 'utf-8');
	    	 this.contentDocument.getElementsByTagName('head')[0].appendChild( meta );

	    	 this.width = Math.ceil( this.contentDocument.getElementsByTagName('a')[0].getBoundingClientRect().width );
	    	 this.height = Math.ceil( this.contentDocument.getElementsByTagName('a')[0].getBoundingClientRect().height );
	    }, false);
	    parent.insertBefore( iframe[i] , b[i] );
    }
}

/**
 * Instance
 */
var theWaShBtn = new waShBtn();
