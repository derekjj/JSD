(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{402:function(t,e,n){"use strict";var r=n(13),c=n(99).findIndex,d=n(116),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),d(o)},431:function(t,e,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("0df11944",content,!0,{sourceMap:!1})},509:function(t,e,n){"use strict";n(431)},510:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,".project-details[data-v-14efd52e]{margin-top:40px}.project-details img[data-v-14efd52e]{display:block;margin-bottom:20px}.project-details p[data-v-14efd52e]{margin-bottom:10px}",""]),r.locals={},t.exports=r},532:function(t,e,n){"use strict";n.r(e);n(6),n(78),n(4),n(26),n(20),n(1),n(8),n(9),n(7),n(5);var r=n(23),c=n(0),d=(n(59),n(142),n(402),n(74));function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={data:function(){return{selectedItemId:null,selectedItem:null}},computed:l(l({},Object(d.b)(["jsd"])),{},{canNavigateBack:function(){var t=this;return null!==this.selectedItemId&&this.jsd.findIndex((function(e){return e.id===t.selectedItemId}))>0},canNavigateForward:function(){var t=this;return null!==this.selectedItemId&&this.jsd.findIndex((function(e){return e.id===t.selectedItemId}))<this.jsd.length-1}}),methods:{loadSelectedItem:function(){var t=this;this.selectedItem=this.jsd.find((function(e){return e.id===t.selectedItemId}))},navigateItem:function(t){var e=this,n=this.jsd.findIndex((function(t){return t.id==e.selectedItemId}));"back"===t&&n>0?this.$router.push({path:"/projects/"+this.jsd[n-1].id}):"forward"===t&&n<this.jsd.length-1&&this.$router.push({path:"/projects/"+this.jsd[n+1].id}),this.selectedItem=this.jsd.find((function(t){return t.id===e.selectedItemId}))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.selectedItemId=t.$route.params.id||0,t.selectedItem=t.jsd.find((function(e){return e.id==t.selectedItemId}));case 2:case"end":return e.stop()}}),e)})))()},watch:{jsd:function(){var t=this;null!==this.selectedItemId&&(this.selectedItem=this.jsd.find((function(e){return e.id==t.selectedItemId})))}}},v=(n(509),n(49)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-4"},[t.selectedItem?e("div",{staticClass:"project-details"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-secondary",attrs:{disabled:!t.canNavigateBack},on:{click:function(e){return t.navigateItem("back")}}},[t._v("\n\t\t\t\t\tBack\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"col text-center"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedItemId,expression:"selectedItemId"}],staticClass:"form-select form-control",attrs:{id:"itemSelector"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedItemId=e.target.multiple?n:n[0]},t.loadSelectedItem]}},t._l(t.jsd,(function(n){return e("option",{key:n.id,domProps:{value:n.id}},[t._v("\n\t\t\t\t\t\t"+t._s(n.company)+"\n\t\t\t\t\t\t"+t._s(n.project&&n.company?" - ":"")+"\n\t\t\t\t\t\t"+t._s(n.project)+"\n\t\t\t\t\t")])})),0)]),t._v(" "),e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-secondary",attrs:{disabled:!t.canNavigateForward},on:{click:function(e){return t.navigateItem("forward")}}},[t._v("\n\t\t\t\t\tForward\n\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4 text-center justify-content-center"},[e("img",{attrs:{src:t.selectedItem.image,alt:"Project Image",width:"100%"}}),t._v(" "),t.selectedItem.url?e("span",[e("a",{attrs:{href:t.selectedItem.url,target:"_blank"}},[t._v(t._s(t.selectedItem.url))])]):t._e()]),t._v(" "),e("div",{staticClass:"col align-content-center"},[t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t.selectedItem.tech.length>1?e("span",[e("strong",[t._v("Tech:")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.selectedItem.tech.join(", "))+"\n\t\t\t\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",[e("strong",[t._v("Description:")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.selectedItem.description)+"\n\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t.selectedItem.about?e("p",[e("strong",[t._v("About:")]),t._v(" "+t._s(t.selectedItem.about)+"\n\t\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"row"})]):t._e()])}),[],!1,null,"14efd52e",null);e.default=component.exports}}]);