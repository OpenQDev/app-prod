(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{825:function(t,e,r){"use strict";r.r(e);var d={props:{githubUserId:{type:String,default:""},fromAddress:{type:String,default:""},forceShowAddress:{type:Boolean,default:!1}},data:function(){return{githubUser:null}},mounted:function(){var t=this;this.githubUserId?this.$github.getUserById(this.githubUserId).then((function(e){t.githubUser=e})):this.fromAddress&&this.$subgraph.getUserAddress(this.fromAddress).then((function(e){e&&t.$github.getUserById(e.user.id).then((function(e){t.githubUser=e}))}))}},n=r(11),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.githubUser?r("div",{staticClass:"d-flex align-items-center"},[r("GithubAvatar",{attrs:{"profile-url":t.githubUser.url,"avatar-url":t.githubUser.avatarUrl}}),t._v(" "),r("div",{staticClass:"d-flex flex-column"},[r("a",{staticClass:"font-weight-bold",attrs:{href:t.githubUser.url,target:"_blank"}},[t._v("\n        "+t._s(t.githubUser.login)+"\n      ")]),t._v(" "),t.fromAddress&&t.forceShowAddress?r("a",{staticClass:"d-flex text-muted",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[r("small",[r("AddressShort",{attrs:{address:t.fromAddress}})],1)]):t._e()])],1):t.fromAddress?r("div",[r("a",{staticClass:"font-weight-bold",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[r("AddressShort",{attrs:{address:t.fromAddress}})],1)]):r("div",[r("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:r(385).default,AddressShort:r(384).default})}}]);