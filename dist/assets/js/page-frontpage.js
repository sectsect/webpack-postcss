!function(e){function n(n){for(var r,s,l=n[0],a=n[1],u=n[2],f=0,d=[];f<l.length;f++)s=l[f],o[s]&&d.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(n);d.length;)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={2:0},i=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var c=a;i.push([71,1,0]),t()}({13:function(e,n){!function(n){var t="Modernizr"in n,r=n.Modernizr;!function(e,n,t){function r(e,n){return typeof e===n}function o(e,n){return!!~(""+e).indexOf(n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e,t,r,o){var s,l,a,u,c="modernizr",f=i("div"),d=function(){var e=n.body;return e||((e=i(w?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(a=i("div")).id=o?o[r]:c+(r+1),f.appendChild(a);return(s=i("style")).type="text/css",s.id="s"+c,(d.fake?d:f).appendChild(s),d.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),l=t(f,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=u,x.offsetHeight):f.parentNode.removeChild(f),!!l}function l(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function u(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+l(n[o])+":"+r+")");return s("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n,s,l){function a(){d&&(delete _.style,delete _.modElem)}if(l=!r(l,"undefined")&&l,!r(s,"undefined")){var f=u(e,s);if(!r(f,"undefined"))return f}for(var d,p,h,v,y,g=["modernizr","tspan","samp"];!_.style&&g.length;)d=!0,_.modElem=i(g.shift()),_.style=_.modElem.style;for(h=e.length,p=0;h>p;p++)if(v=e[p],y=_.style[v],o(v,"-")&&(v=c(v)),_.style[v]!==t){if(l||r(s,"undefined"))return a(),"pfx"!=n||v;try{_.style[v]=s}catch(e){}if(_.style[v]!=y)return a(),"pfx"!=n||v}return a(),!1}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?f(l,n,o,i):function(e,n,t){var o;for(var i in e)if(e[i]in n)return!1===t?e[i]:r(o=n[e[i]],"function")?d(o,t||n):o;return!1}(l=(e+" "+T.join(s+" ")+s).split(" "),n,t)}function h(e,n,r){return p(e,t,t,n,r)}var v=[],y={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},g=function(){};g.prototype=y,g=new g;var m=[],x=n.documentElement,w="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",b=y._config.usePrefixes?S.split(" "):[];y._cssomPrefixes=b;var C={elem:i("modernizr")};g._q.push(function(){delete C.elem});var _={style:C.elem.style};g._q.unshift(function(){delete _.style});var T=y._config.usePrefixes?S.toLowerCase().split(" "):[];y._domPrefixes=T,y.testAllProps=p,y.testAllProps=h,g.addTest("cssgridlegacy",h("grid-columns","10px",!0)),g.addTest("cssgrid",h("grid-template-rows","none",!0));var j=function(n){var r,o=prefixes.length,i=e.CSSRule;if(void 0===i)return t;if(!n)return!1;if((r=(n=n.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+n;for(var s=0;o>s;s++){var l=prefixes[s];if(l.toUpperCase()+"_"+r in i)return"@-"+l.toLowerCase()+"-"+n}return!1};y.atRule=j;var P=y.prefixed=function(e,n,t){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=c(e)),n?p(e,n,t):p(e,"pfx"))};g.addTest("objectfit",!!P("objectFit"),{aliases:["object-fit"]}),g.addTest("flexbox",h("flexBasis","1px",!0)),g.addTest("flexboxtweener",h("flexAlign","end",!0)),function(){var e,n,t,o,i,s;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],(n=v[l]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?g[s[0]]=o:(!g[s[0]]||g[s[0]]instanceof Boolean||(g[s[0]]=new Boolean(g[s[0]])),g[s[0]][s[1]]=o),m.push((o?"":"no-")+s.join("-"))}}(),function(e){var n=x.className,t=g._config.classPrefix||"";if(w&&(n=n.baseVal),g._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}g._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?x.className.baseVal=n:x.className=n)}(m),delete y.addTest,delete y.addAsyncTest;for(var k=0;k<g._q.length;k++)g._q[k]();e.Modernizr=g}(n,document),e.exports=n.Modernizr,t?n.Modernizr=r:delete n.Modernizr}(window)},68:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(131),t(50);var r=t(69),o=t.n(r),i=t(70),s=t.n(i),l=function(){function e(n,t,r,i,s){o()(this,e),this.name=n,this.age=t,this.city=r,this.country=i,this.email=s}return s()(e,[{key:"toString",value:function(){return"".concat(this.name," | ").concat(this.age," | ").concat(this.city," | ").concat(this.email)}},{key:"addCountry",value:function(){return"".concat(this.toString()," | ").concat(this.country)}},{key:"run",value:function(){return this.addCountry()}}]),e}()},71:function(e,n,t){"use strict";t.r(n),function(e){t(37),t(129);var n=t(68);console.log("Hello!!");console.log("SECT!!"),console.log(detect),e(function(){e(".slider_wrap").each(function(){var n="#".concat(e(this).attr("id"));e(".slider").on("init",function(n,t){e(this).closest(".slider_wrap").addClass("ready")}),e("".concat(n," .slider-for")).slick({slidesToShow:1,slidesToScroll:1,speed:200,arrows:!0,fade:!1,asNavFor:"".concat(n," .slider-nav")}),e("".concat(n," .slider-nav")).slick({slidesToShow:4,slidesToScroll:1,speed:200,asNavFor:"".concat(n," .slider-for"),arrows:!1,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1}}]})})});var r=new n.a("SECT",37,"Tokyo","Japan","info@xxxxxxxxx.com").run();console.log(r)}.call(this,t(0))}});