(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{3722:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header-icon-search"},["true"==t.GoBack?a("span",[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}})],1):t._e(),"ele.me"==t.GoBack?a("span",{staticClass:"span"},[t._v("ele.me")]):t._e(),t._t("search")],2),a("div",{staticClass:"address"},[t.Address?a("span",[t._v(t._s(t.Address.cities))]):t._e(),t._t("pois"),"seek"==t.Address?a("span",[t._v("搜索")]):t._e(),t._t("order"),t._t("login"),t._t("profile"),t._t("profile_info"),t._t("download"),t._t("infousername"),t._t("addContent"),t._t("addressadd"),t._t("addDetail"),t._t("forget"),t._t("confirm")],2),a("div",{staticClass:"header-icon-user"},[t._t("head"),t.Head?a("span",[t.usercheack?a("router-link",{attrs:{to:"/profile"}},[a("van-icon",{staticClass:"el-icon-user",attrs:{name:"contact"}})],1):a("router-link",{attrs:{to:"/login"}},[a("span",{staticStyle:{color:"#fff"}},[t._v("登录|注册")])])],1):t._e(),t._t("addRight")],2)])},n=[],c=(a("2f62"),{props:["GoBack","Address","Head"],data:function(){return{usercheack:""}},computed:{},mounted:function(){this.usercheack=this.$store.state.user.user_check}}),i=c,o=(a("6106"),a("2877")),r=Object(o["a"])(i,s,n,!1,null,"7e94d92e",null);e["a"]=r.exports},"5d68":function(t,e,a){},6106:function(t,e,a){"use strict";var s=a("e1a2"),n=a.n(s);n.a},9955:function(t,e,a){"use strict";var s=a("5d68"),n=a.n(s);n.a},e1a2:function(t,e,a){},ede4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Login"},[a("Header",{attrs:{GoBack:"true"}},[a("span",{attrs:{slot:"login"},slot:"login"},[t._v("密码登录")])]),a("main",{staticClass:"main"},[a("div",{staticClass:"logininpit"},[a("section",{staticClass:"input_container"},[a("mt-field",{attrs:{placeholder:"账号"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),a("section",{staticClass:"input_container"},[a("mt-field",{attrs:{type:t.type,placeholder:"密码"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}},[a("mt-switch",{on:{change:function(e){return t.changeCheck()}},model:{value:t.check,callback:function(e){t.check=e},expression:"check"}})],1)],1),a("section",{staticClass:"input_container"},[a("mt-field",{attrs:{type:"",placeholder:"验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[a("div",{staticClass:"input-change"},[t.codeimg?a("img",{staticStyle:{background:"#fff"},attrs:{src:t.codeimg,height:"0.42rem",width:"0.98rem"}}):t._e(),a("div",{staticClass:"change_img",on:{click:function(e){return t.begImg()}}},[a("p",[t._v("看不清")]),a("span",[t._v("换一张")])])])])],1)]),a("p",{staticClass:"login_tips"},[t._v("温馨提示：未注册过的账号，登录时将自动注册")]),a("p",{staticClass:"login_tips"},[t._v("注册过的用户可凭账号密码登录")]),a("div",{staticClass:"login_container"},[a("mt-button",{staticClass:"button",attrs:{type:"default"},on:{click:function(e){return t.Submit()}}},[t._v("登录")])],1),t._m(0)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"to_forget"},[a("a",{attrs:{href:"#"}},[t._v("重置密码？")])])}],c=a("3722"),i=a("2427"),o=a.n(i);o.a.defaults.withCredentials=!0;var r={data:function(){return{user:"",pass:"",code:"",codeimg:"",check:!0,type:"password"}},components:{Header:c["a"]},mounted:function(){this.begImg()},methods:{changeCheck:function(){1==this.check?this.type="password":this.type="text"},begImg:function(){var t=this;o.a.post("http://elm.cangdu.org/v1/captchas").then(function(e){t.codeimg=e.data.code})},Submit:function(){var t=this;o.a.post("http://elm.cangdu.org/v2/login",{captcha_code:this.code,password:this.pass,username:this.user}).then(function(e){if(0==e.data.status)t.$dialog.alert({message:e.data.message});else{var a={user_id:e.data.id,user_check:!0,user_name:e.data.username,avatar:e.data.avatar};t.$store.commit("userSetId",a),t.$router.go(-1)}})}}},d=r,l=(a("9955"),a("2877")),u=Object(l["a"])(d,s,n,!1,null,"590bba3b",null);e["default"]=u.exports}}]);
//# sourceMappingURL=Login.fc1f23fe.js.map