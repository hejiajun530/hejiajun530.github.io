(function(e){function t(t){for(var o,c,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1cb92d4a":"bcfd0bb4","chunk-2d0ac227":"2b58208e","chunk-2d0dee36":"4839d292","chunk-2d0df803":"e6c6a777","chunk-2d0e9357":"261c9ec3","chunk-2d2106b7":"1b376728","chunk-2d216d74":"5e90a680","chunk-2d22636c":"e16c9c1f","chunk-2d226768":"53c1216f","chunk-2d2297e5":"ab41e177","chunk-4e997174":"10e90f1f","chunk-7608227e":"0fcfb687","chunk-7b557583":"c6b54179"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1cb92d4a":1,"chunk-4e997174":1,"chunk-7608227e":1,"chunk-7b557583":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1cb92d4a":"2dd58ac1","chunk-2d0ac227":"31d6cfe0","chunk-2d0dee36":"31d6cfe0","chunk-2d0df803":"31d6cfe0","chunk-2d0e9357":"31d6cfe0","chunk-2d2106b7":"31d6cfe0","chunk-2d216d74":"31d6cfe0","chunk-2d22636c":"31d6cfe0","chunk-2d226768":"31d6cfe0","chunk-2d2297e5":"31d6cfe0","chunk-4e997174":"9d2fca4c","chunk-7608227e":"fb2427a9","chunk-7b557583":"8979a8f2"}[e]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1239:function(e,t,n){},"40ed":function(e,t,n){"use strict";n("1239")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{contextmenu:function(e){return e.preventDefault(),function(){return!1}()}}},[n("router-view"),n("div",{staticClass:"tyq-mask"}),e._m(0),n("div",{ref:"tyqBack",staticClass:"tyq-back d-flex jc-center ai-center pointSB",on:{mousedown:e.handleMouseDownBack,mousemove:e.handleMouseMoveBack,mouseup:e.handleMouseUpBack,touchstart:e.handleTouchStartBack,touchmove:e.handleTouchMoveBack,touchend:e.handleTouchEndBack}},[e._v("Back")])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tyq d-flex flex-column jc-center ai-center"},[n("div",{staticClass:"tyq-header"},[e._v("@TYQ121")]),n("div",{staticClass:"tyq-box"},[e._v("个人学习分享网站，大家喜欢的话可以分享给朋友~")]),n("div",{staticClass:"tyq-foot"},[e._v("1962679391@qq.com")])])}],a=(n("c975"),{data:function(){return{moveFlag:!1,offsetX:0,offsetY:0,backFlag:!0,tyqBackLeft:"",phone:!1}},mounted:function(){var e=this;document.oncontextmenu=function(e){return e.preventDefault(),!1},e.$nextTick((function(){e.tyqBackLeft=e.$refs.tyqBack.offsetLeft,console.log(e.$refs.tyqBack.offsetLeft)}));for(var t=navigator.userAgent,n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),o=0;o<n.length;o++)-1!=t.indexOf(n[o])&&(console.log("移动端"),e.phone=!0)},methods:{setHtmlFz:function(){var e=16,t=375,n=document.querySelector("html").offsetWidth,o=e*n/t;document.querySelector("html").style.fontSize=o+"px"},handleMouseDownBack:function(e){var t=this;t.phone||(t.offsetX=e.offsetX,t.offsetY=e.offsetY,t.moveFlag=!0,console.log("pc-mouseDown"))},handleMouseMoveBack:function(e){var t=this,n=e.clientX-t.offsetX,o=e.clientY-t.offsetY;t.moveFlag&&!t.phone&&(t.backFlag=!1,n<0?n=0:n>=document.body.offsetWidth-e.target.offsetWidth&&(n=document.body.offsetWidth-e.target.offsetWidth),o<0?o=0:o>=document.body.offsetHeight-e.target.clientHeight&&(o=document.body.offsetHeight-e.target.clientHeight),t.$refs.tyqBack.style.left=n+"px",t.$refs.tyqBack.style.top=o+"px",console.log("pc-mouseMove"))},handleMouseUpBack:function(e){var t=this;t.phone||(t.moveFlag=!1,t.handleClickTop(),t.backFlag=!0,setTimeout((function(){t.handleIsRight()}),500),console.log("pc-mouseUp"))},handleTouchStartBack:function(e){console.log("phone-touchStart")},handleTouchMoveBack:function(e){var t=this;e.preventDefault(),t.backFlag=!1;var n=e.targetTouches[0].clientX-e.target.clientWidth/2,o=e.targetTouches[0].clientY-e.target.clientHeight/2;n<0?n=0:n>=document.body.offsetWidth-e.target.clientWidth&&(n=document.body.offsetWidth-e.target.clientWidth),o<0?o=0:o>=document.body.offsetHeight-e.target.clientWidth&&(o=document.body.offsetHeight-e.target.clientWidth),t.$refs.tyqBack.style.left=n+"px",t.$refs.tyqBack.style.top=o+"px",console.log("phone-touchMove")},handleTouchEndBack:function(e){var t=this;t.handleClickTop(),t.backFlag=!0,setTimeout((function(){t.handleIsRight()}),500),console.log("phone-touchEnd")},handleIsRight:function(){var e=this;e.$refs.tyqBack.style.left!=e.tyqBackLeft&&(e.animate(e.$refs.tyqBack,e.tyqBackLeft),console.log("handleIsRight"))},handleClickTop:function(){var e=this;if(e.backFlag){var t=null,n=window.pageYOffset;t=setInterval((function(){window.pageYOffset>0?window.scrollTo(0,n):(clearInterval(t),t=null),n-=20}),10)}},animate:function(e,t,n){clearInterval(e.timer),e.timer=setInterval((function(){var o=(t-e.offsetLeft)/10;o=o>0?Math.ceil(o):Math.floor(o),e.offsetLeft==Math.abs(t)&&(clearInterval(e.timer),n&&n()),e.style.left=e.offsetLeft+o+"px"}),15)}}}),u=a,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,c,r,!1,null,null,null),d=s.exports,l=(n("d3b7"),n("8c4f"));o["a"].use(l["a"]);var f=l["a"].prototype.push;l["a"].prototype.push=function(e){return f.call(this,e).catch((function(e){return e}))};var h=[{path:"/",redirect:"/home"},{path:"/login",name:"login",component:function(){return n.e("chunk-1cb92d4a").then(n.bind(null,"dd7b"))}},{path:"/regist",name:"regist",component:function(){return n.e("chunk-7b557583").then(n.bind(null,"47cd"))}},{path:"/home",name:"home",redirect:"/home/index",component:function(){return n.e("chunk-4e997174").then(n.bind(null,"6511"))},children:[{path:"/home/index",name:"homeIndex",component:function(){return n.e("chunk-7608227e").then(n.bind(null,"bf72"))}},{path:"/home/liuyan",name:"liuyan",component:function(){return n.e("chunk-2d0e9357").then(n.bind(null,"8d0e"))}},{path:"/home/mood",name:"mood",component:function(){return n.e("chunk-2d216d74").then(n.bind(null,"c3d2"))}},{path:"/home/share",name:"share",component:function(){return n.e("chunk-2d226768").then(n.bind(null,"e986"))}},{path:"/home/story",name:"story",component:function(){return n.e("chunk-2d2106b7").then(n.bind(null,"b88c"))}},{path:"/home/about",name:"about",component:function(){return n.e("chunk-2d0df803").then(n.bind(null,"89d0"))}}]},{path:"/me",name:"me",redirect:"/me/index",component:function(){return n.e("chunk-2d22636c").then(n.bind(null,"e869"))},children:[{path:"/me/index",name:"meIndex",component:function(){return n.e("chunk-2d0dee36").then(n.bind(null,"8822"))}},{path:"/me/info",name:"info",component:function(){return n.e("chunk-2d2297e5").then(n.bind(null,"de4b"))}},{path:"/me/post",name:"post",component:function(){return n.e("chunk-2d0ac227").then(n.bind(null,"17f1"))}}]}],p=new l["a"]({mode:"history",base:"/",routes:h}),m=p,g=(n("fb98"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message flex-start-center",class:e.messageShow?"up "+e.text.type:" "+e.text.type},["success"==e.text.type?n("div",{staticClass:"iconfont icon-dui"}):e._e(),"error"==e.text.type?n("div",{staticClass:"iconfont icon-cuowu"}):e._e(),"info"==e.text.type?n("div",{staticClass:"iconfont icon-info"}):e._e(),"warn"==e.text.type?n("div",{staticClass:"iconfont icon-jingshigantanhao2"}):e._e(),n("div",{staticClass:"message-title"},[e._v(e._s(e.text.title))])])])}),v=[],b={data:function(){return{messageShow:!1,text:{title:"消息提示",duration:1e3,type:"success"}}},mounted:function(){var e=this;e.$nextTick((function(){setTimeout((function(){e.messageShow=!0}),e.text.duration)}))},methods:{}},k=b,y=(n("40ed"),Object(i["a"])(k,g,v,!1,null,"8988650a",null)),x=y.exports,w=o["a"].extend(x),B=function(e){return new Promise((function(t,n){var o=new w({el:document.createElement("div")});document.body.appendChild(o.$el),e.duration||(e.duration=1e3),o.text=Object.assign(o.text,e),setTimeout((function(){o.$el.remove()}),e.duration+1e3),o.ok=function(){t()},o.close=function(){n()}}))},q=B,T=n("bc3a"),_=n.n(T),C=_.a.create({baseURL:"http://www.tyq121.top/web/api"});C.interceptors.request.use((function(e){return localStorage.tyqToken&&-1==e.url.indexOf("https://restapi.amap.com/v3/")&&(e.headers.Authorization="Bearer "+(localStorage.tyqToken||"")),e}),(function(e){return Promise.reject(e)})),C.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(o["a"].prototype.$gMessage({type:"error",message:e.response.data.message}),401===e.response.status&&m.push("/login")),Promise.reject(e)}));var S=C;o["a"].config.productionTip=!1,o["a"].prototype.$gMessage=q,o["a"].prototype.$http=S,new o["a"]({router:m,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("c58b")},c58b:function(e,t,n){},fb98:function(e,t,n){}});
//# sourceMappingURL=app.af590759.js.map