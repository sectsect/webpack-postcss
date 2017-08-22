/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.jQuery = __webpack_require__(0);
// var jQuery = require("jquery");
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
var isMobile = __webpack_require__(9);

var sect = "sect!!";

jQuery.event.add(window, "load", function () {
	/*==================================================
  	Text Truncation
  ================================================== */
	if (jQuery('.truncation').length) {
		jQuery('.truncation').dotdotdot({
			watch: 'window',
			wrap: 'letter',
			callback: function callback(isTruncated, orgContent) {
				jQuery(this).addClass("ready");
			}
		});
	}
	/*==================================================
 	smooth scroll
 ================================================== */
	var h = parseInt("-" + jQuery("#header").outerHeight(true));
	jQuery("a[href^='#']").on('click', function () {
		var offset = jQuery(this).parent().hasClass("pageTop") ? 0 : h;
		var target = jQuery(this).attr("href");
		$.smoothScroll({
			easing: "easeOutQuint",
			speed: 800,
			offset: offset,
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
		setTimeout(function () {
			var pos = tgt.offset().top - headerH; //	headerH でオフセット分を引く
			jQuery("html, body").animate({
				scrollTop: pos
			}, 1000, "easeOutQuint");
		}, 300);
	}
});

jQuery(window).on("load orientationchange resize", function () {
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
	jQuery(".mh").matchHeight({ byRow: false });
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
			return factory($);
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === "object" && typeof module.exports === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
$.easing.jswing = $.easing.swing;

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + 0.75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + 0.9375;
	} else {
		return n1*(x-=(2.625/d1))*x + 0.984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});

});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

(function(factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {

  var version = '2.2.0';
  var optionOverrides = {};
  var defaults = {
    exclude: [],
    excludeWithin: [],
    offset: 0,

    // one of 'top' or 'left'
    direction: 'top',

    // if set, bind click events through delegation
    //  supported since jQuery 1.4.2
    delegateSelector: null,

    // jQuery set of elements you wish to scroll (for $.smoothScroll).
    //  if null (default), $('html, body').firstScrollable() is used.
    scrollElement: null,

    // only use if you want to override default behavior
    scrollTarget: null,

    // automatically focus the target element after scrolling to it
    autoFocus: false,

    // fn(opts) function to be called before scrolling occurs.
    // `this` is the element(s) being scrolled
    beforeScroll: function() {},

    // fn(opts) function to be called after scrolling occurs.
    // `this` is the triggering element
    afterScroll: function() {},

    // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
    // from jQuery UI or elsewhere
    easing: 'swing',

    // speed can be a number or 'auto'
    // if 'auto', the speed will be calculated based on the formula:
    // (current scroll position - target scroll position) / autoCoeffic
    speed: 400,

    // coefficient for "auto" speed
    autoCoefficient: 2,

    // $.fn.smoothScroll only: whether to prevent the default click action
    preventDefault: true
  };

  var getScrollable = function(opts) {
    var scrollable = [];
    var scrolled = false;
    var dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

    this.each(function() {
      var el = $(this);

      if (this === document || this === window) {
        return;
      }

      if (document.scrollingElement && (this === document.documentElement || this === document.body)) {
        scrollable.push(document.scrollingElement);

        return false;
      }

      if (el[dir]() > 0) {
        scrollable.push(this);
      } else {
        // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
        el[dir](1);
        scrolled = el[dir]() > 0;

        if (scrolled) {
          scrollable.push(this);
        }
        // then put it back, of course
        el[dir](0);
      }
    });

    if (!scrollable.length) {
      this.each(function() {
        // If no scrollable elements and <html> has scroll-behavior:smooth because
        // "When this property is specified on the root element, it applies to the viewport instead."
        // and "The scroll-behavior property of the … body element is *not* propagated to the viewport."
        // → https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior
        if (this === document.documentElement && $(this).css('scrollBehavior') === 'smooth') {
          scrollable = [this];
        }

        // If still no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length && this.nodeName === 'BODY') {
          scrollable = [this];
        }
      });
    }

    // Use the first scrollable element if we're calling firstScrollable()
    if (opts.el === 'first' && scrollable.length > 1) {
      scrollable = [scrollable[0]];
    }

    return scrollable;
  };

  var rRelative = /^([\-\+]=)(\d+)/;

  $.fn.extend({
    scrollable: function(dir) {
      var scrl = getScrollable.call(this, {dir: dir});

      return this.pushStack(scrl);
    },
    firstScrollable: function(dir) {
      var scrl = getScrollable.call(this, {el: 'first', dir: dir});

      return this.pushStack(scrl);
    },

    smoothScroll: function(options, extra) {
      options = options || {};

      if (options === 'options') {
        if (!extra) {
          return this.first().data('ssOpts');
        }

        return this.each(function() {
          var $this = $(this);
          var opts = $.extend($this.data('ssOpts') || {}, extra);

          $(this).data('ssOpts', opts);
        });
      }

      var opts = $.extend({}, $.fn.smoothScroll.defaults, options);

      var clickHandler = function(event) {
        var escapeSelector = function(str) {
          return str.replace(/(:|\.|\/)/g, '\\$1');
        };

        var link = this;
        var $link = $(this);
        var thisOpts = $.extend({}, opts, $link.data('ssOpts') || {});
        var exclude = opts.exclude;
        var excludeWithin = thisOpts.excludeWithin;
        var elCounter = 0;
        var ewlCounter = 0;
        var include = true;
        var clickOpts = {};
        var locationPath = $.smoothScroll.filterPath(location.pathname);
        var linkPath = $.smoothScroll.filterPath(link.pathname);
        var hostMatch = location.hostname === link.hostname || !link.hostname;
        var pathMatch = thisOpts.scrollTarget || (linkPath === locationPath);
        var thisHash = escapeSelector(link.hash);

        if (thisHash && !$(thisHash).length) {
          include = false;
        }

        if (!thisOpts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
          include = false;
        } else {
          while (include && elCounter < exclude.length) {
            if ($link.is(escapeSelector(exclude[elCounter++]))) {
              include = false;
            }
          }

          while (include && ewlCounter < excludeWithin.length) {
            if ($link.closest(excludeWithin[ewlCounter++]).length) {
              include = false;
            }
          }
        }

        if (include) {
          if (thisOpts.preventDefault) {
            event.preventDefault();
          }

          $.extend(clickOpts, thisOpts, {
            scrollTarget: thisOpts.scrollTarget || thisHash,
            link: link
          });

          $.smoothScroll(clickOpts);
        }
      };

      if (options.delegateSelector !== null) {
        this
        .off('click.smoothscroll', options.delegateSelector)
        .on('click.smoothscroll', options.delegateSelector, clickHandler);
      } else {
        this
        .off('click.smoothscroll')
        .on('click.smoothscroll', clickHandler);
      }

      return this;
    }
  });

  var getExplicitOffset = function(val) {
    var explicit = {relative: ''};
    var parts = typeof val === 'string' && rRelative.exec(val);

    if (typeof val === 'number') {
      explicit.px = val;
    } else if (parts) {
      explicit.relative = parts[1];
      explicit.px = parseFloat(parts[2]) || 0;
    }

    return explicit;
  };

  var onAfterScroll = function(opts) {
    var $tgt = $(opts.scrollTarget);

    if (opts.autoFocus && $tgt.length) {
      $tgt[0].focus();

      if (!$tgt.is(document.activeElement)) {
        $tgt.prop({tabIndex: -1});
        $tgt[0].focus();
      }
    }

    opts.afterScroll.call(opts.link, opts);
  };

  $.smoothScroll = function(options, px) {
    if (options === 'options' && typeof px === 'object') {
      return $.extend(optionOverrides, px);
    }
    var opts, $scroller, speed, delta;
    var explicitOffset = getExplicitOffset(options);
    var scrollTargetOffset = {};
    var scrollerOffset = 0;
    var offPos = 'offset';
    var scrollDir = 'scrollTop';
    var aniProps = {};
    var aniOpts = {};

    if (explicitOffset.px) {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, optionOverrides);
    } else {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, options || {}, optionOverrides);

      if (opts.scrollElement) {
        offPos = 'position';

        if (opts.scrollElement.css('position') === 'static') {
          opts.scrollElement.css('position', 'relative');
        }
      }

      if (px) {
        explicitOffset = getExplicitOffset(px);
      }
    }

    scrollDir = opts.direction === 'left' ? 'scrollLeft' : scrollDir;

    if (opts.scrollElement) {
      $scroller = opts.scrollElement;

      if (!explicitOffset.px && !(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)) {
        scrollerOffset = $scroller[scrollDir]();
      }
    } else {
      $scroller = $('html, body').firstScrollable(opts.direction);
    }

    // beforeScroll callback function must fire before calculating offset
    opts.beforeScroll.call($scroller, opts);

    scrollTargetOffset = explicitOffset.px ? explicitOffset : {
      relative: '',
      px: ($(opts.scrollTarget)[offPos]() && $(opts.scrollTarget)[offPos]()[opts.direction]) || 0
    };

    aniProps[scrollDir] = scrollTargetOffset.relative + (scrollTargetOffset.px + scrollerOffset + opts.offset);

    speed = opts.speed;

    // automatically calculate the speed of the scroll based on distance / coefficient
    if (speed === 'auto') {

      // $scroller[scrollDir]() is position before scroll, aniProps[scrollDir] is position after
      // When delta is greater, speed will be greater.
      delta = Math.abs(aniProps[scrollDir] - $scroller[scrollDir]());

      // Divide the delta by the coefficient
      speed = delta / opts.autoCoefficient;
    }

    aniOpts = {
      duration: speed,
      easing: opts.easing,
      complete: function() {
        onAfterScroll(opts);
      }
    };

    if (opts.step) {
      aniOpts.step = opts.step;
    }

    if ($scroller.length) {
      $scroller.stop().animate(aniProps, aniOpts);
    } else {
      onAfterScroll(opts);
    }
  };

  $.smoothScroll.version = version;
  $.smoothScroll.filterPath = function(string) {
    string = string || '';

    return string
      .replace(/^\//, '')
      .replace(/(?:index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  };

  // default options
  $.fn.smoothScroll.defaults = defaults;

}));



/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 *	jQuery dotdotdot 1.7.4
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */

(function( $, undef )
{
	if ( $.fn.dotdotdot )
	{
		return;
	}

	$.fn.dotdotdot = function( o )
	{
		if ( this.length == 0 )
		{
			$.fn.dotdotdot.debug( 'No element found for "' + this.selector + '".' );
			return this;
		}
		if ( this.length > 1 )
		{
			return this.each(
				function()
				{
					$(this).dotdotdot( o );
				}
			);
		}


		var $dot = this;
		var orgContent	= $dot.contents();

		if ( $dot.data( 'dotdotdot' ) )
		{
			$dot.trigger( 'destroy.dot' );
		}

		$dot.data( 'dotdotdot-style', $dot.attr( 'style' ) || '' );
		$dot.css( 'word-wrap', 'break-word' );
		if ($dot.css( 'white-space' ) === 'nowrap')
		{
			$dot.css( 'white-space', 'normal' );
		}

		$dot.bind_events = function()
		{
			$dot.bind(
				'update.dot',
				function( e, c )
				{
					$dot.removeClass("is-truncated");
					e.preventDefault();
					e.stopPropagation();

					switch( typeof opts.height )
					{
						case 'number':
							opts.maxHeight = opts.height;
							break;

						case 'function':
							opts.maxHeight = opts.height.call( $dot[ 0 ] );
							break;

						default:
							opts.maxHeight = getTrueInnerHeight( $dot );
							break;
					}

					opts.maxHeight += opts.tolerance;

					if ( typeof c != 'undefined' )
					{
						if ( typeof c == 'string' || ('nodeType' in c && c.nodeType === 1) )
						{
					 		c = $('<div />').append( c ).contents();
						}
						if ( c instanceof $ )
						{
							orgContent = c;
						}
					}

					$inr = $dot.wrapInner( '<div class="dotdotdot" />' ).children();
					$inr.contents()
						.detach()
						.end()
						.append( orgContent.clone( true ) )
						.find( 'br' )
						.replaceWith( '  <br />  ' )
						.end()
						.css({
							'height'	: 'auto',
							'width'		: 'auto',
							'border'	: 'none',
							'padding'	: 0,
							'margin'	: 0
						});

					var after = false,
						trunc = false;

					if ( conf.afterElement )
					{
						after = conf.afterElement.clone( true );
					    after.show();
						conf.afterElement.detach();
					}

					if ( test( $inr, opts ) )
					{
						if ( opts.wrap == 'children' )
						{
							trunc = children( $inr, opts, after );
						}
						else
						{
							trunc = ellipsis( $inr, $dot, $inr, opts, after );
						}
					}
					$inr.replaceWith( $inr.contents() );
					$inr = null;

					if ( $.isFunction( opts.callback ) )
					{
						opts.callback.call( $dot[ 0 ], trunc, orgContent );
					}

					conf.isTruncated = trunc;
					return trunc;
				}

			).bind(
				'isTruncated.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], conf.isTruncated );
					}
					return conf.isTruncated;
				}

			).bind(
				'originalContent.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], orgContent );
					}
					return orgContent;
				}

			).bind(
				'destroy.dot',
				function( e )
				{
					e.preventDefault();
					e.stopPropagation();

					$dot.unwatch()
						.unbind_events()
						.contents()
						.detach()
						.end()
						.append( orgContent )
						.attr( 'style', $dot.data( 'dotdotdot-style' ) || '' )
						.data( 'dotdotdot', false );
				}
			);
			return $dot;
		};	//	/bind_events

		$dot.unbind_events = function()
		{
			$dot.unbind('.dot');
			return $dot;
		};	//	/unbind_events

		$dot.watch = function()
		{
			$dot.unwatch();
			if ( opts.watch == 'window' )
			{
				var $window = $(window),
					_wWidth = $window.width(),
					_wHeight = $window.height();

				$window.bind(
					'resize.dot' + conf.dotId,
					function()
					{
						if ( _wWidth != $window.width() || _wHeight != $window.height() || !opts.windowResizeFix )
						{
							_wWidth = $window.width();
							_wHeight = $window.height();

							if ( watchInt )
							{
								clearInterval( watchInt );
							}
							watchInt = setTimeout(
								function()
								{
									$dot.trigger( 'update.dot' );
								}, 100
							);
						}
					}
				);
			}
			else
			{
				watchOrg = getSizes( $dot );
				watchInt = setInterval(
					function()
					{
						if ( $dot.is( ':visible' ) )
						{
							var watchNew = getSizes( $dot );
							if ( watchOrg.width  != watchNew.width ||
								 watchOrg.height != watchNew.height )
							{
								$dot.trigger( 'update.dot' );
								watchOrg = watchNew;
							}
						}
					}, 500
				);
			}
			return $dot;
		};
		$dot.unwatch = function()
		{
			$(window).unbind( 'resize.dot' + conf.dotId );
			if ( watchInt )
			{
				clearInterval( watchInt );
			}
			return $dot;
		};

		var	opts 		= $.extend( true, {}, $.fn.dotdotdot.defaults, o ),
			conf		= {},
			watchOrg	= {},
			watchInt	= null,
			$inr		= null;


		if ( !( opts.lastCharacter.remove instanceof Array ) )
		{
			opts.lastCharacter.remove = $.fn.dotdotdot.defaultArrays.lastCharacter.remove;
		}
		if ( !( opts.lastCharacter.noEllipsis instanceof Array ) )
		{
			opts.lastCharacter.noEllipsis = $.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis;
		}


		conf.afterElement	= getElement( opts.after, $dot );
		conf.isTruncated	= false;
		conf.dotId			= dotId++;


		$dot.data( 'dotdotdot', true )
			.bind_events()
			.trigger( 'update.dot' );

		if ( opts.watch )
		{
			$dot.watch();
		}

		return $dot;
	};


	//	public
	$.fn.dotdotdot.defaults = {
		'ellipsis'			: '... ',
		'wrap'				: 'word',
		'fallbackToLetter'	: true,
		'lastCharacter'		: {},
		'tolerance'			: 0,
		'callback'			: null,
		'after'				: null,
		'height'			: null,
		'watch'				: false,
		'windowResizeFix'	: true
	};
	$.fn.dotdotdot.defaultArrays = {
		'lastCharacter'		: {
			'remove'			: [ ' ', '\u3000', ',', ';', '.', '!', '?' ],
			'noEllipsis'		: []
		}
	};
	$.fn.dotdotdot.debug = function( msg ) {};


	//	private
	var dotId = 1;

	function children( $elem, o, after )
	{
		var $elements 	= $elem.children(),
			isTruncated	= false;

		$elem.empty();

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{
			var $e = $elements.eq( a );
			$elem.append( $e );
			if ( after )
			{
				$elem.append( after );
			}
			if ( test( $elem, o ) )
			{
				$e.remove();
				isTruncated = true;
				break;
			}
			else
			{
				if ( after )
				{
					after.detach();
				}
			}
		}
		return isTruncated;
	}
	function ellipsis( $elem, $d, $i, o, after )
	{
		var isTruncated	= false;

		//	Don't put the ellipsis directly inside these elements
		var notx = 'a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style';

		//	Don't remove these elements even if they are after the ellipsis
		var noty = 'script, .dotdotdot-keep';

		$elem
			.contents()
			.detach()
			.each(
				function()
				{

					var e	= this,
						$e	= $(e);

					if ( typeof e == 'undefined' )
					{
						return true;
					}
					else if ( $e.is( noty ) )
					{
						$elem.append( $e );
					}
					else if ( isTruncated )
					{
						return true;
					}
					else
					{
						$elem.append( $e );
						if ( after && !$e.is( o.after ) && !$e.find( o.after ).length  )
						{
							$elem[ $elem.is( notx ) ? 'after' : 'append' ]( after );
						}
						if ( test( $i, o ) )
						{
							if ( e.nodeType == 3 ) // node is TEXT
							{
								isTruncated = ellipsisElement( $e, $d, $i, o, after );
							}
							else
							{
								isTruncated = ellipsis( $e, $d, $i, o, after );
							}
						}

						if ( !isTruncated )
						{
							if ( after )
							{
								after.detach();
							}
						}
					}
				}
			);
		$d.addClass("is-truncated");
		return isTruncated;
	}
	function ellipsisElement( $e, $d, $i, o, after )
	{
		var e = $e[ 0 ];

		if ( !e )
		{
			return false;
		}

		var txt			= getTextContent( e ),
			space		= ( txt.indexOf(' ') !== -1 ) ? ' ' : '\u3000',
			separator	= ( o.wrap == 'letter' ) ? '' : space,
			textArr		= txt.split( separator ),
			position 	= -1,
			midPos		= -1,
			startPos	= 0,
			endPos		= textArr.length - 1;


		//	Only one word
		if ( o.fallbackToLetter && startPos == 0 && endPos == 0 )
		{
			separator	= '';
			textArr		= txt.split( separator );
			endPos		= textArr.length - 1;
		}

		while ( startPos <= endPos && !( startPos == 0 && endPos == 0 ) )
		{
			var m = Math.floor( ( startPos + endPos ) / 2 );
			if ( m == midPos )
			{
				break;
			}
			midPos = m;

			setTextContent( e, textArr.slice( 0, midPos + 1 ).join( separator ) + o.ellipsis );
			$i.children()
				.each(
					function()
					{
						$(this).toggle().toggle();
					}
				);

			if ( !test( $i, o ) )
			{
				position = midPos;
				startPos = midPos;
			}
			else
			{
				endPos = midPos;

				//	Fallback to letter
				if (o.fallbackToLetter && startPos == 0 && endPos == 0 )
				{
					separator	= '';
					textArr		= textArr[ 0 ].split( separator );
					position	= -1;
					midPos		= -1;
					startPos	= 0;
					endPos		= textArr.length - 1;
				}
			}
		}

		if ( position != -1 && !( textArr.length == 1 && textArr[ 0 ].length == 0 ) )
		{
			txt = addEllipsis( textArr.slice( 0, position + 1 ).join( separator ), o );
			setTextContent( e, txt );
		}
		else
		{
			var $w = $e.parent();
			$e.detach();

			var afterLength = ( after && after.closest($w).length ) ? after.length : 0;

			if ( $w.contents().length > afterLength )
			{
				e = findLastTextNode( $w.contents().eq( -1 - afterLength ), $d );
			}
			else
			{
				e = findLastTextNode( $w, $d, true );
				if ( !afterLength )
				{
					$w.detach();
				}
			}
			if ( e )
			{
				txt = addEllipsis( getTextContent( e ), o );
				setTextContent( e, txt );
				if ( afterLength && after )
				{
					$(e).parent().append( after );
				}
			}
		}

		return true;
	}
	function test( $i, o )
	{
		return $i.innerHeight() > o.maxHeight;
	}
	function addEllipsis( txt, o )
	{
		while( $.inArray( txt.slice( -1 ), o.lastCharacter.remove ) > -1 )
		{
			txt = txt.slice( 0, -1 );
		}
		if ( $.inArray( txt.slice( -1 ), o.lastCharacter.noEllipsis ) < 0 )
		{
			txt += o.ellipsis;
		}
		return txt;
	}
	function getSizes( $d )
	{
		return {
			'width'	: $d.innerWidth(),
			'height': $d.innerHeight()
		};
	}
	function setTextContent( e, content )
	{
		if ( e.innerText )
		{
			e.innerText = content;
		}
		else if ( e.nodeValue )
		{
			e.nodeValue = content;
		}
		else if (e.textContent)
		{
			e.textContent = content;
		}

	}
	function getTextContent( e )
	{
		if ( e.innerText )
		{
			return e.innerText;
		}
		else if ( e.nodeValue )
		{
			return e.nodeValue;
		}
		else if ( e.textContent )
		{
			return e.textContent;
		}
		else
		{
			return "";
		}
	}
	function getPrevNode( n )
	{
		do
		{
			n = n.previousSibling;
		}
		while ( n && n.nodeType !== 1 && n.nodeType !== 3 );

		return n;
	}
	function findLastTextNode( $el, $top, excludeCurrent )
	{
		var e = $el && $el[ 0 ], p;
		if ( e )
		{
			if ( !excludeCurrent )
			{
				if ( e.nodeType === 3 )
				{
					return e;
				}
				if ( $.trim( $el.text() ) )
				{
					return findLastTextNode( $el.contents().last(), $top );
				}
			}
			p = getPrevNode( e );
			while ( !p )
			{
				$el = $el.parent();
				if ( $el.is( $top ) || !$el.length )
				{
					return false;
				}
				p = getPrevNode( $el[0] );
			}
			if ( p )
			{
				return findLastTextNode( $(p), $top );
			}
		}
		return false;
	}
	function getElement( e, $i )
	{
		if ( !e )
		{
			return false;
		}
		if ( typeof e === 'string' )
		{
			e = $(e, $i);
			return ( e.length )
				? e
				: false;
		}
		return !e.jquery
			? false
			: e;
	}
	function getTrueInnerHeight( $el )
	{
		var h = $el.innerHeight(),
			a = [ 'paddingTop', 'paddingBottom' ];

		for ( var z = 0, l = a.length; z < l; z++ )
		{
			var m = parseInt( $el.css( a[ z ] ), 10 );
			if ( isNaN( m ) )
			{
				m = 0;
			}
			h -= m;
		}
		return h;
	}


	//	override jQuery.html
	var _orgHtml = $.fn.html;
	$.fn.html = function( str )
	{
		if ( str != undef && !$.isFunction( str ) && this.data( 'dotdotdot' ) )
		{
			return this.trigger( 'update', [ str ] );
		}
		return _orgHtml.apply( this, arguments );
	};


	//	override jQuery.text
	var _orgText = $.fn.text;
	$.fn.text = function( str )
	{
		if ( str != undef && !$.isFunction( str ) && this.data( 'dotdotdot' ) )
		{
			str = $( '<div />' ).text( str ).html();
			return this.trigger( 'update', [ str ] );
		}
		return _orgText.apply( this, arguments );
	};


})( jQuery );


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function($, window, document) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

}(jQuery, window, document));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
      return factory($);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node-like environment
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
      delete browser.edge;
      var msedge = "msedge";

      matched.browser = msedge;
      browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return picturefill; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var apple_phone         = /iPhone/i,
        apple_ipod          = /iPod/i,
        apple_tablet        = /iPad/i,
        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
        android_tablet      = /Android/i,
        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone       = /Windows Phone/i,
        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
        other_blackberry    = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera         = /Opera Mini/i,
        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
        seven_inch = new RegExp(
            '(?:' +         // Non-capturing group

            'Nexus 7' +     // Nexus 7

            '|' +           // OR

            'BNTV250' +     // B&N Nook Tablet 7 inch

            '|' +           // OR

            'Kindle Fire' + // Kindle Fire

            '|' +           // OR

            'Silk' +        // Kindle Fire, Silk Accelerated

            '|' +           // OR

            'GT-P1000' +    // Galaxy Tab 7 inch

            ')',            // End non-capturing group

            'i');           // Case-insensitive matching

    var match = function(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone:  match(apple_phone, ua),
            ipod:   match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone:  match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone:  match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone:  match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
            blackberry:   match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera:        match(other_opera, ua),
            firefox:      match(other_firefox, ua),
            chrome:       match(other_chrome, ua),
            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (true) {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.isMobile = instantiate();
    }

})(this);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQ3ODU5OGY1ZGRkNmRkYmNmZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS5lYXNpbmcvanF1ZXJ5LmVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXNtb290aC1zY3JvbGwvanF1ZXJ5LnNtb290aC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS5kb3Rkb3Rkb3Qvc3JjL2pzL2pxdWVyeS5kb3Rkb3Rkb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS1tYXRjaC1oZWlnaHQtYnJvd3NlcmlmeS9qcXVlcnkubWF0Y2hIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS5icm93c2VyL2Rpc3QvanF1ZXJ5LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzbW9iaWxlanMvaXNNb2JpbGUuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwialF1ZXJ5IiwicmVxdWlyZSIsImlzTW9iaWxlIiwic2VjdCIsImV2ZW50IiwiYWRkIiwid2luZG93IiwibGVuZ3RoIiwiZG90ZG90ZG90Iiwid2F0Y2giLCJ3cmFwIiwiY2FsbGJhY2siLCJpc1RydW5jYXRlZCIsIm9yZ0NvbnRlbnQiLCJhZGRDbGFzcyIsImgiLCJwYXJzZUludCIsIm91dGVySGVpZ2h0Iiwib24iLCJvZmZzZXQiLCJwYXJlbnQiLCJoYXNDbGFzcyIsInRhcmdldCIsImF0dHIiLCIkIiwic21vb3RoU2Nyb2xsIiwiZWFzaW5nIiwic3BlZWQiLCJzY3JvbGxUYXJnZXQiLCJoZWFkZXJIIiwidXJsIiwibG9jYXRpb24iLCJpbmRleE9mIiwidXJsX3NwIiwic3BsaXQiLCJoYXNoIiwidGd0Iiwic2V0VGltZW91dCIsInBvcyIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJtYXRjaEhlaWdodCIsImJ5Um93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsd0I7Ozs7Ozs7OztBQ0FBQSxPQUFPQyxNQUFQLEdBQWdCLG1CQUFBQyxDQUFRLENBQVIsQ0FBaEI7QUFDQTtBQUNBLG1CQUFBQSxDQUFRLENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjtBQUNBLElBQU1DLFdBQVcsbUJBQUFELENBQVEsQ0FBUixDQUFqQjs7QUFFQSxJQUFNRSxPQUFPLFFBQWI7O0FBRUFILE9BQU9JLEtBQVAsQ0FBYUMsR0FBYixDQUFpQkMsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsWUFBVztBQUMzQzs7O0FBR0MsS0FBSU4sT0FBTyxhQUFQLEVBQXNCTyxNQUExQixFQUFrQztBQUNoQ1AsU0FBTyxhQUFQLEVBQXNCUSxTQUF0QixDQUFnQztBQUM5QkMsVUFBTyxRQUR1QjtBQUU5QkMsU0FBTSxRQUZ3QjtBQUc5QkMsYUFBVSxrQkFBU0MsV0FBVCxFQUFzQkMsVUFBdEIsRUFBa0M7QUFDMUNiLFdBQU8sSUFBUCxFQUFhYyxRQUFiLENBQXNCLE9BQXRCO0FBQ0Q7QUFMNkIsR0FBaEM7QUFPRDtBQUNGOzs7QUFHQSxLQUFJQyxJQUFJQyxTQUFTLE1BQU1oQixPQUFPLFNBQVAsRUFBa0JpQixXQUFsQixDQUE4QixJQUE5QixDQUFmLENBQVI7QUFDQWpCLFFBQU8sY0FBUCxFQUF1QmtCLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFlBQVc7QUFDN0MsTUFBSUMsU0FBVW5CLE9BQU8sSUFBUCxFQUFhb0IsTUFBYixHQUFzQkMsUUFBdEIsQ0FBK0IsU0FBL0IsQ0FBRCxHQUE4QyxDQUE5QyxHQUFrRE4sQ0FBL0Q7QUFDQSxNQUFJTyxTQUFTdEIsT0FBTyxJQUFQLEVBQWF1QixJQUFiLENBQWtCLE1BQWxCLENBQWI7QUFDQUMsSUFBRUMsWUFBRixDQUFlO0FBQ2RDLFdBQWMsY0FEQTtBQUVkQyxVQUFjLEdBRkE7QUFHZFIsV0FBY0EsTUFIQTtBQUlkUyxpQkFBY047QUFKQSxHQUFmO0FBTUEsU0FBTyxLQUFQO0FBQ0EsRUFWRDtBQVdBLEtBQUlPLFVBQVU3QixPQUFPLFNBQVAsRUFBa0JpQixXQUFsQixDQUE4QixJQUE5QixDQUFkO0FBQ0E7QUFDQSxLQUFJYSxNQUFNOUIsT0FBTytCLFFBQVAsRUFBaUJSLElBQWpCLENBQXNCLE1BQXRCLENBQVY7QUFDQSxLQUFJTyxJQUFJRSxPQUFKLENBQVksTUFBWixLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzlCO0FBQ0EsRUFGRCxNQUVPO0FBQ04sTUFBSUMsU0FBU0gsSUFBSUksS0FBSixDQUFVLE1BQVYsQ0FBYjtBQUNBLE1BQUlDLE9BQU8sTUFBTUYsT0FBT0EsT0FBTzFCLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FBakI7QUFDQSxNQUFJNkIsTUFBTXBDLE9BQU9tQyxJQUFQLENBQVY7QUFDQUUsYUFBVyxZQUFXO0FBQ3JCLE9BQUlDLE1BQU1GLElBQUlqQixNQUFKLEdBQWFvQixHQUFiLEdBQW1CVixPQUE3QixDQURxQixDQUNpQjtBQUN0QzdCLFVBQU8sWUFBUCxFQUFxQndDLE9BQXJCLENBQTZCO0FBQzVCQyxlQUFXSDtBQURpQixJQUE3QixFQUVHLElBRkgsRUFFUyxjQUZUO0FBR0EsR0FMRCxFQUtHLEdBTEg7QUFNQTtBQUNELENBNUNEOztBQThDQXRDLE9BQU9NLE1BQVAsRUFBZVksRUFBZixDQUFrQiwrQkFBbEIsRUFBbUQsWUFBVztBQUM3RDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBbEIsUUFBTyxXQUFQLEVBQW9CMEMsV0FBcEI7QUFDQTFDLFFBQU8sS0FBUCxFQUFjMEMsV0FBZCxDQUEwQixFQUFDQyxPQUFPLEtBQVIsRUFBMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQW5FRCxFOzs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDOzs7Ozs7O0FDcktEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUzs7QUFFcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkMsc0JBQXNCOztBQUVqRTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBLFNBQVM7QUFDVDs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsV0FBVztBQUNsQyxLQUFLO0FBQ0wsdUJBQXVCLFdBQVcsMkNBQTJDOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLElBQUk7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O0FDcFdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7OztBQ3RxQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOzs7Ozs7O0FDcFhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7O0FDaE1EO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU8sa0JBQWtCLGNBQWMsVUFBVSxZQUFZLGNBQWMsVUFBVSxnQkFBZ0I7QUFDekksdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlLE9BQU87O0FBRTlDO0FBQ0EsS0FBSyxPQUFPO0FBQ1osSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZCQUE2QjtBQUMxQzs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdEQUFxQyxvQkFBb0IsRUFBRTtBQUFBO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7O0FBRUEsQ0FBQzs7Ozs7OztBQ3ZnREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDc4NTk4ZjVkZGQ2ZGRiY2ZmYyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZ2xvYmFsLmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5yZXF1aXJlKCdqcXVlcnkuZWFzaW5nJyk7XG5yZXF1aXJlKCdqcXVlcnktc21vb3RoLXNjcm9sbCcpO1xucmVxdWlyZSgnanF1ZXJ5LmRvdGRvdGRvdCcpO1xucmVxdWlyZSgnanF1ZXJ5LW1hdGNoLWhlaWdodC1icm93c2VyaWZ5Jyk7XG5yZXF1aXJlKCdqcXVlcnkuYnJvd3NlcicpO1xucmVxdWlyZSgncGljdHVyZWZpbGwnKTtcbmNvbnN0IGlzTW9iaWxlID0gcmVxdWlyZSgnaXNtb2JpbGVqcycpO1xuXG5jb25zdCBzZWN0ID0gXCJzZWN0ISFcIjtcblxualF1ZXJ5LmV2ZW50LmFkZCh3aW5kb3csIFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBcdFRleHQgVHJ1bmNhdGlvblxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBpZiAoalF1ZXJ5KCcudHJ1bmNhdGlvbicpLmxlbmd0aCkge1xuICAgIGpRdWVyeSgnLnRydW5jYXRpb24nKS5kb3Rkb3Rkb3Qoe1xuICAgICAgd2F0Y2g6ICd3aW5kb3cnLFxuICAgICAgd3JhcDogJ2xldHRlcicsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXNUcnVuY2F0ZWQsIG9yZ0NvbnRlbnQpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKFwicmVhZHlcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdHNtb290aCBzY3JvbGxcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0dmFyIGggPSBwYXJzZUludChcIi1cIiArIGpRdWVyeShcIiNoZWFkZXJcIikub3V0ZXJIZWlnaHQodHJ1ZSkpO1xuXHRqUXVlcnkoXCJhW2hyZWZePScjJ11cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG9mZnNldCA9IChqUXVlcnkodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlVG9wXCIpKSA/IDAgOiBoO1xuXHRcdHZhciB0YXJnZXQgPSBqUXVlcnkodGhpcykuYXR0cihcImhyZWZcIik7XG5cdFx0JC5zbW9vdGhTY3JvbGwoe1xuXHRcdFx0ZWFzaW5nICAgICAgOiBcImVhc2VPdXRRdWludFwiLFxuXHRcdFx0c3BlZWQgICAgICAgOiA4MDAsXG5cdFx0XHRvZmZzZXQgICAgICA6IG9mZnNldCxcblx0XHRcdHNjcm9sbFRhcmdldDogdGFyZ2V0XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblx0dmFyIGhlYWRlckggPSBqUXVlcnkoXCIjaGVhZGVyXCIpLm91dGVySGVpZ2h0KHRydWUpO1xuXHQvL1x05aSW6YOo44GL44KJ44Oa44O844K444Oq44Oz44Kv44Gn6aOb44KT44Gn44GN44Gf5aC05ZCIXG5cdHZhciB1cmwgPSBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnKTtcblx0aWYgKHVybC5pbmRleE9mKFwiP2lkPVwiKSA9PSAtMSkge1xuXHRcdC8vXHREbyBOb3Rpbmdcblx0fSBlbHNlIHtcblx0XHR2YXIgdXJsX3NwID0gdXJsLnNwbGl0KFwiP2lkPVwiKTtcblx0XHR2YXIgaGFzaCA9ICcjJyArIHVybF9zcFt1cmxfc3AubGVuZ3RoIC0gMV07XG5cdFx0dmFyIHRndCA9IGpRdWVyeShoYXNoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBvcyA9IHRndC5vZmZzZXQoKS50b3AgLSBoZWFkZXJIOyAvL1x0aGVhZGVySCDjgafjgqrjg5Xjgrvjg4Pjg4jliIbjgpLlvJXjgY9cblx0XHRcdGpRdWVyeShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcDogcG9zXG5cdFx0XHR9LCAxMDAwLCBcImVhc2VPdXRRdWludFwiKTtcblx0XHR9LCAzMDApO1xuXHR9XG59KTtcblxualF1ZXJ5KHdpbmRvdykub24oXCJsb2FkIG9yaWVudGF0aW9uY2hhbmdlIHJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdExhenlsb2FkXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cdC8vIC8vIENBU0U6IExlc3MgdGhhbiBFcXVhbCBcIklFOFwiXG5cdC8vIGlmICh0eXBlb2YgTGF6eUxvYWQgPT0gXCJmdW5jdGlvblwiKSB7XG5cdC8vIFx0bmV3IExhenlMb2FkKHtcblx0Ly8gXHRcdGRhdGFfc3JjICAgICAgICAgIDogXCJzcmNcIixcblx0Ly8gXHRcdGRhdGFfc3Jjc2V0ICAgICAgIDogXCJzcmNzZXRcIixcblx0Ly8gXHRcdHRocmVzaG9sZCAgICAgICAgIDogMjAwLFxuXHQvLyBcdFx0c2hvd193aGlsZV9sb2FkaW5nOiB0cnVlLFxuXHQvLyBcdFx0cGxhY2Vob2xkZXIgICAgICAgOiB0cnVlLFxuXHQvLyBcdFx0Y2FsbGJhY2tfc2V0ICAgICAgOiBmdW5jdGlvbihpbWcpIHtcblx0Ly8gXHRcdFx0cGljdHVyZWZpbGwoe1xuXHQvLyBcdFx0XHRcdGVsZW1lbnRzICA6IFtpbWddXG5cdC8vIFx0XHRcdH0pO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH0pO1xuXHQvLyB9IGVsc2UgaWYgKHR5cGVvZiBsYXp5U2l6ZXMgPT0gXCJvYmplY3RcIikge1xuXHQvLyBcdGxhenlTaXplcy5pbml0KCk7XG5cdC8vIH1cblx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFRyaW0gd29yZHNcdChTdXBwb3J0ZWQgTW9iaWxlLURldmljZSkgJiBTZXR0aW5nIHNhbWUgaGVpZ2h0IG9uIGNvbHVtblxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHQvLyBpZiAoalF1ZXJ5KCcudHJpbV9saW5lMScpLmxlbmd0aCkge1xuXHQvLyBcdGpRdWVyeSgnLnRyaW1fbGluZTEnKS50cnVuazgoe1xuXHQvLyBcdFx0dG9vbHRpcDogZmFsc2Vcblx0Ly8gXHR9KTtcblx0Ly8gfVxuXHQvLyBpZiAoalF1ZXJ5KCcudHJpbV9saW5lMicpLmxlbmd0aCkge1xuXHQvLyBcdGpRdWVyeSgnLnRyaW1fbGluZTInKS50cnVuazgoe1xuXHQvLyBcdFx0dG9vbHRpcDogZmFsc2UsXG5cdC8vIFx0XHRsaW5lczogMlxuXHQvLyBcdH0pO1xuXHQvLyB9XG5cdC8vIGlmIChqUXVlcnkoJy50cmltX2xpbmUzJykubGVuZ3RoKSB7XG5cdC8vIFx0alF1ZXJ5KCcudHJpbV9saW5lMycpLnRydW5rOCh7XG5cdC8vIFx0XHR0b29sdGlwOiBmYWxzZSxcblx0Ly8gXHRcdGxpbmVzOiAzXG5cdC8vIFx0fSk7XG5cdC8vIH1cblx0Ly8gaWYgKGpRdWVyeSgnLnRyaW1fbGluZTQnKS5sZW5ndGgpIHtcblx0Ly8gXHRqUXVlcnkoJy50cmltX2xpbmU0JykudHJ1bms4KHtcblx0Ly8gXHRcdHRvb2x0aXA6IGZhbHNlLFxuXHQvLyBcdFx0bGluZXM6IDRcblx0Ly8gXHR9KTtcblx0Ly8gfVxuXHQvLyBpZiAoalF1ZXJ5KCcudHJpbV9saW5lNScpLmxlbmd0aCkge1xuXHQvLyBcdGpRdWVyeSgnLnRyaW1fbGluZTUnKS50cnVuazgoe1xuXHQvLyBcdFx0dG9vbHRpcDogZmFsc2UsXG5cdC8vIFx0XHRsaW5lczogNVxuXHQvLyBcdH0pO1xuXHQvLyB9XG5cdC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRtYXRjaCBoZWlnaHQgKGpRdWVyeS5tYXRjaGhlaWdodC5qcylcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0alF1ZXJ5KFwiLm1oLWJ5cm93XCIpLm1hdGNoSGVpZ2h0KCk7XG5cdGpRdWVyeShcIi5taFwiKS5tYXRjaEhlaWdodCh7YnlSb3c6IGZhbHNlfSk7XG5cdC8vIOKWvFVTQUdFOlx0Q2FzZTogbXVsdGlwbGVcblx0Ly8gPHVsPlxuXHQvLyBcdDxsaSBkYXRhLW1oPVwiZ3JvdXAtMDFcIiBjbGFzcz1cIm1oXCI+TXkgdGV4dDwvbGk+XG5cdC8vIFx0PGxpIGRhdGEtbWg9XCJncm91cC0wMVwiIGNsYXNzPVwibWhcIj5NeSB0ZXh0PC9saT5cblx0Ly8gPC91bD5cblx0Ly8gPHVsPlxuXHQvLyBcdDxsaSBkYXRhLW1oPVwiZ3JvdXAtMDJcIiBjbGFzcz1cIm1oXCI+TXkgdGV4dDwvbGk+XG5cdC8vIFx0PGxpIGRhdGEtbWg9XCJncm91cC0wMlwiIGNsYXNzPVwibWhcIj5NeSB0ZXh0PC9saT5cblx0Ly8gPC91bD5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9zY3JpcHRzLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjQuMSAtIGh0dHA6Ly9nc2dkLmNvLnVrL3NhbmRib3gvanF1ZXJ5L2Vhc2luZy9cbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAqIENvcHlyaWdodCDCqSAyMDA4IEdlb3JnZSBNY0dpbmxleSBTbWl0aFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZ2RzbWl0aC9qcXVlcnktZWFzaW5nL21hc3Rlci9MSUNFTlNFXG4qL1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XG5cdFx0XHRyZXR1cm4gZmFjdG9yeSgkKTtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KGpRdWVyeSk7XG5cdH1cbn0pKGZ1bmN0aW9uKCQpe1xuXG4vLyBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgalF1ZXJ5IFwic3dpbmdcIiBlYXNpbmcgYXMgXCJqc3dpbmdcIlxuJC5lYXNpbmcuanN3aW5nID0gJC5lYXNpbmcuc3dpbmc7XG5cbnZhciBwb3cgPSBNYXRoLnBvdyxcblx0c3FydCA9IE1hdGguc3FydCxcblx0c2luID0gTWF0aC5zaW4sXG5cdGNvcyA9IE1hdGguY29zLFxuXHRQSSA9IE1hdGguUEksXG5cdGMxID0gMS43MDE1OCxcblx0YzIgPSBjMSAqIDEuNTI1LFxuXHRjMyA9IGMxICsgMSxcblx0YzQgPSAoIDIgKiBQSSApIC8gMyxcblx0YzUgPSAoIDIgKiBQSSApIC8gNC41O1xuXG4vLyB4IGlzIHRoZSBmcmFjdGlvbiBvZiBhbmltYXRpb24gcHJvZ3Jlc3MsIGluIHRoZSByYW5nZSAwLi4xXG5mdW5jdGlvbiBib3VuY2VPdXQoeCkge1xuXHR2YXIgbjEgPSA3LjU2MjUsXG5cdFx0ZDEgPSAyLjc1O1xuXHRpZiAoIHggPCAxL2QxICkge1xuXHRcdHJldHVybiBuMSp4Kng7XG5cdH0gZWxzZSBpZiAoIHggPCAyL2QxICkge1xuXHRcdHJldHVybiBuMSooeC09KDEuNS9kMSkpKnggKyAwLjc1O1xuXHR9IGVsc2UgaWYgKCB4IDwgMi41L2QxICkge1xuXHRcdHJldHVybiBuMSooeC09KDIuMjUvZDEpKSp4ICsgMC45Mzc1O1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBuMSooeC09KDIuNjI1L2QxKSkqeCArIDAuOTg0Mzc1O1xuXHR9XG59XG5cbiQuZXh0ZW5kKCAkLmVhc2luZyxcbntcblx0ZGVmOiAnZWFzZU91dFF1YWQnLFxuXHRzd2luZzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmdbJC5lYXNpbmcuZGVmXSh4KTtcblx0fSxcblx0ZWFzZUluUXVhZDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCAqIHg7XG5cdH0sXG5cdGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxIC0gKCAxIC0geCApICogKCAxIC0geCApO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDIgKiB4ICogeCA6XG5cdFx0XHQxIC0gcG93KCAtMiAqIHggKyAyLCAyICkgLyAyO1xuXHR9LFxuXHRlYXNlSW5DdWJpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCAqIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCAzICk7XG5cdH0sXG5cdGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDQgKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgMyApIC8gMjtcblx0fSxcblx0ZWFzZUluUXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4ICogeCAqIHg7XG5cdH0sXG5cdGVhc2VPdXRRdWFydDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIHBvdyggMSAtIHgsIDQgKTtcblx0fSxcblx0ZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPCAwLjUgP1xuXHRcdFx0OCAqIHggKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgNCApIC8gMjtcblx0fSxcblx0ZWFzZUluUXVpbnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4ICogeCAqIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCA1ICk7XG5cdH0sXG5cdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDE2ICogeCAqIHggKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgNSApIC8gMjtcblx0fSxcblx0ZWFzZUluU2luZTogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIGNvcyggeCAqIFBJLzIgKTtcblx0fSxcblx0ZWFzZU91dFNpbmU6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHNpbiggeCAqIFBJLzIgKTtcblx0fSxcblx0ZWFzZUluT3V0U2luZTogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gLSggY29zKCBQSSAqIHggKSAtIDEgKSAvIDI7XG5cdH0sXG5cdGVhc2VJbkV4cG86IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogcG93KCAyLCAxMCAqIHggLSAxMCApO1xuXHR9LFxuXHRlYXNlT3V0RXhwbzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMSA/IDEgOiAxIC0gcG93KCAyLCAtMTAgKiB4ICk7XG5cdH0sXG5cdGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID9cblx0XHRcdHBvdyggMiwgMjAgKiB4IC0gMTAgKSAvIDIgOlxuXHRcdFx0KCAyIC0gcG93KCAyLCAtMjAgKiB4ICsgMTAgKSApIC8gMjtcblx0fSxcblx0ZWFzZUluQ2lyYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIHNxcnQoIDEgLSBwb3coIHgsIDIgKSApO1xuXHR9LFxuXHRlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gc3FydCggMSAtIHBvdyggeCAtIDEsIDIgKSApO1xuXHR9LFxuXHRlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggMSAtIHNxcnQoIDEgLSBwb3coIDIgKiB4LCAyICkgKSApIC8gMiA6XG5cdFx0XHQoIHNxcnQoIDEgLSBwb3coIC0yICogeCArIDIsIDIgKSApICsgMSApIC8gMjtcblx0fSxcblx0ZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6XG5cdFx0XHQtcG93KCAyLCAxMCAqIHggLSAxMCApICogc2luKCAoIHggKiAxMCAtIDEwLjc1ICkgKiBjNCApO1xuXHR9LFxuXHRlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6XG5cdFx0XHRwb3coIDIsIC0xMCAqIHggKSAqIHNpbiggKCB4ICogMTAgLSAwLjc1ICkgKiBjNCApICsgMTtcblx0fSxcblx0ZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgP1xuXHRcdFx0LSggcG93KCAyLCAyMCAqIHggLSAxMCApICogc2luKCAoIDIwICogeCAtIDExLjEyNSApICogYzUgKSkgLyAyIDpcblx0XHRcdHBvdyggMiwgLTIwICogeCArIDEwICkgKiBzaW4oICggMjAgKiB4IC0gMTEuMTI1ICkgKiBjNSApIC8gMiArIDE7XG5cdH0sXG5cdGVhc2VJbkJhY2s6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIGMzICogeCAqIHggKiB4IC0gYzEgKiB4ICogeDtcblx0fSxcblx0ZWFzZU91dEJhY2s6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgKyBjMyAqIHBvdyggeCAtIDEsIDMgKSArIGMxICogcG93KCB4IC0gMSwgMiApO1xuXHR9LFxuXHRlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggcG93KCAyICogeCwgMiApICogKCAoIGMyICsgMSApICogMiAqIHggLSBjMiApICkgLyAyIDpcblx0XHRcdCggcG93KCAyICogeCAtIDIsIDIgKSAqKCAoIGMyICsgMSApICogKCB4ICogMiAtIDIgKSArIGMyICkgKyAyICkgLyAyO1xuXHR9LFxuXHRlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBib3VuY2VPdXQoIDEgLSB4ICk7XG5cdH0sXG5cdGVhc2VPdXRCb3VuY2U6IGJvdW5jZU91dCxcblx0ZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggMSAtIGJvdW5jZU91dCggMSAtIDIgKiB4ICkgKSAvIDIgOlxuXHRcdFx0KCAxICsgYm91bmNlT3V0KCAyICogeCAtIDEgKSApIC8gMjtcblx0fVxufSk7XG5cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LmVhc2luZy9qcXVlcnkuZWFzaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFNtb290aCBTY3JvbGwgLSB2Mi4yLjAgLSAyMDE3LTA1LTA1XG4gKiBodHRwczovL2dpdGh1Yi5jb20va3N3ZWRiZXJnL2pxdWVyeS1zbW9vdGgtc2Nyb2xsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTd2VkYmVyZ1xuICogTGljZW5zZWQgTUlUXG4gKi9cblxuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufShmdW5jdGlvbigkKSB7XG5cbiAgdmFyIHZlcnNpb24gPSAnMi4yLjAnO1xuICB2YXIgb3B0aW9uT3ZlcnJpZGVzID0ge307XG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBleGNsdWRlOiBbXSxcbiAgICBleGNsdWRlV2l0aGluOiBbXSxcbiAgICBvZmZzZXQ6IDAsXG5cbiAgICAvLyBvbmUgb2YgJ3RvcCcgb3IgJ2xlZnQnXG4gICAgZGlyZWN0aW9uOiAndG9wJyxcblxuICAgIC8vIGlmIHNldCwgYmluZCBjbGljayBldmVudHMgdGhyb3VnaCBkZWxlZ2F0aW9uXG4gICAgLy8gIHN1cHBvcnRlZCBzaW5jZSBqUXVlcnkgMS40LjJcbiAgICBkZWxlZ2F0ZVNlbGVjdG9yOiBudWxsLFxuXG4gICAgLy8galF1ZXJ5IHNldCBvZiBlbGVtZW50cyB5b3Ugd2lzaCB0byBzY3JvbGwgKGZvciAkLnNtb290aFNjcm9sbCkuXG4gICAgLy8gIGlmIG51bGwgKGRlZmF1bHQpLCAkKCdodG1sLCBib2R5JykuZmlyc3RTY3JvbGxhYmxlKCkgaXMgdXNlZC5cbiAgICBzY3JvbGxFbGVtZW50OiBudWxsLFxuXG4gICAgLy8gb25seSB1c2UgaWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBiZWhhdmlvclxuICAgIHNjcm9sbFRhcmdldDogbnVsbCxcblxuICAgIC8vIGF1dG9tYXRpY2FsbHkgZm9jdXMgdGhlIHRhcmdldCBlbGVtZW50IGFmdGVyIHNjcm9sbGluZyB0byBpdFxuICAgIGF1dG9Gb2N1czogZmFsc2UsXG5cbiAgICAvLyBmbihvcHRzKSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIHNjcm9sbGluZyBvY2N1cnMuXG4gICAgLy8gYHRoaXNgIGlzIHRoZSBlbGVtZW50KHMpIGJlaW5nIHNjcm9sbGVkXG4gICAgYmVmb3JlU2Nyb2xsOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgLy8gZm4ob3B0cykgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIHNjcm9sbGluZyBvY2N1cnMuXG4gICAgLy8gYHRoaXNgIGlzIHRoZSB0cmlnZ2VyaW5nIGVsZW1lbnRcbiAgICBhZnRlclNjcm9sbDogZnVuY3Rpb24oKSB7fSxcblxuICAgIC8vIGVhc2luZyBuYW1lLiBqUXVlcnkgY29tZXMgd2l0aCBcInN3aW5nXCIgYW5kIFwibGluZWFyLlwiIEZvciBvdGhlcnMsIHlvdSdsbCBuZWVkIGFuIGVhc2luZyBwbHVnaW5cbiAgICAvLyBmcm9tIGpRdWVyeSBVSSBvciBlbHNld2hlcmVcbiAgICBlYXNpbmc6ICdzd2luZycsXG5cbiAgICAvLyBzcGVlZCBjYW4gYmUgYSBudW1iZXIgb3IgJ2F1dG8nXG4gICAgLy8gaWYgJ2F1dG8nLCB0aGUgc3BlZWQgd2lsbCBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBmb3JtdWxhOlxuICAgIC8vIChjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAtIHRhcmdldCBzY3JvbGwgcG9zaXRpb24pIC8gYXV0b0NvZWZmaWNcbiAgICBzcGVlZDogNDAwLFxuXG4gICAgLy8gY29lZmZpY2llbnQgZm9yIFwiYXV0b1wiIHNwZWVkXG4gICAgYXV0b0NvZWZmaWNpZW50OiAyLFxuXG4gICAgLy8gJC5mbi5zbW9vdGhTY3JvbGwgb25seTogd2hldGhlciB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGNsaWNrIGFjdGlvblxuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH07XG5cbiAgdmFyIGdldFNjcm9sbGFibGUgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgdmFyIHNjcm9sbGFibGUgPSBbXTtcbiAgICB2YXIgc2Nyb2xsZWQgPSBmYWxzZTtcbiAgICB2YXIgZGlyID0gb3B0cy5kaXIgJiYgb3B0cy5kaXIgPT09ICdsZWZ0JyA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMgPT09IGRvY3VtZW50IHx8IHRoaXMgPT09IHdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50ICYmICh0aGlzID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGhpcyA9PT0gZG9jdW1lbnQuYm9keSkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZS5wdXNoKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsW2Rpcl0oKSA+IDApIHtcbiAgICAgICAgc2Nyb2xsYWJsZS5wdXNoKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgc2Nyb2xsKFRvcHxMZWZ0KSA9PT0gMCwgbnVkZ2UgdGhlIGVsZW1lbnQgMXB4IGFuZCBzZWUgaWYgaXQgbW92ZXNcbiAgICAgICAgZWxbZGlyXSgxKTtcbiAgICAgICAgc2Nyb2xsZWQgPSBlbFtkaXJdKCkgPiAwO1xuXG4gICAgICAgIGlmIChzY3JvbGxlZCkge1xuICAgICAgICAgIHNjcm9sbGFibGUucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGVuIHB1dCBpdCBiYWNrLCBvZiBjb3Vyc2VcbiAgICAgICAgZWxbZGlyXSgwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghc2Nyb2xsYWJsZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSWYgbm8gc2Nyb2xsYWJsZSBlbGVtZW50cyBhbmQgPGh0bWw+IGhhcyBzY3JvbGwtYmVoYXZpb3I6c21vb3RoIGJlY2F1c2VcbiAgICAgICAgLy8gXCJXaGVuIHRoaXMgcHJvcGVydHkgaXMgc3BlY2lmaWVkIG9uIHRoZSByb290IGVsZW1lbnQsIGl0IGFwcGxpZXMgdG8gdGhlIHZpZXdwb3J0IGluc3RlYWQuXCJcbiAgICAgICAgLy8gYW5kIFwiVGhlIHNjcm9sbC1iZWhhdmlvciBwcm9wZXJ0eSBvZiB0aGUg4oCmIGJvZHkgZWxlbWVudCBpcyAqbm90KiBwcm9wYWdhdGVkIHRvIHRoZSB2aWV3cG9ydC5cIlxuICAgICAgICAvLyDihpIgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLXZpZXcvI3Byb3BkZWYtc2Nyb2xsLWJlaGF2aW9yXG4gICAgICAgIGlmICh0aGlzID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJCh0aGlzKS5jc3MoJ3Njcm9sbEJlaGF2aW9yJykgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgICAgc2Nyb2xsYWJsZSA9IFt0aGlzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHN0aWxsIG5vIHNjcm9sbGFibGUgZWxlbWVudHMsIGZhbGwgYmFjayB0byA8Ym9keT4sXG4gICAgICAgIC8vIGlmIGl0J3MgaW4gdGhlIGpRdWVyeSBjb2xsZWN0aW9uXG4gICAgICAgIC8vIChkb2luZyB0aGlzIGJlY2F1c2UgU2FmYXJpIHNldHMgc2Nyb2xsVG9wIGFzeW5jLFxuICAgICAgICAvLyBzbyBjYW4ndCBzZXQgaXQgdG8gMSBhbmQgaW1tZWRpYXRlbHkgZ2V0IHRoZSB2YWx1ZS4pXG4gICAgICAgIGlmICghc2Nyb2xsYWJsZS5sZW5ndGggJiYgdGhpcy5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgc2Nyb2xsYWJsZSA9IFt0aGlzXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSBmaXJzdCBzY3JvbGxhYmxlIGVsZW1lbnQgaWYgd2UncmUgY2FsbGluZyBmaXJzdFNjcm9sbGFibGUoKVxuICAgIGlmIChvcHRzLmVsID09PSAnZmlyc3QnICYmIHNjcm9sbGFibGUubGVuZ3RoID4gMSkge1xuICAgICAgc2Nyb2xsYWJsZSA9IFtzY3JvbGxhYmxlWzBdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsYWJsZTtcbiAgfTtcblxuICB2YXIgclJlbGF0aXZlID0gL14oW1xcLVxcK109KShcXGQrKS87XG5cbiAgJC5mbi5leHRlbmQoe1xuICAgIHNjcm9sbGFibGU6IGZ1bmN0aW9uKGRpcikge1xuICAgICAgdmFyIHNjcmwgPSBnZXRTY3JvbGxhYmxlLmNhbGwodGhpcywge2RpcjogZGlyfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhzY3JsKTtcbiAgICB9LFxuICAgIGZpcnN0U2Nyb2xsYWJsZTogZnVuY3Rpb24oZGlyKSB7XG4gICAgICB2YXIgc2NybCA9IGdldFNjcm9sbGFibGUuY2FsbCh0aGlzLCB7ZWw6ICdmaXJzdCcsIGRpcjogZGlyfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhzY3JsKTtcbiAgICB9LFxuXG4gICAgc21vb3RoU2Nyb2xsOiBmdW5jdGlvbihvcHRpb25zLCBleHRyYSkge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmIChvcHRpb25zID09PSAnb3B0aW9ucycpIHtcbiAgICAgICAgaWYgKCFleHRyYSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0KCkuZGF0YSgnc3NPcHRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIG9wdHMgPSAkLmV4dGVuZCgkdGhpcy5kYXRhKCdzc09wdHMnKSB8fCB7fSwgZXh0cmEpO1xuXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCdzc09wdHMnLCBvcHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRzID0gJC5leHRlbmQoe30sICQuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgdmFyIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBlc2NhcGVTZWxlY3RvciA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKDp8XFwufFxcLykvZywgJ1xcXFwkMScpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBsaW5rID0gdGhpcztcbiAgICAgICAgdmFyICRsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHRoaXNPcHRzID0gJC5leHRlbmQoe30sIG9wdHMsICRsaW5rLmRhdGEoJ3NzT3B0cycpIHx8IHt9KTtcbiAgICAgICAgdmFyIGV4Y2x1ZGUgPSBvcHRzLmV4Y2x1ZGU7XG4gICAgICAgIHZhciBleGNsdWRlV2l0aGluID0gdGhpc09wdHMuZXhjbHVkZVdpdGhpbjtcbiAgICAgICAgdmFyIGVsQ291bnRlciA9IDA7XG4gICAgICAgIHZhciBld2xDb3VudGVyID0gMDtcbiAgICAgICAgdmFyIGluY2x1ZGUgPSB0cnVlO1xuICAgICAgICB2YXIgY2xpY2tPcHRzID0ge307XG4gICAgICAgIHZhciBsb2NhdGlvblBhdGggPSAkLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgdmFyIGxpbmtQYXRoID0gJC5zbW9vdGhTY3JvbGwuZmlsdGVyUGF0aChsaW5rLnBhdGhuYW1lKTtcbiAgICAgICAgdmFyIGhvc3RNYXRjaCA9IGxvY2F0aW9uLmhvc3RuYW1lID09PSBsaW5rLmhvc3RuYW1lIHx8ICFsaW5rLmhvc3RuYW1lO1xuICAgICAgICB2YXIgcGF0aE1hdGNoID0gdGhpc09wdHMuc2Nyb2xsVGFyZ2V0IHx8IChsaW5rUGF0aCA9PT0gbG9jYXRpb25QYXRoKTtcbiAgICAgICAgdmFyIHRoaXNIYXNoID0gZXNjYXBlU2VsZWN0b3IobGluay5oYXNoKTtcblxuICAgICAgICBpZiAodGhpc0hhc2ggJiYgISQodGhpc0hhc2gpLmxlbmd0aCkge1xuICAgICAgICAgIGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpc09wdHMuc2Nyb2xsVGFyZ2V0ICYmICghaG9zdE1hdGNoIHx8ICFwYXRoTWF0Y2ggfHwgIXRoaXNIYXNoKSkge1xuICAgICAgICAgIGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGlsZSAoaW5jbHVkZSAmJiBlbENvdW50ZXIgPCBleGNsdWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCRsaW5rLmlzKGVzY2FwZVNlbGVjdG9yKGV4Y2x1ZGVbZWxDb3VudGVyKytdKSkpIHtcbiAgICAgICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdoaWxlIChpbmNsdWRlICYmIGV3bENvdW50ZXIgPCBleGNsdWRlV2l0aGluLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCRsaW5rLmNsb3Nlc3QoZXhjbHVkZVdpdGhpbltld2xDb3VudGVyKytdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlKSB7XG4gICAgICAgICAgaWYgKHRoaXNPcHRzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICQuZXh0ZW5kKGNsaWNrT3B0cywgdGhpc09wdHMsIHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpc09wdHMuc2Nyb2xsVGFyZ2V0IHx8IHRoaXNIYXNoLFxuICAgICAgICAgICAgbGluazogbGlua1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJC5zbW9vdGhTY3JvbGwoY2xpY2tPcHRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdGlvbnMuZGVsZWdhdGVTZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzXG4gICAgICAgIC5vZmYoJ2NsaWNrLnNtb290aHNjcm9sbCcsIG9wdGlvbnMuZGVsZWdhdGVTZWxlY3RvcilcbiAgICAgICAgLm9uKCdjbGljay5zbW9vdGhzY3JvbGwnLCBvcHRpb25zLmRlbGVnYXRlU2VsZWN0b3IsIGNsaWNrSGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzXG4gICAgICAgIC5vZmYoJ2NsaWNrLnNtb290aHNjcm9sbCcpXG4gICAgICAgIC5vbignY2xpY2suc21vb3Roc2Nyb2xsJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2V0RXhwbGljaXRPZmZzZXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgZXhwbGljaXQgPSB7cmVsYXRpdmU6ICcnfTtcbiAgICB2YXIgcGFydHMgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiByUmVsYXRpdmUuZXhlYyh2YWwpO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBleHBsaWNpdC5weCA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKHBhcnRzKSB7XG4gICAgICBleHBsaWNpdC5yZWxhdGl2ZSA9IHBhcnRzWzFdO1xuICAgICAgZXhwbGljaXQucHggPSBwYXJzZUZsb2F0KHBhcnRzWzJdKSB8fCAwO1xuICAgIH1cblxuICAgIHJldHVybiBleHBsaWNpdDtcbiAgfTtcblxuICB2YXIgb25BZnRlclNjcm9sbCA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICB2YXIgJHRndCA9ICQob3B0cy5zY3JvbGxUYXJnZXQpO1xuXG4gICAgaWYgKG9wdHMuYXV0b0ZvY3VzICYmICR0Z3QubGVuZ3RoKSB7XG4gICAgICAkdGd0WzBdLmZvY3VzKCk7XG5cbiAgICAgIGlmICghJHRndC5pcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAkdGd0LnByb3Aoe3RhYkluZGV4OiAtMX0pO1xuICAgICAgICAkdGd0WzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0cy5hZnRlclNjcm9sbC5jYWxsKG9wdHMubGluaywgb3B0cyk7XG4gIH07XG5cbiAgJC5zbW9vdGhTY3JvbGwgPSBmdW5jdGlvbihvcHRpb25zLCBweCkge1xuICAgIGlmIChvcHRpb25zID09PSAnb3B0aW9ucycgJiYgdHlwZW9mIHB4ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICQuZXh0ZW5kKG9wdGlvbk92ZXJyaWRlcywgcHgpO1xuICAgIH1cbiAgICB2YXIgb3B0cywgJHNjcm9sbGVyLCBzcGVlZCwgZGVsdGE7XG4gICAgdmFyIGV4cGxpY2l0T2Zmc2V0ID0gZ2V0RXhwbGljaXRPZmZzZXQob3B0aW9ucyk7XG4gICAgdmFyIHNjcm9sbFRhcmdldE9mZnNldCA9IHt9O1xuICAgIHZhciBzY3JvbGxlck9mZnNldCA9IDA7XG4gICAgdmFyIG9mZlBvcyA9ICdvZmZzZXQnO1xuICAgIHZhciBzY3JvbGxEaXIgPSAnc2Nyb2xsVG9wJztcbiAgICB2YXIgYW5pUHJvcHMgPSB7fTtcbiAgICB2YXIgYW5pT3B0cyA9IHt9O1xuXG4gICAgaWYgKGV4cGxpY2l0T2Zmc2V0LnB4KSB7XG4gICAgICBvcHRzID0gJC5leHRlbmQoe2xpbms6IG51bGx9LCAkLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cywgb3B0aW9uT3ZlcnJpZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cyA9ICQuZXh0ZW5kKHtsaW5rOiBudWxsfSwgJC5mbi5zbW9vdGhTY3JvbGwuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30sIG9wdGlvbk92ZXJyaWRlcyk7XG5cbiAgICAgIGlmIChvcHRzLnNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgb2ZmUG9zID0gJ3Bvc2l0aW9uJztcblxuICAgICAgICBpZiAob3B0cy5zY3JvbGxFbGVtZW50LmNzcygncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBvcHRzLnNjcm9sbEVsZW1lbnQuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChweCkge1xuICAgICAgICBleHBsaWNpdE9mZnNldCA9IGdldEV4cGxpY2l0T2Zmc2V0KHB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxEaXIgPSBvcHRzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3Njcm9sbExlZnQnIDogc2Nyb2xsRGlyO1xuXG4gICAgaWYgKG9wdHMuc2Nyb2xsRWxlbWVudCkge1xuICAgICAgJHNjcm9sbGVyID0gb3B0cy5zY3JvbGxFbGVtZW50O1xuXG4gICAgICBpZiAoIWV4cGxpY2l0T2Zmc2V0LnB4ICYmICEoL14oPzpIVE1MfEJPRFkpJC8pLnRlc3QoJHNjcm9sbGVyWzBdLm5vZGVOYW1lKSkge1xuICAgICAgICBzY3JvbGxlck9mZnNldCA9ICRzY3JvbGxlcltzY3JvbGxEaXJdKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY3JvbGxlciA9ICQoJ2h0bWwsIGJvZHknKS5maXJzdFNjcm9sbGFibGUob3B0cy5kaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZVNjcm9sbCBjYWxsYmFjayBmdW5jdGlvbiBtdXN0IGZpcmUgYmVmb3JlIGNhbGN1bGF0aW5nIG9mZnNldFxuICAgIG9wdHMuYmVmb3JlU2Nyb2xsLmNhbGwoJHNjcm9sbGVyLCBvcHRzKTtcblxuICAgIHNjcm9sbFRhcmdldE9mZnNldCA9IGV4cGxpY2l0T2Zmc2V0LnB4ID8gZXhwbGljaXRPZmZzZXQgOiB7XG4gICAgICByZWxhdGl2ZTogJycsXG4gICAgICBweDogKCQob3B0cy5zY3JvbGxUYXJnZXQpW29mZlBvc10oKSAmJiAkKG9wdHMuc2Nyb2xsVGFyZ2V0KVtvZmZQb3NdKClbb3B0cy5kaXJlY3Rpb25dKSB8fCAwXG4gICAgfTtcblxuICAgIGFuaVByb3BzW3Njcm9sbERpcl0gPSBzY3JvbGxUYXJnZXRPZmZzZXQucmVsYXRpdmUgKyAoc2Nyb2xsVGFyZ2V0T2Zmc2V0LnB4ICsgc2Nyb2xsZXJPZmZzZXQgKyBvcHRzLm9mZnNldCk7XG5cbiAgICBzcGVlZCA9IG9wdHMuc3BlZWQ7XG5cbiAgICAvLyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0aGUgc3BlZWQgb2YgdGhlIHNjcm9sbCBiYXNlZCBvbiBkaXN0YW5jZSAvIGNvZWZmaWNpZW50XG4gICAgaWYgKHNwZWVkID09PSAnYXV0bycpIHtcblxuICAgICAgLy8gJHNjcm9sbGVyW3Njcm9sbERpcl0oKSBpcyBwb3NpdGlvbiBiZWZvcmUgc2Nyb2xsLCBhbmlQcm9wc1tzY3JvbGxEaXJdIGlzIHBvc2l0aW9uIGFmdGVyXG4gICAgICAvLyBXaGVuIGRlbHRhIGlzIGdyZWF0ZXIsIHNwZWVkIHdpbGwgYmUgZ3JlYXRlci5cbiAgICAgIGRlbHRhID0gTWF0aC5hYnMoYW5pUHJvcHNbc2Nyb2xsRGlyXSAtICRzY3JvbGxlcltzY3JvbGxEaXJdKCkpO1xuXG4gICAgICAvLyBEaXZpZGUgdGhlIGRlbHRhIGJ5IHRoZSBjb2VmZmljaWVudFxuICAgICAgc3BlZWQgPSBkZWx0YSAvIG9wdHMuYXV0b0NvZWZmaWNpZW50O1xuICAgIH1cblxuICAgIGFuaU9wdHMgPSB7XG4gICAgICBkdXJhdGlvbjogc3BlZWQsXG4gICAgICBlYXNpbmc6IG9wdHMuZWFzaW5nLFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBvbkFmdGVyU2Nyb2xsKG9wdHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0cy5zdGVwKSB7XG4gICAgICBhbmlPcHRzLnN0ZXAgPSBvcHRzLnN0ZXA7XG4gICAgfVxuXG4gICAgaWYgKCRzY3JvbGxlci5sZW5ndGgpIHtcbiAgICAgICRzY3JvbGxlci5zdG9wKCkuYW5pbWF0ZShhbmlQcm9wcywgYW5pT3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWZ0ZXJTY3JvbGwob3B0cyk7XG4gICAgfVxuICB9O1xuXG4gICQuc21vb3RoU2Nyb2xsLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAkLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nIHx8ICcnO1xuXG4gICAgcmV0dXJuIHN0cmluZ1xuICAgICAgLnJlcGxhY2UoL15cXC8vLCAnJylcbiAgICAgIC5yZXBsYWNlKC8oPzppbmRleHxkZWZhdWx0KS5bYS16QS1aXXszLDR9JC8sICcnKVxuICAgICAgLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gIH07XG5cbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICQuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzID0gZGVmYXVsdHM7XG5cbn0pKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXNtb290aC1zY3JvbGwvanF1ZXJ5LnNtb290aC1zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICpcdGpRdWVyeSBkb3Rkb3Rkb3QgMS43LjRcclxuICpcclxuICpcdENvcHlyaWdodCAoYykgRnJlZCBIZXVzc2NoZW5cclxuICpcdHd3dy5mcmVic2l0ZS5ubFxyXG4gKlxyXG4gKlx0UGx1Z2luIHdlYnNpdGU6XHJcbiAqXHRkb3Rkb3Rkb3QuZnJlYnNpdGUubmxcclxuICpcclxuICpcdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICpcdGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2VcclxuICovXHJcblxyXG4oZnVuY3Rpb24oICQsIHVuZGVmIClcclxue1xyXG5cdGlmICggJC5mbi5kb3Rkb3Rkb3QgKVxyXG5cdHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdCQuZm4uZG90ZG90ZG90ID0gZnVuY3Rpb24oIG8gKVxyXG5cdHtcclxuXHRcdGlmICggdGhpcy5sZW5ndGggPT0gMCApXHJcblx0XHR7XHJcblx0XHRcdCQuZm4uZG90ZG90ZG90LmRlYnVnKCAnTm8gZWxlbWVudCBmb3VuZCBmb3IgXCInICsgdGhpcy5zZWxlY3RvciArICdcIi4nICk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKFxyXG5cdFx0XHRcdGZ1bmN0aW9uKClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmRvdGRvdGRvdCggbyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dmFyICRkb3QgPSB0aGlzO1xyXG5cdFx0dmFyIG9yZ0NvbnRlbnRcdD0gJGRvdC5jb250ZW50cygpO1xyXG5cclxuXHRcdGlmICggJGRvdC5kYXRhKCAnZG90ZG90ZG90JyApIClcclxuXHRcdHtcclxuXHRcdFx0JGRvdC50cmlnZ2VyKCAnZGVzdHJveS5kb3QnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0JGRvdC5kYXRhKCAnZG90ZG90ZG90LXN0eWxlJywgJGRvdC5hdHRyKCAnc3R5bGUnICkgfHwgJycgKTtcclxuXHRcdCRkb3QuY3NzKCAnd29yZC13cmFwJywgJ2JyZWFrLXdvcmQnICk7XHJcblx0XHRpZiAoJGRvdC5jc3MoICd3aGl0ZS1zcGFjZScgKSA9PT0gJ25vd3JhcCcpXHJcblx0XHR7XHJcblx0XHRcdCRkb3QuY3NzKCAnd2hpdGUtc3BhY2UnLCAnbm9ybWFsJyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRkb3QuYmluZF9ldmVudHMgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdCRkb3QuYmluZChcclxuXHRcdFx0XHQndXBkYXRlLmRvdCcsXHJcblx0XHRcdFx0ZnVuY3Rpb24oIGUsIGMgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCRkb3QucmVtb3ZlQ2xhc3MoXCJpcy10cnVuY2F0ZWRcIik7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCggdHlwZW9mIG9wdHMuaGVpZ2h0IClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0XHRcdFx0XHRvcHRzLm1heEhlaWdodCA9IG9wdHMuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxyXG5cdFx0XHRcdFx0XHRcdG9wdHMubWF4SGVpZ2h0ID0gb3B0cy5oZWlnaHQuY2FsbCggJGRvdFsgMCBdICk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdG9wdHMubWF4SGVpZ2h0ID0gZ2V0VHJ1ZUlubmVySGVpZ2h0KCAkZG90ICk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0b3B0cy5tYXhIZWlnaHQgKz0gb3B0cy50b2xlcmFuY2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgYyAhPSAndW5kZWZpbmVkJyApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmICggdHlwZW9mIGMgPT0gJ3N0cmluZycgfHwgKCdub2RlVHlwZScgaW4gYyAmJiBjLm5vZGVUeXBlID09PSAxKSApXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCBcdFx0YyA9ICQoJzxkaXYgLz4nKS5hcHBlbmQoIGMgKS5jb250ZW50cygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmICggYyBpbnN0YW5jZW9mICQgKVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0b3JnQ29udGVudCA9IGM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQkaW5yID0gJGRvdC53cmFwSW5uZXIoICc8ZGl2IGNsYXNzPVwiZG90ZG90ZG90XCIgLz4nICkuY2hpbGRyZW4oKTtcclxuXHRcdFx0XHRcdCRpbnIuY29udGVudHMoKVxyXG5cdFx0XHRcdFx0XHQuZGV0YWNoKClcclxuXHRcdFx0XHRcdFx0LmVuZCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoIG9yZ0NvbnRlbnQuY2xvbmUoIHRydWUgKSApXHJcblx0XHRcdFx0XHRcdC5maW5kKCAnYnInIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2VXaXRoKCAnICA8YnIgLz4gICcgKVxyXG5cdFx0XHRcdFx0XHQuZW5kKClcclxuXHRcdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0J2hlaWdodCdcdDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdCd3aWR0aCdcdFx0OiAnYXV0bycsXHJcblx0XHRcdFx0XHRcdFx0J2JvcmRlcidcdDogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdCdwYWRkaW5nJ1x0OiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdtYXJnaW4nXHQ6IDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGFmdGVyID0gZmFsc2UsXHJcblx0XHRcdFx0XHRcdHRydW5jID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBjb25mLmFmdGVyRWxlbWVudCApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFmdGVyID0gY29uZi5hZnRlckVsZW1lbnQuY2xvbmUoIHRydWUgKTtcclxuXHRcdFx0XHRcdCAgICBhZnRlci5zaG93KCk7XHJcblx0XHRcdFx0XHRcdGNvbmYuYWZ0ZXJFbGVtZW50LmRldGFjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggdGVzdCggJGluciwgb3B0cyApIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCBvcHRzLndyYXAgPT0gJ2NoaWxkcmVuJyApXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0cnVuYyA9IGNoaWxkcmVuKCAkaW5yLCBvcHRzLCBhZnRlciApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRydW5jID0gZWxsaXBzaXMoICRpbnIsICRkb3QsICRpbnIsIG9wdHMsIGFmdGVyICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCRpbnIucmVwbGFjZVdpdGgoICRpbnIuY29udGVudHMoKSApO1xyXG5cdFx0XHRcdFx0JGluciA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oIG9wdHMuY2FsbGJhY2sgKSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9wdHMuY2FsbGJhY2suY2FsbCggJGRvdFsgMCBdLCB0cnVuYywgb3JnQ29udGVudCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbmYuaXNUcnVuY2F0ZWQgPSB0cnVuYztcclxuXHRcdFx0XHRcdHJldHVybiB0cnVuYztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLmJpbmQoXHJcblx0XHRcdFx0J2lzVHJ1bmNhdGVkLmRvdCcsXHJcblx0XHRcdFx0ZnVuY3Rpb24oIGUsIGZuIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZuID09ICdmdW5jdGlvbicgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRmbi5jYWxsKCAkZG90WyAwIF0sIGNvbmYuaXNUcnVuY2F0ZWQgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBjb25mLmlzVHJ1bmNhdGVkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkuYmluZChcclxuXHRcdFx0XHQnb3JpZ2luYWxDb250ZW50LmRvdCcsXHJcblx0XHRcdFx0ZnVuY3Rpb24oIGUsIGZuIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdHlwZW9mIGZuID09ICdmdW5jdGlvbicgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRmbi5jYWxsKCAkZG90WyAwIF0sIG9yZ0NvbnRlbnQgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBvcmdDb250ZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkuYmluZChcclxuXHRcdFx0XHQnZGVzdHJveS5kb3QnLFxyXG5cdFx0XHRcdGZ1bmN0aW9uKCBlIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdCRkb3QudW53YXRjaCgpXHJcblx0XHRcdFx0XHRcdC51bmJpbmRfZXZlbnRzKClcclxuXHRcdFx0XHRcdFx0LmNvbnRlbnRzKClcclxuXHRcdFx0XHRcdFx0LmRldGFjaCgpXHJcblx0XHRcdFx0XHRcdC5lbmQoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCBvcmdDb250ZW50IClcclxuXHRcdFx0XHRcdFx0LmF0dHIoICdzdHlsZScsICRkb3QuZGF0YSggJ2RvdGRvdGRvdC1zdHlsZScgKSB8fCAnJyApXHJcblx0XHRcdFx0XHRcdC5kYXRhKCAnZG90ZG90ZG90JywgZmFsc2UgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiAkZG90O1xyXG5cdFx0fTtcdC8vXHQvYmluZF9ldmVudHNcclxuXHJcblx0XHQkZG90LnVuYmluZF9ldmVudHMgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdCRkb3QudW5iaW5kKCcuZG90Jyk7XHJcblx0XHRcdHJldHVybiAkZG90O1xyXG5cdFx0fTtcdC8vXHQvdW5iaW5kX2V2ZW50c1xyXG5cclxuXHRcdCRkb3Qud2F0Y2ggPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdCRkb3QudW53YXRjaCgpO1xyXG5cdFx0XHRpZiAoIG9wdHMud2F0Y2ggPT0gJ3dpbmRvdycgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRcdFx0XHRfd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpLFxyXG5cdFx0XHRcdFx0X3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xyXG5cclxuXHRcdFx0XHQkd2luZG93LmJpbmQoXHJcblx0XHRcdFx0XHQncmVzaXplLmRvdCcgKyBjb25mLmRvdElkLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoIF93V2lkdGggIT0gJHdpbmRvdy53aWR0aCgpIHx8IF93SGVpZ2h0ICE9ICR3aW5kb3cuaGVpZ2h0KCkgfHwgIW9wdHMud2luZG93UmVzaXplRml4IClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdF93V2lkdGggPSAkd2luZG93LndpZHRoKCk7XHJcblx0XHRcdFx0XHRcdFx0X3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIHdhdGNoSW50IClcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKCB3YXRjaEludCApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR3YXRjaEludCA9IHNldFRpbWVvdXQoXHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigpXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRkb3QudHJpZ2dlciggJ3VwZGF0ZS5kb3QnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxMDBcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3YXRjaE9yZyA9IGdldFNpemVzKCAkZG90ICk7XHJcblx0XHRcdFx0d2F0Y2hJbnQgPSBzZXRJbnRlcnZhbChcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCAkZG90LmlzKCAnOnZpc2libGUnICkgKVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHdhdGNoTmV3ID0gZ2V0U2l6ZXMoICRkb3QgKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIHdhdGNoT3JnLndpZHRoICAhPSB3YXRjaE5ldy53aWR0aCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0IHdhdGNoT3JnLmhlaWdodCAhPSB3YXRjaE5ldy5oZWlnaHQgKVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCRkb3QudHJpZ2dlciggJ3VwZGF0ZS5kb3QnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR3YXRjaE9yZyA9IHdhdGNoTmV3O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgNTAwXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJGRvdDtcclxuXHRcdH07XHJcblx0XHQkZG90LnVud2F0Y2ggPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdCQod2luZG93KS51bmJpbmQoICdyZXNpemUuZG90JyArIGNvbmYuZG90SWQgKTtcclxuXHRcdFx0aWYgKCB3YXRjaEludCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKCB3YXRjaEludCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAkZG90O1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXJcdG9wdHMgXHRcdD0gJC5leHRlbmQoIHRydWUsIHt9LCAkLmZuLmRvdGRvdGRvdC5kZWZhdWx0cywgbyApLFxyXG5cdFx0XHRjb25mXHRcdD0ge30sXHJcblx0XHRcdHdhdGNoT3JnXHQ9IHt9LFxyXG5cdFx0XHR3YXRjaEludFx0PSBudWxsLFxyXG5cdFx0XHQkaW5yXHRcdD0gbnVsbDtcclxuXHJcblxyXG5cdFx0aWYgKCAhKCBvcHRzLmxhc3RDaGFyYWN0ZXIucmVtb3ZlIGluc3RhbmNlb2YgQXJyYXkgKSApXHJcblx0XHR7XHJcblx0XHRcdG9wdHMubGFzdENoYXJhY3Rlci5yZW1vdmUgPSAkLmZuLmRvdGRvdGRvdC5kZWZhdWx0QXJyYXlzLmxhc3RDaGFyYWN0ZXIucmVtb3ZlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCAhKCBvcHRzLmxhc3RDaGFyYWN0ZXIubm9FbGxpcHNpcyBpbnN0YW5jZW9mIEFycmF5ICkgKVxyXG5cdFx0e1xyXG5cdFx0XHRvcHRzLmxhc3RDaGFyYWN0ZXIubm9FbGxpcHNpcyA9ICQuZm4uZG90ZG90ZG90LmRlZmF1bHRBcnJheXMubGFzdENoYXJhY3Rlci5ub0VsbGlwc2lzO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRjb25mLmFmdGVyRWxlbWVudFx0PSBnZXRFbGVtZW50KCBvcHRzLmFmdGVyLCAkZG90ICk7XHJcblx0XHRjb25mLmlzVHJ1bmNhdGVkXHQ9IGZhbHNlO1xyXG5cdFx0Y29uZi5kb3RJZFx0XHRcdD0gZG90SWQrKztcclxuXHJcblxyXG5cdFx0JGRvdC5kYXRhKCAnZG90ZG90ZG90JywgdHJ1ZSApXHJcblx0XHRcdC5iaW5kX2V2ZW50cygpXHJcblx0XHRcdC50cmlnZ2VyKCAndXBkYXRlLmRvdCcgKTtcclxuXHJcblx0XHRpZiAoIG9wdHMud2F0Y2ggKVxyXG5cdFx0e1xyXG5cdFx0XHQkZG90LndhdGNoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICRkb3Q7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vXHRwdWJsaWNcclxuXHQkLmZuLmRvdGRvdGRvdC5kZWZhdWx0cyA9IHtcclxuXHRcdCdlbGxpcHNpcydcdFx0XHQ6ICcuLi4gJyxcclxuXHRcdCd3cmFwJ1x0XHRcdFx0OiAnd29yZCcsXHJcblx0XHQnZmFsbGJhY2tUb0xldHRlcidcdDogdHJ1ZSxcclxuXHRcdCdsYXN0Q2hhcmFjdGVyJ1x0XHQ6IHt9LFxyXG5cdFx0J3RvbGVyYW5jZSdcdFx0XHQ6IDAsXHJcblx0XHQnY2FsbGJhY2snXHRcdFx0OiBudWxsLFxyXG5cdFx0J2FmdGVyJ1x0XHRcdFx0OiBudWxsLFxyXG5cdFx0J2hlaWdodCdcdFx0XHQ6IG51bGwsXHJcblx0XHQnd2F0Y2gnXHRcdFx0XHQ6IGZhbHNlLFxyXG5cdFx0J3dpbmRvd1Jlc2l6ZUZpeCdcdDogdHJ1ZVxyXG5cdH07XHJcblx0JC5mbi5kb3Rkb3Rkb3QuZGVmYXVsdEFycmF5cyA9IHtcclxuXHRcdCdsYXN0Q2hhcmFjdGVyJ1x0XHQ6IHtcclxuXHRcdFx0J3JlbW92ZSdcdFx0XHQ6IFsgJyAnLCAnXFx1MzAwMCcsICcsJywgJzsnLCAnLicsICchJywgJz8nIF0sXHJcblx0XHRcdCdub0VsbGlwc2lzJ1x0XHQ6IFtdXHJcblx0XHR9XHJcblx0fTtcclxuXHQkLmZuLmRvdGRvdGRvdC5kZWJ1ZyA9IGZ1bmN0aW9uKCBtc2cgKSB7fTtcclxuXHJcblxyXG5cdC8vXHRwcml2YXRlXHJcblx0dmFyIGRvdElkID0gMTtcclxuXHJcblx0ZnVuY3Rpb24gY2hpbGRyZW4oICRlbGVtLCBvLCBhZnRlciApXHJcblx0e1xyXG5cdFx0dmFyICRlbGVtZW50cyBcdD0gJGVsZW0uY2hpbGRyZW4oKSxcclxuXHRcdFx0aXNUcnVuY2F0ZWRcdD0gZmFsc2U7XHJcblxyXG5cdFx0JGVsZW0uZW1wdHkoKTtcclxuXHJcblx0XHRmb3IgKCB2YXIgYSA9IDAsIGwgPSAkZWxlbWVudHMubGVuZ3RoOyBhIDwgbDsgYSsrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyICRlID0gJGVsZW1lbnRzLmVxKCBhICk7XHJcblx0XHRcdCRlbGVtLmFwcGVuZCggJGUgKTtcclxuXHRcdFx0aWYgKCBhZnRlciApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkZWxlbS5hcHBlbmQoIGFmdGVyICk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCB0ZXN0KCAkZWxlbSwgbyApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCRlLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGlzVHJ1bmNhdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIGFmdGVyIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhZnRlci5kZXRhY2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBpc1RydW5jYXRlZDtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZWxsaXBzaXMoICRlbGVtLCAkZCwgJGksIG8sIGFmdGVyIClcclxuXHR7XHJcblx0XHR2YXIgaXNUcnVuY2F0ZWRcdD0gZmFsc2U7XHJcblxyXG5cdFx0Ly9cdERvbid0IHB1dCB0aGUgZWxsaXBzaXMgZGlyZWN0bHkgaW5zaWRlIHRoZXNlIGVsZW1lbnRzXHJcblx0XHR2YXIgbm90eCA9ICdhLCB0YWJsZSwgdGhlYWQsIHRib2R5LCB0Zm9vdCwgdHIsIGNvbCwgY29sZ3JvdXAsIG9iamVjdCwgZW1iZWQsIHBhcmFtLCBvbCwgdWwsIGRsLCBibG9ja3F1b3RlLCBzZWxlY3QsIG9wdGdyb3VwLCBvcHRpb24sIHRleHRhcmVhLCBzY3JpcHQsIHN0eWxlJztcclxuXHJcblx0XHQvL1x0RG9uJ3QgcmVtb3ZlIHRoZXNlIGVsZW1lbnRzIGV2ZW4gaWYgdGhleSBhcmUgYWZ0ZXIgdGhlIGVsbGlwc2lzXHJcblx0XHR2YXIgbm90eSA9ICdzY3JpcHQsIC5kb3Rkb3Rkb3Qta2VlcCc7XHJcblxyXG5cdFx0JGVsZW1cclxuXHRcdFx0LmNvbnRlbnRzKClcclxuXHRcdFx0LmRldGFjaCgpXHJcblx0XHRcdC5lYWNoKFxyXG5cdFx0XHRcdGZ1bmN0aW9uKClcclxuXHRcdFx0XHR7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGVcdD0gdGhpcyxcclxuXHRcdFx0XHRcdFx0JGVcdD0gJChlKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBlID09ICd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICggJGUuaXMoIG5vdHkgKSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCRlbGVtLmFwcGVuZCggJGUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKCBpc1RydW5jYXRlZCApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQkZWxlbS5hcHBlbmQoICRlICk7XHJcblx0XHRcdFx0XHRcdGlmICggYWZ0ZXIgJiYgISRlLmlzKCBvLmFmdGVyICkgJiYgISRlLmZpbmQoIG8uYWZ0ZXIgKS5sZW5ndGggIClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCRlbGVtWyAkZWxlbS5pcyggbm90eCApID8gJ2FmdGVyJyA6ICdhcHBlbmQnIF0oIGFmdGVyICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKCB0ZXN0KCAkaSwgbyApIClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlmICggZS5ub2RlVHlwZSA9PSAzICkgLy8gbm9kZSBpcyBURVhUXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aXNUcnVuY2F0ZWQgPSBlbGxpcHNpc0VsZW1lbnQoICRlLCAkZCwgJGksIG8sIGFmdGVyICk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpc1RydW5jYXRlZCA9IGVsbGlwc2lzKCAkZSwgJGQsICRpLCBvLCBhZnRlciApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCAhaXNUcnVuY2F0ZWQgKVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCBhZnRlciApXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0YWZ0ZXIuZGV0YWNoKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0JGQuYWRkQ2xhc3MoXCJpcy10cnVuY2F0ZWRcIik7XHJcblx0XHRyZXR1cm4gaXNUcnVuY2F0ZWQ7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGVsbGlwc2lzRWxlbWVudCggJGUsICRkLCAkaSwgbywgYWZ0ZXIgKVxyXG5cdHtcclxuXHRcdHZhciBlID0gJGVbIDAgXTtcclxuXHJcblx0XHRpZiAoICFlIClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0eHRcdFx0XHQ9IGdldFRleHRDb250ZW50KCBlICksXHJcblx0XHRcdHNwYWNlXHRcdD0gKCB0eHQuaW5kZXhPZignICcpICE9PSAtMSApID8gJyAnIDogJ1xcdTMwMDAnLFxyXG5cdFx0XHRzZXBhcmF0b3JcdD0gKCBvLndyYXAgPT0gJ2xldHRlcicgKSA/ICcnIDogc3BhY2UsXHJcblx0XHRcdHRleHRBcnJcdFx0PSB0eHQuc3BsaXQoIHNlcGFyYXRvciApLFxyXG5cdFx0XHRwb3NpdGlvbiBcdD0gLTEsXHJcblx0XHRcdG1pZFBvc1x0XHQ9IC0xLFxyXG5cdFx0XHRzdGFydFBvc1x0PSAwLFxyXG5cdFx0XHRlbmRQb3NcdFx0PSB0ZXh0QXJyLmxlbmd0aCAtIDE7XHJcblxyXG5cclxuXHRcdC8vXHRPbmx5IG9uZSB3b3JkXHJcblx0XHRpZiAoIG8uZmFsbGJhY2tUb0xldHRlciAmJiBzdGFydFBvcyA9PSAwICYmIGVuZFBvcyA9PSAwIClcclxuXHRcdHtcclxuXHRcdFx0c2VwYXJhdG9yXHQ9ICcnO1xyXG5cdFx0XHR0ZXh0QXJyXHRcdD0gdHh0LnNwbGl0KCBzZXBhcmF0b3IgKTtcclxuXHRcdFx0ZW5kUG9zXHRcdD0gdGV4dEFyci5sZW5ndGggLSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlICggc3RhcnRQb3MgPD0gZW5kUG9zICYmICEoIHN0YXJ0UG9zID09IDAgJiYgZW5kUG9zID09IDAgKSApXHJcblx0XHR7XHJcblx0XHRcdHZhciBtID0gTWF0aC5mbG9vciggKCBzdGFydFBvcyArIGVuZFBvcyApIC8gMiApO1xyXG5cdFx0XHRpZiAoIG0gPT0gbWlkUG9zIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1pZFBvcyA9IG07XHJcblxyXG5cdFx0XHRzZXRUZXh0Q29udGVudCggZSwgdGV4dEFyci5zbGljZSggMCwgbWlkUG9zICsgMSApLmpvaW4oIHNlcGFyYXRvciApICsgby5lbGxpcHNpcyApO1xyXG5cdFx0XHQkaS5jaGlsZHJlbigpXHJcblx0XHRcdFx0LmVhY2goXHJcblx0XHRcdFx0XHRmdW5jdGlvbigpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudG9nZ2xlKCkudG9nZ2xlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICggIXRlc3QoICRpLCBvICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb24gPSBtaWRQb3M7XHJcblx0XHRcdFx0c3RhcnRQb3MgPSBtaWRQb3M7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZW5kUG9zID0gbWlkUG9zO1xyXG5cclxuXHRcdFx0XHQvL1x0RmFsbGJhY2sgdG8gbGV0dGVyXHJcblx0XHRcdFx0aWYgKG8uZmFsbGJhY2tUb0xldHRlciAmJiBzdGFydFBvcyA9PSAwICYmIGVuZFBvcyA9PSAwIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzZXBhcmF0b3JcdD0gJyc7XHJcblx0XHRcdFx0XHR0ZXh0QXJyXHRcdD0gdGV4dEFyclsgMCBdLnNwbGl0KCBzZXBhcmF0b3IgKTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uXHQ9IC0xO1xyXG5cdFx0XHRcdFx0bWlkUG9zXHRcdD0gLTE7XHJcblx0XHRcdFx0XHRzdGFydFBvc1x0PSAwO1xyXG5cdFx0XHRcdFx0ZW5kUG9zXHRcdD0gdGV4dEFyci5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggcG9zaXRpb24gIT0gLTEgJiYgISggdGV4dEFyci5sZW5ndGggPT0gMSAmJiB0ZXh0QXJyWyAwIF0ubGVuZ3RoID09IDAgKSApXHJcblx0XHR7XHJcblx0XHRcdHR4dCA9IGFkZEVsbGlwc2lzKCB0ZXh0QXJyLnNsaWNlKCAwLCBwb3NpdGlvbiArIDEgKS5qb2luKCBzZXBhcmF0b3IgKSwgbyApO1xyXG5cdFx0XHRzZXRUZXh0Q29udGVudCggZSwgdHh0ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHZhciAkdyA9ICRlLnBhcmVudCgpO1xyXG5cdFx0XHQkZS5kZXRhY2goKTtcclxuXHJcblx0XHRcdHZhciBhZnRlckxlbmd0aCA9ICggYWZ0ZXIgJiYgYWZ0ZXIuY2xvc2VzdCgkdykubGVuZ3RoICkgPyBhZnRlci5sZW5ndGggOiAwO1xyXG5cclxuXHRcdFx0aWYgKCAkdy5jb250ZW50cygpLmxlbmd0aCA+IGFmdGVyTGVuZ3RoIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGUgPSBmaW5kTGFzdFRleHROb2RlKCAkdy5jb250ZW50cygpLmVxKCAtMSAtIGFmdGVyTGVuZ3RoICksICRkICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZSA9IGZpbmRMYXN0VGV4dE5vZGUoICR3LCAkZCwgdHJ1ZSApO1xyXG5cdFx0XHRcdGlmICggIWFmdGVyTGVuZ3RoIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQkdy5kZXRhY2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBlIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR4dCA9IGFkZEVsbGlwc2lzKCBnZXRUZXh0Q29udGVudCggZSApLCBvICk7XHJcblx0XHRcdFx0c2V0VGV4dENvbnRlbnQoIGUsIHR4dCApO1xyXG5cdFx0XHRcdGlmICggYWZ0ZXJMZW5ndGggJiYgYWZ0ZXIgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCQoZSkucGFyZW50KCkuYXBwZW5kKCBhZnRlciApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRmdW5jdGlvbiB0ZXN0KCAkaSwgbyApXHJcblx0e1xyXG5cdFx0cmV0dXJuICRpLmlubmVySGVpZ2h0KCkgPiBvLm1heEhlaWdodDtcclxuXHR9XHJcblx0ZnVuY3Rpb24gYWRkRWxsaXBzaXMoIHR4dCwgbyApXHJcblx0e1xyXG5cdFx0d2hpbGUoICQuaW5BcnJheSggdHh0LnNsaWNlKCAtMSApLCBvLmxhc3RDaGFyYWN0ZXIucmVtb3ZlICkgPiAtMSApXHJcblx0XHR7XHJcblx0XHRcdHR4dCA9IHR4dC5zbGljZSggMCwgLTEgKTtcclxuXHRcdH1cclxuXHRcdGlmICggJC5pbkFycmF5KCB0eHQuc2xpY2UoIC0xICksIG8ubGFzdENoYXJhY3Rlci5ub0VsbGlwc2lzICkgPCAwIClcclxuXHRcdHtcclxuXHRcdFx0dHh0ICs9IG8uZWxsaXBzaXM7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHh0O1xyXG5cdH1cclxuXHRmdW5jdGlvbiBnZXRTaXplcyggJGQgKVxyXG5cdHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCd3aWR0aCdcdDogJGQuaW5uZXJXaWR0aCgpLFxyXG5cdFx0XHQnaGVpZ2h0JzogJGQuaW5uZXJIZWlnaHQoKVxyXG5cdFx0fTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQoIGUsIGNvbnRlbnQgKVxyXG5cdHtcclxuXHRcdGlmICggZS5pbm5lclRleHQgKVxyXG5cdFx0e1xyXG5cdFx0XHRlLmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZS5ub2RlVmFsdWUgKVxyXG5cdFx0e1xyXG5cdFx0XHRlLm5vZGVWYWx1ZSA9IGNvbnRlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRleHRDb250ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRlLnRleHRDb250ZW50ID0gY29udGVudDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdGZ1bmN0aW9uIGdldFRleHRDb250ZW50KCBlIClcclxuXHR7XHJcblx0XHRpZiAoIGUuaW5uZXJUZXh0IClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGUuaW5uZXJUZXh0O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGUubm9kZVZhbHVlIClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGUubm9kZVZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGUudGV4dENvbnRlbnQgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gZS50ZXh0Q29udGVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGdldFByZXZOb2RlKCBuIClcclxuXHR7XHJcblx0XHRkb1xyXG5cdFx0e1xyXG5cdFx0XHRuID0gbi5wcmV2aW91c1NpYmxpbmc7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIG4gJiYgbi5ub2RlVHlwZSAhPT0gMSAmJiBuLm5vZGVUeXBlICE9PSAzICk7XHJcblxyXG5cdFx0cmV0dXJuIG47XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGZpbmRMYXN0VGV4dE5vZGUoICRlbCwgJHRvcCwgZXhjbHVkZUN1cnJlbnQgKVxyXG5cdHtcclxuXHRcdHZhciBlID0gJGVsICYmICRlbFsgMCBdLCBwO1xyXG5cdFx0aWYgKCBlIClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCAhZXhjbHVkZUN1cnJlbnQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCBlLm5vZGVUeXBlID09PSAzIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXR1cm4gZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCAkLnRyaW0oICRlbC50ZXh0KCkgKSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZpbmRMYXN0VGV4dE5vZGUoICRlbC5jb250ZW50cygpLmxhc3QoKSwgJHRvcCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRwID0gZ2V0UHJldk5vZGUoIGUgKTtcclxuXHRcdFx0d2hpbGUgKCAhcCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkZWwgPSAkZWwucGFyZW50KCk7XHJcblx0XHRcdFx0aWYgKCAkZWwuaXMoICR0b3AgKSB8fCAhJGVsLmxlbmd0aCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwID0gZ2V0UHJldk5vZGUoICRlbFswXSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggcCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gZmluZExhc3RUZXh0Tm9kZSggJChwKSwgJHRvcCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGdldEVsZW1lbnQoIGUsICRpIClcclxuXHR7XHJcblx0XHRpZiAoICFlIClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCB0eXBlb2YgZSA9PT0gJ3N0cmluZycgKVxyXG5cdFx0e1xyXG5cdFx0XHRlID0gJChlLCAkaSk7XHJcblx0XHRcdHJldHVybiAoIGUubGVuZ3RoIClcclxuXHRcdFx0XHQ/IGVcclxuXHRcdFx0XHQ6IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICFlLmpxdWVyeVxyXG5cdFx0XHQ/IGZhbHNlXHJcblx0XHRcdDogZTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZ2V0VHJ1ZUlubmVySGVpZ2h0KCAkZWwgKVxyXG5cdHtcclxuXHRcdHZhciBoID0gJGVsLmlubmVySGVpZ2h0KCksXHJcblx0XHRcdGEgPSBbICdwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nIF07XHJcblxyXG5cdFx0Zm9yICggdmFyIHogPSAwLCBsID0gYS5sZW5ndGg7IHogPCBsOyB6KysgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbSA9IHBhcnNlSW50KCAkZWwuY3NzKCBhWyB6IF0gKSwgMTAgKTtcclxuXHRcdFx0aWYgKCBpc05hTiggbSApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG0gPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGggLT0gbTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vXHRvdmVycmlkZSBqUXVlcnkuaHRtbFxyXG5cdHZhciBfb3JnSHRtbCA9ICQuZm4uaHRtbDtcclxuXHQkLmZuLmh0bWwgPSBmdW5jdGlvbiggc3RyIClcclxuXHR7XHJcblx0XHRpZiAoIHN0ciAhPSB1bmRlZiAmJiAhJC5pc0Z1bmN0aW9uKCBzdHIgKSAmJiB0aGlzLmRhdGEoICdkb3Rkb3Rkb3QnICkgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50cmlnZ2VyKCAndXBkYXRlJywgWyBzdHIgXSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIF9vcmdIdG1sLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHR9O1xyXG5cclxuXHJcblx0Ly9cdG92ZXJyaWRlIGpRdWVyeS50ZXh0XHJcblx0dmFyIF9vcmdUZXh0ID0gJC5mbi50ZXh0O1xyXG5cdCQuZm4udGV4dCA9IGZ1bmN0aW9uKCBzdHIgKVxyXG5cdHtcclxuXHRcdGlmICggc3RyICE9IHVuZGVmICYmICEkLmlzRnVuY3Rpb24oIHN0ciApICYmIHRoaXMuZGF0YSggJ2RvdGRvdGRvdCcgKSApXHJcblx0XHR7XHJcblx0XHRcdHN0ciA9ICQoICc8ZGl2IC8+JyApLnRleHQoIHN0ciApLmh0bWwoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudHJpZ2dlciggJ3VwZGF0ZScsIFsgc3RyIF0gKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBfb3JnVGV4dC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcblx0fTtcclxuXHJcblxyXG59KSggalF1ZXJ5ICk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS5kb3Rkb3Rkb3Qvc3JjL2pzL2pxdWVyeS5kb3Rkb3Rkb3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4qIGpxdWVyeS1tYXRjaC1oZWlnaHQgbWFzdGVyIGJ5IEBsaWFicnVcbiogaHR0cDovL2JybS5pby9qcXVlcnktbWF0Y2gtaGVpZ2h0L1xuKiBMaWNlbnNlOiBNSVRcbiovXG5cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAgIC8qXG4gICAgKiAgaW50ZXJuYWxcbiAgICAqL1xuXG4gICAgdmFyIF9wcmV2aW91c1Jlc2l6ZVdpZHRoID0gLTEsXG4gICAgICAgIF91cGRhdGVUaW1lb3V0ID0gLTE7XG5cbiAgICAvKlxuICAgICogIF9wYXJzZVxuICAgICogIHZhbHVlIHBhcnNlIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAqL1xuXG4gICAgdmFyIF9wYXJzZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIHBhcnNlIHZhbHVlIGFuZCBjb252ZXJ0IE5hTiB0byAwXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xuICAgIH07XG5cbiAgICAvKlxuICAgICogIF9yb3dzXG4gICAgKiAgdXRpbGl0eSBmdW5jdGlvbiByZXR1cm5zIGFycmF5IG9mIGpRdWVyeSBzZWxlY3Rpb25zIHJlcHJlc2VudGluZyBlYWNoIHJvd1xuICAgICogIChhcyBkaXNwbGF5ZWQgYWZ0ZXIgZmxvYXQgd3JhcHBpbmcgYXBwbGllZCBieSBicm93c2VyKVxuICAgICovXG5cbiAgICB2YXIgX3Jvd3MgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICAgICAgICB2YXIgdG9sZXJhbmNlID0gMSxcbiAgICAgICAgICAgICRlbGVtZW50cyA9ICQoZWxlbWVudHMpLFxuICAgICAgICAgICAgbGFzdFRvcCA9IG51bGwsXG4gICAgICAgICAgICByb3dzID0gW107XG5cbiAgICAgICAgLy8gZ3JvdXAgZWxlbWVudHMgYnkgdGhlaXIgdG9wIHBvc2l0aW9uXG4gICAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJHRoYXQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIHRvcCA9ICR0aGF0Lm9mZnNldCgpLnRvcCAtIF9wYXJzZSgkdGhhdC5jc3MoJ21hcmdpbi10b3AnKSksXG4gICAgICAgICAgICAgICAgbGFzdFJvdyA9IHJvd3MubGVuZ3RoID4gMCA/IHJvd3Nbcm93cy5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsYXN0Um93ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgaXRlbSBvbiB0aGUgcm93LCBzbyBqdXN0IHB1c2ggaXRcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goJHRoYXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcm93IHRvcCBpcyB0aGUgc2FtZSwgYWRkIHRvIHRoZSByb3cgZ3JvdXBcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLmFicyhsYXN0VG9wIC0gdG9wKSkgPD0gdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3Nbcm93cy5sZW5ndGggLSAxXSA9IGxhc3RSb3cuYWRkKCR0aGF0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugc3RhcnQgYSBuZXcgcm93IGdyb3VwXG4gICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaCgkdGhhdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHJvdyB0b3BcbiAgICAgICAgICAgIGxhc3RUb3AgPSB0b3A7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICogIF9wYXJzZU9wdGlvbnNcbiAgICAqICBoYW5kbGUgcGx1Z2luIG9wdGlvbnNcbiAgICAqL1xuXG4gICAgdmFyIF9wYXJzZU9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgYnlSb3c6IHRydWUsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2hlaWdodCcsXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICByZW1vdmU6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKG9wdHMsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIG9wdHMuYnlSb3cgPSBvcHRpb25zO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgICBvcHRzLnJlbW92ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0cztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqICBtYXRjaEhlaWdodFxuICAgICogIHBsdWdpbiBkZWZpbml0aW9uXG4gICAgKi9cblxuICAgIHZhciBtYXRjaEhlaWdodCA9ICQuZm4ubWF0Y2hIZWlnaHQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0gX3BhcnNlT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICAvLyBoYW5kbGUgcmVtb3ZlXG4gICAgICAgIGlmIChvcHRzLnJlbW92ZSkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgZml4ZWQgaGVpZ2h0IGZyb20gYWxsIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICB0aGlzLmNzcyhvcHRzLnByb3BlcnR5LCAnJyk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBlbGVtZW50cyBmcm9tIGFsbCBncm91cHNcbiAgICAgICAgICAgICQuZWFjaChtYXRjaEhlaWdodC5fZ3JvdXBzLCBmdW5jdGlvbihrZXksIGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZWxlbWVudHMgPSBncm91cC5lbGVtZW50cy5ub3QodGhhdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETzogY2xlYW51cCBlbXB0eSBncm91cHNcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPD0gMSAmJiAhb3B0cy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGlzIGdyb3VwIHNvIHdlIGNhbiByZS1hcHBseSBsYXRlciBvbiBsb2FkIGFuZCByZXNpemUgZXZlbnRzXG4gICAgICAgIG1hdGNoSGVpZ2h0Ll9ncm91cHMucHVzaCh7XG4gICAgICAgICAgICBlbGVtZW50czogdGhpcyxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWF0Y2ggZWFjaCBlbGVtZW50J3MgaGVpZ2h0IHRvIHRoZSB0YWxsZXN0IGVsZW1lbnQgaW4gdGhlIHNlbGVjdGlvblxuICAgICAgICBtYXRjaEhlaWdodC5fYXBwbHkodGhpcywgb3B0cyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiAgcGx1Z2luIGdsb2JhbCBvcHRpb25zXG4gICAgKi9cblxuICAgIG1hdGNoSGVpZ2h0LnZlcnNpb24gPSAnbWFzdGVyJztcbiAgICBtYXRjaEhlaWdodC5fZ3JvdXBzID0gW107XG4gICAgbWF0Y2hIZWlnaHQuX3Rocm90dGxlID0gODA7XG4gICAgbWF0Y2hIZWlnaHQuX21haW50YWluU2Nyb2xsID0gZmFsc2U7XG4gICAgbWF0Y2hIZWlnaHQuX2JlZm9yZVVwZGF0ZSA9IG51bGw7XG4gICAgbWF0Y2hIZWlnaHQuX2FmdGVyVXBkYXRlID0gbnVsbDtcbiAgICBtYXRjaEhlaWdodC5fcm93cyA9IF9yb3dzO1xuICAgIG1hdGNoSGVpZ2h0Ll9wYXJzZSA9IF9wYXJzZTtcbiAgICBtYXRjaEhlaWdodC5fcGFyc2VPcHRpb25zID0gX3BhcnNlT3B0aW9ucztcblxuICAgIC8qXG4gICAgKiAgbWF0Y2hIZWlnaHQuX2FwcGx5XG4gICAgKiAgYXBwbHkgbWF0Y2hIZWlnaHQgdG8gZ2l2ZW4gZWxlbWVudHNcbiAgICAqL1xuXG4gICAgbWF0Y2hIZWlnaHQuX2FwcGx5ID0gZnVuY3Rpb24oZWxlbWVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBfcGFyc2VPcHRpb25zKG9wdGlvbnMpLFxuICAgICAgICAgICAgJGVsZW1lbnRzID0gJChlbGVtZW50cyksXG4gICAgICAgICAgICByb3dzID0gWyRlbGVtZW50c107XG5cbiAgICAgICAgLy8gdGFrZSBub3RlIG9mIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgaHRtbEhlaWdodCA9ICQoJ2h0bWwnKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAvLyBnZXQgaGlkZGVuIHBhcmVudHNcbiAgICAgICAgdmFyICRoaWRkZW5QYXJlbnRzID0gJGVsZW1lbnRzLnBhcmVudHMoKS5maWx0ZXIoJzpoaWRkZW4nKTtcblxuICAgICAgICAvLyBjYWNoZSB0aGUgb3JpZ2luYWwgaW5saW5lIHN0eWxlXG4gICAgICAgICRoaWRkZW5QYXJlbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoYXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHRoYXQuZGF0YSgnc3R5bGUtY2FjaGUnLCAkdGhhdC5hdHRyKCdzdHlsZScpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgbXVzdCBmb3JjZSBoaWRkZW4gcGFyZW50cyB2aXNpYmxlXG4gICAgICAgICRoaWRkZW5QYXJlbnRzLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgICAgIC8vIGdldCByb3dzIGlmIHVzaW5nIGJ5Um93LCBvdGhlcndpc2UgYXNzdW1lIG9uZSByb3dcbiAgICAgICAgaWYgKG9wdHMuYnlSb3cgJiYgIW9wdHMudGFyZ2V0KSB7XG5cbiAgICAgICAgICAgIC8vIG11c3QgZmlyc3QgZm9yY2UgYW4gYXJiaXRyYXJ5IGVxdWFsIGhlaWdodCBzbyBmbG9hdGluZyBlbGVtZW50cyBicmVhayBldmVubHlcbiAgICAgICAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkdGhhdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAkdGhhdC5jc3MoJ2Rpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgIC8vIHRlbXBvcmFyaWx5IGZvcmNlIGEgdXNhYmxlIGRpc3BsYXkgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSAhPT0gJ2lubGluZS1ibG9jaycgJiYgZGlzcGxheSAhPT0gJ2ZsZXgnICYmIGRpc3BsYXkgIT09ICdpbmxpbmUtZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIG9yaWdpbmFsIGlubGluZSBzdHlsZVxuICAgICAgICAgICAgICAgICR0aGF0LmRhdGEoJ3N0eWxlLWNhY2hlJywgJHRoYXQuYXR0cignc3R5bGUnKSk7XG5cbiAgICAgICAgICAgICAgICAkdGhhdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXRvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1ib3R0b20nOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICdib3JkZXItdG9wLXdpZHRoJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiByb3dzIChiYXNlZCBvbiBlbGVtZW50IHRvcCBwb3NpdGlvbilcbiAgICAgICAgICAgIHJvd3MgPSBfcm93cygkZWxlbWVudHMpO1xuXG4gICAgICAgICAgICAvLyByZXZlcnQgb3JpZ2luYWwgaW5saW5lIHN0eWxlc1xuICAgICAgICAgICAgJGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGF0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhhdC5hdHRyKCdzdHlsZScsICR0aGF0LmRhdGEoJ3N0eWxlLWNhY2hlJykgfHwgJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmVhY2gocm93cywgZnVuY3Rpb24oa2V5LCByb3cpIHtcbiAgICAgICAgICAgIHZhciAkcm93ID0gJChyb3cpLFxuICAgICAgICAgICAgICAgIHRhcmdldEhlaWdodCA9IDA7XG5cbiAgICAgICAgICAgIGlmICghb3B0cy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGFwcGx5IHRvIHJvd3Mgd2l0aCBvbmx5IG9uZSBpdGVtXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuYnlSb3cgJiYgJHJvdy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkcm93LmNzcyhvcHRzLnByb3BlcnR5LCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIHRoZSByb3cgYW5kIGZpbmQgdGhlIG1heCBoZWlnaHRcbiAgICAgICAgICAgICAgICAkcm93LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGF0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gJHRoYXQuYXR0cignc3R5bGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAkdGhhdC5jc3MoJ2Rpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0ZW1wb3JhcmlseSBmb3JjZSBhIHVzYWJsZSBkaXNwbGF5IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ICE9PSAnaW5saW5lLWJsb2NrJyAmJiBkaXNwbGF5ICE9PSAnZmxleCcgJiYgZGlzcGxheSAhPT0gJ2lubGluZS1mbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgd2UgZ2V0IHRoZSBjb3JyZWN0IGFjdHVhbCBoZWlnaHQgKGFuZCBub3QgYSBwcmV2aW91c2x5IHNldCBoZWlnaHQgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7ICdkaXNwbGF5JzogZGlzcGxheSB9O1xuICAgICAgICAgICAgICAgICAgICBjc3Nbb3B0cy5wcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgJHRoYXQuY3NzKGNzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgbWF4IGhlaWdodCAoaW5jbHVkaW5nIHBhZGRpbmcsIGJ1dCBub3QgbWFyZ2luKVxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRoYXQub3V0ZXJIZWlnaHQoZmFsc2UpID4gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSAkdGhhdC5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoYXQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhhdC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGFyZ2V0IHNldCwgdXNlIHRoZSBoZWlnaHQgb2YgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gb3B0cy50YXJnZXQub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRoZSByb3cgYW5kIGFwcGx5IHRoZSBoZWlnaHQgdG8gYWxsIGVsZW1lbnRzXG4gICAgICAgICAgICAkcm93LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgJHRoYXQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgYXBwbHkgdG8gYSB0YXJnZXRcbiAgICAgICAgICAgICAgICBpZiAob3B0cy50YXJnZXQgJiYgJHRoYXQuaXMob3B0cy50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgcGFkZGluZyBhbmQgYm9yZGVyIGNvcnJlY3RseSAocmVxdWlyZWQgd2hlbiBub3QgdXNpbmcgYm9yZGVyLWJveClcbiAgICAgICAgICAgICAgICBpZiAoJHRoYXQuY3NzKCdib3gtc2l6aW5nJykgIT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmcgKz0gX3BhcnNlKCR0aGF0LmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSArIF9wYXJzZSgkdGhhdC5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZyArPSBfcGFyc2UoJHRoYXQuY3NzKCdwYWRkaW5nLXRvcCcpKSArIF9wYXJzZSgkdGhhdC5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgaGVpZ2h0IChhY2NvdW50aW5nIGZvciBwYWRkaW5nIGFuZCBib3JkZXIpXG4gICAgICAgICAgICAgICAgJHRoYXQuY3NzKG9wdHMucHJvcGVydHksICh0YXJnZXRIZWlnaHQgLSB2ZXJ0aWNhbFBhZGRpbmcpICsgJ3B4Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmV2ZXJ0IGhpZGRlbiBwYXJlbnRzXG4gICAgICAgICRoaWRkZW5QYXJlbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoYXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHRoYXQuYXR0cignc3R5bGUnLCAkdGhhdC5kYXRhKCdzdHlsZS1jYWNoZScpIHx8IG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXN0b3JlIHNjcm9sbCBwb3NpdGlvbiBpZiBlbmFibGVkXG4gICAgICAgIGlmIChtYXRjaEhlaWdodC5fbWFpbnRhaW5TY3JvbGwpIHtcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoKHNjcm9sbFRvcCAvIGh0bWxIZWlnaHQpICogJCgnaHRtbCcpLm91dGVySGVpZ2h0KHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICogIG1hdGNoSGVpZ2h0Ll9hcHBseURhdGFBcGlcbiAgICAqICBhcHBsaWVzIG1hdGNoSGVpZ2h0IHRvIGFsbCBlbGVtZW50cyB3aXRoIGEgZGF0YS1tYXRjaC1oZWlnaHQgYXR0cmlidXRlXG4gICAgKi9cblxuICAgIG1hdGNoSGVpZ2h0Ll9hcHBseURhdGFBcGkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IHt9O1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIGdyb3VwcyBieSB0aGVpciBncm91cElkIHNldCBieSBlbGVtZW50cyB1c2luZyBkYXRhLW1hdGNoLWhlaWdodFxuICAgICAgICAkKCdbZGF0YS1tYXRjaC1oZWlnaHRdLCBbZGF0YS1taF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBncm91cElkID0gJHRoaXMuYXR0cignZGF0YS1taCcpIHx8ICR0aGlzLmF0dHIoJ2RhdGEtbWF0Y2gtaGVpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGlmIChncm91cElkIGluIGdyb3Vwcykge1xuICAgICAgICAgICAgICAgIGdyb3Vwc1tncm91cElkXSA9IGdyb3Vwc1tncm91cElkXS5hZGQoJHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSAkdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYXBwbHkgbWF0Y2hIZWlnaHQgdG8gZWFjaCBncm91cFxuICAgICAgICAkLmVhY2goZ3JvdXBzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hIZWlnaHQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICogIG1hdGNoSGVpZ2h0Ll91cGRhdGVcbiAgICAqICB1cGRhdGVzIG1hdGNoSGVpZ2h0IG9uIGFsbCBjdXJyZW50IGdyb3VwcyB3aXRoIHRoZWlyIGNvcnJlY3Qgb3B0aW9uc1xuICAgICovXG5cbiAgICB2YXIgX3VwZGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChtYXRjaEhlaWdodC5fYmVmb3JlVXBkYXRlKSB7XG4gICAgICAgICAgICBtYXRjaEhlaWdodC5fYmVmb3JlVXBkYXRlKGV2ZW50LCBtYXRjaEhlaWdodC5fZ3JvdXBzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuZWFjaChtYXRjaEhlaWdodC5fZ3JvdXBzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1hdGNoSGVpZ2h0Ll9hcHBseSh0aGlzLmVsZW1lbnRzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hIZWlnaHQuX2FmdGVyVXBkYXRlKSB7XG4gICAgICAgICAgICBtYXRjaEhlaWdodC5fYWZ0ZXJVcGRhdGUoZXZlbnQsIG1hdGNoSGVpZ2h0Ll9ncm91cHMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1hdGNoSGVpZ2h0Ll91cGRhdGUgPSBmdW5jdGlvbih0aHJvdHRsZSwgZXZlbnQpIHtcbiAgICAgICAgLy8gcHJldmVudCB1cGRhdGUgaWYgZmlyZWQgZnJvbSBhIHJlc2l6ZSBldmVudFxuICAgICAgICAvLyB3aGVyZSB0aGUgdmlld3BvcnQgd2lkdGggaGFzbid0IGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgICAgLy8gZml4ZXMgYW4gZXZlbnQgbG9vcGluZyBidWcgaW4gSUU4XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICBpZiAod2luZG93V2lkdGggPT09IF9wcmV2aW91c1Jlc2l6ZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ByZXZpb3VzUmVzaXplV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRocm90dGxlIHVwZGF0ZXNcbiAgICAgICAgaWYgKCF0aHJvdHRsZSkge1xuICAgICAgICAgICAgX3VwZGF0ZShldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3VwZGF0ZVRpbWVvdXQgPT09IC0xKSB7XG4gICAgICAgICAgICBfdXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3VwZGF0ZShldmVudCk7XG4gICAgICAgICAgICAgICAgX3VwZGF0ZVRpbWVvdXQgPSAtMTtcbiAgICAgICAgICAgIH0sIG1hdGNoSGVpZ2h0Ll90aHJvdHRsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAqICBiaW5kIGV2ZW50c1xuICAgICovXG5cbiAgICAvLyBhcHBseSBvbiBET00gcmVhZHkgZXZlbnRcbiAgICAkKG1hdGNoSGVpZ2h0Ll9hcHBseURhdGFBcGkpO1xuXG4gICAgLy8gdXBkYXRlIGhlaWdodHMgb24gbG9hZCBhbmQgcmVzaXplIGV2ZW50c1xuICAgICQod2luZG93KS5iaW5kKCdsb2FkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbWF0Y2hIZWlnaHQuX3VwZGF0ZShmYWxzZSwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gdGhyb3R0bGVkIHVwZGF0ZSBoZWlnaHRzIG9uIHJlc2l6ZSBldmVudHNcbiAgICAkKHdpbmRvdykuYmluZCgncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbWF0Y2hIZWlnaHQuX3VwZGF0ZSh0cnVlLCBldmVudCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktbWF0Y2gtaGVpZ2h0LWJyb3dzZXJpZnkvanF1ZXJ5Lm1hdGNoSGVpZ2h0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IEJyb3dzZXIgUGx1Z2luIDAuMS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2FiY2ViL2pxdWVyeS1icm93c2VyLXBsdWdpblxuICpcbiAqIE9yaWdpbmFsIGpxdWVyeS1icm93c2VyIGNvZGUgQ29weXJpZ2h0IDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIE1vZGlmaWNhdGlvbnMgQ29weXJpZ2h0IDIwMTUgR2FicmllbCBDZWJyaWFuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2FiY2ViXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMDUtMDctMjAxNVxuICovXG4vKmdsb2JhbCB3aW5kb3c6IGZhbHNlICovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoJCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUtbGlrZSBlbnZpcm9ubWVudFxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeSh3aW5kb3cualF1ZXJ5KTtcbiAgfVxufShmdW5jdGlvbihqUXVlcnkpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdWFNYXRjaCggdWEgKSB7XG4gICAgLy8gSWYgYW4gVUEgaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHRoZSBjdXJyZW50IGJyb3dzZXIgVUEuXG4gICAgaWYgKCB1YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB9XG4gICAgdWEgPSB1YS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIG1hdGNoID0gLyhlZGdlKVxcLyhbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKG9wcilbXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGNocm9tZSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyhpZW1vYmlsZSlbXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKHZlcnNpb24pKGFwcGxld2Via2l0KVsgXFwvXShbXFx3Ll0rKS4qKHNhZmFyaSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyh3ZWJraXQpWyBcXC9dKFtcXHcuXSspLioodmVyc2lvbilbIFxcL10oW1xcdy5dKykuKihzYWZhcmkpWyBcXC9dKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8od2Via2l0KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKG9wZXJhKSg/Oi4qdmVyc2lvbnwpWyBcXC9dKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8obXNpZSkgKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIHVhLmluZGV4T2YoXCJ0cmlkZW50XCIpID49IDAgJiYgLyhydikoPzo6fCApKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIHVhLmluZGV4T2YoXCJjb21wYXRpYmxlXCIpIDwgMCAmJiAvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIFtdO1xuXG4gICAgdmFyIHBsYXRmb3JtX21hdGNoID0gLyhpcGFkKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGlwb2QpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8od2luZG93cyBwaG9uZSkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyhpcGhvbmUpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oa2luZGxlKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKHNpbGspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYW5kcm9pZCkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyh3aW4pLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8obWFjKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGxpbnV4KS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGNyb3MpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8ocGxheWJvb2spLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYmIpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYmxhY2tiZXJyeSkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgW107XG5cbiAgICB2YXIgYnJvd3NlciA9IHt9LFxuICAgICAgICBtYXRjaGVkID0ge1xuICAgICAgICAgIGJyb3dzZXI6IG1hdGNoWyA1IF0gfHwgbWF0Y2hbIDMgXSB8fCBtYXRjaFsgMSBdIHx8IFwiXCIsXG4gICAgICAgICAgdmVyc2lvbjogbWF0Y2hbIDIgXSB8fCBtYXRjaFsgNCBdIHx8IFwiMFwiLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXI6IG1hdGNoWyA0IF0gfHwgbWF0Y2hbIDIgXSB8fCBcIjBcIixcbiAgICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm1fbWF0Y2hbIDAgXSB8fCBcIlwiXG4gICAgICAgIH07XG5cbiAgICBpZiAoIG1hdGNoZWQuYnJvd3NlciApIHtcbiAgICAgIGJyb3dzZXJbIG1hdGNoZWQuYnJvd3NlciBdID0gdHJ1ZTtcbiAgICAgIGJyb3dzZXIudmVyc2lvbiA9IG1hdGNoZWQudmVyc2lvbjtcbiAgICAgIGJyb3dzZXIudmVyc2lvbk51bWJlciA9IHBhcnNlSW50KG1hdGNoZWQudmVyc2lvbk51bWJlciwgMTApO1xuICAgIH1cblxuICAgIGlmICggbWF0Y2hlZC5wbGF0Zm9ybSApIHtcbiAgICAgIGJyb3dzZXJbIG1hdGNoZWQucGxhdGZvcm0gXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgYXJlIGFsbCBjb25zaWRlcmVkIG1vYmlsZSBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBtb2JpbGUgYnJvd3NlclxuICAgIGlmICggYnJvd3Nlci5hbmRyb2lkIHx8IGJyb3dzZXIuYmIgfHwgYnJvd3Nlci5ibGFja2JlcnJ5IHx8IGJyb3dzZXIuaXBhZCB8fCBicm93c2VyLmlwaG9uZSB8fFxuICAgICAgYnJvd3Nlci5pcG9kIHx8IGJyb3dzZXIua2luZGxlIHx8IGJyb3dzZXIucGxheWJvb2sgfHwgYnJvd3Nlci5zaWxrIHx8IGJyb3dzZXJbIFwid2luZG93cyBwaG9uZVwiIF0pIHtcbiAgICAgIGJyb3dzZXIubW9iaWxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGVzZSBhcmUgYWxsIGNvbnNpZGVyZWQgZGVza3RvcCBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBkZXNrdG9wIGJyb3dzZXJcbiAgICBpZiAoIGJyb3dzZXIuY3JvcyB8fCBicm93c2VyLm1hYyB8fCBicm93c2VyLmxpbnV4IHx8IGJyb3dzZXIud2luICkge1xuICAgICAgYnJvd3Nlci5kZXNrdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaHJvbWUsIE9wZXJhIDE1KyBhbmQgU2FmYXJpIGFyZSB3ZWJraXQgYmFzZWQgYnJvd3NlcnNcbiAgICBpZiAoIGJyb3dzZXIuY2hyb21lIHx8IGJyb3dzZXIub3ByIHx8IGJyb3dzZXIuc2FmYXJpICkge1xuICAgICAgYnJvd3Nlci53ZWJraXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIElFMTEgaGFzIGEgbmV3IHRva2VuIHNvIHdlIHdpbGwgYXNzaWduIGl0IG1zaWUgdG8gYXZvaWQgYnJlYWtpbmcgY2hhbmdlc1xuICAgIGlmICggYnJvd3Nlci5ydiB8fCBicm93c2VyLmllbW9iaWxlKSB7XG4gICAgICB2YXIgaWUgPSBcIm1zaWVcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gaWU7XG4gICAgICBicm93c2VyW2llXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gRWRnZSBpcyBvZmZpY2lhbGx5IGtub3duIGFzIE1pY3Jvc29mdCBFZGdlLCBzbyByZXdyaXRlIHRoZSBrZXkgdG8gbWF0Y2hcbiAgICBpZiAoIGJyb3dzZXIuZWRnZSApIHtcbiAgICAgIGRlbGV0ZSBicm93c2VyLmVkZ2U7XG4gICAgICB2YXIgbXNlZGdlID0gXCJtc2VkZ2VcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gbXNlZGdlO1xuICAgICAgYnJvd3Nlclttc2VkZ2VdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBCbGFja2JlcnJ5IGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpIG9uIEJsYWNrQmVycnlcbiAgICBpZiAoIGJyb3dzZXIuc2FmYXJpICYmIGJyb3dzZXIuYmxhY2tiZXJyeSApIHtcbiAgICAgIHZhciBibGFja2JlcnJ5ID0gXCJibGFja2JlcnJ5XCI7XG5cbiAgICAgIG1hdGNoZWQuYnJvd3NlciA9IGJsYWNrYmVycnk7XG4gICAgICBicm93c2VyW2JsYWNrYmVycnldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5Ym9vayBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBQbGF5Ym9va1xuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5wbGF5Ym9vayApIHtcbiAgICAgIHZhciBwbGF5Ym9vayA9IFwicGxheWJvb2tcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gcGxheWJvb2s7XG4gICAgICBicm93c2VyW3BsYXlib29rXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQkIxMCBpcyBhIG5ld2VyIE9TIHZlcnNpb24gb2YgQmxhY2tCZXJyeVxuICAgIGlmICggYnJvd3Nlci5iYiApIHtcbiAgICAgIHZhciBiYiA9IFwiYmxhY2tiZXJyeVwiO1xuXG4gICAgICBtYXRjaGVkLmJyb3dzZXIgPSBiYjtcbiAgICAgIGJyb3dzZXJbYmJdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPcGVyYSAxNSsgYXJlIGlkZW50aWZpZWQgYXMgb3ByXG4gICAgaWYgKCBicm93c2VyLm9wciApIHtcbiAgICAgIHZhciBvcGVyYSA9IFwib3BlcmFcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gb3BlcmE7XG4gICAgICBicm93c2VyW29wZXJhXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU3RvY2sgQW5kcm9pZCBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBBbmRyb2lkLlxuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5hbmRyb2lkICkge1xuICAgICAgdmFyIGFuZHJvaWQgPSBcImFuZHJvaWRcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gYW5kcm9pZDtcbiAgICAgIGJyb3dzZXJbYW5kcm9pZF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEtpbmRsZSBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBLaW5kbGVcbiAgICBpZiAoIGJyb3dzZXIuc2FmYXJpICYmIGJyb3dzZXIua2luZGxlICkge1xuICAgICAgdmFyIGtpbmRsZSA9IFwia2luZGxlXCI7XG5cbiAgICAgIG1hdGNoZWQuYnJvd3NlciA9IGtpbmRsZTtcbiAgICAgIGJyb3dzZXJba2luZGxlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgIC8vIEtpbmRsZSBTaWxrIGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpIG9uIEtpbmRsZVxuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5zaWxrICkge1xuICAgICAgdmFyIHNpbGsgPSBcInNpbGtcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gc2lsaztcbiAgICAgIGJyb3dzZXJbc2lsa10gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbiB0aGUgbmFtZSBhbmQgcGxhdGZvcm0gdmFyaWFibGVcbiAgICBicm93c2VyLm5hbWUgPSBtYXRjaGVkLmJyb3dzZXI7XG4gICAgYnJvd3Nlci5wbGF0Zm9ybSA9IG1hdGNoZWQucGxhdGZvcm07XG4gICAgcmV0dXJuIGJyb3dzZXI7XG4gIH1cblxuICAvLyBSdW4gdGhlIG1hdGNoaW5nIHByb2Nlc3MsIGFsc28gYXNzaWduIHRoZSBmdW5jdGlvbiB0byB0aGUgcmV0dXJuZWQgb2JqZWN0XG4gIC8vIGZvciBtYW51YWwsIGpRdWVyeS1mcmVlIHVzZSBpZiBkZXNpcmVkXG4gIHdpbmRvdy5qUUJyb3dzZXIgPSB1YU1hdGNoKCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuICB3aW5kb3cualFCcm93c2VyLnVhTWF0Y2ggPSB1YU1hdGNoO1xuXG4gIC8vIE9ubHkgYXNzaWduIHRvIGpRdWVyeS5icm93c2VyIGlmIGpRdWVyeSBpcyBsb2FkZWRcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LmJyb3dzZXIgPSB3aW5kb3cualFCcm93c2VyO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5qUUJyb3dzZXI7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnkuYnJvd3Nlci9kaXN0L2pxdWVyeS5icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISBwaWN0dXJlZmlsbCAtIHYzLjAuMiAtIDIwMTYtMDItMTJcbiAqIGh0dHBzOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbC9cbiAqIENvcHlyaWdodCAoYykgMjAxNiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0OyBMaWNlbnNlZCBNSVRcbiAqL1xuLyohIEdlY2tvLVBpY3R1cmUgLSB2MS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL3RyZWUvMy4wL3NyYy9wbHVnaW5zL2dlY2tvLXBpY3R1cmVcbiAqIEZpcmVmb3gncyBlYXJseSBwaWN0dXJlIGltcGxlbWVudGF0aW9uIChwcmlvciB0byBGRjQxKSBpcyBzdGF0aWMgYW5kIGRvZXNcbiAqIG5vdCByZWFjdCB0byB2aWV3cG9ydCBjaGFuZ2VzLiBUaGlzIHRpbnkgbW9kdWxlIGZpeGVzIHRoaXMuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRpZiAoIHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA8IDQ1KSApIHtcblx0XHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aW1lcjtcblxuXHRcdFx0dmFyIGR1bW15U3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblxuXHRcdFx0dmFyIGZpeFJlc3BpbWcgPSBmdW5jdGlvbihpbWcpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSwgc2l6ZXM7XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gaW1nLnBhcmVudE5vZGU7XG5cblx0XHRcdFx0aWYgKHBpY3R1cmUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCIpIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBkdW1teVNyYy5jbG9uZU5vZGUoKTtcblxuXHRcdFx0XHRcdHBpY3R1cmUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgcGljdHVyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHBpY3R1cmUucmVtb3ZlQ2hpbGQoc291cmNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICghaW1nLl9wZkxhc3RTaXplIHx8IGltZy5vZmZzZXRXaWR0aCA+IGltZy5fcGZMYXN0U2l6ZSkge1xuXHRcdFx0XHRcdGltZy5fcGZMYXN0U2l6ZSA9IGltZy5vZmZzZXRXaWR0aDtcblx0XHRcdFx0XHRzaXplcyA9IGltZy5zaXplcztcblx0XHRcdFx0XHRpbWcuc2l6ZXMgKz0gXCIsMTAwdndcIjtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW1nLnNpemVzID0gc2l6ZXM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciBmaW5kUGljdHVyZUltZ3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBpY3R1cmUgPiBpbWcsIGltZ1tzcmNzZXRdW3NpemVzXVwiKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmaXhSZXNwaW1nKGltZ3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmaW5kUGljdHVyZUltZ3MsIDk5KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpO1xuXHRcdFx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0b25SZXNpemUoKTtcblxuXHRcdFx0XHRpZiAobXEgJiYgbXEuYWRkTGlzdGVuZXIpIHtcblx0XHRcdFx0XHRtcS5hZGRMaXN0ZW5lcihvblJlc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGR1bW15U3JjLnNyY3NldCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblxuXHRcdFx0aWYgKC9eW2N8aV18ZCQvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiKSkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9uUmVzaXplO1xuXHRcdH0pKCkpO1xuXHR9XG59KSh3aW5kb3cpO1xuXG4vKiEgUGljdHVyZWZpbGwgLSB2My4wLjJcbiAqIGh0dHA6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDtcbiAqICBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblx0Ly8gRW5hYmxlIHN0cmljdCBtb2RlXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIEhUTUwgc2hpbXx2IGl0IGZvciBvbGQgSUUgKElFOSB3aWxsIHN0aWxsIG5lZWQgdGhlIEhUTUwgdmlkZW8gdGFnIHdvcmthcm91bmQpXG5cdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwicGljdHVyZVwiICk7XG5cblx0dmFyIHdhcm4sIGVtaW5weCwgYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciwgZXZhbElkO1xuXHQvLyBsb2NhbCBvYmplY3QgZm9yIG1ldGhvZCByZWZlcmVuY2VzIGFuZCB0ZXN0aW5nIGV4cG9zdXJlXG5cdHZhciBwZiA9IHt9O1xuXHR2YXIgaXNTdXBwb3J0VGVzdFJlYWR5ID0gZmFsc2U7XG5cdHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdHZhciByZW1vdmVJbWdBdHRyID0gaW1hZ2UucmVtb3ZlQXR0cmlidXRlO1xuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0dmFyIHR5cGVzID0ge307XG5cdHZhciBjZmcgPSB7XG5cdFx0Ly9yZXNvdXJjZSBzZWxlY3Rpb246XG5cdFx0YWxnb3JpdGhtOiBcIlwiXG5cdH07XG5cdHZhciBzcmNBdHRyID0gXCJkYXRhLXBmc3JjXCI7XG5cdHZhciBzcmNzZXRBdHRyID0gc3JjQXR0ciArIFwic2V0XCI7XG5cdC8vIHVhIHNuaWZmaW5nIGlzIGRvbmUgZm9yIHVuZGV0ZWN0YWJsZSBpbWcgbG9hZGluZyBmZWF0dXJlcyxcblx0Ly8gdG8gZG8gc29tZSBub24gY3J1Y2lhbCBwZXJmIG9wdGltaXphdGlvbnNcblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIHN1cHBvcnRBYm9ydCA9ICgvcmlkZW50LykudGVzdCh1YSkgfHwgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA+IDM1ICk7XG5cdHZhciBjdXJTcmNQcm9wID0gXCJjdXJyZW50U3JjXCI7XG5cdHZhciByZWdXRGVzYyA9IC9cXHMrXFwrP1xcZCsoZVxcZCspP3cvO1xuXHR2YXIgcmVnU2l6ZSA9IC8oXFwoW14pXStcXCkpP1xccyooLispLztcblx0dmFyIHNldE9wdGlvbnMgPSB3aW5kb3cucGljdHVyZWZpbGxDRkc7XG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy9zcGVjcy9taXhlZGNvbnRlbnQvI3Jlc3RyaWN0cy1taXhlZC1jb250ZW50ICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHQvLyBiYXNlU3R5bGUgYWxzbyB1c2VkIGJ5IGdldEVtVmFsdWUgKGkuZS46IHdpZHRoOiAxZW0gaXMgaW1wb3J0YW50KVxuXHR2YXIgYmFzZVN0eWxlID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW07b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCI7XG5cdHZhciBmc0NzcyA9IFwiZm9udC1zaXplOjEwMCUhaW1wb3J0YW50O1wiO1xuXHR2YXIgaXNWd0RpcnR5ID0gdHJ1ZTtcblxuXHR2YXIgY3NzQ2FjaGUgPSB7fTtcblx0dmFyIHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXHR2YXIgRFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciB1bml0cyA9IHtcblx0XHRweDogMSxcblx0XHRcImluXCI6IDk2XG5cdH07XG5cdHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHQvKipcblx0ICogYWxyZWFkeVJ1biBmbGFnIHVzZWQgZm9yIHNldE9wdGlvbnMuIGlzIGl0IHRydWUgc2V0T3B0aW9ucyB3aWxsIHJlZXZhbHVhdGVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR2YXIgYWxyZWFkeVJ1biA9IGZhbHNlO1xuXG5cdC8vIFJldXNhYmxlLCBub24tXCJnXCIgUmVnZXhlc1xuXG5cdC8vIChEb24ndCB1c2UgXFxzLCB0byBhdm9pZCBtYXRjaGluZyBub24tYnJlYWtpbmcgc3BhY2UuKVxuXHR2YXIgcmVnZXhMZWFkaW5nU3BhY2VzID0gL15bIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ05vdFNwYWNlcyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4VHJhaWxpbmdDb21tYXMgPSAvWyxdKyQvLFxuXHQgICAgcmVnZXhOb25OZWdhdGl2ZUludGVnZXIgPSAvXlxcZCskLyxcblxuXHQgICAgLy8gKCBQb3NpdGl2ZSBvciBuZWdhdGl2ZSBvciB1bnNpZ25lZCBpbnRlZ2VycyBvciBkZWNpbWFscywgd2l0aG91dCBvciB3aXRob3V0IGV4cG9uZW50cy5cblx0ICAgIC8vIE11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgZGlnaXQuXG5cdCAgICAvLyBBY2NvcmRpbmcgdG8gc3BlYyB0ZXN0cyBhbnkgZGVjaW1hbCBwb2ludCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG5cdCAgICAvLyBObyBsZWFkaW5nIHBsdXMgc2lnbiBpcyBhbGxvd2VkLilcblx0ICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjdmFsaWQtZmxvYXRpbmctcG9pbnQtbnVtYmVyXG5cdCAgICByZWdleEZsb2F0aW5nUG9pbnQgPSAvXi0/KD86WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyQvO1xuXG5cdHZhciBvbiA9IGZ1bmN0aW9uKG9iaiwgZXZ0LCBmbiwgY2FwdHVyZSkge1xuXHRcdGlmICggb2JqLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZuLCBjYXB0dXJlIHx8IGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKCBvYmouYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIGV2dCwgZm4pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogc2ltcGxlIG1lbW9pemUgZnVuY3Rpb246XG5cdCAqL1xuXG5cdHZhciBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgY2FjaGUgPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdGlmICggIShpbnB1dCBpbiBjYWNoZSkgKSB7XG5cdFx0XHRcdGNhY2hlWyBpbnB1dCBdID0gZm4oaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlWyBpbnB1dCBdO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHQvLyBNYW51YWwgaXMgZmFzdGVyIHRoYW4gUmVnRXhcblx0Ly8gaHR0cDovL2pzcGVyZi5jb20vd2hpdGVzcGFjZS1jaGFyYWN0ZXIvNVxuXHRmdW5jdGlvbiBpc1NwYWNlKGMpIHtcblx0XHRyZXR1cm4gKGMgPT09IFwiXFx1MDAyMFwiIHx8IC8vIHNwYWNlXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMDlcIiB8fCAvLyBob3Jpem9udGFsIHRhYlxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBBXCIgfHwgLy8gbmV3IGxpbmVcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQ1wiIHx8IC8vIGZvcm0gZmVlZFxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBEXCIpOyAgLy8gY2FycmlhZ2UgcmV0dXJuXG5cdH1cblxuXHQvKipcblx0ICogZ2V0cyBhIG1lZGlhcXVlcnkgYW5kIHJldHVybnMgYSBib29sZWFuIG9yIGdldHMgYSBjc3MgbGVuZ3RoIGFuZCByZXR1cm5zIGEgbnVtYmVyXG5cdCAqIEBwYXJhbSBjc3MgbWVkaWFxdWVyaWVzIG9yIGNzcyBsZW5ndGhcblx0ICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuXHQgKlxuXHQgKiBiYXNlZCBvbjogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9kYjRmNzcwMDliMTU1ZjA4MzczOFxuXHQgKi9cblx0dmFyIGV2YWxDU1MgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcmVnTGVuZ3RoID0gL14oW1xcZFxcLl0rKShlbXx2d3xweCkkLztcblx0XHR2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4ID0gMCwgc3RyaW5nID0gYXJnc1swXTtcblx0XHRcdHdoaWxlICgrK2luZGV4IGluIGFyZ3MpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoYXJnc1tpbmRleF0sIGFyZ3NbKytpbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9O1xuXG5cdFx0dmFyIGJ1aWxkU3RyID0gbWVtb2l6ZShmdW5jdGlvbihjc3MpIHtcblxuXHRcdFx0cmV0dXJuIFwicmV0dXJuIFwiICsgcmVwbGFjZSgoY3NzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdC8vIGludGVycHJldCBgYW5kYFxuXHRcdFx0XHQvXFxiYW5kXFxiL2csIFwiJiZcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYCxgXG5cdFx0XHRcdC8sL2csIFwifHxcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1pbi1gIGFzID49XG5cdFx0XHRcdC9taW4tKFthLXotXFxzXSspOi9nLCBcImUuJDE+PVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWF4LWAgYXMgPD1cblx0XHRcdFx0L21heC0oW2Etei1cXHNdKyk6L2csIFwiZS4kMTw9XCIsXG5cblx0XHRcdFx0Ly9jYWxjIHZhbHVlXG5cdFx0XHRcdC9jYWxjKFteKV0rKS9nLCBcIigkMSlcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgY3NzIHZhbHVlc1xuXHRcdFx0XHQvKFxcZCtbXFwuXSpbXFxkXSopKFthLXpdKykvZywgXCIoJDEgKiBlLiQyKVwiLFxuXHRcdFx0XHQvL21ha2UgZXZhbCBsZXNzIGV2aWxcblx0XHRcdFx0L14oPyEoZS5bYS16XXxbMC05XFwuJj18PjxcXCtcXC1cXCpcXChcXClcXC9dKSkuKi9pZywgXCJcIlxuXHRcdFx0KSArIFwiO1wiO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzcywgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgcGFyc2VkTGVuZ3RoO1xuXHRcdFx0aWYgKCEoY3NzIGluIGNzc0NhY2hlKSkge1xuXHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gZmFsc2U7XG5cdFx0XHRcdGlmIChsZW5ndGggJiYgKHBhcnNlZExlbmd0aCA9IGNzcy5tYXRjaCggcmVnTGVuZ3RoICkpKSB7XG5cdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IHBhcnNlZExlbmd0aFsgMSBdICogdW5pdHNbcGFyc2VkTGVuZ3RoWyAyIF1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBuZXcgRnVuY3Rpb24oXCJlXCIsIGJ1aWxkU3RyKGNzcykpKHVuaXRzKTtcblx0XHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDpmYWxzZSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3NzQ2FjaGVbY3NzXTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBzZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oIGNhbmRpZGF0ZSwgc2l6ZXNhdHRyICkge1xuXHRcdGlmICggY2FuZGlkYXRlLncgKSB7IC8vIGggPSBtZWFucyBoZWlnaHQ6IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gJ2gnIGRvIG5vdCBoYW5kbGUgeWV0Li4uXG5cdFx0XHRjYW5kaWRhdGUuY1dpZHRoID0gcGYuY2FsY0xpc3RMZW5ndGgoIHNpemVzYXR0ciB8fCBcIjEwMHZ3XCIgKTtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUudyAvIGNhbmRpZGF0ZS5jV2lkdGggO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLmQ7XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBvcHRcblx0ICovXG5cdHZhciBwaWN0dXJlZmlsbCA9IGZ1bmN0aW9uKCBvcHQgKSB7XG5cblx0XHRpZiAoIWlzU3VwcG9ydFRlc3RSZWFkeSkge3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudHMsIGksIHBsZW47XG5cblx0XHR2YXIgb3B0aW9ucyA9IG9wdCB8fCB7fTtcblxuXHRcdGlmICggb3B0aW9ucy5lbGVtZW50cyAmJiBvcHRpb25zLmVsZW1lbnRzLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgWyBvcHRpb25zLmVsZW1lbnRzIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmVsZW1lbnRzO1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IHBmLnFzYSggKG9wdGlvbnMuY29udGV4dCB8fCBkb2N1bWVudCksICggb3B0aW9ucy5yZWV2YWx1YXRlIHx8IG9wdGlvbnMucmVzZWxlY3QgKSA/IHBmLnNlbCA6IHBmLnNlbFNob3J0ICk7XG5cblx0XHRpZiAoIChwbGVuID0gZWxlbWVudHMubGVuZ3RoKSApIHtcblxuXHRcdFx0cGYuc2V0dXBSdW4oIG9wdGlvbnMgKTtcblx0XHRcdGFscmVhZHlSdW4gPSB0cnVlO1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBsZW47IGkrKyApIHtcblx0XHRcdFx0cGYuZmlsbEltZyhlbGVtZW50c1sgaSBdLCBvcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cGYudGVhcmRvd25SdW4oIG9wdGlvbnMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIG91dHB1dHMgYSB3YXJuaW5nIGZvciB0aGUgZGV2ZWxvcGVyXG5cdCAqIEBwYXJhbSB7bWVzc2FnZX1cblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0d2FybiA9ICggd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuICkgP1xuXHRcdGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBtZXNzYWdlICk7XG5cdFx0fSA6XG5cdFx0bm9vcFxuXHQ7XG5cblx0aWYgKCAhKGN1clNyY1Byb3AgaW4gaW1hZ2UpICkge1xuXHRcdGN1clNyY1Byb3AgPSBcInNyY1wiO1xuXHR9XG5cblx0Ly8gQWRkIHN1cHBvcnQgZm9yIHN0YW5kYXJkIG1pbWUgdHlwZXMuXG5cdHR5cGVzWyBcImltYWdlL2pwZWdcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvZ2lmXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL3BuZ1wiIF0gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRldGVjdFR5cGVTdXBwb3J0KCB0eXBlLCB0eXBlVXJpICkge1xuXHRcdC8vIGJhc2VkIG9uIE1vZGVybml6cidzIGxvc3NsZXNzIGltZy13ZWJwIHRlc3Rcblx0XHQvLyBub3RlOiBhc3luY2hyb25vdXNcblx0XHR2YXIgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG5cdFx0aW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGZhbHNlO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGltYWdlLndpZHRoID09PSAxO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLnNyYyA9IHR5cGVVcmk7XG5cdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHR9XG5cblx0Ly8gdGVzdCBzdmcgc3VwcG9ydFxuXHR0eXBlc1sgXCJpbWFnZS9zdmcreG1sXCIgXSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoIFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLCBcIjEuMVwiICk7XG5cblx0LyoqXG5cdCAqIHVwZGF0ZXMgdGhlIGludGVybmFsIHZXIHByb3BlcnR5IHdpdGggdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGggaW4gcHhcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoKSB7XG5cblx0XHRpc1Z3RGlydHkgPSBmYWxzZTtcblx0XHREUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjc3NDYWNoZSA9IHt9O1xuXHRcdHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXG5cdFx0cGYuRFBSID0gRFBSIHx8IDE7XG5cblx0XHR1bml0cy53aWR0aCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpO1xuXHRcdHVuaXRzLmhlaWdodCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLCBkb2NFbGVtLmNsaWVudEhlaWdodCk7XG5cblx0XHR1bml0cy52dyA9IHVuaXRzLndpZHRoIC8gMTAwO1xuXHRcdHVuaXRzLnZoID0gdW5pdHMuaGVpZ2h0IC8gMTAwO1xuXG5cdFx0ZXZhbElkID0gWyB1bml0cy5oZWlnaHQsIHVuaXRzLndpZHRoLCBEUFIgXS5qb2luKFwiLVwiKTtcblxuXHRcdHVuaXRzLmVtID0gcGYuZ2V0RW1WYWx1ZSgpO1xuXHRcdHVuaXRzLnJlbSA9IHVuaXRzLmVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hvb3NlTG93UmVzKCBsb3dlclZhbHVlLCBoaWdoZXJWYWx1ZSwgZHByVmFsdWUsIGlzQ2FjaGVkICkge1xuXHRcdHZhciBib251c0ZhY3RvciwgdG9vTXVjaCwgYm9udXMsIG1lYW5EZW5zaXR5O1xuXG5cdFx0Ly9leHBlcmltZW50YWxcblx0XHRpZiAoY2ZnLmFsZ29yaXRobSA9PT0gXCJzYXZlRGF0YVwiICl7XG5cdFx0XHRpZiAoIGxvd2VyVmFsdWUgPiAyLjcgKSB7XG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gZHByVmFsdWUgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9vTXVjaCA9IGhpZ2hlclZhbHVlIC0gZHByVmFsdWU7XG5cdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJWYWx1ZSAtIDAuNiwgMS41KTtcblxuXHRcdFx0XHRib251cyA9IHRvb011Y2ggKiBib251c0ZhY3RvcjtcblxuXHRcdFx0XHRpZiAoaXNDYWNoZWQpIHtcblx0XHRcdFx0XHRib251cyArPSAwLjEgKiBib251c0ZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gbG93ZXJWYWx1ZSArIGJvbnVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZWFuRGVuc2l0eSA9IChkcHJWYWx1ZSA+IDEpID9cblx0XHRcdFx0TWF0aC5zcXJ0KGxvd2VyVmFsdWUgKiBoaWdoZXJWYWx1ZSkgOlxuXHRcdFx0XHRsb3dlclZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWFuRGVuc2l0eSA+IGRwclZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlCZXN0Q2FuZGlkYXRlKCBpbWcgKSB7XG5cdFx0dmFyIHNyY1NldENhbmRpZGF0ZXM7XG5cdFx0dmFyIG1hdGNoaW5nU2V0ID0gcGYuZ2V0U2V0KCBpbWcgKTtcblx0XHR2YXIgZXZhbHVhdGVkID0gZmFsc2U7XG5cdFx0aWYgKCBtYXRjaGluZ1NldCAhPT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRldmFsdWF0ZWQgPSBldmFsSWQ7XG5cdFx0XHRpZiAoIG1hdGNoaW5nU2V0ICkge1xuXHRcdFx0XHRzcmNTZXRDYW5kaWRhdGVzID0gcGYuc2V0UmVzKCBtYXRjaGluZ1NldCApO1xuXHRcdFx0XHRwZi5hcHBseVNldENhbmRpZGF0ZSggc3JjU2V0Q2FuZGlkYXRlcywgaW1nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZ1sgcGYubnMgXS5ldmFsZWQgPSBldmFsdWF0ZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhc2NlbmRpbmdTb3J0KCBhLCBiICkge1xuXHRcdHJldHVybiBhLnJlcyAtIGIucmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U3JjVG9DdXIoIGltZywgc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZTtcblx0XHRpZiAoICFzZXQgJiYgc3JjICkge1xuXHRcdFx0c2V0ID0gaW1nWyBwZi5ucyBdLnNldHM7XG5cdFx0XHRzZXQgPSBzZXQgJiYgc2V0W3NldC5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRjYW5kaWRhdGUgPSBnZXRDYW5kaWRhdGVGb3JTcmMoc3JjLCBzZXQpO1xuXG5cdFx0aWYgKCBjYW5kaWRhdGUgKSB7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyU3JjID0gc3JjO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1ckNhbiA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCAhY2FuZGlkYXRlLnJlcyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlLCBjYW5kaWRhdGUuc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYW5kaWRhdGVGb3JTcmMoIHNyYywgc2V0ICkge1xuXHRcdHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzcmMgJiYgc2V0ICkge1xuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBzcmMgPT09IHBmLm1ha2VVcmwoY2FuZGlkYXRlc1sgaSBdLnVybCkgKSB7XG5cdFx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBbGxTb3VyY2VFbGVtZW50cyggcGljdHVyZSwgY2FuZGlkYXRlcyApIHtcblx0XHR2YXIgaSwgbGVuLCBzb3VyY2UsIHNyY3NldDtcblxuXHRcdC8vIFNQRUMgbWlzbWF0Y2ggaW50ZW5kZWQgZm9yIHNpemUgYW5kIHBlcmY6XG5cdFx0Ly8gYWN0dWFsbHkgb25seSBzb3VyY2UgZWxlbWVudHMgcHJlY2VkaW5nIHRoZSBpbWcgc2hvdWxkIGJlIHVzZWRcblx0XHQvLyBhbHNvIG5vdGU6IGRvbid0IHVzZSBxc2EgaGVyZSwgYmVjYXVzZSBJRTggc29tZXRpbWVzIGRvZXNuJ3QgbGlrZSBzb3VyY2UgYXMgdGhlIGtleSBwYXJ0IGluIGEgc2VsZWN0b3Jcblx0XHR2YXIgc291cmNlcyA9IHBpY3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic291cmNlXCIgKTtcblxuXHRcdGZvciAoIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0c291cmNlID0gc291cmNlc1sgaSBdO1xuXHRcdFx0c291cmNlWyBwZi5ucyBdID0gdHJ1ZTtcblx0XHRcdHNyY3NldCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic3Jjc2V0XCIgKTtcblxuXHRcdFx0Ly8gaWYgc291cmNlIGRvZXMgbm90IGhhdmUgYSBzcmNzZXQgYXR0cmlidXRlLCBza2lwXG5cdFx0XHRpZiAoIHNyY3NldCApIHtcblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKCB7XG5cdFx0XHRcdFx0c3Jjc2V0OiBzcmNzZXQsXG5cdFx0XHRcdFx0bWVkaWE6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwibWVkaWFcIiApLFxuXHRcdFx0XHRcdHR5cGU6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRcdFx0c2l6ZXM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic2l6ZXNcIiApXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU3Jjc2V0IFBhcnNlclxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogQHJldHVybnMgQXJyYXkgW3t1cmw6IF8sIGQ6IF8sIHc6IF8sIGg6Xywgc2V0Ol8oPz8/Pyl9LCAuLi5dXG5cdCAqXG5cdCAqIEJhc2VkIHN1cGVyIGR1cGVyIGNsb3NlbHkgb24gdGhlIHJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNyY3NldC1hdHRyaWJ1dGVcblx0ICovXG5cblx0Ly8gMS4gTGV0IGlucHV0IGJlIHRoZSB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vIChUTy1ETyA6IEV4cGxhaW4gd2hhdCBcInNldFwiIGFyZ3VtZW50IGlzIGhlcmUuIE1heWJlIGNob29zZSBhIG1vcmVcblx0Ly8gZGVzY3JpcHRpdmUgJiBtb3JlIHNlYXJjaGFibGUgbmFtZS4gIFNpbmNlIHBhc3NpbmcgdGhlIFwic2V0XCIgaW4gcmVhbGx5IGhhc1xuXHQvLyBub3RoaW5nIHRvIGRvIHdpdGggcGFyc2luZyBwcm9wZXIsIEkgd291bGQgcHJlZmVyIHRoaXMgYXNzaWdubWVudCBldmVudHVhbGx5XG5cdC8vIGdvIGluIGFuIGV4dGVybmFsIGZuLilcblx0ZnVuY3Rpb24gcGFyc2VTcmNzZXQoaW5wdXQsIHNldCkge1xuXG5cdFx0ZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcblx0XHRcdHZhciBjaGFycyxcblx0XHRcdCAgICBtYXRjaCA9IHJlZ0V4LmV4ZWMoaW5wdXQuc3Vic3RyaW5nKHBvcykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGNoYXJzID0gbWF0Y2hbIDAgXTtcblx0XHRcdFx0cG9zICs9IGNoYXJzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIGNoYXJzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgdXJsLFxuXHRcdCAgICBkZXNjcmlwdG9ycyxcblx0XHQgICAgY3VycmVudERlc2NyaXB0b3IsXG5cdFx0ICAgIHN0YXRlLFxuXHRcdCAgICBjLFxuXG5cdFx0ICAgIC8vIDIuIExldCBwb3NpdGlvbiBiZSBhIHBvaW50ZXIgaW50byBpbnB1dCwgaW5pdGlhbGx5IHBvaW50aW5nIGF0IHRoZSBzdGFydFxuXHRcdCAgICAvLyAgICBvZiB0aGUgc3RyaW5nLlxuXHRcdCAgICBwb3MgPSAwLFxuXG5cdFx0ICAgIC8vIDMuIExldCBjYW5kaWRhdGVzIGJlIGFuIGluaXRpYWxseSBlbXB0eSBzb3VyY2Ugc2V0LlxuXHRcdCAgICBjYW5kaWRhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQqIEFkZHMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHRvIGEgY2FuZGlkYXRlLCBwdXNoZXMgdG8gdGhlIGNhbmRpZGF0ZXMgYXJyYXlcblx0XHQqIEByZXR1cm4gdW5kZWZpbmVkXG5cdFx0Ki9cblx0XHQvLyAoRGVjbGFyZWQgb3V0c2lkZSBvZiB0aGUgd2hpbGUgbG9vcCBzbyB0aGF0IGl0J3Mgb25seSBjcmVhdGVkIG9uY2UuXG5cdFx0Ly8gKFRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0Ly8gVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdGZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRvcnMoKSB7XG5cblx0XHRcdC8vIDkuIERlc2NyaXB0b3IgcGFyc2VyOiBMZXQgZXJyb3IgYmUgbm8uXG5cdFx0XHR2YXIgcEVycm9yID0gZmFsc2UsXG5cblx0XHRcdC8vIDEwLiBMZXQgd2lkdGggYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTEuIExldCBkZW5zaXR5IGJlIGFic2VudC5cblx0XHRcdC8vIDEyLiBMZXQgZnV0dXJlLWNvbXBhdC1oIGJlIGFic2VudC4gKFdlJ3JlIGltcGxlbWVudGluZyBpdCBub3cgYXMgaClcblx0XHRcdCAgICB3LCBkLCBoLCBpLFxuXHRcdFx0ICAgIGNhbmRpZGF0ZSA9IHt9LFxuXHRcdFx0ICAgIGRlc2MsIGxhc3RDaGFyLCB2YWx1ZSwgaW50VmFsLCBmbG9hdFZhbDtcblxuXHRcdFx0Ly8gMTMuIEZvciBlYWNoIGRlc2NyaXB0b3IgaW4gZGVzY3JpcHRvcnMsIHJ1biB0aGUgYXBwcm9wcmlhdGUgc2V0IG9mIHN0ZXBzXG5cdFx0XHQvLyBmcm9tIHRoZSBmb2xsb3dpbmcgbGlzdDpcblx0XHRcdGZvciAoaSA9IDAgOyBpIDwgZGVzY3JpcHRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzYyA9IGRlc2NyaXB0b3JzWyBpIF07XG5cblx0XHRcdFx0bGFzdENoYXIgPSBkZXNjWyBkZXNjLmxlbmd0aCAtIDEgXTtcblx0XHRcdFx0dmFsdWUgPSBkZXNjLnN1YnN0cmluZygwLCBkZXNjLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzcgTEFUSU4gU01BTEwgTEVUVEVSIFcgY2hhcmFjdGVyXG5cdFx0XHRcdGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwid1wiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGggYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgbGV0IHdpZHRoIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHt3ID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3OCBMQVRJTiBTTUFMTCBMRVRURVIgWCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleEZsb2F0aW5nUG9pbnQudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcInhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoLCBkZW5zaXR5IGFuZCBmdXR1cmUtY29tcGF0LWggYXJlIG5vdCBhbGwgYWJzZW50LCB0aGVuIGxldCBlcnJvclxuXHRcdFx0XHRcdC8vIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkIHx8IGgpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBmbG9hdGluZy1wb2ludCBudW1iZXIgdmFsdWVzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgbGVzcyB0aGFuIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGRlbnNpdHlcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChmbG9hdFZhbCA8IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7ZCA9IGZsb2F0VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDY4IExBVElOIFNNQUxMIExFVFRFUiBIIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJoXCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBoZWlnaHQgYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmIChoIHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBmdXR1cmUtY29tcGF0LWhcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7aCA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSwgTGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0fSBlbHNlIHtwRXJyb3IgPSB0cnVlO31cblx0XHRcdH0gLy8gKGNsb3NlIHN0ZXAgMTMgZm9yIGxvb3ApXG5cblx0XHRcdC8vIDE1LiBJZiBlcnJvciBpcyBzdGlsbCBubywgdGhlbiBhcHBlbmQgYSBuZXcgaW1hZ2Ugc291cmNlIHRvIGNhbmRpZGF0ZXMgd2hvc2Vcblx0XHRcdC8vIFVSTCBpcyB1cmwsIGFzc29jaWF0ZWQgd2l0aCBhIHdpZHRoIHdpZHRoIGlmIG5vdCBhYnNlbnQgYW5kIGEgcGl4ZWxcblx0XHRcdC8vIGRlbnNpdHkgZGVuc2l0eSBpZiBub3QgYWJzZW50LiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAoIXBFcnJvcikge1xuXHRcdFx0XHRjYW5kaWRhdGUudXJsID0gdXJsO1xuXG5cdFx0XHRcdGlmICh3KSB7IGNhbmRpZGF0ZS53ID0gdzt9XG5cdFx0XHRcdGlmIChkKSB7IGNhbmRpZGF0ZS5kID0gZDt9XG5cdFx0XHRcdGlmIChoKSB7IGNhbmRpZGF0ZS5oID0gaDt9XG5cdFx0XHRcdGlmICghaCAmJiAhZCAmJiAhdykge2NhbmRpZGF0ZS5kID0gMTt9XG5cdFx0XHRcdGlmIChjYW5kaWRhdGUuZCA9PT0gMSkge3NldC5oYXMxeCA9IHRydWU7fVxuXHRcdFx0XHRjYW5kaWRhdGUuc2V0ID0gc2V0O1xuXG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gKGNsb3NlIHBhcnNlRGVzY3JpcHRvcnMgZm4pXG5cblx0XHQvKipcblx0XHQqIFRva2VuaXplcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgcHJpb3IgdG8gcGFyc2luZ1xuXHRcdCogUmV0dXJucyB1bmRlZmluZWQuXG5cdFx0KiAoQWdhaW4sIHRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0KiBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBsb2dpY2FsIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHRva2VuaXplKCkge1xuXG5cdFx0XHQvLyA4LjEuIERlc2NyaXB0b3IgdG9rZW5pc2VyOiBTa2lwIHdoaXRlc3BhY2Vcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ1NwYWNlcyk7XG5cblx0XHRcdC8vIDguMi4gTGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXG5cdFx0XHQvLyA4LjMuIExldCBzdGF0ZSBiZSBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblxuXHRcdFx0XHQvLyA4LjQuIExldCBjIGJlIHRoZSBjaGFyYWN0ZXIgYXQgcG9zaXRpb24uXG5cdFx0XHRcdGMgPSBpbnB1dC5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHQvLyAgRG8gdGhlIGZvbGxvd2luZyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHN0YXRlLlxuXHRcdFx0XHQvLyAgRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgc3RlcCwgXCJFT0ZcIiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHJlcHJlc2VudGluZ1xuXHRcdFx0XHQvLyAgdGhhdCBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQuXG5cblx0XHRcdFx0Ly8gSW4gZGVzY3JpcHRvclxuXHRcdFx0XHRpZiAoc3RhdGUgPT09IFwiaW4gZGVzY3JpcHRvclwiKSB7XG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXG5cdFx0XHRcdCAgLy8gU3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcdCAgLy8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHQgIC8vIGRlc2NyaXB0b3JzIGFuZCBsZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRcdCAgLy8gU2V0IHN0YXRlIHRvIGFmdGVyIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYWZ0ZXIgZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVSswMDJDIENPTU1BICgsKVxuXHRcdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LiBJZiBjdXJyZW50IGRlc2NyaXB0b3Jcblx0XHRcdFx0XHQvLyBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXBcblx0XHRcdFx0XHQvLyBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gcGFyZW5zLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcXHUwMDI4XCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIHBhcmVuc1wiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIChlbmQgXCJpbiBkZXNjcmlwdG9yXCJcblxuXHRcdFx0XHQvLyBJbiBwYXJlbnNcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpbiBwYXJlbnNcIikge1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI5IFJJR0hUIFBBUkVOVEhFU0lTICgpKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGMgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBBcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWRcblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFmdGVyIGRlc2NyaXB0b3Jcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhZnRlciBkZXNjcmlwdG9yXCIpIHtcblxuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblx0XHRcdFx0XHQvLyBTcGFjZSBjaGFyYWN0ZXI6IFN0YXkgaW4gdGhpcyBzdGF0ZS5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXG5cdFx0XHRcdFx0Ly8gRU9GOiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuIFNldCBwb3NpdGlvbiB0byB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0cG9zIC09IDE7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0cG9zICs9IDE7XG5cblx0XHRcdC8vIFJlcGVhdCB0aGlzIHN0ZXAuXG5cdFx0XHR9IC8vIChjbG9zZSB3aGlsZSB0cnVlIGxvb3ApXG5cdFx0fVxuXG5cdFx0Ly8gNC4gU3BsaXR0aW5nIGxvb3A6IENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHNwYWNlXG5cdFx0Ly8gICAgY2hhcmFjdGVycyBvciBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycy4gSWYgYW55IFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzXG5cdFx0Ly8gICAgd2VyZSBjb2xsZWN0ZWQsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMpO1xuXG5cdFx0XHQvLyA1LiBJZiBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQsIHJldHVybiBjYW5kaWRhdGVzIGFuZCBhYm9ydCB0aGVzZSBzdGVwcy5cblx0XHRcdGlmIChwb3MgPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXM7IC8vICh3ZSdyZSBkb25lLCB0aGlzIGlzIHRoZSBzb2xlIHJldHVybiBwYXRoKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyA2LiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBub3Qgc3BhY2UgY2hhcmFjdGVycyxcblx0XHRcdC8vICAgIGFuZCBsZXQgdGhhdCBiZSB1cmwuXG5cdFx0XHR1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdOb3RTcGFjZXMpO1xuXG5cdFx0XHQvLyA3LiBMZXQgZGVzY3JpcHRvcnMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cblx0XHRcdGRlc2NyaXB0b3JzID0gW107XG5cblx0XHRcdC8vIDguIElmIHVybCBlbmRzIHdpdGggYSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyICgsKSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0Ly9cdFx0KDEpLiBSZW1vdmUgYWxsIHRyYWlsaW5nIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzIGZyb20gdXJsLiBJZiB0aGlzIHJlbW92ZWRcblx0XHRcdC8vICAgICAgICAgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWdleFRyYWlsaW5nQ29tbWFzLCBcIlwiKTtcblx0XHRcdFx0Ly8gKEp1bXAgYWhlYWQgdG8gc3RlcCA5IHRvIHNraXAgdG9rZW5pemF0aW9uIGFuZCBqdXN0IHB1c2ggdGhlIGNhbmRpZGF0ZSkuXG5cdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblxuXHRcdFx0Ly9cdE90aGVyd2lzZSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9rZW5pemUoKTtcblx0XHRcdH0gLy8gKGNsb3NlIGVsc2Ugb2Ygc3RlcCA4KVxuXG5cdFx0Ly8gMTYuIFJldHVybiB0byB0aGUgc3RlcCBsYWJlbGVkIHNwbGl0dGluZyBsb29wLlxuXHRcdH0gLy8gKENsb3NlIG9mIGJpZyB3aGlsZSBsb29wLilcblx0fVxuXG5cdC8qXG5cdCAqIFNpemVzIFBhcnNlclxuXHQgKlxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogTm9uLXN0cmljdCBidXQgYWNjdXJhdGUgYW5kIGxpZ2h0d2VpZ2h0IEpTIFBhcnNlciBmb3IgdGhlIHN0cmluZyB2YWx1ZSA8aW1nIHNpemVzPVwiaGVyZVwiPlxuXHQgKlxuXHQgKiBSZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zaXplcy1hdHRyaWJ1dGVcblx0ICpcblx0ICogTW9zdCBjb21tZW50cyBhcmUgY29waWVkIGluIGRpcmVjdGx5IGZyb20gdGhlIHNwZWNcblx0ICogKGV4Y2VwdCBmb3IgY29tbWVudHMgaW4gcGFyZW5zKS5cblx0ICpcblx0ICogR3JhbW1hciBpczpcblx0ICogPHNvdXJjZS1zaXplLWxpc3Q+ID0gPHNvdXJjZS1zaXplPiMgWyAsIDxzb3VyY2Utc2l6ZS12YWx1ZT4gXT8gfCA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZT4gPSA8bWVkaWEtY29uZGl0aW9uPiA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZS12YWx1ZT4gPSA8bGVuZ3RoPlxuXHQgKiBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lbWJlZGRlZC1jb250ZW50Lmh0bWwjYXR0ci1pbWctc2l6ZXNcblx0ICpcblx0ICogRS5nLiBcIihtYXgtd2lkdGg6IDMwZW0pIDEwMHZ3LCAobWF4LXdpZHRoOiA1MGVtKSA3MHZ3LCAxMDB2d1wiXG5cdCAqIG9yIFwiKG1pbi13aWR0aDogMzBlbSksIGNhbGMoMzB2dyAtIDE1cHgpXCIgb3IganVzdCBcIjMwdndcIlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWxpZCA8Y3NzLWxlbmd0aD4gd2l0aCBhIG1lZGlhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLFxuXHQgKiBvciBcIjEwMHZ3XCIgaWYgYWxsIHZhbGlkIG1lZGlhIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gZmFsc2UuXG5cdCAqXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHBhcnNlU2l6ZXMoc3RyVmFsdWUpIHtcblxuXHRcdC8vIChQZXJjZW50YWdlIENTUyBsZW5ndGhzIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNhc2UsIHRvIGF2b2lkIGNvbmZ1c2lvbjpcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjdmFsaWQtc291cmNlLXNpemUtbGlzdFxuXHRcdC8vIENTUyBhbGxvd3MgYSBzaW5nbGUgb3B0aW9uYWwgcGx1cyBvciBtaW51cyBzaWduOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnNcblx0XHQvLyBDU1MgaXMgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNjaGFyYWN0ZXJzIClcblx0XHQvLyBTcGVjIGFsbG93cyBleHBvbmVudGlhbCBub3RhdGlvbiBmb3IgPG51bWJlcj4gdHlwZTpcblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLyNudW1iZXJzXG5cdFx0dmFyIHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzID0gL14oPzpbKy1dP1swLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8oPzpjaHxjbXxlbXxleHxpbnxtbXxwY3xwdHxweHxyZW18dmh8dm1pbnx2bWF4fHZ3KSQvaTtcblxuXHRcdC8vIChUaGlzIGlzIGEgcXVpY2sgYW5kIGxlbmllbnQgdGVzdC4gQmVjYXVzZSBvZiBvcHRpb25hbCB1bmxpbWl0ZWQtZGVwdGggaW50ZXJuYWxcblx0XHQvLyBncm91cGluZyBwYXJlbnMgYW5kIHN0cmljdCBzcGFjaW5nIHJ1bGVzLCB0aGlzIGNvdWxkIGdldCB2ZXJ5IGNvbXBsaWNhdGVkLilcblx0XHR2YXIgcmVnZXhDc3NDYWxjID0gL15jYWxjXFwoKD86WzAtOWEteiBcXC5cXCtcXC1cXCpcXC9cXChcXCldKylcXCkkL2k7XG5cblx0XHR2YXIgaTtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3Q7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoO1xuXHRcdHZhciB1bnBhcnNlZFNpemU7XG5cdFx0dmFyIGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHR2YXIgc2l6ZTtcblxuXHRcdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0XHQvLyAgKFRveSBDU1MgcGFyc2VyLiBUaGUgZ29hbHMgaGVyZSBhcmU6XG5cdFx0Ly8gIDEpIGV4cGFuc2l2ZSB0ZXN0IGNvdmVyYWdlIHdpdGhvdXQgdGhlIHdlaWdodCBvZiBhIGZ1bGwgQ1NTIHBhcnNlci5cblx0XHQvLyAgMikgQXZvaWRpbmcgcmVnZXggd2hlcmV2ZXIgY29udmVuaWVudC5cblx0XHQvLyAgUXVpY2sgdGVzdHM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvZ3RudEw0Z3IvMy9cblx0XHQvLyAgUmV0dXJucyBhbiBhcnJheSBvZiBhcnJheXMuKVxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0cikge1xuXHRcdFx0dmFyIGNocmN0cjtcblx0XHRcdHZhciBjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHR2YXIgbGlzdEFycmF5ID0gW107XG5cdFx0XHR2YXIgcGFyZW5EZXB0aCA9IDA7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudCgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnRBcnJheSgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bGlzdEFycmF5LnB1c2goY29tcG9uZW50QXJyYXkpO1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gKExvb3AgZm9yd2FyZHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuKVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Y2hyY3RyID0gc3RyLmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdGlmIChjaHJjdHIgPT09IFwiXCIpIHsgLy8gKCBFbmQgb2Ygc3RyaW5nIHJlYWNoZWQuKVxuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEFycmF5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluQ29tbWVudCkge1xuXHRcdFx0XHRcdGlmICgoY2hyY3RyID09PSBcIipcIikgJiYgKHN0cltwb3MgKyAxXSA9PT0gXCIvXCIpKSB7IC8vIChBdCBlbmQgb2YgYSBjb21tZW50Lilcblx0XHRcdFx0XHRcdGluQ29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7IC8vIChTa2lwIGFsbCBjaGFyYWN0ZXJzIGluc2lkZSBjb21tZW50cy4pXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTcGFjZShjaHJjdHIpKSB7XG5cdFx0XHRcdFx0Ly8gKElmIHByZXZpb3VzIGNoYXJhY3RlciBpbiBsb29wIHdhcyBhbHNvIGEgc3BhY2UsIG9yIGlmXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLCBkbyBub3QgYWRkIHNwYWNlIGNoYXIgdG9cblx0XHRcdFx0XHQvLyBjb21wb25lbnQuKVxuXHRcdFx0XHRcdGlmICggKHN0ci5jaGFyQXQocG9zIC0gMSkgJiYgaXNTcGFjZSggc3RyLmNoYXJBdChwb3MgLSAxKSApICkgfHwgIWNvbXBvbmVudCApIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJlbkRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRwb3MgKz0xO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIChSZXBsYWNlIGFueSBzcGFjZSBjaGFyYWN0ZXIgd2l0aCBhIHBsYWluIHNwYWNlIGZvciBsZWdpYmlsaXR5Lilcblx0XHRcdFx0XHRcdGNocmN0ciA9IFwiIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoIC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmICggKGNocmN0ciA9PT0gXCIvXCIpICYmIChzdHIuY2hhckF0KHBvcyArIDEpID09PSBcIipcIikgKSB7XG5cdFx0XHRcdFx0aW5Db21tZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXBvbmVudCArIGNocmN0cjtcblx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKHMpIHtcblx0XHRcdGlmIChyZWdleENzc0xlbmd0aFdpdGhVbml0cy50ZXN0KHMpICYmIChwYXJzZUZsb2F0KHMpID49IDApKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0aWYgKHJlZ2V4Q3NzQ2FsYy50ZXN0KHMpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0Ly8gKCBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzIHNheXM6XG5cdFx0XHQvLyBcIi0wIGlzIGVxdWl2YWxlbnQgdG8gMCBhbmQgaXMgbm90IGEgbmVnYXRpdmUgbnVtYmVyLlwiIHdoaWNoIG1lYW5zIHRoYXRcblx0XHRcdC8vIHVuaXRsZXNzIHplcm8gYW5kIHVuaXRsZXNzIG5lZ2F0aXZlIHplcm8gbXVzdCBiZSBhY2NlcHRlZCBhcyBzcGVjaWFsIGNhc2VzLilcblx0XHRcdGlmICgocyA9PT0gXCIwXCIpIHx8IChzID09PSBcIi0wXCIpIHx8IChzID09PSBcIiswXCIpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gYXNrZWQgdG8gcGFyc2UgYSBzaXplcyBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LCBwYXJzZSBhXG5cdFx0Ly8gY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50IHZhbHVlcyBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzXG5cdFx0Ly8gc2l6ZXMgYXR0cmlidXRlIChvciB0aGUgZW1wdHkgc3RyaW5nLCBpZiB0aGUgYXR0cmlidXRlIGlzIGFic2VudCksIGFuZCBsZXRcblx0XHQvLyB1bnBhcnNlZCBzaXplcyBsaXN0IGJlIHRoZSByZXN1bHQuXG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tbWEtc2VwYXJhdGVkLWxpc3Qtb2YtY29tcG9uZW50LXZhbHVlc1xuXG5cdFx0dW5wYXJzZWRTaXplc0xpc3QgPSBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHJWYWx1ZSk7XG5cdFx0dW5wYXJzZWRTaXplc0xpc3RMZW5ndGggPSB1bnBhcnNlZFNpemVzTGlzdC5sZW5ndGg7XG5cblx0XHQvLyBGb3IgZWFjaCB1bnBhcnNlZCBzaXplIGluIHVucGFyc2VkIHNpemVzIGxpc3Q6XG5cdFx0Zm9yIChpID0gMDsgaSA8IHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoOyBpKyspIHtcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZXNMaXN0W2ldO1xuXG5cdFx0XHQvLyAxLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkIHNpemUuXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgYWxyZWFkeSBvbWl0cyBzcGFjZXMgb3V0c2lkZSBvZiBwYXJlbnMuIClcblxuXHRcdFx0Ly8gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHRoYXQgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHRcblx0XHRcdC8vIGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSB3b24ndCBwdXNoIGFuIGVtcHR5IGFycmF5LiApXG5cblx0XHRcdC8vIDIuIElmIHRoZSBsYXN0IGNvbXBvbmVudCB2YWx1ZSBpbiB1bnBhcnNlZCBzaXplIGlzIGEgdmFsaWQgbm9uLW5lZ2F0aXZlXG5cdFx0XHQvLyA8c291cmNlLXNpemUtdmFsdWU+LCBsZXQgc2l6ZSBiZSBpdHMgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29tcG9uZW50IHZhbHVlXG5cdFx0XHQvLyBmcm9tIHVucGFyc2VkIHNpemUuIEFueSBDU1MgZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY2FsYygpIGZ1bmN0aW9uIGlzXG5cdFx0XHQvLyBpbnZhbGlkLiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuXHRcdFx0Ly8gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21wb25lbnQtdmFsdWVcblx0XHRcdGxhc3RDb21wb25lbnRWYWx1ZSA9IHVucGFyc2VkU2l6ZVt1bnBhcnNlZFNpemUubGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmIChpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUobGFzdENvbXBvbmVudFZhbHVlKSkge1xuXHRcdFx0XHRzaXplID0gbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdFx0XHR1bnBhcnNlZFNpemUucG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMy4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZFxuXHRcdFx0Ly8gc2l6ZS4gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVucGFyc2VkU2l6ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDQuIFBhcnNlIHRoZSByZW1haW5pbmcgY29tcG9uZW50IHZhbHVlcyBpbiB1bnBhcnNlZCBzaXplIGFzIGFcblx0XHRcdC8vIDxtZWRpYS1jb25kaXRpb24+LiBJZiBpdCBkb2VzIG5vdCBwYXJzZSBjb3JyZWN0bHksIG9yIGl0IGRvZXMgcGFyc2Vcblx0XHRcdC8vIGNvcnJlY3RseSBidXQgdGhlIDxtZWRpYS1jb25kaXRpb24+IGV2YWx1YXRlcyB0byBmYWxzZSwgY29udGludWUgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIChQYXJzaW5nIGFsbCBwb3NzaWJsZSBjb21wb3VuZCBtZWRpYSBjb25kaXRpb25zIGluIEpTIGlzIGhlYXZ5LCBjb21wbGljYXRlZCxcblx0XHRcdC8vIGFuZCB0aGUgcGF5b2ZmIGlzIHVuY2xlYXIuIElzIHRoZXJlIGV2ZXIgYW4gc2l0dWF0aW9uIHdoZXJlIHRoZVxuXHRcdFx0Ly8gbWVkaWEgY29uZGl0aW9uIHBhcnNlcyBpbmNvcnJlY3RseSBidXQgc3RpbGwgc29tZWhvdyBldmFsdWF0ZXMgdG8gdHJ1ZT9cblx0XHRcdC8vIENhbiB3ZSBqdXN0IHJlbHkgb24gdGhlIGJyb3dzZXIvcG9seWZpbGwgdG8gZG8gaXQ/KVxuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplLmpvaW4oXCIgXCIpO1xuXHRcdFx0aWYgKCEocGYubWF0Y2hlc01lZGlhKCB1bnBhcnNlZFNpemUgKSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNS4gUmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgYWJvdmUgYWxnb3JpdGhtIGV4aGF1c3RzIHVucGFyc2VkIHNpemVzIGxpc3Qgd2l0aG91dCByZXR1cm5pbmcgYVxuXHRcdC8vIHNpemUgdmFsdWUsIHJldHVybiAxMDB2dy5cblx0XHRyZXR1cm4gXCIxMDB2d1wiO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlXG5cdHBmLm5zID0gKFwicGZcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKS5zdWJzdHIoMCwgOSk7XG5cblx0Ly8gc3Jjc2V0IHN1cHBvcnQgdGVzdFxuXHRwZi5zdXBTcmNzZXQgPSBcInNyY3NldFwiIGluIGltYWdlO1xuXHRwZi5zdXBTaXplcyA9IFwic2l6ZXNcIiBpbiBpbWFnZTtcblx0cGYuc3VwUGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHQvLyBVQyBicm93c2VyIGRvZXMgY2xhaW0gdG8gc3VwcG9ydCBzcmNzZXQgYW5kIHBpY3R1cmUsIGJ1dCBub3Qgc2l6ZXMsXG5cdC8vIHRoaXMgZXh0ZW5kZWQgdGVzdCByZXZlYWxzIHRoZSBicm93c2VyIGRvZXMgc3VwcG9ydCBub3RoaW5nXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZSAmJiAhcGYuc3VwU2l6ZXMpIHtcblx0XHQoZnVuY3Rpb24oaW1hZ2UyKSB7XG5cdFx0XHRpbWFnZS5zcmNzZXQgPSBcImRhdGE6LGFcIjtcblx0XHRcdGltYWdlMi5zcmMgPSBcImRhdGE6LGFcIjtcblx0XHRcdHBmLnN1cFNyY3NldCA9IGltYWdlLmNvbXBsZXRlID09PSBpbWFnZTIuY29tcGxldGU7XG5cdFx0XHRwZi5zdXBQaWN0dXJlID0gcGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmU7XG5cdFx0fSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG5cdH1cblxuXHQvLyBTYWZhcmk5IGhhcyBiYXNpYyBzdXBwb3J0IGZvciBzaXplcywgYnV0IGRvZXMndCBleHBvc2UgdGhlIGBzaXplc2AgaWRsIGF0dHJpYnV0ZVxuXHRpZiAocGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcykge1xuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHdpZHRoMiA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQkFQQUFBUC8vL3dBQUFDSDVCQUFBQUFBQUxBQUFBQUFDQUFFQUFBSUNCQW9BT3c9PVwiO1xuXHRcdFx0dmFyIHdpZHRoMSA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHdpZHRoID0gaW1nLndpZHRoO1xuXG5cdFx0XHRcdGlmICh3aWR0aCA9PT0gMikge1xuXHRcdFx0XHRcdHBmLnN1cFNpemVzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgPSBwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzO1xuXG5cdFx0XHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdFx0XHRcdC8vIGZvcmNlIGFzeW5jXG5cdFx0XHRcdHNldFRpbWVvdXQocGljdHVyZWZpbGwpO1xuXHRcdFx0fTtcblxuXHRcdFx0aW1nLm9ubG9hZCA9IHRlc3Q7XG5cdFx0XHRpbWcub25lcnJvciA9IHRlc3Q7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKFwic2l6ZXNcIiwgXCI5cHhcIik7XG5cblx0XHRcdGltZy5zcmNzZXQgPSB3aWR0aDEgKyBcIiAxdyxcIiArIHdpZHRoMiArIFwiIDl3XCI7XG5cdFx0XHRpbWcuc3JjID0gd2lkdGgxO1xuXHRcdH0pKCk7XG5cblx0fSBlbHNlIHtcblx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHR9XG5cblx0Ly8gdXNpbmcgcGYucXNhIGluc3RlYWQgb2YgZG9tIHRyYXZlcnNpbmcgZG9lcyBzY2FsZSBtdWNoIGJldHRlcixcblx0Ly8gZXNwZWNpYWxseSBvbiBzaXRlcyBtaXhpbmcgcmVzcG9uc2l2ZSBhbmQgbm9uLXJlc3BvbnNpdmUgaW1hZ2VzXG5cdHBmLnNlbFNob3J0ID0gXCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiO1xuXHRwZi5zZWwgPSBwZi5zZWxTaG9ydDtcblx0cGYuY2ZnID0gY2ZnO1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgYGRldmljZVBpeGVsUmF0aW9gICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHRwZi5EUFIgPSAoRFBSICB8fCAxICk7XG5cdHBmLnUgPSB1bml0cztcblxuXHQvLyBjb250YWluZXIgb2Ygc3VwcG9ydGVkIG1pbWUgdHlwZXMgdGhhdCBvbmUgbWlnaHQgbmVlZCB0byBxdWFsaWZ5IGJlZm9yZSB1c2luZ1xuXHRwZi50eXBlcyA9ICB0eXBlcztcblxuXHRwZi5zZXRTaXplID0gbm9vcDtcblxuXHQvKipcblx0ICogR2V0cyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgYWJzb2x1dGUgVVJMXG5cdCAqIEBwYXJhbSBzcmNcblx0ICogQHJldHVybnMge1N0cmluZ30gYWJzb2x1dGUgVVJMXG5cdCAqL1xuXG5cdHBmLm1ha2VVcmwgPSBtZW1vaXplKGZ1bmN0aW9uKHNyYykge1xuXHRcdGFuY2hvci5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhbmNob3IuaHJlZjtcblx0fSk7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBET00gZWxlbWVudCBvciBkb2N1bWVudCBhbmQgYSBzZWxjdG9yIGFuZCByZXR1cm5zIHRoZSBmb3VuZCBtYXRjaGVzXG5cdCAqIENhbiBiZSBleHRlbmRlZCB3aXRoIGpRdWVyeS9TaXp6bGUgZm9yIElFNyBzdXBwb3J0XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge05vZGVMaXN0fEFycmF5fVxuXHQgKi9cblx0cGYucXNhID0gZnVuY3Rpb24oY29udGV4dCwgc2VsKSB7XG5cdFx0cmV0dXJuICggXCJxdWVyeVNlbGVjdG9yXCIgaW4gY29udGV4dCApID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgOiBbXTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvcnRjdXQgbWV0aG9kIGZvciBtYXRjaE1lZGlhICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqIHdldGhlciBuYXRpdmUgb3IgcGYubU1RIGlzIHVzZWQgd2lsbCBiZSBkZWNpZGVkIGxhenkgb24gZmlyc3QgY2FsbFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggd2luZG93Lm1hdGNoTWVkaWEgJiYgKG1hdGNoTWVkaWEoIFwiKG1pbi13aWR0aDogMC4xZW0pXCIgKSB8fCB7fSkubWF0Y2hlcyApIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAoIG1hdGNoTWVkaWEoIG1lZGlhICkubWF0Y2hlcyApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gcGYubU1RO1xuXHRcdH1cblxuXHRcdHJldHVybiBwZi5tYXRjaGVzTWVkaWEuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBIHNpbXBsaWZpZWQgbWF0Y2hNZWRpYSBpbXBsZW1lbnRhdGlvbiBmb3IgSUU4IGFuZCBJRTlcblx0ICogaGFuZGxlcyBvbmx5IG1pbi13aWR0aC9tYXgtd2lkdGggd2l0aCBweCBvciBlbSB2YWx1ZXNcblx0ICogQHBhcmFtIG1lZGlhXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubU1RID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdHJldHVybiBtZWRpYSA/IGV2YWxDU1MobWVkaWEpIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBsZW5ndGggaW4gY3NzIHBpeGVsIGZyb20gdGhlIGdpdmVuIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI2xlbmd0aC12YWx1ZVxuXHQgKiBpbnRlbmRlZCBTcGVjIG1pc21hdGNoZXM6XG5cdCAqICogRG9lcyBub3QgY2hlY2sgZm9yIGludmFsaWQgdXNlIG9mIENTUyBmdW5jdGlvbnNcblx0ICogKiBEb2VzIGhhbmRsZSBhIGNvbXB1dGVkIGxlbmd0aCBvZiAwIHRoZSBzYW1lIGFzIGEgbmVnYXRpdmUgYW5kIHRoZXJlZm9yZSBpbnZhbGlkIHZhbHVlXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplVmFsdWVcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdHBmLmNhbGNMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZVZhbHVlICkge1xuXG5cdFx0dmFyIHZhbHVlID0gZXZhbENTUyhzb3VyY2VTaXplVmFsdWUsIHRydWUpIHx8IGZhbHNlO1xuXHRcdGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHR5cGUgc3RyaW5nIGFuZCBjaGVja3MgaWYgaXRzIHN1cHBvcnRlZFxuXHQgKi9cblxuXHRwZi5zdXBwb3J0c1R5cGUgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gKCB0eXBlICkgPyB0eXBlc1sgdHlwZSBdIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc291cmNlU2l6ZSBpbnRvIG1lZGlhQ29uZGl0aW9uIChtZWRpYSkgYW5kIHNvdXJjZVNpemVWYWx1ZSAobGVuZ3RoKVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVN0clxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBmLnBhcnNlU2l6ZSA9IG1lbW9pemUoZnVuY3Rpb24oIHNvdXJjZVNpemVTdHIgKSB7XG5cdFx0dmFyIG1hdGNoID0gKCBzb3VyY2VTaXplU3RyIHx8IFwiXCIgKS5tYXRjaChyZWdTaXplKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWVkaWE6IG1hdGNoICYmIG1hdGNoWzFdLFxuXHRcdFx0bGVuZ3RoOiBtYXRjaCAmJiBtYXRjaFsyXVxuXHRcdH07XG5cdH0pO1xuXG5cdHBmLnBhcnNlU2V0ID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHRpZiAoICFzZXQuY2FuZHMgKSB7XG5cdFx0XHRzZXQuY2FuZHMgPSBwYXJzZVNyY3NldChzZXQuc3Jjc2V0LCBzZXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2V0LmNhbmRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm5zIDFlbSBpbiBjc3MgcHggZm9yIGh0bWwvYm9keSBkZWZhdWx0IHNpemVcblx0ICogZnVuY3Rpb24gdGFrZW4gZnJvbSByZXNwb25kanNcblx0ICogQHJldHVybnMgeyp8bnVtYmVyfVxuXHQgKi9cblx0cGYuZ2V0RW1WYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBib2R5O1xuXHRcdGlmICggIWVtaW5weCAmJiAoYm9keSA9IGRvY3VtZW50LmJvZHkpICkge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRcdFx0b3JpZ2luYWxIVE1MQ1NTID0gZG9jRWxlbS5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRvcmlnaW5hbEJvZHlDU1MgPSBib2R5LnN0eWxlLmNzc1RleHQ7XG5cblx0XHRcdGRpdi5zdHlsZS5jc3NUZXh0ID0gYmFzZVN0eWxlO1xuXG5cdFx0XHQvLyAxZW0gaW4gYSBtZWRpYSBxdWVyeSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRlZmF1bHQgZm9udCBzaXplIG9mIHRoZSBicm93c2VyXG5cdFx0XHQvLyByZXNldCBkb2NFbGVtIGFuZCBib2R5IHRvIGVuc3VyZSB0aGUgY29ycmVjdCB2YWx1ZSBpcyByZXR1cm5lZFxuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBmc0NzcztcblxuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cdFx0XHRlbWlucHggPSBkaXYub2Zmc2V0V2lkdGg7XG5cdFx0XHRib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxuXHRcdFx0Ly9hbHNvIHVwZGF0ZSBlbWlucHggYmVmb3JlIHJldHVybmluZ1xuXHRcdFx0ZW1pbnB4ID0gcGFyc2VGbG9hdCggZW1pbnB4LCAxMCApO1xuXG5cdFx0XHQvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsSFRNTENTUztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsQm9keUNTUztcblxuXHRcdH1cblx0XHRyZXR1cm4gZW1pbnB4IHx8IDE2O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvZiBzaXplcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggaW4gcGl4ZWxzIGFzIGEgbnVtYmVyXG5cdCAqL1xuXHRwZi5jYWxjTGlzdExlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplTGlzdFN0ciApIHtcblx0XHQvLyBTcGxpdCB1cCBzb3VyY2Ugc2l6ZSBsaXN0LCBpZSAoIG1heC13aWR0aDogMzBlbSApIDEwMCUsICggbWF4LXdpZHRoOiA1MGVtICkgNTAlLCAzMyVcblx0XHQvL1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgKG1pbi13aWR0aDozMGVtKSBjYWxjKDMwJSAtIDE1cHgpXG5cdFx0aWYgKCAhKHNvdXJjZVNpemVMaXN0U3RyIGluIHNpemVMZW5ndGhDYWNoZSkgfHwgY2ZnLnVUICkge1xuXHRcdFx0dmFyIHdpbm5pbmdMZW5ndGggPSBwZi5jYWxjTGVuZ3RoKCBwYXJzZVNpemVzKCBzb3VyY2VTaXplTGlzdFN0ciApICk7XG5cblx0XHRcdHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXSA9ICF3aW5uaW5nTGVuZ3RoID8gdW5pdHMud2lkdGggOiB3aW5uaW5nTGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgY2FuZGlkYXRlIG9iamVjdCB3aXRoIGEgc3Jjc2V0IHByb3BlcnR5IGluIHRoZSBmb3JtIG9mIHVybC9cblx0ICogZXguIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDF4LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgMnhcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgNDAwdywgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDgwMHdcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLXNtYWxsLnBuZ1wiXG5cdCAqIEdldCBhbiBhcnJheSBvZiBpbWFnZSBjYW5kaWRhdGVzIGluIHRoZSBmb3JtIG9mXG5cdCAqICAgICAge3VybDogXCIvZm9vL2Jhci5wbmdcIiwgcmVzb2x1dGlvbjogMX1cblx0ICogd2hlcmUgcmVzb2x1dGlvbiBpcyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI3Jlc29sdXRpb24tdmFsdWVcblx0ICogSWYgc2l6ZXMgaXMgc3BlY2lmaWVkLCByZXMgaXMgY2FsY3VsYXRlZFxuXHQgKi9cblx0cGYuc2V0UmVzID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNldCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGVzWyBpIF0sIHNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fTtcblxuXHRwZi5zZXRSZXMucmVzID0gc2V0UmVzb2x1dGlvbjtcblxuXHRwZi5hcHBseVNldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKCBjYW5kaWRhdGVzLCBpbWcgKSB7XG5cdFx0aWYgKCAhY2FuZGlkYXRlcy5sZW5ndGggKSB7cmV0dXJuO31cblx0XHR2YXIgY2FuZGlkYXRlLFxuXHRcdFx0aSxcblx0XHRcdGosXG5cdFx0XHRsZW5ndGgsXG5cdFx0XHRiZXN0Q2FuZGlkYXRlLFxuXHRcdFx0Y3VyU3JjLFxuXHRcdFx0Y3VyQ2FuLFxuXHRcdFx0Y2FuZGlkYXRlU3JjLFxuXHRcdFx0YWJvcnRDdXJTcmM7XG5cblx0XHR2YXIgaW1hZ2VEYXRhID0gaW1nWyBwZi5ucyBdO1xuXHRcdHZhciBkcHIgPSBwZi5EUFI7XG5cblx0XHRjdXJTcmMgPSBpbWFnZURhdGEuY3VyU3JjIHx8IGltZ1tjdXJTcmNQcm9wXTtcblxuXHRcdGN1ckNhbiA9IGltYWdlRGF0YS5jdXJDYW4gfHwgc2V0U3JjVG9DdXIoaW1nLCBjdXJTcmMsIGNhbmRpZGF0ZXNbMF0uc2V0KTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYSBjdXJyZW50IHNvdXJjZSwgd2UgbWlnaHQgZWl0aGVyIGJlY29tZSBsYXp5IG9yIGdpdmUgdGhpcyBzb3VyY2Ugc29tZSBhZHZhbnRhZ2Vcblx0XHRpZiAoIGN1ckNhbiAmJiBjdXJDYW4uc2V0ID09PSBjYW5kaWRhdGVzWyAwIF0uc2V0ICkge1xuXG5cdFx0XHQvLyBpZiBicm93c2VyIGNhbiBhYm9ydCBpbWFnZSByZXF1ZXN0IGFuZCB0aGUgaW1hZ2UgaGFzIGEgaGlnaGVyIHBpeGVsIGRlbnNpdHkgdGhhbiBuZWVkZWRcblx0XHRcdC8vIGFuZCB0aGlzIGltYWdlIGlzbid0IGRvd25sb2FkZWQgeWV0LCB3ZSBza2lwIG5leHQgcGFydCBhbmQgdHJ5IHRvIHNhdmUgYmFuZHdpZHRoXG5cdFx0XHRhYm9ydEN1clNyYyA9IChzdXBwb3J0QWJvcnQgJiYgIWltZy5jb21wbGV0ZSAmJiBjdXJDYW4ucmVzIC0gMC4xID4gZHByKTtcblxuXHRcdFx0aWYgKCAhYWJvcnRDdXJTcmMgKSB7XG5cdFx0XHRcdGN1ckNhbi5jYWNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgY2FuZGlkYXRlIGlzIFwiYmVzdFwiLCBcImJldHRlclwiIG9yIFwib2theVwiLFxuXHRcdFx0XHQvLyBzZXQgaXQgdG8gYmVzdENhbmRpZGF0ZVxuXHRcdFx0XHRpZiAoIGN1ckNhbi5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjdXJDYW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblxuXHRcdFx0bGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgbGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdGlmICggY2FuZGlkYXRlLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0aiA9IGkgLSAxO1xuXG5cdFx0XHRcdFx0Ly8gd2UgaGF2ZSBmb3VuZCB0aGUgcGVyZmVjdCBjYW5kaWRhdGUsXG5cdFx0XHRcdFx0Ly8gYnV0IGxldCdzIGltcHJvdmUgdGhpcyBhIGxpdHRsZSBiaXQgd2l0aCBzb21lIGFzc3VtcHRpb25zIDstKVxuXHRcdFx0XHRcdGlmIChjYW5kaWRhdGVzWyBqIF0gJiZcblx0XHRcdFx0XHRcdChhYm9ydEN1clNyYyB8fCBjdXJTcmMgIT09IHBmLm1ha2VVcmwoIGNhbmRpZGF0ZS51cmwgKSkgJiZcblx0XHRcdFx0XHRcdGNob29zZUxvd1JlcyhjYW5kaWRhdGVzWyBqIF0ucmVzLCBjYW5kaWRhdGUucmVzLCBkcHIsIGNhbmRpZGF0ZXNbIGogXS5jYWNoZWQpKSB7XG5cblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBqIF07XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZVNyYyA9IHBmLm1ha2VVcmwoIGJlc3RDYW5kaWRhdGUudXJsICk7XG5cblx0XHRcdGltYWdlRGF0YS5jdXJTcmMgPSBjYW5kaWRhdGVTcmM7XG5cdFx0XHRpbWFnZURhdGEuY3VyQ2FuID0gYmVzdENhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCBjYW5kaWRhdGVTcmMgIT09IGN1clNyYyApIHtcblx0XHRcdFx0cGYuc2V0U3JjKCBpbWcsIGJlc3RDYW5kaWRhdGUgKTtcblx0XHRcdH1cblx0XHRcdHBmLnNldFNpemUoIGltZyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXRTcmMgPSBmdW5jdGlvbiggaW1nLCBiZXN0Q2FuZGlkYXRlICkge1xuXHRcdHZhciBvcmlnV2lkdGg7XG5cdFx0aW1nLnNyYyA9IGJlc3RDYW5kaWRhdGUudXJsO1xuXG5cdFx0Ly8gYWx0aG91Z2ggdGhpcyBpcyBhIHNwZWNpZmljIFNhZmFyaSBpc3N1ZSwgd2UgZG9uJ3Qgd2FudCB0byB0YWtlIHRvbyBtdWNoIGRpZmZlcmVudCBjb2RlIHBhdGhzXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlLnNldC50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIiApIHtcblx0XHRcdG9yaWdXaWR0aCA9IGltZy5zdHlsZS53aWR0aDtcblx0XHRcdGltZy5zdHlsZS53aWR0aCA9IChpbWcub2Zmc2V0V2lkdGggKyAxKSArIFwicHhcIjtcblxuXHRcdFx0Ly8gbmV4dCBsaW5lIG9ubHkgc2hvdWxkIHRyaWdnZXIgYSByZXBhaW50XG5cdFx0XHQvLyBpZi4uLiBpcyBvbmx5IGRvbmUgdG8gdHJpY2sgZGVhZCBjb2RlIHJlbW92YWxcblx0XHRcdGlmICggaW1nLm9mZnNldFdpZHRoICsgMSApIHtcblx0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5nZXRTZXQgPSBmdW5jdGlvbiggaW1nICkge1xuXHRcdHZhciBpLCBzZXQsIHN1cHBvcnRzVHlwZTtcblx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHR2YXIgc2V0cyA9IGltZyBbIHBmLm5zIF0uc2V0cztcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgc2V0cy5sZW5ndGggJiYgIW1hdGNoOyBpKysgKSB7XG5cdFx0XHRzZXQgPSBzZXRzW2ldO1xuXG5cdFx0XHRpZiAoICFzZXQuc3Jjc2V0IHx8ICFwZi5tYXRjaGVzTWVkaWEoIHNldC5tZWRpYSApIHx8ICEoc3VwcG9ydHNUeXBlID0gcGYuc3VwcG9ydHNUeXBlKCBzZXQudHlwZSApKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3VwcG9ydHNUeXBlID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0c2V0ID0gc3VwcG9ydHNUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXRjaCA9IHNldDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fTtcblxuXHRwZi5wYXJzZVNldHMgPSBmdW5jdGlvbiggZWxlbWVudCwgcGFyZW50LCBvcHRpb25zICkge1xuXHRcdHZhciBzcmNzZXRBdHRyaWJ1dGUsIGltYWdlU2V0LCBpc1dEZXNjcmlwb3IsIHNyY3NldFBhcnNlZDtcblxuXHRcdHZhciBoYXNQaWN0dXJlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIjtcblx0XHR2YXIgaW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyYyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNyYyA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNcIiApO1xuXHRcdFx0aWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIsIGltYWdlRGF0YS5zcmMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3Jjc2V0IHx8ICFwZi5zdXBTcmNzZXQgfHwgZWxlbWVudC5zcmNzZXQgKSB7XG5cdFx0XHRzcmNzZXRBdHRyaWJ1dGUgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3Jjc2V0XCIgKTtcblx0XHRcdGltYWdlRGF0YS5zcmNzZXQgPSBzcmNzZXRBdHRyaWJ1dGU7XG5cdFx0XHRzcmNzZXRQYXJzZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5zZXRzID0gW107XG5cblx0XHRpZiAoIGhhc1BpY3R1cmUgKSB7XG5cdFx0XHRpbWFnZURhdGEucGljID0gdHJ1ZTtcblx0XHRcdGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwYXJlbnQsIGltYWdlRGF0YS5zZXRzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ICkge1xuXHRcdFx0aW1hZ2VTZXQgPSB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyY3NldCxcblx0XHRcdFx0c2l6ZXM6IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzaXplc1wiIClcblx0XHRcdH07XG5cblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIGltYWdlU2V0ICk7XG5cblx0XHRcdGlzV0Rlc2NyaXBvciA9IChhbHdheXNDaGVja1dEZXNjcmlwdG9yIHx8IGltYWdlRGF0YS5zcmMpICYmIHJlZ1dEZXNjLnRlc3QoaW1hZ2VEYXRhLnNyY3NldCB8fCBcIlwiKTtcblxuXHRcdFx0Ly8gYWRkIG5vcm1hbCBzcmMgYXMgY2FuZGlkYXRlLCBpZiBzb3VyY2UgaGFzIG5vIHcgZGVzY3JpcHRvclxuXHRcdFx0aWYgKCAhaXNXRGVzY3JpcG9yICYmIGltYWdlRGF0YS5zcmMgJiYgIWdldENhbmRpZGF0ZUZvclNyYyhpbWFnZURhdGEuc3JjLCBpbWFnZVNldCkgJiYgIWltYWdlU2V0LmhhczF4ICkge1xuXHRcdFx0XHRpbWFnZVNldC5zcmNzZXQgKz0gXCIsIFwiICsgaW1hZ2VEYXRhLnNyYztcblx0XHRcdFx0aW1hZ2VTZXQuY2FuZHMucHVzaCh7XG5cdFx0XHRcdFx0dXJsOiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRcdGQ6IDEsXG5cdFx0XHRcdFx0c2V0OiBpbWFnZVNldFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0c2l6ZXM6IG51bGxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuY3VyQ2FuID0gbnVsbDtcblx0XHRpbWFnZURhdGEuY3VyU3JjID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaWYgaW1nIGhhcyBwaWN0dXJlIG9yIHRoZSBzcmNzZXQgd2FzIHJlbW92ZWQgb3IgaGFzIGEgc3Jjc2V0IGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNyY3NldCBhdCBhbGxcblx0XHQvLyBvciBoYXMgYSB3IGRlc2NyaXB0b3IgKGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNpemVzKSBzZXQgc3VwcG9ydCB0byBmYWxzZSB0byBldmFsdWF0ZVxuXHRcdGltYWdlRGF0YS5zdXBwb3J0ZWQgPSAhKCBoYXNQaWN0dXJlIHx8ICggaW1hZ2VTZXQgJiYgIXBmLnN1cFNyY3NldCApIHx8IChpc1dEZXNjcmlwb3IgJiYgIXBmLnN1cFNpemVzKSApO1xuXG5cdFx0aWYgKCBzcmNzZXRQYXJzZWQgJiYgcGYuc3VwU3Jjc2V0ICYmICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0aWYgKCBzcmNzZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciwgc3Jjc2V0QXR0cmlidXRlICk7XG5cdFx0XHRcdGVsZW1lbnQuc3Jjc2V0ID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbWFnZURhdGEuc3VwcG9ydGVkICYmICFpbWFnZURhdGEuc3Jjc2V0ICYmICgoIWltYWdlRGF0YS5zcmMgJiYgZWxlbWVudC5zcmMpIHx8ICBlbGVtZW50LnNyYyAhPT0gcGYubWFrZVVybChpbWFnZURhdGEuc3JjKSkpIHtcblx0XHRcdGlmIChpbWFnZURhdGEuc3JjID09PSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSBpbWFnZURhdGEuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5wYXJzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHBmLmZpbGxJbWcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGltYWdlRGF0YTtcblx0XHR2YXIgZXh0cmVtZSA9IG9wdGlvbnMucmVzZWxlY3QgfHwgb3B0aW9ucy5yZWV2YWx1YXRlO1xuXG5cdFx0Ly8gZXhwYW5kbyBmb3IgY2FjaGluZyBkYXRhIG9uIHRoZSBpbWdcblx0XHRpZiAoICFlbGVtZW50WyBwZi5ucyBdICkge1xuXHRcdFx0ZWxlbWVudFsgcGYubnMgXSA9IHt9O1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHQvLyBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZCwgc2tpcCBpdFxuXHRcdC8vIHVubGVzcyBgb3B0aW9ucy5yZWV2YWx1YXRlYCBpcyBzZXQgdG8gdHJ1ZSAoIHRoaXMsIGZvciBleGFtcGxlLFxuXHRcdC8vIGlzIHNldCB0byB0cnVlIHdoZW4gcnVubmluZyBgcGljdHVyZWZpbGxgIG9uIGByZXNpemVgICkuXG5cdFx0aWYgKCAhZXh0cmVtZSAmJiBpbWFnZURhdGEuZXZhbGVkID09PSBldmFsSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnBhcnNlZCB8fCBvcHRpb25zLnJlZXZhbHVhdGUgKSB7XG5cdFx0XHRwZi5wYXJzZVNldHMoIGVsZW1lbnQsIGVsZW1lbnQucGFyZW50Tm9kZSwgb3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRhcHBseUJlc3RDYW5kaWRhdGUoIGVsZW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW1hZ2VEYXRhLmV2YWxlZCA9IGV2YWxJZDtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0dXBSdW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoICFhbHJlYWR5UnVuIHx8IGlzVndEaXJ0eSB8fCAoRFBSICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgKSB7XG5cdFx0XHR1cGRhdGVNZXRyaWNzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElmIHBpY3R1cmUgaXMgc3VwcG9ydGVkLCB3ZWxsLCB0aGF0J3MgYXdlc29tZS5cblx0aWYgKCBwZi5zdXBQaWN0dXJlICkge1xuXHRcdHBpY3R1cmVmaWxsID0gbm9vcDtcblx0XHRwZi5maWxsSW1nID0gbm9vcDtcblx0fSBlbHNlIHtcblxuXHRcdCAvLyBTZXQgdXAgcGljdHVyZSBwb2x5ZmlsbCBieSBwb2xsaW5nIHRoZSBkb2N1bWVudFxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc0RvbVJlYWR5O1xuXHRcdFx0dmFyIHJlZ1JlYWR5ID0gd2luZG93LmF0dGFjaEV2ZW50ID8gL2QkfF5jLyA6IC9kJHxeY3xeaS87XG5cblx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCI7XG5cblx0XHRcdFx0dGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCByZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIiA/IDIwMCA6ICA5OTkpO1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0XHRpc0RvbVJlYWR5ID0gaXNEb21SZWFkeSB8fCByZWdSZWFkeS50ZXN0KHJlYWR5U3RhdGUpO1xuXHRcdFx0XHRcdGlmICggaXNEb21SZWFkeSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZXJJZCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCBkb2N1bWVudC5ib2R5ID8gOSA6IDk5KTtcblxuXHRcdFx0Ly8gQWxzbyBhdHRhY2ggcGljdHVyZWZpbGwgb24gcmVzaXplIGFuZCByZWFkeXN0YXRlY2hhbmdlXG5cdFx0XHQvLyBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5jb20vMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHRcdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuXHRcdFx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0XHRmdW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0XHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdHZhciBsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpc1Z3RGlydHkgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKSAhPT0gdW5pdHMud2lkdGggfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgIT09IGxhc3RDbGllbnRXaWR0aDtcblx0XHRcdFx0bGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGlmICggaXNWd0RpcnR5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdG9uKCB3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKG9uUmVzaXplLCA5OSApICk7XG5cdFx0XHRvbiggZG9jdW1lbnQsIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBydW4gKTtcblx0XHR9KSgpO1xuXHR9XG5cblx0cGYucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblx0Ly91c2UgdGhpcyBpbnRlcm5hbGx5IGZvciBlYXN5IG1vbmtleSBwYXRjaGluZy9wZXJmb3JtYW5jZSB0ZXN0aW5nXG5cdHBmLmZpbGxJbWdzID0gcGljdHVyZWZpbGw7XG5cdHBmLnRlYXJkb3duUnVuID0gbm9vcDtcblxuXHQvKiBleHBvc2UgbWV0aG9kcyBmb3IgdGVzdGluZyAqL1xuXHRwaWN0dXJlZmlsbC5fID0gcGY7XG5cblx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHID0ge1xuXHRcdHBmOiBwZixcblx0XHRwdXNoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmICh0eXBlb2YgcGZbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwZltuYW1lXS5hcHBseShwZiwgYXJncyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjZmdbbmFtZV0gPSBhcmdzWzBdO1xuXHRcdFx0XHRpZiAoYWxyZWFkeVJ1bikge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCB7IHJlc2VsZWN0OiB0cnVlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAoc2V0T3B0aW9ucyAmJiBzZXRPcHRpb25zLmxlbmd0aCkge1xuXHRcdHdpbmRvdy5waWN0dXJlZmlsbENGRy5wdXNoKHNldE9wdGlvbnMuc2hpZnQoKSk7XG5cdH1cblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0d2luZG93LnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gQ29tbW9uSlMsIGp1c3QgZXhwb3J0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBwaWN0dXJlZmlsbDtcblx0fSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1EIHN1cHBvcnRcblx0XHRkZWZpbmUoIFwicGljdHVyZWZpbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBwaWN0dXJlZmlsbDsgfSApO1xuXHR9XG5cblx0Ly8gSUU4IGV2YWxzIHRoaXMgc3luYywgc28gaXQgbXVzdCBiZSB0aGUgbGFzdCB0aGluZyB3ZSBkb1xuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXHRcdHR5cGVzWyBcImltYWdlL3dlYnBcIiBdID0gZGV0ZWN0VHlwZVN1cHBvcnQoXCJpbWFnZS93ZWJwXCIsIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIgKTtcblx0fVxuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBpc01vYmlsZS5qcyB2MC40LjFcbiAqXG4gKiBBIHNpbXBsZSBsaWJyYXJ5IHRvIGRldGVjdCBBcHBsZSBwaG9uZXMgYW5kIHRhYmxldHMsXG4gKiBBbmRyb2lkIHBob25lcyBhbmQgdGFibGV0cywgb3RoZXIgbW9iaWxlIGRldmljZXMgKGxpa2UgYmxhY2tiZXJyeSwgbWluaS1vcGVyYSBhbmQgd2luZG93cyBwaG9uZSksXG4gKiBhbmQgYW55IGtpbmQgb2Ygc2V2ZW4gaW5jaCBkZXZpY2UsIHZpYSB1c2VyIGFnZW50IHNuaWZmaW5nLlxuICpcbiAqIEBhdXRob3I6IEthaSBNYWxsZWEgKGttYWxsZWFAZ21haWwuY29tKVxuICpcbiAqIEBsaWNlbnNlOiBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgICB2YXIgYXBwbGVfcGhvbmUgICAgICAgICA9IC9pUGhvbmUvaSxcbiAgICAgICAgYXBwbGVfaXBvZCAgICAgICAgICA9IC9pUG9kL2ksXG4gICAgICAgIGFwcGxlX3RhYmxldCAgICAgICAgPSAvaVBhZC9pLFxuICAgICAgICBhbmRyb2lkX3Bob25lICAgICAgID0gLyg/PS4qXFxiQW5kcm9pZFxcYikoPz0uKlxcYk1vYmlsZVxcYikvaSwgLy8gTWF0Y2ggJ0FuZHJvaWQnIEFORCAnTW9iaWxlJ1xuICAgICAgICBhbmRyb2lkX3RhYmxldCAgICAgID0gL0FuZHJvaWQvaSxcbiAgICAgICAgYW1hem9uX3Bob25lICAgICAgICA9IC8oPz0uKlxcYkFuZHJvaWRcXGIpKD89LipcXGJTRDQ5MzBVUlxcYikvaSxcbiAgICAgICAgYW1hem9uX3RhYmxldCAgICAgICA9IC8oPz0uKlxcYkFuZHJvaWRcXGIpKD89LipcXGIoPzpLRk9UfEtGVFR8S0ZKV0l8S0ZKV0F8S0ZTT1dJfEtGVEhXSXxLRlRIV0F8S0ZBUFdJfEtGQVBXQXxLRkFSV0l8S0ZBU1dJfEtGU0FXSXxLRlNBV0EpXFxiKS9pLFxuICAgICAgICB3aW5kb3dzX3Bob25lICAgICAgID0gL1dpbmRvd3MgUGhvbmUvaSxcbiAgICAgICAgd2luZG93c190YWJsZXQgICAgICA9IC8oPz0uKlxcYldpbmRvd3NcXGIpKD89LipcXGJBUk1cXGIpL2ksIC8vIE1hdGNoICdXaW5kb3dzJyBBTkQgJ0FSTSdcbiAgICAgICAgb3RoZXJfYmxhY2tiZXJyeSAgICA9IC9CbGFja0JlcnJ5L2ksXG4gICAgICAgIG90aGVyX2JsYWNrYmVycnlfMTAgPSAvQkIxMC9pLFxuICAgICAgICBvdGhlcl9vcGVyYSAgICAgICAgID0gL09wZXJhIE1pbmkvaSxcbiAgICAgICAgb3RoZXJfY2hyb21lICAgICAgICA9IC8oQ3JpT1N8Q2hyb21lKSg/PS4qXFxiTW9iaWxlXFxiKS9pLFxuICAgICAgICBvdGhlcl9maXJlZm94ICAgICAgID0gLyg/PS4qXFxiRmlyZWZveFxcYikoPz0uKlxcYk1vYmlsZVxcYikvaSwgLy8gTWF0Y2ggJ0ZpcmVmb3gnIEFORCAnTW9iaWxlJ1xuICAgICAgICBzZXZlbl9pbmNoID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICcoPzonICsgICAgICAgICAvLyBOb24tY2FwdHVyaW5nIGdyb3VwXG5cbiAgICAgICAgICAgICdOZXh1cyA3JyArICAgICAvLyBOZXh1cyA3XG5cbiAgICAgICAgICAgICd8JyArICAgICAgICAgICAvLyBPUlxuXG4gICAgICAgICAgICAnQk5UVjI1MCcgKyAgICAgLy8gQiZOIE5vb2sgVGFibGV0IDcgaW5jaFxuXG4gICAgICAgICAgICAnfCcgKyAgICAgICAgICAgLy8gT1JcblxuICAgICAgICAgICAgJ0tpbmRsZSBGaXJlJyArIC8vIEtpbmRsZSBGaXJlXG5cbiAgICAgICAgICAgICd8JyArICAgICAgICAgICAvLyBPUlxuXG4gICAgICAgICAgICAnU2lsaycgKyAgICAgICAgLy8gS2luZGxlIEZpcmUsIFNpbGsgQWNjZWxlcmF0ZWRcblxuICAgICAgICAgICAgJ3wnICsgICAgICAgICAgIC8vIE9SXG5cbiAgICAgICAgICAgICdHVC1QMTAwMCcgKyAgICAvLyBHYWxheHkgVGFiIDcgaW5jaFxuXG4gICAgICAgICAgICAnKScsICAgICAgICAgICAgLy8gRW5kIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblxuICAgICAgICAgICAgJ2knKTsgICAgICAgICAgIC8vIENhc2UtaW5zZW5zaXRpdmUgbWF0Y2hpbmdcblxuICAgIHZhciBtYXRjaCA9IGZ1bmN0aW9uKHJlZ2V4LCB1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodXNlckFnZW50KTtcbiAgICB9O1xuXG4gICAgdmFyIElzTW9iaWxlQ2xhc3MgPSBmdW5jdGlvbih1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHVhID0gdXNlckFnZW50IHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgLy8gRmFjZWJvb2sgbW9iaWxlIGFwcCdzIGludGVncmF0ZWQgYnJvd3NlciBhZGRzIGEgYnVuY2ggb2Ygc3RyaW5ncyB0aGF0XG4gICAgICAgIC8vIG1hdGNoIGV2ZXJ5dGhpbmcuIFN0cmlwIGl0IG91dCBpZiBpdCBleGlzdHMuXG4gICAgICAgIHZhciB0bXAgPSB1YS5zcGxpdCgnW0ZCQU4nKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0bXBbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB1YSA9IHRtcFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFR3aXR0ZXIgbW9iaWxlIGFwcCdzIGludGVncmF0ZWQgYnJvd3NlciBvbiBpUGFkIGFkZHMgYSBcIlR3aXR0ZXIgZm9yXG4gICAgICAgIC8vIGlQaG9uZVwiIHN0cmluZy4gU2FtZSBwcm9iYWJsZSBoYXBwZW5zIG9uIG90aGVyIHRhYmxldCBwbGF0Zm9ybXMuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBjb25mdXNlIGRldGVjdGlvbiBzbyBzdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuICAgICAgICB0bXAgPSB1YS5zcGxpdCgnVHdpdHRlcicpO1xuICAgICAgICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHVhID0gdG1wWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBsZSA9IHtcbiAgICAgICAgICAgIHBob25lOiAgbWF0Y2goYXBwbGVfcGhvbmUsIHVhKSxcbiAgICAgICAgICAgIGlwb2Q6ICAgbWF0Y2goYXBwbGVfaXBvZCwgdWEpLFxuICAgICAgICAgICAgdGFibGV0OiAhbWF0Y2goYXBwbGVfcGhvbmUsIHVhKSAmJiBtYXRjaChhcHBsZV90YWJsZXQsIHVhKSxcbiAgICAgICAgICAgIGRldmljZTogbWF0Y2goYXBwbGVfcGhvbmUsIHVhKSB8fCBtYXRjaChhcHBsZV9pcG9kLCB1YSkgfHwgbWF0Y2goYXBwbGVfdGFibGV0LCB1YSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hbWF6b24gPSB7XG4gICAgICAgICAgICBwaG9uZTogIG1hdGNoKGFtYXpvbl9waG9uZSwgdWEpLFxuICAgICAgICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uX3Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uX3RhYmxldCwgdWEpLFxuICAgICAgICAgICAgZGV2aWNlOiBtYXRjaChhbWF6b25fcGhvbmUsIHVhKSB8fCBtYXRjaChhbWF6b25fdGFibGV0LCB1YSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hbmRyb2lkID0ge1xuICAgICAgICAgICAgcGhvbmU6ICBtYXRjaChhbWF6b25fcGhvbmUsIHVhKSB8fCBtYXRjaChhbmRyb2lkX3Bob25lLCB1YSksXG4gICAgICAgICAgICB0YWJsZXQ6ICFtYXRjaChhbWF6b25fcGhvbmUsIHVhKSAmJiAhbWF0Y2goYW5kcm9pZF9waG9uZSwgdWEpICYmIChtYXRjaChhbWF6b25fdGFibGV0LCB1YSkgfHwgbWF0Y2goYW5kcm9pZF90YWJsZXQsIHVhKSksXG4gICAgICAgICAgICBkZXZpY2U6IG1hdGNoKGFtYXpvbl9waG9uZSwgdWEpIHx8IG1hdGNoKGFtYXpvbl90YWJsZXQsIHVhKSB8fCBtYXRjaChhbmRyb2lkX3Bob25lLCB1YSkgfHwgbWF0Y2goYW5kcm9pZF90YWJsZXQsIHVhKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLndpbmRvd3MgPSB7XG4gICAgICAgICAgICBwaG9uZTogIG1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSxcbiAgICAgICAgICAgIHRhYmxldDogbWF0Y2god2luZG93c190YWJsZXQsIHVhKSxcbiAgICAgICAgICAgIGRldmljZTogbWF0Y2god2luZG93c19waG9uZSwgdWEpIHx8IG1hdGNoKHdpbmRvd3NfdGFibGV0LCB1YSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vdGhlciA9IHtcbiAgICAgICAgICAgIGJsYWNrYmVycnk6ICAgbWF0Y2gob3RoZXJfYmxhY2tiZXJyeSwgdWEpLFxuICAgICAgICAgICAgYmxhY2tiZXJyeTEwOiBtYXRjaChvdGhlcl9ibGFja2JlcnJ5XzEwLCB1YSksXG4gICAgICAgICAgICBvcGVyYTogICAgICAgIG1hdGNoKG90aGVyX29wZXJhLCB1YSksXG4gICAgICAgICAgICBmaXJlZm94OiAgICAgIG1hdGNoKG90aGVyX2ZpcmVmb3gsIHVhKSxcbiAgICAgICAgICAgIGNocm9tZTogICAgICAgbWF0Y2gob3RoZXJfY2hyb21lLCB1YSksXG4gICAgICAgICAgICBkZXZpY2U6ICAgICAgIG1hdGNoKG90aGVyX2JsYWNrYmVycnksIHVhKSB8fCBtYXRjaChvdGhlcl9ibGFja2JlcnJ5XzEwLCB1YSkgfHwgbWF0Y2gob3RoZXJfb3BlcmEsIHVhKSB8fCBtYXRjaChvdGhlcl9maXJlZm94LCB1YSkgfHwgbWF0Y2gob3RoZXJfY2hyb21lLCB1YSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXZlbl9pbmNoID0gbWF0Y2goc2V2ZW5faW5jaCwgdWEpO1xuICAgICAgICB0aGlzLmFueSA9IHRoaXMuYXBwbGUuZGV2aWNlIHx8IHRoaXMuYW5kcm9pZC5kZXZpY2UgfHwgdGhpcy53aW5kb3dzLmRldmljZSB8fCB0aGlzLm90aGVyLmRldmljZSB8fCB0aGlzLnNldmVuX2luY2g7XG5cbiAgICAgICAgLy8gZXhjbHVkZXMgJ290aGVyJyBkZXZpY2VzIGFuZCBpcG9kcywgdGFyZ2V0aW5nIHRvdWNoc2NyZWVuIHBob25lc1xuICAgICAgICB0aGlzLnBob25lID0gdGhpcy5hcHBsZS5waG9uZSB8fCB0aGlzLmFuZHJvaWQucGhvbmUgfHwgdGhpcy53aW5kb3dzLnBob25lO1xuXG4gICAgICAgIC8vIGV4Y2x1ZGVzIDcgaW5jaCBkZXZpY2VzLCBjbGFzc2lmeWluZyBhcyBwaG9uZSBvciB0YWJsZXQgaXMgbGVmdCB0byB0aGUgdXNlclxuICAgICAgICB0aGlzLnRhYmxldCA9IHRoaXMuYXBwbGUudGFibGV0IHx8IHRoaXMuYW5kcm9pZC50YWJsZXQgfHwgdGhpcy53aW5kb3dzLnRhYmxldDtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBpbnN0YW50aWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgSU0gPSBuZXcgSXNNb2JpbGVDbGFzcygpO1xuICAgICAgICBJTS5DbGFzcyA9IElzTW9iaWxlQ2xhc3M7XG4gICAgICAgIHJldHVybiBJTTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vbm9kZVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IElzTW9iaWxlQ2xhc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvL2Jyb3dzZXJpZnlcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBpbnN0YW50aWF0ZSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vQU1EXG4gICAgICAgIGRlZmluZSgnaXNNb2JpbGUnLCBbXSwgZ2xvYmFsLmlzTW9iaWxlID0gaW5zdGFudGlhdGUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLmlzTW9iaWxlID0gaW5zdGFudGlhdGUoKTtcbiAgICB9XG5cbn0pKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXNtb2JpbGVqcy9pc01vYmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9