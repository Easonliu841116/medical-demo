(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e30b"],{d504:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container vw-100 vh-100 c-container-color col-12"},[a("form",{staticClass:"c-position-absolute col-xl-3 col-lg-6\n      col-md-8 col-sm-12 rounded shadow bg-light",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h4",{staticClass:"mt-5 text-center font-weight-bold"},[t._v("Login Page")]),t._m(1),t._m(2),t._m(3),a("button",{staticClass:"btn btn-primary mb-5",attrs:{type:"submit",id:"btn-login"}},[t._v("Confirm")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand font-weight-bold col-sm-3 col-md-2 mr-0 text-white"},[t._v("Login")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email-input"}},[t._v("E-mail")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"email-input","aria-describedby":"emailHelp",placeholder:"Please enter your E-mail"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password-input"}},[t._v("Pastword")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"password-input",placeholder:"Password"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"remember"}}),a("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[t._v("Remember me")])])}],i={methods:{login:function(){var t=this,e=document.getElementById("email-input").value,a=document.getElementById("password-input").value;localStorage.setItem("email",JSON.stringify({email:e})),e||a?(t.$store.dispatch("loadingOverlay"),setTimeout(function(){t.$store.dispatch("loadingOverlay"),t.$router.push({path:"panel"})},750)):alert("請輸入信箱及密碼")}}},l=i,n=a("2877"),o=Object(n["a"])(l,r,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d21e30b.20ed6e1d.js.map