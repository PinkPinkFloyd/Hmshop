(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"3b08":function(t,n,o){},"47ab":function(t,n,o){"use strict";o.r(n);var e=o("9302"),r=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=r.a},9302:function(t,n,o){"use strict";(function(t){function e(t){return i(t)||a(t)||u(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){if(t){if("string"===typeof t)return s(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return s(t)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){o.e("components/goodslist/GoodsList").then(function(){return resolve(o("93e7"))}.bind(null,o)).catch(o.oe)},f={data:function(){return{hotGoods:[],pagenum:1}},components:{GoodsList:c},methods:{getGoods:function(){var t=this;this.$myRequest({url:"/api/public/v1/goods/search?"+this.pagenum}).then((function(n){var o;(o=t.hotGoods).push.apply(o,e(n.data.message.goods))}))},goIndexDetail:function(n){t.navigateTo({url:"../indexDetail/indexDetail?goods_id="+n})}},onLoad:function(){this.getGoods()},onReachBottom:function(){this.pagenum++,this.getGoods()},onPullDownRefresh:function(){var n=this;this.hotGoods=[],this.pagenum=1,setTimeout((function(){n.getGoods(),1==n.pagenum&&t.stopPullDownRefresh()}),1e3)}};n.default=f}).call(this,o("543d")["default"])},a9e7:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},f07a:function(t,n,o){"use strict";o.r(n);var e=o("a9e7"),r=o("47ab");for(var u in r)"default"!==u&&function(t){o.d(n,t,(function(){return r[t]}))}(u);o("f444");var a,i=o("f0c5"),s=Object(i["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=s.exports},f444:function(t,n,o){"use strict";var e=o("3b08"),r=o.n(e);r.a},fb39:function(t,n,o){"use strict";(function(t){o("10fd");e(o("66fd"));var n=e(o("f07a"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])}},[["fb39","common/runtime","common/vendor"]]]);