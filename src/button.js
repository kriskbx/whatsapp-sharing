/**
 * WhatsApp Sharing Button
 * https://github.com/kriskbx/whatsapp-sharing/
 *
 * Copyright (c) 2015 by kriskbx
 *
 * Licensed under the MIT license.
 */

(function () {

    "use strict";
    var root = this;

    /**
     * Constructor.
     *
     * @constructor
     */
    var WASHAREBTN = function () {
        this.buttons = [];

        if (this.isIos === true) {
            this.cntLdd(window, this.crBtn);
        }
    };

    /**
     * Is iOS / Android?
     *
     * @type {boolean}
     */
    WASHAREBTN.prototype.isIos = ((navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) ? true : false);

    /**
     * Call a function when the content is loaded and the document is ready.
     *
     * @param win
     * @param fn
     */
    WASHAREBTN.prototype.cntLdd = function (win, fn) {
        var done = false,
            top = true,
            doc = win.document,
            root = doc.documentElement,
            add = doc.addEventListener ? "addEventListener" : "attachEvent",
            rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
            pre = doc.addEventListener ? "" : "on",
            init = function (e) {
                if (e.type === "readystatechange" && doc.readyState !== "complete") {
                    return;
                }
                (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
                if (!done && (done = true)) {
                    fn.call(win, e.type || e);
                }
            },
            poll = function () {
                try {
                    root.doScroll("left");
                } catch (e) {
                    setTimeout(poll, 50);
                    return;
                }
                init("poll");
            };

        if (doc.readyState === "complete") {
            fn.call(win, "lazy");
        } else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (e) {
                }
                if (top) {
                    poll();
                }
            }
            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            win[add](pre + "load", init, false);
        }
    };

    /**
     * Returns CSS style element.
     *
     * @returns {HTMLElement}
     */
    WASHAREBTN.prototype.addStyling = function () {
        var s = document.createElement("style"),
            c = "[[minified_css]]";

        s.type = "text/css";
        if (s.styleSheet) {
            s.styleSheet.cssText = c;
        } else {
            s.appendChild(document.createTextNode(c));
        }
        return s;
    };

    /**
     * Set attributes on the given button element and returns it.
     *
     * @param b
     * @returns {*}
     */
    WASHAREBTN.prototype.setButtonAttributes = function (b) {
        var url = b.getAttribute("data-href");
        var text = "?text=" + encodeURIComponent(b.getAttribute("data-text")) + (b.getAttribute("data-text") ? "%20" : "");

        if (url) {
            text += encodeURIComponent(url);
        } else {
            text += encodeURIComponent(document.URL);
        }

        b.setAttribute("target", "_top");
        b.setAttribute("href", b.getAttribute("href") + text);
        b.setAttribute("onclick", "window.parent." + b.getAttribute("onclick"));

        return b;
    };

    /**
     * Accepts a button and creates an iframe element around it.
     * Adds an EventListener to append the button after the iframe was inserted in the DOM.
     *
     * @param b
     * @returns {HTMLElement}
     */
    WASHAREBTN.prototype.setIframeAttributes = function (b) {
        var i = document.createElement('iframe');

        i.width = 1;
        i.height = 1;
        i.button = b;
        i.style.border = 0;
        i.style.overflow = "hidden";
        i.border = 0;

        i.setAttribute("scrolling", "no");
        i.addEventListener('load', root.WASHAREBTN.iFrameOnload());

        return i;
    };

    /**
     * This function is toggled after the iframe was successfully inserted in the DOM.
     * The button element as well as the style element are appended to the iframe.
     */
    WASHAREBTN.prototype.iFrameOnload = function () {
        return function () {
            this.contentDocument.body.appendChild(this.button);
            this.contentDocument.getElementsByTagName('head')[0].appendChild(root.WASHAREBTN.addStyling());

            var meta = document.createElement('meta');
            meta.setAttribute('charset', 'utf-8');
            this.contentDocument.getElementsByTagName('head')[0].appendChild(meta);

            this.width = Math.ceil(this.contentDocument.getElementsByTagName('a')[0].getBoundingClientRect().width);
            this.height = Math.ceil(this.contentDocument.getElementsByTagName('a')[0].getBoundingClientRect().height);
        };
    };

    /**
     * Create WASHAREBTNS from all elements with the className wa_btn.
     */
    WASHAREBTN.prototype.crBtn = function () {
        var b = [].slice.call(document.querySelectorAll(".wa_btn"));
        var iframes = [];

        for (var i = 0; i < b.length; i++) {
            root.WASHAREBTN.buttons.push(b[i]);

            b[i] = root.WASHAREBTN.setButtonAttributes(b[i]);
            iframes[i] = root.WASHAREBTN.setIframeAttributes(b[i]);

            b[i].parentNode.insertBefore(iframes[i], b[i]);
        }
    };

    /**
     * Instance
     */
    root.WASHAREBTN = new WASHAREBTN();

}).call(this);