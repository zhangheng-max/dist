(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Profile"],{"0e1b":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("van-tabbar",{attrs:{route:""}},[a("van-tabbar-item",{attrs:{icon:"home-o",to:{path:"/msite",query:{geohash:this.geohash}}}},[t._v("外卖")]),a("van-tabbar-item",{attrs:{icon:"search",to:"/search/"+this.geohash}},[t._v("搜索")]),a("van-tabbar-item",{attrs:{icon:"friends-o",to:"/order"}},[t._v("订单")]),a("van-tabbar-item",{attrs:{icon:"setting-o",to:"/profile"}},[t._v("我的")])],1)],1)},s=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var l={data:function(){return{}},computed:c({},Object(n["b"])(["geohash"])),mounted:function(){}},f=l,d=(a("797d"),a("2877")),u=Object(d["a"])(f,r,s,!1,null,"74b761a8",null);e["a"]=u.exports},"11e9":function(t,e,a){var r=a("52a7"),s=a("4630"),i=a("6821"),n=a("6a99"),o=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=i(t),e=n(e,!0),c)try{return l(t,e)}catch(a){}if(o(t,e))return s(!r.f.call(t,e),t[e])}},3722:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"header-icon-search"},["true"==t.GoBack?a("span",[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}})],1):t._e(),"ele.me"==t.GoBack?a("span",{staticClass:"span"},[t._v("ele.me")]):t._e(),t._t("search")],2),a("div",{staticClass:"address"},[t.Address?a("span",[t._v(t._s(t.Address.cities))]):t._e(),t._t("pois"),"seek"==t.Address?a("span",[t._v("搜索")]):t._e(),t._t("order"),t._t("login"),t._t("profile"),t._t("profile_info"),t._t("download"),t._t("infousername"),t._t("addContent"),t._t("addressadd"),t._t("addDetail"),t._t("forget"),t._t("confirm")],2),a("div",{staticClass:"header-icon-user"},[t._t("head"),t.Head?a("span",[t.usercheack?a("router-link",{attrs:{to:"/profile"}},[a("van-icon",{staticClass:"el-icon-user",attrs:{name:"contact"}})],1):a("router-link",{attrs:{to:"/login"}},[a("span",{staticStyle:{color:"#fff"}},[t._v("登录|注册")])])],1):t._e(),t._t("addRight")],2)])},s=[],i=(a("2f62"),{props:["GoBack","Address","Head"],data:function(){return{usercheack:""}},computed:{},mounted:function(){this.usercheack=this.$store.state.user.user_check}}),n=i,o=(a("6106"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,"7e94d92e",null);e["a"]=c.exports},"3b42":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profile"},[a("Header",{attrs:{GoBack:"true"}},[a("span",{attrs:{slot:"profile"},slot:"profile"},[t._v("我的")])]),a("div",{staticClass:"main"},[a("section",{staticClass:"profile-number",on:{click:function(e){return t.GoLogin()}}},[a("div",{staticClass:"privateImage-svg"},[this.$store.state.user.avatar?a("img",{attrs:{src:"//elm.cangdu.org/img/"+this.$store.state.user.avatar,alt:""}}):a("svg",{attrs:{viewBox:"0 0 122 122",id:"avatar-default"}},[a("path",{attrs:{fill:"#DCDCDC","fill-rule":"evenodd",d:"M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"}})])]),a("div",{staticClass:"user-info"},[this.$store.state.user.user_name?a("p",[t._v(t._s(this.$store.state.user.user_name))]):a("p",[t._v("登录/注册")]),a("p",[a("span",{staticClass:"user-icon"},[a("svg",{attrs:{viewBox:"0 0 655 1024",id:"mobile"}},[a("path",{attrs:{d:"M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"}})])]),a("span",{staticClass:"icon-mobile-number"},[t._v("暂无绑定手机号")])])]),a("span",{staticClass:"arrow"},[a("van-icon",{attrs:{name:"arrow",color:"#fff"}})],1)]),a("section",{staticClass:"info-data"},[a("ul",[a("li",[a("span",{staticClass:"info-data-top"},[t.info?a("b",{staticStyle:{color:"#f90"}},[t._v(t._s(t.info.balance))]):t._e(),0==t.info.length?a("b",{staticStyle:{color:"#f90"}},[t._v("0.00")]):t._e(),a("span",[t._v("元")])]),a("span",{staticClass:"info-data-bottom"},[t._v("我的余额")])]),a("li",[a("span",{staticClass:"info-data-top"},[t.info?a("b",{staticStyle:{color:"#ff5f3e"}},[t._v(t._s(t.info.gift_amount))]):t._e(),0==t.info.length?a("b",{staticStyle:{color:"#ff5f3e"}},[t._v("0")]):t._e(),a("span",[t._v("个")])]),a("span",{staticClass:"info-data-bottom"},[t._v("我的优惠")])]),a("li",[a("span",{staticClass:"info-data-top"},[t.info?a("b",{staticStyle:{color:"#6ac20b"}},[t._v(t._s(t.info.point))]):t._e(),0==t.info.length?a("b",{staticStyle:{color:"#6ac20b"}},[t._v("0")]):t._e(),a("span",[t._v("分")])]),a("span",{staticClass:"info-data-bottom"},[t._v("我的积分")])])])]),a("section",{staticClass:"profile-1reTe"},[a("div",{staticClass:"profile-2reTe"},[a("span",{staticClass:"profile-rete-icon"},[a("svg",{attrs:{"data-v-617269a8":"","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 38 38",id:"order"}},[a("g",{attrs:{"data-v-617269a8":"",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{"data-v-617269a8":"",stroke:"#666","stroke-width":"4",mask:"url(#order-regular.41c17f8_b)"}},[a("rect",{attrs:{"data-v-617269a8":"",id:"order-regular.41c17f8_a",width:"38",height:"38",rx:"2"}})]),a("rect",{attrs:{"data-v-617269a8":"",width:"24",height:"2",x:"7",y:"8",fill:"#666",rx:"1"}}),a("rect",{attrs:{"data-v-617269a8":"",width:"20",height:"2",x:"7",y:"17",fill:"#666",rx:"1"}}),a("rect",{attrs:{"data-v-617269a8":"",width:"8",height:"2",x:"7",y:"26",fill:"#666",rx:"1"}})])])]),a("router-link",{staticClass:"myorder-div",attrs:{to:"/order",tag:"div"}},[a("span",[t._v("我的订单")]),a("span",{staticClass:"myorder-div-icon"},[a("van-icon",{attrs:{name:"arrow",color:"rgb(187, 187, 187)"}})],1)])],1),a("div",{staticClass:"profile-2reTe"},[a("span",{staticClass:"profile-rete-icon"},[a("svg",{attrs:{"data-v-0fc4ab7a":"",fill:"#fc7b53"}},[a("use",{attrs:{"data-v-0fc4ab7a":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#point"}})])]),a("div",{staticClass:"myorder-div"},[a("span",[t._v("积分商城")]),a("span",{staticClass:"myorder-div-icon"},[a("van-icon",{attrs:{name:"arrow",color:"rgb(187, 187, 187)"}})],1)])]),a("div",{staticClass:"profile-2reTe"},[a("span",{staticClass:"profile-rete-icon"},[a("svg",{attrs:{"data-v-0fc4ab7a":"",fill:"#ffc636"}},[a("use",{attrs:{"data-v-0fc4ab7a":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#vip"}}),a("svg",{attrs:{viewBox:"0 0 40 40",id:"point"}},[a("path",{attrs:{d:"M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"}})])])]),a("div",{staticClass:"myorder-div"},[a("span",[t._v("饿了么会员卡")]),a("span",{staticClass:"myorder-div-icon"},[a("van-icon",{attrs:{name:"arrow",color:"rgb(187, 187, 187)"}})],1)])])]),a("section",{staticClass:"profile-1reTe"},[a("div",{staticClass:"profile-2reTe"},[a("span",{staticClass:"profile-rete-icon"},[a("svg",{attrs:{"data-v-0fc4ab7a":"",fill:"#4aa5f0"}},[a("use",{attrs:{"data-v-0fc4ab7a":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#service"}},[a("svg",{attrs:{viewBox:"0 0 40 40",id:"service"}},[a("g",{attrs:{id:"service_XMLID_1_"}},[a("path",{attrs:{id:"service_XMLID_6_",d:"M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"}}),a("path",{attrs:{id:"service_XMLID_7_",d:"M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"}}),a("path",{attrs:{id:"service_XMLID_8_",d:"M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"}})]),a("path",{staticClass:"st1",attrs:{d:"M0 0h40v40H0z"}})])])])]),a("div",{staticClass:"myorder-div"},[a("span",[t._v("服务中心")]),a("span",{staticClass:"myorder-div-icon"},[a("van-icon",{attrs:{name:"arrow",color:"rgb(187, 187, 187)"}})],1)])]),a("div",{staticClass:"profile-2reTe"},[a("span",{staticClass:"profile-rete-icon"},[a("svg",{attrs:{"data-v-0fc4ab7a":"",fill:"#3cabff"}},[a("use",{attrs:{"data-v-0fc4ab7a":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#download"}},[a("svg",{attrs:{viewBox:"0 0 40 40",id:"download"}},[a("path",{attrs:{d:"M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"}})])])])]),a("router-link",{staticClass:"myorder-div",attrs:{to:"/download",tag:"div"}},[a("span",[t._v("下载饿了么APP")]),a("span",{staticClass:"myorder-div-icon"},[a("van-icon",{attrs:{name:"arrow",color:"rgb(187, 187, 187)"}})],1)])],1)])]),a("Footer"),a("router-view")],1)},s=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("2f62"),o=a("3722"),c=a("0e1b");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d={data:function(){return{info:[]}},components:{Header:o["a"],Footer:c["a"]},computed:f({},Object(n["b"])(["user_id"])),mounted:function(){this.Userdata()},methods:{GoLogin:function(){""!=this.$store.state.user.user_id?this.$router.push({path:"/profile/info"}):this.$router.push({path:"/login"})},Userdata:function(){var t=this,e=this.$store.state.user.user_id;e&&this.$http.get("http://elm.cangdu.org/v1/user?user_id=".concat(e)).then(function(e){t.info=e.data})}},watch:{$route:function(t,e){"/profile"==t.path&&0==this.$store.state.user.user_id&&(this.info=[])}}},u=d,v=(a("f8bf"),a("2877")),p=Object(v["a"])(u,r,s,!1,null,"31ad9dcd",null);e["default"]=p.exports},"454f":function(t,e,a){a("46a7");var r=a("584a").Object;t.exports=function(t,e,a){return r.defineProperty(t,e,a)}},"456d":function(t,e,a){var r=a("4bf8"),s=a("0d58");a("5eda")("keys",function(){return function(t){return s(r(t))}})},"46a7":function(t,e,a){var r=a("63b6");r(r.S+r.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"5eda":function(t,e,a){var r=a("5ca1"),s=a("8378"),i=a("79e5");t.exports=function(t,e){var a=(s.Object||{})[t]||Object[t],n={};n[t]=e(a),r(r.S+r.F*i(function(){a(1)}),"Object",n)}},6106:function(t,e,a){"use strict";var r=a("e1a2"),s=a.n(r);s.a},"797d":function(t,e,a){"use strict";var r=a("8de7"),s=a.n(r);s.a},"85f2":function(t,e,a){t.exports=a("454f")},"8de7":function(t,e,a){},"8e6e":function(t,e,a){var r=a("5ca1"),s=a("990b"),i=a("6821"),n=a("11e9"),o=a("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,r=i(t),c=n.f,l=s(r),f={},d=0;while(l.length>d)a=c(r,e=l[d++]),void 0!==a&&o(f,e,a);return f}})},9093:function(t,e,a){var r=a("ce10"),s=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"990b":function(t,e,a){var r=a("9093"),s=a("2621"),i=a("cb7c"),n=a("7726").Reflect;t.exports=n&&n.ownKeys||function(t){var e=r.f(i(t)),a=s.f;return a?e.concat(a(t)):e}},ac6a:function(t,e,a){for(var r=a("cadf"),s=a("0d58"),i=a("2aba"),n=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),f=l("iterator"),d=l("toStringTag"),u=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=s(v),h=0;h<p.length;h++){var b,_=p[h],g=v[_],m=n[_],w=m&&m.prototype;if(w&&(w[f]||o(w,f,u),w[d]||o(w,d,_),c[_]=u,g))for(b in r)w[b]||i(w,b,r[b],!0)}},bd86:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var r=a("85f2"),s=a.n(r);function i(t,e,a){return e in t?s()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},e1a2:function(t,e,a){},f1ae:function(t,e,a){"use strict";var r=a("86cc"),s=a("4630");t.exports=function(t,e,a){e in t?r.f(t,e,s(0,a)):t[e]=a}},f8bf:function(t,e,a){"use strict";var r=a("fd87"),s=a.n(r);s.a},fd87:function(t,e,a){}}]);
//# sourceMappingURL=Profile.bf345863.js.map