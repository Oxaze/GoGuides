(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f07fd7"],{"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),o=r("6821"),a=r("6a99"),s=r("69a8"),u=r("c69a"),f=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?f:function(t,e){if(t=o(t),e=a(e,!0),u)try{return f(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"456d":function(t,e,r){var n=r("4bf8"),i=r("0d58");r("5eda")("keys",function(){return function(t){return i(n(t))}})},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"540a":function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=r(8),o=n(i);t.exports=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{parallax:{default:!0,type:Boolean},speedFactor:{default:.15,type:Number},fixed:{default:!1,type:Boolean},breakpoint:{default:"(min-width: 968px)",type:String},sectionHeight:{default:70,type:Number,required:!1},sectionClass:{type:String,default:"Masthead"},containerClass:{type:String,default:"Masthead__image"},parallaxClass:{type:String,default:"is-parallax"},fixedClass:{type:String,default:"is-fixed"},direction:{type:String,default:"up"}},data:function(){return{el:null,mediaQuery:null}},mounted:function(){this.parallax&&!this.fixed&&(this.el=this.$refs.parallax,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},this.init())},methods:{animateElement:function(){var t=this.$refs.block.offsetHeight,e=this.$refs.parallax.offsetHeight,r=e-t,n=window.pageYOffset*this.speedFactor;n<=r&&n>=0&&(this.el.style.transform="translate3d(0, "+n*this.directionValue+"px ,0)")},scrollHandler:function(){var t=this;window.requestAnimationFrame(function(){t.isInView(t.$refs.parallax)&&t.animateElement()})},isInView:function(t){var e=t.getBoundingClientRect();return e.bottom>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)},setupListener:function(){this.mediaQuery.matches?window.addEventListener("scroll",this.scrollHandler,!1):window.removeEventListener("scroll",this.scrollHandler,!1)},init:function(){this.mediaQuery=window.matchMedia(this.breakpoint),this.mediaQuery&&(this.mediaQuery.addListener(this.setupListener),this.setupListener())}},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler,!1)},computed:{directionValue:function(){return"down"===this.direction?1:-1}}}},function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return 3*t.length/4-r(t)}function i(t){var e,n,i,o,a,s,u=t.length;a=r(t),s=new h(3*u/4-a),i=a>0?u-4:u;var c=0;for(e=0,n=0;e<i;e+=4,n+=3)o=f[t.charCodeAt(e)]<<18|f[t.charCodeAt(e+1)]<<12|f[t.charCodeAt(e+2)]<<6|f[t.charCodeAt(e+3)],s[c++]=o>>16&255,s[c++]=o>>8&255,s[c++]=255&o;return 2===a?(o=f[t.charCodeAt(e)]<<2|f[t.charCodeAt(e+1)]>>4,s[c++]=255&o):1===a&&(o=f[t.charCodeAt(e)]<<10|f[t.charCodeAt(e+1)]<<4|f[t.charCodeAt(e+2)]>>2,s[c++]=o>>8&255,s[c++]=255&o),s}function o(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function a(t,e,r){for(var n,i=[],a=e;a<r;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],i.push(o(n));return i.join("")}function s(t){for(var e,r=t.length,n=r%3,i="",o=[],s=16383,f=0,h=r-n;f<h;f+=s)o.push(a(t,f,f+s>h?h:f+s));return 1===n?(e=t[r-1],i+=u[e>>2],i+=u[e<<4&63],i+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],i+=u[e>>10],i+=u[e>>4&63],i+=u[e<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=n,e.toByteArray=i,e.fromByteArray=s;for(var u=[],f=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=c.length;l<p;++l)u[l]=c[l],f[c.charCodeAt(l)]=l;f["-".charCodeAt(0)]=62,f["_".charCodeAt(0)]=63},function(t,e,r){(function(t){
/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(i()<e)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=a.prototype):(null===t&&(t=new a(e)),t.length=e),t}function a(t,e,r){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,r,n):"string"==typeof e?c(t,e,r):d(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e,r,n){return u(e),e<=0?o(t,e):void 0!==r?"string"==typeof n?o(t,e).fill(r,n):o(t,e).fill(r):o(t,e)}function h(t,e){if(u(e),t=o(t,e<0?0:0|g(e)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!a.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|A(e,r);t=o(t,n);var i=t.write(e,r);return i!==n&&(t=t.slice(0,i)),t}function l(t,e){var r=e.length<0?0:0|g(e.length);t=o(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),a.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=a.prototype):t=l(t,e),t}function d(t,e){if(a.isBuffer(e)){var r=0|g(e.length);return t=o(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||X(e.length)?o(t,0):l(t,e);if("Buffer"===e.type&&Z(e.data))return l(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),a.alloc(+t)}function A(t,e){if(a.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return Q(t).length;default:if(n)return $(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return Y(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return U(this,e,r);case"latin1":case"binary":return M(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function m(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var a,s=1,u=t.length,f=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,f/=2,r/=2}if(i){var h=-1;for(a=r;a<u;a++)if(o(t,a)===o(e,-1===h?0:a-h)){if(-1===h&&(h=a),a-h+1===f)return h*s}else-1!==h&&(a-=a-h),h=-1}else for(r+f>u&&(r=u-f),a=r;a>=0;a--){for(var c=!0,l=0;l<f;l++)if(o(t,a+l)!==o(e,l)){c=!1;break}if(c)return a}return-1}function _(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))return a;t[r+a]=s}return a}function B(t,e,r,n){return J($(e,t.length-r),t,r,n)}function E(t,e,r,n){return J(V(e),t,r,n)}function R(t,e,r,n){return E(t,e,r,n)}function x(t,e,r,n){return J(Q(e),t,r,n)}function C(t,e,r,n){return J(W(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,a,s,u,f=t[i],h=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=r)switch(c){case 1:f<128&&(h=f);break;case 2:o=t[i+1],128===(192&o)&&(u=(31&f)<<6|63&o,u>127&&(h=u));break;case 3:o=t[i+1],a=t[i+2],128===(192&o)&&128===(192&a)&&(u=(15&f)<<12|(63&o)<<6|63&a,u>2047&&(u<55296||u>57343)&&(h=u));break;case 4:o=t[i+1],a=t[i+2],s=t[i+3],128===(192&o)&&128===(192&a)&&128===(192&s)&&(u=(15&f)<<18|(63&o)<<12|(63&a)<<6|63&s,u>65535&&u<1114112&&(h=u))}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return S(n)}function S(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return r}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function M(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function Y(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=H(t[o]);return i}function j(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function O(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,r,n,i,o){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function L(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function D(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function k(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(t,e,r,n,i){return i||k(t,e,r,4,34028234663852886e22,-34028234663852886e22),G.write(t,e,r,n,23,4),r+4}function F(t,e,r,n,i){return i||k(t,e,r,8,17976931348623157e292,-17976931348623157e292),G.write(t,e,r,n,52,8),r+8}function q(t){if(t=z(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function H(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],a=0;a<n;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function W(t,e){for(var r,n,i,o=[],a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function Q(t){return K.toByteArray(q(t))}function J(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function X(t){return t!==t}var K=r(2),G=r(6),Z=r(7);e.Buffer=a,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=i(),a.poolSize=8192,a._augment=function(t){return t.__proto__=a.prototype,t},a.from=function(t,e,r){return s(null,t,e,r)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(t,e,r){return f(null,t,e,r)},a.allocUnsafe=function(t){return h(null,t)},a.allocUnsafeSlow=function(t){return h(null,t)},a.isBuffer=function(t){return!(null==t||!t._isBuffer)},a.compare=function(t,e){if(!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Z(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=a.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(!a.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},a.byteLength=A,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)w(this,e,e+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},a.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):v.apply(this,arguments)},a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},a.prototype.compare=function(t,e,r,n,i){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,s=r-e,u=Math.min(o,s),f=this.slice(n,i),h=t.slice(e,r),c=0;c<u;++c)if(f[c]!==h[c]){o=f[c],s=h[c];break}return o<s?-1:s<o?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return m(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return m(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return _(this,t,e,r);case"utf8":case"utf-8":return B(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return R(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;a.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t),a.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=a.prototype;else{var i=e-t;r=new a(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},a.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},a.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},a.prototype.readUInt8=function(t,e){return e||O(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,e){return e||O(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,e){return e||O(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,e){return e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,e){return e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},a.prototype.readInt8=function(t,e){return e||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){e||O(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){e||O(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,e){return e||O(t,4,this.length),G.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return e||O(t,4,this.length),G.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return e||O(t,8,this.length),G.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return e||O(t,8,this.length),G.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;I(this,t,e,r,i,0)}var o=1,a=0;for(this[e]=255&t;++a<r&&(o*=256);)this[e+a]=t/o&255;return e+r},a.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;I(this,t,e,r,i,0)}var o=r-1,a=1;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=t/a&255;return e+r},a.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,255,0),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=0,a=1,s=0;for(this[e]=255&t;++o<r&&(a*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,127,-128),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},a.prototype.writeFloatLE=function(t,e,r){return N(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return N(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return F(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return F(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},a.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=a.isBuffer(t)?t:$(new a(t,n).toString()),u=s.length;for(o=0;o<r-e;++o)this[o+e]=s[o%u]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e,r){e=t.exports=r(5)(!0),e.push([t.id,'.Masthead{position:relative;min-height:21.875rem;scroll-behavior:smooth;overflow:hidden;z-index:-1}@media screen and (min-width:768px){.Masthead{min-height:100vh}}.Masthead__image{width:100%;overflow:hidden;height:120%}.Masthead__image>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"}.Masthead__image.is-parallax{left:0;position:absolute;will-change:transform;right:0;top:0}.Masthead__image.is-parallax>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"}.Masthead__image.is-fixed{position:fixed;will-change:transform}.Masthead__image.is-fixed>img{height:100vh;max-width:none}',"",{version:3,sources:["/Users/jjuszczak/Projekte/Privat/vue-parallax/src/components/Parallax.vue"],names:[],mappings:"AACA,UAAU,kBAAkB,qBAAqB,uBAAuB,gBAAgB,UAAU,CACjG,AACD,oCACA,UAAU,gBAAgB,CACzB,CACA,AACD,iBAAiB,WAAW,gBAAgB,WAAW,CACtD,AACD,qBAAqB,YAAY,eAAe,WAAW,oBAAoB,iBAAiB,uBAAuB,oBAAoB,qDAAqD,CAC/L,AACD,6BAA6B,OAAO,kBAAkB,sBAAsB,QAAQ,KAAK,CACxF,AACD,iCAAiC,YAAY,eAAe,WAAW,oBAAoB,iBAAiB,uBAAuB,oBAAoB,qDAAqD,CAC3M,AACD,0BAA0B,eAAe,qBAAqB,CAC7D,AACD,8BAA8B,aAAa,cAAc,CACxD",file:"Parallax.vue",sourcesContent:['\n.Masthead{position:relative;min-height:21.875rem;scroll-behavior:smooth;overflow:hidden;z-index:-1\n}\n@media screen and (min-width: 768px){\n.Masthead{min-height:100vh\n}\n}\n.Masthead__image{width:100%;overflow:hidden;height:120%\n}\n.Masthead__image>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"\n}\n.Masthead__image.is-parallax{left:0;position:absolute;will-change:transform;right:0;top:0\n}\n.Masthead__image.is-parallax>img{height:100%;max-width:none;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;font-family:"object-fit: cover; object-position: top"\n}\n.Masthead__image.is-fixed{position:fixed;will-change:transform\n}\n.Masthead__image.is-fixed>img{height:100vh;max-width:none\n}\n'],sourceRoot:""}])},function(t,e,r){(function(e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e){var o=n(i),a=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[r].concat(a).concat([o]).join("\n")}return[r].join("\n")}function n(t){var r=new e(JSON.stringify(t)).toString("base64"),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+r;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}}).call(e,r(3).Buffer)},function(t,e){e.read=function(t,e,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[e+c],c+=l,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[e+c],c+=l,h-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,s,u,f=8*o-i-1,h=(1<<f)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),e+=a+c>=1?l/u:l*Math.pow(2,1-c),e*u>=2&&(a++,u/=2),a+c>=h?(s=0,a=h):a+c>=1?(s=(e*u-1)*Math.pow(2,i),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[r+p]=255&a,p+=d,a/=256,f-=8);t[r+p-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){function n(t){r(11)}var i=r(9)(r(1),r(10),n,null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,r,n,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var u,f="function"==typeof a?a.options:a;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),n&&(f._scopeId=n),i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=u):r&&(u=r),u){var h=f.functional,c=h?f.render:f.beforeCreate;h?f.render=function(t,e){return u.call(e),c(t,e)}:f.beforeCreate=c?[].concat(c,u):[u]}return{esModule:o,exports:a,options:f}}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{ref:"block",class:[t.sectionClass],style:{height:t.sectionHeight+"vh"}},[e("div",{ref:"parallax",class:[t.parallax?t.parallaxClass:"",t.fixed?t.fixedClass:"",t.containerClass]},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),r(12)("4e392459",n,!0)},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=h[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(d)return g;n.parentNode.removeChild(n)}if(y){var o=p++;n=l||(l=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=A(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,f=r(13),h={},c=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,d=!1,g=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){d=r;var i=f(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=h[a.id];s.refs--,r.push(s)}e?(i=f(t,e),n(i)):i=[];for(o=0;o<r.length;o++){s=r[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete h[s.id]}}}};var A=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],f=o[3],h={id:t+":"+i,css:s,media:u,sourceMap:f};n[a]?n[a].parts.push(h):r.push(n[a]={id:a,parts:[h]})}return r}}])})},"5eda":function(t,e,r){var n=r("5ca1"),i=r("8378"),o=r("79e5");t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},"85f2":function(t,e,r){t.exports=r("454f")},"8e6e":function(t,e,r){var n=r("5ca1"),i=r("990b"),o=r("6821"),a=r("11e9"),s=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),u=a.f,f=i(n),h={},c=0;while(f.length>c)r=u(n,e=f[c++]),void 0!==r&&s(h,e,r);return h}})},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"990b":function(t,e,r){var n=r("9093"),i=r("2621"),o=r("cb7c"),a=r("7726").Reflect;t.exports=a&&a.ownKeys||function(t){var e=n.f(o(t)),r=i.f;return r?e.concat(r(t)):e}},bd86:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("85f2"),i=r.n(n);function o(t,e,r){return e in t?i()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},f1ae:function(t,e,r){"use strict";var n=r("86cc"),i=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}}}]);
//# sourceMappingURL=chunk-21f07fd7.b76b5155.js.map