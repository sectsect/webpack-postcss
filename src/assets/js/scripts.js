global.jQuery = require('jquery');
// var jQuery = require("jquery");
require('jquery.easing');
require('jquery-smooth-scroll');
require('jquery.dotdotdot');
require('jquery-match-height-browserify');
require('jquery.browser');
require('picturefill');
// plugin will find marks and build sprite
var __svg__ = { path: '../../../src/assets/images/svg/raw/**/*.svg', name: '../images/svg/symbol.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
const isMobile = require('ismobilejs');

const sect = "sect!!";

jQuery.event.add(window, "load", function() {
	/*==================================================
  	Text Truncation
  ================================================== */
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      wrap: 'letter',
      callback: function(isTruncated, orgContent) {
        jQuery(this).addClass("ready");
      }
    });
  }
	/*==================================================
		smooth scroll
	================================================== */
	var h = parseInt("-" + jQuery("#header").outerHeight(true));
	jQuery("a[href^='#']").on('click', function() {
		var offset = (jQuery(this).parent().hasClass("pageTop")) ? 0 : h;
		var target = jQuery(this).attr("href");
		$.smoothScroll({
			easing      : "easeOutQuint",
			speed       : 800,
			offset      : offset,
			scrollTarget: target
		});
		return false;
	});
	var headerH = jQuery("#header").outerHeight(true);
	//	外部からページリンクで飛んできた場合
	var url = jQuery(location).attr('href');
	if (url.indexOf("?id=") == -1) {
		//	Do Noting
	} else {
		var url_sp = url.split("?id=");
		var hash = '#' + url_sp[url_sp.length - 1];
		var tgt = jQuery(hash);
		setTimeout(function() {
			var pos = tgt.offset().top - headerH; //	headerH でオフセット分を引く
			jQuery("html, body").animate({
				scrollTop: pos
			}, 1000, "easeOutQuint");
		}, 300);
	}
});

jQuery(window).on("load orientationchange resize", function() {
	/*==================================================
		Lazyload
	================================================== */
	// // CASE: Less than Equal "IE8"
	// if (typeof LazyLoad == "function") {
	// 	new LazyLoad({
	// 		data_src          : "src",
	// 		data_srcset       : "srcset",
	// 		threshold         : 200,
	// 		show_while_loading: true,
	// 		placeholder       : true,
	// 		callback_set      : function(img) {
	// 			picturefill({
	// 				elements  : [img]
	// 			});
	// 		}
	// 	});
	// } else if (typeof lazySizes == "object") {
	// 	lazySizes.init();
	// }
	/*==================================================
		Trim words	(Supported Mobile-Device) & Setting same height on column
	================================================== */
	// if (jQuery('.trim_line1').length) {
	// 	jQuery('.trim_line1').trunk8({
	// 		tooltip: false
	// 	});
	// }
	// if (jQuery('.trim_line2').length) {
	// 	jQuery('.trim_line2').trunk8({
	// 		tooltip: false,
	// 		lines: 2
	// 	});
	// }
	// if (jQuery('.trim_line3').length) {
	// 	jQuery('.trim_line3').trunk8({
	// 		tooltip: false,
	// 		lines: 3
	// 	});
	// }
	// if (jQuery('.trim_line4').length) {
	// 	jQuery('.trim_line4').trunk8({
	// 		tooltip: false,
	// 		lines: 4
	// 	});
	// }
	// if (jQuery('.trim_line5').length) {
	// 	jQuery('.trim_line5').trunk8({
	// 		tooltip: false,
	// 		lines: 5
	// 	});
	// }
	/*==================================================
		match height (jQuery.matchheight.js)
	================================================== */
	jQuery(".mh-byrow").matchHeight();
	jQuery(".mh").matchHeight({byRow: false});
	// ▼USAGE:	Case: multiple
	// <ul>
	// 	<li data-mh="group-01" class="mh">My text</li>
	// 	<li data-mh="group-01" class="mh">My text</li>
	// </ul>
	// <ul>
	// 	<li data-mh="group-02" class="mh">My text</li>
	// 	<li data-mh="group-02" class="mh">My text</li>
	// </ul>
});
