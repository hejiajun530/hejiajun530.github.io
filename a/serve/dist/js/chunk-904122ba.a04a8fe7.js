(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-904122ba"],{"017d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"articledetail text-left"},[t._m(0),i("div",{staticClass:"articledetail-box"},[i("div",{staticClass:"articledetail-box-title"},[t._v(t._s(t.model.title))]),i("div",{staticClass:"articledetail-box-tag d-flex jc-start ai-center"},[i("div",{staticClass:"articledetail-box-tag-name"},[i("i",{staticClass:"iconfont icon-gerenxinxi"}),i("span",[t._v(t._s(t.model.username))])]),i("div",{staticClass:"articledetail-box-tag-time"},[i("i",{staticClass:"iconfont icon-dingdanxiangqing-chuangjianshijian"}),i("span",[t._v(t._s(t.toymd(t.model.createTime,"yy-mm-dd hh:mm:ss")))])])]),i("div",{staticClass:"articledetail-box-content",domProps:{innerHTML:t._s(t.model.content)}}),i("div",{staticClass:"articledetail-box-make text-center"},[i("i",{staticClass:"iconfont icon-dianzan pointSB",on:{click:t.handleClickAddLike}}),i("span",[t._v(t._s(t.model.like))])]),i("div",{staticClass:"articledetail-box-column d-flex jc-between ai-center"},[t.articleColumn[0]?i("div",{staticClass:"d-flex ai-center"},[t._v(" 上一章： "),i("span",{staticClass:"articledetail-box-column-prev pointSB text-ellipsis",on:{click:function(e){return t.$router.push("/home/articledetail?articleid="+t.articleColumn[0].articleid)}}},[t._v(t._s(t.articleColumn[0].title))])]):t._e(),t.articleColumn[2]?i("div",{staticClass:"d-flex ai-center"},[t._v(" 下一章： "),i("span",{staticClass:"articledetail-box-column-next pointSB text-ellipsis",on:{click:function(e){return t.$router.push("/home/articledetail?articleid="+t.articleColumn[2].articleid)}}},[t._v(t._s(t.articleColumn[2].title)+" ")])]):t._e()]),i("div",{staticClass:"articledetail-box-share d-flex jc-start ai-center"},[i("span",[t._v("分享:")]),i("div",{staticClass:"articledetail-box-share-qqkonjian pointSB iconfont icon-QQzone",on:{click:t.handleClickShareQQKJ}}),i("div",{staticClass:"articledetail-box-share-weibo pointSB iconfont icon-weibo",on:{click:t.handleClickShareWB}}),i("div",{staticClass:"articledetail-box-share-ewm pointSB iconfont icon-erweima"},[i("div",{staticClass:"articledetail-box-share-ewm-box"},[i("ewm",{attrs:{url:t.$route.fullPath}})],1)])])]),t.model.articleid?i("comment",{attrs:{articleid:t.model.articleid}}):t._e()],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"articledetail-title"},[i("strong",[t._v("您当前的位置：")]),i("i",[t._v("首页")]),i("span",[t._v(">")]),i("i",[t._v("文章详情")])])}],n=(i("c975"),i("a15b"),i("289e")),o=i("0834"),c={components:{comment:n["a"],ewm:o["a"]},data:function(){return{model:"",articleColumn:""}},watch:{$route:function(t,e){var i=this;i.handleGetArticleById()}},created:function(){var t=this;t.handleGetArticleById()},mounted:function(){},methods:{handleGetArticleById:function(){var t=this;t.$route.query.articleid&&(t.postFlag=!1,t.$http.get("/getArticleByArticleId?articleid=".concat(t.$route.query.articleid)).then((function(e){console.log(e.data),t.model=e.data.res[0],t.handleAddArticleCount(),t.handleGetArticleColumn()})))},handleAddArticleCount:function(){var t=this,e=t.model.count+1;t.$set(t.model,"count",e),t.$http.post("/editArticleById",t.model).then((function(t){}))},handleClickAddLike:function(){var t=this;if(!JSON.parse(sessionStorage.getItem("tyqUser")))return t.$gMessage({title:"请先登录!",duration:2e3,type:"error"}),!1;var e=JSON.parse(sessionStorage.getItem("tyqUser")).userid;t.$set(t.model,"userid",e),t.$set(t.model,"status",1),t.$http.post("/addLike",t.model).then((function(e){console.log(e),t.$gMessage({title:e.data.msg,duration:2e3,type:"success"}),-1!=e.data.msg.indexOf("取消点赞")?t.$set(t.model,"like",t.model.like-1):-1!=e.data.msg.indexOf("点赞成功")&&t.$set(t.model,"like",t.model.like+1)}))},handleClickShareQQKJ:function(){var t=this,e={url:"http://www.tyq121.top"+t.$route.fullPath,showcount:"1",desc:"",summary:"",title:t.model.title,site:"",pics:"",style:"203",width:98,height:22},i=[];for(var a in e)i.push(a+"="+encodeURIComponent(e[a]||""));var l="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+i.join("&");window.open(l)},handleClickShareWB:function(){var t=this,e={count:"1",url:"http://www.tyq121.top"+t.$route.fullPath,appkey:"",title:t.model.title+"(分享自@Gem_01)",pic:"",ralateUid:"",language:"zh_cn"},i=[];for(var a in e)i.push(a+"="+encodeURIComponent(e[a]||""));var l="http://service.weibo.com/share/share.php?"+i.join("&");window.open(l)},handleClickShare:function(){var t=this,e={url:"http://www.tyq121.top"+t.$route.fullPath,title:"js实现第三方平台分享功能",summary:"",pics:"http://localhost:3000/upload/u=4018704012,1354106016&fm=26&gp=0.jpg",site:"baidu",desc:""},i=[];for(var a in e)i.push(a+"="+encodeURIComponent(e[a]||""));var l="https://connect.qq.com/widget/shareqq/index.html?"+i.join("&");window.open(l);var n=" http://connect.qq.com/widget/shareqq/index.html?summary=js分享到qq好友测试&url=http://www.tyq121.top";window.open(n,"newwindow"),console.log(t.$route)},handleGetArticleColumn:function(){var t=this;t.$http.get("/getArticleColumn?articleid=".concat(t.$route.query.articleid)).then((function(e){console.log(e),t.articleColumn=e.data.res,t.handleAddArticleCount()}))}}},s=c,r=(i("0afb"),i("2877")),d=Object(r["a"])(s,a,l,!1,null,"8c881e0c",null);e["default"]=d.exports},"0afb":function(t,e,i){"use strict";i("cc1f")},cc1f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-904122ba.a04a8fe7.js.map