(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53248406"],{"0b75":function(t,e,n){},"0dd2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[t._t("default")],2)},i=[],o=n("162f"),s={props:["data"],watch:{data:function(){console.log("tableData-chage")}},data:function(){return{}},components:{"g-tableColumn":o["a"]}},c=s,l=(n("ab33"),n("2877")),r=Object(l["a"])(c,a,i,!1,null,"36805717",null);e["a"]=r.exports},"159b":function(t,e,n){var a=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var c in i){var l=a[c],r=l&&l.prototype;if(r&&r.forEach!==o)try{s(r,"forEach",o)}catch(u){r.forEach=o}}},"162f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-column"},[n("div",{staticClass:"table-column-label"},[t._v(t._s(t.label))]),t._l(t.$parent.data,(function(e,a){return n("div",{key:a,staticClass:"table-column-item text-ellipsis",style:"width: "+t.width+"px;"},[[t._t("default",null,{row:e})]],2)}))],2)},i=[],o=(n("4160"),n("159b"),{props:["label","prop","type","width"],data:function(){return{max:0,arr:[]}},mounted:function(){var t=this;t.$nextTick((function(){for(var e=document.querySelectorAll(".table-column-item"),n=0;n<e.length;n++)t.arr.push(e[n].clientHeight);t.getMax(t.arr)}))},methods:{getMax:function(t){var e=this;t.forEach((function(t,n){t>e.max&&(e.max=t)}));for(var n=document.querySelectorAll(".table-column-item"),a=0;a<n.length;a++)n[a].style.height=e.max+5+"px"}}}),s=o,c=(n("a5c5"),n("2877")),l=Object(c["a"])(s,a,i,!1,null,null,null);e["a"]=l.exports},1676:function(t,e,n){t.exports=n.p+"media/smoke.ed1872ef.mp4"},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,i=n("a640"),o=n("ae40"),s=i("forEach"),c=o("forEach");t.exports=s&&c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2e87":function(t,e,n){"use strict";n("97ad")},3125:function(t,e,n){},"3e1c":function(t,e,n){"use strict";n("f0e4")},4160:function(t,e,n){"use strict";var a=n("23e7"),i=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4eac":function(t,e,n){"use strict";n("0b75")},"56ad":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageing"},[t.index>1?n("div",{staticClass:"pageing-prev pageing-box",on:{click:function(e){return t.handleClickChangeNum("prev")}}},[t._v("<")]):t._e(),t._l(t.num,(function(e){return[e<=2||e>=t.num-1?n("div",{key:e,staticClass:"pageing-num pageing-box",class:e==t.index?"active":"",on:{click:function(n){return t.handleClickChangeNum(e)}}},[t._v(t._s(e))]):t._e(),t.num>=5&&3==e?n("div",{key:e,staticClass:"pageing-num pageing-box",class:t.index>2&&t.index<t.num-1?"active":""},[t._v(t._s(e+"/"+t.num))]):t._e()]})),t.index<t.num?n("div",{staticClass:"pageing-next pageing-box",on:{click:function(e){return t.handleClickChangeNum("next")}}},[t._v(">")]):t._e()],2)},i=[],o={props:{num:{default:1}},data:function(){return{index:1}},methods:{handleClickChangeNum:function(t){var e=this;"prev"==t?e.index-=1:"next"==t?e.index+=1:e.index=t,e.$emit("g-getpage",e.index)}}},s=o,c=(n("3e1c"),n("2877")),l=Object(c["a"])(s,a,i,!1,null,"6a1ce0f3",null);e["a"]=l.exports},5800:function(t,e,n){},"5ef5":function(t,e,n){},"97ad":function(t,e,n){},"9c9e":function(t,e,n){"use strict";n("c975");var a={data:function(){return{tyqUser:"",tyqToken:"",phoneFlag:!1}},created:function(){var t=this,e=JSON.parse(sessionStorage.getItem("tyqUser"));t.tyqUser=e||"",t.tyqToken=sessionStorage.getItem("tyqToken");for(var n=navigator.userAgent,a=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=0;i<a.length;i++)-1!=n.indexOf(a[i])&&(console.log("移动端"),t.phoneFlag=!0)},mounted:function(){},methods:{}};e["a"]=a},a5c5:function(t,e,n){"use strict";n("5800")},ab33:function(t,e,n){"use strict";n("5ef5")},c3d2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mood text-left",style:t.phoneFlag?"padding: 0;":""},[n("div",{staticClass:"mood-search"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入歌名/演唱者"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"pointSB",on:{click:t.handleClickGetMusic}},[t._v("搜索歌曲")])]),t.musiclist.length?n("musiclist",{attrs:{musiclist:t.musiclist}}):n("div",{staticClass:"mood-nomusic"},[t._v(" 没有歌曲，快去提醒博主添加吧~ ")]),n("pageing",{attrs:{num:t.total},on:{"g-getpage":t.handleClickChangePage}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"musiclist"},[a("g-table",{attrs:{data:t.musiclist}},[a("g-tableColumn",{attrs:{label:"封面",prop:"text"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.text?a("img",{staticClass:"cover",attrs:{src:t.row.text}}):a("img",{staticClass:"cover",attrs:{src:n("cf05")}})]}}])}),a("g-tableColumn",{attrs:{label:"歌名",prop:"title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),a("g-tableColumn",{attrs:{label:"演唱者",prop:"auther"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.auther)+" ")]}}])}),a("g-tableColumn",{attrs:{label:"上传时间",prop:"createTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$parent.phoneFlag?t.toymd(e.row.createTime,"yy-mm-dd"):t.toymd(e.row.createTime,"yy-mm-dd hh:mm:ss"))+" ")]}}])}),a("g-tableColumn",{attrs:{label:"播放",prop:"content"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"iconfont",class:t.musicid==e.row.music&&t.stopFlag?"icon-bofang":"icon-iconset0481",on:{click:function(n){return t.handleClickPlayMusic(e.row)}}})]}}])})],1)],1)},s=[],c=n("0dd2"),l=n("162f"),r={props:{musiclist:{type:Array}},components:{"g-table":c["a"],"g-tableColumn":l["a"]},data:function(){return{audioSrc:"",musicid:"",stopFlag:!1,loadFlag:!0}},created:function(){var t=this;console.log(t.musiclist)},mounted:function(){},watch:{audioSrc:function(){var t=this;t.stopFlag=!0,t.loadFlag=!1,console.log(t.audioSrc+"改变了")}},methods:{handleClickPlayMusic:function(t){var e=this,n=document.querySelector("#audioTyq");console.log(t),console.log(n),e.musicid=t.music,t.content!=e.audioSrc?(e.audioSrc=t.content,n.src=e.audioSrc):e.audioSrc=t.content,n.paused?e.loadFlag?n.onload=function(){n.play(),e.stopFlag=!0,console.log("现在播放-onload")}:(n.play(),e.stopFlag=!0,console.log("现在播放-play")):(n.pause(),e.stopFlag=!1,console.log("现在暂停"))}}},u=r,d=(n("2e87"),n("2877")),f=Object(d["a"])(u,o,s,!1,null,"7498aa36",null),m=f.exports,g=n("56ad"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"videoImg"},[t._v(" 图片 "),a("video",{ref:"video",attrs:{id:"video",controls:"",preload:"auto"}},[a("source",{ref:"videosrc",attrs:{src:n("1676")}})]),a("img",{ref:"videoimg",staticClass:"videoImg-img"})])},h=[],v={props:{url:{type:String}},data:function(){return{data:""}},mounted:function(){var t=this;t.handleGetVideoImg()},methods:{handleGetVideoImg:function(){var t=this,e=t.$refs.video,n=(t.$refs.videosrc,t.$refs.videoimg);n.setAttribute("crossOrigin","Anonymous"),e.onloadeddata=function(){var t=document.createElement("canvas");t.width=100,t.height=100,t.getContext("2d").drawImage(e,0,0,t.width,t.height);var a=t.toDataURL("image/png");n.src=a,console.log(n)}}}},b=v,C=(n("4eac"),Object(d["a"])(b,p,h,!1,null,"0e982da6",null)),y=C.exports,x=n("9c9e"),S={mixins:[x["a"]],components:{videoImg:y,musiclist:m,pageing:g["a"]},data:function(){return{musiclist:[],query:{page:1,num:3},total:0,title:""}},methods:{handleClickChangePage:function(t){var e=this;e.$set(e.query,"page",t),e.$http.post("/getMusicList",e.query).then((function(t){e.musiclist=t.data.res,e.musiclist[0].total&&(e.total=Math.ceil(e.musiclist[0].total/e.query.num)),console.log(e.musiclist,"musiclist")}))},handleClickGetMusic:function(){var t=this;t.title?t.$http.get("/getMusicByText?title=".concat(t.title)).then((function(e){console.log(e),e.data.res&&(t.musiclist=e.data.res,t.total=0)})):t.handleClickChangePage(1)}},created:function(){var t=this;t.handleClickChangePage(1)},mounted:function(){}},_=S,k=(n("dbda"),Object(d["a"])(_,a,i,!1,null,"454b672d",null));e["default"]=k.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dbda:function(t,e,n){"use strict";n("3125")},f0e4:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-53248406.0d5bf7e2.js.map