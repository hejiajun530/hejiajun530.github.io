(function(e){function n(n){for(var o,r,u=n[0],i=n[1],s=n[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==c[u]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac227":"2b58208e","chunk-2d0dee36":"4839d292","chunk-2d0df803":"e6c6a777","chunk-2d0e9357":"261c9ec3","chunk-2d2106b7":"1b376728","chunk-2d216d74":"5e90a680","chunk-2d22636c":"e16c9c1f","chunk-2d226768":"53c1216f","chunk-2d2297e5":"ab41e177","chunk-60acaae6":"2e17e7b2","chunk-61599bce":"3305996b","chunk-6186e15f":"51f24c27","chunk-eaa2bfd6":"548358db"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-60acaae6":1,"chunk-61599bce":1,"chunk-6186e15f":1,"chunk-eaa2bfd6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0ac227":"31d6cfe0","chunk-2d0dee36":"31d6cfe0","chunk-2d0df803":"31d6cfe0","chunk-2d0e9357":"31d6cfe0","chunk-2d2106b7":"31d6cfe0","chunk-2d216d74":"31d6cfe0","chunk-2d22636c":"31d6cfe0","chunk-2d226768":"31d6cfe0","chunk-2d2297e5":"31d6cfe0","chunk-60acaae6":"70a821e6","chunk-61599bce":"607d62cb","chunk-6186e15f":"fb2427a9","chunk-eaa2bfd6":"717bce41"}[e]+".css",c=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,t[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1239:function(e,n,t){},"40ed":function(e,n,t){"use strict";t("1239")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("a026"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"},on:{contextmenu:function(e){return e.preventDefault(),function(){return!1}()}}},[t("router-view"),t("div",{staticClass:"tyq-mask"}),e._m(0),t("div",{ref:"tyqBack",staticClass:"tyq-back d-flex jc-center ai-center pointSB",on:{mousedown:e.handleMouseDownBack,mousemove:e.handleMouseMoveBack,mouseup:e.handleMouseUpBack}},[e._v("Back")])],1)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tyq d-flex flex-column jc-center ai-center"},[t("div",{staticClass:"tyq-header"},[e._v("@TYQ121")]),t("div",{staticClass:"tyq-box"},[e._v("个人学习分享网站，大家喜欢的话可以分享给朋友~")]),t("div",{staticClass:"tyq-foot"},[e._v("1962679391@qq.com")])])}],a=(t("c975"),{data:function(){return{moveFlag:!1,offsetX:0,offsetY:0,backFlag:!0}},mounted:function(){document.oncontextmenu=function(e){return e.preventDefault(),!1};for(var e=navigator.userAgent,n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=0;t<n.length;t++)-1!=e.indexOf(n[t])&&console.log("移动端")},methods:{setHtmlFz:function(){var e=16,n=375,t=document.querySelector("html").offsetWidth,o=e*t/n;document.querySelector("html").style.fontSize=o+"px"},handleMouseDownBack:function(e){var n=this;n.offsetX=e.offsetX,n.offsetY=e.offsetY,n.moveFlag=!0},handleMouseMoveBack:function(e){var n=this;n.moveFlag&&(n.backFlag=!1,n.$refs.tyqBack.style.left=e.clientX-n.offsetX+"px",n.$refs.tyqBack.style.top=e.clientY-n.offsetY+"px")},handleMouseUpBack:function(e){var n=this;n.moveFlag=!1,n.handleClickTop(),n.backFlag=!0},handleClickTop:function(){var e=this;if(e.backFlag){var n=null,t=window.pageYOffset;n=setInterval((function(){window.pageYOffset>0?window.scrollTo(0,t):(clearInterval(n),n=null),t-=20}),10)}}}}),u=a,i=(t("5c0b"),t("2877")),s=Object(i["a"])(u,r,c,!1,null,null,null),d=s.exports,l=(t("d3b7"),t("8c4f"));o["a"].use(l["a"]);var f=l["a"].prototype.push;l["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var h=[{path:"/",redirect:"/home"},{path:"/login",name:"login",component:function(){return t.e("chunk-60acaae6").then(t.bind(null,"dd7b"))}},{path:"/regist",name:"regist",component:function(){return t.e("chunk-61599bce").then(t.bind(null,"47cd"))}},{path:"/home",name:"home",redirect:"/home/index",component:function(){return t.e("chunk-eaa2bfd6").then(t.bind(null,"6511"))},children:[{path:"/home/index",name:"homeIndex",component:function(){return t.e("chunk-6186e15f").then(t.bind(null,"bf72"))}},{path:"/home/liuyan",name:"liuyan",component:function(){return t.e("chunk-2d0e9357").then(t.bind(null,"8d0e"))}},{path:"/home/mood",name:"mood",component:function(){return t.e("chunk-2d216d74").then(t.bind(null,"c3d2"))}},{path:"/home/share",name:"share",component:function(){return t.e("chunk-2d226768").then(t.bind(null,"e986"))}},{path:"/home/story",name:"story",component:function(){return t.e("chunk-2d2106b7").then(t.bind(null,"b88c"))}},{path:"/home/about",name:"about",component:function(){return t.e("chunk-2d0df803").then(t.bind(null,"89d0"))}}]},{path:"/me",name:"me",redirect:"/me/index",component:function(){return t.e("chunk-2d22636c").then(t.bind(null,"e869"))},children:[{path:"/me/index",name:"meIndex",component:function(){return t.e("chunk-2d0dee36").then(t.bind(null,"8822"))}},{path:"/me/info",name:"info",component:function(){return t.e("chunk-2d2297e5").then(t.bind(null,"de4b"))}},{path:"/me/post",name:"post",component:function(){return t.e("chunk-2d0ac227").then(t.bind(null,"17f1"))}}]}],p=new l["a"]({mode:"history",base:"/",routes:h}),m=p,b=(t("fb98"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"message flex-start-center",class:e.messageShow?"up "+e.text.type:" "+e.text.type},["success"==e.text.type?t("div",{staticClass:"iconfont icon-dui"}):e._e(),"error"==e.text.type?t("div",{staticClass:"iconfont icon-cuowu"}):e._e(),"info"==e.text.type?t("div",{staticClass:"iconfont icon-info"}):e._e(),"warn"==e.text.type?t("div",{staticClass:"iconfont icon-jingshigantanhao2"}):e._e(),t("div",{staticClass:"message-title"},[e._v(e._s(e.text.title))])])])}),v=[],k={data:function(){return{messageShow:!1,text:{title:"消息提示",duration:1e3,type:"success"}}},mounted:function(){var e=this;e.$nextTick((function(){setTimeout((function(){e.messageShow=!0}),e.text.duration)}))},methods:{}},g=k,y=(t("40ed"),Object(i["a"])(g,b,v,!1,null,"8988650a",null)),w=y.exports,x=o["a"].extend(w),_=function(e){return new Promise((function(n,t){var o=new x({el:document.createElement("div")});document.body.appendChild(o.$el),e.duration||(e.duration=1e3),o.text=Object.assign(o.text,e),setTimeout((function(){o.$el.remove()}),e.duration+1e3),o.ok=function(){n()},o.close=function(){t()}}))},C=_,S=t("bc3a"),j=t.n(S),q=j.a.create({baseURL:"http://www.tyq121.top/web/api"});q.interceptors.request.use((function(e){return localStorage.tyqToken&&(e.headers.Authorization="Bearer "+(localStorage.tyqToken||"")),e}),(function(e){return Promise.reject(e)})),q.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(o["a"].prototype.$gMessage({type:"error",message:e.response.data.message}),401===e.response.status&&m.push("/login")),Promise.reject(e)}));var O=q;o["a"].config.productionTip=!1,o["a"].prototype.$gMessage=C,o["a"].prototype.$http=O,new o["a"]({router:m,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("c58b")},c58b:function(e,n,t){},fb98:function(e,n,t){}});
//# sourceMappingURL=app.5536961c.js.map