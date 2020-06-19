// import "core-js/stable";
// import "regenerator-runtime/runtime";
import 'picturefill';
import 'lazysizes/plugins/aspectratio/ls.aspectratio';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
// import 'lazysizes/plugins/object-fit/ls.object-fit';
// import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';
import 'jquery.easing';
import { innerVh } from 'inner-vh';
import { detection as detect } from './detect';
import { WebFontLoader } from './webfont-loader';
import { inlineSVG } from './inline-svg';
import { viewPort } from './viewport';
import { smoothScroll } from './smooth-scroll';
import { dotdotdot } from './jquery-dotdotdot';
import { touchHover } from './touch-hover';
import { menu } from './menu';
import { modal } from './modal';
import { tests } from './tests';

window.detect = detect();

/*= =================================================
  Run
================================================== */
WebFontLoader();
inlineSVG();
viewPort(detect());
innerVh();
touchHover(['.slider img']);
menu();
modal();
tests();

jQuery(window).on('load', () => {
  smoothScroll();
  dotdotdot();
});

// jQuery(window).on('load orientationchange resize', () => {

// });

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
