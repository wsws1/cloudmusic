(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"02b5":function(t,e,a){},"0854":function(t,e,a){"use strict";a.r(e);var n=a("7c74"),c=a("cf0d");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("ed72");var o=a("2877"),i=Object(o["a"])(c["default"],n["a"],n["b"],!1,null,"59006e14",null);e["default"]=i.exports},"4c7d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("668e")),c=s(a("a0d0"));function s(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{title:"",account:"",password:""}},components:{mInput:c.default},methods:{register:function(){if(this.account.length<3||!~this.account.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password};n.default.addUser(e),t.showToast({title:"注册成功",complete:function(){t.navigateBack({delta:1})}})}},clearAccount:function(t){this.account=t}}};e.default=o}).call(this,a("6e42")["default"])},"7c74":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"top"},[a("image",{staticClass:"logo",attrs:{src:"../../static/logof.png"}}),a("view",[a("text",{staticClass:"title"},[t._v(t._s(t.title))])])]),a("view",{staticClass:"uni-card"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("m-input",{staticClass:"m-input",attrs:{account:t.account,type:"text",clearable:"",focus:"",placeholder:"邮箱",eventid:"4d3473e8-0",mpcomid:"4d3473e8-0"},on:{clearAccount:function(e){t.clearAccount(e)}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("view",{staticClass:"input-row"},[a("m-input",{attrs:{type:"password",displayable:"",placeholder:"密码",eventid:"4d3473e8-1",mpcomid:"4d3473e8-1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"4d3473e8-2"},on:{tap:t.register}},[t._v("注册")])],1)])])},c=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return c})},ba2e:function(t,e,a){"use strict";a("cd3a");var n=s(a("b0ce")),c=s(a("0854"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(c.default))},cf0d:function(t,e,a){"use strict";a.r(e);var n=a("4c7d"),c=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=c.a},ed72:function(t,e,a){"use strict";var n=a("02b5"),c=a.n(n);c.a}},[["ba2e","common/runtime","common/vendor"]]]);