(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{246:function(t,e,c){"use strict";c.r(e);c(6),c(3),c(2),c(1),c(4);var o=c(0),r=c(59);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var n={data:function(){return{slide:0,sliding:null,loading:!1,post:null,error:null,desc:null,tab:"about"}},created:function(){this.selectProject(),this.project=this.$store.state.projects},watch:{$route:"selectProject"},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["projects"])),methods:{onSlideStart:function(t){this.sliding=null},onSlideEnd:function(t){this.sliding=null},selectProject:function(){var t=this.$route.params.project;void 0!==t&&null!=t||(t=0),this.slide=t}}},d=c(30),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t._m(0),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-2"}),c("div",{staticClass:"col-md-8 m-4"},[c("div",{staticClass:"card"},[c("div",{staticClass:"card-title"},[c("b-carousel",{attrs:{id:"carousel-fade",interval:0,fade:"",controls:"",indicators:"","img-width":"970","img-height":"925"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.projects,(function(e){return c("a",{key:t.projects.id,attrs:{href:e.link}},[c("b-carousel-slide",{attrs:{"img-src":e.image}})],1)})),0),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md float-md-left"},[t._v(t._s(t.projects[t.slide].title))]),c("div",{staticClass:"col-lg float-md-right"},[c("b",[t._v(t._s(t.projects[t.slide].dates))])])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("a",{attrs:{href:t.project.url}},[t._v(t._s(t.project.url))])])])],1),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row"},[c("div",{staticClass:"btn-group btn-group-toggle col-12",attrs:{"data-toggle":"buttons"}},[c("label",{staticClass:"btn btn-success",class:{active:"about"==t.tab}},[c("input",{attrs:{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:""},on:{click:function(e){t.tab="about"}}}),t._v("About")]),c("label",{staticClass:"btn btn-success",class:{active:"tech"==t.tab}},[c("input",{attrs:{type:"radio",name:"options",id:"option2",autocomplete:"off"},on:{click:function(e){t.tab="tech"}}}),t._v("Tech")])])]),c("div",{staticClass:"m-2"},[c("b",[t._v(t._s(t.projects[t.slide].company))])]),"about"==t.tab?c("div",[t._v(t._s(t.projects[t.slide].about)+t._s(t.projects[t.slide].description))]):t._e(),"tech"==t.tab?c("div",t._l(t.projects[t.slide].tech,(function(e){return c("i",[t._v("- "+t._s(e)+" -")])})),0):t._e()])])]),c("div",{staticClass:"col-lg-2"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container col-12"},[e("h1",{staticClass:"text-center"},[this._v("Projects")])])}],!1,null,null,null);e.default=component.exports}}]);