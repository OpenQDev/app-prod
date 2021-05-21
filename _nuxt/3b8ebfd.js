(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,19,20],{819:function(t,e,n){var content=n(822);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("59e995c8",content,!0,{sourceMap:!1})},820:function(t,e,n){"use strict";n.r(e);var r={props:{githubUserId:{type:String,default:""},fromAddress:{type:String,default:""},forceShowAddress:{type:Boolean,default:!1}},data:function(){return{githubUser:null}},mounted:function(){var t=this;this.githubUserId?this.$axios.$get("https://octobay.uber.space/github/user-by-id/"+this.githubUserId).then((function(e){e&&(t.githubUser=e)})):this.fromAddress&&this.$axios.$get("https://octobay.uber.space/graph/user-by-address/"+this.fromAddress).then((function(e){e&&t.$axios.$get("https://octobay.uber.space/github/user-by-id/"+e).then((function(e){e&&(t.githubUser=e)}))}))}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.githubUser?n("div",{staticClass:"d-flex align-items-center"},[n("GithubAvatar",{attrs:{"profile-url":t.githubUser.url,"avatar-url":t.githubUser.avatarUrl}}),t._v(" "),n("div",{staticClass:"d-flex flex-column"},[n("a",{staticClass:"font-weight-bold",attrs:{href:t.githubUser.url,target:"_blank"}},[t._v("\n        "+t._s(t.githubUser.login)+"\n      ")]),t._v(" "),t.fromAddress&&t.forceShowAddress?n("a",{staticClass:"d-flex text-muted",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("small",[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):t._e()])],1):t.fromAddress?n("div",[n("a",{staticClass:"font-weight-bold",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):n("div",[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:n(383).default,AddressShort:n(382).default})},821:function(t,e,n){"use strict";n(819)},822:function(t,e,n){var r=n(31)(!1);r.push([t.i,"small[data-v-7e22a679]{font-size:70%}",""]),t.exports=r},823:function(t,e,n){"use strict";n.r(e);n(821);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100 justify-content-around align-items-center text-center px-2"},[n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Manage"),n("br"),t._v("Permissions\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Transfer this"),n("br"),t._v("Permission\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Manage"),n("br"),t._v("Bounties\n  ")]),t._v(" "),n("small",{staticClass:"w-25 text-nowrap text-muted px-1"},[t._v("\n    Create"),n("br"),t._v("Proposals\n  ")])])}],!1,null,"7e22a679",null);e.default=component.exports},824:function(t,e,n){"use strict";n.r(e);var r={props:{nft:{type:Object,default:null},perms:{type:Array,default:function(){return[]}}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-around align-items-center px-2"},[n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("MINT")||t.perms[0]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("TRANSFER")||t.perms[1]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("SET_ISSUE_GOVTOKEN")||t.perms[2]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1),t._v(" "),n("div",{staticClass:"text-center w-25"},[t.nft&&t.nft.permissions.includes("CREATE_PROPOSAL")||t.perms[3]?n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}):n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","ban"]}})],1)])}),[],!1,null,null,null);e.default=component.exports},879:function(t,e,n){"use strict";n.r(e);n(21);var r=n(1),o=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{loading:!1,transferringNFT:!1,showSuccess:!1,ethAddress:null}},computed:l(l({},Object(o.b)(["account","modalData"])),{},{btnDisabled:function(){return this.transferringNFT||!this.$web3utils.isAddress(this.ethAddress)},nft:function(){return this.modalData?this.modalData:null}}),mounted:function(){this.ethAddress=this.account},methods:{transferNFT:function(){var t=this;this.nft&&(this.transferringNFT=!0,this.octobayGovNFT.methods.safeTransferFrom(this.nft.ownerAddress,this.ethAddress,this.nft.id).send({from:this.account}).then((function(){t.showSuccess=!0})).finally((function(){t.transferringNFT=!1})))}}},f=n(11),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card shadow-sm d-flex flex-column",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"card-body modal-body flex-fill"},[n("h5",{staticClass:"text-center text-muted-light py-3 px-4 m-0"},[t._v("\n      Transfer Permission\n    ")]),t._v(" "),n("div",{staticClass:"text-muted text-center"},[n("div",{staticClass:"d-flex justify-content-center"},[n("GithubUser",{attrs:{"from-address":t.account,"force-show-address":!0}})],1),t._v(" "),n("NFTPermissions",{staticClass:"mt-2",attrs:{nft:t.nft}}),t._v(" "),n("NFTPermissionLabels")],1),t._v(" "),n("div",{staticClass:"d-flex flex-column mt-3"},[t._v("\n      Recipient Address\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAddress,expression:"ethAddress"}],staticClass:"form-control form-control-lg",attrs:{type:"input"},domProps:{value:t.ethAddress},on:{input:function(e){e.target.composing||(t.ethAddress=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"card-body pt-0"},[t.showSuccess?n("div",{staticClass:"alert alert-success border-0"},[n("button",{staticClass:"close text-success",attrs:{type:"button"},on:{click:function(e){t.showSuccess=!1}}},[n("span",[t._v("×")])]),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v("\n      Permission transferred! :)\n    ")],1):t._e(),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary w-100 shadow-sm",attrs:{disabled:t.btnDisabled},on:{click:function(e){return t.transferNFT()}}},[t.transferringNFT?n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):t._e(),t._v("\n      "+t._s(t.transferringNFT?"Waiting for confirmation...":"Transfer Permission")+"\n    ")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubUser:n(820).default,NFTPermissions:n(824).default,NFTPermissionLabels:n(823).default})}}]);