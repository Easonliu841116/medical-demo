(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224ca7"],{e248:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand font-weight-bold col-sm-3 col-md-2 mr-0 text-white"},[t._v("Admin Panel")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Log Out")])],1)])]),s("div",{staticClass:"container vw-100 min-vh-100 c-container-color d-flex col-12\n    justify-content-center align-items-center c-m-panel-height"},[s("div",{staticClass:"c-panel-container col-xl-8 col-lg-8 col-md-10\n      d-sm-flex justify-content-between align-items-center"},[s("div",{staticClass:"card col-md-5 shadow pt-5 pb-3 my-3 my-sm-n3"},[s("div",{staticClass:"c-panel-style"}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title font-weight-bold"},[t._v("All Patients")]),t._m(0),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.enterDashboard("all")}}},[t._v("All Group")])])]),s("div",{staticClass:"card col-md-5 shadow pt-5 pb-3"},[s("div",{staticClass:"c-panel-style"}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title font-weight-bold"},[t._v("Part Patients")]),t._m(1),s("div",{staticClass:"d-flex justify-content-between"},[s("a",{staticClass:"btn btn-primary d-block",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.enterDashboard("group1")}}},[t._v("\n              Group 1\n            ")]),s("a",{staticClass:"btn btn-primary d-block",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.enterDashboard("group2")}}},[t._v("\n              Group 2\n            ")])])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"card-text"},[t._v("Choose\n            "),s("span",{staticClass:"text-primary font-weight-bold"},[t._v("All")]),t._v("\n            Patients' Status")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"card-text"},[t._v("Choose\n            "),s("span",{staticClass:"text-danger font-weight-bold"},[t._v("part")]),t._v("\n            Patients' Status")])}],i={methods:{enterDashboard:function(t){var a=this;a.$store.dispatch("loadingOverlay"),localStorage.setItem("adminView",JSON.stringify({adminView:t})),setTimeout(function(){a.$store.dispatch("loadingOverlay"),a.$router.push({path:"dashboard"})},750)}},created:function(){}},r=i,l=s("2877"),c=Object(l["a"])(r,n,e,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d224ca7.888b798a.js.map