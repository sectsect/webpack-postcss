// import jquery from 'jquery';
// import * as R from 'rambda';
// import ismobilejs from 'ismobilejs';
// import bowser from 'bowser';
// import Modernizr from 'modernizr';
import dedent from 'dedent';
import picturefill from 'picturefill';
import responsiveNav from 'responsive-nav';
import lsAspectratio from 'lazysizes/plugins/aspectratio/ls.aspectratio';
import lsBgset from 'lazysizes/plugins/bgset/ls.bgset';
import lsUnveilhooks from 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import lazysizes from 'lazysizes';
import 'jquery.easing';
import detect from './detect';
import WebFontLoader from './webfont-loader';
import inlineSVG from './inline-svg';
import viewPort from './viewport';
import smoothScroll from './jquery-smooth-scroll';
import matchHeight from './jquery-match-height';
import dotdotdot from './jquery-dotdotdot';
import touchHover from './touch-hover';
import hamburgerMenu from './hamburger-menu';

// window.$ = jquery;
// window.jQuery = jquery;
// window.R = R;
// global.isMobile = ismobilejs;
// global.bowser = bowser;
// require('jquery.easing');
// require('jquery-smooth-scroll');
// require('jquery.dotdotdot');
// require('jquery-match-height-browserify');

window.detect = detect();

/*= =================================================
  Detect Testing
================================================== */
console.log(detect());

/*= =================================================
  Dedent Example
================================================== */
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
/*= =================================================
  jQuery Testing
================================================== */
$('body').addClass('sektsekt');

/*= =================================================
  Example for Rambda.js    Currently this version has known issue on IE. @ https://github.com/selfrefactor/rambda/issues/52
================================================== */
// console.log(R.append('foo', ['bar', 'baz']));
// console.log(R.flatten([1, [2, [3]]]));
// console.log(R.init([1, 2, 3]));
// console.log(R.is(String, 'foo')); // => true
// console.log(R.is(Array, 1)); // => false
// console.log(R.last(['foo', 'bar', 'baz']));
// const mapFn = x => x * 2;
// console.log(R.map(mapFn, [1, 2, 3]));
// => [2, 4, 6]

/*= =================================================
  ES6 Example
================================================== */
// Spread Operator
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(...arr); // 1 2 3

const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four', 'five'];
console.log(arr2);

const numbers = [9, 4, 7, 1];
console.log(Math.min(...numbers));

// Array.prototype.includes() (ES7)
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3));

// Default Parameters
const foo = (a = 5, b = 10) => {
  console.log(a + b);
};
foo(); // 15
foo(7, 12); // 19
foo(undefined, 8); // 13
foo(8); // 18
foo(null); // 10 as null is coerced to 0

// Object.assign()
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};
const object2 = Object.assign({ d: 4 }, object1);
console.log(object2.d);

/*= =================================================
  ES7 Example
================================================== */
// async / await
const resolveAfter2Seconds = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolved');
  }, 2000);
});
const asyncCall = async () => {
  try {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  } catch (err) {
    alert(err);
  }
};
asyncCall();

// async / await & fetch JSON   @ http://blog.fixter.org/learn-es6-promise-and-es7-async-await/
const doFetch = async (user) => {
  try {
    const url = `https://api.github.com/users/${user}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('The user does not exist.');
    return await response.json();
  } catch (err) {
    return err;
  }
};
async function getUser(user) {
  const userData = await doFetch(user);
  console.log(userData);
}
getUser('sectsect');

/*= =================================================
  Run
================================================== */
WebFontLoader();
inlineSVG(detect());
viewPort(detect());
touchHover(['.slider img']);
hamburgerMenu();

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
