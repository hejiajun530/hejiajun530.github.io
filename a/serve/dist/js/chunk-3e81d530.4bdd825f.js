(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e81d530"],{"0b75":function(t,e,n){},"0dd2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-tyq"},[t._t("default")],2)},i=[],o=n("162f"),s={props:["data"],watch:{data:function(){console.log("tableData-chage")}},data:function(){return{}},components:{"g-tableColumn":o["a"]}},c=s,l=(n("7a14"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=u.exports},"162f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-column"},[n("div",{staticClass:"table-column-label"},[t._v(t._s(t.label))]),t._l(t.$parent.data,(function(e,a){return n("div",{key:a,staticClass:"table-column-item text-ellipsis",style:"width: "+t.width+"px;"},[[t._t("default",null,{row:e})]],2)}))],2)},i=[],o={props:["label","prop","type","width"],data:function(){return{max:0,arr:[]}},mounted:function(){},methods:{}},s=o,c=(n("f613"),n("2877")),l=Object(c["a"])(s,a,i,!1,null,"75ca3802",null);e["a"]=l.exports},1676:function(t,e,n){t.exports=n.p+"media/smoke.ed1872ef.mp4"},"1dd5":function(t,e,n){},"2e87":function(t,e,n){"use strict";n("97ad")},"3e1c":function(t,e,n){"use strict";n("f0e4")},"4eac":function(t,e,n){"use strict";n("0b75")},"56ad":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageing"},[t.index>1?n("div",{staticClass:"pageing-prev pageing-box",on:{click:function(e){return t.handleClickChangeNum("prev")}}},[t._v("<")]):t._e(),t._l(t.num,(function(e){return[e<=2||e>=t.num-1?n("div",{key:e,staticClass:"pageing-num pageing-box",class:e==t.index?"active":"",on:{click:function(n){return t.handleClickChangeNum(e)}}},[t._v(t._s(e))]):t._e(),t.num>=5&&3==e?n("div",{key:e,staticClass:"pageing-num pageing-box",class:t.index>2&&t.index<t.num-1?"active":""},[t._v(t._s(e+"/"+t.num))]):t._e()]})),t.index<t.num?n("div",{staticClass:"pageing-next pageing-box",on:{click:function(e){return t.handleClickChangeNum("next")}}},[t._v(">")]):t._e()],2)},i=[],o={props:{num:{default:1}},data:function(){return{index:1}},methods:{handleClickChangeNum:function(t){var e=this;"prev"==t?e.index-=1:"next"==t?e.index+=1:e.index=t,e.$emit("g-getpage",e.index)}}},s=o,c=(n("3e1c"),n("2877")),l=Object(c["a"])(s,a,i,!1,null,"6a1ce0f3",null);e["a"]=l.exports},"7a14":function(t,e,n){"use strict";n("ee9a")},"97ad":function(t,e,n){},"9c9e":function(t,e,n){"use strict";n("c975");var a={data:function(){return{tyqUser:"",tyqToken:"",phoneFlag:!1}},created:function(){var t=this,e=JSON.parse(sessionStorage.getItem("tyqUser"));t.tyqUser=e||"",t.tyqToken=sessionStorage.getItem("tyqToken");for(var n=navigator.userAgent,a=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=0;i<a.length;i++)-1!=n.indexOf(a[i])&&(console.log("移动端"),t.phoneFlag=!0)},mounted:function(){},methods:{}};e["a"]=a},bc40:function(t,e,n){},c3d2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mood text-left",style:t.phoneFlag?"padding: 0;":""},[n("div",{staticClass:"mood-search"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入歌名/演唱者"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"pointSB",on:{click:t.handleClickGetMusic}},[t._v("搜索歌曲")])]),t.musiclist.length?n("musiclist",{attrs:{musiclist:t.musiclist}}):n("div",{staticClass:"mood-nomusic"},[t._v(" 没有歌曲，快去提醒博主添加吧~ ")]),n("pageing",{attrs:{num:t.total},on:{"g-getpage":t.handleClickChangePage}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"musiclist"},[a("g-table",{attrs:{data:t.musiclist}},[a("g-tableColumn",{attrs:{label:"封面",prop:"text"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.text?a("img",{staticClass:"cover",attrs:{src:t.row.text}}):a("img",{staticClass:"cover",attrs:{src:n("cf05")}})]}}])}),a("g-tableColumn",{attrs:{label:"歌名",prop:"title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),a("g-tableColumn",{attrs:{label:"演唱者",prop:"auther"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.auther)+" ")]}}])}),a("g-tableColumn",{attrs:{label:"上传时间",prop:"createTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$parent.phoneFlag?t.toymd(e.row.createTime,"yy-mm-dd"):t.toymd(e.row.createTime,"yy-mm-dd hh:mm:ss"))+" ")]}}])}),a("g-tableColumn",{attrs:{label:"播放",prop:"content"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"iconfont",class:t.musicid==e.row.music&&t.stopFlag?"icon-bofang":"icon-iconset0481",on:{click:function(n){return t.handleClickPlayMusic(e.row)}}})]}}])})],1)],1)},s=[],c=n("0dd2"),l=n("162f"),u={props:{musiclist:{type:Array}},components:{"g-table":c["a"],"g-tableColumn":l["a"]},data:function(){return{audioSrc:"",musicid:"",stopFlag:!1,loadFlag:!0}},created:function(){var t=this;console.log(t.musiclist)},mounted:function(){},watch:{audioSrc:function(){var t=this;t.stopFlag=!0,t.loadFlag=!1,console.log(t.audioSrc+"改变了")}},methods:{handleClickPlayMusic:function(t){var e=this,n=document.querySelector("#audioTyq");console.log(t),console.log(n),e.musicid=t.music,t.content!=e.audioSrc?(e.audioSrc=t.content,n.src=e.audioSrc):e.audioSrc=t.content,n.paused?e.loadFlag?n.onload=function(){n.play(),e.stopFlag=!0,console.log("现在播放-onload")}:(n.play(),e.stopFlag=!0,console.log("现在播放-play")):(n.pause(),e.stopFlag=!1,console.log("现在暂停"))}}},r=u,d=(n("2e87"),n("2877")),m=Object(d["a"])(r,o,s,!1,null,"7498aa36",null),g=m.exports,f=n("56ad"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"videoImg"},[t._v(" 图片 "),a("video",{ref:"video",attrs:{id:"video",controls:"",preload:"auto"}},[a("source",{ref:"videosrc",attrs:{src:n("1676")}})]),a("img",{ref:"videoimg",staticClass:"videoImg-img"})])},h=[],v={props:{url:{type:String}},data:function(){return{data:""}},mounted:function(){var t=this;t.handleGetVideoImg()},methods:{handleGetVideoImg:function(){var t=this,e=t.$refs.video,n=(t.$refs.videosrc,t.$refs.videoimg);n.setAttribute("crossOrigin","Anonymous"),e.onloadeddata=function(){var t=document.createElement("canvas");t.width=100,t.height=100,t.getContext("2d").drawImage(e,0,0,t.width,t.height);var a=t.toDataURL("image/png");n.src=a,console.log(n)}}}},C=v,b=(n("4eac"),Object(d["a"])(C,p,h,!1,null,"0e982da6",null)),y=b.exports,_=n("9c9e"),x={mixins:[_["a"]],components:{videoImg:y,musiclist:g,pageing:f["a"]},data:function(){return{musiclist:[],query:{page:1,num:7},total:0,title:""}},methods:{handleClickChangePage:function(t){var e=this;e.$set(e.query,"page",t),e.$http.post("/getMusicList",e.query).then((function(t){e.musiclist=t.data.res,e.musiclist[0].total&&(e.total=Math.ceil(e.musiclist[0].total/e.query.num)),console.log(e.musiclist,"musiclist")}))},handleClickGetMusic:function(){var t=this;t.title?t.$http.get("/getMusicByText?title=".concat(t.title)).then((function(e){console.log(e),e.data.res&&(t.musiclist=e.data.res,t.total=0)})):t.handleClickChangePage(1)}},created:function(){var t=this;t.handleClickChangePage(1)},mounted:function(){}},k=x,w=(n("f28f"),Object(d["a"])(k,a,i,!1,null,"8d5f559e",null));e["default"]=w.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ee9a:function(t,e,n){},f0e4:function(t,e,n){},f28f:function(t,e,n){"use strict";n("1dd5")},f613:function(t,e,n){"use strict";n("bc40")}}]);
//# sourceMappingURL=chunk-3e81d530.4bdd825f.js.map