(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b0f70d4"],{"099c":function(t,e,a){},"15a8":function(t,e,a){"use strict";a("099c")},"9cab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("最新動態")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("LatestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("LatestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("1da1"),i=(a("96cf"),a("8bb1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新餐廳")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(t._s(e.name))]),t._v("   "),a("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),a("p",[t._v(t._s(e.description))]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},o=[],u=a("2708"),l={name:"LatestRestaurants",mixins:[u["b"]],props:{restaurants:{type:Array,required:!0}}},d=l,m=a("2877"),v=Object(m["a"])(d,c,o,!1,null,null,null),_=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新評論")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.RestaurantId}}}},[t._v(" "+t._s(e.Restaurant?e.Restaurant.name:"匿名餐廳")+" ")])],1),a("p",[t._v(t._s(e.text))]),t._v("by "),a("router-link",{attrs:{to:{name:"user",params:{id:e.UserId}}}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")],1)})),0)])},p=[],h={name:"LatestComments",mixins:[u["b"]],props:{comments:{type:Array,required:!0}}},b=h,C=Object(m["a"])(b,f,p,!1,null,null,null),w=C.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],y=(a("15a8"),{}),k=Object(m["a"])(y,g,x,!1,null,"74807b6a",null),L=k.exports,R=a("c4c3"),E=a("2fa3"),O={name:"RestaurantsFeeds",components:{NavTabs:i["a"],LatestRestaurants:_,LatestComments:w,Spinner:L},data:function(){return{restaurants:[],comments:[],isLoading:!0}},created:function(){this.fetchFeeds()},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R["a"].getRestaurantsFeeds();case 3:if(a=e.sent,"OK"===a.statusText){e.next=6;break}throw new Error;case 6:console.log(a),s=a.data,r=s.restaurants,n=s.comments,t.restaurants=r,t.comments=n,t.isLoading=!1,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](0),E["a"].fire({icon:"error",title:"無法取得餐廳最新動態"}),t.isLoading=!1,console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}},j=O,$=Object(m["a"])(j,s,r,!1,null,null,null);e["default"]=$.exports}}]);
//# sourceMappingURL=chunk-9b0f70d4.8d7cab86.js.map