!function(t){function e(e){for(var n,a,u=e[0],c=e[1],s=e[2],f=0,h=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(p&&p(e);h.length;)h.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={1:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=c;i.push([373,0]),r()}({351:function(t,e,r){"use strict";var n=r(70);r.n(n).a},352:function(t,e,r){(e=r(167)(!1)).push([t.i,"\n#app header[data-v-617ab0be] {\n    background: #ddd\n}\n#app header ul[data-v-617ab0be] {\n      display: flex\n}\n#app header ul li[data-v-617ab0be] {\n        padding: 10px;\n}\n",""]),t.exports=e},373:function(t,e,r){"use strict";r.r(e);var n=r(12);r(75);function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function a(t,e){for(var r in e)t[r]=e[r];return t}var u={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var u=o.$createElement,s=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(i.routerViewDepth=h,l){var v=f[s],y=v&&v.component;return y?(v.configProps&&c(y,i,v.route,v.configProps),u(y,i,n)):u()}var m=p.matched[h],g=m&&m.components[s];if(!m||!g)return f[s]=null,u();f[s]={component:g},i.registerRouteInstance=function(t,e){var r=m.instances[s];(e&&r!==t||!e&&r===t)&&(m.instances[s]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){m.instances[s]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[s]&&(m.instances[s]=t.componentInstance)};var b=m.props&&m.props[s];return b&&(a(f[s],{route:p,configProps:b}),c(g,i,p,b)),u(g,i,n)}};function c(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,n);if(o){o=e.props=a({},o);var i=e.attrs=e.attrs||{};for(var u in o)t.props&&u in t.props||(i[u]=o[u],delete o[u])}}var s=/[!'()*]/g,p=function(t){return"%"+t.charCodeAt(0).toString(16)},f=/%2C/g,h=function(t){return encodeURIComponent(t).replace(s,p).replace(f,",")},l=decodeURIComponent;function d(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=l(r.shift()),o=r.length>0?l(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function v(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return h(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(h(e)):n.push(h(e)+"="+h(t)))})),n.join("&")}return h(e)+"="+h(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var y=/\/?$/;function m(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=g(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:x(e,o),matched:t?w(t):[]};return r&&(a.redirectedFrom=x(r,o)),Object.freeze(a)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=g(t[r]);return e}return t}var b=m(null,{path:"/"});function w(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function x(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||v)(n)+o}function _(t,e){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(y,"")===e.path.replace(y,"")&&t.hash===e.hash&&k(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&k(t.query,e.query)&&k(t.params,e.params)))}function k(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?k(n,o):String(n)===String(o)}))}function O(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function R(t){return t.replace(/\/\//g,"/")}var E=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},j=V,A=T,C=function(t,e){return q(T(t,e))},S=q,$=B,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=P.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||u,_=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:_?I(_):m?".*":"[^"+U(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function L(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?L:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(E(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!e[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){return t.keys=e,t}function H(t){return t.sensitive?"":"i"}function B(t,e,r){E(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=U(u);else{var c=U(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=U(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",M(new RegExp("^"+i,H(r)),e)}function V(t,e,r){return E(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return M(t,e)}(t,e):E(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(V(t[o],e,r).source);return M(new RegExp("(?:"+n.join("|")+")",H(r)),e)}(t,e,r):function(t,e,r){return B(T(t,r),e,r)}(t,e,r)}j.parse=A,j.compile=C,j.tokensToFunction=S,j.tokensToRegExp=$;var z=Object.create(null);function D(t,e,r){e=e||{};try{var n=z[t]||(z[t]=j.compile(t));return e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function F(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var i=(o=a({},t)).params;return i&&"object"==typeof i&&(o.params=a({},i)),o}if(!o.path&&o.params&&e){(o=a({},o))._normalized=!0;var u=a(a({},e.params),o.params);if(e.name)o.name=e.name,o.params=u;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=D(c,u,e.path)}else 0;return o}var s=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),p=e&&e.path||"/",f=s.path?O(s.path,p,r||o.append):p,h=function(t,e,r){void 0===e&&(e={});var n,o=r||d;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(s.query,o.query,n&&n.options.parseQuery),l=o.hash||s.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}var N,J=function(){},K={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,u=o.route,c=o.href,s={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,g=u.redirectedFrom?m(null,F(u.redirectedFrom),null,r):u;s[v]=_(n,g),s[d]=this.exact?s[v]:function(t,e){return 0===t.path.replace(y,"/").indexOf(e.path.replace(y,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,g);var b=function(t){Q(t)&&(e.replace?r.replace(i,J):r.push(i,J))},w={click:Q};Array.isArray(this.event)?this.event.forEach((function(t){w[t]=b})):w[this.event]=b;var x={class:s},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:b,isActive:s[d],isExactActive:s[v]});if(k){if(1===k.length)return k[0];if(k.length>1||!k.length)return 0===k.length?t():t("span",{},k)}if("a"===this.tag)x.on=w,x.attrs={href:c};else{var O=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(O){O.isStatic=!1;var R=O.data=a({},O.data);for(var E in R.on=R.on||{},R.on){var j=R.on[E];E in w&&(R.on[E]=Array.isArray(j)?j:[j])}for(var A in w)A in R.on?R.on[A].push(w[A]):R.on[A]=b;(O.data.attrs=a({},O.data.attrs)).href=c}else x.on=w}return t(this.tag,x,this.$slots.default)}};function Q(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var X="undefined"!=typeof window;function Y(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var u=o.path,c=o.name;0;var s=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return R(e.path+"/"+t)}(u,i,s.strict);"boolean"==typeof o.caseSensitive&&(s.sensitive=o.caseSensitive);var f={path:p,regex:W(p,s),components:o.components||{default:o.component},instances:{},name:c,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?R(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}c&&(n[c]||(n[c]=f))}(o,i,a,t)}));for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function W(t,e){return j(t,[],e)}function G(t,e){var r=Y(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=F(t,r,!1,e),s=u.name;if(s){var p=i[s];if(!p)return c(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=D(p.path,u.params),c(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(Z(v.regex,u.path,u.params))return c(v,u,a)}}return c(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(m(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return c(null,r);var u=o,s=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,s){i[s];return a({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return O(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:D(d,l),query:f,hash:h},void 0,r)}return c(null,r)}function c(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:D(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,c(i,e)}return c(null,e)}(0,r,t.matchAs):m(t,r,n,e)}return{match:a,addRoutes:function(t){Y(t,n,o,i)}}}function Z(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var tt=X&&window.performance&&window.performance.now?window.performance:Date;function et(){return tt.now().toFixed(3)}var rt=et();function nt(){return rt}function ot(t){return rt=t}var it=Object.create(null);function at(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,"");window.history.replaceState({key:nt()},"",e),window.addEventListener("popstate",(function(t){ct(),t.state&&t.state.key&&ot(t.state.key)}))}function ut(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=nt();if(t)return it[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){lt(t,i)})).catch((function(t){0})):lt(a,i))}))}}function ct(){var t=nt();t&&(it[t]={x:window.pageXOffset,y:window.pageYOffset})}function st(t){return ft(t.x)||ft(t.y)}function pt(t){return{x:ft(t.x)?t.x:window.pageXOffset,y:ft(t.y)?t.y:window.pageYOffset}}function ft(t){return"number"==typeof t}var ht=/^#\d/;function lt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ht.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ft((r=i).x)?r.x:0,y:ft(r.y)?r.y:0})}else st(t)&&(e=pt(t))}else n&&st(t)&&(e=pt(t));e&&window.scrollTo(e.x,e.y)}var dt,vt=X&&((-1===(dt=window.navigator.userAgent).indexOf("Android 2.")&&-1===dt.indexOf("Android 4.0")||-1===dt.indexOf("Mobile Safari")||-1!==dt.indexOf("Chrome")||-1!==dt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history);function yt(t,e){ct();var r=window.history;try{if(e){var n=a({},r.state);n.key=nt(),r.replaceState(n,"",t)}else r.pushState({key:ot(et())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function mt(t){yt(t,!0)}function gt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function bt(t){return function(e,r,n){var i=!1,a=0,u=null;wt(t,(function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=kt((function(e){var o;((o=e).__esModule||_t&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:N.extend(e),r.components[c]=e,--a<=0&&n()})),f=kt((function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=o(t)?t:new Error(e),n(u))}));try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}})),i||n()}}function wt(t,e){return xt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function xt(t){return Array.prototype.concat.apply([],t)}var _t="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function kt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Ot=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);Ot._name="NavigationDuplicated";var Rt=function(t,e){this.router=t,this.base=function(t){if(!t)if(X){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function Et(t,e,r,n){var o=wt(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=N.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return xt(n?o.reverse():o)}function jt(t,e){if(e)return function(){return t.apply(e,arguments)}}Rt.prototype.listen=function(t){this.cb=t},Rt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Rt.prototype.onError=function(t){this.errorCbs.push(t)},Rt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},Rt.prototype.confirmTransition=function(t,e,r){var n=this,a=this.current,u=function(t){!i(Ot,t)&&o(t)&&n.errorCbs.length&&n.errorCbs.forEach((function(e){e(t)})),r&&r(t)};if(_(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u(new Ot(t));var c=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),s=c.updated,p=c.deactivated,f=c.activated,h=[].concat(function(t){return Et(t,"beforeRouteLeave",jt,!0)}(p),this.router.beforeHooks,function(t){return Et(t,"beforeRouteUpdate",jt)}(s),f.map((function(t){return t.beforeEnter})),bt(f));this.pending=t;var l=function(e,r){if(n.pending!==t)return u();try{e(t,a,(function(t){!1===t||o(t)?(n.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?n.replace(t):n.push(t)):r(t)}))}catch(t){u(t)}};gt(h,l,(function(){var r=[];gt(function(t,e,r){return Et(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),u(t)}))}}(t,o,i,e,r)}))}(f,r,(function(){return n.current===t})).concat(n.router.resolveHooks),l,(function(){if(n.pending!==t)return u();n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},Rt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(r){r&&r(t,e)}))};var At=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior,i=vt&&o;i&&at();var a=Ct(this.base);window.addEventListener("popstate",(function(t){var r=n.current,o=Ct(n.base);n.current===b&&o===a||n.transitionTo(o,(function(t){i&&ut(e,t,r,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(R(n.base+t.fullPath)),ut(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){mt(R(n.base+t.fullPath)),ut(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Ct(this.base)!==this.current.fullPath){var e=R(this.base+this.current.fullPath);t?yt(e):mt(e)}},e.prototype.getCurrentLocation=function(){return Ct(this.base)},e}(Rt);function Ct(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var St=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Ct(t);if(!/^\/#/.test(e))return window.location.replace(R(t+"/#"+e)),!0}(this.base)||$t()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=vt&&e;r&&at(),window.addEventListener(vt?"popstate":"hashchange",(function(){var e=t.current;$t()&&t.transitionTo(Pt(),(function(n){r&&ut(t.router,n,e,!0),vt||qt(n.fullPath)}))}))},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Lt(t.fullPath),ut(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){qt(t.fullPath),ut(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Pt()!==e&&(t?Lt(e):qt(e))},e.prototype.getCurrentLocation=function(){return Pt()},e}(Rt);function $t(){var t=Pt();return"/"===t.charAt(0)||(qt("/"+t),!1)}function Pt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Tt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Lt(t){vt?yt(Tt(t)):window.location.hash=t}function qt(t){vt?mt(Tt(t)):window.location.replace(Tt(t))}var Ut=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){i(Ot,t)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Rt),It=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=G(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!vt&&!1!==t.fallback,this.fallback&&(e="hash"),X||(e="abstract"),this.mode=e,e){case"history":this.history=new At(this,t.base);break;case"hash":this.history=new St(this,t.base,this.fallback);break;case"abstract":this.history=new Ut(this,t.base);break;default:0}},Mt={currentRoute:{configurable:!0}};function Ht(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}It.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Mt.currentRoute.get=function(){return this.history&&this.history.current},It.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var r=this.history;if(r instanceof At)r.transitionTo(r.getCurrentLocation());else if(r instanceof St){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},It.prototype.beforeEach=function(t){return Ht(this.beforeHooks,t)},It.prototype.beforeResolve=function(t){return Ht(this.resolveHooks,t)},It.prototype.afterEach=function(t){return Ht(this.afterHooks,t)},It.prototype.onReady=function(t,e){this.history.onReady(t,e)},It.prototype.onError=function(t){this.history.onError(t)},It.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},It.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},It.prototype.go=function(t){this.history.go(t)},It.prototype.back=function(){this.go(-1)},It.prototype.forward=function(){this.go(1)},It.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},It.prototype.resolve=function(t,e,r){var n=F(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?R(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},It.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(It.prototype,Mt),It.install=function t(e){if(!t.installed||N!==e){t.installed=!0,N=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",u),e.component("RouterLink",K);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},It.version="3.1.5",X&&window.Vue&&window.Vue.use(It);var Bt=It,Vt=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n  これはHomeのページです\n")])};Vt._withStripped=!0;var zt=r(23),Dt=Object(zt.a)({},Vt,[],!1,null,null,null);Dt.options.__file="src/components/Home.vue";var Ft=Dt.exports,Nt=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"about"},[this._v("\n  これはAboutのページです\n")])};Nt._withStripped=!0;var Jt=Object(zt.a)({},Nt,[],!1,null,null,null);Jt.options.__file="src/components/About.vue";var Kt=Jt.exports;n.a.use(Bt);var Qt=new Bt({base:"/example",routes:[{path:"/",component:Ft},{path:"/about",component:Kt}]}),Xt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[this._v("\n          Home\n        ")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:{path:"/about"}}},[this._v("\n          About\n        ")])],1)])]),this._v(" "),e("router-view")],1)};Xt._withStripped=!0;r(351);var Yt=Object(zt.a)({},Xt,[],!1,null,"617ab0be",null);Yt.options.__file="src/components/App.vue";var Wt=Yt.exports;new n.a({el:"#app",components:{App:Wt},router:Qt,render:function(t){return t(Wt)}})},70:function(t,e,r){var n=r(352);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(173).default)("61aacbf1",n,!1,{})}});