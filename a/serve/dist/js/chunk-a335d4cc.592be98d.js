(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a335d4cc"],{"021a":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),s=n("17c2"),c=n("9112");for(var o in a){var l=i[o],r=l&&l.prototype;if(r&&r.forEach!==s)try{c(r,"forEach",s)}catch(m){r.forEach=s}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),s=n("ae40"),c=a("forEach"),o=s("forEach");t.exports=c&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"289e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment"},[i("div",{staticClass:"comment-post text-left"},[i("div",{staticClass:"comment-post-login d-flex jc-center ai-center pointSB"},[t.tyqUser&&t.tyqToken?i("div",[t.tyqUser&&t.tyqUser.avator?i("img",{attrs:{src:t.tyqUser.avator}}):i("img",{attrs:{src:n("cf05")}})]):i("span",{on:{click:function(e){return t.$router.push("/login")}}},[t._v("登录")])]),i("div",{staticClass:"comment-post-textarea"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"既然来了，就说几句吧..."},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),i("div",{staticClass:"comment-post-make d-flex jc-between ai-center"},[i("div",{staticClass:"d-flex jc-start ai-center"},[t._l(t.imglist,(function(e,n){return i("img",{key:e.id,attrs:{src:e},on:{click:function(e){return t.imglist.splice(n,1)}}})})),t.imglist.length<3?i("g-upload",{attrs:{title:"点击图片可以删除列表中的图片"},on:{"g-uploadList":t.handleGetUploadList}}):t._e()],2),i("div",{staticClass:"comment-post-make-btn pointSB",on:{click:t.handleClickPostComment}},[t._v("畅言一下")])]),i("div",{staticClass:"comment-post-list d-flex jc-between ai-end"},[i("div",{staticClass:"comment-post-list-title"},[t._v("评论")]),i("div",{staticClass:"comment-post-list-sum"},[i("span",[t._v(t._s(t.commentSum))]),t._v("条评论")])]),i("commentlist",{ref:"commentlist",attrs:{commentTitle:"最新评论",http:"getCommentListById"}})],1)])},a=[],s=(n("4160"),n("a9e3"),n("159b"),n("decf")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentlist"},[t.commentlist.length<=0?n("div",{staticClass:"commentlist-nocomment text-center"},[t._v("还没有评论，快去评论吧~")]):t._e(),t.commentlist.length>0?[n("div",{staticClass:"commentlist-title"},[t._v(t._s(t.commentTitle))]),t._l(t.commentlist,(function(e){return n("div",{key:e.id,staticClass:"commentlist-item d-flex jc-start ai-start"},[n("div",{staticClass:"commentlist-item-avator"},[n("img",{attrs:{src:e.avator}})]),n("div",{staticClass:"commentlist-item-box flex-1"},[n("div",{staticClass:"commentlist-item-box-nametime d-flex jc-between ai-center"},[n("div",{staticClass:"commentlist-item-box-nametime-username"},[t._v(t._s(e.username))]),n("div",{staticClass:"commentlist-item-box-nametime-time"},[t._v(t._s(t.toymd(e.createTime,"yy-mm-dd hh:mm:ss")))])]),n("div",{staticClass:"commentlist-item-box-comment",domProps:{innerHTML:t._s(e.comment)}}),n("div",{staticClass:"commentlist-item-box-like d-flex jc-end ai-center pointSB",on:{click:function(n){return t.handleClickAddLike(e)}}},[n("i",{staticClass:"iconfont icon-dianzan"}),n("div",[t._v(t._s(e.like?e.like:0))])])])])})),n("div",{staticClass:"commentlist-pageing"},[n("g-pageing",{attrs:{num:t.total},on:{"g-getpage":t.handleClickChangePage}})],1)]:t._e()],2)},o=[],l=(n("c975"),n("56ad")),r={props:{http:{default:"getCommentListById"},commentTitle:{type:String,default:"最新评论"}},components:{"g-pageing":l["a"]},data:function(){return{query:{page:1,num:2,articleid:""},total:0,commentlist:[]}},created:function(){var t=this;t.handleClickChangePage(1)},mounted:function(){},methods:{test:function(t){console.log(t,"test")},handleClickAddLike:function(t){var e=this;if(!JSON.parse(localStorage.getItem("tyqUser")))return e.$gMessage({title:"请先登录!",duration:2e3,type:"error"}),!1;var n=JSON.parse(localStorage.getItem("tyqUser")).userid;e.$set(t,"userid",n),e.$set(t,"status",1),e.$http.post("/addCLike",t).then((function(n){console.log(n),e.$gMessage({title:n.data.msg,duration:2e3,type:"success"}),-1!=n.data.msg.indexOf("取消点赞")?e.$set(t,"like",t.like-1):-1!=n.data.msg.indexOf("点赞成功")&&e.$set(t,"like",t.like+1)}))},handleClickChangePage:function(t){var e=this;e.$set(e.query,"page",t),e.$set(e.query,"articleid",e.$parent.articleid),e.$http.post("/".concat(e.http),e.query).then((function(t){e.commentlist=t.data.res,console.log(t.data.res),e.commentlist.length&&e.commentlist[0].total&&(e.total=Math.ceil(e.commentlist[0].total/e.query.num))}))}}},m=r,d=(n("6f56"),n("2877")),u=Object(d["a"])(m,c,o,!1,null,"9bcbf9e2",null),g=u.exports,f=n("9c9e"),p={mixins:[f["a"]],components:{"g-upload":s["a"],commentlist:g},props:{articleid:{type:Number}},data:function(){return{content:"",imglist:[],commentlist:[],commentSum:0}},created:function(){var t=this;t.handleGetCommentSum()},mounted:function(){},methods:{handleGetUploadList:function(t){var e=this,n=new FormData;n.append("file",t),e.$http.post("/upload",n).then((function(t){e.imglist.push(t.data.url),console.log(e.imglist)}))},handleGetCommentSum:function(){var t=this;t.$http.get("/getCommentSum?articleid=".concat(t.articleid)).then((function(e){t.commentSum=e.data.res[0].commentSum}))},handleClickPostComment:function(){var t=this;if(!t.tyqUser&&!t.tyqToken)return t.$gMessage({title:"请先登录!",duration:2e3,type:"error"}),!1;if(!t.content)return t.$gMessage({title:"内容不能为空!",duration:2e3,type:"error"}),!1;var e="";t.imglist.forEach((function(t,n){e+="<img src='".concat(t,"'/>")}));var n="<p>".concat(t.content,"</p>")+e,i={articleid:t.articleid,userid:t.tyqUser.userid,comment:n};console.log(i),t.$http.post("/addComment",i).then((function(e){console.log(e),1==e.data.res.affectedRows&&(t.$gMessage({title:"评论成功!",duration:2e3}),t.$refs.commentlist.handleClickChangePage(1))}))}}},v=p,h=(n("981c"),Object(d["a"])(v,i,a,!1,null,"b0f64c2c",null));e["a"]=h.exports},"3e1c":function(t,e,n){"use strict";n("f0e4")},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"56ad":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageing"},[t.index>1?n("div",{staticClass:"pageing-prev pageing-box",on:{click:function(e){return t.handleClickChangeNum("prev")}}},[t._v("<")]):t._e(),t._l(t.num,(function(e){return[e<=2||e>=t.num-1?n("div",{key:e,staticClass:"pageing-num pageing-box",class:e==t.index?"active":"",on:{click:function(n){return t.handleClickChangeNum(e)}}},[t._v(t._s(e))]):t._e(),t.num>=5&&3==e?n("div",{key:e,staticClass:"pageing-num pageing-box",class:t.index>2&&t.index<t.num-1?"active":""},[t._v(t._s(e+"/"+t.num))]):t._e()]})),t.index<t.num?n("div",{staticClass:"pageing-next pageing-box",on:{click:function(e){return t.handleClickChangeNum("next")}}},[t._v(">")]):t._e()],2)},a=[],s={props:{num:{default:1}},data:function(){return{index:1}},methods:{handleClickChangeNum:function(t){var e=this;"prev"==t?e.index-=1:"next"==t?e.index+=1:e.index=t,e.$emit("g-getpage",e.index)}}},c=s,o=(n("3e1c"),n("2877")),l=Object(o["a"])(c,i,a,!1,null,"6a1ce0f3",null);e["a"]=l.exports},"6f56":function(t,e,n){"use strict";n("021a")},"981c":function(t,e,n){"use strict";n("c7d1")},c7d1:function(t,e,n){},f0e4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a335d4cc.592be98d.js.map