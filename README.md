# WhatsApp sharing button

## Installation

### 1. Download

Download the current [release](https://github.com/kriskbx/whatsapp-sharing/releases) or clone the repo and upload `dist/whatsapp-button.js` somewhere on your webserver.

### 2. Integrate the buttons source

Use this code right before the `</body>`, replace `http://your-domain.tld/path/whatsapp-button.js` with the url to the just uploaded file.

	<script type="text/javascript">	if(typeof wabtn4fg==="undefined")	{wabtn4fg=1;h=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript";s.src="http://your-domain.tld/path/whatsapp-button.js";h.appendChild(s)}</script>

### 3. Place it on your website

Place this code somewhere on your website to display the button:

	<a href="whatsapp://send" data-text="Take a look at this awesome website:" data-href="" class="wa_btn wa_btn_s" style="display:none">Share</a>
	
If you want to customize the size, style, url or the sharing text, feel free to visit [whatsapp-sharing.com](http://www.whatsapp-sharing.com) for a code generator.

## FAQ

### 1. I'm using AJAX?

Run `theWaShBtn.crBtn();` after you loaded your content.

### 2. I want to track clicks on the button

You can simply use JavaScript event handlers like `onClick` in the code of step 3.

### 3. Can I share photos/videos?

Nope, that's not possible (at the moment).

### 4. If WhatsApp is not installed on the device there's an error message

It's not possible to check if WhatsApp is installed on the device. This is a good thing, imagine a webpage can access the list of installed applications.