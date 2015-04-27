# WhatsApp sharing button

[![Tips](https://img.shields.io/gratipay/kriskbx.svg)](https://www.gittip.com/kriskbx/) [![Travis](https://img.shields.io/travis/kriskbx/whatsapp-sharing.svg)](https://travis-ci.org/kriskbx/whatsapp-sharing) [![Code Climate](https://img.shields.io/codeclimate/github/kriskbx/whatsapp-sharing.svg)](https://codeclimate.com/github/kriskbx/whatsapp-sharing) [![Release](https://img.shields.io/github/release/kriskbx/whatsapp-sharing.svg)](https://github.com/kriskbx/whatsapp-sharing) [![GitHub license](https://img.shields.io/github/license/kriskbx/whatsapp-sharing.svg)](https://github.com/kriskbx/whatsapp-sharing/blob/master/LICENSE) [![Npm](https://img.shields.io/npm/dm/whatsapp-sharing.svg)](https://www.npmjs.com/package/whatsapp-sharing)


## Installation

### 1. Download

* With Npm: `npm install whatsapp-sharing`
* With Bower: `bower install whatsapp-sharing`
* With Git: `git clone https://github.com/kriskbx/whatsapp-sharing.git`
* Manually: [https://github.com/kriskbx/whatsapp-sharing/releases](https://github.com/kriskbx/whatsapp-sharing/releases) 

Or include the hosted version on [jsdelivr](http://www.jsdelivr.com/): `//cdn.jsdelivr.net/whatsapp-sharing/1.3.2/whatsapp-button.js`

### 2. Integrate the buttons source

Use this code right before the `</body>`, replace `http://your-domain.tld/path/whatsapp-button.js` with the url to the just uploaded file.

	<script type="text/javascript">	if(typeof wabtn4fg==="undefined")	{wabtn4fg=1;h=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript";s.src="http://your-domain.tld/path/whatsapp-button.js";h.appendChild(s)}</script>

### 3. Place it on your website

Place this code somewhere on your website to display the button:

	<a href="whatsapp://send" data-text="Take a look at this awesome website:" data-href="" class="wa_btn wa_btn_s" style="display:none">Share</a>
	
If you want to customize the size, style, url or the sharing text, feel free to visit [whatsapp-sharing.com](http://www.whatsapp-sharing.com) for a code generator.

## FAQ

### 1. I'm using AJAX?

Run `WASHAREBTN.crBtn();` after you loaded your content.

### 2. I want to track clicks on the button.

You can simply use JavaScript event handlers like `onClick` in the code of step 3.

### 3. Can I share photos/videos?

Nope, that's not possible (at the moment).

### 4. If WhatsApp is not installed on the device there's an error message.

It's not possible to check if WhatsApp is installed on the device. This is a good thing, imagine a webpage can access the list of installed applications. And for the record: why should someone try to share something via WhatsApp if he or she is not using WhatsApp at all?

### 5. I get "Sharing failed" all the time.

The main reason for this error are modifications of the original button code that prevent the library from selecting the buttons. As a result text and url won't be added and the url-scheme that stays empty. Repeat the installation steps and don't change the code on your own.
You can test that by switching your Browsers useragent to "Android" or "iPhone" and running `WASHAREBTN.buttons` in your JavaScript console after that. This should list all the selected buttons on the page.

### 6. But I want my own styling and icons.

Well, this library was not made to be heavily modified. It was made to provide an easy way for non-devs to insert a button like this into their websites. If you want your own styling feel free to fork the repo, research the code and build your own button upon it. After all it's only a useragent check and an url-scheme.

## License

MIT
