/*!
   JW Player version 8.18.3
   Copyright (c) 2021, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.18.3/notice.txt
*/
window["jscontext.polyfill"]=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=48)}({48:
/*!******************************************************!*\
  !*** ./src/headless/js-context/index.ts + 9 modules ***!
  \******************************************************/
/*! exports provided: default */
/*! all exports used */function(e,t,n){"use strict";n.r(t);var r=function(){function e(e){this.nodeType=e.toUpperCase(),this.childNodes=[],this.style={}}var t=e.prototype;return t.addEventListener=function(e){console.error("[polyfill] addEventListener:",e)},t.removeEventListener=function(e){console.error("[polyfill] removeEventListener:",e)},t.contains=function(){return!1},t.querySelector=function(e){return console.error("[polyfill] querySelector:",e),null},t.appendChild=function(e){return console.error("[polyfill] appendChild:",e),this.childNodes.push(e),!0},t.insertBefore=function(e,t){console.error("[polyfill] insertBefore:",e);var n=this.childNodes.indexOf(t);return t>-1&&this.childNodes.splice(n,0,e),!0},t.load=function(){},t.canPlayType=function(e){return console.error("[polyfill] canPlayType:",e),!0},t.getAttribute=function(e){return console.error("[polyfill] getAttribute:",e),this[e]},t.setAttribute=function(e,t){console.error("[polyfill] setAttribute:",e,t),this[e]=t},t.removeAttribute=function(e){console.error("[polyfill] removeAttribute:",e),delete this[e]},e}();globalThis.APP_HOSTNAME||console.error('"APP_HOSTNAME" global is undefined in JSContext. Set "APP_HOSTNAME" to the current application package name, namespace or website domain. location.host, hostname, origin and href are set based on this and used for analytics.');var o=globalThis.APP_HOSTNAME||"com.jwplayer.js-context",i={ancestorOrigins:void 0,origin:"file://"+o,protocol:"file:",hash:"",host:o,hostname:o,port:"",pathname:"",search:"",href:"file://"+o},l=function(){function e(){this.head=new r("head"),this.body=new r("body"),this.location=i,this.origin="",this.ownerDocument=null,this.referrer="",this.styleSheets=[]}var t=e.prototype;return t.querySelector=function(e){return console.error("[polyfill] querySelector:",e),null},t.querySelectorAll=function(e){return console.error("[polyfill] querySelectorAll:",e),null},t.elementFromPoint=function(e,t){return console.error("[polyfill] elementFromPoint:",e,t),null},t.getElementById=function(e){return console.error("[polyfill] getElementById:",e),null},t.getElementsByTagName=function(e){return console.error("[polyfill] getElementsByTagName:",e),"head"===e?[a.head]:[]},t.getElementsByTagNameNS=function(e,t){},t.createElement=function(e,t){return console.error("[polyfill] createElement:",e),new r(e)},t.createTextNode=function(e){return console.error("[polyfill] createTextNode:",e),new r(e)},t.addEventListener=function(e,t,n){console.error("[polyfill] addEventListener:",e,t)},t.removeEventListener=function(e,t,n){console.error("[polyfill] removeEventListener:",e,t)},e}(),a=new l;globalThis.DEVICE_NAME||console.error('"DEVICE_NAME" global is undefined in JSContext. Set "DEVICE_NAME" to the current device type "iPhone", "iPad", "iPod touch" or "AppleTV" so that the correct useragent can be constructed.'),globalThis.OS_NAME||console.error('"OS_NAME" global is undefined in JSContext. Set "OS_NAME" to the current user agent OS name "iPhone OS" or "OS" so that the correct useragent can be constructed.'),globalThis.OS_VERSION||console.error('"OS_VERSION" global is undefined in JSContext. Set "OS_VERSION" to the current OS version such as "13_3_1" so that the correct useragent can be constructed.'),globalThis.JWP_SDK_VERSION||console.error('"JWP_SDK_VERSION" global is undefined in JSContext. Set "JWP_SDK_VERSION" to the current SDK version such as "4.0.0" so that the correct useragent can be constructed.'),globalThis.LANGUAGE_CODE||console.error('"LANGUAGE_CODE" global is undefined in JSContext. Set "LANGUAGE_CODE" to the current system language, such as "en_US", so that the headless player can set navigator.language.');var s="5.0 ("+(globalThis.DEVICE_OS||"iPhone")+"; CPU "+(globalThis.OS_NAME||"iPhone OS")+" "+(globalThis.OS_VERSION||"13_3_1")+" like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13T534YI JWPlayer/"+(globalThis.JWP_SDK_VERSION||"4.0.0-0"),u=globalThis.LANGUAGE_CODE||"en-US",c={appCodeName:"Mozilla",appName:"Netscape",appVersion:s,cookieEnabled:!1,doNotTrack:null,language:u,languages:[u],onLine:!0,platform:"",userAgent:"Mozilla/"+s,vendor:"JW Player"};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(e,t){this.src_="",this.width=e||0,this.height=t||0,this.complete=!1}var t,n,r;return t=e,(n=[{key:"src",get:function(){return this.src_},set:function(e){this.src_=e}}])&&h(t.prototype,n),r&&h(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=new Map,g=function(){function e(){}var t,n,r,o=e.prototype;return o.getItem=function(e){var t=String(e);return p.has(e)?String(p.get(t)):null},o.setItem=function(e,t){p.set(String(e),String(t))},o.removeItem=function(e){p.delete(e)},o.clear=function(){p.clear()},o.key=function(e){if(0===arguments.length)throw new TypeError("Not enough arguments to Storage.key.");return Array.from(p.keys())[e]},t=e,(n=[{key:"length",get:function(){return p.size}}])&&f(t.prototype,n),r&&f(t,r),e}(),y=new g,m=new Proxy(y,{set:function(e,t,n){return g.prototype.hasOwnProperty(t)?y[t]=n:y.setItem(t,n),!0},get:function(e,t){return g.prototype.hasOwnProperty(t)?y[t]:p.has(t)?y.getItem(t):void 0}});function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(){}return e.prototype.parseFromString=function(e,t){var n=globalThis.XMLParser.parseFromString(e);return n&&n.length?new v(n[0]):null},e}(),v=function(){function e(t,n){var r=this,o=t.nodeName,i=t.nodeAttributeArray,l=void 0===i?[]:i,a=t.nodeChildArray,s=t.nodeContent;this.rootNode=n,o?(this.nodeName=this.tagName=o,this.nodeType=1):(this.nodeName="#cdata-section",this.nodeType=4),this.attr=l.reduce((function(e,t){return e[t.attributeName]=t.nodeContent,e}),{}),a&&(this.childNds=a.map((function(t){return new e(t,n||r)}))),s?this.textContent=s:this.childNds?this.textContent=this.childNds.reduce((function(e,t){return e?t.textContent?e+t.textContent:e:t.textContent}),null):this.textContent=null}var t,n,r,o=e.prototype;return o.getAttribute=function(e){return this.attr[e]},o.getElementsByTagName=function(e){var t=[];return this.tagName===e&&t.push(this),this.childNds?[].concat.apply(t,this.childNds.map((function(t){return t.getElementsByTagName(e)}))):t},o.lookupNamespaceURI=function(e){},o.querySelector=function(e){return"Ad"===e?this.getElementsByTagName(e)[0]:("parsererror"!==e&&console.error('XML querySelector("'+e+'") not implemented'),null)},t=e,(n=[{key:"documentElement",get:function(){return this.rootNode||this}},{key:"firstChild",get:function(){return this.childNds&&this.childNds.length?this.childNds[0]:null}},{key:"lastChild",get:function(){return this.childNds&&this.childNds.length?this.childNds[this.childNds.length-1]:null}},{key:"childNodes",get:function(){return this.childNds||[]}}])&&b(t.prototype,n),r&&b(t,r),e}(),N=globalThis,E=globalThis;E.Document=l,E.document=a,E.location=i,E.navigator=c,E.top=N,E.Image=d,E.localStorage=m,E.addEventListener=a.addEventListener,E.removeEventListener=a.removeEventListener,E.atob=function(e){var t=e.replace(/=+$/,""),n="";if(t.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o=0,i=0,l=0;r=t.charAt(l++);~r&&(i=o%4?64*i+r:r,o++%4)?n+=String.fromCharCode(255&i>>(-2*o&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return n},E.setTimeout=function(e,t){return globalThis.NativeTimer.setTimeout(e,t)},E.clearTimeout=function(e){globalThis.NativeTimer.clearTimeout(e)},E.DOMParser=S;t.default=E}}).default;