# WhatsApp sharing button

This is the buttons source code of this awesome webservice: http://whatsapp-sharing.com

### Get started

`git clone https://github.com/kriskbx/whatsapp-sharing.git whatsapp-sharing`

`cd whatsapp-sharing`

`npm install`

### Build the button

Just run `grunt` and look into "dist".

### Use the button

If you want to use the button yourself, just use this code:

	<a href="whatsapp://send" data-text="Take a look at this awesome website:" data-href="" class="wa_btn wa_btn_s" style="display:none">Share</a>

and

	<script type="text/javascript">	if(typeof wabtn4fg==="undefined")	{wabtn4fg=1;h=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript";s.src="http://your-domain.tld/path/button";h.appendChild(s)}</script>