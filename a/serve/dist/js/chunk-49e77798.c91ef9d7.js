(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e77798"],{"4aa2":function(t,e,r){"use strict";r("db0e")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=q(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(N([])));b&&b!==r&&n.call(b,i)&&(w=b);var L=g.prototype=y.prototype=Object.create(w);function U(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function q(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return j()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=L.constructor=g,g.constructor=m,m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},U(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},U(L),c(L,s,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},db0e:function(t,e,r){},de4b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("h3",{staticClass:"positionTopLeft me-title"},[t._v("修改个人信息")]),r("div",{staticClass:"info-edit d-flex flex-column"},[r("div",{staticClass:"info-edit-item"},[r("div",{staticClass:"info-edit-item-label"},[t._v("修改头像")]),r("div",{staticClass:"info-edit-item-content"},[t.tyqUser&&t.tyqUser.avator?r("img",{attrs:{src:t.tyqUser.avator}}):t._e(),r("g-upload",{on:{"g-uploadList":t.handleGetUploadList}})],1)]),r("div",{staticClass:"info-edit-item"},[r("div",{staticClass:"info-edit-item-label"},[t._v("修改用户名")]),r("div",{staticClass:"info-edit-item-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tyqUser.username,expression:"tyqUser.username"}],staticClass:"me-input",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.tyqUser.username},on:{input:function(e){e.target.composing||t.$set(t.tyqUser,"username",e.target.value)}}})])]),r("div",{staticClass:"info-edit-item"},[r("div",{staticClass:"info-edit-item-label"},[t._v("个性标签")]),r("div",{staticClass:"info-edit-item-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tyqUser.tips,expression:"tyqUser.tips"}],staticClass:"me-input",attrs:{type:"text",placeholder:"请输入个性标签"},domProps:{value:t.tyqUser.tips},on:{input:function(e){e.target.composing||t.$set(t.tyqUser,"tips",e.target.value)}}})])]),r("div",{staticClass:"info-edit-item"},[r("div",{staticClass:"info-edit-item-label"},[t._v("邮箱")]),r("div",{staticClass:"info-edit-item-content"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tyqUser.email,expression:"tyqUser.email"}],staticClass:"me-input",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.tyqUser.email},on:{input:function(e){e.target.composing||t.$set(t.tyqUser,"email",e.target.value)}}})])]),r("div",{staticClass:"info-edit-item"},[r("button",{staticClass:"me-button pointSB",on:{click:t.handleClickEditUser}},[t._v("提交")])])])])},o=[];r("96cf"),r("d3b7");function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))}}var s=r("decf"),c=r("9c9e"),u={mixins:[c["a"]],components:{"g-upload":s["a"]},data:function(){return{}},methods:{handleGetUploadList:function(t){var e=this;console.log(t);var r=new FormData;r.append("file",t),console.log(r.get("file"),"----------"),e.$http.post("/upload",r).then((function(t){console.log(t.data.url),e.$set(e.tyqUser,"avator",t.data.url)}))},handleClickEditUser:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t,r.tyqUser.username){e.next=4;break}return r.$gMessage({title:"用户名不能为空!",duration:2e3,type:"error"}),e.abrupt("return",!1);case 4:return console.log(r.tyqUser),e.next=7,r.$http.post("/editUser",r.tyqUser);case 7:n=e.sent,1==n.data.affectedRows&&r.$http.get("/getUserById?userid="+r.tyqUser.userid).then((function(t){console.log(t),r.tyqUser=t.data[0],localStorage.setItem("tyqUser",JSON.stringify(t.data[0])),r.$parent.tyqUser=JSON.parse(localStorage.getItem("tyqUser"))}));case 9:case"end":return e.stop()}}),e)})))()}},created:function(){},mounted:function(){}},l=u,f=(r("4aa2"),r("2877")),h=Object(f["a"])(l,n,o,!1,null,"4418e7f0",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-49e77798.c91ef9d7.js.map