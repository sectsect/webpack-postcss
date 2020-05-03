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
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
// import { detection as detect } from './detect';
import { WebFontLoader } from './webfont-loader';
import { inlineSVG } from './inline-svg';
import { viewPort } from './viewport';
import { smoothScroll } from './smooth-scroll';
import { dotdotdot } from './jquery-dotdotdot';
// import { touchHover } from './touch-hover';
import { menu } from './menu';
// import { modal } from './modal';
import { tests } from './tests';
import { typescript } from './typescript';

declare global {
  interface Window {
    wp_data: WpData;
  }
}

interface WpData {
  site: string;
  post_id: string;
  post_type: string;
  slug: string;
  title: string;
  permalink: string;
  paged: string;
  taxonomy: string;
  term_name: string;
  term_slug: string;
  term_id: string;
  taxonomy_hierarchy: string;
  homeurl: string;
  template_dir_uri: string;
  stylesheet_dir_uri: string;
  stylesheet_dir: string;
  contenturl: string;
  current_page_url: string;
  current_page_path: string;
  is_home: string;
  is_front_page: string;
  is_page: string;
  is_page_root: string;
  is_static_page: string;
  is_single: string;
  is_singular: string;
  is_archive: string;
  is_post_type_archive: string;
  is_tax: string;
  is_date: string;
  is_search: string;
  is_tag: string;
  is_feed: string;
  break_points: BreakPoints;
}

interface BreakPoints {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

// window.detect = detect();

console.log(window.wp_data);

/*= =================================================
  Run
================================================== */
WebFontLoader();
inlineSVG();
viewPort();
// touchHover(['.slider img']);
menu();
// modal();
tests();
typescript();

// console.log(window.detect);

// For dynamic height on iOS safari
// @ https://github.com/rodneyrehm/viewport-units-buggyfill/issues/70
viewportUnitsBuggyfill.init();
$(window).on('resize', () => {
  viewportUnitsBuggyfill.refresh();
});

$(window).on('load', () => {
  smoothScroll();
  dotdotdot();
});

// $(window).on('load orientationchange resize', () => {

// });

// $(() => {
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
//       $('#nav').show();
//     }, // Function: Init callback
//     //  open  : function() {},              // Function: Open callback
//     //  close  : function() {}                // Function: Close callback
//   });
//   /*= =================================================
//     fadein /fadeout button Pagetop
//   ================================================== */
//   if (!isMobile.phone) {
//     const topBtn = $('#pagetop');
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         topBtn.addClass('show');
//       } else {
//         topBtn.removeClass('show');
//       }
//     });
//   }
// });
