import jquery from 'jquery';
import Modernizr from 'modernizr';
import dedent from 'dedent';
import picturefill from 'picturefill';
import WebFont from 'webfontloader';
import responsiveNav from 'responsive-nav';
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueMatchHeights from 'vue-match-heights';
import lsAspectratio from 'lazysizes/plugins/aspectratio/ls.aspectratio';
import lsBgset from 'lazysizes/plugins/bgset/ls.bgset';
import lsUnveilhooks from 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazysizes from 'lazysizes';
import ismobilejs from 'ismobilejs';
import bowser from 'bowser';
import * as R from 'rambda';

window.$ = jquery;
window.jQuery = jquery;
window.Vue = Vue;
window.R = R;
global.isMobile = ismobilejs;
global.bowser = bowser;

require('jquery.easing');
// require('jquery-smooth-scroll');
require('jquery.dotdotdot');
require('jquery-match-height-browserify');

const __svg__ = {
  path: '../../../src/assets/images/svg/raw/**/*.svg',
  name: '../../assets/images/svg/symbol.svg',
};
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

const detect = {
  desktop: !isMobile.any,
  mobile: isMobile.any,
  phone: isMobile.phone,
  tablet: isMobile.tablet,
  chrome: (bowser.chrome) ? bowser.version : false,
  firefox: (bowser.firefox) ? bowser.version : false,
  safari: (bowser.safari) ? bowser.version : false,
  msie: (bowser.msie) ? bowser.version : false,
  msedge: (bowser.msedge) ? bowser.version : false,
  iPhone: isMobile.apple.phone,
  androidphone: isMobile.android.phone,
  iOS: isMobile.apple.device,
  androidOS: isMobile.android.device,
};
console.log(detect);

if (!Modernizr.objectfit) {
  console.log('non-objectfit');
} else {
  console.log('objectfit');
}

// For dedent
const sectsect = dedent`A string that gets so long you need to break it over
                     multiple lines. Luckily dedent is here to keep it
                     readable without lots of spaces ending up in the string
                     itself.`;
console.log(sectsect);

// if (typeof picturefill === 'function') {
//   console.log('picture!!!!!!!!');
// }
// if (typeof WebFont === 'object') {
//   console.log('WebFont!!!!!!!!');
// }
// if (typeof responsiveNav === 'function') {
//   console.log('responsiveNav!!!!!!!!');
// }

$('body').addClass('sektsekt');

const ary = R.append('foo', ['bar', 'baz']);
console.log(ary);

// Example for Spread Operator
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(...arr); // 1 2 3

const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four', 'five'];
console.log(arr2);

const numbers = [9, 4, 7, 1];
console.log(Math.min(...numbers));

const array = [1, 2, 3, 4, 5];
console.log(array.includes(3));

/*= =================================================
		smooth scroll (For VueScrollTo)
================================================== */
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
/*= =================================================
		match height (For VueMatchHeights)
================================================== */
Vue.use(VueMatchHeights);

// Vue.js
const App = new Vue({
  el: '#wrap',
  methods: {
  },
});

const vp = (detect.tablet) ? 'width=1024' : 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';

const AppMeta = new Vue({
  el: '#head',
  data: {
    viewport: vp,
  },
  methods: {},
});

/*= =================================================
Google web-fonts
================================================== */
WebFont.load({
  google: {
    families: ['Crimson+Text::latin', 'Cinzel::latin', 'Italianno::latin', 'Pinyon+Script::latin'],
  },
});

jQuery(() => {
  /*= =================================================
  switch viewport for tablet
  ================================================== */
  // if (isMobile.tablet) {
  //   jQuery('#viewport').attr('content', 'width=1024');
  // }
  /*= =================================================
  Detect the devicePixelRatio
  ================================================== */
  const hiDPI = !!(('devicePixelRatio' in window && devicePixelRatio > 1));
  // console.log(hiDPI);
  /*= =================================================
  Responsible menu (responsive-nav.min.js)
  ================================================== */
  // responsiveNav('#nav', { // Selector
  //   //	animate 		: true,								  // Boolean: Use CSS3 transitions, true or false
  //   transition: 150, // Integer: Speed of the transition, in milliseconds
  //   //	label 			: "<span>Menu</span>",	// String: Label for the navigation toggle
  //   label: '<span>bar</span><i>MENU</i>', // String: Label for the navigation toggle
  //   //	insert 			: "before",							// String: Insert the toggle before or after the navigation
  //   //	customToggle 	: "#nav-toggle",			// Selector: Specify the ID of a custom toggle
  //   //	closeOnNavClick	: false,						// Boolean: Close the navigation when one of the links are clicked
  //   //	openPos			: "static",							// String: Position of the opened nav, relative or static
  //   //	navClass		: "nav-collapse",				// String: Default CSS class. If changed, you need to edit the CSS too!
  //   //	navActiveClass	: "js-nav-active",	// String: Class that is added to element when nav is active
  //   //	jsClass			: "js",								  // String: 'JS enabled' class which is added to element
  //   init() {
  //     jQuery('#nav').show();
  //   }, // Function: Init callback
  //   //	open	: function() {},							// Function: Open callback
  //   //	close	: function() {}								// Function: Close callback
  // });
  /*= =================================================
  fadein /fadeout button Pagetop
  ================================================== */
  /* if (!isMobile.phone) {
	  const topBtn = jQuery('#pagetop');
	  //	スクロールが100に達したらボタン表示
	  jQuery(window).scroll(function () {
		  if (jQuery(this).scrollTop() > 100) {
		  topBtn.addClass('show');
      } else {
        topBtn.removeClass('show');
      }
    });
  }
*/
  /*= =================================================
	Image fadeIn / fadeOut
	================================================== */
  // // we use touchstart and touchend events on buttons
  // let enterEvent = 'touchstart';
  // let leaveEvent = 'touchend';
  // // we use mousedown and mouseup events on big items
  // let enterBigEvent = 'mousedown';
  // let leaveBigEvent = 'mouseup';
  // if (!('ontouchstart' in window)) {
  //   enterEvent = 'mouseenter';
  //   enterBigEvent = 'mouseenter';
  //   leaveEvent = 'mouseleave';
  //   leaveBigEvent = 'mouseleave';
  // }
  // jQuery('main a').not('.home #sec_recommend .bxslider li a').on(enterEvent, function (e) {
  //   jQuery(this).find('img').addClass('on');
  // });
  // jQuery('main a').not('.home #sec_recommend .bxslider li a').on(leaveEvent, function (e) {
  //   jQuery(this).find('img').removeClass('on');
  // });
});

jQuery.event.add(window, 'load', () => {
  /*= =================================================
  	Text Truncation
  ================================================== */
  if (jQuery('.truncation').length) {
    jQuery('.truncation').dotdotdot({
      watch: 'window',
      truncate: 'letter',
      callback(isTruncated) {
        jQuery(this).addClass('ready');
      },
    });
  }
  /*= =================================================
		smooth scroll
	================================================== */
  // const h = parseInt(`-${jQuery('#header').outerHeight(true)}`, 10);
  // jQuery("a[href^='#']").on('click', function () {
  //   const offset = (jQuery(this).parent().hasClass('pageTop')) ? 0 : h;
  //   const target = jQuery(this).attr('href');
  //   $.smoothScroll({
  //     easing: 'easeOutQuint',
  //     speed: 800,
  //     offset,
  //     scrollTarget: target,
  //   });
  //   return false;
  // });
  // const headerH = jQuery('#header').outerHeight(true);
  // //	外部からページリンクで飛んできた場合
  // const url = jQuery(window.location).attr('href');
  // if (url.indexOf('?id=') === -1) {
  //   //	Do Noting
  // } else {
  //   const urlsp = url.split('?id=');
  //   const hash = `#${urlsp[urlsp.length - 1]}`;
  //   const tgt = jQuery(hash);
  //   setTimeout(() => {
  //     const pos = tgt.offset().top - headerH; //	headerH でオフセット分を引く
  //     jQuery('html, body').animate({
  //       scrollTop: pos,
  //     }, 1000, 'easeOutQuint');
  //   }, 300);
  // }
});

jQuery(window).on('load orientationchange resize', () => {
  /*= =================================================
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
  /*= =================================================
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
  /*= =================================================
		match height (jQuery.matchheight.js)
	================================================== */
  // jQuery('.mh-byrow').matchHeight();
  // jQuery('.mh').matchHeight({ byRow: false });
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
