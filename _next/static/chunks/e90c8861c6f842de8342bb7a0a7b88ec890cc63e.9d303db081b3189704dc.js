(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20ht":function(e,t,r){"use strict";t.a={baseBlogUrl:"https://public-api.wordpress.com/rest/v1/sites/namccreativelights.wordpress.com/posts",stripHTML:function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},changeFormat:function(e){var t=new Date(e);return"".concat(["January","Febraury","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())},getPostPath:function(e,t){return"/".concat(e,"/").concat(t).toLowerCase().replace(/[^a-z0-9 /]/gi,"").replace(/ /gi,"-")},refreshDarkModeSettings:function(){if("undefined"!==typeof localStorage){var e="true"===localStorage.getItem("isDarkMode"),t=document.querySelector("body");e?(t.style.setProperty("--primary-background","#212026"),t.style.setProperty("--text-color","#fff")):(t.style.setProperty("--primary-background","#fff"),t.style.setProperty("--text-color","#000"))}}}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var a,l=[],u=!1,d=-1;function h(){u&&a&&(u=!1,a.length?l=a.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=c(h);u=!0;for(var t=l.length;t;){for(a=l,l=[];++d<t;)a&&a[d].run();d=-1,t=l.length}a=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},FBiN:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr"),i=r("MX0m"),s=r.n(i);r("q1tI");function o(e){var t=e.category;return Object(n.jsxs)("div",{className:"jsx-3353257060 tooltip-container",children:[Object(n.jsx)("span",{className:"jsx-3353257060",children:t}),Object(n.jsx)(s.a,{id:"3353257060",children:[".tooltip-container.jsx-3353257060{background-color:var(--secondary-color);width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:1.5px .7rem;font-size:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;border-radius:4rem;margin:2px 4px 2px 0;}"]})]})}function c(e){var t=e.categories;return Object(n.jsxs)("div",{className:"jsx-1443269871",children:["object"===typeof t&&Object(n.jsx)("div",{className:"jsx-1443269871 categories-container",children:Object.keys(t).map((function(e,t){return Object(n.jsx)(o,{category:e},t)}))}),Object(n.jsx)(s.a,{id:"1443269871",children:[".categories-container.jsx-1443269871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]})]})}},Grb9:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("nKUr");r("q1tI");function i(e){var t=e.tags,r=e.bold;return Object(n.jsx)("div",{children:"object"===typeof t&&Object.keys(t).length>0&&Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:r&&"bold",children:"Tags:"})," ",Object.keys(t).join(", ")]})})}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},TRNA:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("nKUr"),i=r("q1tI"),s=r("20ht");function o(){var e="isDarkMode",t=function(){if("undefined"!==typeof localStorage)return"true"===localStorage.getItem(e)},r=Object(i.useState)(t()),o=r[0],c=r[1];return Object(n.jsx)("div",{children:Object(n.jsx)("i",{title:"Turn "+(o?"OFF":"ON")+" Dark Mode",onClick:function(){var r,n=t();r=!n,"undefined"!==typeof localStorage&&localStorage.setItem(e,"true"===String(r)),c(!n),s.a.refreshDarkModeSettings()},className:"material-icons cursor-pointer",children:o?"dark_mode":"light_mode"})})}},Y038:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr"),i=(r("q1tI"),r("YFqc")),s=r.n(i),o=r("TRNA");function c(){return Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("div",{className:"brand-logo",children:Object(n.jsx)(s.a,{href:"/",children:Object(n.jsx)("img",{alt:"#nam_c logo",src:"https://mohaimin95.github.io/blog/namc.png"})})}),Object(n.jsx)("div",{className:"nav-menu",children:Object(n.jsxs)("ul",{className:"nav-list",children:[Object(n.jsx)("li",{className:"nav-list-item",children:Object(n.jsx)(o.a,{})}),Object(n.jsx)("li",{className:"nav-list-item",children:Object(n.jsxs)("a",{href:"https://mohaimin95.github.io/",target:"_blank",children:["Profile\xa0",Object(n.jsx)("i",{className:"material-icons",children:"trending_flat"})]})})]})})]})})}},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,c=t.optimizeForSpeed,a=void 0===c?n:c,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,c,a=e.prototype;return a.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(c){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),c&&r(t,c),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),i=r("284h");t.__esModule=!0,t.default=void 0;var s=i(r("q1tI")),o=r("elyg"),c=r("nOHt"),a=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),i=r&&r.pathname||"/",d=s.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),r=n(t,2),s=r[0],c=r[1];return{href:s,as:e.as?(0,o.resolveHref)(i,e.as):c||s}}),[i,e.href,e.as]),h=d.href,f=d.as,p=e.children,m=e.replace,v=e.shallow,_=e.scroll,y=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=s.Children.only(p),g=b&&"object"===typeof b&&b.ref,j=(0,a.useIntersection)({rootMargin:"200px"}),S=n(j,2),x=S[0],w=S[1],O=s.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,s.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(h),n="undefined"!==typeof y?y:r&&r.locale,i=l[h+"%"+f+(n?"%"+n:"")];e&&!i&&u(r,h,f,{locale:n})}),[f,h,w,y,t,r]);var k={ref:O,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,s,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[i?"replace":"push"](r,n,{shallow:s,locale:a,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,h,f,m,v,_,y)},onMouseEnter:function(e){(0,o.isLocalURL)(h)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(r,h,f,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof y?y:r&&r.locale,C=r&&r.isLocaleDomain&&(0,o.getDomainLocale)(f,R,r&&r.locales,r&&r.domainLocales);k.href=C||(0,o.addBasePath)((0,o.addLocale)(f,R,r&&r.defaultLocale))}return s.default.cloneElement(b,k)};t.default=d},g4pe:function(e,t,r){e.exports=r("8Kt/")},naWs:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("nKUr");r("q1tI");function i(){return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("div",{className:"end-credit",children:["Made with\xa0",Object(n.jsx)("i",{title:"love",className:"material-icons heart",children:"favorite"}),"\xa0by\xa0",Object(n.jsx)("abbr",{title:"N Abdul Mohaimin Creations",children:"#nam_c"})]}),Object(n.jsxs)("div",{className:"socials",children:[Object(n.jsx)("div",{className:"social-item",children:Object(n.jsx)("a",{href:"https://www.facebook.com/mohaimin95",target:"_blank",children:Object(n.jsx)("i",{className:"fa fa-facebook"})})}),Object(n.jsx)("div",{className:"social-item",children:Object(n.jsx)("a",{href:"https://www.instagram.com/mohaimin95",target:"_blank",children:Object(n.jsx)("i",{className:"fa fa-instagram"})})}),Object(n.jsx)("div",{className:"social-item",children:Object(n.jsx)("a",{href:"https://twitter.com/namohaimin",target:"_blank",children:Object(n.jsx)("i",{className:"fa fa-twitter"})})}),Object(n.jsx)("div",{className:"social-item",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/mohaimin95/",target:"_blank",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})})})]})]})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,a=(0,i.useRef)(),l=(0,i.useState)(!1),u=n(l,2),d=u[0],h=u[1],f=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),r||d||e&&e.tagName&&(a.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,s=n.observer,o=n.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),c.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,d]);return(0,i.useEffect)((function(){if(!o&&!d){var e=(0,s.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[d]),[f,d]};var i=r("q1tI"),s=r("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map}}]);