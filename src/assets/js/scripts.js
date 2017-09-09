global.jQuery = require('jquery');
global.isMobile = require('ismobilejs');
// var jQuery = require("jquery");
require('jquery.easing');
require('jquery-smooth-scroll');
require('jquery.dotdotdot');
require('jquery-match-height-browserify');
require('jquery.browser');
require('picturefill');
const __svg__ = {
  path: '../../../src/assets/images/svg/raw/**/*.svg',
  name: '../assets/images/svg/symbol.svg'
};
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
const responsiveNav = require('responsive-nav');
const WebFont = require('webfontloader');


const sect = "sect!!";

/*==================================================
Google web-fonts
================================================== */
WebFont.load({
  google: {
    families: ['Crimson+Text::latin', 'Cinzel::latin', 'Italianno::latin', 'Pinyon+Script::latin']
  }
});

jQuery(function() {
  /*==================================================
  switch viewport for tablet
  ================================================== */
  if ( isMobile.tablet ) {
    jQuery("#viewport").attr("content", "width=1024");
  }
  /*==================================================
  Detect the devicePixelRatio
  ================================================== */
  const hiDPI = ('devicePixelRatio' in window && devicePixelRatio > 1) ? true : false;
  // console.log(hiDPI);
  /*==================================================
  Responsible menu (responsive-nav.min.js)
  ================================================== */
  responsiveNav("#nav", { // Selector
    //	animate 		: true,								  // Boolean: Use CSS3 transitions, true or false
    transition: 150,                        // Integer: Speed of the transition, in milliseconds
    //	label 			: "<span>Menu</span>",	// String: Label for the navigation toggle
    label: "<span>bar</span><i>MENU</i>",   // String: Label for the navigation toggle
    //	insert 			: "before",							// String: Insert the toggle before or after the navigation
    //	customToggle 	: "#nav-toggle",			// Selector: Specify the ID of a custom toggle
    //	closeOnNavClick	: false,						// Boolean: Close the navigation when one of the links are clicked
    //	openPos			: "static",							// String: Position of the opened nav, relative or static
    //	navClass		: "nav-collapse",				// String: Default CSS class. If changed, you need to edit the CSS too!
    //	navActiveClass	: "js-nav-active",	// String: Class that is added to element when nav is active
    //	jsClass			: "js",								  // String: 'JS enabled' class which is added to element
    init: function() {
      jQuery("#nav").show();
    }, // Function: Init callback
    //	open	: function() {},							// Function: Open callback
    //	close	: function() {}								// Function: Close callback
  });
  /*==================================================
  fadein /fadeout button Pagetop
  ================================================== */
  /*
  if ( !isMobile.phone ) {
	  var topBtn = jQuery('#pagetop');
	  //	スクロールが100に達したらボタン表示
	  jQuery(window).scroll(function () {
		  if (jQuery(this).scrollTop() > 100) {
		  topBtn.addClass("show");
			} else {
				topBtn.removeClass("show");
			}
		});
	}
*/
	/*==================================================
	Image fadeIn / fadeOut
	================================================== */
	// we use touchstart and touchend events on buttons
	let enterEvent = "touchstart";
	let leaveEvent = "touchend";
	// we use mousedown and mouseup events on big items
	let enterBigEvent = "mousedown";
	let leaveBigEvent = "mouseup";
	if (!("ontouchstart" in window)) {
	  // if no touch we use mouseenter and mouseleave events on buttons and big items
	  enterEvent = enterBigEvent = "mouseenter";
	  leaveEvent = leaveBigEvent = "mouseleave";
	}
	jQuery("main a").not(".home #sec_recommend .bxslider li a").on(enterEvent, function(e) {
	  jQuery(this).find("img").addClass("on");
	});
	jQuery("main a").not(".home #sec_recommend .bxslider li a").on(leaveEvent, function(e) {
	  jQuery(this).find("img").removeClass("on");
	});
});

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
