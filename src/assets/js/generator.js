$(document).ready(function() {
	if(!supportsSVG()) {
	$('img[src*="svg"]').attr('src', function() {
	    return $(this).attr('src').replace('.svg', '.png');
	});
}
	$('.urlselect').change(function() {
		if( $('#url2').prop('checked') ) {
			$('#customurl').prop('disabled', false);
			$('#customurl').prop('readonly', false);
		} else {
			$('#customurl').prop('disabled', true);
			$('#customurl').prop('readonly', true);
		}
	});
	$('#set_button').change(function() {
		setCode();
	});
	function setCode() {
		var customurl = '';			
		if( $('#url2').prop('checked') ) { customurl = $('#customurl').val(); }
		var text = '<a href="whatsapp://send" data-text="'+$('#sharingtext').val().replace(new RegExp('"', 'g'),"")+'" data-href="'+customurl.replace(new RegExp('"', 'g'),"")+'" class="wa_btn '+$('input[name=style]:checked').val()+'" style="display:none">'+$('#buttontext').val().replace(new RegExp('"', 'g'),"")+'</a><script type="text/javascript">if(typeof wabtn4fg==="undefined"){wabtn4fg=1;h=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript";s.src="//whatsapp-sharing.com/button";h.appendChild(s);}</sc'+'ript>';
		$('#code_button').text(text);
		$('#button_preview').html('<a class="wa_btn '+$('input[name=style]:checked').val()+'">'+$('#buttontext').val().replace(new RegExp('"', 'g'),"")+'</a>');
	}
	setCode();
});
function supportsSVG() {
	return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
}