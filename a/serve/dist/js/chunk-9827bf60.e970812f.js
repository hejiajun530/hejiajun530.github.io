(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9827bf60"],{"47cd":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("div",{staticClass:"login-box positionCenter"},[e._m(0),r("div",{staticClass:"login-box-form text-left"},[r("div",{staticClass:"login-box-form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("p",[e._v(e._s(e.usernameMsg))])]),r("div",{staticClass:"login-box-form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("p",[e._v(e._s(e.passwordMsg))])]),r("div",{staticClass:"login-box-form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:e.repassword},on:{input:function(t){t.target.composing||(e.repassword=t.target.value)}}}),r("p",[e._v(e._s(e.repasswordMsg))])]),r("div",{staticClass:"login-box-form-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("p",[e._v(e._s(e.emailMsg))])]),r("div",{staticClass:"login-box-form-button  text-center",on:{click:e.handleClickRegist}},[e._v("注册")]),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("去登录")])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-box-title"},[r("h2",[e._v("REGIST")]),r("h4",[e._v("注册")])])}],n=(r("498a"),{data:function(){return{randomNum:"",username:"",password:"",repassword:"",email:"",usernameMsg:"",passwordMsg:"",repasswordMsg:"",emailMsg:""}},methods:{handleClickRegist:function(){var e=this;if(""==e.username.trim()||0==e.username.trim().length||null==e.username.trim())return e.usernameMsg="用户名不能为空!",!1;if(e.username.trim().length<2||e.username.trim().length>10)return e.usernameMsg="用户名的长度为2-10位!",!1;if(e.usernameMsg="",""==e.password.trim()||0==e.password.trim().length||null==e.password.trim())return e.passwordMsg="密码不能为空!",!1;if(e.password.trim().length<6||e.password.trim().length>16)return e.passwordMsg="密码的长度为6-16位!",!1;if(e.passwordMsg="",""==e.repassword.trim()||0==e.repassword.trim().length||null==e.repassword.trim())return e.repasswordMsg="确认密码不能为空!",!1;if(e.password!=e.repassword)return e.repasswordMsg="两次密码不一致!",!1;e.repasswordMsg="";var t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]/;if(""==e.email.trim()||0==e.email.trim().length||null==e.email.trim())return e.emailMsg="邮箱不能为空!",!1;if(!t.test(e.email))return e.emailMsg="邮箱格式不正确!",!1;e.emailMsg="";var r={username:e.username,password:e.password,email:e.email};e.$http.post("/regist",r).then((function(t){console.log(t),t.data.flag?(e.$gMessage({title:t.data.msg,duration:2e3,type:"success"}),e.$router.push("/login")):e.$gMessage({title:t.data.msg,duration:2e3,type:"error"})}))}},created:function(){},mounted:function(){}}),i=n,o=(r("c7b1"),r("2877")),u=Object(o["a"])(i,s,a,!1,null,"fced4964",null);t["default"]=u.exports},"498a":function(e,t,r){"use strict";var s=r("23e7"),a=r("58a8").trim,n=r("c8d2");s({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var s=r("1d80"),a=r("5899"),n="["+a+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),u=function(e){return function(t){var r=String(s(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},c7b1:function(e,t,r){"use strict";r("f383")},c8d2:function(e,t,r){var s=r("d039"),a=r("5899"),n="​᠎";e.exports=function(e){return s((function(){return!!a[e]()||n[e]()!=n||a[e].name!==e}))}},f383:function(e,t,r){}}]);
//# sourceMappingURL=chunk-9827bf60.e970812f.js.map