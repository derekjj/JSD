(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{526:function(e,r,t){"use strict";t.r(r);var o=t(23),n=(t(59),{data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("login",{email:e.email,password:e.password});case 3:t=r.sent,o=t.success,n=t.error,o?e.$router.push("/admin"):console.error("Login error:",n),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error("An error occurred:",r.t0.message);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}}),l=t(49),component=Object(l.a)(n,(function(){var e=this,r=e._self._c;return r("div",[r("h1",[e._v("Login")]),e._v(" "),r("form",{on:{submit:function(r){return r.preventDefault(),e.login.apply(null,arguments)}}},[r("div",[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}})]),e._v(" "),r("div",[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}})]),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("Login")])])])}),[],!1,null,null,null);r.default=component.exports}}]);