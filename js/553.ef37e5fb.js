"use strict";(self["webpackChunkhm_shopping"]=self["webpackChunkhm_shopping"]||[]).push([[553],{4553:function(s,e,t){t.r(e),t.d(e,{default:function(){return u}});var d=function(){var s=this,e=s._self._c;return e("div",{staticClass:"address"},[e("div",{staticClass:"header"},[e("van-nav-bar",{attrs:{title:"收货地址","left-text":"返回","left-arrow":""},on:{"click-left":function(e){return s.$router.go(-1)}}})],1),e("div",{staticClass:"content"},s._l(s.addressList,(function(t){return e("div",{key:t.address_id,staticClass:"addressBox"},[e("div",{staticClass:"personInfoTop"},[e("div",{staticClass:"name"},[s._v(s._s(t.name))]),e("div",{staticClass:"phone"},[s._v(s._s(t.phone))])]),e("div",{staticClass:"personInfoBottom"},[e("div",{staticClass:"region"},[s._v(" "+s._s(t.region.province+t.region.city+t.region.region+t.detail)+" ")])]),e("div",{staticClass:"icon"},[e("div",{staticClass:"left"},[s.defaultId===t.address_id?e("van-checkbox",{attrs:{"icon-size":"15px","checked-color":"#ee0a24"},on:{click:function(e){return s.selDefaultAddr(t.address_id)}},model:{value:s.checked,callback:function(e){s.checked=e},expression:"checked"}},[s._v("默认")]):e("van-checkbox",{attrs:{"icon-size":"15px"},on:{click:function(e){return s.selDefaultAddr(t.address_id)}},model:{value:s.isChecked,callback:function(e){s.isChecked=e},expression:"isChecked"}},[s._v("选择")])],1),e("div",{staticClass:"right"},[e("van-icon",{attrs:{name:"edit",size:"15"}}),s._v("编辑 "),e("van-icon",{attrs:{name:"delete-o",size:"15"}}),s._v("删除 ")],1)])])})),0),e("div",{staticClass:"footer"},[e("van-button",{attrs:{round:"",type:"info",color:"linear-gradient(to right, #ee0a24,#ff6034 )"},on:{click:s.addAddress}},[s._v("添加新地址")])],1)])},i=[],a=(t(7658),t(7247)),r=t(3822),n={name:"addressPage",data(){return{checked:!0}},computed:{...(0,r.rn)("address",["addressList","defaultId","preAddress"]),defaultAddress(){return this.defaultId},isChecked(){return!this.checked}},created(){this.getAddressList(),this.getAddressId()},methods:{getAddressList(){this.$store.dispatch("address/addressListAction")},getAddressId(){this.$store.dispatch("address/addressIdAction")},addAddress(){this.$store.dispatch("address/RegionAction"),this.$router.push("/addaddress")},selDefaultAddr(s){this.$store.dispatch("address/SelDefaultIdAction",s),(0,a.EH)(s)}}},c=n,o=t(1001),l=(0,o.Z)(c,d,i,!1,null,"14fc153d",null),u=l.exports}}]);
//# sourceMappingURL=553.ef37e5fb.js.map