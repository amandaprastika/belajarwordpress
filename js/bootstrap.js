//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*!
 * FullCalendar v3.5.1
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("moment")):t(jQuery,moment)}(function(t,e){function n(t){return j(t,Gt)}function i(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function s(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function r(){t("body").addClass("fc-not-allowed")}function o(){t("body").removeClass("fc-not-allowed")}function a(e,n,i){var s=Math.floor(n/e.length),r=Math.floor(n-s*(e.length-1)),o=[],a=[],u=[],c=0;l(e),e.each(function(n,i){var l=n===e.length-1?r:s,h=t(i).outerHeight(!0);h<l?(o.push(i),a.push(h),u.push(t(i).height())):c+=h}),i&&(n-=c,s=Math.floor(n/o.length),r=Math.floor(n-s*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?r:s,l=a[e],c=u[e],h=i-(l-c);l<i&&t(n).height(h)})}function l(t){t.height("")}function u(e){var n=0;return e.find("> *").each(function(e,i){var s=t(i).outerWidth();s>n&&(n=s)}),n++,e.width(n),n}function c(t,e){var n,i=t.add(e);return i.css({position:"relative",left:-1}),n=t.outerHeight()-e.outerHeight(),i.css({position:"",left:""}),n}function h(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function d(t,e){var n=t.offset(),i=n.left-(e?e.left:0),s=n.top-(e?e.top:0);return{left:i,right:i+t.outerWidth(),top:s,bottom:s+t.outerHeight()}}function f(t,e){var n=t.offset(),i=p(t),s=n.left+w(t,"border-left-width")+i.left-(e?e.left:0),r=n.top+w(t,"border-top-width")+i.top-(e?e.top:0);return{left:s,right:s+t[0].clientWidth,top:r,bottom:r+t[0].clientHeight}}function g(t,e){var n=t.offset(),i=n.left+w(t,"border-left-width")+w(t,"padding-left")-(e?e.left:0),s=n.top+w(t,"border-top-width")+w(t,"padding-top")-(e?e.top:0);return{left:i,right:i+t.width(),top:s,bottom:s+t.height()}}function p(t){var e,n=t[0].offsetWidth-t[0].clientWidth,i=t[0].offsetHeight-t[0].clientHeight;return n=v(n),i=v(i),e={left:0,right:0,top:0,bottom:i},m()&&"rtl"==t.css("direction")?e.left=n:e.right=n,e}function v(t){return t=Math.max(0,t),t=Math.round(t)}function m(){return null===Wt&&(Wt=y()),Wt}function y(){var e=t("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),n=e.children(),i=n.offset().left>e.offset().left;return e.remove(),i}function w(t,e){return parseFloat(t.css(e))||0}function D(t){return 1==t.which&&!t.ctrlKey}function b(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageX:t.pageX}function S(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageY:t.pageY}function E(t){return/^touch/.test(t.type)}function C(t){t.addClass("fc-unselectable").on("selectstart",R)}function T(t){t.removeClass("fc-unselectable").off("selectstart",R)}function R(t){t.preventDefault()}function I(t,e){var n={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function H(t,e){return{left:Math.min(Math.max(t.left,e.left),e.right),top:Math.min(Math.max(t.top,e.top),e.bottom)}}function M(t){return{left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}}function x(t,e){return{left:t.left-e.left,top:t.top-e.top}}function z(e){var n,i,s=[],r=[];for("string"==typeof e?r=e.split(/\s*,\s*/):"function"==typeof e?r=[e]:t.isArray(e)&&(r=e),n=0;n<r.length;n++)i=r[n],"string"==typeof i?s.push("-"==i.charAt(0)?{field:i.substring(1),order:-1}:{field:i,order:1}):"function"==typeof i&&s.push({func:i});return s}function F(t,e,n){var i,s;for(i=0;i<n.length;i++)if(s=P(t,e,n[i]))return s;return 0}function P(t,e,n){return n.func?n.func(t,e):B(t[n.field],e[n.field])*(n.order||1)}function B(e,n){return e||n?null==n?-1:null==e?1:"string"===t.type(e)||"string"===t.type(n)?String(e).localeCompare(String(n)):e-n:0}function k(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function A(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days")})}function L(t,n,i){return e.duration(Math.round(t.diff(n,i,!0)),i)}function O(t,e){var n,i,s;for(n=0;n<qt.length&&(i=qt[n],!((s=V(i,t,e))>=1&&ot(s)));n++);return i}function N(t,e){var n=O(t);return"week"===n&&"object"==typeof e&&e.days&&(n="day"),n}function V(t,n,i){return null!=i?i.diff(n,t,!0):e.isDuration(n)?n.as(t):n.end.diff(n.start,t,!0)}function U(t,e,n){var i;return _(n)?(e-t)/n:(i=n.asMonths(),Math.abs(i)>=1&&ot(i)?e.diff(t,"months",!0)/i:e.diff(t,"days",!0)/n.asDays())}function G(t,e){var n,i;return _(t)||_(e)?t/e:(n=t.asMonths(),i=e.asMonths(),Math.abs(n)>=1&&ot(n)&&Math.abs(i)>=1&&ot(i)?n/i:t.asDays()/e.asDays())}function W(t,n){var i;return _(t)?e.duration(t*n):(i=t.asMonths(),Math.abs(i)>=1&&ot(i)?e.duration({months:i*n}):e.duration({days:t.asDays()*n}))}function _(t){return Boolean(t.hours()||t.minutes()||t.seconds()||t.milliseconds())}function q(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function Y(t){return"string"==typeof t&&/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function j(t,e){var n,i,s,r,o,a,l={};if(e)for(n=0;n<e.length;n++){for(i=e[n],s=[],r=t.length-1;r>=0;r--)if("object"==typeof(o=t[r][i]))s.unshift(o);else if(void 0!==o){l[i]=o;break}s.length&&(l[i]=j(s))}for(n=t.length-1;n>=0;n--){a=t[n];for(i in a)i in l||(l[i]=a[i])}return l}function Z(t,e){for(var n in t)Q(t,n)&&(e[n]=t[n])}function Q(t,e){return Yt.call(t,e)}function $(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var s,r;for(s=0;s<e.length;s++)r=e[s].apply(n,i)||r;return r}}function X(t,e){for(var n=0,i=0;i<t.length;)e(t[i])?(t.splice(i,1),n++):i++;return n}function K(t,e){for(var n=0,i=0;i<t.length;)t[i]===e?(t.splice(i,1),n++):i++;return n}function J(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}function tt(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function et(t){return t.replace(/&.*?;/g,"")}function nt(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+":"+e)}),n.join(";")}function it(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+'="'+tt(e)+'"')}),n.join(" ")}function st(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rt(t,e){return t-e}function ot(t){return t%1==0}function at(t,e){var n=t[e];return function(){return n.apply(t,arguments)}}function lt(t,e,n){var i,s,r,o,a,l=function(){var u=+new Date-o;u<e?i=setTimeout(l,e-u):(i=null,n||(a=t.apply(r,s),r=s=null))};return function(){r=this,s=arguments,o=+new Date;var u=n&&!i;return i||(i=setTimeout(l,e)),u&&(a=t.apply(r,s),r=s=null),a}}function ut(n,i,s){var r,o,a,l,u=n[0],c=1==n.length&&"string"==typeof u;return e.isMoment(u)||q(u)||void 0===u?l=e.apply(null,n):(r=!1,o=!1,c?jt.test(u)?(u+="-01",n=[u],r=!0,o=!0):(a=Zt.exec(u))&&(r=!a[5],o=!0):t.isArray(u)&&(o=!0),l=i||r?e.utc.apply(e,n):e.apply(null,n),r?(l._ambigTime=!0,l._ambigZone=!0):s&&(o?l._ambigZone=!0:c&&l.utcOffset(u))),l._fullCalendar=!0,l}function ct(t){return"en"!==t.locale()?t.clone().locale("en"):t}function ht(){}function dt(t,e){var n;return Q(e,"constructor")&&(n=e.constructor),"function"!=typeof n&&(n=e.constructor=function(){t.apply(this,arguments)}),n.prototype=Object.create(t.prototype),Z(e,n.prototype),Z(t,n),n}function ft(t,e){t.then=function(n){return"function"==typeof n?ae.resolve(n(e)):t}}function gt(t){t.then=function(e,n){return"function"==typeof n&&n(),t}}function pt(t,e){return!t&&!e||!(!t||!e)&&(t.component===e.component&&vt(t,e)&&vt(e,t))}function vt(t,e){for(var n in t)if(!/^(component|left|right|top|bottom)$/.test(n)&&t[n]!==e[n])return!1;return!0}function mt(n){var i,s,r,o,a=Vt.dataAttrPrefix;return a&&(a+="-"),i=n.data(a+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},s=i.start,null==s&&(s=i.time),r=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==s&&(s=n.data(a+"start")),null==s&&(s=n.data(a+"time")),null==r&&(r=n.data(a+"duration")),null==o&&(o=n.data(a+"stick")),s=null!=s?e.duration(s):null,r=null!=r?e.duration(r):null,o=Boolean(o),{eventProps:i,startTime:s,duration:r,stick:o}}function yt(t,e){var n,i;for(n=0;n<e.length;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function wt(t,e){return t.leftCol-e.leftCol}function Dt(t){var e,n,i,s=[];for(e=0;e<t.length;e++){for(n=t[e],i=0;i<s.length&&Et(n,s[i]).length;i++);n.level=i,(s[i]||(s[i]=[])).push(n)}return s}function bt(t){var e,n,i,s,r;for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],s.forwardSegs=[],r=e+1;r<t.length;r++)Et(s,t[r],s.forwardSegs)}function St(t){var e,n,i=t.forwardSegs,s=0;if(void 0===t.forwardPressure){for(e=0;e<i.length;e++)n=i[e],St(n),s=Math.max(s,1+n.forwardPressure);t.forwardPressure=s}}function Et(t,e,n){n=n||[];for(var i=0;i<e.length;i++)Ct(t,e[i])&&n.push(e[i]);return n}function Ct(t,e){return t.bottom>e.top&&t.top<e.bottom}function Tt(t){var e,n,i,s=[];for(e in t)for(n=t[e].eventInstances,i=0;i<n.length;i++)s.push(n[i].toLegacy());return s}function Rt(t){this.items=t||[]}function It(e,n){function i(t){n=t}function s(){n.layout?(g?g.empty():g=this.el=t("<div class='fc-toolbar "+n.extraClasses+"'/>"),g.append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>')):r()}function r(){g&&(g.remove(),g=f.el=null)}function o(i){var s=e.theme,r=t('<div class="fc-'+i+'"/>'),o=n.layout[i],a=e.opt("customButtons")||{},l=e.overrides.buttonText||{},u=e.opt("buttonText")||{};return o&&t.each(o.split(" "),function(n){var i,o=t(),c=!0;t.each(this.split(","),function(n,i){var r,h,d,f,g,v,m,y;"title"==i?(o=o.add(t("<h2>&nbsp;</h2>")),c=!1):((r=a[i])?(d=function(t){r.click&&r.click.call(y[0],t)},(f=s.getCustomButtonIconClass(r))||(f=s.getIconClass(i))||(g=r.text)):(h=e.getViewSpec(i))?(p.push(i),d=function(){e.changeView(i)},(g=h.buttonTextOverride)||(f=s.getIconClass(i))||(g=h.buttonTextDefault)):e[i]&&(d=function(){e[i]()},(g=l[i])||(f=s.getIconClass(i))||(g=u[i])),d&&(m=["fc-"+i+"-button",s.getClass("button"),s.getClass("stateDefault")],g?v=tt(g):f&&(v="<span class='"+f+"'></span>"),y=t('<button type="button" class="'+m.join(" ")+'">'+v+"</button>").click(function(t){y.hasClass(s.getClass("stateDisabled"))||(d(t),(y.hasClass(s.getClass("stateActive"))||y.hasClass(s.getClass("stateDisabled")))&&y.removeClass(s.getClass("stateHover")))}).mousedown(function(){y.not("."+s.getClass("stateActive")).not("."+s.getClass("stateDisabled")).addClass(s.getClass("stateDown"))}).mouseup(function(){y.removeClass(s.getClass("stateDown"))}).hover(function(){y.not("."+s.getClass("stateActive")).not("."+s.getClass("stateDisabled")).addClass(s.getClass("stateHover"))},function(){y.removeClass(s.getClass("stateHover")).removeClass(s.getClass("stateDown"))}),o=o.add(y)))}),c&&o.first().addClass(s.getClass("cornerLeft")).end().last().addClass(s.getClass("cornerRight")).end(),o.length>1?(i=t("<div/>"),c&&i.addClass(s.getClass("buttonGroup")),i.append(o),r.append(i)):r.append(o)}),r}function a(t){g&&g.find("h2").text(t)}function l(t){g&&g.find(".fc-"+t+"-button").addClass(e.theme.getClass("stateActive"))}function u(t){g&&g.find(".fc-"+t+"-button").removeClass(e.theme.getClass("stateActive"))}function c(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!0).addClass(e.theme.getClass("stateDisabled"))}function h(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!1).removeClass(e.theme.getClass("stateDisabled"))}function d(){return p}var f=this;f.setToolbarOptions=i,f.render=s,f.removeElement=r,f.updateTitle=a,f.activateButton=l,f.deactivateButton=u,f.disableButton=c,f.enableButton=h,f.getViewsWithButtons=d,f.el=null;var g,p=[]}function Ht(t,e,n){var i;for(i=0;i<t.length;i++)if(!e(t[i].eventInstance.toLegacy(),n?n.toLegacy():null))return!1;return!0}function Mt(t,e){var n,i,s,r,o=e.toLegacy();for(n=0;n<t.length;n++){if(i=t[n].eventInstance,s=i.def,!1===(r=s.getOverlap()))return!1;if("function"==typeof r&&!r(i.toLegacy(),o))return!1}return!0}function xt(e,n){return null==n?e:t.isFunction(n)?e.filter(n):(n+="",e.filter(function(t){return t.id==n}))}function zt(e){t.each(He,function(t,n){null==e[t]&&(e[t]=n(e))})}function Ft(t){return e.localeData(t)||e.localeData("en")}function Pt(t,e){var n,i,s=[],r=e.startMs;for(t.sort(Bt),n=0;n<t.length;n++)i=t[n],i.startMs>r&&s.push(new Me(r,i.startMs)),i.endMs>r&&(r=i.endMs);return r<e.endMs&&s.push(new Me(r,e.endMs)),s}function Bt(t,e){return t.startMs-e.startMs}function kt(t,e){return t.getPrimitive()==e.getPrimitive()}function At(t,e){var n,i=[];for(n=0;n<t.length;n++)i.push.apply(i,t[n].buildInstances(e));return i}function Lt(t){return t.map(function(t){return new Ve(t.dateProfile.unzonedRange,t.def,t)})}function Ot(t){return t.map(function(t){return t.dateProfile.unzonedRange})}function Nt(t){return t.map(function(t){return t.componentFootprint})}var Vt=t.fullCalendar={version:"3.5.1",internalApiVersion:10},Ut=Vt.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(s,r){var o,a=t(r),l=a.data("fullCalendar");"string"==typeof e?"getCalendar"===e?s||(i=l):"destroy"===e?l&&(l.destroy(),a.removeData("fullCalendar")):l?t.isFunction(l[e])?(o=l[e].apply(l,n),s||(i=o),"destroy"===e&&a.removeData("fullCalendar")):Vt.warn("'"+e+"' is an unknown FullCalendar method."):Vt.warn("Attempting to call a FullCalendar method on an element with no calendar."):l||(l=new Ee(a,e),a.data("fullCalendar",l),l.render())}),i};var Gt=["header","footer","buttonText","buttonIcons","themeButtonIcons"];Vt.applyAll=$,Vt.debounce=lt,Vt.isInt=ot,Vt.htmlEscape=tt,Vt.cssToStr=nt,Vt.proxy=at,Vt.capitaliseFirstLetter=st,Vt.getOuterRect=d,Vt.getClientRect=f,Vt.getContentRect=g,Vt.getScrollbarWidths=p;var Wt=null;Vt.preventDefault=R,Vt.intersectRects=I,Vt.parseFieldSpecs=z,Vt.compareByFieldSpecs=F,Vt.compareByFieldSpec=P,Vt.flexibleCompare=B,Vt.computeGreatestUnit=O,Vt.divideRangeByDuration=U,Vt.divideDurationByDuration=G,Vt.multiplyDuration=W,Vt.durationHasTime=_;var _t=["sun","mon","tue","wed","thu","fri","sat"],qt=["year","month","week","day","hour","minute","second","millisecond"];Vt.log=function(){var t=window.console;if(t&&t.log)return t.log.apply(t,arguments)},Vt.warn=function(){var t=window.console;return t&&t.warn?t.warn.apply(t,arguments):Vt.log.apply(Vt,arguments)};var Yt={}.hasOwnProperty;Vt.removeExact=K;var jt=/^\s*\d{4}-\d\d$/,Zt=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,Qt=e.fn,$t=t.extend({},Qt),Xt=e.momentProperties;Xt.push("_fullCalendar"),Xt.push("_ambigTime"),Xt.push("_ambigZone"),Vt.moment=function(){return ut(arguments)},Vt.moment.utc=function(){var t=ut(arguments,!0);return t.hasTime()&&t.utc(),t},Vt.moment.parseZone=function(){return ut(arguments,!0,!0)},Qt.week=Qt.weeks=function(t){var e=this._locale._fullCalendar_weekCalc;return null==t&&"function"==typeof e?e(this):"ISO"===e?$t.isoWeek.apply(this,arguments):$t.week.apply(this,arguments)},Qt.time=function(t){if(!this._fullCalendar)return $t.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},Qt.stripTime=function(){return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},Qt.hasTime=function(){return!this._ambigTime},Qt.stripZone=function(){var t;return this._ambigZone||(t=this._ambigTime,this.utc(!0),this._ambigTime=t||!1,this._ambigZone=!0),this},Qt.hasZone=function(){return!this._ambigZone},Qt.local=function(t){return $t.local.call(this,this._ambigZone||t),this._ambigTime=!1,this._ambigZone=!1,this},Qt.utc=function(t){return $t.utc.call(this,t),this._ambigTime=!1,this._ambigZone=!1,this},Qt.utcOffset=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),$t.utcOffset.apply(this,arguments)},Qt.format=function(){return this._fullCalendar&&arguments[0]?Kt(this,arguments[0]):this._ambigTime?te(ct(this),"YYYY-MM-DD"):this._ambigZone?te(ct(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?te(ct(this)):$t.format.apply(this,arguments)},Qt.toISOString=function(){return this._ambigTime?te(ct(this),"YYYY-MM-DD"):this._ambigZone?te(ct(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?$t.toISOString.apply(ct(this),arguments):$t.toISOString.apply(this,arguments)},function(){function t(t,e){return c(s(e).fakeFormatString,t)}function e(t,e){return $t.format.call(t,e)}function n(t,e,n,r,o){var a;return t=Vt.moment.parseZone(t),e=Vt.moment.parseZone(e),a=t.localeData(),n=a.longDateFormat(n)||n,i(s(n),t,e,r||" - ",o)}function i(t,e,n,i,s){var r,o,a,l=t.sameUnits,u=e.clone().stripZone(),c=n.clone().stripZone(),f=h(t.fakeFormatString,e),g=h(t.fakeFormatString,n),p="",v="",m="",y="",w="";for(r=0;r<l.length&&(!l[r]||u.isSame(c,l[r]));r++)p+=f[r];for(o=l.length-1;o>r&&(!l[o]||u.isSame(c,l[o]))&&(o-1!==r||"."!==f[o]);o--)v=f[o]+v;for(a=r;a<=o;a++)m+=f[a],y+=g[a];return(m||y)&&(w=s?y+i+m:m+i+y),d(p+w+v)}function s(t){return D[t]||(D[t]=r(t))}function r(t){var e=o(t);return{fakeFormatString:l(e),sameUnits:u(e)}}function o(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push.apply(n,a(e[1])):e[2]?n.push({maybe:o(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push.apply(n,a(e[5]));return n}function a(t){return". "===t?["."," "]:[t]}function l(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],"string"==typeof n?i.push("["+n+"]"):n.token?n.token in y?i.push(p+"["+n.token+"]"):i.push(n.token):n.maybe&&i.push(v+l(n.maybe)+v);return i.join(g)}function u(t){var e,n,i,s=[];for(e=0;e<t.length;e++)n=t[e],n.token?(i=w[n.token.charAt(0)],s.push(i?i.unit:"second")):n.maybe?s.push.apply(s,u(n.maybe)):s.push(null);return s}function c(t,e){return d(h(t,e).join(""))}function h(t,n){var i,s,r=[],o=e(n,t),a=o.split(g);for(i=0;i<a.length;i++)s=a[i],s.charAt(0)===p?r.push(y[s.substring(1)](n)):r.push(s);return r}function d(t){return t.replace(m,function(t,e){return e.match(/[1-9]/)?e:""})}function f(t){var e,n,i,s,r=o(t);for(e=0;e<r.length;e++)n=r[e],n.token&&(i=w[n.token.charAt(0)])&&(!s||i.value>s.value)&&(s=i);return s?s.unit:null}Vt.formatDate=t,Vt.formatRange=n,Vt.oldMomentFormat=e,Vt.queryMostGranularFormatUnit=f;var g="\v",p="",v="",m=new RegExp(v+"([^"+v+"]*)"+v,"g"),y={t:function(t){return e(t,"a").charAt(0)},T:function(t){return e(t,"A").charAt(0)}},w={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},w:{value:3,unit:"week"},D:{value:4,unit:"day"},d:{value:4,unit:"day"}},D={}}();var Kt=Vt.formatDate,Jt=Vt.formatRange,te=Vt.oldMomentFormat;Vt.Class=ht,ht.extend=function(){var t,e={};for(t=0;t<arguments.length;t++)Z(arguments[t],e);return dt(this,e)},ht.mixin=function(t){Z(t,this.prototype)};var ee=Vt.EmitterMixin={on:function(e,n){return t(this).on(e,this._prepareIntercept(n)),this},one:function(e,n){return t(this).one(e,this._prepareIntercept(n)),this},_prepareIntercept:function(e){var n=function(t,n){return e.apply(n.context||this,n.args||[])};return e.guid||(e.guid=t.guid++),n.guid=e.guid,n},off:function(e,n){return t(this).off(e,n),this},trigger:function(e){var n=Array.prototype.slice.call(arguments,1);return t(this).triggerHandler(e,{args:n}),this},triggerWith:function(e,n,i){return t(this).triggerHandler(e,{context:n,args:i}),this},hasHandlers:function(e){var n=t._data(this,"events");return n&&n[e]&&n[e].length>0}},ne=Vt.ListenerMixin=function(){var e=0;return{listenerId:null,listenTo:function(e,n,i){if("object"==typeof n)for(var s in n)n.hasOwnProperty(s)&&this.listenTo(e,s,n[s]);else"string"==typeof n&&e.on(n+"."+this.getListenerNamespace(),t.proxy(i,this))},stopListeningTo:function(t,e){t.off((e||"")+"."+this.getListenerNamespace())},getListenerNamespace:function(){return null==this.listenerId&&(this.listenerId=e++),"_listener"+this.listenerId}}}(),ie={standardPropMap:{},applyRawProps:function(t){var e,n=this.standardPropMap,i={},s={};for(e in t)!0===n[e]?this[e]=t[e]:!1===n[e]?i[e]=t[e]:s[e]=t[e];return this.applyOtherRawProps(s),this.applyManualRawProps(i)},applyManualRawProps:function(t){return!0},applyOtherRawProps:function(t){}},se=function(t){var e=this.prototype;e.standardPropMap=Object.create(e.standardPropMap),Z(t,e.standardPropMap)},re=function(t,e){var n,i=this.prototype.standardPropMap;for(n in i)null!=t[n]&&!0===i[n]&&(e[n]=t[n])},oe=ht.extend(ee,ne,{_props:null,_watchers:null,_globalWatchArgs:null,constructor:function(){this._watchers={},this._props={},this.applyGlobalWatchers()},applyGlobalWatchers:function(){var t,e=this._globalWatchArgs||[];for(t=0;t<e.length;t++)this.watch.apply(this,e[t])},has:function(t){return t in this._props},get:function(t){return void 0===t?this._props:this._props[t]},set:function(t,e){var n;"string"==typeof t?(n={},n[t]=void 0===e?null:e):n=t,this.setProps(n)},reset:function(t){var e,n=this._props,i={};for(e in n)i[e]=void 0;for(e in t)i[e]=t[e];this.setProps(i)},unset:function(t){var e,n,i={};for(e="string"==typeof t?[t]:t,n=0;n<e.length;n++)i[e[n]]=void 0;this.setProps(i)},setProps:function(t){var e,n,i={},s=0;for(e in t)"object"!=typeof(n=t[e])&&n===this._props[e]||(i[e]=n,s++);if(s){this.trigger("before:batchChange",i);for(e in i)n=i[e],this.trigger("before:change",e,n),this.trigger("before:change:"+e,n);for(e in i)n=i[e],void 0===n?delete this._props[e]:this._props[e]=n,this.trigger("change:"+e,n),this.trigger("change",e,n);this.trigger("batchChange",i)}},watch:function(t,e,n,i){var s=this;this.unwatch(t),this._watchers[t]=this._watchDeps(e,function(e){var i=n.call(s,e);i&&i.then?(s.unset(t),i.then(function(e){s.set(t,e)})):s.set(t,i)},function(){s.unset(t),i&&i.call(s)})},unwatch:function(t){var e=this._watchers[t];e&&(delete this._watchers[t],e.teardown())},_watchDeps:function(t,e,n){function i(t,e,i){1===++a&&u===l&&(d=!0,n(),d=!1)}function s(t,n,i){void 0===n?(i||void 0===c[t]||u--,delete c[t]):(i||void 0!==c[t]||u++,c[t]=n),--a||u===l&&(d||e(c))}function r(t,e){o.on(t,e),h.push([t,e])}var o=this,a=0,l=t.length,u=0,c={},h=[],d=!1;return t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),r("before:change:"+t,function(n){i(t,n,e)}),r("change:"+t,function(n){s(t,n,e)})}),t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),o.has(t)?(c[t]=o.get(t),u++):e&&u++}),u===l&&e(c),{teardown:function(){for(var t=0;t<h.length;t++)o.off(h[t][0],h[t][1]);h=null,u===l&&n()},flash:function(){u===l&&(n(),e(c))}}},flash:function(t){var e=this._watchers[t];e&&e.flash()}});oe.watch=function(){var t=this.prototype;t._globalWatchArgs||(t._globalWatchArgs=[]),t._globalWatchArgs.push(arguments)},Vt.Model=oe;var ae={construct:function(e){var n=t.Deferred(),i=n.promise();return"function"==typeof e&&e(function(t){n.resolve(t),ft(i,t)},function(){n.reject(),gt(i)}),i},resolve:function(e){var n=t.Deferred().resolve(e),i=n.promise();return ft(i,e),i},reject:function(){var e=t.Deferred().reject(),n=e.promise();return gt(n),n}};Vt.Promise=ae;var le=ht.extend(ee,{q:null,isPaused:!1,isRunning:!1,constructor:function(){this.q=[]},queue:function(){this.q.push.apply(this.q,arguments),this.tryStart()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.tryStart()},tryStart:function(){!this.isRunning&&this.canRunNext()&&(this.isRunning=!0,this.trigger("start"),this.runNext())},canRunNext:function(){return!this.isPaused&&this.q.length},runNext:function(){this.runTask(this.q.shift())},runTask:function(t){this.runTaskFunc(t)},runTaskFunc:function(t){function e(){n.canRunNext()?n.runNext():(n.isRunning=!1,n.trigger("stop"))}var n=this,i=t();i&&i.then?i.then(e):e()}});Vt.TaskQueue=le;var ue=le.extend({waitsByNamespace:null,waitNamespace:null,waitId:null,constructor:function(t){le.call(this),this.waitsByNamespace=t||{}},queue:function(t,e,n){var i,s={func:t,namespace:e,type:n};e&&(i=this.waitsByNamespace[e]),this.waitNamespace&&(e===this.waitNamespace&&null!=i?this.delayWait(i):(this.clearWait(),this.tryStart())),this.compoundTask(s)&&(this.waitNamespace||null==i?this.tryStart():this.startWait(e,i))},startWait:function(t,e){this.waitNamespace=t,this.spawnWait(e)},delayWait:function(t){clearTimeout(this.waitId),this.spawnWait(t)},spawnWait:function(t){var e=this;this.waitId=setTimeout(function(){e.waitNamespace=null,e.tryStart()},t)},clearWait:function(){this.waitNamespace&&(clearTimeout(this.waitId),this.waitId=null,this.waitNamespace=null)},canRunNext:function(){if(!le.prototype.canRunNext.apply(this,arguments))return!1;if(this.waitNamespace){for(var t=this.q,e=0;e<t.length;e++)if(t[e].namespace!==this.waitNamespace)return!0;return!1}return!0},runTask:function(t){this.runTaskFunc(t.func)},compoundTask:function(t){var e,n,i=this.q,s=!0;if(t.namespace&&("destroy"===t.type||"init"===t.type)){for(e=i.length-1;e>=0;e--)n=i[e],n.namespace!==t.namespace||"add"!==n.type&&"remove"!==n.type||i.splice(e,1);"destroy"===t.type?i.length&&(n=i[i.length-1],n.namespace===t.namespace&&("init"===n.type?(s=!1,i.pop()):"destroy"===n.type&&(s=!1))):"init"===t.type&&i.length&&(n=i[i.length-1],n.namespace===t.namespace&&"init"===n.type&&i.pop())}return s&&i.push(t),s}});Vt.RenderQueue=ue;var ce=ht.extend(ne,{isHidden:!0,options:null,el:null,margin:10,constructor:function(t){this.options=t||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&this.listenTo(t(document),"mousedown",this.documentMousedown)},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo(t(document),"mousedown")},position:function(){var e,n,i,s,r,o=this.options,a=this.el.offsetParent().offset(),l=this.el.outerWidth(),u=this.el.outerHeight(),c=t(window),d=h(this.el);s=o.top||0,r=void 0!==o.left?o.left:void 0!==o.right?o.right-l:0,d.is(window)||d.is(document)?(d=c,e=0,n=0):(i=d.offset(),e=i.top,n=i.left),e+=c.scrollTop(),n+=c.scrollLeft(),!1!==o.viewportConstrain&&(s=Math.min(s,e+d.outerHeight()-u-this.margin),s=Math.max(s,e+this.margin),r=Math.min(r,n+d.outerWidth()-l-this.margin),r=Math.max(r,n+this.margin)),this.el.css({top:s-a.top,left:r-a.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}}),he=Vt.CoordCache=ht.extend({els:null,forcedOffsetParentEl:null,origin:null,boundingRect:null,isHorizontal:!1,isVertical:!1,lefts:null,rights:null,tops:null,bottoms:null,constructor:function(e){this.els=t(e.els),this.isHorizontal=e.isHorizontal,this.isVertical=e.isVertical,this.forcedOffsetParentEl=e.offsetParent?t(e.offsetParent):null},build:function(){var t=this.forcedOffsetParentEl;!t&&this.els.length>0&&(t=this.els.eq(0).offsetParent()),this.origin=t?t.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},clear:function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},ensureBuilt:function(){this.origin||this.build()},buildElHorizontals:function(){var e=[],n=[];this.els.each(function(i,s){var r=t(s),o=r.offset().left,a=r.outerWidth();e.push(o),n.push(o+a)}),this.lefts=e,this.rights=n},buildElVerticals:function(){var e=[],n=[];this.els.each(function(i,s){var r=t(s),o=r.offset().top,a=r.outerHeight();e.push(o),n.push(o+a)}),this.tops=e,this.bottoms=n},getHorizontalIndex:function(t){this.ensureBuilt();var e,n=this.lefts,i=this.rights,s=n.length;for(e=0;e<s;e++)if(t>=n[e]&&t<i[e])return e},getVerticalIndex:function(t){this.ensureBuilt();var e,n=this.tops,i=this.bottoms,s=n.length;for(e=0;e<s;e++)if(t>=n[e]&&t<i[e])return e},getLeftOffset:function(t){return this.ensureBuilt(),this.lefts[t]},getLeftPosition:function(t){return this.ensureBuilt(),this.lefts[t]-this.origin.left},getRightOffset:function(t){return this.ensureBuilt(),this.rights[t]},getRightPosition:function(t){return this.ensureBuilt(),this.rights[t]-this.origin.left},getWidth:function(t){return this.ensureBuilt(),this.rights[t]-this.lefts[t]},getTopOffset:function(t){return this.ensureBuilt(),this.tops[t]},getTopPosition:function(t){return this.ensureBuilt(),this.tops[t]-this.origin.top},getBottomOffset:function(t){return this.ensureBuilt(),this.bottoms[t]},getBottomPosition:function(t){return this.ensureBuilt(),this.bottoms[t]-this.origin.top},getHeight:function(t){return this.ensureBuilt(),this.bottoms[t]-this.tops[t]},queryBoundingRect:function(){var t;return this.els.length>0&&(t=h(this.els.eq(0)),!t.is(document))?f(t):null},isPointInBounds:function(t,e){return this.isLeftInBounds(t)&&this.isTopInBounds(e)},isLeftInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.left&&t<this.boundingRect.right},isTopInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.top&&t<this.boundingRect.bottom}}),de=Vt.DragListener=ht.extend(ne,{options:null,subjectEl:null,originX:null,originY:null,scrollEl:null,isInteracting:!1,isDistanceSurpassed:!1,isDelayEnded:!1,isDragging:!1,isTouch:!1,isGeneric:!1,delay:null,delayTimeoutId:null,minDistance:null,shouldCancelTouchScroll:!0,scrollAlwaysKills:!1,constructor:function(t){this.options=t||{}},startInteraction:function(e,n){if("mousedown"===e.type){if(ge.get().shouldIgnoreMouse())return;if(!D(e))return;e.preventDefault()}this.isInteracting||(n=n||{},this.delay=J(n.delay,this.options.delay,0),this.minDistance=J(n.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,C(t("body")),this.isInteracting=!0,this.isTouch=E(e),this.isGeneric="dragstart"===e.type,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=b(e),this.originY=S(e),this.scrollEl=h(t(e.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(e),this.startDelay(e),this.minDistance||this.handleDistanceSurpassed(e))},handleInteractionStart:function(t){this.trigger("interactionStart",t)},endInteraction:function(e,n){this.isInteracting&&(this.endDrag(e),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(e,n),T(t("body")))},handleInteractionEnd:function(t,e){this.trigger("interactionEnd",t,e||!1)},bindHandlers:function(){var e=ge.get();this.isGeneric?this.listenTo(t(document),{drag:this.handleMove,dragstop:this.endInteraction}):this.isTouch?this.listenTo(e,{touchmove:this.handleTouchMove,touchend:this.endInteraction,scroll:this.handleTouchScroll}):this.listenTo(e,{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(e,{selectstart:R,contextmenu:R})},unbindHandlers:function(){this.stopListeningTo(ge.get()),this.stopListeningTo(t(document))},startDrag:function(t,e){this.startInteraction(t,e),this.isDragging||(this.isDragging=!0,this.handleDragStart(t))},handleDragStart:function(t){this.trigger("dragStart",t)},handleMove:function(t){var e=b(t)-this.originX,n=S(t)-this.originY,i=this.minDistance;this.isDistanceSurpassed||e*e+n*n>=i*i&&this.handleDistanceSurpassed(t),this.isDragging&&this.handleDrag(e,n,t)},handleDrag:function(t,e,n){this.trigger("drag",t,e,n),
this.updateAutoScroll(n)},endDrag:function(t){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(t))},handleDragEnd:function(t){this.trigger("dragEnd",t)},startDelay:function(t){var e=this;this.delay?this.delayTimeoutId=setTimeout(function(){e.handleDelayEnd(t)},this.delay):this.handleDelayEnd(t)},handleDelayEnd:function(t){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(t)},handleDistanceSurpassed:function(t){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(t)},handleTouchMove:function(t){this.isDragging&&this.shouldCancelTouchScroll&&t.preventDefault(),this.handleMove(t)},handleMouseMove:function(t){this.handleMove(t)},handleTouchScroll:function(t){this.isDragging&&!this.scrollAlwaysKills||this.endInteraction(t,!0)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1)),this["_"+t]&&this["_"+t].apply(this,Array.prototype.slice.call(arguments,1))}});de.mixin({isAutoScroll:!1,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,initAutoScroll:function(){var t=this.scrollEl;this.isAutoScroll=this.options.scroll&&t&&!t.is(window)&&!t.is(document),this.isAutoScroll&&this.listenTo(t,"scroll",lt(this.handleDebouncedScroll,100))},destroyAutoScroll:function(){this.endAutoScroll(),this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},computeScrollBounds:function(){this.isAutoScroll&&(this.scrollBounds=d(this.scrollEl))},updateAutoScroll:function(t){var e,n,i,s,r=this.scrollSensitivity,o=this.scrollBounds,a=0,l=0;o&&(e=(r-(S(t)-o.top))/r,n=(r-(o.bottom-S(t)))/r,i=(r-(b(t)-o.left))/r,s=(r-(o.right-b(t)))/r,e>=0&&e<=1?a=e*this.scrollSpeed*-1:n>=0&&n<=1&&(a=n*this.scrollSpeed),i>=0&&i<=1?l=i*this.scrollSpeed*-1:s>=0&&s<=1&&(l=s*this.scrollSpeed)),this.setScrollVel(a,l)},setScrollVel:function(t,e){this.scrollTopVel=t,this.scrollLeftVel=e,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(at(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;this.scrollTopVel<0?t.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?t.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},endAutoScroll:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},handleDebouncedScroll:function(){this.scrollIntervalId||this.handleScrollEnd()},handleScrollEnd:function(){}});var fe=de.extend({component:null,origHit:null,hit:null,coordAdjust:null,constructor:function(t,e){de.call(this,e),this.component=t},handleInteractionStart:function(t){var e,n,i,s=this.subjectEl;this.component.hitsNeeded(),this.computeScrollBounds(),t?(n={left:b(t),top:S(t)},i=n,s&&(e=d(s),i=H(i,e)),this.origHit=this.queryHit(i.left,i.top),s&&this.options.subjectCenter&&(this.origHit&&(e=I(this.origHit,e)||e),i=M(e)),this.coordAdjust=x(i,n)):(this.origHit=null,this.coordAdjust=null),de.prototype.handleInteractionStart.apply(this,arguments)},handleDragStart:function(t){var e;de.prototype.handleDragStart.apply(this,arguments),(e=this.queryHit(b(t),S(t)))&&this.handleHitOver(e)},handleDrag:function(t,e,n){var i;de.prototype.handleDrag.apply(this,arguments),i=this.queryHit(b(n),S(n)),pt(i,this.hit)||(this.hit&&this.handleHitOut(),i&&this.handleHitOver(i))},handleDragEnd:function(){this.handleHitDone(),de.prototype.handleDragEnd.apply(this,arguments)},handleHitOver:function(t){var e=pt(t,this.origHit);this.hit=t,this.trigger("hitOver",this.hit,e,this.origHit)},handleHitOut:function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},handleHitDone:function(){this.hit&&this.trigger("hitDone",this.hit)},handleInteractionEnd:function(){de.prototype.handleInteractionEnd.apply(this,arguments),this.origHit=null,this.hit=null,this.component.hitsNotNeeded()},handleScrollEnd:function(){de.prototype.handleScrollEnd.apply(this,arguments),this.isDragging&&(this.component.releaseHits(),this.component.prepareHits())},queryHit:function(t,e){return this.coordAdjust&&(t+=this.coordAdjust.left,e+=this.coordAdjust.top),this.component.queryHit(t,e)}});Vt.touchMouseIgnoreWait=500;var ge=ht.extend(ne,ee,{isTouching:!1,mouseIgnoreDepth:0,handleScrollProxy:null,bind:function(){var e=this;this.listenTo(t(document),{touchstart:this.handleTouchStart,touchcancel:this.handleTouchCancel,touchend:this.handleTouchEnd,mousedown:this.handleMouseDown,mousemove:this.handleMouseMove,mouseup:this.handleMouseUp,click:this.handleClick,selectstart:this.handleSelectStart,contextmenu:this.handleContextMenu}),window.addEventListener("touchmove",this.handleTouchMoveProxy=function(n){e.handleTouchMove(t.Event(n))},{passive:!1}),window.addEventListener("scroll",this.handleScrollProxy=function(n){e.handleScroll(t.Event(n))},!0)},unbind:function(){this.stopListeningTo(t(document)),window.removeEventListener("touchmove",this.handleTouchMoveProxy),window.removeEventListener("scroll",this.handleScrollProxy,!0)},handleTouchStart:function(t){this.stopTouch(t,!0),this.isTouching=!0,this.trigger("touchstart",t)},handleTouchMove:function(t){this.isTouching&&this.trigger("touchmove",t)},handleTouchCancel:function(t){this.isTouching&&(this.trigger("touchcancel",t),this.stopTouch(t))},handleTouchEnd:function(t){this.stopTouch(t)},handleMouseDown:function(t){this.shouldIgnoreMouse()||this.trigger("mousedown",t)},handleMouseMove:function(t){this.shouldIgnoreMouse()||this.trigger("mousemove",t)},handleMouseUp:function(t){this.shouldIgnoreMouse()||this.trigger("mouseup",t)},handleClick:function(t){this.shouldIgnoreMouse()||this.trigger("click",t)},handleSelectStart:function(t){this.trigger("selectstart",t)},handleContextMenu:function(t){this.trigger("contextmenu",t)},handleScroll:function(t){this.trigger("scroll",t)},stopTouch:function(t,e){this.isTouching&&(this.isTouching=!1,this.trigger("touchend",t),e||this.startTouchMouseIgnore())},startTouchMouseIgnore:function(){var t=this,e=Vt.touchMouseIgnoreWait;e&&(this.mouseIgnoreDepth++,setTimeout(function(){t.mouseIgnoreDepth--},e))},shouldIgnoreMouse:function(){return this.isTouching||Boolean(this.mouseIgnoreDepth)}});!function(){var t=null,e=0;ge.get=function(){return t||(t=new ge,t.bind()),t},ge.needed=function(){ge.get(),e++},ge.unneeded=function(){--e||(t.unbind(),t=null)}}();var pe=ht.extend(ne,{options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,y0:null,x0:null,topDelta:null,leftDelta:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()},start:function(e){this.isFollowing||(this.isFollowing=!0,this.y0=S(e),this.x0=b(e),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),E(e)?this.listenTo(t(document),"touchmove",this.handleMove):this.listenTo(t(document),"mousemove",this.handleMove))},stop:function(e,n){function i(){s.isAnimating=!1,s.removeElement(),s.top0=s.left0=null,n&&n()}var s=this,r=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,this.stopListeningTo(t(document)),e&&r&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:r,complete:i})):i())},getEl:function(){var t=this.el;return t||(t=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}),t.addClass("fc-unselectable"),t.appendTo(this.parentEl)),t},removeElement:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},handleMove:function(t){this.topDelta=S(t)-this.y0,this.leftDelta=b(t)-this.x0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),ve=oe.extend({children:null,el:null,isRTL:!1,nextDayThreshold:null,constructor:function(){oe.call(this),this.children=[],this.nextDayThreshold=e.duration(this.opt("nextDayThreshold")),this.isRTL=this.opt("isRTL")},addChild:function(t){this.children.push(t)},opt:function(t){},publiclyTrigger:function(){var t=this._getCalendar();return t.publiclyTrigger.apply(t,arguments)},hasPublicHandlers:function(){var t=this._getCalendar();return t.hasPublicHandlers.apply(t,arguments)},setElement:function(t){this.el=t,this.bindGlobalHandlers(),this.renderSkeleton()},removeElement:function(){this.unrenderSkeleton(),this.unbindGlobalHandlers(),this.el.remove()},bindGlobalHandlers:function(){},unbindGlobalHandlers:function(){},renderSkeleton:function(){},unrenderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},getNowIndicatorUnit:function(){},renderNowIndicator:function(t){this.callChildren("renderNowIndicator",t)},unrenderNowIndicator:function(){this.callChildren("unrenderNowIndicator")},renderBusinessHours:function(){this.callChildren("renderBusinessHours")},unrenderBusinessHours:function(){this.callChildren("unrenderBusinessHours")},renderEventsPayload:function(t){this.callChildren("renderEventsPayload",t)},unrenderEvents:function(){this.callChildren("unrenderEvents")},getEventSegs:function(){var t,e=this.children,n=[];for(t=0;t<e.length;t++)n.push.apply(n,e[t].getEventSegs());return n},renderDrag:function(t,e){var n,i,s=null,r=this.children;for(n=0;n<r.length;n++)(i=r[n].renderDrag(t,e))&&(s=s?s.add(i):i);return s},unrenderDrag:function(){this.callChildren("unrenderDrag")},renderSelectionFootprint:function(t){this.callChildren("renderSelectionFootprint",t)},unrenderSelection:function(){this.callChildren("unrenderSelection")},hitsNeeded:function(){this.callChildren("hitsNeeded")},hitsNotNeeded:function(){this.callChildren("hitsNotNeeded")},prepareHits:function(){this.callChildren("prepareHits")},releaseHits:function(){this.callChildren("releaseHits")},queryHit:function(t,e){var n,i,s=this.children;for(n=0;n<s.length&&!(i=s[n].queryHit(t,e));n++);return i},isEventDefDraggable:function(t){return this.isEventDefStartEditable(t)},isEventDefStartEditable:function(t){var e=t.isStartExplicitlyEditable();return null==e&&null==(e=this.opt("eventStartEditable"))&&(e=this.isEventDefGenerallyEditable(t)),e},isEventDefGenerallyEditable:function(t){var e=t.isExplicitlyEditable();return null==e&&(e=this.opt("editable")),e},isEventDefResizableFromStart:function(t){return this.opt("eventResizableFromStart")&&this.isEventDefResizable(t)},isEventDefResizableFromEnd:function(t){return this.isEventDefResizable(t)},isEventDefResizable:function(t){var e=t.isDurationExplicitlyEditable();return null==e&&null==(e=this.opt("eventDurationEditable"))&&(e=this.isEventDefGenerallyEditable(t)),e},renderFgSegs:function(t){},unrenderFgSegs:function(){},renderFgSegEls:function(e,n){var i,s=this,r=this.hasPublicHandlers("eventRender"),o="",a=[];if(e.length){for(i=0;i<e.length;i++)o+=this.fgSegHtml(e[i],n);t(o).each(function(n,i){var o=e[n],l=t(i);r&&(l=s.filterEventRenderEl(o.footprint,l)),l&&(l.data("fc-seg",o),o.el=l,a.push(o))})}return a},fgSegHtml:function(t,e){},filterEventRenderEl:function(e,n){var i=e.getEventLegacy(),s=this.publiclyTrigger("eventRender",{context:i,args:[i,n,this._getView()]});return!1===s?n=null:s&&!0!==s&&(n=t(s)),n},buildGotoAnchorHtml:function(e,n,i){var s,r,o,a;return t.isPlainObject(e)?(s=e.date,r=e.type,o=e.forceOff):s=e,s=Vt.moment(s),a={date:s.format("YYYY-MM-DD"),type:r||"day"},"string"==typeof n&&(i=n,n=null),n=n?" "+it(n):"",i=i||"",!o&&this.opt("navLinks")?"<a"+n+' data-goto="'+tt(JSON.stringify(a))+'">'+i+"</a>":"<span"+n+">"+i+"</span>"},formatRange:function(t,e,n,i){var s=t.end;return e&&(s=s.clone().subtract(1)),Jt(t.start,s,n,i,this.isRTL)},getAllDayHtml:function(){return this.opt("allDayHtml")||tt(this.opt("allDayText"))},getDayClasses:function(t,e){var n,i=this._getView(),s=[];return i.activeUnzonedRange.containsDate(t)?(s.push("fc-"+_t[t.day()]),i.isDateInOtherMonth(t)&&s.push("fc-other-month"),n=i.calendar.getNow(),t.isSame(n,"day")?(s.push("fc-today"),!0!==e&&s.push(i.calendar.theme.getClass("today"))):t<n?s.push("fc-past"):s.push("fc-future")):s.push("fc-disabled-day"),s},computeDayRange:function(t){var e=this._getCalendar(),n=e.msToUtcMoment(t.startMs,!0),i=e.msToUtcMoment(t.endMs),s=+i.time(),r=i.clone().stripTime();return s&&s>=this.nextDayThreshold&&r.add(1,"days"),r<=n&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayRange:function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1},callChildren:function(t){var e,n,i=Array.prototype.slice.call(arguments,1),s=this.children;for(e=0;e<s.length;e++)n=s[e],n[t].apply(n,i)},_getCalendar:function(){return this.calendar||this.view.calendar},_getView:function(){return this.view}}),me=Vt.Grid=ve.extend({hasDayInteractions:!0,view:null,isRTL:null,unzonedRange:null,hitsNeededDepth:0,dayClickListener:null,daySelectListener:null,segDragListener:null,segResizeListener:null,externalDragListener:null,constructor:function(t){this.view=t,ve.call(this),this.initFillInternals(),this.dayClickListener=this.buildDayClickListener(),this.daySelectListener=this.buildDaySelectListener()},opt:function(t){return this.view.opt(t)},setRange:function(t){this.unzonedRange=t,this.rangeUpdated(),this.processRangeOptions()},rangeUpdated:function(){},processRangeOptions:function(){var t,e;this.eventTimeFormat=this.opt("eventTimeFormat")||this.opt("timeFormat")||this.computeEventTimeFormat(),t=this.opt("displayEventTime"),null==t&&(t=this.computeDisplayEventTime()),e=this.opt("displayEventEnd"),null==e&&(e=this.computeDisplayEventEnd()),this.displayEventTime=t,this.displayEventEnd=e},hitsNeeded:function(){this.hitsNeededDepth++||this.prepareHits()},hitsNotNeeded:function(){this.hitsNeededDepth&&!--this.hitsNeededDepth&&this.releaseHits()},getSafeHitFootprint:function(t){var e=this.getHitFootprint(t);return this.view.activeUnzonedRange.containsRange(e.unzonedRange)?e:null},getHitFootprint:function(t){},getHitEl:function(t){},setElement:function(t){ve.prototype.setElement.apply(this,arguments),this.hasDayInteractions&&(C(t),this.bindDayHandler("touchstart",this.dayTouchStart),this.bindDayHandler("mousedown",this.dayMousedown)),this.bindSegHandlers()},bindDayHandler:function(e,n){var i=this;this.el.on(e,function(e){if(!t(e.target).is(i.segSelector+","+i.segSelector+" *,.fc-more,a[data-goto]"))return n.call(i,e)})},removeElement:function(){ve.prototype.removeElement.apply(this,arguments),this.clearDragListeners()},bindGlobalHandlers:function(){ve.prototype.bindGlobalHandlers.apply(this,arguments),this.listenTo(t(document),{dragstart:this.externalDragStart,sortstart:this.externalDragStart})},unbindGlobalHandlers:function(){ve.prototype.unbindGlobalHandlers.apply(this,arguments),this.stopListeningTo(t(document))},dayMousedown:function(t){ge.get().shouldIgnoreMouse()||(this.dayClickListener.startInteraction(t),this.opt("selectable")&&this.daySelectListener.startInteraction(t,{distance:this.opt("selectMinDistance")}))},dayTouchStart:function(t){var e,n=this.view;n.isSelected||n.selectedEvent||(e=this.opt("selectLongPressDelay"),null==e&&(e=this.opt("longPressDelay")),this.dayClickListener.startInteraction(t),this.opt("selectable")&&this.daySelectListener.startInteraction(t,{delay:e}))},clearDragListeners:function(){this.dayClickListener.endInteraction(),this.daySelectListener.endInteraction(),this.segDragListener&&this.segDragListener.endInteraction(),this.segResizeListener&&this.segResizeListener.endInteraction(),this.externalDragListener&&this.externalDragListener.endInteraction()},renderHighlight:function(t){this.renderFill("highlight",this.componentFootprintToSegs(t))},unrenderHighlight:function(){this.unrenderFill("highlight")},eventRangesToEventFootprints:function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventRangeToEventFootprints(t[e]));return n},eventRangeToEventFootprints:function(t){return[new Ue(new xe(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)]},eventFootprintsToSegs:function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventFootprintToSegs(t[e]));return n},eventFootprintToSegs:function(t,e){var n,i,s,r=t.componentFootprint.unzonedRange;for(e&&(r=r.intersect(e)),n=this.componentFootprintToSegs(t.componentFootprint),i=0;i<n.length;i++)s=n[i],r.isStart||(s.isStart=!1),r.isEnd||(s.isEnd=!1),s.footprint=t;return n},componentFootprintToSegs:function(t){}});me.mixin({buildDayClickListener:function(){var t,e=this,n=new fe(this,{scroll:this.opt("dragScroll"),interactionStart:function(){t=n.origHit},hitOver:function(e,n,i){n||(t=null)},hitOut:function(){t=null},interactionEnd:function(n,i){var s;!i&&t&&(s=e.getSafeHitFootprint(t))&&e.view.triggerDayClick(s,e.getHitEl(t),n)}});return n.shouldCancelTouchScroll=!1,n.scrollAlwaysKills=!0,n}}),me.mixin({buildDaySelectListener:function(){var t,e=this;return new fe(this,{scroll:this.opt("dragScroll"),interactionStart:function(){t=null},dragStart:function(){e.view.unselect()},hitOver:function(n,i,s){var o,a;s&&(o=e.getSafeHitFootprint(s),a=e.getSafeHitFootprint(n),t=o&&a?e.computeSelection(o,a):null,t?e.renderSelectionFootprint(t):!1===t&&r())},hitOut:function(){t=null,e.unrenderSelection()},hitDone:function(){o()},interactionEnd:function(n,i){!i&&t&&e.view.reportSelection(t,n)}})},renderSelectionFootprint:function(t){this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHighlight()},computeSelection:function(t,e){var n=this.computeSelectionFootprint(t,e);return!(n&&!this.isSelectionFootprintAllowed(n))&&n},computeSelectionFootprint:function(t,e){var n=[t.unzonedRange.startMs,t.unzonedRange.endMs,e.unzonedRange.startMs,e.unzonedRange.endMs];return n.sort(rt),new xe(new Me(n[0],n[3]),t.isAllDay)},isSelectionFootprintAllowed:function(t){return this.view.validUnzonedRange.containsRange(t.unzonedRange)&&this.view.calendar.isSelectionFootprintAllowed(t)}}),me.mixin({businessHoursSegClasses:function(t){return["fc-nonbusiness","fc-bgevent"]},buildBusinessHourSegs:function(t){return this.eventFootprintsToSegs(this.buildBusinessHourEventFootprints(t))},buildBusinessHourEventFootprints:function(t){var e=this.view.calendar;return this._buildBusinessHourEventFootprints(t,e.opt("businessHours"))},_buildBusinessHourEventFootprints:function(t,e){var n,i,s=this.view.calendar;return n=s.buildBusinessInstanceGroup(t,e,this.unzonedRange),i=n?n.sliceRenderRanges(this.unzonedRange,s):[],this.eventRangesToEventFootprints(i)}}),me.mixin({segs:null,eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,computeEventTimeFormat:function(){return this.opt("smallTimeFormat")},computeDisplayEventTime:function(){return!0},computeDisplayEventEnd:function(){return!0},renderEventsPayload:function(t){var e,n,i,s,r,o=[],a=[];for(e in t)n=t[e],i=n.sliceRenderRanges(this.view.activeUnzonedRange),s=this.eventRangesToEventFootprints(i),r=this.eventFootprintsToSegs(s),n.getEventDef().hasBgRendering()?o.push.apply(o,r):a.push.apply(a,r);this.segs=[].concat(this.renderBgSegs(o)||o,this.renderFgSegs(a)||a)},unrenderEvents:function(){this.handleSegMouseout(),this.clearDragListeners(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},unrenderBgSegs:function(){this.unrenderFill("bgEvent")},bgEventSegEl:function(t,e){return this.filterEventRenderEl(t.footprint,e)},bgEventSegClasses:function(t){var e=t.footprint.eventDef;return["fc-bgevent"].concat(e.className,e.source.className)},bgEventSegCss:function(t){return{"background-color":this.getSegSkinCss(t)["background-color"]}},getEventTimeText:function(t,e,n){return this._getEventTimeText(t.eventInstance.dateProfile.start,t.eventInstance.dateProfile.end,t.componentFootprint.isAllDay,e,n)},_getEventTimeText:function(t,e,n,i,s){return null==i&&(i=this.eventTimeFormat),null==s&&(s=this.displayEventEnd),this.displayEventTime&&!n?s&&e?this.view.formatRange({start:t,end:e},!1,i):t.format(i):""},getSegClasses:function(t,e,n){var i=this.view,s=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(this.getSegCustomClasses(t));return e&&s.push("fc-draggable"),n&&s.push("fc-resizable"),i.isEventDefSelected(t.footprint.eventDef)&&s.push("fc-selected"),s},getSegCustomClasses:function(t){var e=t.footprint.eventDef;return[].concat(e.className,e.source.className)},getSegSkinCss:function(t){return{"background-color":this.getSegBackgroundColor(t),"border-color":this.getSegBorderColor(t),color:this.getSegTextColor(t)}},getSegBackgroundColor:function(t){var e=t.footprint.eventDef;return e.backgroundColor||e.color||this.getSegDefaultBackgroundColor(t)},getSegDefaultBackgroundColor:function(t){var e=t.footprint.eventDef.source;return e.backgroundColor||e.color||this.opt("eventBackgroundColor")||this.opt("eventColor")},getSegBorderColor:function(t){var e=t.footprint.eventDef;return e.borderColor||e.color||this.getSegDefaultBorderColor(t)},getSegDefaultBorderColor:function(t){var e=t.footprint.eventDef.source;return e.borderColor||e.color||this.opt("eventBorderColor")||this.opt("eventColor")},getSegTextColor:function(t){return t.footprint.eventDef.textColor||this.getSegDefaultTextColor(t)},getSegDefaultTextColor:function(t){return t.footprint.eventDef.source.textColor||this.opt("eventTextColor")},sortEventSegs:function(t){t.sort(at(this,"compareEventSegs"))},compareEventSegs:function(t,e){var n=t.footprint.componentFootprint,i=n.unzonedRange,s=e.footprint.componentFootprint,r=s.unzonedRange;return i.startMs-r.startMs||r.endMs-r.startMs-(i.endMs-i.startMs)||s.isAllDay-n.isAllDay||F(t.footprint.eventDef,e.footprint.eventDef,this.view.eventOrderSpecs)}}),me.mixin({segSelector:".fc-event-container > *",mousedOverSeg:null,largeUnit:null,diffDates:function(t,e){return this.largeUnit?L(t,e,this.largeUnit):k(t,e)},bindSegHandlers:function(){this.bindSegHandlersToEl(this.el)},bindSegHandlersToEl:function(t){this.bindSegHandlerToEl(t,"touchstart",this.handleSegTouchStart),this.bindSegHandlerToEl(t,"mouseenter",this.handleSegMouseover),this.bindSegHandlerToEl(t,"mouseleave",this.handleSegMouseout),this.bindSegHandlerToEl(t,"mousedown",this.handleSegMousedown),this.bindSegHandlerToEl(t,"click",this.handleSegClick)},bindSegHandlerToEl:function(e,n,i){var s=this;e.on(n,this.segSelector,function(e){var n=t(this).data("fc-seg");if(n&&!s.isDraggingSeg&&!s.isResizingSeg)return i.call(s,n,e)})},handleSegClick:function(t,e){!1===this.publiclyTrigger("eventClick",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,this.view]})&&e.preventDefault()},handleSegMouseover:function(t,e){ge.get().shouldIgnoreMouse()||this.mousedOverSeg||(this.mousedOverSeg=t,this.view.isEventDefResizable(t.footprint.eventDef)&&t.el.addClass("fc-allow-mouse-resize"),this.publiclyTrigger("eventMouseover",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,this.view]}))},handleSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.isEventDefResizable(t.footprint.eventDef)&&t.el.removeClass("fc-allow-mouse-resize"),this.publiclyTrigger("eventMouseout",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,this.view]}))},handleSegMousedown:function(t,e){!this.startSegResize(t,e,{distance:5})&&this.view.isEventDefDraggable(t.footprint.eventDef)&&this.buildSegDragListener(t).startInteraction(e,{distance:5})},handleSegTouchStart:function(t,e){var n,i,s=this.view,r=t.footprint.eventDef,o=s.isEventDefSelected(r),a=s.isEventDefDraggable(r),l=s.isEventDefResizable(r),u=!1;o&&l&&(u=this.startSegResize(t,e)),u||!a&&!l||(i=this.opt("eventLongPressDelay"),null==i&&(i=this.opt("longPressDelay")),n=a?this.buildSegDragListener(t):this.buildSegSelectListener(t),n.startInteraction(e,{delay:o?0:i}))},buildSegSelectListener:function(t){var e=this,n=this.view,i=t.footprint.eventDef,s=t.footprint.eventInstance;if(this.segDragListener)return this.segDragListener;var r=this.segDragListener=new de({dragStart:function(t){r.isTouch&&!n.isEventDefSelected(i)&&s&&n.selectEventInstance(s)},interactionEnd:function(t){e.segDragListener=null}});return r},isEventInstanceGroupAllowed:function(t){var e,n=this.eventRangesToEventFootprints(t.getAllEventRanges());for(e=0;e<n.length;e++)if(!this.view.validUnzonedRange.containsRange(n[e].componentFootprint.unzonedRange))return!1;return this.view.calendar.isEventInstanceGroupAllowed(t)},renderHelperEventFootprints:function(t,e){return this.renderHelperEventFootprintEls(t,e).addClass("fc-helper")},renderHelperEventFootprintEls:function(t,e){},unrenderHelper:function(){},fabricateEventFootprint:function(t){var e,n=this.view.calendar,i=n.footprintToDateProfile(t),s=new ke(new _e(n));return s.dateProfile=i,e=s.buildInstance(),new Ue(t,s,e)}}),me.mixin({isDraggingSeg:!1,buildSegDragListener:function(t){var e,n,i,s=this,a=this.view,l=a.calendar,u=l.eventManager,c=t.el,h=t.footprint.eventDef,d=t.footprint.eventInstance;if(this.segDragListener)return this.segDragListener;var f=this.segDragListener=new fe(a,{scroll:this.opt("dragScroll"),subjectEl:c,subjectCenter:!0,interactionStart:function(i){t.component=s,e=!1,n=new pe(t.el,{additionalClass:"fc-dragging",parentEl:a.el,opacity:f.isTouch?null:s.opt("dragOpacity"),revertDuration:s.opt("dragRevertDuration"),zIndex:2}),n.hide(),n.start(i)},dragStart:function(n){f.isTouch&&!a.isEventDefSelected(h)&&d&&a.selectEventInstance(d),e=!0,s.handleSegMouseout(t,n),s.segDragStart(t,n),a.hideEventsWithId(h.id)},hitOver:function(e,o,c){var d,g,p,v,m=!0;t.hit&&(c=t.hit),d=c.component.getSafeHitFootprint(c),g=e.component.getSafeHitFootprint(e),d&&g?(i=s.computeEventDropMutation(d,g,h),i?(p=u.buildMutatedEventInstanceGroup(h.id,i),m=s.isEventInstanceGroupAllowed(p)):m=!1):m=!1,m||(i=null,r()),i&&(v=a.renderDrag(s.eventRangesToEventFootprints(p.sliceRenderRanges(s.unzonedRange,l)),t))?(v.addClass("fc-dragging"),f.isTouch||s.applyDragOpacity(v),n.hide()):n.show(),o&&(i=null)},hitOut:function(){a.unrenderDrag(),n.show(),i=null},hitDone:function(){o()},interactionEnd:function(r){delete t.component,n.stop(!i,function(){e&&(a.unrenderDrag(),s.segDragStop(t,r)),i?a.reportEventDrop(d,i,c,r):a.showEventsWithId(h.id)}),s.segDragListener=null}});return f},segDragStart:function(t,e){this.isDraggingSeg=!0,this.publiclyTrigger("eventDragStart",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},segDragStop:function(t,e){this.isDraggingSeg=!1,this.publiclyTrigger("eventDragStop",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},computeEventDropMutation:function(t,e,n){var i,s,r,o=t.unzonedRange.getStart(),a=e.unzonedRange.getStart(),l=!1,u=!1,c=!1;return t.isAllDay!==e.isAllDay&&(l=!0,e.isAllDay?(c=!0,o.stripTime()):u=!0),i=this.diffDates(a,o),s=new We,s.clearEnd=l,s.forceTimed=u,s.forceAllDay=c,s.setDateDelta(i),r=new Ge,r.setDateMutation(s),r},applyDragOpacity:function(t){var e=this.opt("dragOpacity");null!=e&&t.css("opacity",e)}}),me.mixin({isResizingSeg:!1,startSegResize:function(e,n,i){return!!t(n.target).is(".fc-resizer")&&(this.buildSegResizeListener(e,t(n.target).is(".fc-start-resizer")).startInteraction(n,i),!0)},buildSegResizeListener:function(t,e){var n,i,s=this,a=this.view,l=a.calendar,u=l.eventManager,c=t.el,h=t.footprint.eventDef,d=t.footprint.eventInstance;return this.segResizeListener=new fe(this,{scroll:this.opt("dragScroll"),subjectEl:c,interactionStart:function(){n=!1},dragStart:function(e){n=!0,s.handleSegMouseout(t,e),s.segResizeStart(t,e)},hitOver:function(n,o,c){var d,f=!0,g=s.getSafeHitFootprint(c),p=s.getSafeHitFootprint(n);g&&p?(i=e?s.computeEventStartResizeMutation(g,p,t.footprint):s.computeEventEndResizeMutation(g,p,t.footprint),i?(d=u.buildMutatedEventInstanceGroup(h.id,i),f=s.isEventInstanceGroupAllowed(d)):f=!1):f=!1,f?i.isEmpty()&&(i=null):(i=null,r()),i&&(a.hideEventsWithId(h.id),s.renderEventResize(s.eventRangesToEventFootprints(d.sliceRenderRanges(s.unzonedRange,l)),t))},hitOut:function(){i=null,a.showEventsWithId(h.id)},hitDone:function(){s.unrenderEventResize(),o()},interactionEnd:function(e){n&&s.segResizeStop(t,e),i?a.reportEventResize(d,i,c,e):a.showEventsWithId(h.id),s.segResizeListener=null}})},segResizeStart:function(t,e){this.isResizingSeg=!0,this.publiclyTrigger("eventResizeStart",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},segResizeStop:function(t,e){this.isResizingSeg=!1,this.publiclyTrigger("eventResizeStop",{context:t.el[0],args:[t.footprint.getEventLegacy(),e,{},this.view]})},computeEventStartResizeMutation:function(t,e,n){var i,s,r=n.componentFootprint.unzonedRange,o=this.diffDates(e.unzonedRange.getStart(),t.unzonedRange.getStart());return r.getStart().add(o)<r.getEnd()&&(i=new We,i.setStartDelta(o),s=new Ge,s.setDateMutation(i),s)},computeEventEndResizeMutation:function(t,e,n){var i,s,r=n.componentFootprint.unzonedRange,o=this.diffDates(e.unzonedRange.getEnd(),t.unzonedRange.getEnd());return r.getEnd().add(o)>r.getStart()&&(i=new We,i.setEndDelta(o),s=new Ge,s.setDateMutation(i),s)},renderEventResize:function(t,e){},unrenderEventResize:function(){}}),me.mixin({isDraggingExternal:!1,externalDragStart:function(e,n){var i,s;this.opt("droppable")&&(i=t((n?n.item:null)||e.target),s=this.opt("dropAccept"),(t.isFunction(s)?s.call(i[0],i):i.is(s))&&(this.isDraggingExternal||this.listenToExternalDrag(i,e,n)))},listenToExternalDrag:function(t,e,n){var i,s=this,a=this.view,l=mt(t);(s.externalDragListener=new fe(this,{interactionStart:function(){s.isDraggingExternal=!0},hitOver:function(t){var e,n=!0,o=t.component.getSafeHitFootprint(t);o?(i=s.computeExternalDrop(o,l),i?(e=new Oe(i.buildInstances()),n=l.eventProps?s.isEventInstanceGroupAllowed(e):s.isExternalInstanceGroupAllowed(e)):n=!1):n=!1,n||(i=null,r()),i&&s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.unzonedRange,a.calendar)))},hitOut:function(){i=null},hitDone:function(){o(),s.unrenderDrag()},interactionEnd:function(e){i&&a.reportExternalDrop(i,Boolean(l.eventProps),Boolean(l.stick),t,e,n),s.isDraggingExternal=!1,s.externalDragListener=null}})).startDrag(e)},computeExternalDrop:function(e,n){var i,s=this.view.calendar,r=Vt.moment.utc(e.unzonedRange.startMs).stripZone();return e.isAllDay&&(n.startTime?r.time(n.startTime):r.stripTime()),n.duration&&(i=r.clone().add(n.duration)),r=s.applyTimezone(r),i&&(i=s.applyTimezone(i)),ke.parse(t.extend({},n.eventProps,{start:r,end:i}),new _e(s))},isExternalInstanceGroupAllowed:function(t){var e,n=this.view.calendar,i=this.eventRangesToEventFootprints(t.getAllEventRanges());for(e=0;e<i.length;e++)if(!this.view.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange))return!1;for(e=0;e<i.length;e++)if(!n.isSelectionFootprintAllowed(i[e].componentFootprint))return!1;return!0}}),Vt.dataAttrPrefix="",me.mixin({elsByFill:null,initFillInternals:function(){this.elsByFill={}},renderFill:function(t,e){},unrenderFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,s=this,r=this[e+"SegEl"],o="",a=[];if(n.length){
for(i=0;i<n.length;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],l=t(i);r&&(l=r.call(s,o,l)),l&&(l=t(l),l.is(s.fillSegTag)&&(o.el=l,a.push(o)))})}return a},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegCss"],s=n?n.call(this,e):[],r=nt(i?i.call(this,e):{});return"<"+this.fillSegTag+(s.length?' class="'+s.join(" ")+'"':"")+(r?' style="'+r+'"':"")+" />"},highlightSegClasses:function(){return["fc-highlight"]}});var ye=Vt.DayTableMixin={breakOnWeeks:!1,dayDates:null,dayIndices:null,daysPerRow:null,rowCnt:null,colCnt:null,colHeadFormat:null,updateDayTable:function(){for(var t,e,n,i=this.view,s=i.calendar,r=s.msToUtcMoment(this.unzonedRange.startMs,!0),o=s.msToUtcMoment(this.unzonedRange.endMs,!0),a=-1,l=[],u=[];r.isBefore(o);)i.isHiddenDay(r)?l.push(a+.5):(a++,l.push(a),u.push(r.clone())),r.add(1,"days");if(this.breakOnWeeks){for(e=u[0].day(),t=1;t<u.length&&u[t].day()!=e;t++);n=Math.ceil(u.length/t)}else n=1,t=u.length;this.dayDates=u,this.dayIndices=l,this.daysPerRow=t,this.rowCnt=n,this.updateDayTableCols()},updateDayTableCols:function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.opt("columnFormat")||this.computeColHeadFormat()},computeColCnt:function(){return this.daysPerRow},getCellDate:function(t,e){return this.dayDates[this.getCellDayIndex(t,e)].clone()},getCellRange:function(t,e){var n=this.getCellDate(t,e);return{start:n,end:n.clone().add(1,"days")}},getCellDayIndex:function(t,e){return t*this.daysPerRow+this.getColDayIndex(e)},getColDayIndex:function(t){return this.isRTL?this.colCnt-1-t:t},getDateDayIndex:function(t){var e=this.dayIndices,n=t.diff(this.dayDates[0],"days");return n<0?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},computeColHeadFormat:function(){return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.opt("dayOfMonthFormat"):"dddd"},sliceRangeByRow:function(t){var e,n,i,s,r,o=this.daysPerRow,a=this.view.computeDayRange(t),l=this.getDateDayIndex(a.start),u=this.getDateDayIndex(a.end.clone().subtract(1,"days")),c=[];for(e=0;e<this.rowCnt;e++)n=e*o,i=n+o-1,s=Math.max(l,n),r=Math.min(u,i),s=Math.ceil(s),r=Math.floor(r),s<=r&&c.push({row:e,firstRowDayIndex:s-n,lastRowDayIndex:r-n,isStart:s===l,isEnd:r===u});return c},sliceRangeByDay:function(t){var e,n,i,s,r,o,a=this.daysPerRow,l=this.view.computeDayRange(t),u=this.getDateDayIndex(l.start),c=this.getDateDayIndex(l.end.clone().subtract(1,"days")),h=[];for(e=0;e<this.rowCnt;e++)for(n=e*a,i=n+a-1,s=n;s<=i;s++)r=Math.max(u,s),o=Math.min(c,s),r=Math.ceil(r),o=Math.floor(o),r<=o&&h.push({row:e,firstRowDayIndex:r-n,lastRowDayIndex:o-n,isStart:r===u,isEnd:o===c});return h},renderHeadHtml:function(){var t=this.view.calendar.theme;return'<div class="fc-row '+t.getClass("headerRow")+'"><table class="'+t.getClass("tableGrid")+'"><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},renderHeadIntroHtml:function(){return this.renderIntroHtml()},renderHeadTrHtml:function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},renderHeadDateCellsHtml:function(){var t,e,n=[];for(t=0;t<this.colCnt;t++)e=this.getCellDate(0,t),n.push(this.renderHeadDateCellHtml(e));return n.join("")},renderHeadDateCellHtml:function(t,e,n){var i=this.view,s=i.activeUnzonedRange.containsDate(t),r=["fc-day-header",i.calendar.theme.getClass("widgetHeader")],o=tt(t.format(this.colHeadFormat));return 1===this.rowCnt?r=r.concat(this.getDayClasses(t,!0)):r.push("fc-"+_t[t.day()]),'<th class="'+r.join(" ")+'"'+(1===(s&&this.rowCnt)?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e>1?' colspan="'+e+'"':"")+(n?" "+n:"")+">"+(s?i.buildGotoAnchorHtml({date:t,forceOff:this.rowCnt>1||1===this.colCnt},o):o)+"</th>"},renderBgTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(t))+this.renderBgCellsHtml(t)+(this.isRTL?this.renderBgIntroHtml(t):"")+"</tr>"},renderBgIntroHtml:function(t){return this.renderIntroHtml()},renderBgCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderBgCellHtml(n));return i.join("")},renderBgCellHtml:function(t,e){var n=this.view,i=n.activeUnzonedRange.containsDate(t),s=this.getDayClasses(t);return s.unshift("fc-day",n.calendar.theme.getClass("widgetContent")),'<td class="'+s.join(" ")+'"'+(i?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e?" "+e:"")+"></td>"},renderIntroHtml:function(){},bookendCells:function(t){var e=this.renderIntroHtml();e&&(this.isRTL?t.append(e):t.prepend(e))}},we=Vt.DayGrid=me.extend(ye,{numbersVisible:!1,bottomCoordPadding:0,rowEls:null,cellEls:null,helperEls:null,rowCoordCache:null,colCoordCache:null,renderDates:function(t){var e,n,i=this.view,s=this.rowCnt,r=this.colCnt,o="";for(e=0;e<s;e++)o+=this.renderDayRowHtml(e,t);for(this.el.html(o),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day, .fc-disabled-day"),this.rowCoordCache=new he({els:this.rowEls,isVertical:!0}),this.colCoordCache=new he({els:this.cellEls.slice(0,this.colCnt),isHorizontal:!0}),e=0;e<s;e++)for(n=0;n<r;n++)this.publiclyTrigger("dayRender",{context:i,args:[this.getCellDate(e,n),this.getCellEl(e,n),i]})},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var t=this.buildBusinessHourSegs(!0);this.renderFill("businessHours",t,"bgevent")},unrenderBusinessHours:function(){this.unrenderFill("businessHours")},renderDayRowHtml:function(t,e){var n=this.view.calendar.theme,i=["fc-row","fc-week",n.getClass("dayRow")];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'"><div class="fc-bg"><table class="'+n.getClass("tableGrid")+'">'+this.renderBgTrHtml(t)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.renderNumberTrHtml(t)+"</thead>":"")+"</table></div></div>"},renderNumberTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(t))+this.renderNumberCellsHtml(t)+(this.isRTL?this.renderNumberIntroHtml(t):"")+"</tr>"},renderNumberIntroHtml:function(t){return this.renderIntroHtml()},renderNumberCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderNumberCellHtml(n));return i.join("")},renderNumberCellHtml:function(t){var e,n,i=this.view,s="",r=i.activeUnzonedRange.containsDate(t),o=i.dayNumbersVisible&&r;return o||i.cellWeekNumbersVisible?(e=this.getDayClasses(t),e.unshift("fc-day-top"),i.cellWeekNumbersVisible&&(n="ISO"===t._locale._fullCalendar_weekCalc?1:t._locale.firstDayOfWeek()),s+='<td class="'+e.join(" ")+'"'+(r?' data-date="'+t.format()+'"':"")+">",i.cellWeekNumbersVisible&&t.day()==n&&(s+=i.buildGotoAnchorHtml({date:t,type:"week"},{class:"fc-week-number"},t.format("w"))),o&&(s+=i.buildGotoAnchorHtml(t,{class:"fc-day-number"},t.date())),s+="</td>"):"<td/>"},computeEventTimeFormat:function(){return this.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},rangeUpdated:function(){this.updateDayTable()},componentFootprintToSegs:function(t){var e,n,i=this.sliceRangeByRow(t.unzonedRange);for(e=0;e<i.length;e++)n=i[e],this.isRTL?(n.leftCol=this.daysPerRow-1-n.lastRowDayIndex,n.rightCol=this.daysPerRow-1-n.firstRowDayIndex):(n.leftCol=n.firstRowDayIndex,n.rightCol=n.lastRowDayIndex);return i},prepareHits:function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},releaseHits:function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},queryHit:function(t,e){if(this.colCoordCache.isLeftInBounds(t)&&this.rowCoordCache.isTopInBounds(e)){var n=this.colCoordCache.getHorizontalIndex(t),i=this.rowCoordCache.getVerticalIndex(e);if(null!=i&&null!=n)return this.getCellHit(i,n)}},getHitFootprint:function(t){var e=this.getCellRange(t.row,t.col);return new xe(new Me(e.start,e.end),!0)},getHitEl:function(t){return this.getCellEl(t.row,t.col)},getCellHit:function(t,e){return{row:t,col:e,component:this,left:this.colCoordCache.getLeftOffset(e),right:this.colCoordCache.getRightOffset(e),top:this.rowCoordCache.getTopOffset(t),bottom:this.rowCoordCache.getBottomOffset(t)}},getCellEl:function(t,e){return this.cellEls.eq(t*this.colCnt+e)},renderDrag:function(t,e){var n;for(n=0;n<t.length;n++)this.renderHighlight(t[n].componentFootprint);if(e&&e.component!==this)return this.renderHelperEventFootprints(t,e)},unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},renderEventResize:function(t,e){var n;for(n=0;n<t.length;n++)this.renderHighlight(t[n].componentFootprint);return this.renderHelperEventFootprints(t,e)},unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},renderHelperEventFootprintEls:function(e,n){var i,s=[],r=this.eventFootprintsToSegs(e);return r=this.renderFgSegEls(r),i=this.renderSegRows(r),this.rowEls.each(function(e,r){var o,a=t(r),l=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:a.find(".fc-content-skeleton tbody").position().top,l.css("top",o).find("table").append(i[e].tbodyEl),a.append(l),s.push(l[0])}),this.helperEls=t(s)},unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n,i){var s,r,o,a=[];for(n=this.renderFillSegEls(e,n),s=0;s<n.length;s++)r=n[s],o=this.renderFillRow(e,r,i),this.rowEls.eq(r.row).append(o),a.push(o[0]);return this.elsByFill[e]?this.elsByFill[e]=this.elsByFill[e].add(a):this.elsByFill[e]=t(a),n},renderFillRow:function(e,n,i){var s,r,o=this.colCnt,a=n.leftCol,l=n.rightCol+1;return i=i||e.toLowerCase(),s=t('<div class="fc-'+i+'-skeleton"><table><tr/></table></div>'),r=s.find("tr"),a>0&&r.append('<td colspan="'+a+'"/>'),r.append(n.el.attr("colspan",l-a)),l<o&&r.append('<td colspan="'+(o-l)+'"/>'),this.bookendCells(r),s}});we.mixin({rowStructs:null,unrenderEvents:function(){this.removeSegPopover(),me.prototype.unrenderEvents.apply(this,arguments)},getEventSegs:function(){return me.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.footprint.componentFootprint.isAllDay});return me.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},unrenderFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;n<e.length;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i,s=this.view,r=t.footprint.eventDef,o=t.footprint.componentFootprint.isAllDay,a=s.isEventDefDraggable(r),l=!e&&o&&t.isStart&&s.isEventDefResizableFromStart(r),u=!e&&o&&t.isEnd&&s.isEventDefResizableFromEnd(r),c=this.getSegClasses(t,a,l||u),h=nt(this.getSegSkinCss(t)),d="";return c.unshift("fc-day-grid-event","fc-h-event"),t.isStart&&(n=this.getEventTimeText(t.footprint))&&(d='<span class="fc-time">'+tt(n)+"</span>"),i='<span class="fc-title">'+(tt(r.title||"")||"&nbsp;")+"</span>",'<a class="'+c.join(" ")+'"'+(r.url?' href="'+tt(r.url)+'"':"")+(h?' style="'+h+'"':"")+'><div class="fc-content">'+(this.isRTL?i+" "+d:d+" "+i)+"</div>"+(l?'<div class="fc-resizer fc-start-resizer" />':"")+(u?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;o<e;)c=(m[s-1]||[])[o],c?c.attr("rowspan",parseInt(c.attr("rowspan")||1,10)+1):(c=t("<td/>"),a.append(c)),v[s][o]=c,m[s][o]=c,o++}var s,r,o,a,l,u,c,h=this.colCnt,d=this.buildSegLevels(n),f=Math.max(1,d.length),g=t("<tbody/>"),p=[],v=[],m=[];for(s=0;s<f;s++){if(r=d[s],o=0,a=t("<tr/>"),p.push([]),v.push([]),m.push([]),r)for(l=0;l<r.length;l++){for(u=r[l],i(u.leftCol),c=t('<td class="fc-event-container"/>').append(u.el),u.leftCol!=u.rightCol?c.attr("colspan",u.rightCol-u.leftCol+1):m[s][o]=c;o<=u.rightCol;)v[s][o]=c,p[s][o]=u,o++;a.append(c)}i(h),this.bookendCells(a),g.append(a)}return{row:e,tbodyEl:g,cellMatrix:v,segMatrix:p,segLevels:d,segs:n}},buildSegLevels:function(t){var e,n,i,s=[];for(this.sortEventSegs(t),e=0;e<t.length;e++){for(n=t[e],i=0;i<s.length&&yt(n,s[i]);i++);n.level=i,(s[i]||(s[i]=[])).push(n)}for(i=0;i<s.length;i++)s[i].sort(wt);return s},groupSegRows:function(t){var e,n=[];for(e=0;e<this.rowCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].row].push(t[e]);return n}}),we.mixin({segPopover:null,popoverSegs:null,removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;e<i.length;e++)this.unlimitRow(e),!1!==(n=!!t&&("number"==typeof t?t:this.computeRowLevelLimit(e)))&&this.limitRow(e,n)},computeRowLevelLimit:function(e){function n(e,n){r=Math.max(r,t(n).outerHeight())}var i,s,r,o=this.rowEls.eq(e),a=o.height(),l=this.rowStructs[e].tbodyEl.children();for(i=0;i<l.length;i++)if(s=l.eq(i).removeClass("fc-limited"),r=0,s.find("> td > :first-child").each(n),s.position().top+r>a)return i;return!1},limitRow:function(e,n){function i(i){for(;S<i;)u=w.getCellSegs(e,S,n),u.length&&(d=r[n-1][S],y=w.renderMoreLink(e,S,u),m=t("<div/>").append(y),d.append(m),b.push(m[0])),S++}var s,r,o,a,l,u,c,h,d,f,g,p,v,m,y,w=this,D=this.rowStructs[e],b=[],S=0;if(n&&n<D.segLevels.length){for(s=D.segLevels[n-1],r=D.cellMatrix,o=D.tbodyEl.children().slice(n).addClass("fc-limited").get(),a=0;a<s.length;a++){for(l=s[a],i(l.leftCol),h=[],c=0;S<=l.rightCol;)u=this.getCellSegs(e,S,n),h.push(u),c+=u.length,S++;if(c){for(d=r[n-1][l.leftCol],f=d.attr("rowspan")||1,g=[],p=0;p<h.length;p++)v=t('<td class="fc-more-cell"/>').attr("rowspan",f),u=h[p],y=this.renderMoreLink(e,l.leftCol+p,[l].concat(u)),m=t("<div/>").append(y),v.append(m),g.push(v[0]),b.push(v[0]);d.addClass("fc-limited").after(t(g)),o.push(d[0])}}i(this.colCnt),D.moreEls=t(b),D.limitedEls=t(o)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n,i){var s=this,r=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click",function(o){var a=s.opt("eventLimitClick"),l=s.getCellDate(e,n),u=t(this),c=s.getCellEl(e,n),h=s.getCellSegs(e,n),d=s.resliceDaySegs(h,l),f=s.resliceDaySegs(i,l);"function"==typeof a&&(a=s.publiclyTrigger("eventLimitClick",{context:r,args:[{date:l.clone(),dayEl:c,moreEl:u,segs:d,hiddenSegs:f},o,r]})),"popover"===a?s.showSegPopover(e,n,u,d):"string"==typeof a&&r.calendar.zoomTo(l,a)})},showSegPopover:function(t,e,n,i){var s,r,o=this,a=this.view,l=n.parent();s=1==this.rowCnt?a.el:this.rowEls.eq(t),r={className:"fc-more-popover "+a.calendar.theme.getClass("popover"),content:this.renderSegPopoverContent(t,e,i),parentEl:a.el,top:s.offset().top,autoHide:!0,viewportConstrain:this.opt("popoverViewportConstrain"),hide:function(){if(o.popoverSegs){var t,e,n;for(n=0;n<o.popoverSegs.length;++n)t=o.popoverSegs[n],e=t.footprint.getEventLegacy(),o.publiclyTrigger("eventDestroy",{context:e,args:[e,t.el,a]})}o.segPopover.removeElement(),o.segPopover=null,o.popoverSegs=null}},this.isRTL?r.right=l.offset().left+l.outerWidth()+1:r.left=l.offset().left-1,this.segPopover=new ce(r),this.segPopover.show(),this.bindSegHandlersToEl(this.segPopover.el)},renderSegPopoverContent:function(e,n,i){var s,r=this.view,o=r.calendar.theme,a=this.getCellDate(e,n).format(this.opt("dayPopoverFormat")),l=t('<div class="fc-header '+o.getClass("popoverHeader")+'"><span class="fc-close '+o.getIconClass("close")+'"></span><span class="fc-title">'+tt(a)+'</span><div class="fc-clear"/></div><div class="fc-body '+o.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>'),u=l.find(".fc-event-container");for(i=this.renderFgSegEls(i,!0),this.popoverSegs=i,s=0;s<i.length;s++)this.hitsNeeded(),i[s].hit=this.getCellHit(e,n),this.hitsNotNeeded(),u.append(i[s].el);return l},resliceDaySegs:function(t,e){var n,i=e.clone(),s=i.clone().add(1,"days"),r=new Me(i,s),o=[];for(n=0;n<t.length;n++)o.push.apply(o,this.eventFootprintToSegs(t[n].footprint,r));return this.sortEventSegs(o),o},getMoreLinkText:function(t){var e=this.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},getCellSegs:function(t,e,n){for(var i,s=this.rowStructs[t].segMatrix,r=n||0,o=[];r<s.length;)i=s[r][e],i&&o.push(i),r++;return o}});var De=Vt.TimeGrid=me.extend(ye,{dayRanges:null,slotDuration:null,snapDuration:null,snapsPerSlot:null,labelFormat:null,labelInterval:null,colEls:null,slatContainerEl:null,slatEls:null,nowIndicatorEls:null,colCoordCache:null,slatCoordCache:null,constructor:function(){me.apply(this,arguments),this.processOptions()},renderDates:function(){this.el.html(this.renderHtml()),this.colEls=this.el.find(".fc-day, .fc-disabled-day"),this.slatContainerEl=this.el.find(".fc-slats"),this.slatEls=this.slatContainerEl.find("tr"),this.colCoordCache=new he({els:this.colEls,isHorizontal:!0}),this.slatCoordCache=new he({els:this.slatEls,isVertical:!0}),this.renderContentSkeleton()},renderHtml:function(){var t=this.view.calendar.theme;return'<div class="fc-bg"><table class="'+t.getClass("tableGrid")+'">'+this.renderBgTrHtml(0)+'</table></div><div class="fc-slats"><table class="'+t.getClass("tableGrid")+'">'+this.renderSlatRowHtml()+"</table></div>"},renderSlatRowHtml:function(){for(var t,n,i,s=this.view,r=s.calendar,o=r.theme,a=this.isRTL,l="",u=e.duration(+this.view.minTime),c=e.duration(0);u<s.maxTime;)t=r.msToUtcMoment(this.unzonedRange.startMs).time(u),n=ot(G(c,this.labelInterval)),i='<td class="fc-axis fc-time '+o.getClass("widgetContent")+'" '+s.axisStyleAttr()+">"+(n?"<span>"+tt(t.format(this.labelFormat))+"</span>":"")+"</td>",l+='<tr data-time="'+t.format("HH:mm:ss")+'"'+(n?"":' class="fc-minor"')+">"+(a?"":i)+'<td class="'+o.getClass("widgetContent")+'"/>'+(a?i:"")+"</tr>",u.add(this.slotDuration),c.add(this.slotDuration);return l},processOptions:function(){var n,i=this.opt("slotDuration"),s=this.opt("snapDuration");i=e.duration(i),s=s?e.duration(s):i,this.slotDuration=i,this.snapDuration=s,this.snapsPerSlot=i/s,n=this.opt("slotLabelFormat"),t.isArray(n)&&(n=n[n.length-1]),this.labelFormat=n||this.opt("smallTimeFormat"),n=this.opt("slotLabelInterval"),this.labelInterval=n?e.duration(n):this.computeLabelInterval(i)},computeLabelInterval:function(t){var n,i,s;for(n=ln.length-1;n>=0;n--)if(i=e.duration(ln[n]),s=G(i,t),ot(s)&&s>1)return i;return e.duration(t)},computeEventTimeFormat:function(){return this.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},prepareHits:function(){this.colCoordCache.build(),this.slatCoordCache.build()},releaseHits:function(){this.colCoordCache.clear()},queryHit:function(t,e){var n=this.snapsPerSlot,i=this.colCoordCache,s=this.slatCoordCache;if(i.isLeftInBounds(t)&&s.isTopInBounds(e)){var r=i.getHorizontalIndex(t),o=s.getVerticalIndex(e);if(null!=r&&null!=o){var a=s.getTopOffset(o),l=s.getHeight(o),u=(e-a)/l,c=Math.floor(u*n),h=o*n+c,d=a+c/n*l,f=a+(c+1)/n*l;return{col:r,snap:h,component:this,left:i.getLeftOffset(r),right:i.getRightOffset(r),top:d,bottom:f}}}},getHitFootprint:function(t){var e,n=this.getCellDate(0,t.col),i=this.computeSnapTime(t.snap);return n.time(i),e=n.clone().add(this.snapDuration),new xe(new Me(n,e),!1)},getHitEl:function(t){return this.colEls.eq(t.col)},rangeUpdated:function(){var t=this.view;this.updateDayTable(),this.dayRanges=this.dayDates.map(function(e){return new Me(e.clone().add(t.minTime),e.clone().add(t.maxTime))})},computeSnapTime:function(t){return e.duration(this.view.minTime+this.snapDuration*t)},componentFootprintToSegs:function(t){var e,n=this.sliceRangeByTimes(t.unzonedRange);for(e=0;e<n.length;e++)this.isRTL?n[e].col=this.daysPerRow-1-n[e].dayIndex:n[e].col=n[e].dayIndex;return n},sliceRangeByTimes:function(t){var e,n,i=[];for(n=0;n<this.daysPerRow;n++)(e=t.intersect(this.dayRanges[n]))&&i.push({startMs:e.startMs,endMs:e.endMs,isStart:e.isStart,isEnd:e.isEnd,dayIndex:n});return i},updateSize:function(t){this.slatCoordCache.build(),t&&this.updateSegVerticals([].concat(this.fgSegs||[],this.bgSegs||[],this.businessSegs||[]))},getTotalSlatHeight:function(){return this.slatContainerEl.outerHeight()},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i=this.slatEls.length,s=(t-this.view.minTime)/this.slotDuration;return s=Math.max(0,s),s=Math.min(i,s),e=Math.floor(s),e=Math.min(e,i-1),n=s-e,this.slatCoordCache.getTopPosition(e)+this.slatCoordCache.getHeight(e)*n},renderDrag:function(t,e){var n;if(e)return this.renderHelperEventFootprints(t);for(n=0;n<t.length;n++)this.renderHighlight(t[n].componentFootprint)},unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},renderEventResize:function(t,e){return this.renderHelperEventFootprints(t,e)},unrenderEventResize:function(){this.unrenderHelper()},renderHelperEventFootprintEls:function(t,e){var n=this.eventFootprintsToSegs(t);return this.renderHelperSegs(n,e)},unrenderHelper:function(){this.unrenderHelperSegs()},renderBusinessHours:function(){this.renderBusinessSegs(this.buildBusinessHourSegs())},unrenderBusinessHours:function(){this.unrenderBusinessSegs()},getNowIndicatorUnit:function(){return"minute"},renderNowIndicator:function(e){var n,i=this.componentFootprintToSegs(new xe(new Me(e,e.valueOf()+1),!1)),s=this.computeDateTop(e,e),r=[];for(n=0;n<i.length;n++)r.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",s).appendTo(this.colContainerEls.eq(i[n].col))[0]);i.length>0&&r.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",s).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=t(r)},unrenderNowIndicator:function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},renderSelectionFootprint:function(t){this.opt("selectHelper")?this.renderHelperEventFootprints([this.fabricateEventFootprint(t)]):this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},renderHighlight:function(t){this.renderHighlightSegs(this.componentFootprintToSegs(t))},unrenderHighlight:function(){this.unrenderHighlightSegs()}});De.mixin({colContainerEls:null,fgContainerEls:null,bgContainerEls:null,helperContainerEls:null,highlightContainerEls:null,businessContainerEls:null,fgSegs:null,bgSegs:null,helperSegs:null,highlightSegs:null,businessSegs:null,renderContentSkeleton:function(){var e,n,i="";for(e=0;e<this.colCnt;e++)i+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';n=t('<div class="fc-content-skeleton"><table><tr>'+i+"</tr></table></div>"),this.colContainerEls=n.find(".fc-content-col"),this.helperContainerEls=n.find(".fc-helper-container"),this.fgContainerEls=n.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=n.find(".fc-bgevent-container"),this.highlightContainerEls=n.find(".fc-highlight-container"),this.businessContainerEls=n.find(".fc-business-container"),this.bookendCells(n.find("tr")),this.el.append(n)},renderFgSegs:function(t){return t=this.renderFgSegsIntoContainers(t,this.fgContainerEls),this.fgSegs=t,t},unrenderFgSegs:function(){this.unrenderNamedSegs("fgSegs")},renderHelperSegs:function(e,n){var i,s,r,o=[];for(e=this.renderFgSegsIntoContainers(e,this.helperContainerEls),i=0;i<e.length;i++)s=e[i],n&&n.col===s.col&&(r=n.el,s.el.css({left:r.css("left"),right:r.css("right"),"margin-left":r.css("margin-left"),"margin-right":r.css("margin-right")})),o.push(s.el[0]);return this.helperSegs=e,t(o)},unrenderHelperSegs:function(){this.unrenderNamedSegs("helperSegs")},renderBgSegs:function(t){return t=this.renderFillSegEls("bgEvent",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.bgContainerEls),this.bgSegs=t,t},unrenderBgSegs:function(){this.unrenderNamedSegs("bgSegs")},renderHighlightSegs:function(t){t=this.renderFillSegEls("highlight",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.highlightContainerEls),this.highlightSegs=t},unrenderHighlightSegs:function(){this.unrenderNamedSegs("highlightSegs")},renderBusinessSegs:function(t){t=this.renderFillSegEls("businessHours",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.businessContainerEls),this.businessSegs=t},unrenderBusinessSegs:function(){this.unrenderNamedSegs("businessSegs")},groupSegsByCol:function(t){var e,n=[];for(e=0;e<this.colCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].col].push(t[e]);return n},attachSegsByCol:function(t,e){var n,i,s;for(n=0;n<this.colCnt;n++)for(i=t[n],s=0;s<i.length;s++)e.eq(n).append(i[s].el)},unrenderNamedSegs:function(t){var e,n=this[t];if(n){for(e=0;e<n.length;e++)n[e].el.remove();this[t]=null}},renderFgSegsIntoContainers:function(t,e){var n,i;for(t=this.renderFgSegEls(t),n=this.groupSegsByCol(t),i=0;i<this.colCnt;i++)this.updateFgSegCoords(n[i]);return this.attachSegsByCol(n,e),t},fgSegHtml:function(t,e){var n,i,s,r=this.view,o=r.calendar,a=t.footprint.componentFootprint,l=a.isAllDay,u=t.footprint.eventDef,c=r.isEventDefDraggable(u),h=!e&&t.isStart&&r.isEventDefResizableFromStart(u),d=!e&&t.isEnd&&r.isEventDefResizableFromEnd(u),f=this.getSegClasses(t,c,h||d),g=nt(this.getSegSkinCss(t));if(f.unshift("fc-time-grid-event","fc-v-event"),r.isMultiDayRange(a.unzonedRange)){if(t.isStart||t.isEnd){var p=o.msToMoment(t.startMs),v=o.msToMoment(t.endMs);n=this._getEventTimeText(p,v,l),i=this._getEventTimeText(p,v,l,"LT"),s=this._getEventTimeText(p,v,l,null,!1)}}else n=this.getEventTimeText(t.footprint),i=this.getEventTimeText(t.footprint,"LT"),s=this.getEventTimeText(t.footprint,null,!1);return'<a class="'+f.join(" ")+'"'+(u.url?' href="'+tt(u.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+tt(s)+'" data-full="'+tt(i)+'"><span>'+tt(n)+"</span></div>":"")+(u.title?'<div class="fc-title">'+tt(u.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(d?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},updateSegVerticals:function(t){this.computeSegVerticals(t),this.assignSegVerticals(t)},computeSegVerticals:function(t){var e,n,i;for(e=0;e<t.length;e++)n=t[e],i=this.dayDates[n.dayIndex],n.top=this.computeDateTop(n.startMs,i),n.bottom=this.computeDateTop(n.endMs,i)},assignSegVerticals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateSegVerticalCss(n))},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},updateFgSegCoords:function(t){this.computeSegVerticals(t),this.computeFgSegHorizontals(t),this.assignSegVerticals(t),this.assignFgSegHorizontals(t)},computeFgSegHorizontals:function(t){var e,n,i;if(this.sortEventSegs(t),e=Dt(t),bt(e),n=e[0]){for(i=0;i<n.length;i++)St(n[i]);for(i=0;i<n.length;i++)this.computeFgSegForwardBack(n[i],0,0)}},computeFgSegForwardBack:function(t,e,n){var i,s=t.forwardSegs;if(void 0===t.forwardCoord)for(s.length?(this.sortForwardSegs(s),this.computeFgSegForwardBack(s[0],e+1,n),t.forwardCoord=s[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;i<s.length;i++)this.computeFgSegForwardBack(s[i],0,t.forwardCoord)},sortForwardSegs:function(t){t.sort(at(this,"compareForwardSegs"))},compareForwardSegs:function(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||this.compareEventSegs(t,e)},assignFgSegHorizontals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateFgSegHorizontalCss(n)),n.bottom-n.top<30&&n.el.addClass("fc-short")},generateFgSegHorizontalCss:function(t){var e,n,i=this.opt("slotEventOverlap"),s=t.backwardCoord,r=t.forwardCoord,o=this.generateSegVerticalCss(t);return i&&(r=Math.min(1,s+2*(r-s))),this.isRTL?(e=1-r,n=s):(e=s,n=1-r),o.zIndex=t.level+1,o.left=100*e+"%",o.right=100*n+"%",i&&t.forwardPressure&&(o[this.isRTL?"marginLeft":"marginRight"]=20),o}});var be=Vt.View=ve.extend({type:null,name:null,title:null,calendar:null,viewSpec:null,options:null,renderQueue:null,batchRenderDepth:0,isDatesRendered:!1,isEventsRendered:!1,isBaseRendered:!1,queuedScroll:null,isSelected:!1,selectedEventInstance:null,eventOrderSpecs:null,isHiddenDayHash:null,isNowIndicatorRendered:null,initialNowDate:null,initialNowQueriedMs:null,nowIndicatorTimeoutID:null,nowIndicatorIntervalID:null,constructor:function(t,e){this.calendar=t,this.viewSpec=e,this.type=e.type,this.options=e.options,this.name=this.type,ve.call(this),this.initHiddenDays(),this.eventOrderSpecs=z(this.opt("eventOrder")),this.renderQueue=this.buildRenderQueue(),this.initAutoBatchRender(),this.initialize()},buildRenderQueue:function(){var t=this,e=new ue({event:this.opt("eventRenderWait")});return e.on("start",function(){t.freezeHeight(),t.addScroll(t.queryScroll())}),e.on("stop",function(){t.thawHeight(),t.popScroll()}),e},initAutoBatchRender:function(){var t=this;this.on("before:change",function(){t.startBatchRender()}),this.on("change",function(){t.stopBatchRender()})},startBatchRender:function(){this.batchRenderDepth++||this.renderQueue.pause()},stopBatchRender:function(){--this.batchRenderDepth||this.renderQueue.resume()},initialize:function(){},opt:function(t){return this.options[t]},computeTitle:function(){var t;return t=/^(year|month)$/.test(this.currentRangeUnit)?this.currentUnzonedRange:this.activeUnzonedRange,this.formatRange({start:this.calendar.msToMoment(t.startMs,this.isRangeAllDay),end:this.calendar.msToMoment(t.endMs,this.isRangeAllDay)},this.isRangeAllDay,this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.currentRangeUnit?"YYYY":"month"==this.currentRangeUnit?this.opt("monthYearFormat"):this.currentRangeAs("days")>1?"ll":"LL"},setElement:function(t){ve.prototype.setElement.apply(this,arguments),this.bindBaseRenderHandlers()},removeElement:function(){this.unsetDate(),this.unbindBaseRenderHandlers(),ve.prototype.removeElement.apply(this,arguments)},setDate:function(t){var e=this.get("dateProfile"),n=this.buildDateProfile(t,null,!0);return e&&e.activeUnzonedRange.equals(n.activeUnzonedRange)||this.set("dateProfile",n),n.date},unsetDate:function(){this.unset("dateProfile")},requestDateRender:function(t){var e=this;this.renderQueue.queue(function(){e.executeDateRender(t)},"date","init")},requestDateUnrender:function(){var t=this;this.renderQueue.queue(function(){t.executeDateUnrender()},"date","destroy")},fetchInitialEvents:function(t){var e=this.calendar,n=t.isRangeAllDay&&!this.usesMinMaxTime;return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs,n),e.msToMoment(t.activeUnzonedRange.endMs,n))},bindEventChanges:function(){this.listenTo(this.calendar,"eventsReset",this.resetEvents)},unbindEventChanges:function(){this.stopListeningTo(this.calendar,"eventsReset")},setEvents:function(t){this.set("currentEvents",t),this.set("hasEvents",!0)},unsetEvents:function(){this.unset("currentEvents"),this.unset("hasEvents")},resetEvents:function(t){this.startBatchRender(),this.unsetEvents(),this.setEvents(t),this.stopBatchRender()},requestEventsRender:function(t){var e=this;this.renderQueue.queue(function(){e.executeEventsRender(t)},"event","init")},requestEventsUnrender:function(){var t=this;this.renderQueue.queue(function(){t.executeEventsUnrender()},"event","destroy")},executeDateRender:function(t,e){this.setDateProfileForRendering(t),this.render&&this.render(),this.renderDates(),this.updateSize(),this.renderBusinessHours(),this.startNowIndicator(),e||this.addScroll(this.computeInitialDateScroll()),this.isDatesRendered=!0,this.trigger("datesRendered")},executeDateUnrender:function(){this.unselect(),this.stopNowIndicator(),this.trigger("before:datesUnrendered"),this.unrenderBusinessHours(),this.unrenderDates(),
this.destroy&&this.destroy(),this.isDatesRendered=!1},bindBaseRenderHandlers:function(){var t=this;this.on("datesRendered.baseHandler",function(){t.onBaseRender()}),this.on("before:datesUnrendered.baseHandler",function(){t.onBeforeBaseUnrender()})},unbindBaseRenderHandlers:function(){this.off(".baseHandler")},onBaseRender:function(){this.applyScreenState(),this.publiclyTrigger("viewRender",{context:this,args:[this,this.el]})},onBeforeBaseUnrender:function(){this.applyScreenState(),this.publiclyTrigger("viewDestroy",{context:this,args:[this,this.el]})},bindGlobalHandlers:function(){this.listenTo(ge.get(),{touchstart:this.processUnselect,mousedown:this.handleDocumentMousedown})},unbindGlobalHandlers:function(){this.stopListeningTo(ge.get())},startNowIndicator:function(){var t,n,i,s=this;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit())&&(n=at(this,"updateNowIndicator"),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=+new Date,this.renderNowIndicator(this.initialNowDate),this.isNowIndicatorRendered=!0,i=this.initialNowDate.clone().startOf(t).add(1,t)-this.initialNowDate,this.nowIndicatorTimeoutID=setTimeout(function(){s.nowIndicatorTimeoutID=null,n(),i=+e.duration(1,t),i=Math.max(100,i),s.nowIndicatorIntervalID=setInterval(n,i)},i))},updateNowIndicator:function(){this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add(new Date-this.initialNowQueriedMs)))},stopNowIndicator:function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearTimeout(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},updateSize:function(t){var e;t&&(e=this.queryScroll()),this.updateHeight(t),this.updateWidth(t),this.updateNowIndicator(),t&&this.applyScroll(e)},updateWidth:function(t){},updateHeight:function(t){var e=this.calendar;this.setHeight(e.getSuggestedViewHeight(),e.isHeightAuto())},setHeight:function(t,e){},addForcedScroll:function(e){this.addScroll(t.extend(e,{isForced:!0}))},addScroll:function(e){var n=this.queuedScroll||(this.queuedScroll={});n.isForced||t.extend(n,e)},popScroll:function(){this.applyQueuedScroll(),this.queuedScroll=null},applyQueuedScroll:function(){this.queuedScroll&&this.applyScroll(this.queuedScroll)},queryScroll:function(){var e={};return this.isDatesRendered&&t.extend(e,this.queryDateScroll()),e},applyScroll:function(t){this.isDatesRendered&&this.applyDateScroll(t)},computeInitialDateScroll:function(){return{}},queryDateScroll:function(){return{}},applyDateScroll:function(t){},freezeHeight:function(){this.calendar.freezeContentHeight()},thawHeight:function(){this.calendar.thawContentHeight()},executeEventsRender:function(t){this.renderEvents?this.renderEvents(Tt(t)):this.renderEventsPayload(t),this.isEventsRendered=!0,this.onEventsRender()},executeEventsUnrender:function(){this.onBeforeEventsUnrender(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.isEventsRendered=!1},onEventsRender:function(){var t=this,e=this.hasPublicHandlers("eventAfterRender");(e||this.hasPublicHandlers("eventAfterAllRender"))&&this.applyScreenState(),e&&this.getEventSegs().forEach(function(e){var n;e.el&&(n=e.footprint.getEventLegacy(),t.publiclyTrigger("eventAfterRender",{context:n,args:[n,e.el,t]}))}),this.publiclyTrigger("eventAfterAllRender",{context:this,args:[this]})},onBeforeEventsUnrender:function(){var t=this;this.hasPublicHandlers("eventDestroy")&&(this.applyScreenState(),this.getEventSegs().forEach(function(e){var n;e.el&&(n=e.footprint.getEventLegacy(),t.publiclyTrigger("eventDestroy",{context:n,args:[n,e.el,t]}))}))},applyScreenState:function(){this.thawHeight(),this.freezeHeight(),this.applyQueuedScroll()},showEventsWithId:function(t){this.getEventSegs().forEach(function(e){e.footprint.eventDef.id===t&&e.el&&e.el.css("visibility","")})},hideEventsWithId:function(t){this.getEventSegs().forEach(function(e){e.footprint.eventDef.id===t&&e.el&&e.el.css("visibility","hidden")})},reportEventDrop:function(t,n,i,s){var r=this.calendar.eventManager,o=r.mutateEventsWithId(t.def.id,n,this.calendar),a=n.dateMutation;a&&(t.dateProfile=a.buildNewDateProfile(t.dateProfile,this.calendar)),this.triggerEventDrop(t,a&&a.dateDelta||e.duration(),o,i,s)},triggerEventDrop:function(t,e,n,i,s){this.publiclyTrigger("eventDrop",{context:i[0],args:[t.toLegacy(),e,n,s,{},this]})},reportExternalDrop:function(t,e,n,i,s,r){e&&this.calendar.eventManager.addEventDef(t,n),this.triggerExternalDrop(t,e,i,s,r)},triggerExternalDrop:function(t,e,n,i,s){this.publiclyTrigger("drop",{context:n[0],args:[t.dateProfile.start.clone(),i,s,this]}),e&&this.publiclyTrigger("eventReceive",{context:this,args:[t.buildInstance().toLegacy(),this]})},reportEventResize:function(t,e,n,i){var s=this.calendar.eventManager,r=s.mutateEventsWithId(t.def.id,e,this.calendar);t.dateProfile=e.dateMutation.buildNewDateProfile(t.dateProfile,this.calendar),this.triggerEventResize(t,e.dateMutation.endDelta,r,n,i)},triggerEventResize:function(t,e,n,i,s){this.publiclyTrigger("eventResize",{context:i[0],args:[t.toLegacy(),e,n,s,{},this]})},select:function(t,e){this.unselect(e),this.renderSelectionFootprint(t),this.reportSelection(t,e)},renderSelectionFootprint:function(t,e){this.renderSelection?this.renderSelection(t.toLegacy(this.calendar)):ve.prototype.renderSelectionFootprint.apply(this,arguments)},reportSelection:function(t,e){this.isSelected=!0,this.triggerSelect(t,e)},triggerSelect:function(t,e){var n=this.calendar.footprintToDateProfile(t);this.publiclyTrigger("select",{context:this,args:[n.start,n.end,e,this]})},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",{context:this,args:[t,this]}))},selectEventInstance:function(t){this.selectedEventInstance&&this.selectedEventInstance===t||(this.unselectEventInstance(),this.getEventSegs().forEach(function(e){e.footprint.eventInstance===t&&e.el&&e.el.addClass("fc-selected")}),this.selectedEventInstance=t)},unselectEventInstance:function(){this.selectedEventInstance&&(this.getEventSegs().forEach(function(t){t.el&&t.el.removeClass("fc-selected")}),this.selectedEventInstance=null)},isEventDefSelected:function(t){return this.selectedEventInstance&&this.selectedEventInstance.def.id===t.id},handleDocumentMousedown:function(t){D(t)&&this.processUnselect(t)},processUnselect:function(t){this.processRangeUnselect(t),this.processEventUnselect(t)},processRangeUnselect:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&((n=this.opt("unselectCancel"))&&t(e.target).closest(n).length||this.unselect(e))},processEventUnselect:function(e){this.selectedEventInstance&&(t(e.target).closest(".fc-selected").length||this.unselectEventInstance())},triggerDayClick:function(t,e,n){var i=this.calendar.footprintToDateProfile(t);this.publiclyTrigger("dayClick",{context:e,args:[i.start,n,this]})}});be.watch("displayingDates",["dateProfile"],function(t){this.requestDateRender(t.dateProfile)},function(){this.requestDateUnrender()}),be.watch("initialEvents",["dateProfile"],function(t){return this.fetchInitialEvents(t.dateProfile)}),be.watch("bindingEvents",["initialEvents"],function(t){this.setEvents(t.initialEvents),this.bindEventChanges()},function(){this.unbindEventChanges(),this.unsetEvents()}),be.watch("displayingEvents",["displayingDates","hasEvents"],function(){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),be.mixin({currentUnzonedRange:null,currentRangeUnit:null,isRangeAllDay:!1,renderUnzonedRange:null,activeUnzonedRange:null,validUnzonedRange:null,dateIncrement:null,minTime:null,maxTime:null,usesMinMaxTime:!1,start:null,end:null,intervalStart:null,intervalEnd:null,setDateProfileForRendering:function(t){var e=this.calendar;this.currentUnzonedRange=t.currentUnzonedRange,this.currentRangeUnit=t.currentRangeUnit,this.isRangeAllDay=t.isRangeAllDay,this.renderUnzonedRange=t.renderUnzonedRange,this.activeUnzonedRange=t.activeUnzonedRange,this.validUnzonedRange=t.validUnzonedRange,this.dateIncrement=t.dateIncrement,this.minTime=t.minTime,this.maxTime=t.maxTime,this.start=e.msToMoment(t.activeUnzonedRange.startMs,this.isRangeAllDay),this.end=e.msToMoment(t.activeUnzonedRange.endMs,this.isRangeAllDay),this.intervalStart=e.msToMoment(t.currentUnzonedRange.startMs,this.isRangeAllDay),this.intervalEnd=e.msToMoment(t.currentUnzonedRange.endMs,this.isRangeAllDay),this.title=this.computeTitle(),this.calendar.reportViewDatesChanged(this,t)},buildPrevDateProfile:function(t){var e=t.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);return this.buildDateProfile(e,-1)},buildNextDateProfile:function(t){var e=t.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);return this.buildDateProfile(e,1)},buildDateProfile:function(t,n,i){var s,r,o,a,l=!t.hasTime(),u=this.buildValidRange(),c=null,h=null;return i&&(t=this.calendar.msToUtcMoment(u.constrainDate(t),l)),s=this.buildCurrentRangeInfo(t,n),r=this.buildRenderRange(s.unzonedRange,s.unit),o=r.clone(),this.opt("showNonCurrentDates")||(o=o.intersect(s.unzonedRange)),c=e.duration(this.opt("minTime")),h=e.duration(this.opt("maxTime")),o=this.adjustActiveRange(o,c,h),o=o.intersect(u),o&&(t=this.calendar.msToUtcMoment(o.constrainDate(t),l)),a=s.unzonedRange.intersectsWith(u),{validUnzonedRange:u,currentUnzonedRange:s.unzonedRange,currentRangeUnit:s.unit,isRangeAllDay:/^(year|month|week|day)$/.test(s.unit),activeUnzonedRange:o,renderUnzonedRange:r,minTime:c,maxTime:h,isValid:a,date:t,dateIncrement:this.buildDateIncrement(s.duration)}},buildValidRange:function(){return this.getUnzonedRangeOption("validRange",this.calendar.getNow())||new Me},buildCurrentRangeInfo:function(t,e){var n,i=null,s=null,r=null;return this.viewSpec.duration?(i=this.viewSpec.duration,s=this.viewSpec.durationUnit,r=this.buildRangeFromDuration(t,e,i,s)):(n=this.opt("dayCount"))?(s="day",r=this.buildRangeFromDayCount(t,e,n)):(r=this.buildCustomVisibleRange(t))?s=O(r.getStart(),r.getEnd()):(i=this.getFallbackDuration(),s=O(i),r=this.buildRangeFromDuration(t,e,i,s)),{duration:i,unit:s,unzonedRange:r}},getFallbackDuration:function(){return e.duration({days:1})},adjustActiveRange:function(t,e,n){var i=t.getStart(),s=t.getEnd();return this.usesMinMaxTime&&(e<0&&i.time(0).add(e),n>864e5&&s.time(n-864e5)),new Me(i,s)},buildRangeFromDuration:function(t,n,i,s){var r,o,a,l=this.opt("dateAlignment"),u=t.clone();return i.as("days")<=1&&this.isHiddenDay(u)&&(u=this.skipHiddenDays(u,n),u.startOf("day")),l||(o=this.opt("dateIncrement"),o?(a=e.duration(o),l=a<i?N(a,o):s):l=s),u.startOf(l),r=u.clone().add(i),new Me(u,r)},buildRangeFromDayCount:function(t,e,n){var i,s=this.opt("dateAlignment"),r=0,o=t.clone();s&&o.startOf(s),o.startOf("day"),o=this.skipHiddenDays(o,e),i=o.clone();do{i.add(1,"day"),this.isHiddenDay(i)||r++}while(r<n);return new Me(o,i)},buildCustomVisibleRange:function(t){var e=this.getUnzonedRangeOption("visibleRange",this.calendar.applyTimezone(t));return!e||null!==e.startMs&&null!==e.endMs?e:null},buildRenderRange:function(t,e){return this.trimHiddenDays(t)},buildDateIncrement:function(t){var n,i=this.opt("dateIncrement");return i?e.duration(i):(n=this.opt("dateAlignment"))?e.duration(1,n):t||e.duration({days:1})},trimHiddenDays:function(t){var e=t.getStart(),n=t.getEnd();return e=this.skipHiddenDays(e),n=this.skipHiddenDays(n,-1,!0),new Me(e,n)},currentRangeAs:function(t){var n=this.currentUnzonedRange;return e.utc(n.endMs).diff(e.utc(n.startMs),t,!0)},isDateInOtherMonth:function(t){return!1},getUnzonedRangeOption:function(t){var e=this.opt(t);if("function"==typeof e&&(e=e.apply(null,Array.prototype.slice.call(arguments,1))),e)return this.calendar.parseUnzonedRange(e)},initHiddenDays:function(){var e,n=this.opt("hiddenDays")||[],i=[],s=0;for(!1===this.opt("weekends")&&n.push(0,6),e=0;e<7;e++)(i[e]=-1!==t.inArray(e,n))||s++;if(!s)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(t){return e.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},skipHiddenDays:function(t,e,n){var i=t.clone();for(e=e||1;this.isHiddenDayHash[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i}});var Se=Vt.Scroller=ht.extend({el:null,scrollEl:null,overflowX:null,overflowY:null,constructor:function(t){t=t||{},this.overflowX=t.overflowX||t.overflow||"auto",this.overflowY=t.overflowY||t.overflow||"auto"},render:function(){this.el=this.renderEl(),this.applyOverflow()},renderEl:function(){return this.scrollEl=t('<div class="fc-scroller"></div>')},clear:function(){this.setHeight("auto"),this.applyOverflow()},destroy:function(){this.el.remove()},applyOverflow:function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},lockOverflow:function(t){var e=this.overflowX,n=this.overflowY;t=t||this.getScrollbarWidths(),"auto"===e&&(e=t.top||t.bottom||this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===n&&(n=t.left||t.right||this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":e,"overflow-y":n})},setHeight:function(t){this.scrollEl.height(t)},getScrollTop:function(){return this.scrollEl.scrollTop()},setScrollTop:function(t){this.scrollEl.scrollTop(t)},getClientWidth:function(){return this.scrollEl[0].clientWidth},getClientHeight:function(){return this.scrollEl[0].clientHeight},getScrollbarWidths:function(){return p(this.scrollEl)}});Rt.prototype.proxyCall=function(t){var e=Array.prototype.slice.call(arguments,1),n=[];return this.items.forEach(function(i){n.push(i[t].apply(i,e))}),n};var Ee=Vt.Calendar=ht.extend(ee,{view:null,viewsByType:null,currentDate:null,theme:null,loadingLevel:0,constructor:function(t,e){ge.needed(),this.el=t,this.viewsByType={},this.viewSpecCache={},this.initOptionsInternals(e),this.initMomentInternals(),this.initCurrentDate(),this.initEventManager(),ze.call(this),this.initialize()},initialize:function(){},getView:function(){return this.view},publiclyTrigger:function(e,n){var i,s,r=this.opt(e);if(t.isPlainObject(n)?(i=n.context,s=n.args):t.isArray(n)&&(s=n),null==i&&(i=this.el[0]),s||(s=[]),this.triggerWith(e,i,s),r)return r.apply(i,s)},hasPublicHandlers:function(t){return this.hasHandlers(t)||this.opt(t)},instantiateView:function(t){var e=this.getViewSpec(t);return new e.class(this,e)},isValidViewType:function(t){return Boolean(this.getViewSpec(t))},changeView:function(t,e){e&&(e.start&&e.end?this.recordOptionOverrides({visibleRange:e}):this.currentDate=this.moment(e).stripZone()),this.renderView(t)},zoomTo:function(t,e){var n;e=e||"day",n=this.getViewSpec(e)||this.getUnitViewSpec(e),this.currentDate=t.clone(),this.renderView(n?n.type:null)},initCurrentDate:function(){var t=this.opt("defaultDate");this.currentDate=null!=t?this.moment(t).stripZone():this.getNow()},reportViewDatesChanged:function(t,e){this.currentDate=e.date,this.setToolbarsTitle(t.title),this.updateToolbarButtons()},prev:function(){var t=this.view.buildPrevDateProfile(this.currentDate);t.isValid&&(this.currentDate=t.date,this.renderView())},next:function(){var t=this.view.buildNextDateProfile(this.currentDate);t.isValid&&(this.currentDate=t.date,this.renderView())},prevYear:function(){this.currentDate.add(-1,"years"),this.renderView()},nextYear:function(){this.currentDate.add(1,"years"),this.renderView()},today:function(){this.currentDate=this.getNow(),this.renderView()},gotoDate:function(t){this.currentDate=this.moment(t).stripZone(),this.renderView()},incrementDate:function(t){this.currentDate.add(e.duration(t)),this.renderView()},getDate:function(){return this.applyTimezone(this.currentDate)},pushLoading:function(){this.loadingLevel++||this.publiclyTrigger("loading",[!0,this.view])},popLoading:function(){--this.loadingLevel||this.publiclyTrigger("loading",[!1,this.view])},select:function(t,e){this.view.select(this.buildSelectFootprint.apply(this,arguments))},unselect:function(){this.view&&this.view.unselect()},buildSelectFootprint:function(t,e){var n,i=this.moment(t).stripZone();return n=e?this.moment(e).stripZone():i.hasTime()?i.clone().add(this.defaultTimedEventDuration):i.clone().add(this.defaultAllDayEventDuration),new xe(new Me(i,n),!i.hasTime())},parseUnzonedRange:function(t){var e=null,n=null;return t.start&&(e=this.moment(t.start).stripZone()),t.end&&(n=this.moment(t.end).stripZone()),e||n?e&&n&&n.isBefore(e)?null:new Me(e,n):null},rerenderEvents:function(){this.elementVisible()&&this.view.flash("displayingEvents")},initEventManager:function(){var t=this,e=new ze(this),n=this.opt("eventSources")||[],i=this.opt("events");this.eventManager=e,i&&n.unshift(i),e.on("release",function(e){t.trigger("eventsReset",e)}),e.freeze(),n.forEach(function(n){var i=qe.parse(n,t);i&&e.addSource(i)}),e.thaw()},requestEvents:function(t,e){return this.eventManager.requestEvents(t,e,this.opt("timezone"),!this.opt("lazyFetching"))}});Ee.mixin({dirDefaults:null,localeDefaults:null,overrides:null,dynamicOverrides:null,optionsModel:null,initOptionsInternals:function(e){this.overrides=t.extend({},e),this.dynamicOverrides={},this.optionsModel=new oe,this.populateOptionsHash()},option:function(t,e){var n;if("string"==typeof t){if(void 0===e)return this.optionsModel.get(t);n={},n[t]=e,this.setOptions(n)}else"object"==typeof t&&this.setOptions(t)},opt:function(t){return this.optionsModel.get(t)},setOptions:function(t){var e,n=0;this.recordOptionOverrides(t);for(e in t)n++;if(1===n){if("height"===e||"contentHeight"===e||"aspectRatio"===e)return void this.updateSize(!0);if("defaultDate"===e)return;if("businessHours"===e)return void(this.view&&(this.view.unrenderBusinessHours(),this.view.renderBusinessHours()));if("timezone"===e)return void this.view.flash("initialEvents")}this.renderHeader(),this.renderFooter(),this.viewsByType={},this.reinitView()},populateOptionsHash:function(){var t,e,i,s,r;t=J(this.dynamicOverrides.locale,this.overrides.locale),e=Te[t],e||(t=Ee.defaults.locale,e=Te[t]||{}),i=J(this.dynamicOverrides.isRTL,this.overrides.isRTL,e.isRTL,Ee.defaults.isRTL),s=i?Ee.rtlDefaults:{},this.dirDefaults=s,this.localeDefaults=e,r=n([Ee.defaults,s,e,this.overrides,this.dynamicOverrides]),zt(r),this.optionsModel.reset(r)},recordOptionOverrides:function(t){var e;for(e in t)this.dynamicOverrides[e]=t[e];this.viewSpecCache={},this.populateOptionsHash()}}),Ee.mixin({defaultAllDayEventDuration:null,defaultTimedEventDuration:null,localeData:null,initMomentInternals:function(){var t=this;this.defaultAllDayEventDuration=e.duration(this.opt("defaultAllDayEventDuration")),this.defaultTimedEventDuration=e.duration(this.opt("defaultTimedEventDuration")),this.optionsModel.watch("buildingMomentLocale",["?locale","?monthNames","?monthNamesShort","?dayNames","?dayNamesShort","?firstDay","?weekNumberCalculation"],function(e){var n,i=e.weekNumberCalculation,s=e.firstDay;"iso"===i&&(i="ISO");var r=Object.create(Ft(e.locale));e.monthNames&&(r._months=e.monthNames),e.monthNamesShort&&(r._monthsShort=e.monthNamesShort),e.dayNames&&(r._weekdays=e.dayNames),e.dayNamesShort&&(r._weekdaysShort=e.dayNamesShort),null==s&&"ISO"===i&&(s=1),null!=s&&(n=Object.create(r._week),n.dow=s,r._week=n),"ISO"!==i&&"local"!==i&&"function"!=typeof i||(r._fullCalendar_weekCalc=i),t.localeData=r,t.currentDate&&t.localizeMoment(t.currentDate)})},moment:function(){var t;return"local"===this.opt("timezone")?(t=Vt.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===this.opt("timezone")?Vt.moment.utc.apply(null,arguments):Vt.moment.parseZone.apply(null,arguments),this.localizeMoment(t),t},msToMoment:function(t,e){var n=Vt.moment.utc(t);return e?n.stripTime():n=this.applyTimezone(n),this.localizeMoment(n),n},msToUtcMoment:function(t,e){var n=Vt.moment.utc(t);return e&&n.stripTime(),this.localizeMoment(n),n},localizeMoment:function(t){t._locale=this.localeData},getIsAmbigTimezone:function(){return"local"!==this.opt("timezone")&&"UTC"!==this.opt("timezone")},applyTimezone:function(t){if(!t.hasTime())return t.clone();var e,n=this.moment(t.toArray()),i=t.time()-n.time();return i&&(e=n.clone().add(i),t.time()-e.time()==0&&(n=e)),n},footprintToDateProfile:function(t,e){var n,i=Vt.moment.utc(t.unzonedRange.startMs);return e||(n=Vt.moment.utc(t.unzonedRange.endMs)),t.isAllDay?(i.stripTime(),n&&n.stripTime()):(i=this.applyTimezone(i),n&&(n=this.applyTimezone(n))),new Ne(i,n,this)},getNow:function(){var t=this.opt("now");return"function"==typeof t&&(t=t()),this.moment(t).stripZone()},humanizeDuration:function(t){return t.locale(this.opt("locale")).humanize()},getEventEnd:function(t){return t.end?t.end.clone():this.getDefaultEventEnd(t.allDay,t.start)},getDefaultEventEnd:function(t,e){var n=e.clone();return t?n.stripTime().add(this.defaultAllDayEventDuration):n.add(this.defaultTimedEventDuration),this.getIsAmbigTimezone()&&n.stripZone(),n}}),Ee.mixin({viewSpecCache:null,getViewSpec:function(t){var e=this.viewSpecCache;return e[t]||(e[t]=this.buildViewSpec(t))},getUnitViewSpec:function(e){var n,i,s;if(-1!=t.inArray(e,qt))for(n=this.header.getViewsWithButtons(),t.each(Vt.views,function(t){n.push(t)}),i=0;i<n.length;i++)if((s=this.getViewSpec(n[i]))&&s.singleUnit==e)return s},buildViewSpec:function(t){for(var i,s,r,o,a,l=this.overrides.views||{},u=[],c=[],h=[],d=t;d;)i=Ut[d],s=l[d],d=null,"function"==typeof i&&(i={class:i}),i&&(u.unshift(i),c.unshift(i.defaults||{}),r=r||i.duration,d=d||i.type),s&&(h.unshift(s),r=r||s.duration,d=d||s.type);return i=j(u),i.type=t,!!i.class&&(r=r||this.dynamicOverrides.duration||this.overrides.duration,r&&(o=e.duration(r),o.valueOf()&&(a=N(o,r),i.duration=o,i.durationUnit=a,1===o.as(a)&&(i.singleUnit=a,h.unshift(l[a]||{})))),i.defaults=n(c),i.overrides=n(h),this.buildViewSpecOptions(i),this.buildViewSpecButtonText(i,t),i)},buildViewSpecOptions:function(t){t.options=n([Ee.defaults,t.defaults,this.dirDefaults,this.localeDefaults,this.overrides,t.overrides,this.dynamicOverrides]),zt(t.options)},buildViewSpecButtonText:function(t,e){function n(n){var i=n.buttonText||{};return i[e]||(t.buttonTextKey?i[t.buttonTextKey]:null)||(t.singleUnit?i[t.singleUnit]:null)}t.buttonTextOverride=n(this.dynamicOverrides)||n(this.overrides)||t.overrides.buttonText,t.buttonTextDefault=n(this.localeDefaults)||n(this.dirDefaults)||t.defaults.buttonText||n(Ee.defaults)||(t.duration?this.humanizeDuration(t.duration):null)||e}}),Ee.mixin({el:null,contentEl:null,suggestedViewHeight:null,windowResizeProxy:null,ignoreWindowResize:0,render:function(){this.contentEl?this.elementVisible()&&(this.calcSize(),this.renderView()):this.initialRender()},initialRender:function(){var e=this,n=this.el;n.addClass("fc"),n.on("click.fc","a[data-goto]",function(n){var i=t(this),s=i.data("goto"),r=e.moment(s.date),o=s.type,a=e.view.opt("navLink"+st(o)+"Click");"function"==typeof a?a(r,n):("string"==typeof a&&(o=a),e.zoomTo(r,o))}),this.optionsModel.watch("settingTheme",["?theme","?themeSystem"],function(t){var i=Qe.getThemeClass(t.themeSystem||t.theme),s=new i(e.optionsModel),r=s.getClass("widget");e.theme=s,r&&n.addClass(r)},function(){var t=e.theme.getClass("widget");e.theme=null,t&&n.removeClass(t)}),this.optionsModel.watch("applyingDirClasses",["?isRTL","?locale"],function(t){n.toggleClass("fc-ltr",!t.isRTL),n.toggleClass("fc-rtl",t.isRTL)}),this.contentEl=t("<div class='fc-view-container'/>").prependTo(n),this.initToolbars(),this.renderHeader(),this.renderFooter(),this.renderView(this.opt("defaultView")),this.opt("handleWindowResize")&&t(window).resize(this.windowResizeProxy=lt(this.windowResize.bind(this),this.opt("windowResizeDelay")))},destroy:function(){this.view&&this.view.removeElement(),this.toolbarsManager.proxyCall("removeElement"),this.contentEl.remove(),this.el.removeClass("fc fc-ltr fc-rtl"),this.optionsModel.unwatch("settingTheme"),this.el.off(".fc"),this.windowResizeProxy&&(t(window).unbind("resize",this.windowResizeProxy),this.windowResizeProxy=null),ge.unneeded()},elementVisible:function(){return this.el.is(":visible")},renderView:function(e,n){this.ignoreWindowResize++;var i=this.view&&e&&this.view.type!==e;i&&(this.freezeContentHeight(),this.clearView()),!this.view&&e&&(this.view=this.viewsByType[e]||(this.viewsByType[e]=this.instantiateView(e)),this.view.setElement(t("<div class='fc-view fc-"+e+"-view' />").appendTo(this.contentEl)),this.toolbarsManager.proxyCall("activateButton",e)),this.view&&(n&&this.view.addForcedScroll(n),this.elementVisible()&&this.view.setDate(this.currentDate)),i&&this.thawContentHeight(),this.ignoreWindowResize--},clearView:function(){this.toolbarsManager.proxyCall("deactivateButton",this.view.type),this.view.removeElement(),this.view=null},reinitView:function(){this.ignoreWindowResize++,this.freezeContentHeight();var t=this.view.type,e=this.view.queryScroll();this.clearView(),this.calcSize(),this.renderView(t,e),this.thawContentHeight(),this.ignoreWindowResize--},getSuggestedViewHeight:function(){return null===this.suggestedViewHeight&&this.calcSize(),this.suggestedViewHeight},isHeightAuto:function(){return"auto"===this.opt("contentHeight")||"auto"===this.opt("height")},updateSize:function(t){if(this.elementVisible())return t&&this._calcSize(),this.ignoreWindowResize++,this.view.updateSize(!0),this.ignoreWindowResize--,!0},calcSize:function(){this.elementVisible()&&this._calcSize()},_calcSize:function(){var t=this.opt("contentHeight"),e=this.opt("height");this.suggestedViewHeight="number"==typeof t?t:"function"==typeof t?t():"number"==typeof e?e-this.queryToolbarsHeight():"function"==typeof e?e()-this.queryToolbarsHeight():"parent"===e?this.el.parent().height()-this.queryToolbarsHeight():Math.round(this.contentEl.width()/Math.max(this.opt("aspectRatio"),.5))},windowResize:function(t){!this.ignoreWindowResize&&t.target===window&&this.view.renderUnzonedRange&&this.updateSize(!0)&&this.publiclyTrigger("windowResize",[this.view])},freezeContentHeight:function(){this.contentEl.css({width:"100%",height:this.contentEl.height(),overflow:"hidden"})},thawContentHeight:function(){this.contentEl.css({width:"",height:"",overflow:""})}}),Ee.mixin({header:null,footer:null,toolbarsManager:null,initToolbars:function(){this.header=new It(this,this.computeHeaderOptions()),this.footer=new It(this,this.computeFooterOptions()),this.toolbarsManager=new Rt([this.header,this.footer])},computeHeaderOptions:function(){return{extraClasses:"fc-header-toolbar",layout:this.opt("header")}},computeFooterOptions:function(){return{extraClasses:"fc-footer-toolbar",layout:this.opt("footer")}},renderHeader:function(){var t=this.header;t.setToolbarOptions(this.computeHeaderOptions()),t.render(),t.el&&this.el.prepend(t.el)},renderFooter:function(){var t=this.footer;t.setToolbarOptions(this.computeFooterOptions()),t.render(),t.el&&this.el.append(t.el)},setToolbarsTitle:function(t){this.toolbarsManager.proxyCall("updateTitle",t)},updateToolbarButtons:function(){var t=this.getNow(),e=this.view,n=e.buildDateProfile(t),i=e.buildPrevDateProfile(this.currentDate),s=e.buildNextDateProfile(this.currentDate);this.toolbarsManager.proxyCall(n.isValid&&!e.currentUnzonedRange.containsDate(t)?"enableButton":"disableButton","today"),this.toolbarsManager.proxyCall(i.isValid?"enableButton":"disableButton","prev"),this.toolbarsManager.proxyCall(s.isValid?"enableButton":"disableButton","next")},queryToolbarsHeight:function(){return this.toolbarsManager.items.reduce(function(t,e){return t+(e.el?e.el.outerHeight(!0):0)},0)}});var Ce={start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"};Ee.prototype.buildCurrentBusinessFootprints=function(t){return this._buildCurrentBusinessFootprints(t,this.opt("businessHours"))},Ee.prototype._buildCurrentBusinessFootprints=function(t,e){var n,i=this.eventManager.currentPeriod;return i&&(n=this.buildBusinessInstanceGroup(t,e,i.unzonedRange))?this.eventInstancesToFootprints(n.eventInstances):[]},Ee.prototype.buildBusinessInstanceGroup=function(t,e,n){var i,s=this.buildBusinessDefs(t,e);if(s.length)return i=new Oe(At(s,n)),i.explicitEventDef=s[0],i},Ee.prototype.buildBusinessDefs=function(e,n){var i,s=[],r=!1,o=[];for(!0===n?s=[{}]:t.isPlainObject(n)?s=[n]:t.isArray(n)&&(s=n,r=!0),i=0;i<s.length;i++)r&&!s[i].dow||o.push(this.buildBusinessDef(e,s[i]));return o},Ee.prototype.buildBusinessDef=function(e,n){var i=t.extend({},Ce,n);return e&&(i.start=null,i.end=null),Ae.parse(i,new _e(this))},Ee.prototype.isEventInstanceGroupAllowed=function(t){var e,n=t.getEventDef(),i=this.eventRangesToEventFootprints(t.getAllEventRanges()),s=this.getPeerEventInstances(n),r=Lt(s),o=this.eventRangesToEventFootprints(r),a=n.getConstraint(),l=n.getOverlap(),u=this.opt("eventAllow");for(e=0;e<i.length;e++)if(!this.isFootprintAllowed(i[e].componentFootprint,o,a,l,i[e].eventInstance))return!1;if(u)for(e=0;e<i.length;e++)if(!1===u(i[e].componentFootprint.toLegacy(this),i[e].getEventLegacy()))return!1;return!0},Ee.prototype.getPeerEventInstances=function(t){return this.eventManager.getEventInstancesWithoutId(t.id)},Ee.prototype.isSelectionFootprintAllowed=function(t){var e,n=this.eventManager.getEventInstances(),i=Lt(n),s=this.eventRangesToEventFootprints(i);return!!this.isFootprintAllowed(t,s,this.opt("selectConstraint"),this.opt("selectOverlap"))&&(!(e=this.opt("selectAllow"))||!1!==e(t.toLegacy(this)))},Ee.prototype.isFootprintAllowed=function(t,e,n,i,s){var r,o;if(null!=n&&(r=this.constraintValToFootprints(n,t.isAllDay),!this.isFootprintWithinConstraints(t,r)))return!1;if(o=this.collectOverlapEventFootprints(e,t),!1===i){if(o.length)return!1}else if("function"==typeof i&&!Ht(o,i,s))return!1;return!(s&&!Mt(o,s))},Ee.prototype.isFootprintWithinConstraints=function(t,e){var n;for(n=0;n<e.length;n++)if(this.footprintContainsFootprint(e[n],t))return!0;return!1},Ee.prototype.constraintValToFootprints=function(t,e){var n;return"businessHours"===t?this.buildCurrentBusinessFootprints(e):"object"==typeof t?(n=this.parseEventDefToInstances(t),n?this.eventInstancesToFootprints(n):this.parseFootprints(t)):null!=t?(n=this.eventManager.getEventInstancesWithId(t),this.eventInstancesToFootprints(n)):void 0},Ee.prototype.eventInstancesToFootprints=function(t){return Nt(this.eventRangesToEventFootprints(Lt(t)))},Ee.prototype.collectOverlapEventFootprints=function(t,e){var n,i=[];for(n=0;n<t.length;n++)this.footprintsIntersect(e,t[n].componentFootprint)&&i.push(t[n]);return i},Ee.prototype.parseEventDefToInstances=function(t){var e=this.eventManager.currentPeriod,n=Pe.parse(t,new _e(this));return!!n&&(e?n.buildInstances(e.unzonedRange):[])},Ee.prototype.eventRangesToEventFootprints=function(t){var e,n=[];for(e=0;e<t.length;e++)n.push.apply(n,this.eventRangeToEventFootprints(t[e]));return n},Ee.prototype.eventRangeToEventFootprints=function(t){return[new Ue(new xe(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)]},Ee.prototype.parseFootprints=function(t){var e,n;return t.start&&(e=this.moment(t.start),e.isValid()||(e=null)),t.end&&(n=this.moment(t.end),n.isValid()||(n=null)),[new xe(new Me(e,n),e&&!e.hasTime()||n&&!n.hasTime())]},Ee.prototype.footprintContainsFootprint=function(t,e){return t.unzonedRange.containsRange(e.unzonedRange)},Ee.prototype.footprintsIntersect=function(t,e){return t.unzonedRange.intersectsWith(e.unzonedRange)},Ee.mixin({getEventSources:function(){return this.eventManager.otherSources.slice()},getEventSourceById:function(t){return this.eventManager.getSourceById(_e.normalizeId(t))},addEventSource:function(t){var e=qe.parse(t,this);e&&this.eventManager.addSource(e)},removeEventSources:function(t){var e,n,i=this.eventManager;if(null==t)this.eventManager.removeAllSources();else{for(e=i.multiQuerySources(t),i.freeze(),n=0;n<e.length;n++)i.removeSource(e[n]);i.thaw()}},removeEventSource:function(t){var e,n=this.eventManager,i=n.querySources(t);for(n.freeze(),e=0;e<i.length;e++)n.removeSource(i[e]);n.thaw()},
refetchEventSources:function(t){var e,n=this.eventManager,i=n.multiQuerySources(t);for(n.freeze(),e=0;e<i.length;e++)n.refetchSource(i[e]);n.thaw()},refetchEvents:function(){this.eventManager.refetchAllSources()},renderEvents:function(t,e){this.eventManager.freeze();for(var n=0;n<t.length;n++)this.renderEvent(t[n],e);this.eventManager.thaw()},renderEvent:function(t,e){var n=this.eventManager,i=Pe.parse(t,t.source||n.stickySource);i&&n.addEventDef(i,e)},removeEvents:function(t){var e,n,i,s=this.eventManager,r=s.getEventInstances(),o={};if(null==t)s.removeAllEventDefs();else{for(e=r.map(function(t){return t.toLegacy()}),e=xt(e,t),i=0;i<e.length;i++)n=this.eventManager.getEventDefByUid(e[i]._id),o[n.id]=!0;s.freeze();for(i in o)s.removeEventDefsById(i);s.thaw()}},clientEvents:function(t){return xt(this.eventManager.getEventInstances().map(function(t){return t.toLegacy()}),t)},updateEvents:function(t){this.eventManager.freeze();for(var e=0;e<t.length;e++)this.updateEvent(t[e]);this.eventManager.thaw()},updateEvent:function(t){var e,n,i=this.eventManager.getEventDefByUid(t._id);i instanceof ke&&(e=i.buildInstance(),n=Ge.createFromRawProps(e,t,null),this.eventManager.mutateEventsWithId(i.id,n))}}),Ee.defaults={titleRangeSeparator:" – ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},allDayText:"all-day",theme:!1,dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3},Ee.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},Ee.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var Te=Vt.locales={};Vt.datepickerLocale=function(e,n,i){var s=Te[e]||(Te[e]={});s.isRTL=i.isRTL,s.weekNumberTitle=i.weekHeader,t.each(Re,function(t,e){s[t]=e(i)}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},Vt.locale=function(e,i){var s,r;s=Te[e]||(Te[e]={}),i&&(s=Te[e]=n([s,i])),r=Ft(e),t.each(Ie,function(t,e){null==s[t]&&(s[t]=e(r,s))}),Ee.defaults.locale=e};var Re={buttonText:function(t){return{prev:et(t.prevText),next:et(t.nextText),today:et(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},Ie={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},mediumTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(t){return t.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}},He={smallDayDateFormat:function(t){return t.isRTL?"D dd":"dd D"},weekFormat:function(t){return t.isRTL?"w[ "+t.weekNumberTitle+"]":"["+t.weekNumberTitle+" ]w"},smallWeekFormat:function(t){return t.isRTL?"w["+t.weekNumberTitle+"]":"["+t.weekNumberTitle+"]w"}};Vt.locale("en",Ee.englishDefaults);var Me=Vt.UnzonedRange=ht.extend({startMs:null,endMs:null,isStart:!0,isEnd:!0,constructor:function(t,n){e.isMoment(t)&&(t=t.clone().stripZone()),e.isMoment(n)&&(n=n.clone().stripZone()),t&&(this.startMs=t.valueOf()),n&&(this.endMs=n.valueOf())},intersect:function(t){var e=this.startMs,n=this.endMs,i=null;return null!==t.startMs&&(e=null===e?t.startMs:Math.max(e,t.startMs)),null!==t.endMs&&(n=null===n?t.endMs:Math.min(n,t.endMs)),(null===e||null===n||e<n)&&(i=new Me(e,n),i.isStart=this.isStart&&e===this.startMs,i.isEnd=this.isEnd&&n===this.endMs),i},intersectsWith:function(t){return(null===this.endMs||null===t.startMs||this.endMs>t.startMs)&&(null===this.startMs||null===t.endMs||this.startMs<t.endMs)},containsRange:function(t){return(null===this.startMs||null!==t.startMs&&t.startMs>=this.startMs)&&(null===this.endMs||null!==t.endMs&&t.endMs<=this.endMs)},containsDate:function(t){var e=t.valueOf();return(null===this.startMs||e>=this.startMs)&&(null===this.endMs||e<this.endMs)},constrainDate:function(t){var e=t.valueOf();return null!==this.startMs&&e<this.startMs&&(e=this.startMs),null!==this.endMs&&e>=this.endMs&&(e=this.endMs-1),e},equals:function(t){return this.startMs===t.startMs&&this.endMs===t.endMs},clone:function(){var t=new Me(this.startMs,this.endMs);return t.isStart=this.isStart,t.isEnd=this.isEnd,t},getStart:function(){if(null!==this.startMs)return Vt.moment.utc(this.startMs).stripZone()},getEnd:function(){if(null!==this.endMs)return Vt.moment.utc(this.endMs).stripZone()}}),xe=Vt.ComponentFootprint=ht.extend({unzonedRange:null,isAllDay:!1,constructor:function(t,e){this.unzonedRange=t,this.isAllDay=e},toLegacy:function(t){return{start:t.msToMoment(this.unzonedRange.startMs,this.isAllDay),end:t.msToMoment(this.unzonedRange.endMs,this.isAllDay)}}}),ze=ht.extend(ee,ne,{currentPeriod:null,calendar:null,stickySource:null,otherSources:null,constructor:function(t){this.calendar=t,this.stickySource=new Ye(t),this.otherSources=[]},requestEvents:function(t,e,n,i){return!i&&this.currentPeriod&&this.currentPeriod.isWithinRange(t,e)&&n===this.currentPeriod.timezone||this.setPeriod(new Fe(t,e,n)),this.currentPeriod.whenReleased()},addSource:function(t){this.otherSources.push(t),this.currentPeriod&&this.currentPeriod.requestSource(t)},removeSource:function(t){K(this.otherSources,t),this.currentPeriod&&this.currentPeriod.purgeSource(t)},removeAllSources:function(){this.otherSources=[],this.currentPeriod&&this.currentPeriod.purgeAllSources()},refetchSource:function(t){var e=this.currentPeriod;e&&(e.freeze(),e.purgeSource(t),e.requestSource(t),e.thaw())},refetchAllSources:function(){var t=this.currentPeriod;t&&(t.freeze(),t.purgeAllSources(),t.requestSources(this.getSources()),t.thaw())},getSources:function(){return[this.stickySource].concat(this.otherSources)},multiQuerySources:function(e){e?t.isArray(e)||(e=[e]):e=[];var n,i=[];for(n=0;n<e.length;n++)i.push.apply(i,this.querySources(e[n]));return i},querySources:function(e){var n,i,s=this.otherSources;for(n=0;n<s.length;n++)if((i=s[n])===e)return[i];return(i=this.getSourceById(_e.normalizeId(e)))?[i]:(e=qe.parse(e,this.calendar),e?t.grep(s,function(t){return kt(e,t)}):void 0)},getSourceById:function(e){return t.grep(this.otherSources,function(t){return t.id&&t.id===e})[0]},setPeriod:function(t){this.currentPeriod&&(this.unbindPeriod(this.currentPeriod),this.currentPeriod=null),this.currentPeriod=t,this.bindPeriod(t),t.requestSources(this.getSources())},bindPeriod:function(t){this.listenTo(t,"release",function(t){this.trigger("release",t)})},unbindPeriod:function(t){this.stopListeningTo(t)},getEventDefByUid:function(t){if(this.currentPeriod)return this.currentPeriod.getEventDefByUid(t)},addEventDef:function(t,e){e&&this.stickySource.addEventDef(t),this.currentPeriod&&this.currentPeriod.addEventDef(t)},removeEventDefsById:function(t){this.getSources().forEach(function(e){e.removeEventDefsById(t)}),this.currentPeriod&&this.currentPeriod.removeEventDefsById(t)},removeAllEventDefs:function(){this.getSources().forEach(function(t){t.removeAllEventDefs()}),this.currentPeriod&&this.currentPeriod.removeAllEventDefs()},mutateEventsWithId:function(t,e){var n,i=this.currentPeriod,s=[];return i?(i.freeze(),n=i.getEventDefsById(t),n.forEach(function(t){i.removeEventDef(t),s.push(e.mutateSingle(t)),i.addEventDef(t)}),i.thaw(),function(){i.freeze();for(var t=0;t<n.length;t++)i.removeEventDef(n[t]),s[t](),i.addEventDef(n[t]);i.thaw()}):function(){}},buildMutatedEventInstanceGroup:function(t,e){var n,i,s=this.getEventDefsById(t),r=[];for(n=0;n<s.length;n++)(i=s[n].clone())instanceof ke&&(e.mutateSingle(i),r.push.apply(r,i.buildInstances()));return new Oe(r)},freeze:function(){this.currentPeriod&&this.currentPeriod.freeze()},thaw:function(){this.currentPeriod&&this.currentPeriod.thaw()}});["getEventDefsById","getEventInstances","getEventInstancesWithId","getEventInstancesWithoutId"].forEach(function(t){ze.prototype[t]=function(){var e=this.currentPeriod;return e?e[t].apply(e,arguments):[]}});var Fe=ht.extend(ee,{start:null,end:null,timezone:null,unzonedRange:null,requestsByUid:null,pendingCnt:0,freezeDepth:0,stuntedReleaseCnt:0,releaseCnt:0,eventDefsByUid:null,eventDefsById:null,eventInstanceGroupsById:null,constructor:function(t,e,n){this.start=t,this.end=e,this.timezone=n,this.unzonedRange=new Me(t.clone().stripZone(),e.clone().stripZone()),this.requestsByUid={},this.eventDefsByUid={},this.eventDefsById={},this.eventInstanceGroupsById={}},isWithinRange:function(t,e){return!t.isBefore(this.start)&&!e.isAfter(this.end)},requestSources:function(t){this.freeze();for(var e=0;e<t.length;e++)this.requestSource(t[e]);this.thaw()},requestSource:function(t){var e=this,n={source:t,status:"pending"};this.requestsByUid[t.uid]=n,this.pendingCnt+=1,t.fetch(this.start,this.end,this.timezone).then(function(t){"cancelled"!==n.status&&(n.status="completed",n.eventDefs=t,e.addEventDefs(t),e.pendingCnt--,e.tryRelease())},function(){"cancelled"!==n.status&&(n.status="failed",e.pendingCnt--,e.tryRelease())})},purgeSource:function(t){var e=this.requestsByUid[t.uid];e&&(delete this.requestsByUid[t.uid],"pending"===e.status?(e.status="cancelled",this.pendingCnt--,this.tryRelease()):"completed"===e.status&&e.eventDefs.forEach(this.removeEventDef.bind(this)))},purgeAllSources:function(){var t,e,n=this.requestsByUid,i=0;for(t in n)e=n[t],"pending"===e.status?e.status="cancelled":"completed"===e.status&&i++;this.requestsByUid={},this.pendingCnt=0,i&&this.removeAllEventDefs()},getEventDefByUid:function(t){return this.eventDefsByUid[t]},getEventDefsById:function(t){var e=this.eventDefsById[t];return e?e.slice():[]},addEventDefs:function(t){for(var e=0;e<t.length;e++)this.addEventDef(t[e])},addEventDef:function(t){var e,n=this.eventDefsById,i=t.id,s=n[i]||(n[i]=[]),r=t.buildInstances(this.unzonedRange);for(s.push(t),this.eventDefsByUid[t.uid]=t,e=0;e<r.length;e++)this.addEventInstance(r[e],i)},removeEventDefsById:function(t){var e=this;this.getEventDefsById(t).forEach(function(t){e.removeEventDef(t)})},removeAllEventDefs:function(){var e=t.isEmptyObject(this.eventDefsByUid);this.eventDefsByUid={},this.eventDefsById={},this.eventInstanceGroupsById={},e||this.tryRelease()},removeEventDef:function(t){var e=this.eventDefsById,n=e[t.id];delete this.eventDefsByUid[t.uid],n&&(K(n,t),n.length||delete e[t.id],this.removeEventInstancesForDef(t))},getEventInstances:function(){var t,e=this.eventInstanceGroupsById,n=[];for(t in e)n.push.apply(n,e[t].eventInstances);return n},getEventInstancesWithId:function(t){var e=this.eventInstanceGroupsById[t];return e?e.eventInstances.slice():[]},getEventInstancesWithoutId:function(t){var e,n=this.eventInstanceGroupsById,i=[];for(e in n)e!==t&&i.push.apply(i,n[e].eventInstances);return i},addEventInstance:function(t,e){var n=this.eventInstanceGroupsById;(n[e]||(n[e]=new Oe)).eventInstances.push(t),this.tryRelease()},removeEventInstancesForDef:function(t){var e,n=this.eventInstanceGroupsById,i=n[t.id];i&&(e=X(i.eventInstances,function(e){return e.def===t}),i.eventInstances.length||delete n[t.id],e&&this.tryRelease())},tryRelease:function(){this.pendingCnt||(this.freezeDepth?this.stuntedReleaseCnt++:this.release())},release:function(){this.releaseCnt++,this.trigger("release",this.eventInstanceGroupsById)},whenReleased:function(){var t=this;return this.releaseCnt?ae.resolve(this.eventInstanceGroupsById):ae.construct(function(e){t.one("release",e)})},freeze:function(){this.freezeDepth++||(this.stuntedReleaseCnt=0)},thaw:function(){--this.freezeDepth||!this.stuntedReleaseCnt||this.pendingCnt||this.release()}}),Pe={parse:function(t,n){return Y(t.start)||e.isDuration(t.start)||Y(t.end)||e.isDuration(t.end)?Ae.parse(t,n):ke.parse(t,n)}},Be=Vt.EventDef=ht.extend(ie,{source:null,id:null,rawId:null,uid:null,title:null,url:null,rendering:null,constraint:null,overlap:null,editable:null,startEditable:null,durationEditable:null,color:null,backgroundColor:null,borderColor:null,textColor:null,className:null,miscProps:null,constructor:function(t){this.source=t,this.className=[],this.miscProps={}},isAllDay:function(){},buildInstances:function(t){},clone:function(){var e=new this.constructor(this.source);return e.id=this.id,e.rawId=this.rawId,e.uid=this.uid,Be.copyVerbatimStandardProps(this,e),e.className=this.className,e.miscProps=t.extend({},this.miscProps),e},hasInverseRendering:function(){return"inverse-background"===this.getRendering()},hasBgRendering:function(){var t=this.getRendering();return"inverse-background"===t||"background"===t},getRendering:function(){return null!=this.rendering?this.rendering:this.source.rendering},getConstraint:function(){return null!=this.constraint?this.constraint:null!=this.source.constraint?this.source.constraint:this.source.calendar.opt("eventConstraint")},getOverlap:function(){return null!=this.overlap?this.overlap:null!=this.source.overlap?this.source.overlap:this.source.calendar.opt("eventOverlap")},isStartExplicitlyEditable:function(){return null!==this.startEditable?this.startEditable:this.source.startEditable},isDurationExplicitlyEditable:function(){return null!==this.durationEditable?this.durationEditable:this.source.durationEditable},isExplicitlyEditable:function(){return null!==this.editable?this.editable:this.source.editable},toLegacy:function(){var e=t.extend({},this.miscProps);return e._id=this.uid,e.source=this.source,e.className=this.className,e.allDay=this.isAllDay(),null!=this.rawId&&(e.id=this.rawId),Be.copyVerbatimStandardProps(this,e),e},applyManualRawProps:function(e){return null!=e.id?this.id=Be.normalizeId(this.rawId=e.id):this.id=Be.generateId(),null!=e._id?this.uid=String(e._id):this.uid=Be.generateId(),t.isArray(e.className)&&(this.className=e.className),"string"==typeof e.className&&(this.className=e.className.split(/\s+/)),!0},applyOtherRawProps:function(t){this.miscProps=t}});Be.allowRawProps=se,Be.copyVerbatimStandardProps=re,Be.uuid=0,Be.normalizeId=function(t){return String(t)},Be.generateId=function(){return"_fc"+Be.uuid++},Be.allowRawProps({_id:!1,id:!1,className:!1,source:!1,title:!0,url:!0,rendering:!0,constraint:!0,overlap:!0,editable:!0,startEditable:!0,durationEditable:!0,color:!0,backgroundColor:!0,borderColor:!0,textColor:!0}),Be.parse=function(t,e){var n=new this(e),i=e.calendar.opt("eventDataTransform"),s=e.eventDataTransform;return i&&(t=i(t)),s&&(t=s(t)),!!n.applyRawProps(t)&&n};var ke=Be.extend({dateProfile:null,buildInstances:function(){return[this.buildInstance()]},buildInstance:function(){return new Le(this,this.dateProfile)},isAllDay:function(){return this.dateProfile.isAllDay()},clone:function(){var t=Be.prototype.clone.call(this);return t.dateProfile=this.dateProfile,t},rezone:function(){var t=this.source.calendar,e=this.dateProfile;this.dateProfile=new Ne(t.moment(e.start),e.end?t.moment(e.end):null,t)},applyManualRawProps:function(t){var e=Be.prototype.applyManualRawProps.apply(this,arguments),n=Ne.parse(t,this.source);return!!n&&(this.dateProfile=n,null!=t.date&&(this.miscProps.date=t.date),e)}});ke.allowRawProps({start:!1,date:!1,end:!1,allDay:!1});var Ae=Be.extend({startTime:null,endTime:null,dowHash:null,isAllDay:function(){return!this.startTime&&!this.endTime},buildInstances:function(t){for(var e,n,i,s=this.source.calendar,r=t.getStart(),o=t.getEnd(),a=[];r.isBefore(o);)this.dowHash&&!this.dowHash[r.day()]||(e=s.applyTimezone(r),n=e.clone(),i=null,this.startTime?n.time(this.startTime):n.stripTime(),this.endTime&&(i=e.clone().time(this.endTime)),a.push(new Le(this,new Ne(n,i,s)))),r.add(1,"days");return a},setDow:function(t){this.dowHash||(this.dowHash={});for(var e=0;e<t.length;e++)this.dowHash[t[e]]=!0},clone:function(){var n=Be.prototype.clone.call(this);return n.startTime&&(n.startTime=e.duration(this.startTime)),n.endTime&&(n.endTime=e.duration(this.endTime)),this.dowHash&&(n.dowHash=t.extend({},this.dowHash)),n},applyRawProps:function(t){var n=Be.prototype.applyRawProps.apply(this,arguments);return t.start&&(this.startTime=e.duration(t.start)),t.end&&(this.endTime=e.duration(t.end)),t.dow&&this.setDow(t.dow),n}});Ae.allowRawProps({start:!1,end:!1,dow:!1});var Le=ht.extend({def:null,dateProfile:null,constructor:function(t,e){this.def=t,this.dateProfile=e},toLegacy:function(){var t=this.dateProfile,e=this.def.toLegacy();return e.start=t.start.clone(),e.end=t.end?t.end.clone():null,e}}),Oe=ht.extend({eventInstances:null,explicitEventDef:null,constructor:function(t){this.eventInstances=t||[]},getAllEventRanges:function(){return Lt(this.eventInstances)},sliceRenderRanges:function(t){return this.isInverse()?this.sliceInverseRenderRanges(t):this.sliceNormalRenderRanges(t)},sliceNormalRenderRanges:function(t){var e,n,i,s=this.eventInstances,r=[];for(e=0;e<s.length;e++)n=s[e],(i=n.dateProfile.unzonedRange.intersect(t))&&r.push(new Ve(i,n.def,n));return r},sliceInverseRenderRanges:function(t){var e=Ot(this.eventInstances),n=this.getEventDef();return e=Pt(e,t),e.map(function(t){return new Ve(t,n)})},isInverse:function(){return this.getEventDef().hasInverseRendering()},getEventDef:function(){return this.explicitEventDef||this.eventInstances[0].def}}),Ne=ht.extend({start:null,end:null,unzonedRange:null,constructor:function(t,e,n){this.start=t,this.end=e||null,this.unzonedRange=this.buildUnzonedRange(n)},isAllDay:function(){return!(this.start.hasTime()||this.end&&this.end.hasTime())},buildUnzonedRange:function(t){var e=this.start.clone().stripZone().valueOf(),n=this.getEnd(t).stripZone().valueOf();return new Me(e,n)},getEnd:function(t){return this.end?this.end.clone():t.getDefaultEventEnd(this.isAllDay(),this.start)}});Ne.parse=function(t,e){var n=t.start||t.date,i=t.end;if(!n)return!1;var s=e.calendar,r=s.moment(n),o=i?s.moment(i):null,a=t.allDay,l=s.opt("forceEventDuration");return!!r.isValid()&&(!o||o.isValid()&&o.isAfter(r)||(o=null),null==a&&null==(a=e.allDayDefault)&&(a=s.opt("allDayDefault")),!0===a?(r.stripTime(),o&&o.stripTime()):!1===a&&(r.hasTime()||r.time(0),o&&!o.hasTime()&&o.time(0)),!o&&l&&(o=s.getDefaultEventEnd(!r.hasTime(),r)),new Ne(r,o,s))};var Ve=ht.extend({unzonedRange:null,eventDef:null,eventInstance:null,constructor:function(t,e,n){this.unzonedRange=t,this.eventDef=e,n&&(this.eventInstance=n)}}),Ue=Vt.EventFootprint=ht.extend({componentFootprint:null,eventDef:null,eventInstance:null,constructor:function(t,e,n){this.componentFootprint=t,this.eventDef=e,n&&(this.eventInstance=n)},getEventLegacy:function(){return(this.eventInstance||this.eventDef).toLegacy()}}),Ge=Vt.EventDefMutation=ht.extend({dateMutation:null,rawProps:null,mutateSingle:function(t){var e;return this.dateMutation&&(e=t.dateProfile,t.dateProfile=this.dateMutation.buildNewDateProfile(e,t.source.calendar)),this.rawProps&&t.applyRawProps(this.rawProps),e?function(){t.dateProfile=e}:function(){}},setDateMutation:function(t){t&&!t.isEmpty()?this.dateMutation=t:this.dateMutation=null},isEmpty:function(){return!this.dateMutation}});Ge.createFromRawProps=function(t,e,n){var i,s,r,o,a=t.def,l={};for(i in e)"object"!=typeof e[i]&&"start"!==i&&"end"!==i&&"allDay"!==i&&"source"!==i&&"_id"!==i&&(l[i]=e[i]);return s=Ne.parse(e,a.source),s&&(r=We.createFromDiff(t.dateProfile,s,n)),o=new Ge,o.rawProps=l,r&&(o.dateMutation=r),o};var We=ht.extend({clearEnd:!1,forceTimed:!1,forceAllDay:!1,dateDelta:null,startDelta:null,endDelta:null,buildNewDateProfile:function(t,e){var n=t.start.clone(),i=null,s=!1;return!this.clearEnd&&t.end&&(i=t.end.clone()),this.forceTimed?(s=!0,n.hasTime()||n.time(0),i&&!i.hasTime()&&i.time(0)):this.forceAllDay&&(n.hasTime()&&n.stripTime(),i&&i.hasTime()&&i.stripTime()),this.dateDelta&&(s=!0,n.add(this.dateDelta),i&&i.add(this.dateDelta)),this.endDelta&&(s=!0,i||(i=e.getDefaultEventEnd(t.isAllDay(),n)),i.add(this.endDelta)),this.startDelta&&(s=!0,n.add(this.startDelta)),s&&(n=e.applyTimezone(n),i&&(i=e.applyTimezone(i))),!i&&e.opt("forceEventDuration")&&(i=e.getDefaultEventEnd(t.isAllDay(),n)),new Ne(n,i,e)},setDateDelta:function(t){t&&t.valueOf()?this.dateDelta=t:this.dateDelta=null},setStartDelta:function(t){t&&t.valueOf()?this.startDelta=t:this.startDelta=null},setEndDelta:function(t){t&&t.valueOf()?this.endDelta=t:this.endDelta=null},isEmpty:function(){return!(this.clearEnd||this.forceTimed||this.forceAllDay||this.dateDelta||this.startDelta||this.endDelta)}});We.createFromDiff=function(t,e,n){function i(t,i){return n?L(t,i,n):e.isAllDay()?A(t,i):k(t,i)}var s,r,o,a,l=t.end&&!e.end,u=t.isAllDay()&&!e.isAllDay(),c=!t.isAllDay()&&e.isAllDay();return s=i(e.start,t.start),e.end&&(r=i(e.unzonedRange.getEnd(),t.unzonedRange.getEnd()),o=r.subtract(s)),a=new We,a.clearEnd=l,a.forceTimed=u,a.forceAllDay=c,a.setDateDelta(s),a.setEndDelta(o),a};var _e=ht.extend(ie,{calendar:null,id:null,uid:null,color:null,backgroundColor:null,borderColor:null,textColor:null,className:null,editable:null,startEditable:null,durationEditable:null,rendering:null,overlap:null,constraint:null,allDayDefault:null,eventDataTransform:null,constructor:function(t){this.calendar=t,this.className=[],this.uid=String(_e.uuid++)},fetch:function(t,e,n){},removeEventDefsById:function(t){},removeAllEventDefs:function(){},getPrimitive:function(t){},parseEventDefs:function(t){var e,n,i=[];for(e=0;e<t.length;e++)(n=Pe.parse(t[e],this))&&i.push(n);return i},applyManualRawProps:function(e){return null!=e.id&&(this.id=_e.normalizeId(e.id)),t.isArray(e.className)?this.className=e.className:"string"==typeof e.className&&(this.className=e.className.split(/\s+/)),!0}});_e.allowRawProps=se,_e.uuid=0,_e.normalizeId=function(t){return t?String(t):null},_e.allowRawProps({id:!1,className:!1,color:!0,backgroundColor:!0,borderColor:!0,textColor:!0,editable:!0,startEditable:!0,durationEditable:!0,rendering:!0,overlap:!0,constraint:!0,allDayDefault:!0,eventDataTransform:!0}),_e.parse=function(t,e){var n=new this(e);return!("object"!=typeof t||!n.applyRawProps(t))&&n},Vt.EventSource=_e;var qe={sourceClasses:[],registerClass:function(t){this.sourceClasses.unshift(t)},parse:function(t,e){var n,i,s=this.sourceClasses;for(n=0;n<s.length;n++)if(i=s[n].parse(t,e))return i}};Vt.EventSourceParser=qe;var Ye=_e.extend({rawEventDefs:null,eventDefs:null,currentTimezone:null,constructor:function(t){_e.apply(this,arguments),this.eventDefs=[]},setRawEventDefs:function(t){this.rawEventDefs=t,this.eventDefs=this.parseEventDefs(t)},fetch:function(t,e,n){var i,s=this.eventDefs;if(null!==this.currentTimezone&&this.currentTimezone!==n)for(i=0;i<s.length;i++)s[i]instanceof ke&&s[i].rezone();return this.currentTimezone=n,ae.resolve(s)},addEventDef:function(t){this.eventDefs.push(t)},removeEventDefsById:function(t){return X(this.eventDefs,function(e){return e.id===t})},removeAllEventDefs:function(){this.eventDefs=[]},getPrimitive:function(){return this.rawEventDefs},applyManualRawProps:function(t){var e=_e.prototype.applyManualRawProps.apply(this,arguments);return this.setRawEventDefs(t.events),e}});Ye.allowRawProps({events:!1}),Ye.parse=function(e,n){var i;return t.isArray(e.events)?i=e:t.isArray(e)&&(i={events:e}),!!i&&_e.parse.call(this,i,n)},qe.registerClass(Ye),Vt.ArrayEventSource=Ye;var je=_e.extend({func:null,fetch:function(t,e,n){var i=this;return this.calendar.pushLoading(),ae.construct(function(s){i.func.call(this.calendar,t.clone(),e.clone(),n,function(t){i.calendar.popLoading(),s(i.parseEventDefs(t))})})},getPrimitive:function(){return this.func},applyManualRawProps:function(t){var e=_e.prototype.applyManualRawProps.apply(this,arguments);return this.func=t.events,e}});je.allowRawProps({events:!1}),je.parse=function(e,n){var i;return t.isFunction(e.events)?i=e:t.isFunction(e)&&(i={events:e}),!!i&&_e.parse.call(this,i,n)},qe.registerClass(je),Vt.FuncEventSource=je;var Ze=_e.extend({startParam:null,endParam:null,timezoneParam:null,ajaxSettings:null,fetch:function(e,n,i){var s=this,r=this.ajaxSettings,o=r.success,a=r.error,l=this.buildRequestParams(e,n,i);return this.calendar.pushLoading(),ae.construct(function(e,n){t.ajax(t.extend({},Ze.AJAX_DEFAULTS,r,{data:l,success:function(i){var r;s.calendar.popLoading(),i?(r=$(o,this,arguments),t.isArray(r)&&(i=r),e(s.parseEventDefs(i))):n()},error:function(){s.calendar.popLoading(),$(a,this,arguments),n()}}))})},buildRequestParams:function(e,n,i){var s,r,o,a,l=this.calendar,u=this.ajaxSettings,c={};return s=this.startParam,null==s&&(s=l.opt("startParam")),r=this.endParam,null==r&&(r=l.opt("endParam")),o=this.timezoneParam,null==o&&(o=l.opt("timezoneParam")),a=t.isFunction(u.data)?u.data():u.data||{},t.extend(c,a),c[s]=e.format(),c[r]=n.format(),i&&"local"!==i&&(c[o]=i),c},getPrimitive:function(){return this.ajaxSettings.url},applyOtherRawProps:function(t){_e.prototype.applyOtherRawProps.apply(this,arguments),this.ajaxSettings=t}});Ze.AJAX_DEFAULTS={dataType:"json",cache:!1},Ze.allowRawProps({startParam:!0,endParam:!0,timezoneParam:!0}),Ze.parse=function(t,e){var n;return"string"==typeof t.url?n=t:"string"==typeof t&&(n={url:t}),!!n&&_e.parse.call(this,n,e)},qe.registerClass(Ze),Vt.JsonFeedEventSource=Ze;var Qe=Vt.ThemeRegistry={themeClassHash:{},register:function(t,e){this.themeClassHash[t]=e},getThemeClass:function(t){return t?!0===t?Ke:this.themeClassHash[t]:Xe}},$e=Vt.Theme=ht.extend({classes:{},iconClasses:{},baseIconClass:"",iconOverrideOption:null,iconOverrideCustomButtonOption:null,iconOverridePrefix:"",constructor:function(t){this.optionsModel=t,this.processIconOverride()},processIconOverride:function(){this.iconOverrideOption&&this.setIconOverride(this.optionsModel.get(this.iconOverrideOption))},setIconOverride:function(e){var n,i;if(t.isPlainObject(e)){n=t.extend({},this.iconClasses);for(i in e)n[i]=this.applyIconOverridePrefix(e[i]);this.iconClasses=n}else!1===e&&(this.iconClasses={})},applyIconOverridePrefix:function(t){var e=this.iconOverridePrefix;return e&&0!==t.indexOf(e)&&(t=e+t),t},getClass:function(t){return this.classes[t]||""},getIconClass:function(t){var e=this.iconClasses[t];return e?this.baseIconClass+" "+e:""},getCustomButtonIconClass:function(t){var e;return this.iconOverrideCustomButtonOption&&(e=t[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(e):""}}),Xe=$e.extend({classes:{widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button",cornerLeft:"fc-corner-left",cornerRight:"fc-corner-right",stateDefault:"fc-state-default",stateActive:"fc-state-active",stateDisabled:"fc-state-disabled",stateHover:"fc-state-hover",stateDown:"fc-state-down",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},baseIconClass:"fc-icon",iconClasses:{close:"fc-icon-x",prev:"fc-icon-left-single-arrow",next:"fc-icon-right-single-arrow",prevYear:"fc-icon-left-double-arrow",nextYear:"fc-icon-right-double-arrow"},iconOverrideOption:"buttonIcons",iconOverrideCustomButtonOption:"icon",iconOverridePrefix:"fc-icon-"});Qe.register("standard",Xe);var Ke=$e.extend({classes:{widget:"ui-widget",widgetHeader:"ui-widget-header",widgetContent:"ui-widget-content",buttonGroup:"fc-button-group",button:"ui-button",cornerLeft:"ui-corner-left",cornerRight:"ui-corner-right",stateDefault:"ui-state-default",stateActive:"ui-state-active",stateDisabled:"ui-state-disabled",stateHover:"ui-state-hover",stateDown:"ui-state-down",today:"ui-state-highlight",popoverHeader:"ui-widget-header",popoverContent:"ui-widget-content",headerRow:"ui-widget-header",dayRow:"ui-widget-content",listView:"ui-widget-content"},baseIconClass:"ui-icon",iconClasses:{close:"ui-icon-closethick",prev:"ui-icon-circle-triangle-w",next:"ui-icon-circle-triangle-e",prevYear:"ui-icon-seek-prev",nextYear:"ui-icon-seek-next"},iconOverrideOption:"themeButtonIcons",iconOverrideCustomButtonOption:"themeIcon",iconOverridePrefix:"ui-icon-"});Qe.register("jquery-ui",Ke);var Je=$e.extend({classes:{widget:"fc-bootstrap3",tableGrid:"table-bordered",tableList:"table table-striped",buttonGroup:"btn-group",button:"btn btn-default",stateActive:"active",stateDisabled:"disabled",today:"alert alert-info",popover:"panel panel-default",popoverHeader:"panel-heading",popoverContent:"panel-body",headerRow:"panel-default",dayRow:"panel-default",listView:"panel panel-default"},baseIconClass:"glyphicon",iconClasses:{close:"glyphicon-remove",prev:"glyphicon-chevron-left",next:"glyphicon-chevron-right",prevYear:"glyphicon-backward",nextYear:"glyphicon-forward"},iconOverrideOption:"bootstrapGlyphicons",iconOverrideCustomButtonOption:"bootstrapGlyphicon",iconOverridePrefix:"glyphicon-"});Qe.register("bootstrap3",Je);var tn=Vt.BasicView=be.extend({scroller:null,dayGridClass:we,dayGrid:null,dayNumbersVisible:!1,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1,weekNumberWidth:null,headContainerEl:null,headRowEl:null,initialize:function(){this.dayGrid=this.instantiateDayGrid(),this.addChild(this.dayGrid),this.scroller=new Se({overflowX:"hidden",overflowY:"auto"})},instantiateDayGrid:function(){return new(this.dayGridClass.extend(en))(this)},buildRenderRange:function(t,e){var n=be.prototype.buildRenderRange.apply(this,arguments),i=this.calendar.msToUtcMoment(n.startMs,this.isRangeAllDay),s=this.calendar.msToUtcMoment(n.endMs,this.isRangeAllDay);return/^(year|month)$/.test(e)&&(i.startOf("week"),s.weekday()&&s.add(1,"week").startOf("week")),this.trimHiddenDays(new Me(i,s))},renderDates:function(){this.dayGrid.breakOnWeeks=/year|month|week/.test(this.currentRangeUnit),this.dayGrid.setRange(this.renderUnzonedRange),this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.opt("weekNumbers")&&(this.opt("weekNumbersWithinDays")?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0)),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.cellWeekNumbersVisible||this.colWeekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-day-grid-container"),n=t('<div class="fc-day-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.dayGrid.setElement(n),this.dayGrid.renderDates(this.hasRigidRows())},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),this.headRowEl=this.headContainerEl.find(".fc-row")},unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement(),this.scroller.destroy()},renderSkeletonHtml:function(){var t=this.calendar.theme;return'<table class="'+t.getClass("tableGrid")+'"><thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'"></td></tr></tbody></table>'},weekNumberStyleAttr:function(){
return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.colWeekNumbersVisible&&(this.weekNumberWidth=u(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,r,o=this.opt("eventLimit");this.scroller.clear(),s(this.headRowEl),this.dayGrid.removeSegPopover(),o&&"number"==typeof o&&this.dayGrid.limitRows(o),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),o&&"number"!=typeof o&&this.dayGrid.limitRows(o),e||(this.scroller.setHeight(n),r=this.scroller.getScrollbarWidths(),(r.left||r.right)&&(i(this.headRowEl,r),n=this.computeScrollerHeight(t),this.scroller.setHeight(n)),this.scroller.lockOverflow(r))},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el)},setGridHeight:function(t,e){e?l(this.dayGrid.rowEls):a(this.dayGrid.rowEls,t,!0)},computeInitialDateScroll:function(){return{top:0}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},renderEventsPayload:function(t){this.dayGrid.renderEventsPayload(t),this.updateHeight()}}),en={renderHeadIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<th class="fc-week-number '+t.calendar.theme.getClass("widgetHeader")+'" '+t.weekNumberStyleAttr()+"><span>"+tt(this.opt("weekNumberTitle"))+"</span></th>":""},renderNumberIntroHtml:function(t){var e=this.view,n=this.getCellDate(t,0);return e.colWeekNumbersVisible?'<td class="fc-week-number" '+e.weekNumberStyleAttr()+">"+e.buildGotoAnchorHtml({date:n,type:"week",forceOff:1===this.colCnt},n.format("w"))+"</td>":""},renderBgIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number '+t.calendar.theme.getClass("widgetContent")+'" '+t.weekNumberStyleAttr()+"></td>":""},renderIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+"></td>":""}},nn=Vt.MonthView=tn.extend({buildRenderRange:function(){var t,e=tn.prototype.buildRenderRange.apply(this,arguments),n=this.calendar.msToUtcMoment(e.startMs,this.isRangeAllDay),i=this.calendar.msToUtcMoment(e.endMs,this.isRangeAllDay);return this.isFixedWeeks()&&(t=Math.ceil(i.diff(n,"weeks",!0)),i.add(6-t,"weeks")),new Me(n,i)},setGridHeight:function(t,e){e&&(t*=this.rowCnt/6),a(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){return this.opt("fixedWeekCount")},isDateInOtherMonth:function(t){return t.month()!==e.utc(this.currentUnzonedRange.startMs).month()}});Ut.basic={class:tn},Ut.basicDay={type:"basic",duration:{days:1}},Ut.basicWeek={type:"basic",duration:{weeks:1}},Ut.month={class:nn,duration:{months:1},defaults:{fixedWeekCount:!0}};var sn=Vt.AgendaView=be.extend({scroller:null,timeGridClass:De,timeGrid:null,dayGridClass:we,dayGrid:null,axisWidth:null,headContainerEl:null,noScrollRowEls:null,bottomRuleEl:null,usesMinMaxTime:!0,initialize:function(){this.timeGrid=this.instantiateTimeGrid(),this.addChild(this.timeGrid),this.opt("allDaySlot")&&(this.dayGrid=this.instantiateDayGrid(),this.addChild(this.dayGrid)),this.scroller=new Se({overflowX:"hidden",overflowY:"auto"})},instantiateTimeGrid:function(){return new(this.timeGridClass.extend(rn))(this)},instantiateDayGrid:function(){return new(this.dayGridClass.extend(on))(this)},renderDates:function(){this.timeGrid.setRange(this.renderUnzonedRange),this.dayGrid&&this.dayGrid.setRange(this.renderUnzonedRange),this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-time-grid-container"),n=t('<div class="fc-time-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.timeGrid.setElement(n),this.timeGrid.renderDates(),this.bottomRuleEl=t('<hr class="fc-divider '+this.calendar.theme.getClass("widgetHeader")+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())},unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement()),this.scroller.destroy()},renderSkeletonHtml:function(){var t=this.calendar.theme;return'<table class="'+t.getClass("tableGrid")+'"><thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+t.getClass("widgetHeader")+'"/>':"")+"</td></tr></tbody></table>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},getNowIndicatorUnit:function(){return this.timeGrid.getNowIndicatorUnit()},updateSize:function(t){this.timeGrid.updateSize(t),be.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=u(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,r,o;this.bottomRuleEl.hide(),this.scroller.clear(),s(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.removeSegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=an),n&&this.dayGrid.limitRows(n)),e||(r=this.computeScrollerHeight(t),this.scroller.setHeight(r),o=this.scroller.getScrollbarWidths(),(o.left||o.right)&&(i(this.noScrollRowEls,o),r=this.computeScrollerHeight(t),this.scroller.setHeight(r)),this.scroller.lockOverflow(o),this.timeGrid.getTotalSlatHeight()<r&&this.bottomRuleEl.show())},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el)},computeInitialDateScroll:function(){var t=e.duration(this.opt("scrollTime")),n=this.timeGrid.computeTimeTop(t);return n=Math.ceil(n),n&&n++,{top:n}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},getHitFootprint:function(t){return t.component.getHitFootprint(t)},getHitEl:function(t){return t.component.getHitEl(t)},renderEventsPayload:function(t){var e,n,i={},s={};for(e in t)n=t[e],n.getEventDef().isAllDay()?i[e]=n:s[e]=n;this.timeGrid.renderEventsPayload(s),this.dayGrid&&this.dayGrid.renderEventsPayload(i),this.updateHeight()},renderDrag:function(t,e){if(t.length){if(!t[0].componentFootprint.isAllDay)return this.timeGrid.renderDrag(t,e);if(this.dayGrid)return this.dayGrid.renderDrag(t,e)}},renderSelectionFootprint:function(t){t.isAllDay?this.dayGrid&&this.dayGrid.renderSelectionFootprint(t):this.timeGrid.renderSelectionFootprint(t)}}),rn={renderHeadIntroHtml:function(){var t,e=this.view,n=e.calendar.msToUtcMoment(this.unzonedRange.startMs,!0);return this.opt("weekNumbers")?(t=n.format(this.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+e.calendar.theme.getClass("widgetHeader")+'" '+e.axisStyleAttr()+">"+e.buildGotoAnchorHtml({date:n,type:"week",forceOff:this.colCnt>1},tt(t))+"</th>"):'<th class="fc-axis '+e.calendar.theme.getClass("widgetHeader")+'" '+e.axisStyleAttr()+"></th>"},renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.calendar.theme.getClass("widgetContent")+'" '+t.axisStyleAttr()+"></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},on={renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.calendar.theme.getClass("widgetContent")+'" '+t.axisStyleAttr()+"><span>"+t.getAllDayHtml()+"</span></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},an=5,ln=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];Ut.agenda={class:sn,defaults:{allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0}},Ut.agendaDay={type:"agenda",duration:{days:1}},Ut.agendaWeek={type:"agenda",duration:{weeks:1}};var un=be.extend({grid:null,scroller:null,initialize:function(){this.grid=new cn(this),this.addChild(this.grid),this.scroller=new Se({overflowX:"hidden",overflowY:"auto"})},renderSkeleton:function(){this.el.addClass("fc-list-view "+this.calendar.theme.getClass("listView")),this.scroller.render(),this.scroller.el.appendTo(this.el),this.grid.setElement(this.scroller.scrollEl)},unrenderSkeleton:function(){this.scroller.destroy()},setHeight:function(t,e){this.scroller.setHeight(this.computeScrollerHeight(t))},computeScrollerHeight:function(t){return t-c(this.el,this.scroller.el)},renderDates:function(){this.grid.setRange(this.renderUnzonedRange)},isEventDefResizable:function(t){return!1},isEventDefDraggable:function(t){return!1}}),cn=me.extend({dayDates:null,dayRanges:null,segSelector:".fc-list-item",hasDayInteractions:!1,rangeUpdated:function(){for(var t=this.view.calendar,e=t.msToUtcMoment(this.unzonedRange.startMs,!0),n=t.msToUtcMoment(this.unzonedRange.endMs,!0),i=[],s=[];e<n;)i.push(e.clone()),s.push(new Me(e,e.clone().add(1,"day"))),e.add(1,"day");this.dayDates=i,this.dayRanges=s},componentFootprintToSegs:function(t){var e,n,i,s=this.view,r=this.dayRanges,o=[];for(e=0;e<r.length;e++)if((n=t.unzonedRange.intersect(r[e]))&&(i={startMs:n.startMs,endMs:n.endMs,isStart:n.isStart,isEnd:n.isEnd,dayIndex:e},o.push(i),!i.isEnd&&!t.isAllDay&&t.unzonedRange.endMs<r[e+1].startMs+s.nextDayThreshold)){i.endMs=t.unzonedRange.endMs,i.isEnd=!0;break}return o},computeEventTimeFormat:function(){return this.opt("mediumTimeFormat")},handleSegClick:function(e,n){var i;me.prototype.handleSegClick.apply(this,arguments),t(n.target).closest("a[href]").length||(i=e.footprint.eventDef.url)&&!n.isDefaultPrevented()&&(window.location.href=i)},renderFgSegs:function(t){return t=this.renderFgSegEls(t),t.length?this.renderSegList(t):this.renderEmptyMessage(),t},renderEmptyMessage:function(){this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+tt(this.opt("noEventsMessage"))+"</div></div></div>")},renderSegList:function(e){var n,i,s,r=this.groupSegsByDay(e),o=t('<table class="fc-list-table '+this.view.calendar.theme.getClass("tableList")+'"><tbody/></table>'),a=o.find("tbody");for(n=0;n<r.length;n++)if(i=r[n])for(a.append(this.dayHeaderHtml(this.dayDates[n])),this.sortEventSegs(i),s=0;s<i.length;s++)a.append(i[s].el);this.el.empty().append(o)},groupSegsByDay:function(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],(i[n.dayIndex]||(i[n.dayIndex]=[])).push(n);return i},dayHeaderHtml:function(t){var e=this.view,n=this.opt("listDayFormat"),i=this.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+t.format("YYYY-MM-DD")+'"><td class="'+e.calendar.theme.getClass("widgetHeader")+'" colspan="3">'+(n?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-main"},tt(t.format(n))):"")+(i?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-alt"},tt(t.format(i))):"")+"</td></tr>"},fgSegHtml:function(t){var e,n=this.view,i=n.calendar,s=i.theme,r=["fc-list-item"].concat(this.getSegCustomClasses(t)),o=this.getSegBackgroundColor(t),a=t.footprint,l=a.eventDef,u=a.componentFootprint,c=l.url;return e=u.isAllDay?n.getAllDayHtml():n.isMultiDayRange(u.unzonedRange)?t.isStart||t.isEnd?tt(this._getEventTimeText(i.msToMoment(t.startMs),i.msToMoment(t.endMs),u.isAllDay)):n.getAllDayHtml():tt(this.getEventTimeText(a)),c&&r.push("fc-has-url"),'<tr class="'+r.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+s.getClass("widgetContent")+'">'+(e||"")+"</td>":"")+'<td class="fc-list-item-marker '+s.getClass("widgetContent")+'"><span class="fc-event-dot"'+(o?' style="background-color:'+o+'"':"")+'></span></td><td class="fc-list-item-title '+s.getClass("widgetContent")+'"><a'+(c?' href="'+tt(c)+'"':"")+">"+tt(l.title||"")+"</a></td></tr>"}});return Ut.list={class:un,buttonTextKey:"list",defaults:{buttonText:"list",listDayFormat:"LL",noEventsMessage:"No events to display"}},Ut.listDay={type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}},Ut.listWeek={type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",listDayAltFormat:"LL"}},Ut.listMonth={type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}},Ut.listYear={type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}},Vt});
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();

/*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*
 Highcharts JS v6.0.3 (2017-11-14)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,N){"object"===typeof module&&module.exports?module.exports=S.document?N(S):N:S.Highcharts=N(S)})("undefined"!==typeof window?window:this,function(S){var N=function(){var a="undefined"===typeof S?window:S,D=a.document,B=a.navigator&&a.navigator.userAgent||"",G=D&&D.createElementNS&&!!D.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,p=/(edge|msie|trident)/i.test(B)&&!a.opera,g=/Firefox/.test(B),l=g&&4>parseInt(B.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,
!0):{product:"Highcharts",version:"6.0.3",deg2rad:2*Math.PI/360,doc:D,hasBidiBug:l,hasTouch:D&&void 0!==D.documentElement.ontouchstart,isMS:p,isWebKit:/AppleWebKit/.test(B),isFirefox:g,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(B),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var D=a.charts,B=a.doc,G=a.win;a.error=function(p,
g){p=a.isNumber(p)?"Highcharts error #"+p+": www.highcharts.com/errors/"+p:p;if(g)throw Error(p);G.console&&console.log(p)};a.Fx=function(a,g,l){this.options=g;this.elem=a;this.prop=l};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],l=[],r=this.now,n=a.length,w;if(1===r)l=this.toD;else if(n===g.length&&1>r)for(;n--;)w=parseFloat(a[n]),l[n]=isNaN(w)?g[n]:r*parseFloat(g[n]-w)+w;else l=g;this.elem.attr("d",l,null,!0)},update:function(){var a=this.elem,g=this.prop,l=this.now,r=
this.options.step;if(this[g+"Setter"])this[g+"Setter"]();else a.attr?a.element&&a.attr(g,l,null,!0):a.style[g]=l+this.unit;r&&r.call(a,l,this)},run:function(p,g,l){var r=this,n=r.options,w=function(a){return w.stopped?!1:r.step(a)},v=G.requestAnimationFrame||function(a){setTimeout(a,13)},e=function(){a.timers=a.grep(a.timers,function(a){return a()});a.timers.length&&v(e)};p===g?(delete n.curAnim[this.prop],n.complete&&0===a.keys(n.curAnim).length&&n.complete()):(this.startTime=+new Date,this.start=
p,this.end=g,this.unit=l,this.now=this.start,this.pos=0,w.elem=this.elem,w.prop=this.prop,w()&&1===a.timers.push(w)&&v(e))},step:function(p){var g=+new Date,l,r=this.options,n=this.elem,w=r.complete,v=r.duration,e=r.curAnim;n.attr&&!n.element?p=!1:p||g>=v+this.startTime?(this.now=this.end,this.pos=1,this.update(),l=e[this.prop]=!0,a.objectEach(e,function(a){!0!==a&&(l=!1)}),l&&w&&w.call(n),p=!1):(this.pos=r.easing((g-this.startTime)/v),this.now=this.start+(this.end-this.start)*this.pos,this.update(),
p=!0);return p},initPath:function(p,g,l){function r(a){var b,f;for(d=a.length;d--;)b="M"===a[d]||"L"===a[d],f=/[a-zA-Z]/.test(a[d+3]),b&&f&&a.splice(d+1,0,a[d+1],a[d+2],a[d+1],a[d+2])}function n(a,b){for(;a.length<f;){a[0]=b[f-a.length];var e=a.slice(0,c);[].splice.apply(a,[0,0].concat(e));y&&(e=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(e)),d--)}a[0]="M"}function w(a,d){for(var e=(f-a.length)/c;0<e&&e--;)b=a.slice().splice(a.length/H-c,c*H),b[0]=d[f-c-e*c],m&&(b[c-6]=b[c-2],b[c-5]=
b[c-1]),[].splice.apply(a,[a.length/H,0].concat(b)),y&&e--}g=g||"";var v,e=p.startX,h=p.endX,m=-1<g.indexOf("C"),c=m?7:3,f,b,d;g=g.split(" ");l=l.slice();var y=p.isArea,H=y?2:1,J;m&&(r(g),r(l));if(e&&h){for(d=0;d<e.length;d++)if(e[d]===h[0]){v=d;break}else if(e[0]===h[h.length-e.length+d]){v=d;J=!0;break}void 0===v&&(g=[])}g.length&&a.isNumber(v)&&(f=l.length+v*H*c,J?(n(g,l),w(l,g)):(n(l,g),w(g,l)));return[g,l]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,
a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,g){var l;a||(a={});for(l in g)a[l]=g[l];return a};a.merge=function(){var p,g=arguments,l,r={},n=function(l,v){"object"!==typeof l&&(l={});a.objectEach(v,function(e,h){!a.isObject(e,!0)||a.isClass(e)||a.isDOMElement(e)?l[h]=v[h]:l[h]=n(l[h]||{},e)});return l};!0===g[0]&&(r=g[1],g=Array.prototype.slice.call(g,2));l=g.length;for(p=0;p<l;p++)r=n(r,g[p]);return r};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=
function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(p,g){return!!p&&"object"===typeof p&&(!g||!a.isArray(p))};a.isDOMElement=function(p){return a.isObject(p)&&"number"===typeof p.nodeType};a.isClass=function(p){var g=p&&p.constructor;return!(!a.isObject(p,!0)||a.isDOMElement(p)||!g||!g.name||"Object"===g.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,g){for(var l=a.length;l--;)if(a[l]===g){a.splice(l,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(p,g,l){var r;a.isString(g)?a.defined(l)?p.setAttribute(g,l):p&&p.getAttribute&&(r=p.getAttribute(g)):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,l){p.setAttribute(l,a)});return r};a.splat=function(p){return a.isArray(p)?p:[p]};a.syncTimeout=function(a,g,l){if(g)return setTimeout(a,g,l);a.call(0,l)};a.pick=function(){var a=arguments,g,l,r=a.length;for(g=
0;g<r;g++)if(l=a[g],void 0!==l&&null!==l)return l};a.css=function(p,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(p.style,g)};a.createElement=function(p,g,l,r,n){p=B.createElement(p);var w=a.css;g&&a.extend(p,g);n&&w(p,{padding:0,border:"none",margin:0});l&&w(p,l);r&&r.appendChild(p);return p};a.extendClass=function(p,g){var l=function(){};l.prototype=new p;a.extend(l.prototype,g);return l};a.pad=function(a,g,l){return Array((g||2)+1-String(a).length).join(l||
0)+a};a.relativeLength=function(a,g,l){return/%$/.test(a)?g*parseFloat(a)/100+(l||0):parseFloat(a)};a.wrap=function(a,g,l){var r=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),g=arguments,v=this;v.proceed=function(){r.apply(v,arguments.length?arguments:g)};a.unshift(r);a=l.apply(this,a);v.proceed=null;return a}};a.getTZOffset=function(p){var g=a.Date;return 6E4*(g.hcGetTimezoneOffset&&g.hcGetTimezoneOffset(p)||g.hcTimezoneOffset||0)};a.dateFormat=function(p,g,l){if(!a.defined(g)||
isNaN(g))return a.defaultOptions.lang.invalidDate||"";p=a.pick(p,"%Y-%m-%d %H:%M:%S");var r=a.Date,n=new r(g-a.getTZOffset(g)),w=n[r.hcGetHours](),v=n[r.hcGetDay](),e=n[r.hcGetDate](),h=n[r.hcGetMonth](),m=n[r.hcGetFullYear](),c=a.defaultOptions.lang,f=c.weekdays,b=c.shortWeekdays,d=a.pad,r=a.extend({a:b?b[v]:f[v].substr(0,3),A:f[v],d:d(e),e:d(e,2," "),w:v,b:c.shortMonths[h],B:c.months[h],m:d(h+1),y:m.toString().substr(2,2),Y:m,H:d(w),k:w,I:d(w%12||12),l:w%12||12,M:d(n[r.hcGetMinutes]()),p:12>w?"AM":
"PM",P:12>w?"am":"pm",S:d(n.getSeconds()),L:d(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(r,function(a,b){for(;-1!==p.indexOf("%"+b);)p=p.replace("%"+b,"function"===typeof a?a(g):a)});return l?p.substr(0,1).toUpperCase()+p.substr(1):p};a.formatSingle=function(p,g){var l=/\.([0-9])/,r=a.defaultOptions.lang;/f$/.test(p)?(l=(l=p.match(l))?l[1]:-1,null!==g&&(g=a.numberFormat(g,l,r.decimalPoint,-1<p.indexOf(",")?r.thousandsSep:""))):g=a.dateFormat(p,g);return g};a.format=function(p,g){for(var l=
"{",r=!1,n,w,v,e,h=[],m;p;){l=p.indexOf(l);if(-1===l)break;n=p.slice(0,l);if(r){n=n.split(":");w=n.shift().split(".");e=w.length;m=g;for(v=0;v<e;v++)m&&(m=m[w[v]]);n.length&&(m=a.formatSingle(n.join(":"),m));h.push(m)}else h.push(n);p=p.slice(l+1);l=(r=!r)?"}":"{"}h.push(p);return h.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(p,g,l,r,n){var w,v=p;l=a.pick(l,1);w=p/l;g||(g=n?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],
!1===r&&(1===l?g=a.grep(g,function(a){return 0===a%1}):.1>=l&&(g=[1/l])));for(r=0;r<g.length&&!(v=g[r],n&&v*l>=p||!n&&w<=(g[r]+(g[r+1]||g[r]))/2);r++);return v=a.correctFloat(v*l,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,g){var l=a.length,r,n;for(n=0;n<l;n++)a[n].safeI=n;a.sort(function(a,n){r=g(a,n);return 0===r?a.safeI-n.safeI:r});for(n=0;n<l;n++)delete a[n].safeI};a.arrayMin=function(a){for(var g=a.length,l=a[0];g--;)a[g]<l&&(l=a[g]);return l};a.arrayMax=function(a){for(var g=
a.length,l=a[0];g--;)a[g]>l&&(l=a[g]);return l};a.destroyObjectProperties=function(p,g){a.objectEach(p,function(a,r){a&&a!==g&&a.destroy&&a.destroy();delete p[r]})};a.discardElement=function(p){var g=a.garbageBin;g||(g=a.createElement("div"));p&&g.appendChild(p);g.innerHTML=""};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(p,g){g.renderer.globalAnimation=a.pick(p,g.options.chart.animation,!0)};a.animObject=function(p){return a.isObject(p)?a.merge(p):
{duration:p?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(p,g,l,r){p=+p||0;g=+g;var n=a.defaultOptions.lang,w=(p.toString().split(".")[1]||"").split("e")[0].length,v,e,h=p.toString().split("e");-1===g?g=Math.min(w,20):a.isNumber(g)||(g=2);e=(Math.abs(h[1]?h[0]:p)+Math.pow(10,-Math.max(g,w)-1)).toFixed(g);w=String(a.pInt(e));v=3<w.length?w.length%3:0;l=a.pick(l,n.decimalPoint);r=a.pick(r,n.thousandsSep);
p=(0>p?"-":"")+(v?w.substr(0,v)+r:"");p+=w.substr(v).replace(/(\d{3})(?=\d)/g,"$1"+r);g&&(p+=l+e.slice(-g));h[1]&&(p+="e"+h[1]);return p};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(p,g,l){if("width"===g)return Math.min(p.offsetWidth,p.scrollWidth)-a.getStyle(p,"padding-left")-a.getStyle(p,"padding-right");if("height"===g)return Math.min(p.offsetHeight,p.scrollHeight)-a.getStyle(p,"padding-top")-a.getStyle(p,"padding-bottom");G.getComputedStyle||a.error(27,
!0);if(p=G.getComputedStyle(p,void 0))p=p.getPropertyValue(g),a.pick(l,"opacity"!==g)&&(p=a.pInt(p));return p};a.inArray=function(p,g){return(a.indexOfPolyfill||Array.prototype.indexOf).call(g,p)};a.grep=function(p,g){return(a.filterPolyfill||Array.prototype.filter).call(p,g)};a.find=Array.prototype.find?function(a,g){return a.find(g)}:function(a,g){var l,r=a.length;for(l=0;l<r;l++)if(g(a[l],l))return a[l]};a.map=function(a,g){for(var l=[],r=0,n=a.length;r<n;r++)l[r]=g.call(a[r],a[r],r,a);return l};
a.keys=function(p){return(a.keysPolyfill||Object.keys).call(void 0,p)};a.reduce=function(p,g,l){return(a.reducePolyfill||Array.prototype.reduce).call(p,g,l)};a.offset=function(a){var g=B.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(G.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};a.stop=function(p,g){for(var l=a.timers.length;l--;)a.timers[l].elem!==p||g&&g!==a.timers[l].prop||(a.timers[l].stopped=
!0)};a.each=function(p,g,l){return(a.forEachPolyfill||Array.prototype.forEach).call(p,g,l)};a.objectEach=function(a,g,l){for(var r in a)a.hasOwnProperty(r)&&g.call(l,a[r],r,a)};a.addEvent=function(p,g,l){var r,n,w=p.addEventListener||a.addEventListenerPolyfill;p.hcEvents&&!p.hasOwnProperty("hcEvents")&&(n={},a.objectEach(p.hcEvents,function(a,e){n[e]=a.slice(0)}),p.hcEvents=n);r=p.hcEvents=p.hcEvents||{};w&&w.call(p,g,l,!1);r[g]||(r[g]=[]);r[g].push(l);return function(){a.removeEvent(p,g,l)}};a.removeEvent=
function(p,g,l){function r(e,m){var c=p.removeEventListener||a.removeEventListenerPolyfill;c&&c.call(p,e,m,!1)}function n(){var e,m;p.nodeName&&(g?(e={},e[g]=!0):e=v,a.objectEach(e,function(a,f){if(v[f])for(m=v[f].length;m--;)r(f,v[f][m])}))}var w,v=p.hcEvents,e;v&&(g?(w=v[g]||[],l?(e=a.inArray(l,w),-1<e&&(w.splice(e,1),v[g]=w),r(g,l)):(n(),v[g]=[])):(n(),p.hcEvents={}))};a.fireEvent=function(p,g,l,r){var n;n=p.hcEvents;var w,v;l=l||{};if(B.createEvent&&(p.dispatchEvent||p.fireEvent))n=B.createEvent("Events"),
n.initEvent(g,!0,!0),a.extend(n,l),p.dispatchEvent?p.dispatchEvent(n):p.fireEvent(g,n);else if(n)for(n=n[g]||[],w=n.length,l.target||a.extend(l,{preventDefault:function(){l.defaultPrevented=!0},target:p,type:g}),g=0;g<w;g++)(v=n[g])&&!1===v.call(p,l)&&l.preventDefault();r&&!l.defaultPrevented&&r(l)};a.animate=function(p,g,l){var r,n="",w,v,e;a.isObject(l)||(e=arguments,l={duration:e[2],easing:e[3],complete:e[4]});a.isNumber(l.duration)||(l.duration=400);l.easing="function"===typeof l.easing?l.easing:
Math[l.easing]||Math.easeInOutSine;l.curAnim=a.merge(g);a.objectEach(g,function(e,m){a.stop(p,m);v=new a.Fx(p,l,m);w=null;"d"===m?(v.paths=v.initPath(p,p.d,g.d),v.toD=g.d,r=0,w=1):p.attr?r=p.attr(m):(r=parseFloat(a.getStyle(p,m))||0,"opacity"!==m&&(n="px"));w||(w=e);w&&w.match&&w.match("px")&&(w=w.replace(/px/g,""));v.run(r,w,n)})};a.seriesType=function(p,g,l,r,n){var w=a.getOptions(),v=a.seriesTypes;w.plotOptions[p]=a.merge(w.plotOptions[g],l);v[p]=a.extendClass(v[g]||function(){},r);v[p].prototype.type=
p;n&&(v[p].prototype.pointClass=a.extendClass(a.Point,n));return v[p]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return"highcharts-"+a+"-"+g++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var p=[].slice.call(arguments);if(this[0])return p[0]?(new (a[a.isString(p[0])?p.shift():"Chart"])(this[0],p[0],p[1]),this):D[a.attr(this[0],"data-highcharts-chart")]})})(N);(function(a){var D=a.each,B=a.isNumber,G=a.map,p=a.merge,g=a.pInt;a.Color=function(l){if(!(this instanceof
a.Color))return new a.Color(l);this.init(l)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(l){var g,n,w,v;if((this.input=l=this.names[l&&
l.toLowerCase?l.toLowerCase():""]||l)&&l.stops)this.stops=G(l.stops,function(e){return new a.Color(e[1])});else if(l&&l.charAt&&"#"===l.charAt()&&(g=l.length,l=parseInt(l.substr(1),16),7===g?n=[(l&16711680)>>16,(l&65280)>>8,l&255,1]:4===g&&(n=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])),!n)for(w=this.parsers.length;w--&&!n;)v=this.parsers[w],(g=v.regex.exec(l))&&(n=v.parse(g));this.rgba=n||[]},get:function(a){var l=this.input,n=this.rgba,g;this.stops?(g=p(l),g.stops=[].concat(g.stops),
D(this.stops,function(n,e){g.stops[e]=[g.stops[e][0],n.get(a)]})):g=n&&B(n[0])?"rgb"===a||!a&&1===n[3]?"rgb("+n[0]+","+n[1]+","+n[2]+")":"a"===a?n[3]:"rgba("+n.join(",")+")":l;return g},brighten:function(a){var l,n=this.rgba;if(this.stops)D(this.stops,function(n){n.brighten(a)});else if(B(a)&&0!==a)for(l=0;3>l;l++)n[l]+=g(255*a),0>n[l]&&(n[l]=0),255<n[l]&&(n[l]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,g){var n=this.rgba,l=a.rgba;l.length&&n&&n.length?
(a=1!==l[3]||1!==n[3],g=(a?"rgba(":"rgb(")+Math.round(l[0]+(n[0]-l[0])*(1-g))+","+Math.round(l[1]+(n[1]-l[1])*(1-g))+","+Math.round(l[2]+(n[2]-l[2])*(1-g))+(a?","+(l[3]+(n[3]-l[3])*(1-g)):"")+")"):g=a.input||"none";return g}};a.color=function(g){return new a.Color(g)}})(N);(function(a){var D,B,G=a.addEvent,p=a.animate,g=a.attr,l=a.charts,r=a.color,n=a.css,w=a.createElement,v=a.defined,e=a.deg2rad,h=a.destroyObjectProperties,m=a.doc,c=a.each,f=a.extend,b=a.erase,d=a.grep,y=a.hasTouch,H=a.inArray,J=
a.isArray,t=a.isFirefox,K=a.isMS,x=a.isObject,C=a.isString,L=a.isWebKit,q=a.merge,A=a.noop,E=a.objectEach,F=a.pick,k=a.pInt,u=a.removeEvent,R=a.stop,M=a.svg,P=a.SVG_NS,I=a.symbolSizes,Q=a.win;D=a.SVGElement=function(){return this};f(D.prototype,{opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,k){this.element="span"===k?w(k):m.createElementNS(this.SVG_NS,k);this.renderer=
a},animate:function(z,k,b){k=a.animObject(F(k,this.renderer.globalAnimation,!0));0!==k.duration?(b&&(k.complete=b),p(this,z,k)):(this.attr(z,null,b),k.step&&k.step.call(this));return this},colorGradient:function(z,k,b){var u=this.renderer,f,O,d,e,y,m,h,M,A,I,x=[],t;z.radialGradient?O="radialGradient":z.linearGradient&&(O="linearGradient");O&&(d=z[O],y=u.gradients,h=z.stops,I=b.radialReference,J(d)&&(z[O]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===O&&I&&
!v(d.gradientUnits)&&(e=d,d=q(d,u.getRadialAttr(I,e),{gradientUnits:"userSpaceOnUse"})),E(d,function(a,z){"id"!==z&&x.push(z,a)}),E(h,function(a){x.push(a)}),x=x.join(","),y[x]?I=y[x].attr("id"):(d.id=I=a.uniqueKey(),y[x]=m=u.createElement(O).attr(d).add(u.defs),m.radAttr=e,m.stops=[],c(h,function(z){0===z[1].indexOf("rgba")?(f=a.color(z[1]),M=f.get("rgb"),A=f.get("a")):(M=z[1],A=1);z=u.createElement("stop").attr({offset:z[0],"stop-color":M,"stop-opacity":A}).add(m);m.stops.push(z)})),t="url("+u.url+
"#"+I+")",b.setAttribute(k,t),b.gradient=x,z.toString=function(){return t})},applyTextOutline:function(z){var k=this.element,u,f,d,q,e;-1!==z.indexOf("contrast")&&(z=z.replace(/contrast/g,this.renderer.getContrast(k.style.fill)));z=z.split(" ");f=z[z.length-1];if((d=z[0])&&"none"!==d&&a.svg){this.fakeTS=!0;z=[].slice.call(k.getElementsByTagName("tspan"));this.ySetter=this.xSetter;d=d.replace(/(^[\d\.]+)(.*?)$/g,function(a,z,k){return 2*z+k});for(e=z.length;e--;)u=z[e],"highcharts-text-outline"===
u.getAttribute("class")&&b(z,k.removeChild(u));q=k.firstChild;c(z,function(a,z){0===z&&(a.setAttribute("x",k.getAttribute("x")),z=k.getAttribute("y"),a.setAttribute("y",z||0),null===z&&k.setAttribute("y",0));a=a.cloneNode(1);g(a,{"class":"highcharts-text-outline",fill:f,stroke:f,"stroke-width":d,"stroke-linejoin":"round"});k.insertBefore(a,q)})}},attr:function(a,k,b,u){var z,f=this.element,d,c=this,O,q;"string"===typeof a&&void 0!==k&&(z=a,a={},a[z]=k);"string"===typeof a?c=(this[a+"Getter"]||this._defaultGetter).call(this,
a,f):(E(a,function(z,k){O=!1;u||R(this,k);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(k)&&(d||(this.symbolAttr(a),d=!0),O=!0);!this.rotation||"x"!==k&&"y"!==k||(this.doTransform=!0);O||(q=this[k+"Setter"]||this._defaultSetter,q.call(this,z,k,f),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k)&&this.updateShadows(k,z,q))},this),this.afterSetters());b&&b();return c},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=
!1)},updateShadows:function(a,k,b){for(var z=this.shadows,u=z.length;u--;)b.call(z[u],"height"===a?Math.max(k-(z[u].cutHeight||0),0):"d"===a?this.d:k,a,z[u])},addClass:function(a,k){var z=this.attr("class")||"";-1===z.indexOf(a)&&(k||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==H(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var z=
this;c("x y r start end width height innerR anchorX anchorY".split(" "),function(k){z[k]=F(a[k],z[k])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,k){var z=this,b={},u;k=k||a.strokeWidth||0;u=Math.round(k)%2/2;a.x=Math.floor(a.x||z.x||0)+u;a.y=Math.floor(a.y||z.y||0)+u;a.width=Math.floor((a.width||z.width||0)-2*u);a.height=Math.floor((a.height||z.height||0)-
2*u);v(a.strokeWidth)&&(a.strokeWidth=k);E(a,function(a,k){z[k]!==a&&(z[k]=b[k]=a)});return b},css:function(a){var z=this.styles,b={},u=this.element,d,c="",q,e=!z,y=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);z&&E(a,function(a,k){a!==z[k]&&(b[k]=a,e=!0)});e&&(z&&(a=f(z,b)),d=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===u.nodeName.toLowerCase()&&k(a.width),this.styles=a,d&&!M&&this.renderer.forExport&&delete a.width,K&&!M?n(this.element,a):(q=function(a,z){return"-"+
z.toLowerCase()},E(a,function(a,z){-1===H(z,y)&&(c+=z.replace(/([A-Z])/g,q)+":"+a+";")}),c&&g(u,"style",c)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,k){var z=this,b=z.element;y&&"click"===a?(b.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();k.call(b,a)},b.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||
1100<Date.now()-(z.touchEventFired||0))&&k.call(b,a)}):b["on"+a]=k;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,k){return this.attr({translateX:a,translateY:k})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,k=this.translateY||0,b=this.scaleX,
u=this.scaleY,f=this.inverted,d=this.rotation,c=this.matrix,q=this.element;f&&(a+=this.width,k+=this.height);a=["translate("+a+","+k+")"];v(c)&&a.push("matrix("+c.join(",")+")");f?a.push("rotate(90) scale(-1,1)"):d&&a.push("rotate("+d+" "+F(this.rotationOriginX,q.getAttribute("x"),0)+" "+F(this.rotationOriginY,q.getAttribute("y")||0)+")");(v(b)||v(u))&&a.push("scale("+F(b,1)+" "+F(u,1)+")");a.length&&q.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,k,u){var z,f,d,c,q={};f=this.renderer;d=f.alignedObjects;var e,O;if(a){if(this.alignOptions=a,this.alignByTranslate=k,!u||C(u))this.alignTo=z=u||"renderer",b(d,this),d.push(this),u=null}else a=this.alignOptions,k=this.alignByTranslate,z=this.alignTo;u=F(u,f[z],f);z=a.align;f=a.verticalAlign;d=(u.x||0)+(a.x||0);c=(u.y||0)+(a.y||0);"right"===z?e=1:"center"===z&&(e=2);e&&(d+=(u.width-(a.width||0))/e);q[k?"translateX":"x"]=Math.round(d);"bottom"===f?O=1:"middle"===f&&(O=
2);O&&(c+=(u.height-(a.height||0))/O);q[k?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](q);this.placed=!0;this.alignAttr=q;return this},getBBox:function(a,k){var z,b=this.renderer,u,d=this.element,q=this.styles,O,y=this.textStr,m,h=b.cache,M=b.cacheKeys,A;k=F(k,this.rotation);u=k*e;O=q&&q.fontSize;v(y)&&(A=y.toString(),-1===A.indexOf("\x3c")&&(A=A.replace(/[0-9]/g,"0")),A+=["",k||0,O,q&&q.width,q&&q.textOverflow].join());A&&!a&&(z=h[A]);if(!z){if(d.namespaceURI===this.SVG_NS||
b.forExport){try{(m=this.fakeTS&&function(a){c(d.querySelectorAll(".highcharts-text-outline"),function(z){z.style.display=a})})&&m("none"),z=d.getBBox?f({},d.getBBox()):{width:d.offsetWidth,height:d.offsetHeight},m&&m("")}catch(W){}if(!z||0>z.width)z={width:0,height:0}}else z=this.htmlGetBBox();b.isSVG&&(a=z.width,b=z.height,q&&"11px"===q.fontSize&&17===Math.round(b)&&(z.height=b=14),k&&(z.width=Math.abs(b*Math.sin(u))+Math.abs(a*Math.cos(u)),z.height=Math.abs(b*Math.cos(u))+Math.abs(a*Math.sin(u))));
if(A&&0<z.height){for(;250<M.length;)delete h[M.shift()];h[A]||M.push(A);h[A]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var z=this;z.animate({opacity:0},{duration:a||150,complete:function(){z.attr({y:-9999})}})},add:function(a){var z=this.renderer,k=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&z.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:z.box).appendChild(k);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var z=a.parentNode;z&&z.removeChild(a)},destroy:function(){var a=this,k=a.element||{},u=a.renderer.isSVG&&"SPAN"===k.nodeName&&a.parentGroup,f=k.ownerSVGElement;k.onclick=k.onmouseout=k.onmouseover=k.onmousemove=k.point=null;R(a);a.clipPath&&f&&(c(f.querySelectorAll("[clip-path],[CLIP-PATH]"),function(k){k.getAttribute("clip-path").match(RegExp('[("]#'+
a.clipPath.element.id+'[)"]'))&&k.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(k);for(a.destroyShadows();u&&u.div&&0===u.div.childNodes.length;)k=u.parentGroup,a.safeRemoveChild(u.div),delete u.div,u=k;a.alignTo&&b(a.renderer.alignedObjects,a);E(a,function(k,z){delete a[z]});return null},shadow:function(a,k,b){var z=[],u,f,d=this.element,c,q,e,y;if(!a)this.destroyShadows();else if(!this.shadows){q=
F(a.width,3);e=(a.opacity||.15)/q;y=this.parentInverted?"(-1,-1)":"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(u=1;u<=q;u++)f=d.cloneNode(0),c=2*q+1-2*u,g(f,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":e*u,"stroke-width":c,transform:"translate"+y,fill:"none"}),b&&(g(f,"height",Math.max(g(f,"height")-c,0)),f.cutHeight=c),k?k.element.appendChild(f):d.parentNode&&d.parentNode.insertBefore(f,d),z.push(f);this.shadows=z}return this},destroyShadows:function(){c(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=F(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,k,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[k]!==a&&(b.setAttribute(k,a),this[k]=a)},dashstyleSetter:function(a){var b,u=this["stroke-width"];"inherit"===u&&(u=1);if(a=
a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=k(a[b])*u;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,
k,b){this[k]=a;b.setAttribute(k,a)},titleSetter:function(a){var k=this.element.getElementsByTagName("title")[0];k||(k=m.createElementNS(this.SVG_NS,"title"),this.element.appendChild(k));k.firstChild&&k.removeChild(k.firstChild);k.appendChild(m.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,k,b){"string"===typeof a?b.setAttribute(k,a):a&&this.colorGradient(a,
k,b)},visibilitySetter:function(a,k,b){"inherit"===a?b.removeAttribute(k):this[k]!==a&&b.setAttribute(k,a);this[k]=a},zIndexSetter:function(a,b){var u=this.renderer,z=this.parentGroup,f=(z||u).element||u.box,d,c=this.element,q,e,u=f===u.box;d=this.added;var y;v(a)&&(c.zIndex=a,a=+a,this[b]===a&&(d=!1),this[b]=a);if(d){(a=this.zIndex)&&z&&(z.handleZ=!0);b=f.childNodes;for(y=b.length-1;0<=y&&!q;y--)if(z=b[y],d=z.zIndex,e=!v(d),z!==c)if(0>a&&e&&!u&&!y)f.insertBefore(c,b[y]),q=!0;else if(k(d)<=a||e&&
(!v(a)||0<=a))f.insertBefore(c,b[y+1]||null),q=!0;q||(f.insertBefore(c,b[u?3:0]||null),q=!0)}return q},_defaultSetter:function(a,k,b){b.setAttribute(k,a)}});D.prototype.yGetter=D.prototype.xGetter;D.prototype.translateXSetter=D.prototype.translateYSetter=D.prototype.rotationSetter=D.prototype.verticalAlignSetter=D.prototype.rotationOriginXSetter=D.prototype.rotationOriginYSetter=D.prototype.scaleXSetter=D.prototype.scaleYSetter=D.prototype.matrixSetter=function(a,k){this[k]=a;this.doTransform=!0};
D.prototype["stroke-widthSetter"]=D.prototype.strokeSetter=function(a,k,b){this[k]=a;this.stroke&&this["stroke-width"]?(D.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===k&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};B=a.SVGRenderer=function(){this.init.apply(this,arguments)};f(B.prototype,{Element:D,SVG_NS:P,init:function(a,k,b,u,f,d){var z;u=this.createElement("svg").attr({version:"1.1",
"class":"highcharts-root"}).css(this.getStyle(u));z=u.element;a.appendChild(z);g(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&g(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=u;this.alignedObjects=[];this.url=(t||L)&&m.getElementsByTagName("base").length?Q.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 6.0.3"));this.defs=
this.createElement("defs").add();this.allowHTML=d;this.forExport=f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(k,b,!1);var c;t&&a.getBoundingClientRect&&(k=function(){n(a,{left:0,top:0});c=a.getBoundingClientRect();n(a,{left:Math.ceil(c.left)-c.left+"px",top:Math.ceil(c.top)-c.top+"px"})},k(),this.unSubPixelFix=G(Q,"resize",k))},getStyle:function(a){return this.style=f({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();h(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var k=new this.Element;k.init(this,a);return k},draw:A,getRadialAttr:function(a,k){return{cx:a[0]-a[2]/2+k.cx*a[2],cy:a[1]-
a[2]/2+k.cy*a[2],r:k.r*a[2]}},getSpanWidth:function(a,k){var b=a.getBBox(!0).width;!M&&this.forExport&&(b=this.measureSpanWidth(k.firstChild.data,a.styles));return b},applyEllipsis:function(a,k,b,u){var f=a.rotation,z=b,d,c=0,q=b.length,e=function(a){k.removeChild(k.firstChild);a&&k.appendChild(m.createTextNode(a))},y;a.rotation=0;z=this.getSpanWidth(a,k);if(y=z>u){for(;c<=q;)d=Math.ceil((c+q)/2),z=b.substring(0,d)+"\u2026",e(z),z=this.getSpanWidth(a,k),c===q?c=q+1:z>u?q=d-1:c=d;0===q&&e("")}a.rotation=
f;return y},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot"},buildText:function(a){var b=a.element,u=this,f=u.forExport,z=F(a.textStr,"").toString(),q=-1!==z.indexOf("\x3c"),e=b.childNodes,y,h,A,I,x=g(b,"x"),t=a.styles,H=a.textWidth,l=t&&t.lineHeight,C=t&&t.textOutline,v=t&&"ellipsis"===t.textOverflow,R=t&&"nowrap"===t.whiteSpace,w=t&&t.fontSize,Q,J,r=e.length,t=H&&!a.added&&this.box,K=function(a){var f;f=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:
w||u.style.fontSize||12;return l?k(l):u.fontMetrics(f,a.getAttribute("style")?a:b).h},p=function(a){E(u.escapes,function(k,b){a=a.replace(new RegExp(k,"g"),b)});return a};Q=[z,v,R,l,C,w,H].join();if(Q!==a.textCache){for(a.textCache=Q;r--;)b.removeChild(e[r]);q||C||v||H||-1!==z.indexOf(" ")?(y=/<.*class="([^"]+)".*>/,h=/<.*style="([^"]+)".*>/,A=/<.*href="([^"]+)".*>/,t&&t.appendChild(b),z=q?z.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,
"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[z],z=d(z,function(a){return""!==a}),c(z,function(k,z){var d,q=0;k=k.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");d=k.split("|||");c(d,function(k){if(""!==k||1===d.length){var c={},e=m.createElementNS(u.SVG_NS,"tspan"),t,E;y.test(k)&&(t=k.match(y)[1],g(e,"class",t));h.test(k)&&(E=k.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),g(e,"style",E));A.test(k)&&!f&&(g(e,
"onclick",'location.href\x3d"'+k.match(A)[1]+'"'),g(e,"class","highcharts-anchor"),n(e,{cursor:"pointer"}));k=p(k.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==k){e.appendChild(m.createTextNode(k));q?c.dx=0:z&&null!==x&&(c.x=x);g(e,c);b.appendChild(e);!q&&J&&(!M&&f&&n(e,{display:"block"}),g(e,"dy",K(e)));if(H){c=k.replace(/([^\^])-/g,"$1- ").split(" ");t=1<d.length||z||1<c.length&&!R;var O=[],l,C=K(e),F=a.rotation;for(v&&(I=u.applyEllipsis(a,e,k,H));!v&&t&&(c.length||O.length);)a.rotation=0,
l=u.getSpanWidth(a,e),k=l>H,void 0===I&&(I=k),k&&1!==c.length?(e.removeChild(e.firstChild),O.unshift(c.pop())):(c=O,O=[],c.length&&!R&&(e=m.createElementNS(P,"tspan"),g(e,{dy:C,x:x}),E&&g(e,"style",E),b.appendChild(e)),l>H&&(H=l)),c.length&&e.appendChild(m.createTextNode(c.join(" ").replace(/- /g,"-")));a.rotation=F}q++}}});J=J||b.childNodes.length}),I&&a.attr("title",a.textStr),t&&t.removeChild(b),C&&a.applyTextOutline&&a.applyTextOutline(C)):b.appendChild(m.createTextNode(p(z)))}},getContrast:function(a){a=
r(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,k,b,u,d,c,e,y,m){var z=this.label(a,k,b,m,null,null,null,null,"button"),h=0;z.attr(q({padding:8,r:2},d));var A,M,I,t;d=q({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},d);A=d.style;delete d.style;c=q(d,{fill:"#e6e6e6"},c);M=c.style;delete c.style;e=q(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},e);I=e.style;delete e.style;y=q(d,{style:{color:"#cccccc"}},
y);t=y.style;delete y.style;G(z.element,K?"mouseover":"mouseenter",function(){3!==h&&z.setState(1)});G(z.element,K?"mouseout":"mouseleave",function(){3!==h&&z.setState(h)});z.setState=function(a){1!==a&&(z.state=h=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);z.attr([d,c,e,y][a||0]).css([A,M,I,t][a||0])};z.attr(d).css(f({cursor:"default"},A));return z.on("click",function(a){3!==h&&u.call(z,a)})},crispLine:function(a,
k){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-k%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+k%2/2);return a},path:function(a){var k={fill:"none"};J(a)?k.d=a:x(a)&&f(k,a);return this.createElement("path").attr(k)},circle:function(a,k,b){a=x(a)?a:{x:a,y:k,r:b};k=this.createElement("circle");k.xSetter=k.ySetter=function(a,k,b){b.setAttribute("c"+k,a)};return k.attr(a)},arc:function(a,k,b,u,d,f){x(a)?(u=a,k=u.y,b=u.r,a=u.x):u={innerR:u,start:d,end:f};a=this.symbol("arc",a,k,b,b,u);a.r=b;return a},rect:function(a,
k,b,u,d,f){d=x(a)?a.r:d;var c=this.createElement("rect");a=x(a)?a:void 0===a?{}:{x:a,y:k,width:Math.max(b,0),height:Math.max(u,0)};void 0!==f&&(a.strokeWidth=f,a=c.crisp(a));a.fill="none";d&&(a.r=d);c.rSetter=function(a,k,b){g(b,{rx:a,ry:a})};return c.attr(a)},setSize:function(a,k,b){var u=this.alignedObjects,d=u.length;this.width=a;this.height=k;for(this.boxWrapper.animate({width:a,height:k},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?
void 0:0});d--;)u[d].align()},g:function(a){var k=this.createElement("g");return a?k.attr({"class":"highcharts-"+a}):k},image:function(a,k,b,u,d){var c={preserveAspectRatio:"none"};1<arguments.length&&f(c,{x:k,y:b,width:u,height:d});c=this.createElement("image").attr(c);c.element.setAttributeNS?c.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):c.element.setAttribute("hc-svg-href",a);return c},symbol:function(a,k,b,u,d,q){var e=this,z,y=/^url\((.*?)\)$/,h=y.test(a),A=!h&&(this.symbols[a]?
a:"circle"),M=A&&this.symbols[A],t=v(k)&&M&&M.call(this.symbols,Math.round(k),Math.round(b),u,d,q),x,E;M?(z=this.path(t),z.attr("fill","none"),f(z,{symbolName:A,x:k,y:b,width:u,height:d}),q&&f(z,q)):h&&(x=a.match(y)[1],z=this.image(x),z.imgwidth=F(I[x]&&I[x].width,q&&q.width),z.imgheight=F(I[x]&&I[x].height,q&&q.height),E=function(){z.attr({width:z.width,height:z.height})},c(["width","height"],function(a){z[a+"Setter"]=function(a,k){var b={},u=this["img"+k],d="width"===k?"translateX":"translateY";
this[k]=a;v(u)&&(this.element&&this.element.setAttribute(k,u),this.alignByTranslate||(b[d]=((this[k]||0)-u)/2,this.attr(b)))}}),v(k)&&z.attr({x:k,y:b}),z.isImg=!0,v(z.imgwidth)&&v(z.imgheight)?E():(z.attr({width:0,height:0}),w("img",{onload:function(){var a=l[e.chartIndex];0===this.width&&(n(this,{position:"absolute",top:"-999em"}),m.body.appendChild(this));I[x]={width:this.width,height:this.height};z.imgwidth=this.width;z.imgheight=this.height;z.element&&E();this.parentNode&&this.parentNode.removeChild(this);
e.imgCount--;if(!e.imgCount&&a&&a.onload)a.onload()},src:x}),this.imgCount++));return z},symbols:{circle:function(a,k,b,u){return this.arc(a+b/2,k+u/2,b/2,u/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,k,b,u){return["M",a,k,"L",a+b,k,a+b,k+u,a,k+u,"Z"]},triangle:function(a,k,b,u){return["M",a+b/2,k,"L",a+b,k+u,a,k+u,"Z"]},"triangle-down":function(a,k,b,u){return["M",a,k,"L",a+b,k,a+b/2,k+u,"Z"]},diamond:function(a,k,b,u){return["M",a+b/2,k,"L",a+b,k+u/2,a+b/2,k+u,a,k+u/2,"Z"]},arc:function(a,
k,b,u,d){var f=d.start,c=d.r||b,q=d.r||u||b,e=d.end-.001;b=d.innerR;u=F(d.open,.001>Math.abs(d.end-d.start-2*Math.PI));var z=Math.cos(f),y=Math.sin(f),h=Math.cos(e),e=Math.sin(e);d=.001>d.end-f-Math.PI?0:1;c=["M",a+c*z,k+q*y,"A",c,q,0,d,1,a+c*h,k+q*e];v(b)&&c.push(u?"M":"L",a+b*h,k+b*e,"A",b,b,0,d,0,a+b*z,k+b*y);c.push(u?"":"Z");return c},callout:function(a,k,b,u,d){var f=Math.min(d&&d.r||0,b,u),c=f+6,q=d&&d.anchorX;d=d&&d.anchorY;var e;e=["M",a+f,k,"L",a+b-f,k,"C",a+b,k,a+b,k,a+b,k+f,"L",a+b,k+u-
f,"C",a+b,k+u,a+b,k+u,a+b-f,k+u,"L",a+f,k+u,"C",a,k+u,a,k+u,a,k+u-f,"L",a,k+f,"C",a,k,a,k,a+f,k];q&&q>b?d>k+c&&d<k+u-c?e.splice(13,3,"L",a+b,d-6,a+b+6,d,a+b,d+6,a+b,k+u-f):e.splice(13,3,"L",a+b,u/2,q,d,a+b,u/2,a+b,k+u-f):q&&0>q?d>k+c&&d<k+u-c?e.splice(33,3,"L",a,d+6,a-6,d,a,d-6,a,k+f):e.splice(33,3,"L",a,u/2,q,d,a,u/2,a,k+f):d&&d>u&&q>a+c&&q<a+b-c?e.splice(23,3,"L",q+6,k+u,q,k+u+6,q-6,k+u,a+f,k+u):d&&0>d&&q>a+c&&q<a+b-c&&e.splice(3,3,"L",q-6,k,q,k-6,q+6,k,b-f,k);return e}},clipRect:function(k,b,u,
d){var f=a.uniqueKey(),c=this.createElement("clipPath").attr({id:f}).add(this.defs);k=this.rect(k,b,u,d,0).add(c);k.id=f;k.clipPath=c;k.count=0;return k},text:function(a,k,b,u){var d={};if(u&&(this.allowHTML||!this.forExport))return this.html(a,k,b);d.x=Math.round(k||0);b&&(d.y=Math.round(b));if(a||0===a)d.text=a;a=this.createElement("text").attr(d);u||(a.xSetter=function(a,k,b){var u=b.getElementsByTagName("tspan"),d,f=b.getAttribute(k),c;for(c=0;c<u.length;c++)d=u[c],d.getAttribute(k)===f&&d.setAttribute(k,
a);b.setAttribute(k,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?k(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,k,b){var u=a;k&&b&&(u=Math.max(u*Math.cos(k*e),4));return{x:-a/3*Math.sin(k*e),y:u}},label:function(k,b,d,e,y,h,m,A,M){var z=this,I=z.g("button"!==M&&"label"),x=I.text=z.text("",0,0,m).attr({zIndex:1}),
t,E,H=0,n=3,l=0,g,C,R,F,w,Q={},P,J,r=/^url\((.*?)\)$/.test(e),K=r,p,O,L,T;M&&I.addClass("highcharts-"+M);K=r;p=function(){return(P||0)%2/2};O=function(){var a=x.element.style,k={};E=(void 0===g||void 0===C||w)&&v(x.textStr)&&x.getBBox();I.width=(g||E.width||0)+2*n+l;I.height=(C||E.height||0)+2*n;J=n+z.fontMetrics(a&&a.fontSize,x).b;K&&(t||(I.box=t=z.symbols[e]||r?z.symbol(e):z.rect(),t.addClass(("button"===M?"":"highcharts-label-box")+(M?" highcharts-"+M+"-box":"")),t.add(I),a=p(),k.x=a,k.y=(A?-J:
0)+a),k.width=Math.round(I.width),k.height=Math.round(I.height),t.attr(f(k,Q)),Q={})};L=function(){var a=l+n,k;k=A?0:J;v(g)&&E&&("center"===w||"right"===w)&&(a+={center:.5,right:1}[w]*(g-E.width));if(a!==x.x||k!==x.y)x.attr("x",a),void 0!==k&&x.attr("y",k);x.x=a;x.y=k};T=function(a,k){t?t.attr(a,k):Q[a]=k};I.onAdd=function(){x.add(I);I.attr({text:k||0===k?k:"",x:b,y:d});t&&v(y)&&I.attr({anchorX:y,anchorY:h})};I.widthSetter=function(k){g=a.isNumber(k)?k:null};I.heightSetter=function(a){C=a};I["text-alignSetter"]=
function(a){w=a};I.paddingSetter=function(a){v(a)&&a!==n&&(n=I.padding=a,L())};I.paddingLeftSetter=function(a){v(a)&&a!==l&&(l=a,L())};I.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==H&&(H=a,E&&I.attr({x:R}))};I.textSetter=function(a){void 0!==a&&x.textSetter(a);O();L()};I["stroke-widthSetter"]=function(a,k){a&&(K=!0);P=this["stroke-width"]=a;T(k,a)};I.strokeSetter=I.fillSetter=I.rSetter=function(a,k){"r"!==k&&("fill"===k&&a&&(K=!0),I[k]=a);T(k,a)};I.anchorXSetter=function(a,k){y=I.anchorX=
a;T(k,Math.round(a)-p()-R)};I.anchorYSetter=function(a,k){h=I.anchorY=a;T(k,a-F)};I.xSetter=function(a){I.x=a;H&&(a-=H*((g||E.width)+2*n));R=Math.round(a);I.attr("translateX",R)};I.ySetter=function(a){F=I.y=Math.round(a);I.attr("translateY",F)};var U=I.css;return f(I,{css:function(a){if(a){var k={};a=q(a);c(I.textProps,function(b){void 0!==a[b]&&(k[b]=a[b],delete a[b])});x.css(k)}return U.call(I,a)},getBBox:function(){return{width:E.width+2*n,height:E.height+2*n,x:E.x-n,y:E.y-n}},shadow:function(a){a&&
(O(),t&&t.shadow(a));return I},destroy:function(){u(I.element,"mouseenter");u(I.element,"mouseleave");x&&(x=x.destroy());t&&(t=t.destroy());D.prototype.destroy.call(I);I=z=O=L=T=null}})}});a.Renderer=B})(N);(function(a){var D=a.attr,B=a.createElement,G=a.css,p=a.defined,g=a.each,l=a.extend,r=a.isFirefox,n=a.isMS,w=a.isWebKit,v=a.pick,e=a.pInt,h=a.SVGRenderer,m=a.win,c=a.wrap;l(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=
b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=l(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,d=this.translateX||0,c=this.translateY||0,h=this.x||0,m=this.y||0,t=this.textAlign||"left",n={left:0,center:.5,right:1}[t],x=this.styles;
G(b,{marginLeft:d,marginTop:c});this.shadows&&g(this.shadows,function(a){G(a,{marginLeft:d+1,marginTop:c+1})});this.inverted&&g(b.childNodes,function(d){a.invertChild(d,b)});if("SPAN"===b.tagName){var l=this.rotation,v=e(this.textWidth),q=x&&x.whiteSpace,A=[l,t,b.innerHTML,this.textWidth,this.textAlign].join();A!==this.cTT&&(x=a.fontMetrics(b.style.fontSize).b,p(l)&&this.setSpanRotation(l,n,x),G(b,{width:"",whiteSpace:q||"nowrap"}),b.offsetWidth>v&&/[ \-]/.test(b.textContent||b.innerText)&&G(b,{width:v+
"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(b.offsetWidth,x,n,l,t));G(b,{left:h+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});w&&(x=b.offsetHeight);this.cTT=A}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,d){var c={},f=this.renderer.getTransformKey();c[f]=c.transform="rotate("+a+"deg)";c[f+(r?"Origin":"-origin")]=c.transformOrigin=100*b+"% "+d+"px";G(this.element,c)},getSpanCorrection:function(a,b,d){this.xCorr=-a*d;this.yCorr=-b}});l(h.prototype,{getTransformKey:function(){return n&&
!/Edge/.test(m.navigator.userAgent)?"-ms-transform":w?"-webkit-transform":r?"MozTransform":m.opera?"-o-transform":""},html:function(a,b,d){var f=this.createElement("span"),e=f.element,h=f.renderer,m=h.isSVG,w=function(a,b){g(["opacity","visibility"],function(d){c(a,d+"Setter",function(a,d,f,c){a.call(this,d,f,c);b[f]=d})})};f.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;this.textStr=a;e.innerHTML=v(a,"");f.htmlUpdateTransform()};m&&w(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=
f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.htmlUpdateTransform()};f.attr({text:a,x:Math.round(b),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";f.css=f.htmlCss;m&&(f.add=function(a){var b,d=h.box.parentNode,c=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)c.push(a),a=a.parentGroup;g(c.reverse(),function(a){function e(k,b){a[b]=k;n?q[h.getTransformKey()]="translate("+(a.x||a.translateX)+
"px,"+(a.y||a.translateY)+"px)":"translateX"===b?q.left=k+"px":q.top=k+"px";a.doTransform=!0}var q,k=D(a.element,"class");k&&(k={className:k});b=a.div=a.div||B("div",k,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||d);q=b.style;l(a,{classSetter:function(a){this.element.setAttribute("class",a);b.className=a},on:function(){c[0].div&&f.on.apply({element:c[0].div},arguments);return a},translateXSetter:e,
translateYSetter:e});w(a,q)})}}else b=d;b.appendChild(e);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})})(N);(function(a){function D(){var n=a.defaultOptions.global,l=r.moment;if(n.timezone){if(l)return function(a){return-l.tz(a,n.timezone).utcOffset()};a.error(25)}return n.useUTC&&n.getTimezoneOffset}function B(){var n=a.defaultOptions.global,g,v=n.useUTC,e=v?"getUTC":"get",h=v?"setUTC":"set",m="Minutes Hours Day Date Month FullYear".split(" "),c=m.concat(["Milliseconds",
"Seconds"]);a.Date=g=n.Date||r.Date;g.hcTimezoneOffset=v&&n.timezoneOffset;g.hcGetTimezoneOffset=D();g.hcMakeTime=function(a,b,d,c,e,h){var f;v?(f=g.UTC.apply(0,arguments),f+=p(f)):f=(new g(a,b,l(d,1),l(c,0),l(e,0),l(h,0))).getTime();return f};for(n=0;n<m.length;n++)g["hcGet"+m[n]]=e+m[n];for(n=0;n<c.length;n++)g["hcSet"+c[n]]=h+c[n]}var G=a.color,p=a.getTZOffset,g=a.merge,l=a.pick,r=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0},chart:{borderRadius:0,
defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(n){a.defaultOptions=g(!0,a.defaultOptions,n);B();
return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;B()})(N);(function(a){var D=a.correctFloat,B=a.defined,G=a.destroyObjectProperties,p=a.isNumber,g=a.merge,l=a.pick,r=a.deg2rad;a.Tick=function(a,g,l,e){this.axis=a;this.pos=g;this.type=l||"";this.isNewLabel=this.isNew=!0;l||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,w=a.options,v=a.chart,e=a.categories,h=a.names,m=this.pos,c=w.labels,f=a.tickPositions,
b=m===f[0],d=m===f[f.length-1],h=e?l(e[m],h[m],m):m,e=this.label,f=f.info,y;a.isDatetimeAxis&&f&&(y=w.dateTimeLabelFormats[f.higherRanks[m]||f.unitName]);this.isFirst=b;this.isLast=d;w=a.labelFormatter.call({axis:a,chart:v,isFirst:b,isLast:d,dateTimeLabelFormat:y,value:a.isLog?D(a.lin2log(h)):h,pos:m});B(e)?e&&e.attr({text:w}):(this.labelLength=(this.label=e=B(w)&&c.enabled?v.renderer.text(w,0,0,c.useHTML).css(g(c.style)).add(a.labelGroup):null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?
this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var g=this.axis,n=a.x,e=g.chart.chartWidth,h=g.chart.spacing,m=l(g.labelLeft,Math.min(g.pos,h[3])),h=l(g.labelRight,Math.max(g.pos+g.len,e-h[1])),c=this.label,f=this.rotation,b={left:0,center:.5,right:1}[g.labelAlign],d=c.getBBox().width,y=g.getSlotWidth(),H=y,J=1,t,p={};if(f)0>f&&n-b*d<m?t=Math.round(n/Math.cos(f*r)-m):0<f&&n+b*d>h&&(t=Math.round((e-n)/Math.cos(f*r)));else if(e=n+(1-b)*d,n-b*d<m?H=a.x+H*(1-b)-m:
e>h&&(H=h-a.x+H*b,J=-1),H=Math.min(y,H),H<y&&"center"===g.labelAlign&&(a.x+=J*(y-H-b*(y-Math.min(d,H)))),d>H||g.autoRotation&&(c.styles||{}).width)t=H;t&&(p.width=t,(g.options.labels.style||{}).textOverflow||(p.textOverflow="ellipsis"),c.css(p))},getPosition:function(a,g,l,e){var h=this.axis,m=h.chart,c=e&&m.oldChartHeight||m.chartHeight;return{x:a?h.translate(g+l,null,null,e)+h.transB:h.left+h.offset+(h.opposite?(e&&m.oldChartWidth||m.chartWidth)-h.right-h.left:0),y:a?c-h.bottom+h.offset-(h.opposite?
h.height:0):c-h.translate(g+l,null,null,e)-h.transB}},getLabelPosition:function(a,g,l,e,h,m,c,f){var b=this.axis,d=b.transA,y=b.reversed,n=b.staggerLines,v=b.tickRotCorr||{x:0,y:0},t=h.y;B(t)||(t=0===b.side?l.rotation?-8:-l.getBBox().height:2===b.side?v.y+8:Math.cos(l.rotation*r)*(v.y-l.getBBox(!1,0).height/2));a=a+h.x+v.x-(m&&e?m*d*(y?-1:1):0);g=g+t-(m&&!e?m*d*(y?1:-1):0);n&&(l=c/(f||1)%n,b.opposite&&(l=n-l-1),g+=b.labelOffset/n*l);return{x:a,y:Math.round(g)}},getMarkPath:function(a,g,l,e,h,m){return m.crispLine(["M",
a,g,"L",a+(h?0:-l),g+(h?l:0)],e)},renderGridLine:function(a,g,l){var e=this.axis,h=e.options,m=this.gridLine,c={},f=this.pos,b=this.type,d=e.tickmarkOffset,y=e.chart.renderer,n=b?b+"Grid":"grid",v=h[n+"LineWidth"],t=h[n+"LineColor"],h=h[n+"LineDashStyle"];m||(c.stroke=t,c["stroke-width"]=v,h&&(c.dashstyle=h),b||(c.zIndex=1),a&&(c.opacity=0),this.gridLine=m=y.path().attr(c).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(e.gridGroup));if(!a&&m&&(a=e.getPlotLinePath(f+d,m.strokeWidth()*l,a,!0)))m[this.isNew?
"attr":"animate"]({d:a,opacity:g})},renderMark:function(a,g,v){var e=this.axis,h=e.options,m=e.chart.renderer,c=this.type,f=c?c+"Tick":"tick",b=e.tickSize(f),d=this.mark,y=!d,n=a.x;a=a.y;var r=l(h[f+"Width"],!c&&e.isXAxis?1:0),h=h[f+"Color"];b&&(e.opposite&&(b[0]=-b[0]),y&&(this.mark=d=m.path().addClass("highcharts-"+(c?c+"-":"")+"tick").add(e.axisGroup),d.attr({stroke:h,"stroke-width":r})),d[y?"attr":"animate"]({d:this.getMarkPath(n,a,b[0],d.strokeWidth()*v,e.horiz,m),opacity:g}))},renderLabel:function(a,
g,v,e){var h=this.axis,m=h.horiz,c=h.options,f=this.label,b=c.labels,d=b.step,y=h.tickmarkOffset,H=!0,n=a.x;a=a.y;f&&p(n)&&(f.xy=a=this.getLabelPosition(n,a,f,m,b,y,e,d),this.isFirst&&!this.isLast&&!l(c.showFirstLabel,1)||this.isLast&&!this.isFirst&&!l(c.showLastLabel,1)?H=!1:!m||h.isRadial||b.step||b.rotation||g||0===v||this.handleOverflow(a),d&&e%d&&(H=!1),H&&p(a.y)?(a.opacity=v,f[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))},render:function(a,
g,v){var e=this.axis,h=e.horiz,m=this.getPosition(h,this.pos,e.tickmarkOffset,g),c=m.x,f=m.y,e=h&&c===e.pos+e.len||!h&&f===e.pos?-1:1;v=l(v,1);this.isActive=!0;this.renderGridLine(g,v,e);this.renderMark(m,v,e);this.renderLabel(m,g,v,a);this.isNew=!1},destroy:function(){G(this,this.axis)}}})(N);var V=function(a){var D=a.addEvent,B=a.animObject,G=a.arrayMax,p=a.arrayMin,g=a.color,l=a.correctFloat,r=a.defaultOptions,n=a.defined,w=a.deg2rad,v=a.destroyObjectProperties,e=a.each,h=a.extend,m=a.fireEvent,
c=a.format,f=a.getMagnitude,b=a.grep,d=a.inArray,y=a.isArray,H=a.isNumber,J=a.isString,t=a.merge,K=a.normalizeTickInterval,x=a.objectEach,C=a.pick,L=a.removeEvent,q=a.splat,A=a.syncTimeout,E=a.Tick,F=function(){this.init.apply(this,arguments)};a.extend(F.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",
fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},
maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},init:function(a,b){var k=b.isX,u=this;u.chart=a;u.horiz=a.inverted&&!u.isZAxis?!k:k;u.isXAxis=k;u.coll=u.coll||(k?"xAxis":"yAxis");u.opposite=b.opposite;u.side=b.side||(u.horiz?u.opposite?0:2:u.opposite?1:3);u.setOptions(b);var f=this.options,c=f.type;u.labelFormatter=f.labels.formatter||u.defaultLabelFormatter;u.userOptions=b;u.minPixelPadding=0;u.reversed=f.reversed;u.visible=!1!==f.visible;u.zoomEnabled=!1!==f.zoomEnabled;u.hasNames="category"===c||!0===f.categories;u.categories=
f.categories||u.hasNames;u.names=u.names||[];u.plotLinesAndBandsGroups={};u.isLog="logarithmic"===c;u.isDatetimeAxis="datetime"===c;u.positiveValuesOnly=u.isLog&&!u.allowNegativeLog;u.isLinked=n(f.linkedTo);u.ticks={};u.labelEdge=[];u.minorTicks={};u.plotLinesAndBands=[];u.alternateBands={};u.len=0;u.minRange=u.userMinRange=f.minRange||f.maxZoom;u.range=f.range;u.offset=f.offset||0;u.stacks={};u.oldStacks={};u.stacksTouched=0;u.max=null;u.min=null;u.crosshair=C(f.crosshair,q(a.options.tooltip.crosshairs)[k?
0:1],!1);b=u.options.events;-1===d(u,a.axes)&&(k?a.axes.splice(a.xAxis.length,0,u):a.axes.push(u),a[u.coll].push(u));u.series=u.series||[];a.inverted&&!u.isZAxis&&k&&void 0===u.reversed&&(u.reversed=!0);x(b,function(a,k){D(u,k,a)});u.lin2log=f.linearToLogConverter||u.lin2log;u.isLog&&(u.val2lin=u.log2lin,u.lin2val=u.lin2log)},setOptions:function(a){this.options=t(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,
this.defaultLeftAxisOptions][this.side],t(r[this.coll],a))},defaultLabelFormatter:function(){var k=this.axis,b=this.value,d=k.categories,f=this.dateTimeLabelFormat,e=r.lang,q=e.numericSymbols,e=e.numericSymbolMagnitude||1E3,h=q&&q.length,m,y=k.options.labels.format,k=k.isLog?Math.abs(b):k.tickInterval;if(y)m=c(y,this);else if(d)m=b;else if(f)m=a.dateFormat(f,b);else if(h&&1E3<=k)for(;h--&&void 0===m;)d=Math.pow(e,h+1),k>=d&&0===10*b%d&&null!==q[h]&&0!==b&&(m=a.numberFormat(b/d,-1)+q[h]);void 0===
m&&(m=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return m},getSeriesExtremes:function(){var a=this,u=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();e(a.series,function(k){if(k.visible||!u.options.chart.ignoreHiddenSeries){var d=k.options,f=d.threshold,c;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=f&&(f=null);if(a.isXAxis)d=k.xData,d.length&&(k=p(d),c=G(d),H(k)||k instanceof Date||(d=b(d,H),
k=p(d)),a.dataMin=Math.min(C(a.dataMin,d[0],k),k),a.dataMax=Math.max(C(a.dataMax,d[0],c),c));else if(k.getExtremes(),c=k.dataMax,k=k.dataMin,n(k)&&n(c)&&(a.dataMin=Math.min(C(a.dataMin,k),k),a.dataMax=Math.max(C(a.dataMax,c),c)),n(f)&&(a.threshold=f),!d.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,d,f,c,e){var k=this.linkedParent||this,u=1,q=0,h=f?k.oldTransA:k.transA;f=f?k.oldMin:k.min;var m=k.minPixelPadding;c=(k.isOrdinal||k.isBroken||k.isLog&&c)&&k.lin2val;
h||(h=k.transA);d&&(u*=-1,q=k.len);k.reversed&&(u*=-1,q-=u*(k.sector||k.len));b?(a=(a*u+q-m)/h+f,c&&(a=k.lin2val(a))):(c&&(a=k.val2lin(a)),a=H(f)?u*(a-f)*h+q+u*m+(H(e)?h*e:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,f,c){var k=this.chart,u=this.left,q=this.top,e,h,m=d&&k.oldChartHeight||k.chartHeight,y=d&&k.oldChartWidth||
k.chartWidth,A;e=this.transB;var t=function(a,k,b){if(a<k||a>b)f?a=Math.min(Math.max(k,a),b):A=!0;return a};c=C(c,this.translate(a,null,null,d));a=d=Math.round(c+e);e=h=Math.round(m-c-e);H(c)?this.horiz?(e=q,h=m-this.bottom,a=d=t(a,u,u+this.width)):(a=u,d=y-this.right,e=h=t(e,q,q+this.height)):(A=!0,f=!1);return A&&!f?null:k.renderer.crispLine(["M",a,e,"L",d,h],b||1)},getLinearTickPositions:function(a,b,d){var k,u=l(Math.floor(b/a)*a);d=l(Math.ceil(d/a)*a);var f=[],c;l(u+a)===u&&(c=20);if(this.single)return[b];
for(b=u;b<=d;){f.push(b);b=l(b+a,c);if(b===k)break;k=b}return f},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?C(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,f=a.minorTickInterval,c=[],q=a.pointRangePadding||0,h=a.min-q,q=a.max+q,m=q-h;if(m&&m/f<a.len/3)if(a.isLog)e(this.paddedTicks,function(k,b,u){b&&c.push.apply(c,a.getLogTickPositions(f,u[b-1],u[b],!0))});else if(a.isDatetimeAxis&&
"auto"===this.getMinorTickInterval())c=c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),h,q,b.startOfWeek));else for(b=h+(d[0]-h)%f;b<=q&&b!==c[0];b+=f)c.push(b);0!==c.length&&a.trimTicks(c);return c},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,f,c,q,h,m,y,A,t;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(n(a.min)||n(a.max)?this.minRange=null:(e(this.series,function(a){y=a.xData;for(h=A=a.xIncrement?1:y.length-1;0<h;h--)if(m=y[h]-y[h-1],void 0===q||m<q)q=m}),
this.minRange=Math.min(5*q,this.dataMax-this.dataMin)));d-b<this.minRange&&(c=this.dataMax-this.dataMin>=this.minRange,t=this.minRange,f=(t-d+b)/2,f=[b-f,C(a.min,b-f)],c&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(f),d=[b+t,C(a.max,b+t)],c&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=p(d),d-b<t&&(f[0]=d-t,f[1]=C(a.min,d-t),b=G(f)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:e(this.series,function(k){var b=k.closestPointRange,u=k.visible||
!k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip&&n(b)&&u&&(a=n(a)?Math.min(a,b):b)});return a},nameToX:function(a){var k=y(this.categories),b=k?this.categories:this.names,f=a.options.x,c;a.series.requireSorting=!1;n(f)||(f=!1===this.options.uniqueNames?a.series.autoIncrement():d(a.name,b));-1===f?k||(c=b.length):c=f;void 0!==c&&(this.names[c]=a.name);return c},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,e(this.series||[],
function(k){k.xIncrement=null;if(!k.points||k.isDirtyData)k.processData(),k.generatePoints();e(k.points,function(b,u){var d;b.options&&(d=a.nameToX(b),void 0!==d&&d!==b.x&&(b.x=d,k.xData[u]=d))})}))},setAxisTranslation:function(a){var k=this,b=k.max-k.min,d=k.axisPointRange||0,f,c=0,q=0,h=k.linkedParent,m=!!k.categories,y=k.transA,A=k.isXAxis;if(A||m||d)f=k.getClosest(),h?(c=h.minPointOffset,q=h.pointRangePadding):e(k.series,function(a){var b=m?1:A?C(a.options.pointRange,f,0):k.axisPointRange||0;
a=a.options.pointPlacement;d=Math.max(d,b);k.single||(c=Math.max(c,J(a)?0:b/2),q=Math.max(q,"on"===a?0:b))}),h=k.ordinalSlope&&f?k.ordinalSlope/f:1,k.minPointOffset=c*=h,k.pointRangePadding=q*=h,k.pointRange=Math.min(d,b),A&&(k.closestPointRange=f);a&&(k.oldTransA=y);k.translationSlope=k.transA=y=k.options.staticScale||k.len/(b+q||1);k.transB=k.horiz?k.left:k.bottom;k.minPixelPadding=y*c},minFromRange:function(){return this.max-this.range},setTickInterval:function(k){var b=this,d=b.chart,c=b.options,
q=b.isLog,h=b.log2lin,y=b.isDatetimeAxis,A=b.isXAxis,t=b.isLinked,x=c.maxPadding,g=c.minPadding,E=c.tickInterval,v=c.tickPixelInterval,F=b.categories,r=b.threshold,J=b.softThreshold,p,w,L,B;y||F||t||this.getTickAmount();L=C(b.userMin,c.min);B=C(b.userMax,c.max);t?(b.linkedParent=d[b.coll][c.linkedTo],d=b.linkedParent.getExtremes(),b.min=C(d.min,d.dataMin),b.max=C(d.max,d.dataMax),c.type!==b.linkedParent.options.type&&a.error(11,1)):(!J&&n(r)&&(b.dataMin>=r?(p=r,g=0):b.dataMax<=r&&(w=r,x=0)),b.min=
C(L,p,b.dataMin),b.max=C(B,w,b.dataMax));q&&(b.positiveValuesOnly&&!k&&0>=Math.min(b.min,C(b.dataMin,b.min))&&a.error(10,1),b.min=l(h(b.min),15),b.max=l(h(b.max),15));b.range&&n(b.max)&&(b.userMin=b.min=L=Math.max(b.dataMin,b.minFromRange()),b.userMax=B=b.max,b.range=null);m(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(F||b.axisPointRange||b.usePercentage||t)&&n(b.min)&&n(b.max)&&(h=b.max-b.min)&&(!n(L)&&g&&(b.min-=h*g),!n(B)&&x&&(b.max+=h*x));H(c.softMin)&&(b.min=
Math.min(b.min,c.softMin));H(c.softMax)&&(b.max=Math.max(b.max,c.softMax));H(c.floor)&&(b.min=Math.max(b.min,c.floor));H(c.ceiling)&&(b.max=Math.min(b.max,c.ceiling));J&&n(b.dataMin)&&(r=r||0,!n(L)&&b.min<r&&b.dataMin>=r?b.min=r:!n(B)&&b.max>r&&b.dataMax<=r&&(b.max=r));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:t&&!E&&v===b.linkedParent.options.tickPixelInterval?E=b.linkedParent.tickInterval:C(E,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,F?1:(b.max-b.min)*
v/Math.max(b.len,v));A&&!k&&e(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!E&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));k=C(c.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!E&&b.tickInterval<k&&(b.tickInterval=k);y||q||E||(b.tickInterval=K(b.tickInterval,null,f(b.tickInterval),
C(c.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,d=a.tickPositions;b=this.getMinorTickInterval();var c=a.tickPositioner,f=a.startOnTick,q=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=
this.min===this.max&&n(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=d&&d.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],
b[0]===b[1]&&(b.length=1)),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,f,q);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount())},trimTicks:function(a,b,d){var k=a[0],c=a[a.length-1],f=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==k)this.min=k;else for(;this.min-f>a[0];)a.shift();if(d)this.max=c;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&
n(k)&&a.push((c+k)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||this.isLog||e(this.chart[this.coll],function(k){var d=k.options,d=[k.horiz?d.left:d.top,d.width,d.height,d.pane].join();k.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!n(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&
(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,f=b&&b.length;if(f<d){for(;b.length<d;)b.push(l(b[b.length-1]+a));this.transA*=(f-1)/(d-1);this.max=b[b.length-1]}else f>d&&(this.tickInterval*=2,this.setTickPositions());if(n(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=
this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;e(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=
b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,d,c,f){var k=this,q=k.chart;d=C(d,!0);e(k.series,function(a){delete a.kdTree});f=h(f,{min:a,max:b});m(k,"setExtremes",f,function(){k.userMin=a;k.userMax=b;k.eventArgs=f;d&&q.redraw(c)})},zoom:function(a,b){var k=this.dataMin,d=this.dataMax,c=this.options,f=Math.min(k,C(c.min,k)),c=Math.max(d,C(c.max,d));if(a!==this.min||b!==this.max)this.allowZoomOutside||(n(k)&&(a<f&&(a=f),a>c&&(a=c)),
n(d)&&(b<f&&(b=f),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,d=this.options,c=d.offsets||[0,0,0,0],f=this.horiz,q=this.width=Math.round(a.relativeLength(C(d.width,b.plotWidth-c[3]+c[1]),b.plotWidth)),e=this.height=Math.round(a.relativeLength(C(d.height,b.plotHeight-c[0]+c[2]),b.plotHeight)),h=this.top=Math.round(a.relativeLength(C(d.top,b.plotTop+c[0]),b.plotHeight,b.plotTop)),d=this.left=Math.round(a.relativeLength(C(d.left,
b.plotLeft+c[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-e-h;this.right=b.chartWidth-q-d;this.len=Math.max(f?q:e,0);this.pos=f?d:h},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?l(b(this.min)):this.min,max:a?l(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,k=this.lin2log,d=b?k(this.min):this.min,b=b?k(this.max):this.max;null===a?a=d:d>a?a=d:b<a&&(a=b);return this.translate(a,
0,1,0,1)},autoLabelAlign:function(a){a=(C(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,k=b[a+"Length"],d=C(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&k)return"inside"===b[a+"Position"]&&(k=-k),[k,d]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=
this.options.labels,b=this.horiz,d=this.tickInterval,c=d,f=this.len/(((this.categories?1:0)+this.max-this.min)/d),q,h=a.rotation,m=this.labelMetrics(),y,A=Number.MAX_VALUE,t,x=function(a){a/=f||1;a=1<a?Math.ceil(a):1;return a*d};b?(t=!a.staggerLines&&!a.step&&(n(h)?[h]:f<C(a.autoRotationLimit,80)&&a.autoRotation))&&e(t,function(a){var b;if(a===h||a&&-90<=a&&90>=a)y=x(Math.abs(m.h/Math.sin(w*a))),b=y+Math.abs(a/360),b<A&&(A=b,q=a,c=y)}):a.step||(c=x(m.h));this.autoRotation=t;this.labelRotation=C(q,
h);return c},getSlotWidth:function(){var a=this.chart,b=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=a.margin[3];return b&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!b&&(d.style&&parseInt(d.style.width,10)||f&&f-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,c=this.ticks,f=this.options.labels,q=this.horiz,h=this.getSlotWidth(),m=Math.max(1,Math.round(h-2*(f.padding||
5))),y={},A=this.labelMetrics(),x=f.style&&f.style.textOverflow,g,E=0,l,n;J(f.rotation)||(y.rotation=f.rotation||0);e(d,function(a){(a=c[a])&&a.labelLength>E&&(E=a.labelLength)});this.maxLabelLength=E;if(this.autoRotation)E>m&&E>A.h?y.rotation=this.labelRotation:this.labelRotation=0;else if(h&&(g={width:m+"px"},!x))for(g.textOverflow="clip",l=d.length;!q&&l--;)if(n=d[l],m=c[n].label)m.styles&&"ellipsis"===m.styles.textOverflow?m.css({textOverflow:"clip"}):c[n].labelLength>h&&m.css({width:h+"px"}),
m.getBBox().height>this.len/d.length-(A.h-A.f)&&(m.specCss={textOverflow:"ellipsis"});y.rotation&&(g={width:(E>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},x||(g.textOverflow="ellipsis"));if(this.labelAlign=f.align||this.autoLabelAlign(this.labelRotation))y.align=this.labelAlign;e(d,function(a){var b=(a=c[a])&&a.label;b&&(b.attr(y),g&&b.css(t(g,b.specCss)),delete b.specCss,a.rotation=y.rotation)});this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||
n(this.min)&&n(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,k=this.horiz,d=this.opposite,c=this.options.title,f;this.axisTitle||((f=c.textAlign)||(f=(k?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup),this.axisTitle.isNew=
!0);c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new E(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,c=a.options,f=a.tickPositions,q=a.ticks,h=a.horiz,m=a.side,y=b.inverted&&!a.isZAxis?[1,0,3,2][m]:m,A,t,g=0,E,l=0,H=c.title,v=c.labels,F=0,r=b.axisOffset,b=b.clipOffset,J=[-1,1,1,-1][m],p=c.className,w=a.axisParent,K=this.tickSize("tick");A=a.hasData();a.showAxis=
t=A||C(c.showEmpty,!0);a.staggerLines=a.horiz&&v.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(p||"")).add(w),a.axisGroup=d.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(p||"")).add(w),a.labelGroup=d.g("axis-labels").attr({zIndex:v.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(p||"")).add(w));A||a.isLinked?(e(f,function(b,k){a.generateTick(b,
k)}),a.renderUnsquish(),!1===v.reserveSpace||0!==m&&2!==m&&{1:"left",3:"right"}[m]!==a.labelAlign&&"center"!==a.labelAlign||e(f,function(a){F=Math.max(q[a].getLabelSize(),F)}),a.staggerLines&&(F*=a.staggerLines,a.labelOffset=F*(a.opposite?-1:1))):x(q,function(a,b){a.destroy();delete q[b]});H&&H.text&&!1!==H.enabled&&(a.addTitle(t),t&&!1!==H.reserveSpace&&(a.titleOffset=g=a.axisTitle.getBBox()[h?"height":"width"],E=H.offset,l=n(E)?0:C(H.margin,h?5:10)));a.renderLine();a.offset=J*C(c.offset,r[m]);a.tickRotCorr=
a.tickRotCorr||{x:0,y:0};d=0===m?-a.labelMetrics().h:2===m?a.tickRotCorr.y:0;l=Math.abs(F)+l;F&&(l=l-d+J*(h?C(v.y,a.tickRotCorr.y+8*J):v.x));a.axisTitleMargin=C(E,l);r[m]=Math.max(r[m],a.axisTitleMargin+g+J*a.offset,l,A&&f.length&&K?K[0]+J*a.offset:0);c=c.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[y]=Math.max(b[y],c)},getLinePath:function(a){var b=this.chart,k=this.opposite,d=this.offset,c=this.horiz,f=this.left+(k?this.width:0)+d,d=b.chartHeight-this.bottom-(k?this.height:0)+d;k&&(a*=-1);
return b.renderer.crispLine(["M",c?this.left:f,c?d:this.top,"L",c?b.chartWidth-this.right:f,c?d:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,c=this.len,f=this.options.title,q=a?b:d,e=this.opposite,h=this.offset,m=f.x||
0,y=f.y||0,A=this.axisTitle,t=this.chart.renderer.fontMetrics(f.style&&f.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-t.h-1,0),c={low:q+(a?0:c),middle:q+c/2,high:q+(a?c:0)}[f.align],b=(a?d+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+[-A,A,t.f,-A][this.side];return{x:a?c+m:b+(e?this.width:0)+h+m,y:a?b+y-(e?this.height:0)+h:c+y}},renderMinorTick:function(a){var b=this.chart.hasRendered&&H(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new E(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,
!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,k=this.ticks,c=this.chart.hasRendered&&H(this.oldMin);if(!d||a>=this.min&&a<=this.max)k[a]||(k[a]=new E(this,a)),c&&k[a].isNew&&k[a].render(b,!0,.1),k[a].render(b)},render:function(){var b=this,d=b.chart,c=b.options,f=b.isLog,q=b.lin2log,h=b.isLinked,m=b.tickPositions,y=b.axisTitle,t=b.ticks,g=b.minorTicks,l=b.alternateBands,n=c.stackLabels,C=c.alternateGridColor,v=b.tickmarkOffset,F=b.axisLine,r=b.showAxis,J=B(d.renderer.globalAnimation),
p,w;b.labelEdge.length=0;b.overlap=!1;e([t,g,l],function(a){x(a,function(a){a.isActive=!1})});if(b.hasData()||h)b.minorTickInterval&&!b.categories&&e(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),m.length&&(e(m,function(a,d){b.renderTick(a,d)}),v&&(0===b.min||b.single)&&(t[-1]||(t[-1]=new E(b,-1,null,!0)),t[-1].render(-1))),C&&e(m,function(c,k){w=void 0!==m[k+1]?m[k+1]+v:b.max-v;0===k%2&&c<b.max&&w<=b.max+(d.polar?-v:v)&&(l[c]||(l[c]=new a.PlotLineOrBand(b)),p=c+v,l[c].options={from:f?
q(p):p,to:f?q(w):w,color:C},l[c].render(),l[c].isActive=!0)}),b._addedPlotLB||(e((c.plotLines||[]).concat(c.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);e([t,g,l],function(a){var b,c=[],k=J.duration;x(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==l&&d.hasRendered&&k?k:0)});F&&(F[F.isPlaced?"animate":"attr"]({d:this.getLinePath(F.strokeWidth())}),
F.isPlaced=!0,F[r?"show":"hide"](!0));y&&r&&(c=b.getTitlePosition(),H(c.y)?(y[y.isNew?"attr":"animate"](c),y.isNew=!1):(y.attr("y",-9999),y.isNew=!0));n&&n.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),e(this.plotLinesAndBands,function(a){a.render()}));e(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,k=b.plotLinesAndBands,f;a||L(b);x(c,function(a,b){v(a);
c[b]=null});e([b.ticks,b.minorTicks,b.alternateBands],function(a){v(a)});if(k)for(a=k.length;a--;)k[a].destroy();e("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(f in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[f]=b.plotLinesAndBandsGroups[f].destroy();x(b,function(a,c){-1===d(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var d,c=this.crosshair,k=C(c.snap,!0),f,q=this.cross;a||(a=this.cross&&this.cross.e);
this.crosshair&&!1!==(n(b)||!k)?(k?n(b)&&(f=this.isXAxis?b.plotX:this.len-b.plotY):f=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),n(f)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:C(b.stackY,b.y)),null,null,null,f)||null),n(d)?(b=this.categories&&!this.isRadial,q||(this.cross=q=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+c.className).attr({zIndex:C(c.zIndex,2)}).add(),q.attr({stroke:c.color||(b?g("#ccd6eb").setOpacity(.25).get():
"#cccccc"),"stroke-width":C(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&q.attr({dashstyle:c.dashStyle})),q.show().attr({d:d}),b&&!c.width&&q.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=F}(N);(function(a){var D=a.Axis,B=a.Date,G=a.dateFormat,p=a.defaultOptions,g=a.defined,l=a.each,r=a.extend,n=a.getMagnitude,w=a.getTZOffset,v=a.normalizeTickInterval,e=a.pick,h=a.timeUnits;
D.prototype.getTimeTicks=function(a,c,f,b){var d=[],m={},n=p.global.useUTC,v,t=new B(c-Math.max(w(c),w(f))),K=B.hcMakeTime,x=a.unitRange,C=a.count,L,q;if(g(c)){t[B.hcSetMilliseconds](x>=h.second?0:C*Math.floor(t.getMilliseconds()/C));if(x>=h.second)t[B.hcSetSeconds](x>=h.minute?0:C*Math.floor(t.getSeconds()/C));if(x>=h.minute)t[B.hcSetMinutes](x>=h.hour?0:C*Math.floor(t[B.hcGetMinutes]()/C));if(x>=h.hour)t[B.hcSetHours](x>=h.day?0:C*Math.floor(t[B.hcGetHours]()/C));if(x>=h.day)t[B.hcSetDate](x>=h.month?
1:C*Math.floor(t[B.hcGetDate]()/C));x>=h.month&&(t[B.hcSetMonth](x>=h.year?0:C*Math.floor(t[B.hcGetMonth]()/C)),v=t[B.hcGetFullYear]());if(x>=h.year)t[B.hcSetFullYear](v-v%C);if(x===h.week)t[B.hcSetDate](t[B.hcGetDate]()-t[B.hcGetDay]()+e(b,1));v=t[B.hcGetFullYear]();b=t[B.hcGetMonth]();var A=t[B.hcGetDate](),E=t[B.hcGetHours]();if(B.hcTimezoneOffset||B.hcGetTimezoneOffset)q=(!n||!!B.hcGetTimezoneOffset)&&(f-c>4*h.month||w(c)!==w(f)),t=t.getTime(),L=w(t),t=new B(t+L);n=t.getTime();for(c=1;n<f;)d.push(n),
n=x===h.year?K(v+c*C,0):x===h.month?K(v,b+c*C):!q||x!==h.day&&x!==h.week?q&&x===h.hour?K(v,b,A,E+c*C,0,0,L)-L:n+x*C:K(v,b,A+c*C*(x===h.day?1:7)),c++;d.push(n);x<=h.hour&&1E4>d.length&&l(d,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&(m[a]="day")})}d.info=r(a,{higherRanks:m,totalRange:x*C});return d};D.prototype.normalizeTimeTickInterval=function(a,c){var f=c||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],
["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];c=f[f.length-1];var b=h[c[0]],d=c[1],e;for(e=0;e<f.length&&!(c=f[e],b=h[c[0]],d=c[1],f[e+1]&&a<=(b*d[d.length-1]+h[f[e+1][0]])/2);e++);b===h.year&&a<5*b&&(d=[1,2,5]);a=v(a/b,d,"year"===c[0]?Math.max(n(a/b),1):1);return{unitRange:b,count:a,unitName:c[0]}}})(N);(function(a){var D=a.Axis,B=a.getMagnitude,G=a.map,p=a.normalizeTickInterval,g=a.pick;D.prototype.getLogTickPositions=function(a,r,n,w){var l=this.options,e=this.len,h=this.lin2log,
m=this.log2lin,c=[];w||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,r,n);else if(.08<=a)for(var e=Math.floor(r),f,b,d,y,H,l=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<n+1&&!H;e++)for(b=l.length,f=0;f<b&&!H;f++)d=m(h(e)*l[f]),d>r&&(!w||y<=n)&&void 0!==y&&c.push(y),y>n&&(H=!0),y=d;else r=h(r),n=h(n),a=w?this.getMinorTickInterval():l.tickInterval,a=g("auto"===a?null:a,this._minorAutoInterval,l.tickPixelInterval/(w?5:1)*(n-r)/((w?e/this.tickPositions.length:
e)||1)),a=p(a,null,B(a)),c=G(this.getLinearTickPositions(a,r,n),m),w||(this._minorAutoInterval=a/5);w||(this.tickInterval=a);return c};D.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};D.prototype.lin2log=function(a){return Math.pow(10,a)}})(N);(function(a,D){var B=a.arrayMax,G=a.arrayMin,p=a.defined,g=a.destroyObjectProperties,l=a.each,r=a.erase,n=a.merge,w=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){var g=
this,e=g.axis,h=e.horiz,m=g.options,c=m.label,f=g.label,b=m.to,d=m.from,y=m.value,l=p(d)&&p(b),r=p(y),t=g.svgElem,K=!t,x=[],C=m.color,L=w(m.zIndex,0),q=m.events,x={"class":"highcharts-plot-"+(l?"band ":"line ")+(m.className||"")},A={},E=e.chart.renderer,F=l?"bands":"lines",k=e.log2lin;e.isLog&&(d=k(d),b=k(b),y=k(y));r?(x={stroke:C,"stroke-width":m.width},m.dashStyle&&(x.dashstyle=m.dashStyle)):l&&(C&&(x.fill=C),m.borderWidth&&(x.stroke=m.borderColor,x["stroke-width"]=m.borderWidth));A.zIndex=L;F+=
"-"+L;(C=e.plotLinesAndBandsGroups[F])||(e.plotLinesAndBandsGroups[F]=C=E.g("plot-"+F).attr(A).add());K&&(g.svgElem=t=E.path().attr(x).add(C));if(r)x=e.getPlotLinePath(y,t.strokeWidth());else if(l)x=e.getPlotBandPath(d,b,m);else return;K&&x&&x.length?(t.attr({d:x}),q&&a.objectEach(q,function(a,b){t.on(b,function(a){q[b].apply(g,[a])})})):t&&(x?(t.show(),t.animate({d:x})):(t.hide(),f&&(g.label=f=f.destroy())));c&&p(c.text)&&x&&x.length&&0<e.width&&0<e.height&&!x.flat?(c=n({align:h&&l&&"center",x:h?
!l&&4:10,verticalAlign:!h&&l&&"middle",y:h?l?16:10:l?6:-4,rotation:h&&!l&&90},c),this.renderLabel(c,x,l,L)):f&&f.hide();return g},renderLabel:function(a,e,h,m){var c=this.label,f=this.axis.chart.renderer;c||(c={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(a.className||"")},c.zIndex=m,this.label=c=f.text(a.text,0,0,a.useHTML).attr(c).add(),c.css(a.style));m=e.xBounds||[e[1],e[4],h?e[6]:e[1]];e=e.yBounds||[e[2],e[5],h?e[7]:e[2]];h=G(m);f=G(e);
c.align(a,!1,{x:h,y:f,width:B(m)-h,height:B(e)-f});c.show()},destroy:function(){r(this.axis.plotLinesAndBands,this);delete this.axis;g(this)}};a.extend(D.prototype,{getPlotBandPath:function(a,e){var h=this.getPlotLinePath(e,null,null,!0),m=this.getPlotLinePath(a,null,null,!0),c=[],f=this.horiz,b=1,d;a=a<this.min&&e<this.min||a>this.max&&e>this.max;if(m&&h)for(a&&(d=m.toString()===h.toString(),b=0),a=0;a<m.length;a+=6)f&&h[a+1]===m[a+1]?(h[a+1]+=b,h[a+4]+=b):f||h[a+2]!==m[a+2]||(h[a+2]+=b,h[a+5]+=
b),c.push("M",m[a+1],m[a+2],"L",m[a+4],m[a+5],h[a+4],h[a+5],h[a+1],h[a+2],"z"),c.flat=d;return c},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(g,e){var h=(new a.PlotLineOrBand(this,g)).render(),m=this.userOptions;h&&(e&&(m[e]=m[e]||[],m[e].push(g)),this.plotLinesAndBands.push(h));return h},removePlotBandOrLine:function(a){for(var e=this.plotLinesAndBands,h=this.options,m=this.userOptions,
c=e.length;c--;)e[c].id===a&&e[c].destroy();l([h.plotLines||[],m.plotLines||[],h.plotBands||[],m.plotBands||[]],function(f){for(c=f.length;c--;)f[c].id===a&&r(f,f[c])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(N,V);(function(a){var D=a.dateFormat,B=a.each,G=a.extend,p=a.format,g=a.isNumber,l=a.map,r=a.merge,n=a.pick,w=a.splat,v=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype=
{init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){B(this.chart.series,function(e){var c=e&&e.tt;c&&(!c.isActive||a?e.tt=c.destroy():c.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,null,"tooltip").attr({padding:e.padding,
r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();r(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,r(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},
move:function(a,e,c,f){var b=this,d=b.now,h=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-d.x)||1<Math.abs(e-d.y)),m=b.followPointer||1<b.len;G(d,{x:h?(2*d.x+a)/3:a,y:h?(d.y+e)/2:e,anchorX:m?void 0:h?(2*d.anchorX+c)/3:c,anchorY:m?void 0:h?(d.anchorY+f)/2:f});b.getLabel().attr(d);h&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,e,c,f)},32))},hide:function(a){var e=this;clearTimeout(this.hideTimer);a=n(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=
v(function(){e.getLabel()[a?"fadeOut":"hide"]();e.isHidden=!0},a))},getAnchor:function(a,e){var c,f=this.chart,b=f.inverted,d=f.plotTop,h=f.plotLeft,m=0,g=0,t,n;a=w(a);c=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=f.pointer.normalize(e)),c=[e.chartX-f.plotLeft,e.chartY-d]);c||(B(a,function(a){t=a.series.yAxis;n=a.series.xAxis;m+=a.plotX+(!b&&n?n.left-h:0);g+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!b&&t?t.top-d:0)}),m/=a.length,g/=a.length,c=[b?f.plotWidth-g:m,this.shared&&
!b&&1<a.length&&e?e.chartY-d:b?f.plotHeight-m:g]);return l(c,Math.round)},getPosition:function(a,e,c){var f=this.chart,b=this.distance,d={},h=f.inverted&&c.h||0,m,g=["y",f.chartHeight,e,c.plotY+f.plotTop,f.plotTop,f.plotTop+f.plotHeight],t=["x",f.chartWidth,a,c.plotX+f.plotLeft,f.plotLeft,f.plotLeft+f.plotWidth],l=!this.followPointer&&n(c.ttBelow,!f.inverted===!!c.negative),x=function(a,c,f,k,e,q){var m=f<k-b,y=k+b+f<c,u=k-b-f;k+=b;if(l&&y)d[a]=k;else if(!l&&m)d[a]=u;else if(m)d[a]=Math.min(q-f,0>
u-h?u:u-h);else if(y)d[a]=Math.max(e,k+h+f>c?k:k+h);else return!1},C=function(a,c,f,k){var e;k<b||k>c-b?e=!1:d[a]=k<f/2?1:k>c-f/2?c-f-2:k-f/2;return e},r=function(a){var b=g;g=t;t=b;m=a},q=function(){!1!==x.apply(0,g)?!1!==C.apply(0,t)||m||(r(!0),q()):m?d.x=d.y=0:(r(!0),q())};(f.inverted||1<this.len)&&r();q();return d},defaultFormatter:function(a){var e=this.points||w(this),c;c=[a.tooltipFooterHeaderFormatter(e[0])];c=c.concat(a.bodyFormatter(e));c.push(a.tooltipFooterHeaderFormatter(e[0],!0));return c},
refresh:function(a,e){var c,f=this.options,b,d=a,h,m={},g=[];c=f.formatter||this.defaultFormatter;var m=this.shared,t;f.enabled&&(clearTimeout(this.hideTimer),this.followPointer=w(d)[0].series.tooltipOptions.followPointer,h=this.getAnchor(d,e),e=h[0],b=h[1],!m||d.series&&d.series.noSharedTooltip?m=d.getLabelConfig():(B(d,function(a){a.setState("hover");g.push(a.getLabelConfig())}),m={x:d[0].category,y:d[0].y},m.points=g,d=d[0]),this.len=g.length,m=c.call(m,this),t=d.series,this.distance=n(t.tooltipOptions.distance,
16),!1===m?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(m,w(a)):(f.style.width||c.css({width:this.chart.spacingBox.width}),c.attr({text:m&&m.join?m.join(""):m}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+n(d.colorIndex,t.colorIndex)),c.attr({stroke:f.borderColor||d.color||t.color||"#666666"}),this.updatePosition({plotX:e,plotY:b,negative:d.negative,ttBelow:d.ttBelow,h:h[2]||0})),this.isHidden=!1))},renderSplit:function(e,
m){var c=this,f=[],b=this.chart,d=b.renderer,h=!0,g=this.options,l=0,t=this.getLabel();a.isString(e)&&(e=[!1,e]);B(e.slice(0,m.length+1),function(a,e){if(!1!==a){e=m[e-1]||{isHeader:!0,plotX:m[0].plotX};var y=e.series||c,x=y.tt,q=e.series||{},A="highcharts-color-"+n(e.colorIndex,q.colorIndex,"none");x||(y.tt=x=d.label(null,null,null,"callout",null,null,g.useHTML).addClass("highcharts-tooltip-box "+A).attr({padding:g.padding,r:g.borderRadius,fill:g.backgroundColor,stroke:g.borderColor||e.color||q.color||
"#333333","stroke-width":g.borderWidth}).add(t));x.isActive=!0;x.attr({text:a});x.css(g.style).shadow(g.shadow);a=x.getBBox();q=a.width+x.strokeWidth();e.isHeader?(l=a.height,q=Math.max(0,Math.min(e.plotX+b.plotLeft-q/2,b.chartWidth-q))):q=e.plotX+b.plotLeft-n(g.distance,16)-q;0>q&&(h=!1);a=(e.series&&e.series.yAxis&&e.series.yAxis.pos)+(e.plotY||0);a-=b.plotTop;f.push({target:e.isHeader?b.plotHeight+l:a,rank:e.isHeader?1:0,size:y.tt.getBBox().height+1,point:e,x:q,tt:x})}});this.cleanSplit();a.distribute(f,
b.plotHeight+l);B(f,function(a){var d=a.point,c=d.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:h||d.isHeader?a.x:d.plotX+b.plotLeft+n(g.distance,16),y:a.pos+b.plotTop,anchorX:d.isHeader?d.plotX+b.plotLeft:d.plotX+c.xAxis.pos,anchorY:d.isHeader?a.pos+b.plotTop-15:d.plotY+c.yAxis.pos})})},updatePosition:function(a){var e=this.chart,c=this.getLabel(),c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(Math.round(c.x),Math.round(c.y||0),a.plotX+e.plotLeft,
a.plotY+e.plotTop)},getDateFormat:function(a,m,c,f){var b=D("%m-%d %H:%M:%S.%L",m),d,h,g={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(h in e){if(a===e.week&&+D("%w",m)===c&&"00:00:00.000"===b.substr(6)){h="week";break}if(e[h]>a){h=l;break}if(g[h]&&b.substr(g[h])!=="01-01 00:00:00.000".substr(g[h]))break;"week"!==h&&(l=h)}h&&(d=f[h]);return d},getXDateFormat:function(a,e,c){e=e.dateTimeLabelFormats;var f=c&&c.closestPointRange;return(f?this.getDateFormat(f,a.x,c.options.startOfWeek,
e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){e=e?"footer":"header";var c=a.series,f=c.tooltipOptions,b=f.xDateFormat,d=c.xAxis,h=d&&"datetime"===d.options.type&&g(a.key),m=f[e+"Format"];h&&!b&&(b=this.getXDateFormat(a,f,d));h&&b&&B(a.point&&a.point.tooltipDateKeys||["key"],function(a){m=m.replace("{point."+a+"}","{point."+a+":"+b+"}")});return p(m,{point:a,series:c})},bodyFormatter:function(a){return l(a,function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+
"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(N);(function(a){var D=a.addEvent,B=a.attr,G=a.charts,p=a.color,g=a.css,l=a.defined,r=a.each,n=a.extend,w=a.find,v=a.fireEvent,e=a.isObject,h=a.offset,m=a.pick,c=a.splat,f=a.Tooltip;a.Pointer=function(a,d){this.init(a,d)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=
new f(a,d.tooltip),this.followTouchMove=m(d.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(f=m(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=f&&!b||a&&b;this.hasZoom=a||f},normalize:function(a,d){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;d||(this.chartPosition=d=h(this.chart.container));return n(a,
{chartX:Math.round(b.pageX-d.left),chartY:Math.round(b.pageY-d.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};r(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,d,c){var b;r(a,function(a){var f=!(a.noSharedTooltip&&d)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(c,f);if((f=e(a,!0))&&!(f=!e(b,!0)))var f=b.distX-a.distX,h=b.dist-a.dist,m=(a.series.group&&a.series.group.zIndex)-
(b.series.group&&b.series.group.zIndex),f=0<(0!==f&&d?f:0!==h?h:0!==m?m:b.series.index>a.series.index?-1:1);f&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,d){var b=a.series,c=b.xAxis,b=b.yAxis,f=m(a.clientX,a.plotX);if(c&&b)return d?{chartX:c.len+c.pos-f,chartY:b.len+b.pos-a.plotY}:{chartX:f+c.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,c,f,h,g,t,l){var d,y=[],n=l&&l.isBoosting;h=!(!h||
!b);l=c&&!c.stickyTracking?[c]:a.grep(f,function(a){return a.visible&&!(!g&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(d=h?b:this.findNearestKDPoint(l,g,t))&&d.series;d&&(g&&!c.noSharedTooltip?(l=a.grep(f,function(a){return a.visible&&!(!g&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),r(l,function(a){var b=w(a.points,function(a){return a.x===d.x&&!a.isNull});e(b)&&(n&&(b=a.getPoint(b)),y.push(b))})):y.push(d));return{hoverPoint:d,hoverSeries:c,
hoverPoints:y}},runPointActions:function(b,c){var d=this.chart,f=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,e=f?f.shared:!1,h=c||d.hoverPoint,g=h&&h.series||d.hoverSeries,g=this.getHoverData(h,g,d.series,!!c||g&&g.directTouch&&this.isDirectTouch,e,b,{isBoosting:d.isBoosting}),l,h=g.hoverPoint;l=g.hoverPoints;c=(g=g.hoverSeries)&&g.tooltipOptions.followPointer;e=e&&g&&!g.noSharedTooltip;if(h&&(h!==d.hoverPoint||f&&f.isHidden)){r(d.hoverPoints||[],function(b){-1===a.inArray(b,l)&&b.setState()});
r(l||[],function(a){a.setState("hover")});if(d.hoverSeries!==g)g.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!h.series)return;h.firePointEvent("mouseOver");d.hoverPoints=l;d.hoverPoint=h;f&&f.refresh(e?l:h,b)}else c&&f&&!f.isHidden&&(h=f.getAnchor([{}],b),f.updatePosition({plotX:h[0],plotY:h[1]}));this.unDocMouseMove||(this.unDocMouseMove=D(d.container.ownerDocument,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));r(d.axes,function(c){var d=
m(c.crosshair.snap,!0),f=d?a.find(l,function(a){return a.series[c.coll]===c}):void 0;f||!d?c.drawCrosshair(b,f):c.hideCrosshair()})},reset:function(a,d){var b=this.chart,f=b.hoverSeries,e=b.hoverPoint,h=b.hoverPoints,g=b.tooltip,m=g&&g.shared?h:e;a&&m&&r(c(m),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)g&&m&&(g.refresh(m),e&&(e.setState(e.state,!0),r(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();h&&r(h,function(a){a.setState()});if(f)f.onMouseOut();
g&&g.hide(d);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());r(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;r(b.series,function(f){d=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(d),f.markerGroup&&(f.markerGroup.attr(d),f.markerGroup.clip(c?b.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;
b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,f=a.chartX,e=a.chartY,h=this.zoomHor,g=this.zoomVert,m=b.plotLeft,l=b.plotTop,n=b.plotWidth,q=b.plotHeight,A,E=this.selectionMarker,F=this.mouseDownX,k=this.mouseDownY,u=c.panKey&&a[c.panKey+"Key"];E&&E.touch||(f<m?f=m:f>m+n&&(f=m+n),e<l?e=l:e>l+q&&(e=l+q),this.hasDragged=Math.sqrt(Math.pow(F-f,2)+Math.pow(k-e,2)),10<this.hasDragged&&
(A=b.isInsidePlot(F-m,k-l),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&A&&!u&&!E&&(this.selectionMarker=E=b.renderer.rect(m,l,h?1:n,g?1:q,0).attr({fill:c.selectionMarkerFill||p("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),E&&h&&(f-=F,E.attr({width:Math.abs(f),x:(0<f?0:f)+F})),E&&g&&(f=e-k,E.attr({height:Math.abs(f),y:(0<f?0:f)+k})),A&&!E&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,f=this.hasPinched;if(this.selectionMarker){var e=
{originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,m=h.attr?h.attr("x"):h.x,x=h.attr?h.attr("y"):h.y,C=h.attr?h.attr("width"):h.width,p=h.attr?h.attr("height"):h.height,q;if(this.hasDragged||f)r(c.axes,function(c){if(c.zoomEnabled&&l(c.min)&&(f||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var d=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,k=c.toValue((d?m:x)+h),d=c.toValue((d?m+C:x+p)-h);e[c.coll].push({axis:c,min:Math.min(k,d),max:Math.max(k,d)});q=!0}}),q&&v(c,"selection",e,function(a){c.zoom(n(a,
f?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();f&&this.scaleGroups()}c&&(g(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;l(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=B(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,f=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(v(c.series,"click",n(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(n(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-e)&&v(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,f=c.ownerDocument;
c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=D(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=D(f,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=D(f,"touchend",b.onDocumentTouchEnd)))},
destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(N);(function(a){var D=a.charts,B=a.each,G=a.extend,p=a.map,g=a.noop,l=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,g,l,p,e,h){this.zoomHor&&
this.pinchTranslateDirection(!0,a,g,l,p,e,h);this.zoomVert&&this.pinchTranslateDirection(!1,a,g,l,p,e,h)},pinchTranslateDirection:function(a,g,l,p,e,h,m,c){var f=this.chart,b=a?"x":"y",d=a?"X":"Y",y="chart"+d,n=a?"width":"height",r=f["plot"+(a?"Left":"Top")],t,v,x=c||1,C=f.inverted,w=f.bounds[a?"h":"v"],q=1===g.length,A=g[0][y],E=l[0][y],F=!q&&g[1][y],k=!q&&l[1][y],u;l=function(){!q&&20<Math.abs(A-F)&&(x=c||Math.abs(E-k)/Math.abs(A-F));v=(r-E)/x+A;t=f["plot"+(a?"Width":"Height")]/x};l();g=v;g<w.min?
(g=w.min,u=!0):g+t>w.max&&(g=w.max-t,u=!0);u?(E-=.8*(E-m[b][0]),q||(k-=.8*(k-m[b][1])),l()):m[b]=[E,k];C||(h[b]=v-r,h[n]=t);h=C?1/x:x;e[n]=t;e[b]=g;p[C?a?"scaleY":"scaleX":"scale"+d]=x;p["translate"+d]=h*r+(E-h*A)},pinch:function(a){var n=this,r=n.chart,v=n.pinchDown,e=a.touches,h=e.length,m=n.lastValidTouch,c=n.hasZoom,f=n.selectionMarker,b={},d=1===h&&(n.inClass(a.target,"highcharts-tracker")&&r.runTrackerClick||n.runChartClick),y={};1<h&&(n.initiated=!0);c&&n.initiated&&!d&&a.preventDefault();
p(e,function(a){return n.normalize(a)});"touchstart"===a.type?(B(e,function(a,b){v[b]={chartX:a.chartX,chartY:a.chartY}}),m.x=[v[0].chartX,v[1]&&v[1].chartX],m.y=[v[0].chartY,v[1]&&v[1].chartY],B(r.axes,function(a){if(a.zoomEnabled){var b=r.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,f=a.toPixels(l(a.options.min,a.dataMin)),d=a.toPixels(l(a.options.max,a.dataMax)),e=Math.max(f,d);b.min=Math.min(a.pos,Math.min(f,d)-c);b.max=Math.max(a.pos+a.len,e+c)}}),n.res=!0):n.followTouchMove&&1===h?this.runPointActions(n.normalize(a)):
v.length&&(f||(n.selectionMarker=f=G({destroy:g,touch:!0},r.plotBox)),n.pinchTranslate(v,e,b,f,y,m),n.hasPinched=c,n.scaleGroups(b,y),n.res&&(n.res=!1,this.reset(!1,0)))},touch:function(g,n){var r=this.chart,p,e;if(r.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=r.index;1===g.touches.length?(g=this.normalize(g),(e=r.isInsidePlot(g.chartX-r.plotLeft,g.chartY-r.plotTop))&&!r.openMenu?(n&&this.runPointActions(g),"touchmove"===g.type&&(n=this.pinchDown,p=n[0]?
4<=Math.sqrt(Math.pow(n[0].chartX-g.chartX,2)+Math.pow(n[0].chartY-g.chartY,2)):!1),l(p,!0)&&this.pinch(g)):n&&this.reset()):2===g.touches.length&&this.pinch(g)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(g){D[a.hoverChartIndex]&&D[a.hoverChartIndex].pointer.drop(g)}})})(N);(function(a){var D=a.addEvent,B=a.charts,G=a.css,p=a.doc,g=a.extend,l=a.noop,r=a.Pointer,n=a.removeEvent,w=a.win,v=a.wrap;
if(!a.hasTouch&&(w.PointerEvent||w.MSPointerEvent)){var e={},h=!!w.PointerEvent,m=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(e,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},c=function(c,b,d,e){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!B[a.hoverChartIndex]||(e(c),e=B[a.hoverChartIndex].pointer,e[b]({type:d,target:c.currentTarget,preventDefault:l,touches:m()}))};g(r.prototype,{onContainerPointerDown:function(a){c(a,"onContainerTouchStart",
"touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){c(a,"onContainerTouchMove","touchmove",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){c(a,"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,h?"pointerdown":"MSPointerDown",this.onContainerPointerDown);
a(this.chart.container,h?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(p,h?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});v(r.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&G(b.container,{"-ms-touch-action":"none","touch-action":"none"})});v(r.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});v(r.prototype,"destroy",function(a){this.batchMSEvents(n);a.call(this)})}})(N);(function(a){var D=a.addEvent,
B=a.css,G=a.discardElement,p=a.defined,g=a.each,l=a.isFirefox,r=a.marginNames,n=a.merge,w=a.pick,v=a.setAnimation,e=a.stableSort,h=a.win,m=a.wrap;a.Legend=function(a,f){this.init(a,f)};a.Legend.prototype={init:function(a,f){this.chart=a;this.setOptions(f);f.enabled&&(this.render(),D(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=w(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=n(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=
a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=w(a.symbolWidth,16);this.pages=[]},update:function(a,f){var b=this.chart;this.setOptions(n(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;w(f,!0)&&b.redraw()},colorizeItem:function(a,f){a.legendGroup[f?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,c=a.legendItem,e=a.legendLine,h=a.legendSymbol,g=this.itemHiddenStyle.color,b=f?b.itemStyle.color:
g,m=f?a.color||g:g,l=a.options&&a.options.marker,x={fill:m};c&&c.css({fill:b,color:b});e&&e.attr({stroke:m});h&&(l&&h.isMarker&&(x=a.pointAttribs(),f||(x.stroke=x.fill=g)),h.attr(x))},positionItem:function(a){var c=this.options,b=c.symbolPadding,c=!c.rtl,d=a._legendItemPos,e=d[0],d=d[1],h=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*b-4,d);h&&(h.x=e,h.y=d)},destroyItem:function(a){var c=a.checkbox;g(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&
(a[b]=a[b].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}g(this.getAllItems(),function(c){g(["legendItem","legendGroup"],a,c)});g("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,f,b=this.clipHeight||this.legendHeight,d=this.titleHeight;a&&(f=a.translateY,g(this.allItems,function(c){var e=c.checkbox,h;e&&(h=f+d+e.y+(this.scrollOffset||0)+3,B(e,
{left:a.translateX+c.checkboxOffset+e.x-20+"px",top:h+"px",display:h>f-6&&h<f+b-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,f=this.padding,b=a.title,d=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,f-3,f-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(c){var f=this.options;c.legendItem.attr({text:f.labelFormat?
a.format(f.labelFormat,c):f.labelFormatter.call(c)})},renderItem:function(a){var c=this.chart,b=c.renderer,d=this.options,e="horizontal"===d.layout,h=this.symbolWidth,g=d.symbolPadding,m=this.itemStyle,l=this.itemHiddenStyle,x=this.padding,C=e?w(d.itemDistance,20):0,r=!d.rtl,q=d.width,A=d.itemMarginBottom||0,E=this.itemMarginTop,F=a.legendItem,k=!a.series,u=!k&&a.series.drawLegendSymbol?a.series:a,p=u.options,v=this.createCheckboxForItem&&p&&p.showCheckbox,p=h+g+C+(v?20:0),P=d.useHTML,I=a.options.className;
F||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+u.type+"-series highcharts-color-"+a.colorIndex+(I?" "+I:"")+(k?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=F=b.text("",r?h+g:-g,this.baseline||0,P).css(n(a.visible?m:l)).attr({align:r?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=m.fontSize,this.fontMetrics=b.fontMetrics(h,F),this.baseline=this.fontMetrics.f+3+E,F.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,
u.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,F,P),v&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);m.width||F.css({width:(d.itemWidth||d.width||c.spacingBox.width)-p});this.setText(a);b=F.getBBox();m=a.checkboxOffset=d.itemWidth||a.legendItemWidth||b.width+p;this.itemHeight=b=Math.round(a.legendItemHeight||b.height||this.symbolHeight);e&&this.itemX-x+m>(q||c.spacingBox.width-2*x-d.x)&&(this.itemX=x,this.itemY+=E+this.lastLineHeight+A,this.lastLineHeight=0);this.maxItemWidth=
Math.max(this.maxItemWidth,m);this.lastItemY=E+this.itemY+A;this.lastLineHeight=Math.max(b,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=m:(this.itemY+=E+b+A,this.lastLineHeight=b);this.offsetWidth=q||Math.max((e?this.itemX-x-(a.checkbox?0:C):m)+x,this.offsetWidth)},getAllItems:function(){var a=[];g(this.chart.series,function(c){var b=c&&c.options;c&&w(b.showInLegend,p(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});return a},
adjustMargins:function(a,f){var b=this.chart,c=this.options,e=c.align.charAt(0)+c.verticalAlign.charAt(0)+c.layout.charAt(0);c.floating||g([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(d,h){d.test(e)&&!p(a[h])&&(b[r[h]]=Math.max(b[r[h]],b.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*c[h%2?"x":"y"]+w(c.margin,12)+f[h]))})},render:function(){var a=this,f=a.chart,b=f.renderer,d=a.group,h,m,l,t,p=a.box,x=a.options,r=a.padding;a.itemX=r;a.itemY=a.initialItemY;a.offsetWidth=
0;a.lastItemY=0;d||(a.group=d=b.g("legend").attr({zIndex:7}).add(),a.contentGroup=b.g().attr({zIndex:1}).add(d),a.scrollGroup=b.g().add(a.contentGroup));a.renderTitle();h=a.getAllItems();e(h,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});x.reversed&&h.reverse();a.allItems=h;a.display=m=!!h.length;a.lastLineHeight=0;g(h,function(b){a.renderItem(b)});l=(x.width||a.offsetWidth)+r;t=a.lastItemY+a.lastLineHeight+a.titleHeight;t=a.handleOverflow(t);t+=
r;p||(a.box=p=b.rect().addClass("highcharts-legend-box").attr({r:x.borderRadius}).add(d),p.isNew=!0);p.attr({stroke:x.borderColor,"stroke-width":x.borderWidth||0,fill:x.backgroundColor||"none"}).shadow(x.shadow);0<l&&0<t&&(p[p.isNew?"attr":"animate"](p.crisp.call({},{x:0,y:0,width:l,height:t},p.strokeWidth())),p.isNew=!1);p[m?"show":"hide"]();a.legendWidth=l;a.legendHeight=t;g(h,function(b){a.positionItem(b)});m&&d.align(n(x,{width:l,height:t}),!0,"spacingBox");f.isResizing||this.positionCheckboxes()},
handleOverflow:function(a){var c=this,b=this.chart,d=b.renderer,e=this.options,h=e.y,m=this.padding,b=b.spacingBox.height+("top"===e.verticalAlign?-h:h)-m,h=e.maxHeight,l,n=this.clipRect,x=e.navigation,p=w(x.animation,!0),r=x.arrowSize||12,q=this.nav,A=this.pages,E,F=this.allItems,k=function(a){"number"===typeof a?n.attr({height:a}):n&&(c.clipRect=n.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")};"horizontal"!==e.layout||
"middle"===e.verticalAlign||e.floating||(b/=2);h&&(b=Math.min(b,h));A.length=0;a>b&&!1!==x.enabled?(this.clipHeight=l=Math.max(b-20-this.titleHeight-m,0),this.currentPage=w(this.currentPage,1),this.fullHeight=a,g(F,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=A.length;if(!d||c-A[d-1]>l&&(E||c)!==A[d-1])A.push(E||c),d++;b===F.length-1&&c+a-A[d-1]>l&&A.push(c);c!==E&&(E=c)}),n||(n=c.clipRect=d.clipRect(0,m,9999,0),c.contentGroup.clip(n)),k(l),q||(this.nav=
q=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,r,r).on("click",function(){c.scroll(-1,p)}).add(q),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(x.style).add(q),this.down=d.symbol("triangle-down",0,0,r,r).on("click",function(){c.scroll(1,p)}).add(q)),c.scroll(0),a=b):q&&(k(),this.nav=q.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,f){var b=this.pages,c=b.length;a=this.currentPage+a;var e=this.clipHeight,
h=this.options.navigation,g=this.pager,m=this.padding;a>c&&(a=c);0<a&&(void 0!==f&&v(f,this.chart),this.nav.attr({translateX:m,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+c}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===c?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===
a?"default":"pointer"}),this.down.attr({fill:a===c?h.inactiveColor:h.activeColor}).css({cursor:a===c?"default":"pointer"}),this.scrollOffset=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,f){var b=a.symbolHeight,c=a.options.squareSymbol;f.legendSymbol=this.chart.renderer.rect(c?(a.symbolWidth-b)/2:0,a.baseline-b+1,c?b:a.symbolWidth,b,w(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(f.legendGroup)},
drawLineMarker:function(a){var c=this.options,b=c.marker,d=a.symbolWidth,e=a.symbolHeight,h=e/2,g=this.chart.renderer,m=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var l;l={"stroke-width":c.lineWidth||0};c.dashStyle&&(l.dashstyle=c.dashStyle);this.legendLine=g.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(l).add(m);b&&!1!==b.enabled&&(c=Math.min(w(b.radius,h),h),0===this.symbol.indexOf("url")&&(b=n(b,{width:e,height:e}),c=0),this.legendSymbol=b=g.symbol(this.symbol,d/
2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(m),b.isMarker=!0)}};(/Trident\/7\.0/.test(h.navigator.userAgent)||l)&&m(a.Legend.prototype,"positionItem",function(a,f){var b=this,c=function(){f._legendItemPos&&a.call(b,f)};c();setTimeout(c)})})(N);(function(a){var D=a.addEvent,B=a.animate,G=a.animObject,p=a.attr,g=a.doc,l=a.Axis,r=a.createElement,n=a.defaultOptions,w=a.discardElement,v=a.charts,e=a.css,h=a.defined,m=a.each,c=a.extend,f=a.find,b=a.fireEvent,d=a.grep,y=a.isNumber,H=a.isObject,J=
a.isString,t=a.Legend,K=a.marginNames,x=a.merge,C=a.objectEach,L=a.Pointer,q=a.pick,A=a.pInt,E=a.removeEvent,F=a.seriesTypes,k=a.splat,u=a.svg,R=a.syncTimeout,M=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};c(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(J(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,f,k=b.series,e=b.plotOptions||{};b.series=null;d=x(n,b);for(f in d.plotOptions)d.plotOptions[f].tooltip=
e[f]&&x(e[f].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=k;this.userOptions=b;b=d.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var q=this;q.index=v.length;v.push(q);a.chartCount++;f&&C(f,function(a,b){D(q,b,a)});q.xAxis=[];q.yAxis=[];q.pointCount=q.colorCounter=q.symbolCounter=
0;q.firstRender()},initSeries:function(b){var c=this.options.chart;(c=F[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(d){var f=this.axes,k=this.series,e=this.pointer,q=this.legend,h=this.isDirtyLegend,
g,l,u=this.hasCartesianSeries,A=this.isDirtyBox,E,t=this.renderer,n=t.isHidden(),x=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(d,this);n&&this.temporaryDisplay();this.layOutTitles();for(d=k.length;d--;)if(E=k[d],E.options.stacking&&(g=!0,E.isDirty)){l=!0;break}if(l)for(d=k.length;d--;)E=k[d],E.options.stacking&&(E.isDirty=!0);m(k,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),h=!0);a.isDirtyData&&b(a,"updatedData")});h&&q.options.enabled&&
(q.render(),this.isDirtyLegend=!1);g&&this.getStacks();u&&m(f,function(a){a.updateNames();a.setScale()});this.getMargins();u&&(m(f,function(a){a.isDirty&&(A=!0)}),m(f,function(a){var d=a.min+","+a.max;a.extKey!==d&&(a.extKey=d,x.push(function(){b(a,"afterSetExtremes",c(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(A||g)&&a.redraw()}));A&&this.drawChartBox();b(this,"predraw");m(k,function(a){(A||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);t.draw();b(this,"redraw");b(this,
"render");n&&this.temporaryDisplay(!0);m(x,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,k;c=f(this.axes,b)||f(this.series,b);for(k=0;!c&&k<d.length;k++)c=f(d[k].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=k(b.xAxis||{}),b=b.yAxis=k(b.yAxis||{});m(c,function(a,b){a.index=b;a.isX=!0});m(b,function(a,b){a.index=b});c=c.concat(b);m(c,function(b){new l(a,b)})},getSelectedPoints:function(){var a=
[];m(this.series,function(b){a=a.concat(d(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return d(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,k;k=f.title=x({style:{color:"#333333",fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=x({style:{color:"#666666"}},f.subtitle,b);m([["title",a,k],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],k=a[1];a=a[2];f&&k&&(d[c]=f=f.destroy());a&&!f&&(d[c]=d.renderer.text(a.text,
0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,d,f=this.renderer,k=this.spacingBox;m(["title","subtitle"],function(a){var d=this[a],e=this.options[a];a="title"===a?-3:e.verticalAlign?0:b+2;var q;d&&(q=e.style.fontSize,q=f.fontMetrics(q,d).b,d.css({width:(e.width||k.width+e.widthAdjust)+"px"}).align(c({y:a+q},e),!1,"spacingBox"),e.floating||
e.verticalAlign||(b=Math.ceil(b+d.getBBox(e.useHTML).height)))},this);d=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&d&&(this.isDirtyBox=d,this.hasRendered&&q(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,d=this.renderTo;h(c)||(this.containerWidth=a.getStyle(d,"width"));h(b)||(this.containerHeight=a.getStyle(d,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,
this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(g.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){g.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,g.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},
b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===g.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,d=this.options,f=d.chart,k,e;b=this.renderTo;var q=a.uniqueKey(),h;b||(this.renderTo=b=f.renderTo);J(b)&&(this.renderTo=b=g.getElementById(b));b||a.error(13,!0);k=A(p(b,"data-highcharts-chart"));y(k)&&v[k]&&
v[k].hasRendered&&v[k].destroy();p(b,"data-highcharts-chart",this.index);b.innerHTML="";f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();k=this.chartWidth;e=this.chartHeight;h=c({position:"relative",overflow:"hidden",width:k+"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},f.style);this.container=b=r("div",{id:q},h,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||a.Renderer)(b,k,e,null,f.forExport,
d.exporting&&d.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d&&!h(c[0])&&(this.plotTop=Math.max(this.plotTop,d+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&
this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&m(a.axes,function(a){a.visible&&a.getOffset()});m(K,function(d,f){h(c[f])||(a[d]+=b[f])});a.setChartSize()},reflow:function(b){var c=this,d=c.options.chart,f=c.renderTo,k=h(d.width)&&h(d.height),e=d.width||a.getStyle(f,"width"),d=d.height||a.getStyle(f,"height"),f=b?b.target:M;if(!k&&!c.isPrinting&&e&&d&&(f===M||f===g)){if(e!==c.containerWidth||d!==c.containerHeight)clearTimeout(c.reflowTimeout),
c.reflowTimeout=R(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=e;c.containerHeight=d}},initReflow:function(){var a=this,b;b=D(M,"resize",function(b){a.reflow(b)});D(a,"destroy",b)},setSize:function(c,d,f){var k=this,q=k.renderer;k.isResizing+=1;a.setAnimation(f,k);k.oldChartHeight=k.chartHeight;k.oldChartWidth=k.chartWidth;void 0!==c&&(k.options.chart.width=c);void 0!==d&&(k.options.chart.height=d);k.getChartSize();c=q.globalAnimation;(c?B:e)(k.container,{width:k.chartWidth+
"px",height:k.chartHeight+"px"},c);k.setChartSize(!0);q.setSize(k.chartWidth,k.chartHeight,f);m(k.axes,function(a){a.isDirty=!0;a.setScale()});k.isDirtyLegend=!0;k.isDirtyBox=!0;k.layOutTitles();k.getMargins();k.redraw(f);k.oldChartHeight=null;b(k,"resize");R(function(){k&&b(k,"endResize",null,function(){--k.isResizing})},G(c).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,k=this.chartHeight,f=this.options.chart,e=this.spacing,q=this.clipOffset,h,g,l,u;this.plotLeft=
h=Math.round(this.plotLeft);this.plotTop=g=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(d-h-this.marginRight));this.plotHeight=u=Math.max(0,Math.round(k-g-this.marginBottom));this.plotSizeX=b?u:l;this.plotSizeY=b?l:u;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:k-e[0]-e[2]};this.plotBox=c.plotBox={x:h,y:g,width:l,height:u};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,q[3])/2);c=Math.ceil(Math.max(d,
q[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,q[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,q[2])/2-c))};a||m(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;m(["margin","spacing"],function(c){var d=b[c],k=H(d)?d:[d,d,d,d];m(["Top","Right","Bottom","Left"],function(d,f){a[c][f]=q(b[c+d],k[f])})});m(K,function(b,c){a[b]=q(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=
[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,k=this.chartBackground,f=this.plotBackground,e=this.plotBorder,q,h=this.plotBGImage,g=a.backgroundColor,m=a.plotBackgroundColor,l=a.plotBackgroundImage,u,A=this.plotLeft,E=this.plotTop,t=this.plotWidth,n=this.plotHeight,x=this.plotBox,y=this.clipRect,F=this.clipBox,p="animate";k||(this.chartBackground=k=b.rect().addClass("highcharts-background").add(),p="attr");q=a.borderWidth||0;u=q+(a.shadow?
8:0);g={fill:g||"none"};if(q||k["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=q;k.attr(g).shadow(a.shadow);k[p]({x:u/2,y:u/2,width:c-u-q%2,height:d-u-q%2,r:a.borderRadius});p="animate";f||(p="attr",this.plotBackground=f=b.rect().addClass("highcharts-plot-background").add());f[p](x);f.attr({fill:m||"none"}).shadow(a.plotShadow);l&&(h?h.animate(x):this.plotBGImage=b.image(l,A,E,t,n).add());y?y.animate({width:F.width,height:F.height}):this.clipRect=b.clipRect(F);p="animate";e||(p="attr",this.plotBorder=
e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[p](e.crisp({x:A,y:E,width:t,height:n},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,k,f;m(["inverted","angular","polar"],function(e){c=F[b.type||b.defaultSeriesType];f=b[e]||c&&c.prototype[e];for(k=d&&d.length;!f&&k--;)(c=F[d[k].type])&&c.prototype[e]&&(f=!0);a[e]=f})},linkSeries:function(){var a=
this,b=a.series;m(b,function(a){a.linkedSeries.length=0});m(b,function(b){var c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=q(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){m(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&m(b.items,function(d){var k=c(b.style,d.style),f=A(k.left)+a.plotLeft,e=A(k.top)+
a.plotTop+12;delete k.left;delete k.top;a.renderer.text(d.html,f,e).attr({zIndex:2}).css(k).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,k,f;this.setTitle();this.legend=new t(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);m(a,function(a){a.setScale()});this.getAxisMargins();k=1.1<c/this.plotWidth;f=1.05<d/this.plotHeight;if(k||f)m(a,function(a){(a.horiz&&k||!a.horiz&&
f)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&m(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=x(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",
function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var c=this,d=c.axes,k=c.series,f=c.container,e,q=f&&f.parentNode;b(c,"destroy");c.renderer.forExport?a.erase(v,c):v[c.index]=void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");E(c);for(e=d.length;e--;)d[e]=d[e].destroy();this.scroller&&this.scroller.destroy&&
this.scroller.destroy();for(e=k.length;e--;)k[e]=k[e].destroy();m("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var b=c[a];b&&b.destroy&&(c[a]=b.destroy())});f&&(f.innerHTML="",E(f),q&&w(f));C(c,function(a,b){delete c[b]})},isReadyToRender:function(){var a=this;return u||M!=M.top||"complete"===g.readyState?!0:(g.attachEvent("onreadystatechange",function(){g.detachEvent("onreadystatechange",
a.firstRender);"complete"===g.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,c=a.options;if(a.isReadyToRender()){a.getContainer();b(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();m(c.series||[],function(b){a.initSeries(b)});a.linkSeries();b(a,"beforeRender");L&&(a.pointer=new L(a,c));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){m([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&
a.apply(this,[this])},this);b(this,"load");b(this,"render");h(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(N);(function(a){var D,B=a.each,G=a.extend,p=a.erase,g=a.fireEvent,l=a.format,r=a.isArray,n=a.isNumber,w=a.pick,v=a.removeEvent;a.Point=D=function(){};a.Point.prototype={init:function(a,h,g){this.series=a;this.color=a.color;this.applyOptions(h,g);a.options.colorByPoint?(h=a.options.colors||a.chart.options.colors,this.color=this.color||h[a.colorCounter],
h=h.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===h&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=w(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,h){var e=this.series,c=e.options.pointValKey||e.pointValKey;a=D.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;c&&(this.y=this[c]);this.isNull=w(this.isValid&&!this.isValid(),null===this.x||!n(this.y,!0));this.selected&&(this.state=
"select");"name"in this&&void 0===h&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===h?e.autoIncrement(this):h);return this},optionsToObject:function(a){var e={},g=this.series,c=g.options.keys,f=c||g.pointArrayMap||["y"],b=f.length,d=0,l=0;if(n(a)||null===a)e[f[0]]=a;else if(r(a))for(!c&&a.length>b&&(g=typeof a[0],"string"===g?e.name=a[0]:"number"===g&&(e.x=a[0]),d++);l<b;)c&&void 0===a[d]||(e[f[l]]=a[d]),d++,l++;else"object"===typeof a&&(e=a,a.dataLabels&&
(g._hasPointLabels=!0),a.marker&&(g._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,
h=a.zones,a=a.zoneAxis||"y",g=0,c;for(c=h[g];this[a]>=c.value;)c=h[++g];c&&c.color&&!this.options.color&&(this.color=c.color);return c},destroy:function(){var a=this.series.chart,h=a.hoverPoints,g;a.pointCount--;h&&(this.setState(),p(h,this),h.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)v(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel",
"dataLabelUpper","connector","shadowGroup"],h,g=6;g--;)h=a[g],this[h]&&(this[h]=this[h].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,g=e.tooltipOptions,c=w(g.valueDecimals,""),f=g.valuePrefix||"",b=g.valueSuffix||"";B(e.pointArrayMap||["y"],function(d){d="{point."+
d;if(f||b)a=a.replace(d+"}",f+d+"}"+b);a=a.replace(d+"}",d+":,."+c+"f}")});return l(a,{point:this,series:this.series})},firePointEvent:function(a,h,m){var c=this,f=this.series.options;(f.point.events[a]||c.options&&c.options.events&&c.options.events[a])&&this.importEvents();"click"===a&&f.allowPointSelect&&(m=function(a){c.select&&c.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});g(this,a,h,m)},visible:!0}})(N);(function(a){var D=a.addEvent,B=a.animObject,G=a.arrayMax,p=a.arrayMin,g=a.correctFloat,
l=a.Date,r=a.defaultOptions,n=a.defaultPlotOptions,w=a.defined,v=a.each,e=a.erase,h=a.extend,m=a.fireEvent,c=a.grep,f=a.isArray,b=a.isNumber,d=a.isString,y=a.merge,H=a.objectEach,J=a.pick,t=a.removeEvent,K=a.splat,x=a.SVGElement,C=a.syncTimeout,L=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",
lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},
{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,k=a.series,f;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();h(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});d=b.events;H(d,function(a,b){D(c,b,a)});if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();
c.getSymbol();v(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(f=k[k.length-1]);c._i=J(f&&f._i,-1)+1;a.orderSeries(this.insert(k))},insert:function(a){var c=this.options.index,d;if(b(c)){for(d=a.length;d--;)if(c>=J(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return J(d,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;v(b.axisTypes||[],function(k){v(d[k],
function(a){f=a.options;if(c[k]===f.index||void 0!==c[k]&&c[k]===f.id||void 0===c[k]&&0===f.index)b.insert(a.series),b[k]=a,a.isDirty=!0});b[k]||b.optionalAxis===k||a.error(18,!0)})},updateParallelArrays:function(a,c){var d=a.series,f=arguments,k=b(c)?function(b){var f="y"===b&&d.toYData?d.toYData(a):a[b];d[b+"Data"][c]=f}:function(a){Array.prototype[c].apply(d[a+"Data"],Array.prototype.slice.call(f,2))};v(d.parallelArrays,k)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,
b=J(b,a.pointStart,0);this.pointInterval=c=J(this.pointInterval,a.pointInterval,1);d&&(a=new l(b),"day"===d?a=+a[l.hcSetDate](a[l.hcGetDate]()+c):"month"===d?a=+a[l.hcSetMonth](a[l.hcGetMonth]()+c):"year"===d&&(a=+a[l.hcSetFullYear](a[l.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,f=(b.userOptions||{}).plotOptions||{},e=d[this.type];this.userOptions=a;b=y(e,d.series,a);this.tooltipOptions=y(r.tooltip,r.plotOptions.series&&
r.plotOptions.series.tooltip,r.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=J(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===e.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+
"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&w(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var d,f=this.chart,e=this.userOptions,h=a+"Index",q=a+"Counter",g=c?c.length:J(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=J(e[h],e["_"+h]),w(d)||(f.series.length||(f[q]=0),e["_"+h]=d=f[q]%g,f[q]+=1),c&&(b=c[d]));void 0!==d&&(this[h]=d);this[a]=b},getColor:function(){this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||n[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,e,h,g){var k=this,q=k.points,m=q&&q.length||0,l,t=k.options,A=k.chart,n=null,x=k.xAxis,E=t.turboThreshold,y=this.xData,p=this.yData,r=(l=k.pointArrayMap)&&l.length;c=c||[];l=c.length;e=J(e,!0);if(!1!==g&&l&&m===l&&!k.cropped&&
!k.hasGroupedData&&k.visible)v(c,function(a,b){q[b].update&&a!==t.data[b]&&q[b].update(a,!1,null,!1)});else{k.xIncrement=null;k.colorCounter=0;v(this.parallelArrays,function(a){k[a+"Data"].length=0});if(E&&l>E){for(h=0;null===n&&h<l;)n=c[h],h++;if(b(n))for(h=0;h<l;h++)y[h]=this.autoIncrement(),p[h]=c[h];else if(f(n))if(r)for(h=0;h<l;h++)n=c[h],y[h]=n[0],p[h]=n.slice(1,r+1);else for(h=0;h<l;h++)n=c[h],y[h]=n[0],p[h]=n[1];else a.error(12)}else for(h=0;h<l;h++)void 0!==c[h]&&(n={series:k},k.pointClass.prototype.applyOptions.apply(n,
[c[h]]),k.updateParallelArrays(n,h));p&&d(p[0])&&a.error(14,!0);k.data=[];k.options.data=k.userOptions.data=c;for(h=m;h--;)q[h]&&q[h].destroy&&q[h].destroy();x&&(x.minRange=x.userMinRange);k.isDirty=A.isDirtyBox=!0;k.isDirtyData=!!q;h=!1}"point"===t.legendType&&(this.processData(),this.generatePoints());e&&A.redraw(h)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,k;k=0;var e,h,q=this.xAxis,g,l=this.options;g=l.cropThreshold;var m=this.getExtremesFromAll||l.getExtremesFromAll,n=
this.isCartesian,l=q&&q.val2lin,t=q&&q.isLog,x=this.requireSorting,y,p;if(n&&!this.isDirty&&!q.isDirty&&!this.yAxis.isDirty&&!b)return!1;q&&(b=q.getExtremes(),y=b.min,p=b.max);if(n&&this.sorted&&!m&&(!g||f>g||this.forceCrop))if(c[f-1]<y||c[0]>p)c=[],d=[];else if(c[0]<y||c[f-1]>p)k=this.cropData(this.xData,this.yData,y,p),c=k.xData,d=k.yData,k=k.start,e=!0;for(g=c.length||1;--g;)f=t?l(c[g])-l(c[g-1]):c[g]-c[g-1],0<f&&(void 0===h||f<h)?h=f:0>f&&x&&(a.error(15),x=!1);this.cropped=e;this.cropStart=k;
this.processedXData=c;this.processedYData=d;this.closestPointRange=h},cropData:function(a,b,c,d){var f=a.length,e=0,h=f,g=J(this.cropShoulder,1),q;for(q=0;q<f;q++)if(a[q]>=c){e=Math.max(0,q-g);break}for(c=q;c<f;c++)if(a[c]>d){h=c+g;break}return{xData:a.slice(e,h),yData:b.slice(e,h),start:e,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,f=this.processedXData,e=this.processedYData,h=this.pointClass,g=f.length,l=this.cropStart||0,m,n=this.hasGroupedData,a=a.keys,t,x=[],y;
c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(y=0;y<g;y++)m=l+y,n?(t=(new h).init(this,[f[y]].concat(K(e[y]))),t.dataGroup=this.groupMap[y]):(t=c[m])||void 0===b[m]||(c[m]=t=(new h).init(this,b[m],f[y])),t&&(t.index=m,x[y]=t);this.options.keys=a;if(c&&(g!==(d=c.length)||n))for(y=0;y<d;y++)y!==l||n||(y+=g),c[y]&&(c[y].destroyElements(),c[y].plotX=void 0);this.data=c;this.points=x},getExtremes:function(a){var c=this.yAxis,d=this.processedXData,e,k=[],h=0;e=this.xAxis.getExtremes();
var g=e.min,q=e.max,l,m,n,t;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(t=0;t<e;t++)if(m=d[t],n=a[t],l=(b(n,!0)||f(n))&&(!c.positiveValuesOnly||n.length||0<n),m=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[t+1]||m)>=g&&(d[t-1]||m)<=q,l&&m)if(l=n.length)for(;l--;)null!==n[l]&&(k[h++]=n[l]);else k[h++]=n;this.dataMin=p(k);this.dataMax=G(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,
d=this.xAxis,f=d.categories,k=this.yAxis,e=this.points,h=e.length,l=!!this.modifyValue,m=a.pointPlacement,n="between"===m||b(m),t=a.threshold,x=a.startFromThreshold?t:0,y,p,r,C,v=Number.MAX_VALUE;"between"===m&&(m=.5);b(m)&&(m*=J(a.pointRange||d.pointRange));for(a=0;a<h;a++){var K=e[a],H=K.x,L=K.y;p=K.low;var B=c&&k.stacks[(this.negStacks&&L<(x?0:t)?"-":"")+this.stackKey],D;k.positiveValuesOnly&&null!==L&&0>=L&&(K.isNull=!0);K.plotX=y=g(Math.min(Math.max(-1E5,d.translate(H,0,0,0,1,m,"flags"===this.type)),
1E5));c&&this.visible&&!K.isNull&&B&&B[H]&&(C=this.getStackIndicator(C,H,this.index),D=B[H],L=D.points[C.key],p=L[0],L=L[1],p===x&&C.key===B[H].base&&(p=J(t,k.min)),k.positiveValuesOnly&&0>=p&&(p=null),K.total=K.stackTotal=D.total,K.percentage=D.total&&K.y/D.total*100,K.stackY=L,D.setOffset(this.pointXOffset||0,this.barW||0));K.yBottom=w(p)?k.translate(p,0,1,0,1):null;l&&(L=this.modifyValue(L,K));K.plotY=p="number"===typeof L&&Infinity!==L?Math.min(Math.max(-1E5,k.translate(L,0,1,0,1)),1E5):void 0;
K.isInside=void 0!==p&&0<=p&&p<=k.len&&0<=y&&y<=d.len;K.clientX=n?g(d.translate(H,0,0,0,1,m)):y;K.negative=K.y<(t||0);K.category=f&&void 0!==f[K.x]?f[K.x]:K.x;K.isNull||(void 0!==r&&(v=Math.min(v,Math.abs(y-r))),r=y);K.zone=this.zones.length&&K.getZone()}this.closestPointRangePx=v},getValidPoints:function(a,b){var d=this.chart;return c(a||this.points||[],function(a){return b&&!d.isInsidePlot(a.plotX,a.plotY,d.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,
f=b.inverted,e=this.clipBox,h=e||b.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),q=b[g],m=b[g+"m"];q||(a&&(h.width=0,f&&(h.x=b.plotSizeX),b[g+"m"]=m=d.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[g]=q=d.clipRect(h),q.count={length:0});a&&!q.count[this.index]&&(q.count[this.index]=!0,q.count.length+=1);!1!==c.clip&&(this.group.clip(a||e?q:b.clipRect),this.markerGroup.clip(m),this.sharedClipKey=g);
a||(q.count[this.index]&&(delete q.count[this.index],--q.count.length),0===q.count.length&&g&&b[g]&&(e||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},animate:function(a){var b=this.chart,c=B(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();m(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=
this.points,b=this.chart,c,d,f,e,h=this.options.marker,g,m,l,n=this[this.specialGroup]||this.markerGroup,t,x=J(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],e=d.graphic,g=d.marker||{},m=!!d.marker,f=x&&void 0===g.enabled||g.enabled,l=d.isInside,f&&!d.isNull?(f=J(g.symbol,this.symbol),d.hasImage=0===f.indexOf("url"),t=this.markerAttribs(d,d.selected&&"select"),e?e[l?"show":"hide"](!0).animate(t):l&&
(0<t.width||d.hasImage)&&(d.graphic=e=b.renderer.symbol(f,t.x,t.y,t.width,t.height,m?g:h).add(n)),e&&e.attr(this.pointAttribs(d,d.selected&&"select")),e&&e.addClass(d.getClassName(),!0)):e&&(d.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=J(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=J(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,
b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,h=d&&d.color,g=a&&a.color,d=J(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=h||a||g||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=J(b.lineWidth,c.lineWidth,d+J(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(L.navigator.userAgent),
d,f,h=a.data||[],g,l;m(a,"destroy");t(a);v(a.axisTypes||[],function(b){(l=a[b])&&l.series&&(e(l.series,a),l.isDirty=l.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=h.length;f--;)(g=h[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);H(a,function(a,b){a instanceof x&&!a.survive&&(d=c&&"group"===b?"hide":"destroy",a[d]())});b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();H(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=
this,f=d.options,e=f.step,h,g=[],m=[],l;a=a||d.points;(h=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&h&&(e=4-e);!f.connectNulls||b||c||(a=this.getValidPoints(a));v(a,function(k,h){var q=k.plotX,t=k.plotY,n=a[h-1];(k.leftCliff||n&&n.rightCliff)&&!c&&(l=!0);k.isNull&&!w(b)&&0<h?l=!f.connectNulls:k.isNull&&!b?l=!0:(0===h||l?h=["M",k.plotX,k.plotY]:d.getPointSpline?h=d.getPointSpline(a,k,h):e?(h=1===e?["L",n.plotX,t]:2===e?["L",(n.plotX+q)/2,n.plotY,"L",(n.plotX+q)/2,t]:["L",q,n.plotY],
h.push("L",q,t)):h=["L",q,t],m.push(k.x),e&&m.push(k.x),g.push.apply(g,h),l=!1)});g.xMap=m;return d.graphPath=g},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];v(this.zones,function(c,f){d.push(["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});v(d,function(d,f){var e=d[0],k=a[e];k?(k.endX=a.preventGraphAnimation?
null:c.xMap,k.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),k={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?k.dashstyle=d[3]:"square"!==b.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),k=a[e].attr(k).shadow(2>f&&b.shadow));k&&(k.startX=c.xMap,k.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,f,e,h=this.clips||[],g,l=this.graph,m=this.area,t=Math.max(b.chartWidth,
b.chartHeight),n=this[(this.zoneAxis||"y")+"Axis"],x,y,p=b.inverted,r,C,w,K,L=!1;d.length&&(l||m)&&n&&void 0!==n.min&&(y=n.reversed,r=n.horiz,l&&l.hide(),m&&m.hide(),x=n.getExtremes(),v(d,function(d,k){f=y?r?b.plotWidth:0:r?0:n.toPixels(x.min);f=Math.min(Math.max(J(e,f),0),t);e=Math.min(Math.max(Math.round(n.toPixels(J(d.value,x.max),!0)),0),t);L&&(f=e=n.toPixels(x.max));C=Math.abs(f-e);w=Math.min(f,e);K=Math.max(f,e);n.isXAxis?(g={x:p?K:w,y:0,width:C,height:t},r||(g.x=b.plotHeight-g.x)):(g={x:0,
y:p?K:w,width:t,height:C},r&&(g.y=b.plotWidth-g.y));p&&c.isVML&&(g=n.isXAxis?{x:0,y:y?w:K,height:g.width,width:b.chartWidth}:{x:g.y-b.plotLeft-b.spacingBox.x,y:0,width:g.height,height:b.chartHeight});h[k]?h[k].animate(g):(h[k]=c.clipRect(g),l&&a["zone-graph-"+k].clip(h[k]),m&&a["zone-area-"+k].clip(h[k]));L=d.value>x.max}),this.clips=h)},invertGroups:function(a){function b(){v(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=
c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=D(d,"resize",b),D(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],k=!e;k&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":
""),!0);e.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&B(d.animation).duration,e=a.visible?"inherit":"hidden",h=d.zIndex,g=a.hasRendered,l=b.seriesGroup,m=b.inverted;c=a.plotGroup("group","series",e,h,l);a.markerGroup=
a.plotGroup("markerGroup","markers",e,h,l);f&&a.animate(!0);c.inverted=a.isCartesian?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);!1===d.clip||a.sharedClipKey||g||c.clip(b.clipRect);f&&a.animate();g||(a.animationTimeout=C(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,
c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:J(d&&d.left,a.plotLeft),translateY:J(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
d,f){var e,k;if(k=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),k=Math.floor(k/2),{point:c[k],left:a(c.slice(0,k),d+1,f),right:a(c.slice(k+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;C(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,g){var l=b.point,m=d.kdAxisArray[k%g],q,n,t=l;n=w(a[f])&&w(l[f])?
Math.pow(a[f]-l[f],2):null;q=w(a[e])&&w(l[e])?Math.pow(a[e]-l[e],2):null;q=(n||0)+(q||0);l.dist=w(q)?Math.sqrt(q):Number.MAX_VALUE;l.distX=w(n)?Math.sqrt(n):Number.MAX_VALUE;m=a[m]-l[m];q=0>m?"left":"right";n=0>m?"right":"left";b[q]&&(q=c(a,b[q],k+1,g),t=q[h]<t[h]?q:l);b[n]&&Math.sqrt(m*m)<t[h]&&(a=c(a,b[n],k+1,g),t=a[h]<t[h]?a:t);return t}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(N);(function(a){var D=a.Axis,B=a.Chart,G=a.correctFloat,p=a.defined,g=a.destroyObjectProperties,l=a.each,r=a.format,n=a.objectEach,w=a.pick,v=a.Series;a.StackItem=function(a,h,g,c,f){var b=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=h;this.x=c;this.total=null;this.points={};this.stack=f;this.rightCliff=this.leftCliff=0;this.alignOptions={align:h.align||(b?g?"left":"right":"center"),verticalAlign:h.verticalAlign||(b?
"middle":g?"bottom":"top"),y:w(h.y,b?4:g?14:-6),x:w(h.x,b?g?-6:6:0)};this.textAlign=h.textAlign||(b?g?"right":"left":"center")};a.StackItem.prototype={destroy:function(){g(this,this.axis)},render:function(a){var e=this.options,g=e.format,g=g?r(g,this):e.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(g,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,
h){var e=this.axis,c=e.chart,f=e.translate(e.usePercentage?100:this.total,0,0,0,1),e=e.translate(0),e=Math.abs(f-e);a=c.xAxis[0].translate(this.x)+a;f=this.getStackBox(c,this,a,f,h,e);if(h=this.label)h.align(this.alignOptions,null,f),f=h.alignAttr,h[!1===this.options.crop||c.isInsidePlot(f.x,f.y)?"show":"hide"](!0)},getStackBox:function(a,h,g,c,f,b){var d=h.axis.reversed,e=a.inverted;a=a.plotHeight;h=h.isNegative&&!d||!h.isNegative&&d;return{x:e?h?c:c-b:g,y:e?a-g-f:h?a-c-b:a-c,width:e?b:f,height:e?
f:b}}};B.prototype.getStacks=function(){var a=this;l(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});l(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+w(e.options.stack,""))})};D.prototype.buildStacks=function(){var a=this.series,h=w(this.options.reversedStacks,!0),g=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=g;c--;)a[h?c:g-c-1].setStackedPoints();for(c=0;c<g;c++)a[c].modifyStacks()}};D.prototype.renderStackTotals=
function(){var a=this.chart,h=a.renderer,g=this.stacks,c=this.stackTotalGroup;c||(this.stackTotalGroup=c=h.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());c.translate(a.plotLeft,a.plotTop);n(g,function(a){n(a,function(a){a.render(c)})})};D.prototype.resetStacks=function(){var a=this,h=a.stacks;a.isXAxis||n(h,function(e){n(e,function(c,f){c.touched<a.stacksTouched?(c.destroy(),delete e[f]):(c.total=null,c.cum=null)})})};D.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),n(a,function(a){n(a,function(a){a.cum=a.total})}))};v.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,h=this.processedYData,g=[],c=h.length,f=this.options,b=f.threshold,d=f.startFromThreshold?b:0,l=f.stack,f=f.stacking,n=this.stackKey,r="-"+n,t=this.negStacks,v=this.yAxis,x=v.stacks,C=v.oldStacks,L,q,A,E,F,k,u;v.stacksTouched+=1;for(F=0;F<c;F++)k=e[F],u=h[F],
L=this.getStackIndicator(L,k,this.index),E=L.key,A=(q=t&&u<(d?0:b))?r:n,x[A]||(x[A]={}),x[A][k]||(C[A]&&C[A][k]?(x[A][k]=C[A][k],x[A][k].total=null):x[A][k]=new a.StackItem(v,v.options.stackLabels,q,k,l)),A=x[A][k],null!==u&&(A.points[E]=A.points[this.index]=[w(A.cum,d)],p(A.cum)||(A.base=E),A.touched=v.stacksTouched,0<L.index&&!1===this.singleStacks&&(A.points[E][0]=A.points[this.index+","+k+",0"][0])),"percent"===f?(q=q?n:r,t&&x[q]&&x[q][k]?(q=x[q][k],A.total=q.total=Math.max(q.total,A.total)+Math.abs(u)||
0):A.total=G(A.total+(Math.abs(u)||0))):A.total=G(A.total+(u||0)),A.cum=w(A.cum,d)+(u||0),null!==u&&(A.points[E].push(A.cum),g[F]=A.cum);"percent"===f&&(v.usePercentage=!0);this.stackedYData=g;v.oldStacks={}}};v.prototype.modifyStacks=function(){var a=this,h=a.stackKey,g=a.yAxis.stacks,c=a.processedXData,f,b=a.options.stacking;a[b+"Stacker"]&&l([h,"-"+h],function(d){for(var e=c.length,h,l;e--;)if(h=c[e],f=a.getStackIndicator(f,h,a.index,d),l=(h=g[d]&&g[d][h])&&h.points[f.key])a[b+"Stacker"](l,h,e)})};
v.prototype.percentStacker=function(a,h,g){h=h.total?100/h.total:0;a[0]=G(a[0]*h);a[1]=G(a[1]*h);this.stackedYData[g]=a[1]};v.prototype.getStackIndicator=function(a,h,g,c){!p(a)||a.x!==h||c&&a.key!==c?a={x:h,index:0,key:c}:a.index++;a.key=[g,h,a.index].join();return a}})(N);(function(a){var D=a.addEvent,B=a.animate,G=a.Axis,p=a.createElement,g=a.css,l=a.defined,r=a.each,n=a.erase,w=a.extend,v=a.fireEvent,e=a.inArray,h=a.isNumber,m=a.isObject,c=a.isArray,f=a.merge,b=a.objectEach,d=a.pick,y=a.Point,
H=a.Series,J=a.seriesTypes,t=a.setAnimation,K=a.splat;w(a.Chart.prototype,{addSeries:function(a,b,c){var f,e=this;a&&(b=d(b,!0),v(e,"addSeries",{options:a},function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return f},addAxis:function(a,b,c,e){var h=b?"xAxis":"yAxis",g=this.options;a=f(a,{index:this[h].length,isX:b});b=new G(this,a);g[h]=K(g[h]||{});g[h].push(a);d(c,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,
e=function(){d&&g(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=p("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=p("span",{className:"highcharts-loading-inner"},null,d),D(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;g(d,w(f.style,{zIndex:10}));g(b.loadingSpan,f.labelStyle);b.loadingShown||(g(d,{opacity:0,display:""}),B(d,{opacity:f.style.opacity||
.5},{duration:f.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",B(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){g(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),update:function(a,c,g){var m=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},t=a.chart,x,k,y=[];if(t){f(!0,m.options.chart,t);"className"in t&&m.setClassName(t.className);if("inverted"in t||"polar"in t)m.propFromSeries(),x=!0;"alignTicks"in t&&(x=!0);b(t,function(a,b){-1!==e("chart."+b,m.propsRequireUpdateSeries)&&(k=!0);-1!==e(b,m.propsRequireDirtyBox)&&
(m.isDirtyBox=!0)});"style"in t&&m.renderer.setStyle(t.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&f(!0,this.options.plotOptions,a.plotOptions);b(a,function(a,b){if(m[b]&&"function"===typeof m[b].update)m[b].update(a,!1);else if("function"===typeof m[n[b]])m[n[b]](a);"chart"!==b&&-1!==e(b,m.propsRequireUpdateSeries)&&(k=!0)});r("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(r(K(a[b]),function(a,c){(c=l(a.id)&&m.get(a.id)||m[b][c])&&c.coll===b&&(c.update(a,
!1),g&&(c.touched=!0));if(!c&&g)if("series"===b)m.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)m.addAxis(a,"xAxis"===b,!1).touched=!0}),g&&r(m[b],function(a){a.touched?delete a.touched:y.push(a)}))});r(y,function(a){a.remove(!1)});x&&r(m.axes,function(a){a.update({},!1)});k&&r(m.series,function(a){a.update({},!1)});a.loading&&f(!0,m.options.loading,a.loading);x=t&&t.width;t=t&&t.height;h(x)&&x!==m.chartWidth||h(t)&&t!==m.chartHeight?m.setSize(x,t):d(c,!0)&&m.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});w(y.prototype,{update:function(a,b,c,f){function e(){h.applyOptions(a);null===h.y&&k&&(h.graphic=k.destroy());m(a,!0)&&(k&&k.element&&a&&a.marker&&void 0!==a.marker.symbol&&(h.graphic=k.destroy()),a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));l=h.index;g.updateParallelArrays(h,l);n.data[l]=m(n.data[l],!0)||m(a,!0)?h.options:a;g.isDirty=g.isDirtyData=!0;!g.fixedBox&&g.hasCartesianSeries&&(t.isDirtyBox=!0);"point"===n.legendType&&
(t.isDirtyLegend=!0);b&&t.redraw(c)}var h=this,g=h.series,k=h.graphic,l,t=g.chart,n=g.options;b=d(b,!0);!1===f?e():h.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});w(H.prototype,{addPoint:function(a,b,c,f){var e=this.options,h=this.data,g=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,l=e.data,m,t,n=this.xData,q,x;b=d(b,!0);m={series:this};this.pointClass.prototype.applyOptions.apply(m,[a]);x=m.x;q=n.length;if(this.requireSorting&&
x<n[q-1])for(t=!0;q&&n[q-1]>x;)q--;this.updateParallelArrays(m,"splice",q,0,0);this.updateParallelArrays(m,q);k&&m.name&&(k[x]=m.name);l.splice(q,0,a);t&&(this.data.splice(q,0,null),this.processData());"point"===e.legendType&&this.generatePoints();c&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(m,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&g.redraw(f)},removePoint:function(a,b,c){var f=this,e=f.data,h=e[a],g=f.points,k=f.chart,l=function(){g&&g.length===e.length&&
g.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(h||{series:f},"splice",a,1);h&&h.destroy();f.isDirty=!0;f.isDirtyData=!0;b&&k.redraw()};t(c,k);b=d(b,!0);h?h.firePointEvent("remove",null,l):l()},remove:function(a,b,c){function f(){e.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();d(a,!0)&&h.redraw(b)}var e=this,h=e.chart;!1!==c?v(e,"remove",null,f):f()},update:function(a,b){var c=this,e=c.chart,h=c.userOptions,g=c.oldType||c.type,l=a.type||h.type||e.options.chart.type,
k=J[g].prototype,m,t=["group","markerGroup","dataLabelsGroup"],n=["navigatorSeries","baseSeries"],y=c.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);if(l&&l!==g||void 0!==a.zIndex)t.length=0;n=t.concat(n);r(n,function(a){n[a]=c[a];delete c[a]});a=f(h,y,{index:c.index,pointStart:c.xData[0]},{data:c.options.data},a);c.remove(!1,null,!1);for(m in k)c[m]=void 0;w(c,J[l||g].prototype);r(n,function(a){c[a]=n[a]});c.init(e,a);c.oldType=
g;e.linkSeries();d(b,!0)&&e.redraw(!1)}});w(G.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=f(this.userOptions,a);this.destroy(!0);this.init(c,w(a,{events:void 0}));c.isDirtyBox=!0;d(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,f=this.coll,e=this.series,h=e.length;h--;)e[h]&&e[h].remove(!1);n(b.axes,this);n(b[f],this);c(b.options[f])?b.options[f].splice(this.options.index,1):delete b.options[f];r(b[f],function(a,b){a.options.index=b});this.destroy();
b.isDirtyBox=!0;d(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(N);(function(a){var D=a.color,B=a.each,G=a.map,p=a.pick,g=a.Series,l=a.seriesType;l("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(g){var l=[],r=[],v=this.xAxis,e=this.yAxis,h=e.stacks[this.stackKey],m={},c=this.index,f=e.series,b=f.length,d,y=p(e.options.reversedStacks,!0)?1:-1,H;g=g||this.points;if(this.options.stacking){for(H=
0;H<g.length;H++)g[H].leftNull=g[H].rightNull=null,m[g[H].x]=g[H];a.objectEach(h,function(a,b){null!==a.total&&r.push(b)});r.sort(function(a,b){return a-b});d=G(f,function(){return this.visible});B(r,function(a,f){var g=0,n,t;if(m[a]&&!m[a].isNull)l.push(m[a]),B([-1,1],function(e){var g=1===e?"rightNull":"leftNull",l=0,p=h[r[f+e]];if(p)for(H=c;0<=H&&H<b;)n=p.points[H],n||(H===c?m[a][g]=!0:d[H]&&(t=h[a].points[H])&&(l-=t[1]-t[0])),H+=y;m[a][1===e?"rightCliff":"leftCliff"]=l});else{for(H=c;0<=H&&H<
b;){if(n=h[a].points[H]){g=n[1];break}H+=y}g=e.translate(g,0,1,0,1);l.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:g,yBottom:g})}})}return l},getGraphPath:function(a){var l=g.prototype.getGraphPath,r=this.options,v=r.stacking,e=this.yAxis,h,m,c=[],f=[],b=this.index,d,y=e.stacks[this.stackKey],H=r.threshold,J=e.getThreshold(r.threshold),t,r=r.connectNulls||"percent"===v,K=function(h,g,l){var m=a[h];h=v&&y[m.x].points[b];var t=m[l+"Null"]||0;l=m[l+"Cliff"]||0;var n,p,m=!0;l||t?(n=(t?h[0]:
h[1])+l,p=h[0]+l,m=!!t):!v&&a[g]&&a[g].isNull&&(n=p=H);void 0!==n&&(f.push({plotX:d,plotY:null===n?J:e.getThreshold(n),isNull:m,isCliff:!0}),c.push({plotX:d,plotY:null===p?J:e.getThreshold(p),doCurve:!1}))};a=a||this.points;v&&(a=this.getStackPoints(a));for(h=0;h<a.length;h++)if(m=a[h].isNull,d=p(a[h].rectPlotX,a[h].plotX),t=p(a[h].yBottom,J),!m||r)r||K(h,h-1,"left"),m&&!v&&r||(f.push(a[h]),c.push({x:h,plotX:d,plotY:t})),r||K(h,h+1,"right");h=l.call(this,f,!0,!0);c.reversed=!0;m=l.call(this,c,!0,
!0);m.length&&(m[0]="L");m=h.concat(m);l=l.call(this,f,!1,r);m.xMap=h.xMap;this.areaPath=m;return l},drawGraph:function(){this.areaPath=[];g.prototype.drawGraph.apply(this);var a=this,l=this.areaPath,w=this.options,v=[["area","highcharts-area",this.color,w.fillColor]];B(this.zones,function(e,h){v.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+e.className,e.color||a.color,e.fillColor||w.fillColor])});B(v,function(e){var h=e[0],g=a[h];g?(g.endX=a.preventGraphAnimation?null:l.xMap,
g.animate({d:l})):(g=a[h]=a.chart.renderer.path(l).addClass(e[1]).attr({fill:p(e[3],D(e[2]).setOpacity(p(w.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=l.xMap;g.shiftUnit=w.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);(function(a){var D=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,p){var g=G.plotX,l=G.plotY,r=a[p-1];p=a[p+1];var n,w,v,e;if(r&&!r.isNull&&!1!==r.doCurve&&!G.isCliff&&p&&!p.isNull&&!1!==p.doCurve&&!G.isCliff){a=
r.plotY;v=p.plotX;p=p.plotY;var h=0;n=(1.5*g+r.plotX)/2.5;w=(1.5*l+a)/2.5;v=(1.5*g+v)/2.5;e=(1.5*l+p)/2.5;v!==n&&(h=(e-w)*(v-g)/(v-n)+l-e);w+=h;e+=h;w>a&&w>l?(w=Math.max(a,l),e=2*l-w):w<a&&w<l&&(w=Math.min(a,l),e=2*l-w);e>p&&e>l?(e=Math.max(p,l),w=2*l-e):e<p&&e<l&&(e=Math.min(p,l),w=2*l-e);G.rightContX=v;G.rightContY=e}G=["C",D(r.rightContX,r.plotX),D(r.rightContY,r.plotY),D(n,g),D(w,l),g,l];r.rightContX=r.rightContY=null;return G}})})(N);(function(a){var D=a.seriesTypes.area.prototype,B=a.seriesType;
B("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:D.getStackPoints,getGraphPath:D.getGraphPath,drawGraph:D.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);(function(a){var D=a.animObject,B=a.color,G=a.each,p=a.extend,g=a.isNumber,l=a.merge,r=a.pick,n=a.Series,w=a.seriesType,v=a.svg;w("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",
borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){n.prototype.init.apply(this,arguments);var a=this,h=a.chart;h.hasRendered&&G(h.series,function(e){e.type===a.type&&(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,h=a.options,g=a.xAxis,c=a.yAxis,f=g.reversed,
b,d={},l=0;!1===h.grouping?l=1:G(a.chart.series,function(f){var e=f.options,g=f.yAxis,h;f.type!==a.type||!f.visible&&a.chart.options.chart.ignoreHiddenSeries||c.len!==g.len||c.pos!==g.pos||(e.stacking?(b=f.stackKey,void 0===d[b]&&(d[b]=l++),h=d[b]):!1!==e.grouping&&(h=l++),f.columnIndex=h)});var n=Math.min(Math.abs(g.transA)*(g.ordinalSlope||h.pointRange||g.closestPointRange||g.tickInterval||1),g.len),p=n*h.groupPadding,t=(n-2*p)/(l||1),h=Math.min(h.maxPointWidth||g.len,r(h.pointWidth,t*(1-2*h.pointPadding)));
a.columnMetrics={width:h,offset:(t-h)/2+(p+((a.columnIndex||0)+(f?1:0))*t-n/2)*(f?-1:1)};return a.columnMetrics},crispCol:function(a,g,l,c){var f=this.chart,b=this.borderWidth,d=-(b%2?.5:0),b=b%2?.5:1;f.inverted&&f.renderer.isVML&&(b+=1);this.options.crisp&&(l=Math.round(a+l)+d,a=Math.round(a)+d,l-=a);c=Math.round(g+c)+b;d=.5>=Math.abs(g)&&.5<c;g=Math.round(g)+b;c-=g;d&&c&&(--g,c+=1);return{x:a,y:g,width:l,height:c}},translate:function(){var a=this,g=a.chart,l=a.options,c=a.dense=2>a.closestPointRange*
a.xAxis.transA,c=a.borderWidth=r(l.borderWidth,c?0:1),f=a.yAxis,b=l.threshold,d=a.translatedThreshold=f.getThreshold(b),p=r(l.minPointLength,5),v=a.getColumnMetrics(),w=v.width,t=a.barW=Math.max(w,1+2*c),K=a.pointXOffset=v.offset;g.inverted&&(d-=.5);l.pointPadding&&(t=Math.ceil(t));n.prototype.translate.apply(a);G(a.points,function(c){var e=r(c.yBottom,d),h=999+Math.abs(e),h=Math.min(Math.max(-h,c.plotY),f.len+h),l=c.plotX+K,m=t,n=Math.min(h,e),y,k=Math.max(h,e)-n;p&&Math.abs(k)<p&&(k=p,y=!f.reversed&&
!c.negative||f.reversed&&c.negative,c.y===b&&a.dataMax<=b&&f.min<b&&(y=!y),n=Math.abs(n-d)>p?e-p:d-(y?p:0));c.barX=l;c.pointWidth=w;c.tooltipPos=g.inverted?[f.len+f.pos-g.plotLeft-h,a.xAxis.len-l-m/2,k]:[l+m/2,h+f.pos-g.plotTop,k];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[l,d,m,0]:[l,n,m,k])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,
g){var e=this.options,c,f=this.pointAttrToOptions||{};c=f.stroke||"borderColor";var b=f["stroke-width"]||"borderWidth",d=a&&a.color||this.color,h=a&&a[c]||e[c]||this.color||d,n=a&&a[b]||e[b]||this[b]||0,f=e.dashStyle;a&&this.zones.length&&(d=a.getZone(),d=a.options.color||d&&d.color||this.color);g&&(a=l(e.states[g],a.options.states&&a.options.states[g]||{}),g=a.brightness,d=a.color||void 0!==g&&B(d).brighten(a.brightness).get()||d,h=a[c]||h,n=a[b]||n,f=a.dashStyle||f);c={fill:d,stroke:h,"stroke-width":n};
f&&(c.dashstyle=f);return c},drawPoints:function(){var a=this,h=this.chart,m=a.options,c=h.renderer,f=m.animationLimit||250,b;G(a.points,function(d){var e=d.graphic;if(g(d.plotY)&&null!==d.y){b=d.shapeArgs;if(e)e[h.pointCount<f?"animate":"attr"](l(b));else d.graphic=e=c[d.shapeType](b).add(d.group||a.group);m.borderRadius&&e.attr({r:m.borderRadius});e.attr(a.pointAttribs(d,d.selected&&"select")).shadow(m.shadow,null,m.stacking&&!m.borderRadius);e.addClass(d.getClassName(),!0)}else e&&(d.graphic=e.destroy())})},
animate:function(a){var e=this,g=this.yAxis,c=e.options,f=this.chart.inverted,b={},d=f?"translateX":"translateY",l;v&&(a?(b.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(c.threshold))),f?b.translateX=a-g.len:b.translateY=a,e.group.attr(b)):(l=e.group.attr(d),e.group.animate({scaleY:1},p(D(e.options.animation),{step:function(a,c){b[d]=l+c.pos*(g.pos-l);e.group.attr(b)}})),e.animate=null))},remove:function(){var a=this,g=a.chart;g.hasRendered&&G(g.series,function(e){e.type===a.type&&
(e.isDirty=!0)});n.prototype.remove.apply(a,arguments)}})})(N);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(N);(function(a){var D=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&D.prototype.drawGraph.call(this)}})})(N);(function(a){var D=a.deg2rad,B=a.isNumber,G=a.pick,p=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,l=this.chart,r=2*(a.slicedOffset||0),n=l.plotWidth-2*r,l=l.plotHeight-2*r,w=a.center,w=[G(w[0],"50%"),G(w[1],"50%"),a.size||"100%",a.innerSize||0],v=Math.min(n,
l),e,h;for(e=0;4>e;++e)h=w[e],a=2>e||2===e&&/%$/.test(h),w[e]=p(h,[n,l,v,w[2]][e])+(a?r:0);w[3]>w[2]&&(w[3]=w[2]);return w},getStartAndEndRadians:function(a,l){a=B(a)?a:0;l=B(l)&&l>a&&360>l-a?l:a+360;return{start:D*(a+-90),end:D*(l+-90)}}}})(N);(function(a){var D=a.addEvent,B=a.CenteredSeriesMixin,G=a.defined,p=a.each,g=a.extend,l=B.getStartAndEndRadians,r=a.inArray,n=a.noop,w=a.pick,v=a.Point,e=a.Series,h=a.seriesType,m=a.setAnimation;h("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,
enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=
this,b=c.points,d=c.startAngleRad;a||(p(b,function(a){var b=a.graphic,f=a.shapeArgs;b&&(b.attr({r:a.startR||c.center[3]/2,start:d,end:d}),b.animate({r:f.r,start:f.start,end:f.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,f=0,b=this.points,d=b.length,e,g=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=b[a],f+=g&&!e.visible?0:e.isNull?0:e.y;this.total=f;for(a=0;a<d;a++)e=b[a],e.percentage=0<f&&(e.visible||!g)?e.y/f*100:0,e.total=f},generatePoints:function(){e.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var c=0,b=this.options,d=b.slicedOffset,e=d+(b.borderWidth||0),g,h,m,n=l(b.startAngle,b.endAngle),p=this.startAngleRad=n.start,n=(this.endAngleRad=n.end)-p,r=this.points,v,q=b.dataLabels.distance,b=b.ignoreHiddenPoint,A,E=r.length,F;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(A=0;A<E;A++){F=r[A];
F.labelDistance=w(F.options.dataLabels&&F.options.dataLabels.distance,q);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,F.labelDistance);g=p+c*n;if(!b||F.visible)c+=F.percentage/100;h=p+c*n;F.shapeType="arc";F.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*g)/1E3,end:Math.round(1E3*h)/1E3};m=(h+g)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);F.slicedTranslation={translateX:Math.round(Math.cos(m)*d),translateY:Math.round(Math.sin(m)*d)};h=Math.cos(m)*a[2]/
2;v=Math.sin(m)*a[2]/2;F.tooltipPos=[a[0]+.7*h,a[1]+.7*v];F.half=m<-Math.PI/2||m>Math.PI/2?1:0;F.angle=m;g=Math.min(e,F.labelDistance/5);F.labelPos=[a[0]+h+Math.cos(m)*F.labelDistance,a[1]+v+Math.sin(m)*F.labelDistance,a[0]+h+Math.cos(m)*g,a[1]+v+Math.sin(m)*g,a[0]+h,a[1]+v,0>F.labelDistance?"center":F.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,f=a.chart.renderer,b,d,e,h,l=a.options.shadow;l&&!a.shadowGroup&&(a.shadowGroup=f.g("shadow").add(a.group));p(a.points,function(c){d=
c.graphic;if(c.isNull)d&&(c.graphic=d.destroy());else{h=c.shapeArgs;b=c.getTranslate();var m=c.shadowGroup;l&&!m&&(m=c.shadowGroup=f.g("shadow").add(a.shadowGroup));m&&m.attr(b);e=a.pointAttribs(c,c.selected&&"select");d?d.setRadialReference(a.center).attr(e).animate(g(h,b)):(c.graphic=d=f[c.shapeType](h).setRadialReference(a.center).attr(b).add(a.group),c.visible||d.attr({visibility:"hidden"}),d.attr(e).attr({"stroke-linejoin":"round"}).shadow(l,m));d.addClass(c.getClassName())}})},searchPoint:n,
sortByAngle:function(a,f){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*f})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:B.getCenter,getSymbol:n},{init:function(){v.prototype.init.apply(this,arguments);var a=this,f;a.name=w(a.name,"Slice");f=function(b){a.slice("select"===b.type)};D(a,"select",f);D(a,"unselect",f);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,f){var b=this,c=b.series,e=c.chart,g=c.options.ignoreHiddenPoint;
f=w(f,g);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,c.options.data[r(b,c.data)]=b.options,p(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)}),b.legendItem&&e.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),g&&(c.isDirty=!0),f&&e.redraw())},slice:function(a,f,b){var c=this.series;m(b,c.chart);w(f,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;c.options.data[r(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(N);(function(a){var D=a.addEvent,B=a.arrayMax,G=a.defined,p=a.each,g=a.extend,l=a.format,r=a.map,n=a.merge,w=a.noop,v=a.pick,e=a.relativeLength,h=a.Series,
m=a.seriesTypes,c=a.stableSort;a.distribute=function(a,b){function d(a,b){return a.target-b.target}var f,e=!0,g=a,h=[],l;l=0;for(f=a.length;f--;)l+=a[f].size;if(l>b){c(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=f=0;l<=b;)l+=a[f].size,f++;h=a.splice(f-1,a.length)}c(a,d);for(a=r(a,function(a){return{size:a.size,targets:[a.target],align:v(a.align,.5)}});e;){for(f=a.length;f--;)e=a[f],l=(Math.min.apply(0,e.targets)+Math.max.apply(0,e.targets))/2,e.pos=Math.min(Math.max(0,l-e.size*e.align),
b-e.size);f=a.length;for(e=!1;f--;)0<f&&a[f-1].pos+a[f-1].size>a[f].pos&&(a[f-1].size+=a[f].size,a[f-1].targets=a[f-1].targets.concat(a[f].targets),a[f-1].align=.5,a[f-1].pos+a[f-1].size>b&&(a[f-1].pos=b-a[f-1].size),a.splice(f,1),e=!0)}f=0;p(a,function(a){var b=0;p(a.targets,function(){g[f].pos=a.pos+b;b+=g[f].size;f++})});g.push.apply(g,h);c(g,d)};h.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<
c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var b=this,d=b.options,e=d.dataLabels,g=b.points,h,m,r=b.hasRendered||0,x,w,B=v(e.defer,!!d.animation),q=b.chart.renderer;if(e.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(e),w=b.plotGroup("dataLabelsGroup","data-labels",B&&!r?"hidden":"visible",e.zIndex||6),B&&(w.attr({opacity:+r}),r||D(b,"afterAnimate",function(){b.visible&&w.show(!0);w[d.animation?"animate":"attr"]({opacity:1},
{duration:200})})),m=e,p(g,function(f){var g,t=f.dataLabel,k,p,r=f.connector,y=!t,C;h=f.dlOptions||f.options&&f.options.dataLabels;(g=v(h&&h.enabled,m.enabled)&&!f.isNull)&&(g=!0===c(f,h||e));g&&(e=n(m,h),k=f.getLabelConfig(),C=e[f.formatPrefix+"Format"]||e.format,x=G(C)?l(C,k):(e[f.formatPrefix+"Formatter"]||e.formatter).call(k,e),C=e.style,k=e.rotation,C.color=v(e.color,C.color,b.color,"#000000"),"contrast"===C.color&&(f.contrastColor=q.getContrast(f.color||b.color),C.color=e.inside||0>v(f.labelDistance,
e.distance)||d.stacking?f.contrastColor:"#000000"),d.cursor&&(C.cursor=d.cursor),p={fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.borderWidth,r:e.borderRadius||0,rotation:k,padding:e.padding,zIndex:1},a.objectEach(p,function(a,b){void 0===a&&delete p[b]}));!t||g&&G(x)?g&&G(x)&&(t?p.text=x:(t=f.dataLabel=q[k?"text":"label"](x,0,-9999,e.shape,null,null,e.useHTML,null,"data-label"),t.addClass("highcharts-data-label-color-"+f.colorIndex+" "+(e.className||"")+(e.useHTML?"highcharts-tracker":
""))),t.attr(p),t.css(C).shadow(e.shadow),t.added||t.add(w),b.alignDataLabel(f,t,e,null,y)):(f.dataLabel=t=t.destroy(),r&&(f.connector=r.destroy()))})};h.prototype.alignDataLabel=function(a,b,c,e,h){var d=this.chart,f=d.inverted,l=v(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=v(a.plotY,-9999),n=b.getBBox(),p,q=c.rotation,r=c.align,w=this.visible&&(a.series.forceDL||d.isInsidePlot(l,Math.round(m),f)||e&&d.isInsidePlot(l,f?e.x+1:e.y+e.height-1,f)),y="justify"===v(c.overflow,"justify");if(w&&(p=c.style.fontSize,
p=d.renderer.fontMetrics(p,b).b,e=g({x:f?this.yAxis.len-m:l,y:Math.round(f?this.xAxis.len-l:m),width:0,height:0},e),g(c,{width:n.width,height:n.height}),q?(y=!1,l=d.renderer.rotCorr(p,q),l={x:e.x+c.x+e.width/2+l.x,y:e.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},b[h?"attr":"animate"](l).attr({align:r}),m=(q+720)%360,m=180<m&&360>m,"left"===r?l.y-=m?n.height:0:"center"===r?(l.x-=n.width/2,l.y-=n.height/2):"right"===r&&(l.x-=n.width,l.y-=m?0:n.height)):(b.align(c,null,e),l=b.alignAttr),
y?a.isLabelJustified=this.justifyDataLabel(b,c,l,n,e,h):v(c.crop,!0)&&(w=d.isInsidePlot(l.x,l.y)&&d.isInsidePlot(l.x+n.width,l.y+n.height)),c.shape&&!q))b[h?"attr":"animate"]({anchorX:f?d.plotWidth-a.plotY:a.plotX,anchorY:f?d.plotHeight-a.plotX:a.plotY});w||(b.attr({y:-9999}),b.placed=!1)};h.prototype.justifyDataLabel=function(a,b,c,e,g,h){var d=this.chart,f=b.align,l=b.verticalAlign,m,n,q=a.box?0:a.padding||0;m=c.x+q;0>m&&("right"===f?b.align="left":b.x=-m,n=!0);m=c.x+e.width-q;m>d.plotWidth&&("left"===
f?b.align="right":b.x=d.plotWidth-m,n=!0);m=c.y+q;0>m&&("bottom"===l?b.verticalAlign="top":b.y=-m,n=!0);m=c.y+e.height-q;m>d.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=d.plotHeight-m,n=!0);n&&(a.placed=!h,a.align(b,null,g));return n};m.pie&&(m.pie.prototype.drawDataLabels=function(){var c=this,b=c.data,d,e=c.chart,g=c.options.dataLabels,l=v(g.connectorPadding,10),m=v(g.connectorWidth,1),n=e.plotWidth,r=e.plotHeight,w,D=c.center,q=D[2]/2,A=D[1],E,F,k,u,N=[[],[]],M,P,I,Q,z=[0,0,0,0];c.visible&&
(g.enabled||c._hasPointLabels)&&(p(b,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),h.prototype.drawDataLabels.apply(c),p(b,function(a){a.dataLabel&&a.visible&&(N[a.half].push(a),a.dataLabel._pos=null)}),p(N,function(b,f){var h,m,t=b.length,x=[],w;if(t)for(c.sortByAngle(b,f-.5),0<c.maxLabelDistance&&(h=Math.max(0,A-q-c.maxLabelDistance),m=Math.min(A+q+c.maxLabelDistance,e.plotHeight),
p(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,A-q-a.labelDistance),a.bottom=Math.min(A+q+a.labelDistance,e.plotHeight),w=a.dataLabel.getBBox().height||21,a.positionsIndex=x.push({target:a.labelPos[1]-a.top+w/2,size:w,rank:a.y})-1)}),a.distribute(x,m+w-h)),Q=0;Q<t;Q++)d=b[Q],m=d.positionsIndex,k=d.labelPos,E=d.dataLabel,I=!1===d.visible?"hidden":"inherit",P=h=k[1],x&&G(x[m])&&(void 0===x[m].pos?I="hidden":(u=x[m].size,P=d.top+x[m].pos)),delete d.positionIndex,M=g.justify?D[0]+(f?
-1:1)*(q+d.labelDistance):c.getX(P<d.top+2||P>d.bottom-2?h:P,f,d),E._attr={visibility:I,align:k[6]},E._pos={x:M+g.x+({left:l,right:-l}[k[6]]||0),y:P+g.y-10},k.x=M,k.y=P,v(g.crop,!0)&&(F=E.getBBox().width,h=null,M-F<l?(h=Math.round(F-M+l),z[3]=Math.max(h,z[3])):M+F>n-l&&(h=Math.round(M+F-n+l),z[1]=Math.max(h,z[1])),0>P-u/2?z[0]=Math.max(Math.round(-P+u/2),z[0]):P+u/2>r&&(z[2]=Math.max(Math.round(P+u/2-r),z[2])),E.sideOverflow=h)}),0===B(z)||this.verifyDataLabelOverflow(z))&&(this.placeDataLabels(),
m&&p(this.points,function(a){var b;w=a.connector;if((E=a.dataLabel)&&E._pos&&a.visible&&0<a.labelDistance){I=E._attr.visibility;if(b=!w)a.connector=w=e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),w.attr({"stroke-width":m,stroke:g.connectorColor||a.color||"#666666"});w[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});w.attr("visibility",I)}else w&&(a.connector=w.destroy())}))},m.pie.prototype.connectorPath=function(a){var b=
a.x,c=a.y;return v(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},m.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),
b.moved=!0):b&&b.attr({y:-9999}))},this)},m.pie.prototype.alignDataLabel=w,m.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,f=c.center,g=c.minSize||80,h,l=null!==c.size;l||(null!==f[0]?h=Math.max(b[2]-Math.max(a[1],a[3]),g):(h=Math.max(b[2]-a[1]-a[3],g),b[0]+=(a[3]-a[1])/2),null!==f[1]?h=Math.max(Math.min(h,b[2]-Math.max(a[0],a[2])),g):(h=Math.max(Math.min(h,b[2]-a[0]-a[2]),g),b[1]+=(a[0]-a[2])/2),h<b[2]?(b[2]=h,b[3]=Math.min(e(c.innerSize||0,h),h),this.translate(b),
this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});m.column&&(m.column.prototype.alignDataLabel=function(a,b,c,e,g){var d=this.chart.inverted,f=a.series,l=a.dlBox||a.shapeArgs,m=v(a.below,a.plotY>v(this.translatedThreshold,f.yAxis.len)),p=v(c.inside,!!this.options.stacking);l&&(e=n(l),0>e.y&&(e.height+=e.y,e.y=0),l=e.y+e.height-f.yAxis.len,0<l&&(e.height-=l),d&&(e={x:f.yAxis.len-e.y-e.height,y:f.xAxis.len-e.x-e.width,width:e.height,height:e.width}),p||(d?(e.x+=m?0:e.width,e.width=0):(e.y+=
m?e.height:0,e.height=0)));c.align=v(c.align,!d||p?"center":m?"right":"left");c.verticalAlign=v(c.verticalAlign,d||p?"middle":m?"top":"bottom");h.prototype.alignDataLabel.call(this,a,b,c,e,g);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(N);(function(a){var D=a.Chart,B=a.each,G=a.objectEach,p=a.pick;a=a.addEvent;a(D.prototype,"render",function(){var a=[];B(this.labelCollectors||[],function(g){a=a.concat(g())});B(this.yAxis||[],function(g){g.options.stackLabels&&
!g.options.stackLabels.allowOverlap&&G(g.stacks,function(g){G(g,function(g){a.push(g.label)})})});B(this.series||[],function(g){var l=g.options.dataLabels,n=g.dataLabelCollections||["dataLabel"];(l.enabled||g._hasPointLabels)&&!l.allowOverlap&&g.visible&&B(n,function(l){B(g.points,function(g){g[l]&&(g[l].labelrank=p(g.labelrank,g.shapeArgs&&g.shapeArgs.height),a.push(g[l]))})})});this.hideOverlappingLabels(a)});D.prototype.hideOverlappingLabels=function(a){var g=a.length,p,n,w,v,e,h,m,c,f,b=function(a,
b,c,f,e,g,h,l){return!(e>a+c||e+h<a||g>b+f||g+l<b)};for(n=0;n<g;n++)if(p=a[n])p.oldOpacity=p.opacity,p.newOpacity=1,p.width||(w=p.getBBox(),p.width=w.width,p.height=w.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(n=0;n<g;n++)for(w=a[n],p=n+1;p<g;++p)if(v=a[p],w&&v&&w!==v&&w.placed&&v.placed&&0!==w.newOpacity&&0!==v.newOpacity&&(e=w.alignAttr,h=v.alignAttr,m=w.parentGroup,c=v.parentGroup,f=2*(w.box?0:w.padding||0),e=b(e.x+m.translateX,e.y+m.translateY,w.width-f,w.height-
f,h.x+c.translateX,h.y+c.translateY,v.width-f,v.height-f)))(w.labelrank<v.labelrank?w:v).newOpacity=0;B(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(N);(function(a){var D=a.addEvent,B=a.Chart,G=a.createElement,p=a.css,g=a.defaultOptions,l=a.defaultPlotOptions,r=a.each,n=a.extend,w=a.fireEvent,v=a.hasTouch,e=a.inArray,h=a.isObject,m=a.Legend,c=a.merge,
f=a.pick,b=a.Point,d=a.Series,y=a.seriesTypes,H=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};r(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(r(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});
if(v)a[d].on("touchstart",c);a.options.cursor&&a[d].css(p).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),f=d.length,e=a.chart,g=e.pointer,h=e.renderer,l=e.options.tooltip.snap,k=a.tracker,m,n=function(){if(e.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(H?.0001:.002)+")";if(f&&!c)for(m=f+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===f)&&d.splice(m,
0,"L",d[m-2]+l,d[m-1]);k?k.attr({d:d}):a.graph&&(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),r([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(v)a.on("touchstart",n)}))}};y.column&&(y.column.prototype.drawTracker=J.drawTrackerPoint);
y.pie&&(y.pie.prototype.drawTracker=J.drawTrackerPoint);y.scatter&&(y.scatter.prototype.drawTracker=J.drawTrackerPoint);n(m.prototype,{setItemEvents:function(a,b,d){var f=this,e=f.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(d?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(g);b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(c(a.visible?f.itemStyle:f.itemHiddenStyle));e.removeClass(g);a.setState()}).on("click",function(b){var c=
function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):w(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);D(a.checkbox,"click",function(b){w(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});g.legend.itemStyle.cursor="pointer";n(B.prototype,{showResetZoom:function(){var a=
this,b=g.lang,c=a.options.chart.resetZoomButton,d=c.theme,f=d.states,e="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,f&&f.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,e)},zoomOut:function(){var a=this;w(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?(r(this.axes,function(a){b=
a.zoom()}),c.initiated=!1):r(a.xAxis.concat(a.yAxis),function(a){var f=a.axis;c[f.isXAxis?"zoomX":"zoomY"]&&(b=f.zoom(a.min,a.max),f.displayBtn&&(d=!0))});e=this.resetZoomButton;d&&!e?this.showResetZoom():!d&&h(e)&&(this.resetZoomButton=e.destroy());b&&this.redraw(f(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,f;d&&r(d,function(a){a.setState()});r("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,e=a[d?"chartX":
"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],k=(b.pointRange||0)/2,h=b.getExtremes(),l=b.toValue(g-e,!0)+k,k=b.toValue(g+b.len-e,!0)-k,m=k<l,g=m?k:l,l=m?l:k,k=Math.min(h.dataMin,b.toValue(b.toPixels(h.min)-b.minPixelPadding)),m=Math.max(h.dataMax,b.toValue(b.toPixels(h.max)+b.minPixelPadding)),n;n=k-g;0<n&&(l+=n,g=k);n=l-m;0<n&&(l=m,g-=n);b.series.length&&g!==h.min&&l!==h.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),f=!0);c[d]=e});f&&c.redraw(!1);p(c.container,{cursor:"move"})}});n(b.prototype,
{select:function(a,b){var c=this,d=c.series,g=d.chart;a=f(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[e(c,d.data)]=c.options;c.setState(a&&"select");b||r(g.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[e(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,
b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");r(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=c(b.series.options.point,b.options).events;b.events=d;a.objectEach(d,function(a,c){D(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,e=this.series,g=e.options.states[a]||{},h=l[e.type].marker&&
e.options.marker,m=h&&!1===h.enabled,p=h&&h.states&&h.states[a]||{},k=!1===p.enabled,t=e.stateMarkerGraphic,r=this.marker||{},v=e.chart,w=e.halo,y,B=h&&e.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(k||m&&!1===p.enabled)||a&&r.states&&r.states[a]&&!1===r.states[a].enabled)){B&&(y=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(e.pointAttribs(this,
a),f(v.options.chart.animation,g.animation)),y&&this.graphic.animate(y,f(v.options.chart.animation,p.animation,h.animation)),t&&t.hide();else{if(a&&p){h=r.symbol||e.symbol;t&&t.currentSymbol!==h&&(t=t.destroy());if(t)t[b?"animate":"attr"]({x:y.x,y:y.y});else h&&(e.stateMarkerGraphic=t=v.renderer.symbol(h,y.x,y.y,y.width,y.height).add(e.markerGroup),t.currentSymbol=h);t&&t.attr(e.pointAttribs(this,a))}t&&(t[a&&v.isInsidePlot(c,d,v.inverted)?"show":"hide"](),t.element.point=this)}(c=g.halo)&&c.size?
(w||(e.halo=w=v.renderer.path().add((this.graphic||t).parentGroup)),w[b?"animate":"attr"]({d:this.haloPath(c.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+f(this.colorIndex,e.colorIndex)}),w.point=this,w.attr(n({fill:this.color||e.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});
n(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&w(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&w(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,
g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(r([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(g=e[a].lineWidth||g+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(g={"stroke-width":g},d.animate(g,f(b.chart.options.chart.animation,e[a]&&e[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,
f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!h:a)?"show":"hide";r(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&r(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});r(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=
!0);!1!==b&&d.redraw();w(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);w(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})})(N);(function(a){var D=a.Chart,B=a.each,G=a.inArray,p=a.isArray,g=a.isObject,l=a.pick,r=a.splat;D.prototype.setResponsive=function(g){var l=this.options.responsive,n=[],e=this.currentResponsive;l&&l.rules&&B(l.rules,function(e){void 0===
e._id&&(e._id=a.uniqueKey());this.matchResponsiveRule(e,n,g)},this);var h=a.merge.apply(0,a.map(n,function(e){return a.find(l.rules,function(a){return a._id===e}).chartOptions})),n=n.toString()||void 0;n!==(e&&e.ruleIds)&&(e&&this.update(e.undoOptions,g),n?(this.currentResponsive={ruleIds:n,mergedOptions:h,undoOptions:this.currentOptions(h)},this.update(h,g)):this.currentResponsive=void 0)};D.prototype.matchResponsiveRule=function(a,g){var n=a.condition;(n.callback||function(){return this.chartWidth<=
l(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=l(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=l(n.minWidth,0)&&this.chartHeight>=l(n.minHeight,0)}).call(this)&&g.push(a._id)};D.prototype.currentOptions=function(l){function n(e,h,l,c){var f;a.objectEach(e,function(a,d){if(!c&&-1<G(d,["series","xAxis","yAxis"]))for(a=r(a),l[d]=[],f=0;f<a.length;f++)h[d][f]&&(l[d][f]={},n(a[f],h[d][f],l[d][f],c+1));else g(a)?(l[d]=p(a)?[]:{},n(a,h[d]||{},l[d],c+1)):l[d]=h[d]||null})}var v={};n(l,this.options,v,
0);return v}})(N);return N});

/*
 * VenoBox - jQuery Plugin
 * version: 1.8.2
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
 *
 */
!function(e){"use strict";var o,t,a,i,s,n,c,r,d,l,v,u,b,p,m,f,h,g,k,x,y,w,C,_,P,B,E,O,U,D,M,N,V,z,R,X,Y,j,W,q;e.fn.extend({venobox:function($){var I=this,A={arrowsColor:"#B6B6B6",autoplay:!1,bgcolor:"#fff",border:"0",closeBackground:"#161617",closeColor:"#d2d2d2",framewidth:"",frameheight:"",infinigall:!1,htmlClose:"&times;",htmlNext:"<span>Next</span>",htmlPrev:"<span>Prev</span>",numeratio:!1,numerationBackground:"#161617",numerationColor:"#d2d2d2",numerationPosition:"top",overlayClose:!0,overlayColor:"rgba(23,23,23,0.85)",spinner:"double-bounce",spinColor:"#d2d2d2",titleattr:"title",titleBackground:"#161617",titleColor:"#d2d2d2",titlePosition:"top",cb_pre_open:function(){return!0},cb_post_open:function(){},cb_pre_close:function(){return!0},cb_post_close:function(){},cb_post_resize:function(){},cb_after_nav:function(){},cb_init:function(){}},H=e.extend(A,$);return H.cb_init(I),this.each(function(){function $(){y=O.data("gall"),h=O.data("numeratio"),b=O.data("infinigall"),p=e('.vbox-item[data-gall="'+y+'"]'),w=p.eq(p.index(O)+1),C=p.eq(p.index(O)-1),w.length||b!==!0||(w=p.eq(0)),p.length>1?(U=p.index(O)+1,a.html(U+" / "+p.length)):U=1,h===!0?a.show():a.hide(),""!==x?i.show():i.hide(),w.length||b===!0?(e(".vbox-next").css("display","block"),_=!0):(e(".vbox-next").css("display","none"),_=!1),p.index(O)>0||b===!0?(e(".vbox-prev").css("display","block"),P=!0):(e(".vbox-prev").css("display","none"),P=!1),(P===!0||_===!0)&&(r.on(ne.DOWN,T),r.on(ne.MOVE,Z),r.on(ne.UP,F))}function A(e){return e.length<1?!1:m?!1:(m=!0,g=e.data("overlay")||e.data("overlaycolor"),v=e.data("framewidth"),u=e.data("frameheight"),s=e.data("border"),t=e.data("bgcolor"),d=e.data("href")||e.attr("href"),o=e.data("autoplay"),x=e.attr(e.data("titleattr"))||"",e===C&&r.addClass("animated").addClass("swipe-right"),e===w&&r.addClass("animated").addClass("swipe-left"),void r.animate({opacity:0},500,function(){k.css("background",g),r.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({"margin-left":0,"margin-right":0}),"iframe"==e.data("vbtype")?J():"inline"==e.data("vbtype")?oe():"ajax"==e.data("vbtype")?G():"video"==e.data("vbtype")||"vimeo"==e.data("vbtype")||"youtube"==e.data("vbtype")?K(o):(r.html('<img src="'+d+'">'),te()),O=e,$(),m=!1,H.cb_after_nav(O,U,w,C)}))}function Q(e){27===e.keyCode&&S(),37==e.keyCode&&P===!0&&A(C),39==e.keyCode&&_===!0&&A(w)}function S(){var o=H.cb_pre_close(O,U,w,C);return o===!1?!1:(e("body").off("keydown",Q).removeClass("vbox-open"),O.focus(),void k.animate({opacity:0},500,function(){k.remove(),m=!1,H.cb_post_close()}))}function T(e){r.addClass("animated"),V=R=e.pageY,z=X=e.pageX,D=!0}function Z(e){if(D===!0){X=e.pageX,R=e.pageY,j=X-z,W=R-V;var o=Math.abs(j),t=Math.abs(W);o>t&&100>=o&&(e.preventDefault(),r.css("margin-left",j))}}function F(e){if(D===!0){D=!1;var o=O,t=!1;Y=X-z,0>Y&&_===!0&&(o=w,t=!0),Y>0&&P===!0&&(o=C,t=!0),Math.abs(Y)>=q&&t===!0?A(o):r.css({"margin-left":0,"margin-right":0})}}function G(){e.ajax({url:d,cache:!1}).done(function(e){r.html('<div class="vbox-inline">'+e+"</div>"),te()}).fail(function(){r.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),ae()})}function J(){r.html('<iframe class="venoframe" src="'+d+'"></iframe>'),ae()}function K(e){var o,t=L(d),a=e?"?rel=0&autoplay=1":"?rel=0",i=a+ee(d);"vimeo"==t.type?o="https://player.vimeo.com/video/":"youtube"==t.type&&(o="https://www.youtube.com/embed/"),r.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="'+o+t.id+i+'"></iframe>'),ae()}function L(e){if(e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),RegExp.$3.indexOf("youtu")>-1)var o="youtube";else if(RegExp.$3.indexOf("vimeo")>-1)var o="vimeo";return{type:o,id:RegExp.$6}}function ee(e){var o="",t=decodeURIComponent(e),a=t.split("?");if(void 0!==a[1]){var i,s,n=a[1].split("&");for(s=0;s<n.length;s++)i=n[s].split("="),o=o+"&"+i[0]+"="+i[1]}return encodeURI(o)}function oe(){r.html('<div class="vbox-inline">'+e(d).html()+"</div>"),ae()}function te(){N=r.find("img"),N.length?N.each(function(){e(this).one("load",function(){ae()})}):ae()}function ae(){i.html(x),r.find(">:first-child").addClass("figlio").css({width:v,height:u,padding:s,background:t}),e("img.figlio").on("dragstart",function(e){e.preventDefault()}),ie(),r.animate({opacity:"1"},"slow",function(){})}function ie(){var o=r.outerHeight(),t=e(window).height();f=t>o+60?(t-o)/2:"30px",r.css("margin-top",f),r.css("margin-bottom",f),H.cb_post_resize()}if(O=e(this),O.data("venobox"))return!0;I.VBclose=function(){S()},O.addClass("vbox-item"),O.data("framewidth",H.framewidth),O.data("frameheight",H.frameheight),O.data("border",H.border),O.data("bgcolor",H.bgcolor),O.data("numeratio",H.numeratio),O.data("infinigall",H.infinigall),O.data("overlaycolor",H.overlayColor),O.data("titleattr",H.titleattr),O.data("venobox",!0),O.on("click",function(b){b.preventDefault(),O=e(this);var p=H.cb_pre_open(O);if(p===!1)return!1;switch(I.VBnext=function(){A(w)},I.VBprev=function(){A(C)},g=O.data("overlay")||O.data("overlaycolor"),v=O.data("framewidth"),u=O.data("frameheight"),o=O.data("autoplay")||H.autoplay,s=O.data("border"),t=O.data("bgcolor"),_=!1,P=!1,m=!1,d=O.data("href")||O.attr("href"),l=O.data("css")||"",x=O.attr(O.data("titleattr"))||"",B='<div class="vbox-preloader">',H.spinner){case"rotating-plane":B+='<div class="sk-rotating-plane"></div>';break;case"double-bounce":B+='<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';break;case"wave":B+='<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';break;case"wandering-cubes":B+='<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';break;case"spinner-pulse":B+='<div class="sk-spinner sk-spinner-pulse"></div>';break;case"three-bounce":B+='<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';break;case"cube-grid":B+='<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>'}return B+="</div>",E='<a class="vbox-next">'+H.htmlNext+'</a><a class="vbox-prev">'+H.htmlPrev+"</a>",M='<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">'+H.htmlClose+"</div>",n='<div class="vbox-overlay '+l+'" style="background:'+g+'">'+B+'<div class="vbox-container"><div class="vbox-content"></div></div>'+M+E+"</div>",e("body").append(n).addClass("vbox-open"),e(".vbox-preloader .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color",H.spinColor),k=e(".vbox-overlay"),c=e(".vbox-container"),r=e(".vbox-content"),a=e(".vbox-num"),i=e(".vbox-title"),i.css(H.titlePosition,"-1px"),i.css({color:H.titleColor,"background-color":H.titleBackground}),e(".vbox-close").css({color:H.closeColor,"background-color":H.closeBackground}),e(".vbox-num").css(H.numerationPosition,"-1px"),e(".vbox-num").css({color:H.numerationColor,"background-color":H.numerationBackground}),e(".vbox-next span, .vbox-prev span").css({"border-top-color":H.arrowsColor,"border-right-color":H.arrowsColor}),r.html(""),r.css("opacity","0"),k.css("opacity","0"),$(),k.animate({opacity:1},250,function(){"iframe"==O.data("vbtype")?J():"inline"==O.data("vbtype")?oe():"ajax"==O.data("vbtype")?G():"video"==O.data("vbtype")||"vimeo"==O.data("vbtype")||"youtube"==O.data("vbtype")?K(o):(r.html('<img src="'+d+'">'),te()),H.cb_post_open(O,U,w,C)}),e("body").keydown(Q),e(".vbox-prev").on("click",function(){A(C)}),e(".vbox-next").on("click",function(){A(w)}),!1});var se=".vbox-overlay";H.overlayClose||(se=".vbox-close"),e(document).on("click",se,function(o){(e(o.target).is(".vbox-overlay")||e(o.target).is(".vbox-content")||e(o.target).is(".vbox-close")||e(o.target).is(".vbox-preloader"))&&S()}),z=0,X=0,Y=0,q=50,D=!1;var ne={DOWN:"touchmousedown",UP:"touchmouseup",MOVE:"touchmousemove"},ce=function(o){var t;switch(o.type){case"mousedown":t=ne.DOWN;break;case"mouseup":t=ne.UP;break;case"mouseout":t=ne.UP;break;case"mousemove":t=ne.MOVE;break;default:return}var a=de(t,o,o.pageX,o.pageY);e(o.target).trigger(a)},re=function(o){var t;switch(o.type){case"touchstart":t=ne.DOWN;break;case"touchend":t=ne.UP;break;case"touchmove":t=ne.MOVE;break;default:return}var a,i=o.originalEvent.touches[0];a=t==ne.UP?de(t,o,null,null):de(t,o,i.pageX,i.pageY),e(o.target).trigger(a)},de=function(o,t,a,i){return e.Event(o,{pageX:a,pageY:i,originalEvent:t})};"ontouchstart"in window?(e(document).on("touchstart",re),e(document).on("touchmove",re),e(document).on("touchend",re)):(e(document).on("mousedown",ce),e(document).on("mouseup",ce),e(document).on("mouseout",ce),e(document).on("mousemove",ce)),e(window).resize(function(){e(".vbox-content").length&&setTimeout(ie(),800)})})}})}(jQuery);
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";

/* KERIS JATENG Specific scripts*/
//var month['indonesia'] = [Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
// $content_investasi = $('#content-investasi');
function generateChart(placeholder, dataset, label, option){
    var datas = [];
    $.each(dataset, function(i, el){
        datas.push({x: el['date'], y: parseFloat(el['value'])});
    });
    new Chart(placeholder, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: label,
                    borderColor: "rgb(255, 99, 132)",
                    data: datas,
                    fill: false
                }
            ]
        },
        options: option
    });
}


// $(document).ready(function() {
    // Video Controls
    // -----------------------------------------------------
    var players = [];

    var curPlayer = null;
    var curPlayerPick = null;
    var curPi;
    var curVidId;

    function onYouTubeIframeAPIReady() {
        $('.vid').each(function(i){
            $(this).attr('index', i);
            var player = new YT.Player($('.vid')[i], {
                width: '100%',
                height: 180,
                videoId: $(this).attr('vid-id'),
                playerVars: {
                    color: 'white',
                    controls: 0,
                    disablekb: 1,
                    modestbranding: 0,
                    showinfo: 0,
                    rel: 0,
                    fs: 0,
                    playlist: $(this).attr('vid-id')
                },
                events: {
                    // onReady: initialize
                    onStateChange: onPlayerStateChanged
                }
            });

            players.push(player);

        });

        $(".vid-fore").hover(function() {
            var pi = $(this).parent().find(".vid").attr('index');
            curPlayerPick = players[pi];
            players[pi].setPlaybackQuality('small');
            players[pi].stopVideo();
            players[pi].playVideo();
            players[pi].mute();
            // startToStop(pi);
        });

        $(".vid-fore").mouseleave(
            function() {
                var pi = $(this).parent().find(".vid").attr('index');
                players[pi].stopVideo();
                players[pi].mute();
            }
        );


        $(".vid-fore").click(function() {
            curPi = $(this).find(".vid").attr('index');
            curVidId = $(this).find(".vid").attr('vid-id');
            players[curPi].stopVideo();
            if(curPlayer != null)
                curPlayer.destroy()
            curPlayer = new YT.Player('video-view', {
                width: '100%',
                height: '350px',
                videoId: curVidId,
                playerVars: {
                    color: 'white',
                    controls: 1,
                    disablekb: 1,
                    modestbranding: 0,
                    showinfo: 0,
                    autoplay: 1,
                    rel: 0,
                    fs: 1,
                    playlist: curVidId
                },
                events: {
                    // onReady: initialize
                    onStateChange: onPlayerStateChange
                }
            });

        });

        $('#m-view-vid').on('hidden.bs.modal', function () {
            curPlayer.stopVideo();
        });

        function startToStop(p) {
           //checks every 100ms to see if the video has reached 6s
           checkInt = setInterval(function() {
              if (p.getCurrentTime() > 15) {
                p.stopVideo();
                clearInterval(checkInt);
              };
           }, 100)
        }

        function onPlayerStateChanged(e){
            if (event.data == YT.PlayerState.PLAYING) {
                startToStop(curPlayerPick);
            }
        }

    }

    $(".challenge-pdf-title").click(function() {
        var pdfLink = $(this).attr("pdf-link");
        $("#challenge-pdf-obj").attr("data", pdfLink);
    });


    function onPlayerStateChange(e){
        // if (event.data == YT.PlayerState.PLAYING) {
        //   curPlayer.playVideo();
        // }
    }


    function initialize(){

        // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();

        // Clear any old interval.
        clearInterval(time_update_interval);

        // Start interval to update elapsed time display and
        // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
        }, 1000)

    }

// -----------------------------------------------------
// });



function change_page_invest(idElement){
    $('#why-invest').hide();
    $('#how-invest').hide();
    $('#investment-portfolio').hide();
    $('#investment-story').hide();
    $('#facility-infrastructure').hide();

    $('#nav-why-invest').removeClass('active');
    $('#nav-how-invest').removeClass('active');
    $('#nav-investment-portfolio').removeClass('active');
    $('#nav-investment-story').removeClass('active');
    $('#nav-facility-infrastructure').removeClass('active');

    // var idButton = idElement.substring(8);

    $('#' + idElement).fadeIn(500);
    $('#nav-'+ idElement).addClass('active');

    var sidebar_height = 0;
    if($('#' + idElement).outerHeight(true) < 600){
        sidebar_height = 610;
    }
    else{
        sidebar_height = $('#' + idElement).outerHeight(true);
    }
    $('#sidebar-' + idElement).height(sidebar_height);

    var text = $('#nav-'+ idElement).children('.nav-title').children().html();
    if($('#breadcrumb').children().length > 2){
        $('#breadcrumb').children().last().remove();
        $('#breadcrumb').append("<li class='active'>"+text+"</li>");
    }
    else{
        $('#breadcrumb').append("<li class='active'>"+text+"</li>");
    }

    sessionStorage.param = idElement;
}


function change_page_how_to_invest(idElement){
    $('#content-why-to-invest').children().hide();
    $('.subbar-licenses').hide(200);

    $('#sidebar-step-to-invest').removeClass('active');
    $('#sidebar-licenses').removeClass('active');

    $('#content-' + idElement).fadeIn(400);
    $('#sidebar-' + idElement).addClass('active');

    if(idElement == 'licenses'){
        $('.subbar-licenses').fadeIn(400);
    }

    $('#sidebar-how-invest').height($('#content-how-invest').height(true));
}

function change_page_get_regulasi(id, childrenId){
    $('#content-for-how-to-invest').children().hide();
    $('#btn-steps-to-invest').attr('class', 'card-button card-primary');
    $('#btn-licensed').attr('class', 'card-button card-primary btn-active');
    for(var i = 0; i < $('#list_licensed').length; i++){
        $('#list_licensed li').attr('class', '');
    }

    $('#' + childrenId).show();
    $('#' + id).attr('class', 'active');
}

function change_page_invest_portfolio(idElement){
    $('#content-investment-portfolio-industry').hide();
    $('#content-investment-portfolio-potential').hide();
    $('#content-investment-portfolio-region').hide();

    $('#sidebar-investment-portfolio-industry').removeClass('active');
    $('#sidebar-investment-portfolio-potential').removeClass('active');
    $('#sidebar-investment-portfolio-region').removeClass('active');

    $('#content-' + idElement).fadeIn(400);
    $('#sidebar-' + idElement).addClass('active');

    $('#sidebar-investment-portfolio').height($('#content-investment-portfolio').outerHeight(true));
}

function change_page_invest_portfolio_detail(idElement){
    var panel = '';
    $('#content-industri').children().hide();
    $('.sidebar-active').hide();
    $('.sidebar-nonactive').show();
    $('.ul-industri').children().removeClass('active');

    $('#content-industri-' + idElement).fadeIn(400);

    $('#sidebar-industri-' + idElement).hide();
    $('#sidebar-industri-' + idElement + '-active').show();
    $('#sidebar-industri-' + idElement + '-active').addClass('active');
    panel = $('#content-industri-' + idElement).html();
    if(panel == 0){
        $('#content-industri').hide();
    } else {
        $('#content-industri').show();
    }

    $('#sidebar-investment-portfolio').height($('#content-investment-portfolio').outerHeight(true));
}

function change_page_invest_portfolio_potential_detail(idElement){
  var panel = '';
  $('#content-potensi').children().hide();
  $('.sidebar-active2').hide();
  $('.sidebar-nonactive2').show();
  $('.ul-potensi').children().removeClass('active');

  $('#content-industri2-' + idElement).fadeIn(400);

  $('#sidebar-industri2-' + idElement).hide();
  $('#sidebar-industri2-' + idElement + '-active').show();
  $('#sidebar-industri2-' + idElement + '-active').addClass('active');
  panel = $('#content-industri2-' + idElement).html();
  if(panel == 0){
      $('#content-potensi').hide();
  } else {
      $('#content-potensi').show();
  }

  $('#sidebar-investment-portfolio').height($('#content-investment-portfolio').outerHeight(true));
}

function change_page_facility_infrastructure(idElement){
    $('#content-industrial-area').hide();
    $('#content-infrastructure').hide();

    $('#sidebar-industrial-area').removeClass('active');
    $('#sidebar-infrastructure').removeClass('active');

    $('#content-' + idElement).fadeIn(400);
    $('#sidebar-' + idElement).addClass('active');

    $('#sidebar-facility-infrastructure').height($('#content-facility-infrastructure').outerHeight(true));
}

function change_page_infrastructure_detail(idElement){
    $('#infrastructure-content').children().hide();

    $('.ul-infrastructure').children().removeClass('active');
    $('.ul-infrastructure li i').removeClass('color-active');
    $('.ul-infrastructure li p').removeClass('active');

    $('#sidebar-content-' + idElement).addClass('active');
    $('#sidebar-content-' + idElement + ' i').addClass('color-active');
    $('#sidebar-content-' + idElement + ' p').addClass('active');
    $('#content-' + idElement).fadeIn(400);

    $('#content-' + idElement).css({
        height: ''
    });

    if(idElement !== "international-airport"){
        console.log(400);
        $('#content-' + idElement).height($('#content-' + idElement).outerHeight(true));
    }
}

function change_tab(idElement){
    $('#product').hide();
    $('#profile').hide();

    $('#' + idElement).show();
}

function change_page_faq(idElement){
    $('#umum').hide();
    $('#perdagangan').hide();
    $('#investasi').hide();
    $('#pariwisata').hide();

    $('#li-umum').removeClass('active');
    $('#li-perdagangan').removeClass('active');
    $('#li-investasi').removeClass('active');
    $('#li-pariwisata').removeClass('active');

    $('#' + idElement).fadeIn(400);
    $('#li-' + idElement).addClass('active');

    $('#' + idElement).show();

}

function change_page_aboutus(idElement){

    $('#about-us').hide();
    $('#visi-misi').hide();

    $('#li-about-us').removeClass('active');
    $('#li-visi-misi').removeClass('active');

    $('#' + idElement).fadeIn(400);
    $('#li-' + idElement).addClass('active');

    $('#' + idElement).show();
}


function change_page_licenses(idSubbar){
    $('#content-subbar').children().hide();
    $('.subbar-licenses').removeClass('active-subbar');

    $('#content-subbar-' + idSubbar).fadeIn(400);
    $('#subbar-' + idSubbar).addClass('active-subbar');
    $('#subbar-top-' + idSubbar).addClass('active-subbar');

    $('#sidebar-how-invest').height($('#content-how-invest').height(true));
}

function checkHeight(collapse_id){
    $('.panel-collapse').collapse('hide');
    $('.icon-collapse i').css({
        '-webkit-transform': 'rotate(0deg)',
        '-moz-transform': 'rotate(0deg)',
        'transform': 'rotate(0deg)',
    });

    if($('#collapse' + collapse_id).is(":hidden")){
        $('#collapse' + collapse_id).collapse('show');

        $('#icon-collapse-' + collapse_id + ' i').css({
            '-webkit-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)',
        });

    }
    else{
        $('#collapse' + collapse_id).collapse('hide');
        $('#icon-collapse-' + collapse_id + ' i').css({
            '-webkit-transform': 'rotate(0deg)',
            '-moz-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)',
        });

    }

    $('#sidebar-how-invest').height($('#content-how-invest').outerHeight(true));
}

function show_content_infra(collapse_id) {
    if($('#content-infra-' + collapse_id).is(":hidden")){
        $('#content-infra-' + collapse_id).collapse('show');

        $('#collapse-head-icon-' + collapse_id).css({
            '-webkit-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)',
        });

    }
    else{
        $('#content-infra-' + collapse_id).collapse('hide');
        $('#collapse-head-icon-' + collapse_id).css({
            '-webkit-transform': 'rotate(0deg)',
            '-moz-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)',
        });

    }
}

function show_detail_infra(collapse_id) {
    if($('#infra-detail-' + collapse_id).is(":hidden")){
        $('#infra-detail-' + collapse_id).collapse('show');

        $('#collapse-detail-icon-' + collapse_id).css({
            '-webkit-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)',
        });

    }
    else{
        $('#infra-detail-' + collapse_id).collapse('hide');
        $('#collapse-detail-icon-' + collapse_id).css({
            '-webkit-transform': 'rotate(0deg)',
            '-moz-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)',
        });

    }
}

function get_success_story(){
    var html = '';
    $.ajax({
        type: 'GET',
        url: '/api/investasi/success_story',
        dataType: 'json',
        success: function(resp){
            $.each(resp.data, function(i, el){
                html += '<div class="col-sm-4">';
                html += '<div class="thumbnail">';
                html += '<img src="/assets/images/uploads/'+el.postmeta.banner+'" alt="">';
                html += '<div class="caption-thumbnail">';
                html += '<h4 class="text-center"><b>'+ (lang == 'english')?el.post_title_en:el.post_title_id +'</b></h4>';
                html += '</div></div></div>';
            });
            $('.success-story').html(html);
        }
    });
}

function get_portfolio(){
    var topbar = '';
    var content = '';
    $.ajax({
        type: 'GET',
        url: '/api/investasi/portfolio',
        dataType: 'json',
        success: function(resp){
            $.each(resp.data[0].children, function(i, el){
                var title = (lang == 'english') ? el.term_name_en : el.term_name_id;
                topbar += "<li id='sidebar-industri-"+el.term_slug+"' class='sidebar-nonactive' onclick='change_page_invest_portfolio_detail(\""+el.term_slug+"\");'>";
                topbar += "<img src='/assets/images/investment/head_industri/"+el.term_image_url+".png' width='60%'>";
                topbar += "<p class='caption-head-industri'>"+title+"</p>";
                topbar += "</li>";
                topbar += "<li id='sidebar-industri-"+el.term_slug+"-active' class='sidebar-active' onclick='change_page_invest_portfolio_detail(\""+el.term_slug+"\");'>";
                topbar += "<img src='/assets/images/investment/head_industri/"+el.term_image_url+"-active.png' width='60%'>";
                topbar += "<p class='caption-head-industri-active'>"+title+"</p>";
                topbar += "</li>";

                content += "<div id='content-industri-"+el.term_slug+"'><ol>";
                $.each(el.posts, function(i2, el2){
                    if (el2.post_type=="peluang_investasi" || el2.post_type=="portfolio-investasi") {
                        var content_title = (lang == 'english')? el2.post_title_en : el2.post_title_id;
                        content += "<li>";
                        content += "<a href='/p/"+el2.post_name+"'>"+content_title+"</a>";                        
                        content += "</li>";
                    }
                });
                content += "</ol></div>";
            });

            $('.ul-industri').html(topbar);
            $('#content-industri').html(content);
            change_page_invest_portfolio_detail('investasi-pariwisata');
        }
    });
}

function get_industry(){
    var content = '';
    $.ajax({
        type: 'GET',
        url: '/api/investasi/industrial',
        dataType: 'json',
        success: function(resp){
            $.each(resp.data, function (i, el){
                content += "<div class='col-sm-6 col-xs-12'>";
                content += "<div class='wrapper-img'>";
                content += "<a href='/p/"+el.post_name+"'><img src='/assets/images/uploads/"+el.postmeta.banner+"' width='auto' height='300px'>";
                content += "<div class='wrapper-img-text'>";
                content += "<p class='text-white'>";
                content += (lang == 'english')? el.post_title_en : el.post_title_id;
                content += "</p>"
                content += "</div>";
                content += "</a>";
                content += "</div>";
                content += "</div>";
            });
            $('#industrial').html(content);
        }
    });
}

function get_infrastructure(){
    var topbar = '';
    var content = '';
    var read_more = (lang == 'english') ? 'Read More' : 'Selengkapnya';
    $.ajax({
        type: 'GET',
        url: '/api/investasi/infrastructure',
        dataType: 'json',
        success: function(resp){
            $.each(resp.data[0].children, function(i, el){
                var term_name = (lang == 'english')? el.term_name_en : el.term_name_id;
                topbar += "<li id='sidebar-content-"+el.term_slug+"' onclick='change_page_infrastructure_detail(\""+el.term_slug+"\")'>";
                topbar += "<i class='fa "+el.term_image_url+" fa-fw fa-4x fa-ungu'></i>";
                topbar += "<p class='caption-head-infrastructure'>"+term_name+"</p>"
                topbar += "</li>";

                content += "<div id='content-"+el.term_slug+"'>";
                content += "<div class='row with-margin-bottom-20'>";
                $.each(el.posts, function(i2, el2){
                    var post_title = (lang == 'english')? el2.post_title_en : el2.post_title_id;
                    var post_content = (lang == 'english')? el2.post_content_en : el2.post_content_id;
                    content += "<div class='col-md-6'>";
                    content += "<div class='wrapper-infra-header'>";
                    content += "<div class='overlay'>";
                    content += "<div class='text with-text-align-center'>";
                    content += "<i class='fa "+ el.term_image_url +" fa-fw fa-5x fa-white with-margin-top-20'></i>";
                    content += "<p class='text-white with-margin-bottom-20 with-margin-top-20'>"+post_title+"</p>";
                    content += "<a data-toggle='collapse' href='#' onclick='show_content_infra("+el2.id+")'>";
                    content += "<div class='wrapper-img-infra-text'>";
                    content += "<span class='text-white with-margin-left-right-20'>" +read_more+ "</span>";
                    content += "<span class='with-margin-left-right-20 icon-collapse' id='collapse-head-icon-"+el2.id+"'><i class='fa fa-chevron-down fa-2x fa-white'></i></span>";
                    content +=  "</div>";
                    content += "</a>";
                    content += "</div>";
                    content += "</div>";
                    content += "<a href='../p/"+el2.post_name+"'>";
                    content += "<img src='/assets/images/uploads/" +el2.postmeta.banner+ "' width='100%' height='400px'>";
                    content +=  "<div class='wrapper-img-text' id='img-text-"+el2.id+"'>";
                    content += "<p class='text-white'>" +post_title+ "</p>";
                    content += "</div>";
                    content += "</a>";

                    content += "</div>";
                    content += "<div id='content-infra-" +el2.id+ "' class='collapse wrapper-infra-content'>"+post_content+"</div>";
                    content += "</div>";
                });
                content += "</div>";
                content += "</div>";
            });
            $('.ul-infrastructure').html(topbar);
            $('#infrastructure-content').html(content);
            change_page_infrastructure_detail('international-airport');
        }
    });
}

function get_potential(){
  var topbar = '';
  var content = '';
  var pdffile = '';
  $.ajax({
      type: 'GET',
      url: '/api/investasi/portfolio',
      dataType: 'json',
      success: function(resp){
        $.each(resp.data[0].children, function(i, el){
            var title = (lang == 'english') ? el.term_name_en : el.term_name_id;
            topbar += "<li id='sidebar-industri2-"+el.term_slug+"' class='sidebar-nonactive2' onclick='change_page_invest_portfolio_potential_detail(\""+el.term_slug+"\");'>";
            topbar += "<img src='/assets/images/investment/head_industri/"+el.term_image_url+".png' width='60%'>";
            topbar += "<p class='caption-head-potential'>"+title+"</p>";
            topbar += "</li>";
            topbar += "<li id='sidebar-industri2-"+el.term_slug+"-active' class='sidebar-active2' onclick='change_page_invest_portfolio_potential_detail(\""+el.term_slug+"\");'>";
            topbar += "<img src='/assets/images/investment/head_industri/"+el.term_image_url+"-active.png' width='60%'>";
            topbar += "<p class='caption-head-potential-active'>"+title+"</p>";
            topbar += "</li>";

            content += "<div id='content-industri2-"+el.term_slug+"'><ol>";
            $.each(el.posts, function(i2, el2){
                if (el2.post_type=="presentasi" || el2.post_type=="last") {
                    var content_title = (lang == 'english')? el2.post_title_en : el2.post_title_id;
                    pdffile = (lang == 'english')? el2.postmeta.pdfportfolio_en : el2.postmeta.pdfportfolio_id;
                    content += "<li>";
                    content += "<a style='cursor:pointer;' class='download' onclick=window.open('/download_pdf/"+pdffile+"','_blank')>"+content_title+"</a>";
                    content += "</li>";
                }
            });
            content += "</ol></div>";
        });
        $('.ul-potensi').html(topbar);
        $('#content-potensi').html(content);
        change_page_invest_portfolio_potential_detail('investasi-pariwisata');
      }
  });
}

function get_regulation(){
    var sidebar = '';
    var content = [];
    $.ajax({
        type: 'GET',
        url: '/api/investasi/regulation',
        dataType: 'json',
        success: function(resp){
            $.each(resp.data[0].children, function(i, el){
                var term_name = (lang=='english')?el.term_name_en:el.term_name_id;
                sidebar += "<li class='subbar-licenses' id='subbar-"+el.term_slug+"' onclick=change_page_licenses('"+el.term_slug+"')>"+term_name+"</li>";

                var each_content = "<div id='content-subbar-"+el.term_slug+"'>";
                $.each(el.posts, function (i2, el2){
                    var post_title = (lang=='english')?el2.post_title_en:el2.post_title_id;
                    var post_content = (lang=='english')?el2.post_content_en:el2.post_content_id;
                    each_content += "<div class='panel-group'>";
                    each_content += "<div class='panel panel-default'>";
                    each_content += "<div class='panel-heading'>";
                    each_content += "<h4 class='panel-title'>";
                    each_content += "<a data-toggle='collapse' href='#' onclick='checkHeight("+el2.id+");'>"+post_title+"<span class='pull-right icon-collapse' id='icon-collapse-"+el2.id+"'><i class='fa fa-chevron-down'></i></span></a>";
                    each_content += "</h4>";
                    each_content += "</div>";
                    each_content += "<div id='collapse"+el2.id+"' class='panel-collapse collapse'>";
                    each_content += "<div class='panel-body panel-content-subbar'>"+post_content+"</div>";
                    each_content += "</div>";
                    each_content += "</div>";
                    each_content += "</div>";
                });
                each_content += "</div>";
                content.push(each_content);
            });

            $('#sidebar-how-invest .ul-sidebar').append(sidebar);
            $('#content-subbar').html(content.join());
            change_page_how_to_invest('step-to-invest')
        }
    });
}

$(document).ready(function(){
    updateSize();
    initial_page();
    $('.select2').select2({
        placeholder: $('#bahasa').val(),
        allowClear: true,
        selected: false
    });

    if($('#header-governance').length){
        var header_governance = $('#header-governance').html();
        if(header_governance.length > 27){
            $('#header-governance').css('font-size', 24);
            $('.governance').css('margin-top', 30);
        }
    }

    if ($('#header-investasi').length > 0){
        get_success_story();
        get_regulation();
        get_portfolio();
        get_industry();
        get_infrastructure();
        get_potential();
    }

    var venoOptions = {
        // is called when opening is finished
       cb_post_open  : function(obj, gallIndex, thenext, theprev){
            video = document.getElementById('video1');
            video.play();
       }
   }

    $('.venobox').venobox({
        framewidth: '90%',        // default: ''
        frameheight: '90%',       // default: ''
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true,           // default: false
    });

    // site stats getter
    $.ajax({
        type: 'GET',
        url: '/stat',
        dataType: 'json',
        success: function(data){
            $.each(data.session, function(i, el){
                $('.session.'+i).html(el.count);
            });
            $.each(data.page, function(i, el){
                $('.page.'+i).html(el.count);
            });
        }
    });

    $(window).resize(function() {
        updateSize();
    });

    $('#myModal').on('shown.bs.modal', function () {
    // will only come inside after the modal is shown
        video = document.getElementById('video1');
        video.play();
    });
    $('#myModal').on('hidden.bs.modal', function () {
    // will only come inside after the modal is shown
        video = document.getElementById('video1');
        video.pause();
    });

    $('.btn-macro-transparent').hover(function(){
        if($(this).data('back') != null){
            $(this).css('background-color', $(this).data('back'));
            $(this).css('border', '1px solid ' + $(this).data('back'));
            $(this).children('.content-btn').children('b').css('color', 'white');
        }
    });

    $('.btn-macro-transparent').on('mouseleave', (function(){
        if($(this).data('back') != null){
            $(this).css('background-color', 'transparent');
            $(this).css('border', '1px solid #db7455');
            $(this).children('.content-btn').children('b').css('color', 'black');
        }
    }));

    $('#regional-trade').select2({
        allowClear: true,
        placeholder: '',
    });

    $('#section1 a').click(function(event) {
        if(this.hash != ""){
            event.preventDefault();

            var hash = this.hash;

            scroll = $(window).height() - $('#navbar-right.navbar-collapse.collapse').outerHeight(true) + 30;

            $('html, body').animate({
                scrollTop: scroll
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    $('.category-box').hover(function(){
        $(this).children(".btn-more").css('display', 'block');
    });

    $('.category-box').on('mouseleave', (function(){
        $(this).children(".btn-more").css('display', 'none');
    }));

    var heights = $('.card-tourism').map(function(){
        return $(this).height();
    }).get();

    var maxHeight = Math.max.apply(null, heights);

    $(".card-tourism").height(maxHeight);

    var heights_thumbnail = $('.thumbnail-berita').map(function(){
        return $(this).height();
    }).get();

    var maxHeightThumbnail = Math.max.apply(null, heights_thumbnail);

    $('.thumbnail-berita').height(maxHeightThumbnail);
    // sideback button
    $('.jumbotron-sideback').prepend('<a href="'+document.referrer+'" class="cover"></a>');

    // soft scrolling
    $('.scroller a[href*=\\#]').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top-75}, 500);
        $(this).parent().parent().find('.selected').removeClass('selected');
        $(this).parent().addClass('selected');
    });

    $('.wrapper-infra-header').hover(function(){
        $(this).children().children(".wrapper-img-text").hide();
        $(this).children(".overlay").css('opacity', 0.9);
    });

    $('.wrapper-infra-header').on('mouseleave', function(){
        $(this).children().children(".wrapper-img-text").show();
        $(this).children(".overlay").css('opacity', 0);
    });

    // gmaps on `gmaps` class
    var map;
    var hotel;
    $(".gmaps").each(function(i,el){
        var long = $(el).attr("long");
        var lat = $(el).attr("lat");
        var post_id = $("#post_id").val();

        var infoWindow = new google.maps.InfoWindow();
        var latLng = new google.maps.LatLng(lat, long);
        var geocoder = new google.maps.Geocoder;
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(latLng);

        var mapOptions = {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'cooperative'
        }

        var map = new google.maps.Map(el, mapOptions);

        map.setCenter(bounds.getCenter());
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: ""
        });

        var hotel = new google.maps.places.PlacesService(map);
        var objekWisata = new google.maps.places.PlacesService(map);

        getObjekWisata();

        var ltlng = {lat: parseFloat(lat), lng: parseFloat(long)};

        var placeId = '';
        geocoder.geocode({'location': ltlng}, function(results, status){
            if(status == google.maps.GeocoderStatus.OK){
                placeId = results[1].place_id;
                hotel.getDetails({placeId: placeId}, function(place, status){
                    if(status == google.maps.places.PlacesServiceStatus.OK) {
                        google.maps.event.addListener(marker, 'click', function(){
                            infoWindow.setContent('' + place.name);
                            infoWindow.open(map, marker);
                        });
                    }
                    else{
                        console.log(status);
                    }
                });
            }else{
                console.log(status);
            }
        });

        function getObjekWisata(){
            $.ajax({
                url: '../posts/check_term',
                data: {post_id: post_id},
                dataType: "json",
                success: function(resp){
                    if(resp.status == true){
                        if(resp.statusTerm == "Kota"){
                            $.each(resp.data, function(key, item){
                                var icon = '../assets/images/icon-objek-wisata.png';
                                var image = {
                                    url: icon,
                                    size: new google.maps.Size(30, 30),
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(17, 34),
                                    scaledSize: new google.maps.Size(30, 30)
                                };

                                var latlng = new google.maps.LatLng(item.latitude, item.longitude);
                                var marker = new google.maps.Marker({
                                    map: map,
                                    icon: image,
                                    title: item.post_title_id,
                                    position: latlng
                                });

                                var locationLatLngGeocoder = {lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)};

                                callbackObjekWisataGeocoder(marker, locationLatLngGeocoder);

                                hotel.nearbySearch({
                                    location: latlng,
                                    radius: 1000,
                                    type: ['lodging']
                                }, callback);

                                bounds.extend(latlng);
                            });

                            map.fitBounds(bounds);
                        }
                        else if(resp.statusTerm == "ObjekWisata"){
                            hotel.nearbySearch({
                                location: latLng,
                                radius: 1000,
                                type: ['lodging']
                            }, callback);
                        }

                    }
                }
            });
        }

        function createMarkers(place){
            var placesList = document.getElementById('places');
            var location = place.geometry.location;
            var placeName = place.name;
            var icon = '../assets/images/icon-hotel-small.png';
            var image = {
                url: icon,
                size: new google.maps.Size(25, 25),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: location
            });

            bounds.extend(location);
            google.maps.event.addListener(marker, 'click', function(){
                var hotelDetails = new google.maps.places.PlacesService(map)
                hotelDetails.getDetails({placeId: place.place_id}, callbackGetDetails(marker, place));
            });
        }

        function callback(results, status){
            if(status === google.maps.places.PlacesServiceStatus.OK){
                var hotelname = '';
                for(var i = 0; i < results.length; i++){
                    createMarkers(results[i]);
                }

                map.fitBounds(bounds);
            }
            else{
                console.log(status);
            }
        }

        function callbackObjekWisataGeocoder(marker, locationLatLngGeocoder){
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({'location': locationLatLngGeocoder}, function(results, status){
                if(status == google.maps.GeocoderStatus.OK){
                    getDetailObjekWisata(marker, results[0].place_id);
                }
                else{
                    if(status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT){
                        setTimeout(function(){
                            callbackObjekWisataGeocoder(marker, locationLatLngGeocoder);
                        }, 500);
                    }
                }
            });
        }

        function getDetailObjekWisata(marker, place_id){
            google.maps.event.addListener(marker, 'click', function(){
                var objekWisataDetails = new google.maps.places.PlacesService(map)
                objekWisataDetails.getDetails({placeId: place_id}, callbackGetDetailsObjekWisata(marker));
            });
        }

        function callbackGetDetailsObjekWisata(marker){
            return function(results, status){
                if(status == google.maps.places.PlacesServiceStatus.OK){
                    var content = '<b>' + marker.getTitle() + '</b>';

                    if(typeof results.formatted_address != 'undefined'){
                        address = results.formatted_address;
                    }

                    content += ' <br> address : ' + address;
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                }
                else{
                    console.log(status);
                }
            }
        }

        function callbackGetDetails(marker, place){
            return function(results, status){
                if(status == google.maps.places.PlacesServiceStatus.OK){
                    var photo = "";
                    var address = "-";
                    var phone = "-";
                    var website = "-";

                    if(typeof place['photos'] != 'undefined'){
                        photo = place['photos'][0].getUrl({
                            maxWidth: 150,
                            maxHeight: 150
                        });
                    }

                    var content = '<img src=' + photo + '> <br> <b>' + results.name + '</b>';

                    if(typeof results.formatted_address != 'undefined'){
                        address = results.formatted_address;
                    }

                    if(typeof results.formatted_phone_number != 'undefined'){
                        phone = results.formatted_phone_number;
                    }

                    if(typeof results.website != 'undefined'){
                        website = "<a href=" + results.website + ">" + results.website + "</a>";
                    }

                    content += ' <br> address : ' + address;
                    content += ' <br> Phone : ' + phone;
                    content += ' <br> Website : ' + website;
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                }
                else{
                    console.log(status);
                }
            }
        }
    });

    // makroekonomi getter
    if ($('#makroekonomi').length){
        var div = $('#makroekonomi');
        var content = '<table class="table table-bordered table-responsive">';
        $.ajax({
            type: 'GET',
            data: {limit: 5},
            url: '/home/makroekonomi',
            dataType: 'json',
            success: function(resp){
                $.each(resp, function(i, el){
                    var dataset_value = (el.dataset.length != 0) ? el.dataset[0].value : '0';
                    if(el.name_id == 'KURS RUPIAH'){
                        dataset_value = (el.dataset.length != 0) ? 'Rp ' + formatRupiah(el.dataset[0].value) : '0';
                    }

                    content += '<tr>';
                        content += '<td>' + el.name + '</td>';
                        content += '<td>:</td>';
                        content += '<td>' + dataset_value + '</td>';
                    content += '</tr>';

                    // if (el.dataset.length != 0 && el.name_id != 'KURS RUPIAH'){
                    //     // content += '<div class="list list-group"><div class="panel-heading"><div class="row"><a class="list-makroekonomi" data-toggle="collapse" href="#makroekonomi-panel-'+i+'">'+el.name+'</a>'+'<span style="float:right">'+el.dataset[0].value+'</span></div>'+'</div><div id="makroekonomi-panel-'+i+'" class="panel-collapse collapse"><table class="table table-bordered table-hover">';
                    //     // $.each(el.dataset, function(j, ds){
                    //     //     content += '<tr><td>'+ds.date_string+'</td><td style="background-color:#ECCA9F">'+ds.value+'</td></tr>';
                    //     // });
                    //     // content += '</table></div></div>';
                    // }else if (el.dataset.length != 0 && el.name_id == 'KURS RUPIAH'){
                    //     $('#kurs').html("Rp " + formatRupiah(parseInt(el.dataset[0].value)));
                    // }

                    if (el.name_id == 'INFLASI JAWA TENGAH (%, YOY)'){
                        var dataset = el.dataset.slice(0, 12);
                        var chart = $('#chart-makroekonomi');
                        var option = {
                            responsive: true,
                            maintainAspectRatio: false,
                            height: 180,
                            scales: {
                                xAxes: [{
                                    type: "time",
                                    time: {
                                        format: 'MMM YYYY',
                                        parser: 'YYYY-MM-DD'
                                    }
                                }],
                                /*
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'value'
                                    }
                                }]*/
                            },
                            legend: {
                                display: false
                            },
                            tooltips: {
                                callbacks: {
                                    title: function(tooltipItem, data){
                                        return moment(tooltipItem[0].xLabel, "YYYY-MM-DD HH:mm:ss").format("MMM YYYY");
                                    }
                                }
                            }
                        }
                        generateChart(chart, dataset, el.name, option);
                    }
                });
                content += '</table>';
                div.html(content);
            }
        });
    }

    // ajax processing on button, example: Logout button
    $("button.ajax, .btn.ajax, .btn-transparent").click(function(e){
        e.preventDefault();
        var btn = $(this);

        $.ajax({
            type: btn.attr('method'),
            url: btn.attr('action'),
            dataType: 'json',
            success: function(resp){
                if (resp.status){
                    if (btn.attr("needrefresh") == 'true') location.reload();
                }
            }
        });
    });

    // home map click action
    $("g.region").click(function(e){
        var region = $(this);

        if(region.attr('from') == 'investasi'){
            window.location.href = '/pi/'+region.attr('post-name');
        }
        else{
            window.location.href = '/p/'+region.attr('post-name');
        }

    });

    // general ajax form submission
    $("form.ajax").submit(function(e){
        var form = $(this);
        e.preventDefault();
        form.find('.alert').addClass('hide');

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            dataType: 'json',
            success: function(resp){
                if (resp.status){
                    form.find('.alert-placeholder').append("<div class='alert alert-success alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button> Berhasil</div>");
                    form[0].reset();
                    if (form.attr("needrefresh") == 'true') location.reload();
                }else{
                    form.find('.alert-placeholder').append("<div class='alert alert-danger alert-dismissible fade in' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button> "+resp.msg+"</div>");
                }
                setTimeout(function(){
                    form.find('.alert').remove();
                }, 5000);
            },
                error: function() {

                }
        });
    });

    // handles the carousel thumbnails
    $('[id^=selector-gallery-carousel-]').click( function(){
        var id_selector = $(this).attr("id");
        var id = $(this).attr("slide-number");
        var id_carousel = $(this).attr("carousel-id");
        id = parseInt(id);
        $('#'+id_carousel).carousel(id);
        $('[id^=selector-gallery-carousel-]').removeClass('selected');
        $(this).addClass('selected');
    });

    // when the carousel slides, auto update
    $('.carousel-gallery').on('slid.bs.carousel', function (e) {
        var id_carousel = $(this).attr("id");
        var id = $(this).find('.item.active').attr("slide-number");
        $('[id^=selector-'+id_carousel+'-]').removeClass('selected');
        $('#selector-'+id_carousel+'-'+id).addClass('selected');
    });

    function formatRupiah(bilangan)
    {
        var rev     = parseInt(bilangan, 10).toString().split('').reverse().join('');
		var rev2    = '';
		for(var i = 0; i < rev.length; i++){
			rev2  += rev[i];
			if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
				rev2 += '.';
			}
		}
		return rev2.split('').reverse().join('');
    }

    var now = new Date();
    var arrayMonth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV', 'OCT', 'DES'];
    $.ajax({
        type : 'GET',
        url: '/api/investasi/portfolio',
        dataType: 'json',
        success: function(resp){            
            var counter = 0;
            var content_event='';
            var pdf_file='';
            $.each(resp.data[0].children, function(i, el){
                $.each(el.posts, function(i2, el2){
                    if (el2.post_type=="presentasi") {
                        var date = '';
                        date = new Date(el2.post_date);                        
                        pdf_file = (lang=='english')?el2.postmeta.pdfportfolio_en:el2.postmeta.pdfportfolio_id;
                        title = (lang=='english')?el2.post_title_en:el2.post_title_id;
                        $('<div class="item"><a target="_blank" href="/download_pdf/'+pdf_file+'"><img src="/assets/images/uploads/'+el2.postmeta.banner+'"></a><div class="carousel-caption"></div>   </div>').appendTo('#event-carousel .carousel-inner');
                        $('<li data-target="#event-carousel" data-slide-to="'+counter+'"></li>').appendTo('#event-carousel .carousel-indicators');
                        content_event += '<div class="row no-gutter">';
                            content_event += '<div class="col-xs-2 no-gutter">';
                                content_event += '<div class="date-event">';
                                    content_event +=  '<h3 class="tanggal"><b>'+("0" + date.getDate()).slice(-2)+'<b></h3>';
                                    content_event +=  '<p class="tahun"><b>'+arrayMonth[date.getMonth()]+'</b></p>';
                                    content_event +=  '<p class="tahun">'+date.getFullYear()+'</p>';
                                content_event += '</div>';
                            content_event += '</div>';
                            content_event += '<div class="col-xs-10 no-gutter">';
                                content_event += '<div class="detail-date-event">';
                                    content_event += '<h5 class="judul-event"><b><a target="_blank" href="/download_pdf/'+pdf_file+'">'+title+'</a></b></h5>';
                                    // content_event += '<p><b>';
                                    // if (item.lokasi) content_event += item.lokasi;
                                    // content_event += '</b></p>';
                                content_event += '</div>';
                            content_event += '</div>';
                        content_event += '</div>';
                        counter++;
                        if(counter>=3) return false;
                    }
                });
            });
            if (counter == 0){
                $("#event-carousel").hide();
            }else{
                $('#event-carousel .item').first().addClass('active');
                $('#event-carousel .carousel-indicators > li').first().addClass('active');
                $('#event-carousel').carousel();
            }

            $('#another-event').html(content_event);
        }
        // type: 'GET',
//         //data: {month: (now.getMonth() + 1), year: (now.getFullYear())},
//         url: '/home/get_events',
//         dataType: 'json',
        // success: function(data){
//             var events = [];
//             var nearbyEvent;
//             var nearbyEventDate = now;
//             var nearbyEventOnThisDay = false;
//             var first = true;
//             var counter = 0;
//             var content_event = "";            
//             $.each(data.eventsData, function(key, item){
//                 // var event = {title: item.post_title_id, start: item.meta_value, img: item.postmeta.banner, post_name: item.post_name, url: '/p/'+item.post_name};

//                 var date = '';
//                 date = new Date(item.date_event_start);
//                 console.log(date.getTime());
//                 console.log(now.getTime());
//                 if(counter < 3){
//                     if(date.getTime() >= now.getTime()){                        
//                         $('<div class="item"><a href="/e/'+item.post_name+'"><img src="/assets/images/uploads/'+item.banner+'"></a><div class="carousel-caption"></div>   </div>').appendTo('#event-carousel .carousel-inner');
//                         $('<li data-target="#event-carousel" data-slide-to="'+counter+'"></li>').appendTo('#event-carousel .carousel-indicators');
//                         content_event += '<div class="row no-gutter">';
//                             content_event += '<div class="col-xs-2 no-gutter">';
//                                 content_event += '<div class="date-event">';
//                                     content_event +=  '<h3 class="tanggal"><b>'+("0" + date.getDate()).slice(-2)+'<b></h3>';
//                                     content_event +=  '<p class="tahun"><b>'+arrayMonth[date.getMonth()]+'</b></p>';
//                                     content_event +=  '<p class="tahun">'+date.getFullYear()+'</p>';
//                                 content_event += '</div>';
//                             content_event += '</div>';
//                             content_event += '<div class="col-xs-10 no-gutter">';
//                                 content_event += '<div class="detail-date-event">';
//                                     content_event += '<h5 class="judul-event"><b><a href="/e/'+item.post_name+'">'+item.post_title_en+'</a></b></h5>';
//                                     content_event += '<p><b>';
//                                     if (item.lokasi) content_event += item.lokasi;
//                                     content_event += '</b></p>';
//                                 content_event += '</div>';
//                             content_event += '</div>';
//                         content_event += '</div>';

//                         counter++;
//                     } else {
//                         var date_end = new Date(item.date_event_end);
//                         if(date_end.getTime() >= now.getTime()){
//                             $('<div class="item"><a href="/e/'+item.post_name+'"><img src="/assets/images/uploads/'+item.banner+'"></a><div class="carousel-caption"></div>   </div>').appendTo('#event-carousel .carousel-inner');
//                             $('<li data-target="#event-carousel" data-slide-to="'+counter+'"></li>').appendTo('#event-carousel .carousel-indicators');

//                             content_event += '<div class="row no-gutter">';
//                                 content_event += '<div class="col-xs-2 no-gutter">';
//                                     content_event += '<div class="date-event">';
//                                         content_event +=  '<h3 class="tanggal"><b>'+date.getDate()+'<b></h3>';
//                                         content_event +=  '<p class="tahun"><b>'+arrayMonth[date.getMonth()]+'</b></p>';
//                                         content_event +=  '<p class="tahun">'+date.getFullYear()+'</p>';
//                                     content_event += '</div>';
//                                 content_event += '</div>';
//                                 content_event += '<div class="col-xs-10 no-gutter">';
//                                     content_event += '<div class="detail-date-event">';
//                                         content_event += '<h5 class="judul-event"><b><a href="/e/'+item.post_name+'">'+item.post_title_en+'</a></b></h5>';
//                                         content_event += '<p><b>';
//                                         if (item.lokasi) content_event += item.lokasi;
//                                         content_event += '</b></p>';
//                                     content_event += '</div>';
//                                 content_event += '</div>';
//                             content_event += '</div>';
//                             counter++;
//                         }
//                     }
//                 }

//                 // events.push(event);
//             });

//             if (counter == 0){
//                 $("#event-carousel").hide();
//             }else{
//                 $('#event-carousel .item').first().addClass('active');
//                 $('#event-carousel .carousel-indicators > li').first().addClass('active');
//                 $('#event-carousel').carousel();
//             }

//             $('#another-event').html(content_event);
// // -------------------------------------------------------------------------------
//             // $('#calendar').fullCalendar({
//             //     defaultDate: now,
//             //     editable: false,
//             //     height: 450,
//             //     header: {
//             //         left: 'prev',
//             //         center: 'title',
//             //         right: 'next'
//             //     },
//             //     events: events,
//             //     eventClick: function(event){
//             //         //window.open("/p/"+event.post_name, "_self");
//             //         //location.href = "/p/"+event.post_name;
//             //         //return false;
//             //     }
//             // });
// // -----------------------------------------------------------------------------------
//         }
    });

    function updateSize() {
        // var winWidth  = $(window).width(),           // Ambil data lebar layar
        //     winHeight = $(window).height(),          // Ambil data tinggi layar
        //     wrapSum   = $('.box').siblings().length; // Hitung semua elemen .box (hasilnya: wrapSum=6)

        // // Set ukuran .box agar sama dengan ukuran layar
        // $('.box').css({
        //     width:winWidth,
        //     height:557
        // });

        // $('#wrapper-slider').css({
        //     width:winWidth,
        //     height: 557
        // });

        // $('#slider_carousel').css({
        //     height: 557
        // });

        // $('#myCarousel').css({
        //     height: 557
        // });
    }

    var data_tourism = [];
    var lang = "";
    function get_data_tourism(){
        $.ajax({
            url: '/pariwisata/get_data_tourism',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                if(response.status == true){
                    data_tourism = response.data_tourism;
                    lang = response.lang;
                    var content_post = "";
                    $.each(response.data_tourism, function(key, value){
                        var img = "";
                        if(typeof value.postmeta.banner === 'undefined'){
                            img = "https://dummyimage.com/200x200/000/fff";
                        }
                        else{
                            img = "/assets/images/uploads/" + value.postmeta.banner;
                        }

                        if(lang == 'english'){
                            var title = value.post_title_en;
                        }
                        else{
                            var title = value.post_title_id;
                        }

                        content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                            content_post += "<div class='card-tourism'>";
                                content_post+= "<a href='/p/"+value.post_name+"'>";
                                    content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                                    content_post += "<div class='card-body'>";
                                        content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                                    content_post +=    "</div>";
                                content_post +=      "</a>";
                            content_post +=  "</div>";
                        content_post +=  "</div>";
                    });

                    $('#content_pariwisata').html(content_post);
                }
            }
        });
    }

    function get_data_trade(){
        $.ajax({
            url: '/perdagangan/get_data_trade',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                if(response.status == true){
                    data_tourism = response.data_trade;
                    lang = response.lang;
                    var content_post = "";
                    $.each(response.data_trade, function(key, value){
                        var img = "";
                        if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                            img = "https://dummyimage.com/200x200/000/fff";
                        }
                        else{
                            img = "/assets/images/uploads/" + value.postmeta.banner;
                        }

                        if(lang == 'english'){
                            var title = value.post_title_en;
                        }
                        else{
                            var title = value.post_title_id;
                        }

                        content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                            content_post += "<div class='card-commerce'>";
                                content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                                    content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                                    content_post += "<div class='card-body'>";
                                        content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                                    content_post +=    "</div>";
                                content_post +=      "</a>";
                            content_post +=  "</div>";
                        content_post +=  "</div>";
                    });

                    $('#content_pariwisata').html(content_post);
                }
            }
        });
    }

    $('.search').on('input', function(){
        var content_post = "";
        var post_count = 0;
        var search = $(this).val();
        $.each(data_tourism, function(key, value){
            var post_title = (lang == 'english') ? value.post_title_en.toLowerCase() : value.post_title_id.toLowerCase();
            if(post_title.indexOf(search.toLowerCase()) > -1){
                    var img = "";
                    if(typeof value.postmeta.banner === 'undefined'){
                        img = "https://dummyimage.com/200x200/000/fff";
                    }
                    else{
                        img = "/assets/images/uploads/" + value.postmeta.banner;
                    }

                    if(lang == 'english'){
                        var title = value.post_title_en;
                    }
                    else{
                        var title = value.post_title_id;
                    }
                    content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                        content_post += "<div class='card-tourism'>";
                            content_post+= "<a href='/p/"+value.post_name+"'>";
                                content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                                content_post += "<div class='card-body'>";
                                    content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                                content_post +=    "</div>";
                            content_post +=      "</a>";
                        content_post +=  "</div>";
                    content_post +=  "</div>";
                    post_count++;
                }
                $('#content_pariwisata').html(content_post);
        });
        if (post_count == 0) {
            if (lang == 'english') {
                var not_found_title = 'Search not found.';
            } else {
                var not_found_title = 'Pencarian tidak ditemukan.';
            }
            content_post += "<div class='card-not-found'>";
                content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
            content_post += "</div>"

            $('#content_pariwisata').html(content_post);
        }
    });

    $('.search-trade').on('input', function(){
        var content_post = "";
        var post_count = 0;
        var search = $(this).val();
        $.each(data_tourism, function(key, value){
            var post_title = (lang == 'english') ? value.post_title_en.toLowerCase() : value.post_title_id.toLowerCase();
            if(post_title.indexOf(search.toLowerCase()) > -1){
                var img = "";
                if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                    img = "https://dummyimage.com/200x200/000/fff";
                }
                else{
                    img = "/assets/images/uploads/" + value.postmeta.banner;
                }

                if(lang == 'english'){
                    var title = value.post_title_en;
                }
                else{
                    var title = value.post_title_id;
                }
                content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                    content_post += "<div class='card-commerce'>";
                        content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                            content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                            content_post += "<div class='card-body'>";
                                content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                            content_post +=    "</div>";
                        content_post +=      "</a>";
                    content_post +=  "</div>";
                content_post +=  "</div>";
                post_count++;
            }
            $('#content_pariwisata').html(content_post);
        });

        if (post_count == 0) {
            if (lang == 'english') {
                var not_found_title = 'Search not found.';
            } else {
                var not_found_title = 'Pencarian tidak ditemukan.';
            }
            content_post += "<div class='card-not-found'>";
                content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
            content_post += "</div>"

            $('#content_pariwisata').html(content_post);
        }

    });

    $('.cari').on('click', function(){
        if ($('#search_pc').hasClass('active')) {
            $('#search_pc').removeClass('active');
        }else{
            $('#search_pc').addClass('active');
        }
    });

    var term = [];
    $('.form-check-input').click(function(){
        term = [];
        var terms = document.getElementsByName('check_term');
        for(var i = 0; i < $('.form-check-input').length; i++){
            if(terms[i].checked){
                term.push(terms[i].value);
            }
        }

        var content_post = "";
        if(term.length > 0){
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en : value.post_title_id;
                if($.inArray(value.term_id, term) > -1){
                    var img = "";
                    if(typeof value.postmeta.banner === 'undefined'){
                        img = "https://dummyimage.com/200x200/000/fff";
                    }
                    else{
                        img = "/assets/images/uploads/" + value.postmeta.banner;
                    }

                    content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                        content_post += "<div class='card-tourism'>";
                            content_post+= "<a href='/p/"+value.post_name+"'>";
                                content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                                content_post += "<div class='card-body'>";
                                    content_post +=  "<h5 class='card-title'>"+post_title+"</h5>" ;
                                content_post +=    "</div>";
                            content_post +=      "</a>";
                        content_post +=  "</div>";
                    content_post +=  "</div>";
                }
            });

            $('#content_pariwisata').html(content_post);
        }
        else{
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en : value.post_title_id;

                var img = "";
                if(typeof value.postmeta.banner === 'undefined'){
                    img = "https://dummyimage.com/200x200/000/fff";
                }
                else{
                    img = "/assets/images/uploads/" + value.postmeta.banner;
                }

                content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                    content_post += "<div class='card-tourism'>";
                        content_post+= "<a href='/p/"+value.post_name+"'>";
                            content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                            content_post += "<div class='card-body'>";
                                content_post +=  "<h5 class='card-title'>"+post_title+"</h5>" ;
                            content_post +=    "</div>";
                        content_post +=      "</a>";
                    content_post +=  "</div>";
                content_post +=  "</div>";
            });

            $('#content_pariwisata').html(content_post);
        }
    });

    $('.form-check-input-trade').click(function(){
        term = [];
        var terms = document.getElementsByName('check_term');
        for(var i = 0; i < $('.form-check-input-trade').length; i++){
            if(terms[i].checked){
                term.push(terms[i].value);
            }
        }

        var content_post = "";
        if(term.length > 0){
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en.toLowerCase() : value.post_title_id.toLowerCase();
                if($.inArray(value.term_id, term) > -1){
                    var img = "";
                    if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                        img = "https://dummyimage.com/200x200/000/fff";
                    }
                    else{
                        img = "/assets/images/uploads/" + value.postmeta.banner;
                    }

                    if(lang == 'english'){
                        var title = value.post_title_en;
                    }
                    else{
                        var title = value.post_title_id;
                    }

                    content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                        content_post += "<div class='card-commerce'>";
                            content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                                content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                                content_post += "<div class='card-body'>";
                                    content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                                content_post +=    "</div>";
                            content_post +=      "</a>";
                        content_post +=  "</div>";
                    content_post +=  "</div>";
                }
            });

            $('#content_pariwisata').html(content_post);
        }
        else{
            $.each(data_tourism, function(key, value){
                var img = "";
                if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                    img = "https://dummyimage.com/200x200/000/fff";
                }
                else{
                    img = "/assets/images/uploads/" + value.postmeta.banner;
                }

                if(lang == 'english'){
                    var title = value.post_title_en;
                }
                else{
                    var title = value.post_title_id;
                }

                content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                    content_post += "<div class='card-commerce'>";
                        content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                            content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                            content_post += "<div class='card-body'>";
                                content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                            content_post +=    "</div>";
                        content_post +=      "</a>";
                    content_post +=  "</div>";
                content_post +=  "</div>";
            });

            $('#content_pariwisata').html(content_post);
        }
    });

    $('#regional').change(function(){
        var content_post = "";
        var post_count = 0;
        if($(this).val() != null && $(this).val() != ""){
            var region = $(this).val();
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en : value.post_title_id;
                if(value.postrelate.post_id_relate == region){

                    var img = "";
                    if(typeof value.postmeta.banner === 'undefined'){
                        img = "https://dummyimage.com/200x200/000/fff";
                    }
                    else{
                        img = "/assets/images/uploads/" + value.postmeta.banner;
                    }

                    content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                        content_post += "<div class='card-tourism'>";
                            content_post+= "<a href='/p/"+value.post_name+"'>";
                                content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                                content_post += "<div class='card-body'>";
                                    content_post +=  "<h5 class='card-title'>"+post_title+"</h5>" ;
                                content_post +=    "</div>";
                            content_post +=      "</a>";
                        content_post +=  "</div>";
                    content_post +=  "</div>";
                    post_count++;
                }
            });

            if (post_count == 0) {
                if (lang == 'english') {
                    var not_found_title = 'Search not found.';
                } else {
                    var not_found_title = 'Pencarian tidak ditemukan.';
                }
                content_post += "<div class='card-not-found'>";
                    content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
                content_post += "</div>"

                $('#content_pariwisata').html(content_post);
            }
        }
        else{
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en.toLowerCase() : value.post_title_id.toLowerCase();

                var img = "";
                if(typeof value.postmeta.banner === 'undefined'){
                    img = "https://dummyimage.com/200x200/000/fff";
                }
                else{
                    img = "/assets/images/uploads/" + value.postmeta.banner;
                }

                content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                    content_post += "<div class='card-tourism'>";
                        content_post+= "<a href='/p/"+value.post_name+"'>";
                            content_post += "<img class='card-img-top item-card-img img-responsive' src='" + img +" '>";
                            content_post += "<div class='card-body'>";
                                content_post +=  "<h5 class='card-title'>"+post_title+"</h5>" ;
                            content_post +=    "</div>";
                        content_post +=      "</a>";
                    content_post +=  "</div>";
                content_post +=  "</div>";
                post_count++;
            });
            if (post_count == 0) {
                if (lang == 'english') {
                    var not_found_title = 'Search not found.';
                } else {
                    var not_found_title = 'Pencarian tidak ditemukan.';
                }
                content_post += "<div class='card-not-found'>";
                    content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
                content_post += "</div>"

                $('#content_pariwisata').html(content_post);
            }
        }

        $('#content_pariwisata').html(content_post);
    });

    $('#regional-trade').change(function(){
        var content_post = "";
        var post_count = 0;
        if($(this).val() != null && $(this).val() != ""){
            var region = $(this).val();
            $.each(data_tourism, function(key, value){
                var post_title = (lang == 'english') ? value.post_title_en.toLowerCase() : value.post_title_id.toLowerCase();
                if(value.postrelate.post_id_relate == region){
                    var img = "";
                    if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                        img = "https://dummyimage.com/200x200/000/fff";
                    }
                    else{
                        img = "/assets/images/uploads/" + value.postmeta.banner;
                    }

                    if(lang == 'english'){
                        var title = value.post_title_en;
                    }
                    else{
                        var title = value.post_title_id;
                    }

                    content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                        content_post += "<div class='card-commerce'>";
                            content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                                content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                                content_post += "<div class='card-body'>";
                                    content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                                content_post +=    "</div>";
                            content_post +=      "</a>";
                        content_post +=  "</div>";
                    content_post +=  "</div>";
                    post_count++;
                }
            });
            if (post_count == 0) {
                if (lang == 'english') {
                    var not_found_title = 'Search not found.';
                } else {
                    var not_found_title = 'Pencarian tidak ditemukan.';
                }
                content_post += "<div class='card-not-found'>";
                    content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
                content_post += "</div>"

                $('#content_pariwisata').html(content_post);
            }
        }
        else{
            $.each(data_tourism, function(key, value){
                var img = "";
                if(typeof value.postmeta.banner === 'undefined' || value.postmeta.banner == null){
                    img = "https://dummyimage.com/200x200/000/fff";
                }
                else{
                    img = "/assets/images/uploads/" + value.postmeta.banner;
                }

                if(lang == 'english'){
                    var title = value.post_title_en;
                }
                else{
                    var title = value.post_title_id;
                }

                content_post += "<div class='col-md-3 col-xs-6 item-space'>";
                    content_post += "<div class='card-commerce'>";
                        content_post+= "<a href='/perdagangan/perdagangan_detail/"+value.id+"'>";
                            content_post += "<img class='commerce-img-top img-responsive' src='" + img +" '>";
                            content_post += "<div class='card-body'>";
                                content_post +=  "<h5 class='card-title'>"+title+"</h5>" ;
                            content_post +=    "</div>";
                        content_post +=      "</a>";
                    content_post +=  "</div>";
                content_post +=  "</div>";
                post_count++;
            });

            if (post_count == 0) {
                if (lang == 'english') {
                    var not_found_title = 'Search not found.';
                } else {
                    var not_found_title = 'Pencarian tidak ditemukan.';
                }
                content_post += "<div class='card-not-found'>";
                    content_post += "<p class='card-not-found-title'>" + not_found_title + "</p>";
                content_post += "</div>"

                $('#content_pariwisata').html(content_post);
            }
        }


        $('#content_pariwisata').html(content_post);
    });


    function get_data_realisasi_pma(){
        var pmaChart = Highcharts.chart('realisasi_pma', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Realisasi PMA'
            },
            xAxis: {
                categories: [
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Realisasi PMA (Juta US$)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} Juta US$</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Triwulan I',
                data: [25.3, 92.7, 241.4, 128.0, 94.40, 212.63, 518.92]

            }, {
                name: 'Triwulan II',
                data: [47.0, 51.5, 91.1, 170.9, 403.90, 193.91, 431.99]

            }, {
                name: 'Triwulan III',
                data: [40.1, 37.8, 56.9, 45.57, 115.50, 396.50]

            }, {
                name: 'Triwulan IV',
                data: [62.6, 59.6, 45.57, 118.86, 237.00, 227.80]

            }]
        });
        getData("PMA", pmaChart);
    }

    function get_data_realisasi_pmdn(){
        var pmdnChart = Highcharts.chart('realisasi_pmdn', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Realisasi PMDN'
            },
            xAxis: {
                categories: [
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Realisasi PMDN (Miliar Rp)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} Miliar Rp</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Triwulan I',
                data: [381.7, 1012.7, 8088.3, 4399.7, 5276.4, 4973.7]

            }, {
                name: 'Triwulan II',
                data: [919.4, 595.2, 4378.5, 2819.8, 1583.1, 2816.5]

            }, {
                name: 'Triwulan III',
                data: [3340.4, 9747.8, 2535.3, 3103.1, 3038.8]

            }, {
                name: 'Triwulan IV',
                data: [1155.7, 1237.9, 3376.2, 5088.1, 14172.0]

            }]
        });
        getData("PMDN", pmdnChart);
    }



    function getData(cat="PMA", chart){
      var url = baseUrl+'api/invest_realization/get?order_by=year,asc&cat='+cat;

       $.ajax({
          type: "GET",
          url: url,
          beforeSend: function (e){

            // $("#loadingModal").modal({backdrop: 'static', keyboard: false});
          },
          success: function(data){
            updateChart(data.data, chart);
            // alert("sukses");
            console.log(data);
            // $("#loadingModal").modal({backdrop: 'static', keyboard: false});
          },
          error: function(xhr, ajaxOptions, thrownError){
            alert("error");
            // $("#loadingModal").modal('hide');
            console.log(xhr.responseText);
            console.log(ajaxOptions);
            console.log(thrownError);
            swal({
              title: "Kesalahan internal!",
              icon: "error",
              button: {
                text: "OK",
              },
            });
          },
       });

    }


    function updateChart(list, chart){
        var labels = [];
        var triwulan_data_sets = {};
        $(list).each(function(index) {
          labels.push(list[index].year);
          var key_val_arr = list[index].keyVal.split("|");
          var triwulan_keys = key_val_arr[0].split(",");
          var triwulan_vals = key_val_arr[1].split(",");

          $(triwulan_keys).each(function(i){
            if(!triwulan_data_sets['Triwulan '+triwulan_keys[i]]){
              triwulan_data_sets['Triwulan '+triwulan_keys[i]] = [triwulan_vals[i]];
            }else{
              triwulan_data_sets['Triwulan '+triwulan_keys[i]].push(triwulan_vals[i]);
            }
          });
        });

        series = [];

        $.each(triwulan_data_sets, function(k, v) {
          series.push({
            name: k,
            data: v.map(Number)
          });
        });

        chart.update({
            series: series,
            labels: labels
        });
        // chart.labels = labels;
        // chart.series = series;
        // chart.update();
    }



    function initial_page(){
        var path = window.location.pathname.split("/");

        if(path[1] == 'investasi'){
            if(sessionStorage.length > 0){
                change_page_invest(sessionStorage.param);
            }
            else{
                change_page_invest('why-invest');
            }
        }
        else{
            change_page_invest('why-invest');

        }

        if(path[1] == 'pariwisata'){
            get_data_tourism();
        }
        else if(path[1] == 'perdagangan'){
            get_data_trade();
        }
        else if(path[1] == 'home' && path[2] == 'investment_realization'){
            get_data_realisasi_pma();
            get_data_realisasi_pmdn()
        }

        change_page_how_to_invest('step-to-invest');
        change_page_invest_portfolio('investment-portfolio-industry');
        change_page_invest_portfolio_detail('investasi-pariwisata');
        change_page_invest_portfolio_potential_detail('investasi-pariwisata');
        change_page_facility_infrastructure('industrial-area');
        change_page_infrastructure_detail('international-airport');
        change_page_faq('umum');
        change_tab('product');
        change_page_aboutus('about-us');
    }

});

