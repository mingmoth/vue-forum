(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5168a461"],{1911:function(t,e,r){"use strict";r("fc07")},"1a27":function(t,e,r){},"4bcc":function(t,e,r){},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"delete-comment":t.deleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"create-comment":t.createComment}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge bg-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFavorited(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFavorited(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteLiked(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addLiked(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=r("4cce"),m=r("2fa3"),d={name:"RestaurantDetail",props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorited:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant.isFavorited=!0,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法將餐廳加入最愛--".concat(r.t0.message)}),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorited:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant.isFavorited=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法將餐廳移除最愛--".concat(r.t0.message)}),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLiked:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant.isLiked=!0,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法對餐廳按讚--".concat(r.t0.message)}),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLiked:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant.isLiked=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法對餐廳移除讚--".concat(r.t0.message)}),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},l=d,p=(r("f7c7"),r("2877")),f=Object(p["a"])(l,o,c,!1,null,"612c6d92",null),b=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.deleteComment(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.User?e.User.name:"匿名留言")+" ")])]),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.updatedAt))+" ")])]),r("hr")])}))],2)},g=[],h={create:function(t){var e=t.restaurantId,r=t.text;return m["b"].post("/comments",{restaurantId:e,text:r})},delete:function(t){var e=t.commentId;return m["b"].delete("/comments/".concat(e))}},k=r("2708"),w=r("2f62"),C={name:"",mixins:[k["b"]],props:{restaurantComments:{type:Array,required:!0}},data:function(){return{isProcessing:!1}},computed:Object(i["a"])({},Object(w["b"])(["currentUser"])),watch:{restaurantComments:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{deleteComment:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,h.delete({commentId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.$emit("delete-comment",t),m["a"].fire({icon:"success",title:"已成功刪除評論"}),e.isProcessing=!1,r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法刪除評論--".concat(r.t0.message)}),e.isProcessing=!1,console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},x=C,_=(r("e3c8"),Object(p["a"])(x,v,g,!1,null,"e4ddb92a",null)),y=_.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.createComment(t.restaurantId,t.comment)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" Submit ")])])])},O=[],j=(r("a9e3"),r("ec26")),I={name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{comment:"",isProcessing:!1}},methods:{createComment:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.comment){e.next=4;break}return m["a"].fire({icon:"warning",title:"請協助填寫評論"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,h.create({restaurantId:t.restaurantId,text:t.comment});case 7:if(r=e.sent,a=r.data,"success"===a.status){e.next=11;break}throw new Error(a.message);case 11:t.$emit("create-comment",{commentId:Object(j["a"])(),restaurantId:t.restaurantId,comment:t.comment}),m["a"].fire({icon:"success",title:"已成功新增評論"}),t.comment="",t.isProcessing=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),m["a"].fire({icon:"error",title:"無法新增評論--".concat(e.t0.message)}),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}},P=I,L=(r("1911"),Object(p["a"])(P,R,O,!1,null,"4bc9a3cb",null)),D=L.exports,F=r("c4c3"),E={name:"Restaurant",components:{RestaurantDetail:b,RestaurantComments:y,CreateComment:D},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},created:function(){var t=this.$route.params.id;this.fethRestaurant({restaurantId:t})},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fethRestaurant({restaurantId:a}),r()},computed:Object(i["a"])({},Object(w["b"])(["currentUser"])),methods:{fethRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,d,l,p,f,b,v,g,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.restaurantId,r.prev=1,r.next=4,F["a"].getRestaurant({restaurantId:a});case 4:n=r.sent,console.log(n),s=n.data,i=s.isFavorited,o=s.isLiked,c=n.data.restaurant,u=c.id,d=c.name,l=c.Category,p=c.image,f=c.opening_hours,b=c.tel,v=c.address,g=c.description,h=c.Comments,e.restaurant={id:u,name:d,categoryName:l?l.name:"未分類",image:p,openingHours:f,tel:b,address:v,description:g,isFavorited:i,isLiked:o},e.restaurantComments=h,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](1),m["a"].fire({icon:"error",title:"無法取得餐廳資訊，請稍後再試"}),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},deleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},createComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.comment;this.restaurantComments.push({id:e,RestaurantId:r,text:a,createdAt:new Date,User:{id:this.currentUser.id,name:this.currentUser.name}})}}},U=E,$=Object(p["a"])(U,a,n,!1,null,null,null);e["default"]=$.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),m=r("577e"),d=r("9bf2").f,l=r("e893"),p=s.Symbol,f=p&&p.prototype;if(n&&c(p)&&(!("description"in f)||void 0!==p().description)){var b={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:m(arguments[0]),e=u(f,this)?new p(t):void 0===t?p():p(t);return""===t&&(b[e]=!0),e};l(v,p),v.prototype=f,f.constructor=v;var g="Symbol(test)"==String(p("test")),h=i(f.toString),k=i(f.valueOf),w=/^Symbol\((.*)\)[^)]+$/,C=i("".replace),x=i("".slice);d(f,"description",{configurable:!0,get:function(){var t=k(this),e=h(t);if(o(b,t))return"";var r=g?x(e,7,-1):C(e,w,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}},e3c8:function(t,e,r){"use strict";r("1a27")},f7c7:function(t,e,r){"use strict";r("4bcc")},fc07:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5168a461.83ff242f.js.map