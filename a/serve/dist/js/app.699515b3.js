(function(e){function t(t){for(var o,c,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2aa05370":"8379a3b0","chunk-2d0df803":"3b75de66","chunk-2d0e9357":"0de453af","chunk-2d216d74":"1951cabb","chunk-56d2293e":"c367aa40","chunk-57e15624":"a2dca684","chunk-814b91ec":"25095a2e","chunk-ff174130":"2c7b36b7","chunk-66192020":"3e6cad40","chunk-7861fce0":"1df37216","chunk-be727980":"2d34afa8","chunk-cb61ab04":"9651c84c","chunk-d6414cb0":"3a310242","chunk-f52874e8":"352efe87","chunk-7980ec24":"b2e894cf","chunk-f3104da0":"65c572f0","chunk-f481b802":"4783280c"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2aa05370":1,"chunk-56d2293e":1,"chunk-57e15624":1,"chunk-814b91ec":1,"chunk-ff174130":1,"chunk-66192020":1,"chunk-7861fce0":1,"chunk-be727980":1,"chunk-cb61ab04":1,"chunk-d6414cb0":1,"chunk-f52874e8":1,"chunk-7980ec24":1,"chunk-f3104da0":1,"chunk-f481b802":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2aa05370":"b4c349dd","chunk-2d0df803":"31d6cfe0","chunk-2d0e9357":"31d6cfe0","chunk-2d216d74":"31d6cfe0","chunk-56d2293e":"7f2e87df","chunk-57e15624":"0639ed2c","chunk-814b91ec":"3da9f38e","chunk-ff174130":"07157fa3","chunk-66192020":"3d034753","chunk-7861fce0":"5d17e3d4","chunk-be727980":"8d07cdba","chunk-cb61ab04":"b24e72ac","chunk-d6414cb0":"2dd58ac1","chunk-f52874e8":"14910ec6","chunk-7980ec24":"3bf0ccda","chunk-f3104da0":"514e081c","chunk-f481b802":"8201001d"}[e]+".css",a=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var l=r[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],d.parentNode.removeChild(d),n(r)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1239:function(e,t,n){},"24bd":function(e,t,n){},"40ed":function(e,t,n){"use strict";n("1239")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{contextmenu:function(e){return e.preventDefault(),function(){return!1}()}}},[n("router-view"),n("div",{staticClass:"tyq-mask"}),n("div",{staticClass:"tyq d-flex flex-column jc-center ai-center"},[n("div",{staticClass:"tyq-header pointSB",on:{click:function(t){return e.$router.push("/")}}},[e._v("@TYQ121")]),n("div",{staticClass:"tyq-box"},[e._v("个人学习分享网站，大家喜欢的话可以分享给朋友~")]),n("div",{staticClass:"tyq-foot"},[e._v("1962679391@qq.com")])]),n("div",{ref:"tyqBack",staticClass:"tyq-back d-flex jc-center ai-center pointSB",on:{mousedown:e.handleMouseDownBack,mousemove:e.handleMouseMoveBack,mouseup:e.handleMouseUpBack,touchstart:e.handleTouchStartBack,touchmove:e.handleTouchMoveBack,touchend:e.handleTouchEndBack}},[e._v("Back")])],1)},a=[],r=(n("c975"),{data:function(){return{moveFlag:!1,offsetX:0,offsetY:0,backFlag:!0,tyqBackLeft:"",phone:!1}},mounted:function(){var e=this;document.oncontextmenu=function(e){return e.preventDefault(),!1},e.$nextTick((function(){e.tyqBackLeft=e.$refs.tyqBack.offsetLeft,console.log(e.$refs.tyqBack.offsetLeft)}));for(var t=navigator.userAgent,n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),o=0;o<n.length;o++)-1!=t.indexOf(n[o])&&(console.log("移动端"),e.phone=!0)},methods:{setHtmlFz:function(){var e=16,t=375,n=document.querySelector("html").offsetWidth,o=e*n/t;document.querySelector("html").style.fontSize=o+"px"},handleMouseDownBack:function(e){var t=this;t.phone||(t.offsetX=e.offsetX,t.offsetY=e.offsetY,t.moveFlag=!0,console.log("pc-mouseDown"))},handleMouseMoveBack:function(e){var t=this,n=e.clientX-t.offsetX,o=e.clientY-t.offsetY;t.moveFlag&&!t.phone&&(t.backFlag=!1,n<0?n=0:n>=document.body.offsetWidth-e.target.offsetWidth&&(n=document.body.offsetWidth-e.target.offsetWidth),o<0?o=0:o>=document.body.offsetHeight-e.target.clientHeight&&(o=document.body.offsetHeight-e.target.clientHeight),t.$refs.tyqBack.style.left=n+"px",t.$refs.tyqBack.style.top=o+"px",console.log("pc-mouseMove"))},handleMouseUpBack:function(e){var t=this;t.phone||(t.moveFlag=!1,t.handleClickTop(),t.backFlag=!0,setTimeout((function(){t.handleIsRight()}),500),console.log("pc-mouseUp"))},handleTouchStartBack:function(e){console.log("phone-touchStart")},handleTouchMoveBack:function(e){var t=this;e.preventDefault(),t.backFlag=!1;var n=e.targetTouches[0].clientX-e.target.clientWidth/2,o=e.targetTouches[0].clientY-e.target.clientHeight/2;n<0?n=0:n>=document.body.offsetWidth-e.target.clientWidth&&(n=document.body.offsetWidth-e.target.clientWidth),o<0?o=0:o>=document.body.offsetHeight-e.target.clientWidth&&(o=document.body.offsetHeight-e.target.clientWidth),t.$refs.tyqBack.style.left=n+"px",t.$refs.tyqBack.style.top=o+"px",console.log("phone-touchMove")},handleTouchEndBack:function(e){var t=this;t.handleClickTop(),t.backFlag=!0,setTimeout((function(){t.handleIsRight()}),500),console.log("phone-touchEnd")},handleIsRight:function(){var e=this;e.$refs.tyqBack.style.left!=e.tyqBackLeft&&(e.animate(e.$refs.tyqBack,e.tyqBackLeft),console.log("handleIsRight"))},handleClickTop:function(){var e=this;if(e.backFlag){var t=null,n=window.pageYOffset;t=setInterval((function(){window.pageYOffset>0?window.scrollTo(0,n):(clearInterval(t),t=null),n-=20}),10)}},animate:function(e,t,n){clearInterval(e.timer),e.timer=setInterval((function(){var o=(t-e.offsetLeft)/10;o=o>0?Math.ceil(o):Math.floor(o),e.offsetLeft==Math.abs(t)&&(clearInterval(e.timer),n&&n()),e.style.left=e.offsetLeft+o+"px"}),15)}}}),u=r,i=(n("5c0b"),n("2877")),l=Object(i["a"])(u,c,a,!1,null,null,null),s=l.exports,f=(n("d3b7"),n("8c4f"));o["a"].use(f["a"]);var d=f["a"].prototype.push;f["a"].prototype.push=function(e){return d.call(this,e).catch((function(e){return e}))};var h=[{path:"/",redirect:"/home"},{path:"/login",name:"login",component:function(){return n.e("chunk-d6414cb0").then(n.bind(null,"dd7b"))}},{path:"/regist",name:"regist",component:function(){return n.e("chunk-56d2293e").then(n.bind(null,"47cd"))}},{path:"/home",name:"home",redirect:"/home/index",component:function(){return n.e("chunk-66192020").then(n.bind(null,"6511"))},children:[{path:"/home/index",name:"homeIndex",component:function(){return Promise.all([n.e("chunk-f52874e8"),n.e("chunk-f481b802")]).then(n.bind(null,"bf72"))}},{path:"/home/liuyan",name:"liuyan",component:function(){return n.e("chunk-2d0e9357").then(n.bind(null,"8d0e"))}},{path:"/home/mood",name:"mood",component:function(){return n.e("chunk-2d216d74").then(n.bind(null,"c3d2"))}},{path:"/home/share",name:"share",component:function(){return Promise.all([n.e("chunk-f52874e8"),n.e("chunk-f3104da0")]).then(n.bind(null,"e986"))}},{path:"/home/story",name:"story",component:function(){return Promise.all([n.e("chunk-f52874e8"),n.e("chunk-7980ec24")]).then(n.bind(null,"b88c"))}},{path:"/home/about",name:"about",component:function(){return n.e("chunk-2d0df803").then(n.bind(null,"89d0"))}},{path:"/home/articledetail",name:"articledetail",component:function(){return n.e("chunk-2aa05370").then(n.bind(null,"017d"))}}]},{path:"/me",name:"me",redirect:"/me/info",component:function(){return n.e("chunk-cb61ab04").then(n.bind(null,"e869"))},children:[{path:"/me/info",name:"info",component:function(){return Promise.all([n.e("chunk-57e15624"),n.e("chunk-ff174130")]).then(n.bind(null,"de4b"))}},{path:"/me/password",name:"mePassword",component:function(){return n.e("chunk-7861fce0").then(n.bind(null,"d5fc"))}},{path:"/me/post",name:"post",component:function(){return Promise.all([n.e("chunk-57e15624"),n.e("chunk-814b91ec")]).then(n.bind(null,"17f1"))}},{path:"/me/postlist",name:"postlist",component:function(){return n.e("chunk-be727980").then(n.bind(null,"b26b"))}}]}],m=new f["a"]({mode:"history",base:"/",routes:h}),p=m,v=(n("fb98"),n("24bd"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message flex-start-center",class:e.messageShow?"up "+e.text.type:" "+e.text.type},["success"==e.text.type?n("div",{staticClass:"iconfont icon-dui"}):e._e(),"error"==e.text.type?n("div",{staticClass:"iconfont icon-cuowu"}):e._e(),"info"==e.text.type?n("div",{staticClass:"iconfont icon-info"}):e._e(),"warn"==e.text.type?n("div",{staticClass:"iconfont icon-jingshigantanhao2"}):e._e(),n("div",{staticClass:"message-title"},[e._v(e._s(e.text.title))])])])}),k=[],b={data:function(){return{messageShow:!1,text:{title:"消息提示",duration:1e3,type:"success"}}},mounted:function(){var e=this;e.$nextTick((function(){setTimeout((function(){e.messageShow=!0}),e.text.duration)}))},methods:{}},g=b,y=(n("40ed"),Object(i["a"])(g,v,k,!1,null,"8988650a",null)),x=y.exports,w=o["a"].extend(x),_=function(e){return new Promise((function(t,n){var o=new w({el:document.createElement("div")});document.body.appendChild(o.$el),e.duration||(e.duration=1e3),o.text=Object.assign(o.text,e),setTimeout((function(){o.$el.remove()}),e.duration+1e3),o.ok=function(){t()},o.close=function(){n()}}))},C=_,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShow?n("div",{staticClass:"alert-mask"},[n("div",{ref:"alertDom",staticClass:"alert"},[n("div",{staticClass:"alert-title d-flex jc-between ai-center",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.handleMouseDownAlert(t)},mousemove:function(t){return t.target!==t.currentTarget?null:e.handleMouseMoveAlert(t)},mouseup:function(t){return t.target!==t.currentTarget?null:e.handleMouseUpAlert(t)}}},[n("div",[e._v(e._s(e.text.title))]),n("div",{staticClass:"alert-title-close d-flex jc-center ai-center",on:{click:function(t){return e.handleClickOk("close")}}},[e._v("×")])]),n("div",{staticClass:"alert-content"},[e._v(e._s(e.text.content))]),n("div",{staticClass:"alert-bottom d-flex jc-end ai-center"},[e.text.cancel?n("button",{on:{click:function(t){return e.handleClickOk("cancel")}}},[e._v(e._s(e.text.btn.cancelVal))]):e._e(),e.text.confirm?n("button",{on:{click:function(t){return e.handleClickOk("confirm")}}},[e._v(e._s(e.text.btn.confirmVal))]):e._e()])])]):e._e()])},T=[],M={name:"alert",data:function(){return{isShow:!0,text:{title:"",content:"",cancel:!0,confirm:!0,btn:{confirmVal:"确定",cancelVal:"取消"}},moveFlag:!1,moveX:0,moveY:0,offsetX:0,offsetY:0}},methods:{handleClickOk:function(e){var t="";"close"==e?t="close":"cancel"==e?t="cancel":"confirm"==e&&(t="confirm"),this.callback(t),this.isShow=!1},handleMouseDownAlert:function(e){var t=this;t.moveFlag=!0,t.offsetX=e.offsetX,t.offsetY=e.offsetY,t.$refs.alertDom.style.cursor="move"},handleMouseMoveAlert:function(e){var t=this;if(t.moveFlag){var n=t.$refs.alertDom;t.moveX=e.clientX-t.offsetX,t.moveY=e.clientY-t.offsetY,t.moveX<0?t.moveX=0:t.moveX>=document.body.offsetWidth-e.target.clientWidth&&(t.moveX=document.body.offsetWidth-e.target.clientWidth),t.moveY<0?t.moveY=0:t.moveY>=document.body.offsetHeight-e.target.clientWidth&&(t.moveY=document.body.offsetHeight-e.target.clientWidth),n.style.top=t.moveY+"px",n.style.left=t.moveX+"px"}},handleMouseUpAlert:function(e){var t=this;t.moveFlag=!1,t.$refs.alertDom.style.cursor="default"},handleMouseLeaveAlert:function(e){var t=this;t.moveFlag=!1}}},q=M,$=(n("a19f"),Object(i["a"])(q,B,T,!1,null,"c81699aa",null)),S=$.exports,O=o["a"].extend(S),j=function(e){return new Promise((function(t,n){var o=new O({el:document.createElement("div")});document.body.appendChild(o.$el),o.text=Object.assign(o.text,e),o.callback=function(t){"confirm"==t?(e.success("confirm"),o.$el.remove()):"cancel"==t?(e.success("cancel"),o.$el.remove()):"close"==t&&o.$el.remove()},o.ok=function(){t()},o.close=function(){n()}}))},P=j,Y=n("bc3a"),W=n.n(Y),A=W.a.create({baseURL:"http://www.tyq121.top/web/api"});A.interceptors.request.use((function(e){return localStorage.tyqToken&&-1==e.url.indexOf("https://restapi.amap.com/v3/")&&(e.headers.Authorization="Bearer "+(localStorage.tyqToken||"")),e}),(function(e){return Promise.reject(e)})),A.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(o["a"].prototype.$gMessage({type:"error",message:e.response.data.message}),401===e.response.status&&p.push("/login")),Promise.reject(e)}));var X=A;o["a"].config.productionTip=!1,o["a"].prototype.$gMessage=C,o["a"].prototype.$gAlert=P,o["a"].prototype.$http=X,new o["a"]({router:p,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("c58b")},7781:function(e,t,n){},a19f:function(e,t,n){"use strict";n("7781")},c58b:function(e,t,n){},fb98:function(e,t,n){}});
//# sourceMappingURL=app.699515b3.js.map