(this.webpackJsonpsoftapps=this.webpackJsonpsoftapps||[]).push([[5],{125:function(e,t,n){e.exports={MainPage:"MainPage_MainPage__h_2AQ"}},126:function(e,t,n){e.exports={Home:"Home_Home__1X_ne",HomeWidth:"Home_HomeWidth__1lmw1",Left:"Home_Left__Jic4u",Right:"Home_Right__2Ebi6",LeftDiv:"Home_LeftDiv__3ytDD"}},127:function(e,t,n){e.exports={Home:"Services_Home__2O6ds",HomeWidth:"Services_HomeWidth__34Ot8",Left:"Services_Left__bVidG",Right:"Services_Right__ZkEoZ",LeftDiv:"Services_LeftDiv__Qe_QK"}},128:function(e,t,n){e.exports={Home:"About_Home__1_t7w",HomeWidth:"About_HomeWidth__DwBdG",Left:"About_Left___RV87",Right:"About_Right__1eyoB",LeftDiv:"About_LeftDiv__2_iiF"}},129:function(e,t,n){e.exports={Home:"Portfolio_Home__3digW",HomeWidth:"Portfolio_HomeWidth__Au3lZ",Left:"Portfolio_Left__1nVIm",Right:"Portfolio_Right__1hR1G",LeftDiv:"Portfolio_LeftDiv__21CPo"}},130:function(e,t,n){e.exports={Home:"Careers_Home__3lOlt",HomeWidth:"Careers_HomeWidth__2hHYG",Left:"Careers_Left__2e4Ks",Right:"Careers_Right__33XXa",LeftDiv:"Careers_LeftDiv__1WqoS"}},131:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(R){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof j?t:j,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return I()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function j(){}function g(){}function v(){}var x={};x[o]=function(){return this};var b=Object.getPrototypeOf,A=b&&b(b(H([])));A&&A!==n&&r.call(A,o)&&(x=A);var O=v.prototype=j.prototype=Object.create(x);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){function n(i,o,a,c){var s=u(e[i],e,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(h).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function H(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:t,done:!0}}return g.prototype=O.constructor=v,v.constructor=g,g.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},w(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new y(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(O),s(O,c,"Generator"),O[o]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=H,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return c.type="throw",c.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),B(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;B(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:H(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},132:function(e,t,n){e.exports={Home:"Contact_Home__20o3i",HomeWidth:"Contact_HomeWidth__3viiT",Left:"Contact_Left__1OiN_",Right:"Contact_Right__11Nve",LeftDiv:"Contact_LeftDiv__3Mt9d",Form:"Contact_Form__2PADO",FormElement:"Contact_FormElement__G9vQW"}},181:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),o=n.n(i),a=n(125),c=n.n(a),s=n(126),l=n.n(s),u=n.p+"static/media/Digital.e7e3b1be.png",h=function(e){return Object(r.jsx)("div",{id:"home",className:l.a.Home,children:Object(r.jsxs)("div",{className:l.a.HomeWidth,children:[Object(r.jsx)("div",{className:l.a.Left,children:Object(r.jsxs)("div",{className:l.a.LeftDiv,children:[Object(r.jsx)("h1",{children:"Digitalization"}),Object(r.jsx)("p",{children:"MAKE YOUR FUTURE DIGITAL"}),Object(r.jsx)("span",{children:"SoftApps.io is a Canadian-based sofware development company, with branches extended to the US and Pakistan. We are a complete cycle application development company."}),Object(r.jsx)("div",{style:{height:"90px"},children:Object(r.jsxs)("div",{style:{position:"relative",cursor:"pointer"},children:[Object(r.jsx)("a",{children:"Explore"}),Object(r.jsx)("img",{src:"data:image/png;base64,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"})]})})]})}),Object(r.jsx)("div",{className:l.a.Right,children:Object(r.jsx)("img",{src:u})})]})})},d=n(127),f=n.n(d),p=(n.p,function(e){return Object(r.jsx)("div",{id:"services",className:f.a.Home,children:Object(r.jsxs)("div",{className:f.a.HomeWidth,children:[Object(r.jsx)("div",{className:f.a.Left,children:Object(r.jsxs)("div",{className:f.a.LeftDiv,children:[Object(r.jsx)("p",{children:"Our"}),Object(r.jsx)("h1",{children:"SERVICES"}),Object(r.jsx)("span",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."}),Object(r.jsx)("a",{onClick:function(){return e.exploreFunctionHandler("services")},children:"Explore"})]})}),Object(r.jsx)("div",{className:f.a.Right})]})})}),m=n(128),j=n.n(m),g=n.p+"static/media/About.87a91f59.png",v=function(e){return Object(r.jsx)("div",{id:"about",className:j.a.Home,children:Object(r.jsxs)("div",{className:j.a.HomeWidth,children:[Object(r.jsx)("div",{className:j.a.Left,children:Object(r.jsxs)("div",{className:j.a.LeftDiv,children:[Object(r.jsx)("h1",{children:"ABOUT US"}),Object(r.jsx)("span",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."}),Object(r.jsx)("a",{onClick:function(){return e.exploreFunctionHandler("about")},children:"Explore"})]})}),Object(r.jsx)("div",{className:j.a.Right,children:Object(r.jsx)("img",{src:g})})]})})},x=n(129),b=n.n(x),A=n.p+"static/media/Portfolio.4a6165c6.png",O=function(e){return Object(r.jsx)("div",{id:"portfolio",className:b.a.Home,children:Object(r.jsxs)("div",{className:b.a.HomeWidth,children:[Object(r.jsx)("div",{className:b.a.Left,children:Object(r.jsxs)("div",{className:b.a.LeftDiv,children:[Object(r.jsx)("p",{children:"OUR"}),Object(r.jsx)("h1",{children:"PORTFOLIO"}),Object(r.jsx)("span",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."}),Object(r.jsx)("a",{onClick:function(){return e.exploreFunctionHandler("portfolio")},children:"Explore"})]})}),Object(r.jsx)("div",{className:b.a.Right,children:Object(r.jsx)("img",{src:A})})]})})},w=n(130),y=n.n(w),L=(n.p,function(e){var t=Object(r.jsxs)("div",{className:y.a.HomeWidth,children:[Object(r.jsx)("div",{className:y.a.Left,children:Object(r.jsxs)("div",{className:y.a.LeftDiv,children:[Object(r.jsx)("p",{children:"BUILD YOUR"}),Object(r.jsx)("h1",{children:"CAREER"}),Object(r.jsx)("span",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."}),Object(r.jsx)("a",{onClick:function(){return e.exploreFunctionHandler("career")},children:"Apply"})]})}),Object(r.jsx)("div",{className:y.a.Right})]});return Object(r.jsx)("div",{id:"careers",className:y.a.Home,children:t})}),E=n(88),B=n.n(E);function N(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){N(o,r,i,a,c,"next",e)}function c(e){N(o,r,i,a,c,"throw",e)}a(void 0)}))}}var I=n(132),R=n.n(I),_=n(18),F=function(e){var t=function(){var e=Object(i.useState)(!1),t=Object(_.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(),a=Object(_.a)(o,2),c=a[0],s=a[1],l=Object(i.useRef)([]),u=Object(i.useCallback)(function(){var e=H(B.a.mark((function e(t){var n,i,o,a,c,u,h=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:"GET",i=h.length>2&&void 0!==h[2]?h[2]:{},o=h.length>3&&void 0!==h[3]?h[3]:null,r(!0),a=new AbortController,l.current.push(a),e.prev=6,e.next=9,fetch(t,{method:n,body:o,headers:i,signal:a.signal});case 9:return c=e.sent,e.next=12,c.json();case 12:if(u=e.sent,l.current=l.current.filter((function(e){return e!==a})),c.ok){e.next=16;break}throw new Error(u.message);case 16:return r(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),r(!1),s(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){l.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:c,sendRequest:u,clearError:function(){s(null)},setIsLoading:r}}(),n=(t.isLoading,t.error),o=t.sendRequest,a=(t.clearError,function(){var e=H(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submitContactFormHandler","https://softapps.softapp.ga/user"),e.prev=1,e.next=4,o("".concat("https://softapps.softapp.ga/user","/check"));case 4:t=e.sent,console.log("responseData",t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}());return n&&console.log("error",n),Object(r.jsx)("div",{id:"contact",className:R.a.Home,children:Object(r.jsxs)("div",{className:R.a.HomeWidth,children:[Object(r.jsx)("div",{className:R.a.Left,children:Object(r.jsxs)("div",{className:R.a.LeftDiv,children:[Object(r.jsxs)("h1",{children:["Contact ",Object(r.jsx)("span",{style:{color:"black"},children:"Us!"})]}),Object(r.jsx)("p",{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."}),Object(r.jsxs)("div",{className:R.a.Form,children:[Object(r.jsx)("div",{className:R.a.FormElement,children:Object(r.jsx)("input",{placeholder:"Name"})}),Object(r.jsx)("div",{className:R.a.FormElement,children:Object(r.jsx)("input",{placeholder:"Email"})}),Object(r.jsx)("div",{className:R.a.FormElement,children:Object(r.jsx)("input",{placeholder:"Subject"})}),Object(r.jsx)("div",{className:R.a.FormElement,children:Object(r.jsx)("textarea",{placeholder:"Type Your Message"})}),Object(r.jsx)("a",{onClick:function(){return a()},children:"Submit"})]})]})}),Object(r.jsx)("div",{className:R.a.Right})]})})},D=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(8)]).then(n.bind(null,182))})),C=o.a.lazy((function(){return n.e(6).then(n.bind(null,180))})),S=o.a.lazy((function(){return n.e(9).then(n.bind(null,183))})),P=o.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,179))}));t.default=function(e){var t,n=e.exploreState,i=e.exploreFunctionHandler;return(document.scrollingElement||document.documentElement).addEventListener("wheel",(function(e){if(n)return e.deltaY<0?void window.scrollBy(0,-350):(window.scrollBy(0,350),void e.preventDefault());e.deltaY<0?!n&&window.scrollBy(-500,0):(!n&&window.scrollBy(500,0),e.preventDefault())})),n||(t=Object(r.jsxs)("div",{className:c.a.MainPage,children:[Object(r.jsx)(h,{exploreFunctionHandler:i}),Object(r.jsx)(p,{exploreFunctionHandler:i}),Object(r.jsx)(v,{exploreFunctionHandler:i}),Object(r.jsx)(O,{exploreFunctionHandler:i}),Object(r.jsx)(L,{exploreFunctionHandler:i}),Object(r.jsx)(F,{exploreFunctionHandler:i})]})),"portfolio"===n&&(t=Object(r.jsx)("div",{className:c.a.MainPage,children:Object(r.jsx)(D,{})})),"about"===n&&(t=Object(r.jsx)("div",{className:c.a.MainPage,children:Object(r.jsx)(C,{})})),"career"===n&&(t=Object(r.jsx)("div",{className:c.a.MainPage,children:Object(r.jsx)(S,{})})),"services"===n&&(t=Object(r.jsx)("div",{className:c.a.MainPage,children:Object(r.jsx)(P,{})})),t}},88:function(e,t,n){e.exports=n(131)}}]);
//# sourceMappingURL=5.3c2924ed.chunk.js.map