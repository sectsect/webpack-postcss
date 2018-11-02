import picturefill from 'picturefill';
import responsiveNav from 'responsive-nav';
import lsAspectratio from 'lazysizes/plugins/aspectratio/ls.aspectratio';
import lsBgset from 'lazysizes/plugins/bgset/ls.bgset';
import lsUnveilhooks from 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazysizes from 'lazysizes';
import 'jquery.easing';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import detect from './detect';
import WebFontLoader from './webfont-loader';
import inlineSVG from './inline-svg';
import viewPort from './viewport';
import smoothScroll from './jquery-smooth-scroll';
import matchHeight from './jquery-match-height';
import dotdotdot from './jquery-dotdotdot';
import touchHover from './touch-hover';
import menu from './menu';
import tests from './tests';

window.detect = detect();

/*= =================================================
  Run
================================================== */
WebFontLoader();
inlineSVG(detect());
viewPort(detect());
touchHover(['.slider img']);
menu();
tests();

// For dynamic height on iOS safari
// @ https://github.com/rodneyrehm/viewport-units-buggyfill/issues/70
viewportUnitsBuggyfill.init();
jQuery(window).on('resize', () => {
  viewportUnitsBuggyfill.refresh();
});

jQuery(window).on('load', () => {
  smoothScroll();
  dotdotdot();
});

jQuery(window).on('load orientationchange resize', () => {
  matchHeight();
});


// jQuery(() => {
//   /*= =================================================
//   Detect the devicePixelRatio
//   ================================================== */
//   const hiDPI = !!(('devicePixelRatio' in window && devicePixelRatio > 1));
//   /*= =================================================
//   Responsible menu (responsive-nav.min.js)
//   ================================================== */
//   responsiveNav('#nav', { // Selector
//     // animate: true,                  // Boolean: Use CSS3 transitions, true or false
//     transition: 150, // Integer: Speed of the transition, in milliseconds
//     // label: "<span>Menu</span>",  // String: Label for the navigation toggle
//     label: '<span>bar</span><i>MENU</i>', // String: Label for the navigation toggle
//     // insert: "before",                 // String: Insert the toggle before or after the navigation
//     // customToggle: "#nav-toggle",      // Selector: Specify the ID of a custom toggle
//     // closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
//     // openPos: "static",                // String: Position of the opened nav, relative or static
//     // navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
//     // navActiveClass: "js-nav-active",  // String: Class that is added to element when nav is active
//     // jsClass: "js",                    // String: 'JS enabled' class which is added to element
//     init() {
//       jQuery('#nav').show();
//     }, // Function: Init callback
//     //  open  : function() {},              // Function: Open callback
//     //  close  : function() {}                // Function: Close callback
//   });
//   /*= =================================================
//     fadein /fadeout button Pagetop
//   ================================================== */
//   if (!isMobile.phone) {
//     const topBtn = jQuery('#pagetop');
//     jQuery(window).scroll(function () {
//       if (jQuery(this).scrollTop() > 100) {
//         topBtn.addClass('show');
//       } else {
//         topBtn.removeClass('show');
//       }
//     });
//   }
// });

// jQuery(window).on('load orientationchange resize', () => {
//   /*= =================================================
//     Lazyload
//   ================================================== */
//   CASE: Less than Equal "IE8"
//   if (typeof LazyLoad === 'function') {
//     new LazyLoad({
//       data_src: 'src',
//       data_srcset: 'srcset',
//       threshold: 200,
//       show_while_loading: true,
//       placeholder: true,
//       callback_set(img) {
//         picturefill({
//           elements: [img],
//         });
//       },
//     });
//   } else if (typeof lazySizes === 'object') {
//     lazySizes.init();
//   }
//   /*= =================================================
//   match height (jQuery.matchheight.js)
//   ================================================== */
//   jQuery('.mh-byrow').matchHeight();
//   jQuery('.mh').matchHeight({ byRow: false });
//   // ▼USAGE:  Case: multiple
//   // <ul>
//   //   <li data-mh="group-01" class="mh">My text</li>
//   //   <li data-mh="group-01" class="mh">My text</li>
//   // </ul>
//   // <ul>
//   //   <li data-mh="group-02" class="mh">My text</li>
//   //   <li data-mh="group-02" class="mh">My text</li>
//   // </ul>
// });
