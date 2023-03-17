(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var n=ca(this);function da(a,b){if(b)a:{var c=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
da("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+f++,h)}function c(h,e){this.g=h;ba(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}} 
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha;if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha; 
function q(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.da=b.prototype}function ma(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b} 
da("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.s=!1;var g=this.j();try{e(g.resolve,g.reject)}catch(k){g.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(g){g(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var g=this;this.i(function(){g.m()})}this.g.push(e)};var f=n.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.m=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var g=0;g<e.length;++g){var k= 
e[g];e[g]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(m){k||(k=!0,l.call(g,m))}}var g=this,k=!1;return{resolve:e(this.D),reject:e(this.m)}};b.prototype.D=function(e){if(e===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.G(e);else{a:switch(typeof e){case "object":var g=null!=e;break a;case "function":g=!0;break a;default:g=!1}g?this.A(e):this.o(e)}}; 
b.prototype.A=function(e){var g=void 0;try{g=e.then}catch(k){this.m(k);return}"function"==typeof g?this.H(g,e):this.o(e)};b.prototype.m=function(e){this.v(2,e)};b.prototype.o=function(e){this.v(1,e)};b.prototype.v=function(e,g){if(0!=this.h)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.h);this.h=e;this.i=g;2===this.h&&this.F();this.B()};b.prototype.F=function(){var e=this;f(function(){if(e.C()){var g=n.console;"undefined"!==typeof g&&g.error(e.i)}},1)};b.prototype.C= 
function(){if(this.s)return!1;var e=n.CustomEvent,g=n.Event,k=n.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof g?e=new g("unhandledrejection",{cancelable:!0}):(e=n.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.B=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)h.h(this.g[e]);this.g=null}};var h=new c;b.prototype.G= 
function(e){var g=this.j();e.I(g.resolve,g.reject)};b.prototype.H=function(e,g){var k=this.j();try{e.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,g){function k(p,t){return"function"==typeof p?function(u){try{l(p(u))}catch(E){m(E)}}:t}var l,m,v=new b(function(p,t){l=p;m=t});this.I(k(e,l),k(g,m));return v};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.I=function(e,g){function k(){switch(l.h){case 1:e(l.i);break;case 2:g(l.i);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?h.h(k):this.g.push(k);this.s=!0};b.resolve=d;b.reject=function(e){return new b(function(g,k){k(e)})};b.race=function(e){return new b(function(g,k){for(var l=ea(e),m=l.next();!m.done;m=l.next())d(m.value).I(g,k)})};b.all=function(e){var g=ea(e),k=g.next();return k.done?d([]):new b(function(l,m){function v(u){return function(E){p[u]=E;t--;0==t&&l(p)}}var p=[],t=0;do p.push(void 0),t++,d(k.value).I(v(p.length-1),m),k=g.next();while(!k.done)})};return b}); 
da("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});var r=this||self;function na(a){return a};var oa={};var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};function ra(a){ra[" "](a);return a}ra[" "]=function(){};var sa={},w=null; 
function ta(a){var b;void 0===b&&(b=0);if(!w){w={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var h=c.concat(d[f].split(""));sa[f]=h;for(var e=0;e<h.length;e++){var g=h[e];void 0===w[g]&&(w[g]=e)}}}b=sa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=h=0;h<a.length-2;h+=3){var k=a[h],l=a[h+1];g=a[h+2];e=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];c[f++]=e+k+l+g}e=0;g=d;switch(a.length-h){case 2:e= 
a[h+1],g=b[(e&15)<<2]||d;case 1:a=a[h],c[f]=b[a>>2]+b[(a&3)<<4|e>>4]+g+d}return c.join("")};var x="undefined"!==typeof Uint8Array,ua={};var va;function wa(a){if(ua!==ua)throw Error("illegal external caller");this.P=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var y="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function xa(a,b){Object.isFrozen(a)||(y?a[y]|=b:void 0!==a.J?a.J|=b:Object.defineProperties(a,{J:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function ya(a){var b;y?b=a[y]:b=a.J;return null==b?0:b}function z(a){xa(a,1);return a}function A(a){return Array.isArray(a)?!!(ya(a)&2):!1}function za(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");xa(a,2)};function Ca(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Da=Object.freeze(z([]));function Ea(a){if(A(a.l))throw Error("Cannot mutate an immutable Message");}var Fa="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Ga(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function Ha(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(x&&null!=a&&a instanceof Uint8Array)return ta(a);if(a instanceof wa){var b=a.P;b=null==b||"string"===typeof b?b:x&&b instanceof Uint8Array?ta(b):null;return(a.P=b)||""}}}return a};function Ia(a){var b=Ja;b=void 0===b?Ka:b;return La(a,b)}function Ma(a,b){if(null!=a){if(Array.isArray(a))a=La(a,b);else if(Ca(a)){var c={},d;for(d in a)c[d]=Ma(a[d],b);a=c}else a=b(a);return a}}function La(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Ma(c[d],b);Array.isArray(a)&&ya(a)&1&&z(c);return c}function Ja(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Ha(a);return Array.isArray(a)?Ia(a):a}function Ka(a){return x&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};function Na(a){return a.h||(a.h=a.l[a.i+a.u]={})}function C(a,b,c){return-1===b?null:b>=a.i?a.h?a.h[b]:void 0:(void 0===c?0:c)&&a.h&&(c=a.h[b],null!=c)?c:a.l[b+a.u]}function D(a,b,c,d){d=void 0===d?!1:d;Ea(a);b<a.i&&!d?a.l[b+a.u]=c:Na(a)[b]=c}function F(a,b){a=C(a,b);a=null==a?a:!!a;return null==a?!1:a} 
function Oa(a){var b=Pa;var c=void 0===c?!1:c;a.g||(a.g={});var d=a.g[1];if(!d){var f=C(a,1,c);var h=void 0;h=void 0===h?!1:h;b=Array.isArray(f)?new b(f):h?new b:void 0;void 0!=b&&(a.g[1]=b,A(a.l)&&za(b.l),d=b)}if(null==d)return d;A(d.l)&&!A(a.l)&&(d=d.O(oa),D(a,1,d.l,c),a.g[1]=d);return d}function Qa(a,b){a=C(a,b);return null==a?0:a}function Ra(a,b){a=C(a,b);return null==a?"":a};function Sa(a,b,c){a||(a=Ta);Ta=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.u=(d?0:-1)-(this.constructor.g||0);this.g=void 0;this.l=a;a:{d=this.l.length;a=d-1;if(d&&(d=this.l[a],Ca(d))){this.i=a-this.u;this.h=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.u),this.h=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.u,(d=this.l[a])?Array.isArray(d)&&z(d):this.l[a]=Da;else{d=Na(this);var f=d[a];f?Array.isArray(f)&&z(f):d[a]=Da}} 
Sa.prototype.toJSON=function(){return Ia(this.l)};var Ta;function H(){Sa.apply(this,arguments)}q(H,Sa);H.prototype.O=function(){return this};if(Fa){var Ua={};Object.defineProperties(H,(Ua[Symbol.hasInstance]=Ga(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Ua))};function Va(a,b,c,d,f,h){if(a=a.g&&a.g[c])if(Array.isArray(a)){f=h.K?z(a.slice()):a;Ea(b);if(f){h=z([]);for(d=0;d<f.length;d++)h[d]=f[d].l;b.g||(b.g={});b.g[c]=f}else b.g&&(b.g[c]=void 0),h=Da;D(b,c,h)}else Ea(b),b.g||(b.g={}),f=null!=a?a.l:a,b.g[c]=a,D(b,c,f);else x&&d instanceof Uint8Array?f=d.length?new wa(new Uint8Array(d)):va||(va=new wa(null)):(Array.isArray(d)&&(f?za(d):Array.isArray(d)&&ya(d)&1&&h.K&&(d=d.slice())),f=d),D(b,c,f)};function I(){H.apply(this,arguments)}q(I,H); 
I.prototype.O=function(a){if(a!==oa)throw Error("requires a valid immutable API token");if(A(this.l)){a={K:!0};var b=A(this.l);if(b&&!a.K)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.M&&(c.M=this.M.slice());for(var d=this.l,f=0;f<d.length;f++){var h=d[f];if(f===d.length-1&&Ca(h))for(g in h){var e=+g;Number.isNaN(e)?Na(c)[g]=h[g]:Va(this,c,e,h[g],b,a)}else Va(this,c,f-this.u,h,b,a)}var g=c}else g=this;return g}; 
if(Fa){var Wa={};Object.defineProperties(I,(Wa[Symbol.hasInstance]=Ga(Object[Symbol.hasInstance]),Wa))};function Pa(a){I.call(this,a,-1,Xa)}q(Pa,I);var Xa=[28];function Ya(a){I.call(this,a,-1,Za)}q(Ya,I);var Za=[21];var J;function K(a,b){this.g=b===$a?a:""}K.prototype.toString=function(){return this.g+""};var $a={};function ab(a){if(void 0===J){var b=null;var c=r.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:na,createScript:na,createScriptURL:na})}catch(d){r.console&&r.console.error(d.message)}J=b}else J=b}a=(b=J)?b.createScriptURL(a):a;return new K(a,$a)};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var cb={passive:!0},db=bb(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});r.addEventListener("test",null,b)}catch(c){}return a});function eb(a){return a?a.passive&&db()?a:a.capture||!1:!1}function M(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,eb(d))};function N(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function fb(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):gb(b,a)[0]||null);return a||null} 
function gb(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var f=a.getElementsByClassName(b);return f}f=a.getElementsByTagName("*");if(b){var h={};for(c=d=0;a=f[c];c++){var e=a.className,g;if(g="function"==typeof e.split)g=0<=pa(e.split(/\s+/),b);g&&(h[d++]=a)}h.length=d;return h}return f}function hb(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var ib=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}function O(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function kb(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function lb(a,b,c,d){mb(a,b,void 0===c?null:c,void 0===d?!1:d)}function mb(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);var f=kb("IMG",a.document);if(c||d){var h=function(e){c&&c(e);if(d){e=a.google_image_requests;var g=pa(e,f);0<=g&&Array.prototype.splice.call(e,g,1)}f.removeEventListener&&f.removeEventListener("load",h,eb());f.removeEventListener&&f.removeEventListener("error",h,eb())};M(f,"load",h);M(f,"error",h)}f.src=b;a.google_image_requests.push(f)};var nb=0;function ob(a){return(a=pb(a))&&a.getAttribute("data-jc-version")||"unknown"}function pb(a){var b=document.currentScript;return(b=void 0===b?null:b)&&b.getAttribute("data-jc")===String(a)?b:document.querySelector('[data-jc="'+a+'"]')} 
function qb(){var a=void 0===a?.01:a;if(!(Math.random()>a)){var b=pb(60);a="https://"+(b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com")+"/pagead/gen_204?id=jca&jc=60&version="+ob(60)+"&sample="+a;b=window;var c=void 0===c?!1:c;var d;if(d=b.navigator)d=b.navigator.userAgent,d=/Chrome/.test(d)&&!/Edge/.test(d)?!0:!1;d&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):lb(b,a,void 0,c)}};var rb=document,P=window;function sb(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function xb(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:sb(a).match(/\S+/g)||[],b=0<=pa(a,b));return b}function Q(a,b){if(a.classList)a.classList.add(b);else if(!xb(a,b)){var c=sb(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function yb(a){this.g=(this.serializedAttributionData=a)?new Ya(a):null;this.isMutableImpression=Array.isArray(C(this.g,1))&&!!F(Oa(this.g),33);this.aa=!!F(this.g,11);this.hasUserFeedbackData=!!this.g&&Array.isArray(C(this.g,1));this.U=!!F(this.g,4);this.X=!!F(this.g,6);this.T=!!F(this.g,13);this.creativeIndexSuffix=1<Qa(this.g,8)?Qa(this.g,7).toString():"";this.ba=!!F(this.g,17);this.Z=!!F(this.g,18);this.S=!!F(this.g,14);this.enableMultiplexThirdPartyAttribution=!!F(this.g,32);this.F=!!F(this.g, 
15);this.ca=!!F(this.g,31);this.Y=1==F(this.g,9);this.openAttributionInline=1==F(this.g,10);this.isMobileDevice=!!F(this.g,12);this.A=null;this.W=(a=rb.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.H=""!==this.creativeIndexSuffix)&&void 0===P.goog_multislot_cache&&(P.goog_multislot_cache={});if(this.H&&!this.W){if(a=P.goog_multislot_cache.hd,void 0===a){a=!1;var b=rb.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom- 
b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.G=a;this.B=N("abgcp"+this.creativeIndexSuffix);this.v=N("abgc"+this.creativeIndexSuffix);this.h=N("abgs"+this.creativeIndexSuffix);N("abgl"+this.creativeIndexSuffix);this.s=N("abgb"+this.creativeIndexSuffix);this.D=N("abgac"+this.creativeIndexSuffix);N("mute_panel"+this.creativeIndexSuffix); 
this.C=fb("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.C&&!!this.S&&!fb("goog_delegate_disabled")&&!this.F;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var f=c.item(d);if("undefined"!=typeof f.tagName&&f.tagName.toUpperCase()==b){a=f;break a}}}else a=null;this.m=a;this.j=this.isDelegateAttributionActive?this.C:N("cbb"+this.creativeIndexSuffix);this.V=this.G?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu= 
!!this.j&&xb(this.j,"goog_dismissable_menu");this.o=null;this.L=0;this.i=this.isDelegateAttributionActive?this.C:this.X&&this.B?this.B:this.v;this.R=!!F(this.g,19);this.adbadgeEnabled=!!F(this.g,24);this.enableNativeJakeUi=!!F(this.g,27)};function zb(a,b){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=b};function R(a,b){a&&jb(b,function(c,d){a.style[d]=c})};function Ab(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Bb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");function Cb(a,b){this.g=a;this.h=b}function Db(a,b){this.url=a;this.N=!!b;this.depth=null};function Eb(){this.i="&";this.h={};this.j=0;this.g=[]}function S(a,b){var c={};c[a]=b;return[c]}function Fb(a,b,c,d,f){var h=[];jb(a,function(e,g){(e=Gb(e,b,c,d,f))&&h.push(g+"="+e)});return h.join(b)} 
function Gb(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],e=0;e<a.length;e++)h.push(Gb(a[e],b,c,d+1,f));return h.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Fb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))} 
function Hb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Ib(a)-c.length;if(0>d)return"";a.g.sort(function(m,v){return m-v});c=null;for(var f="",h=0;h<a.g.length;h++)for(var e=a.g[h],g=a.h[e],k=0;k<g.length;k++){if(!d){c=null==c?e:c;break}var l=Fb(g[k],a.i,",$");if(l){l=f+l;if(d>=l.length){d-=l.length;b+=l;f=a.i;break}c=null==c?e:c}}a="";null!=c&&(a=f+"trn="+c);return b+a}function Ib(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function Jb(){var a=void 0===a?P:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()}function Kb(){var a=Lb,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function Mb(a,b,c,d,f){if((d?a.g:Math.random())<(f||.01))try{if(c instanceof Eb)var h=c;else h=new Eb,jb(c,function(g,k){var l=h,m=l.j++;g=S(k,g);l.g.push(m);l.h[m]=g});var e=Hb(h,a.h,"/pagead/gen_204?id="+b+"&");e&&lb(r,e)}catch(g){}};var T=null;function Nb(){var a=void 0===a?r:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Ob(){var a=void 0===a?r:a;return(a=a.performance)&&a.now?a.now():null};function Pb(a,b){var c=Ob()||Nb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0};var U=r.performance,Qb=!!(U&&U.mark&&U.measure&&U.clearMarks),V=bb(function(){var a;if(a=Qb){var b;if(null===T){T="";try{a="";try{a=r.top.location.hash}catch(c){a=r.location.hash}a&&(T=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=T;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function Rb(){var a=window;this.h=[];this.i=a||r;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=V()||(null!=b?b:1>Math.random())}function Sb(a){a&&U&&V()&&(U.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),U.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Rb.prototype.start=function(a,b){if(!this.g)return null;a=new Pb(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";U&&V()&&U.mark(b);return a}; 
Rb.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(Ob()||Nb())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";U&&V()&&U.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function Tb(){var a=Ub;this.i=Lb;this.h=null;this.o=this.m;this.g=void 0===a?null:a;this.j=!1}Tb.prototype.pinger=function(){return this.i};function Vb(a,b){var c=Wb;try{if(c.g&&c.g.g){var d=c.g.start(a.toString(),3);var f=b();c.g.end(d)}else f=b()}catch(g){b=!0;try{Sb(d),b=c.o(a,new Ab(g,{message:Xb(g)}),void 0,void 0)}catch(k){c.m(217,k)}if(b){var h,e;null==(h=window.console)||null==(e=h.error)||e.call(h,g)}else throw g;}return f} 
function Yb(a,b){return function(){var c=ma.apply(0,arguments);return Vb(a,function(){return b.apply(void 0,c)})}} 
Tb.prototype.m=function(a,b,c,d,f){f=f||"jserror";try{var h=new Eb;h.g.push(1);h.h[1]=S("context",a);b.error&&b.meta&&b.id||(b=new Ab(b,{message:Xb(b)}));if(b.msg){var e=b.msg.substring(0,512);h.g.push(2);h.h[2]=S("msg",e)}var g=b.meta||{};if(this.h)try{this.h(g)}catch(L){}if(d)try{d(g)}catch(L){}b=[g];h.g.push(3);h.h[3]=b;d=r;b=[];e=null;do{var k=d;try{var l;if(l=!!k&&null!=k.location.href)b:{try{ra(k.foo);l=!0;break b}catch(L){}l=!1}var m=l}catch(L){m=!1}if(m){var v=k.location.href;e=k.document&& 
k.document.referrer||null}else v=e,e=null;b.push(new Db(v||""));try{d=k.parent}catch(L){d=null}}while(d&&k!=d);v=0;for(var p=b.length-1;v<=p;++v)b[v].depth=p-v;k=r;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(p=1;p<b.length;++p){var t=b[p];t.url||(t.url=k.location.ancestorOrigins[p-1]||"",t.N=!0)}var u=new Db(r.location.href,!1);k=null;var E=b.length-1;for(t=E;0<=t;--t){var B=b[t];!k&&Bb.test(B.url)&&(k=B);if(B.url&&!B.N){u=B;break}}B=null;var fc=b.length&& 
b[E].url;0!=u.depth&&fc&&(B=b[E]);var G=new Cb(u,B);if(G.h){var gc=G.h.url||"";h.g.push(4);h.h[4]=S("top",gc)}var Aa={url:G.g.url||""};if(G.g.url){var Ba=G.g.url.match(ib),tb=Ba[1],ub=Ba[3],vb=Ba[4];u="";tb&&(u+=tb+":");ub&&(u+="//",u+=ub,vb&&(u+=":"+vb));var wb=u}else wb="";Aa=[Aa,{url:wb}];h.g.push(5);h.h[5]=Aa;Mb(this.i,f,h,this.j,c)}catch(L){try{Mb(this.i,f,{context:"ecmserr",rctx:a,msg:Xb(L),url:G&&G.g.url},this.j,c)}catch(rc){}}return!0}; 
function Xb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var Lb,Wb,Ub=new Rb;function Zb(){if(!window.google_measure_js_timing){var a=Ub;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(V()&&qa(a.h,Sb),a.h.length=0)}}(function(a){Lb=null!=a?a:new Jb;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Kb();Wb=new Tb;Wb.h=function(b){var c=nb;0!==c&&(b.jc=String(c),b.shv=ob(c))};Wb.j=!0;"complete"==window.document.readyState?Zb():Ub.g&&M(window,"load",function(){Zb()})})();function W(a,b){return Yb(a,b)};function $b(a,b){var c=this;this.g=a;this.h=b;this.g.ba||(this.j=!1,this.i=null,!this.g.G||this.g.adbadgeEnabled||this.g.V?ac(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(R(this.g.s,a),R(this.g.h,a),R(this.g.B,b),R(this.g.v,b)):R(this.g.v,a)),bc(this),this.g.enableNativeJakeUi&&Q(this.g.D,"abgnac"),this.g.isDelegateAttributionActive?(Q(document.body,"goog_delegate_active"),Q(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.j&&hb(this.g.j),setTimeout(function(){Q(document.body, 
"jar")},this.g.T?750:100)),this.g.F&&Q(document.body,"goog_delegate_disabled"),this.g.R&&P.addEventListener("load",function(){return c.h()}))} 
function bc(a){if(a.g.aa)M(a.g.i,"click",W(365,function(c){var d=P.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)M(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.j&&(M(a.g.j,"click",function(){return a.h()}),M(a.g.j,"keydown",function(c){"Enter"!==c.code&&"Space"!==c.code||a.h()})),a.g.ca&&a.g.h&&M(a.g.h,"click",function(){return a.h()})),a.g.U)cc(a);else{M(a.g.i, 
"mouseover",W(367,function(){return cc(a)}));M(a.g.i,"mouseout",W(369,function(){return dc(a,500)}));M(a.g.i,"touchstart",W(368,function(){return cc(a)}),cb);var b=W(370,function(){return dc(a,4E3)});M(a.g.i,"mouseup",b);M(a.g.i,"touchend",b);M(a.g.i,"touchcancel",b);a.g.m&&M(a.g.m,"click",W(371,function(c){return a.preventDefault(c)}))}} 
function ac(a){if(a.g.m&&a.g.Z){var b=Oa(a.g.g);b&&null!=C(b,5)&&null!=C(b,6)&&(a.i=new zb(Ra(b,5),Ra(b,19)));M(a.g.m,"click",W(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);lb(window,d)}}))}}function ec(a){var b=a.g.D;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){Q(b,"abgacfo")})} 
function cc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.h&&"block"==a.g.h.style.display||(a.g.L=Date.now(),a.g.s&&a.g.h&&(a.g.s.style.display="none",a.g.h.style.display="block"))}function dc(a,b){window.clearTimeout(a.g.o);a.g.o=window.setTimeout(function(){return hc(a)},b)}function hc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.s&&a.g.h&&(a.g.s.style.display="block",a.g.h.style.display="none")} 
$b.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.L)O(a);else if(this.g.openAttributionInline){var b=this.g.m.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&O(a):window.openAttribution&&(window.openAttribution(b),O(a))}else this.g.Y&&(b=this.g.m.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&O(a):window.openSystemBrowser&&(window.openSystemBrowser(b),O(a)))};function ic(a){var b=jc,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;fb("goog_delegate_deferred")?void 0!==P.goog_delegate_deferred_token?kc(this):(a=function(){kc(c)},P.goog_delegate_deferred_token=a,setTimeout(a,5E3)):kc(this)}function kc(a){if(!a.g&&(a.g=!0,P.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new yb(a);new b(a)}};function lc(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function mc(){var a=new lc;return{promise:a.promise,resolve:a.resolve}};function nc(a,b){b=void 0===b?function(){}:b;a.google_llp||(a.google_llp={});a=a.google_llp;var c=a[5];if(c)return c;c=mc();a[5]=c;b();return c} 
function oc(a,b){return nc(a,function(){var c=a.document,d=kb("SCRIPT",c);d.src=b instanceof K&&b.constructor===K?b.g:"type_error:TrustedResourceUrl";var f,h,e=null==(h=(f=(d.ownerDocument&&d.ownerDocument.defaultView||window).document).querySelector)?void 0:h.call(f,"script[nonce]");(f=e?e.nonce||e.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",f);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function jc(a){var b=this;this.g=a;this.h=new $b(this.g,W(359,function(){return pc(b)}))}function pc(a){a.g.A?a.g.A.expandAttributionCard():(Vb(373,function(){hc(a.h);ec(a.h)}),oc(window,ab("https://pagead2.googlesyndication.com/pagead/js/"+(Ra(a.g.g,33)+"/abg_survey.js"))).then(function(b){b.createAttributionCard(a.g);a.g.A=b;b.expandAttributionCard()}),qb())};nb=60;function qc(a){var b=[a];b=void 0===b?[]:b;r.google_logging_queue||(r.google_logging_queue=[]);r.google_logging_queue.push([11,b]);new ic(a)}var X=["buildAttribution"],Y=r;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===qc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=qc;}).call(this);
