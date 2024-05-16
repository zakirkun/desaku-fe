import{_ as p}from"./Loader.cf9316a5.js";import f from"./button.esm.4580e9d5.js";import{Y as h,b as i,i as l,l as a,w as m,e as _,F as v,r as V,o as s,c as b}from"./entry.72fda17e.js";import"./badge.esm.30cdc01e.js";import"./basecomponent.esm.ab37b9a2.js";import"./index.esm.18136670.js";import"./baseicon.esm.1ec973c5.js";const g={data(){return{loading:!1,form:{desa:null,kecamatan:null,kelurahan:null,rt:null,rw:null,kabupaten:null,maps:null}}},async mounted(){await this.loadData()},methods:{async loadData(){const d=await $fetch("http://api.desaku.muhichsan.com/api/location");this.form=d},async updateLocation(){this.loading=!0,await $fetch("http://api.desaku.muhichsan.com/api/location",{method:"PATCH",body:this.form}),this.loading=!1}}},k=l("div",{class:"flex justify-between items-center mb-3"},[l("div",{class:"text-2xl font-semibold mb-2"},"Lokasi Desa")],-1),x={class:"grid mb-6"},w={class:"col-12"},y={class:"card"},L={class:"grid grid-cols-2 gap-x-4"},M={class:"grid grid-cols-2 my-5 gap-x-4"},U={class:"grid grid-cols-2 gap-x-4"},B=l("div",{class:"mb-3 text-lg font-medium my-1 mt-6"},"Embed Maps Desa",-1),C={class:"mt-5 w-full"},D=l("svg",{class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.2em",viewBox:"0 0 256 367"},[l("path",{fill:"#34a853",d:"M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"}),l("path",{fill:"#fbbc04",d:"M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"}),l("path",{fill:"#4285f4",d:"M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"}),l("path",{fill:"#1a73e8",d:"M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"}),l("path",{fill:"#ea4335",d:"M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"})],-1),z=["innerHTML"],H={key:0};function K(d,o,T,N,e,r){const n=V("v-text-field"),u=p,c=f;return s(),i(v,null,[k,l("div",x,[l("div",w,[l("div",y,[l("div",L,[l("div",null,[a(n,{modelValue:e.form.desa,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.desa=t),variant:"outlined","hide-details":"auto",label:"Desa"},null,8,["modelValue"])]),l("div",null,[a(n,{modelValue:e.form.kabupaten,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.kabupaten=t),variant:"outlined","hide-details":"auto",label:"Kabupaten"},null,8,["modelValue"])])]),l("div",M,[l("div",null,[a(n,{modelValue:e.form.kecamatan,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.kecamatan=t),variant:"outlined","hide-details":"auto",label:"Kecamatan"},null,8,["modelValue"])]),l("div",null,[a(n,{modelValue:e.form.kelurahan,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.kelurahan=t),variant:"outlined","hide-details":"auto",label:"Kelurahan"},null,8,["modelValue"])])]),l("div",U,[l("div",null,[a(n,{modelValue:e.form.rt,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.rt=t),variant:"outlined","hide-details":"auto",label:"RT"},null,8,["modelValue"])]),l("div",null,[a(n,{modelValue:e.form.rw,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.rw=t),variant:"outlined","hide-details":"auto",label:"RW"},null,8,["modelValue"])])]),B,l("div",C,[a(n,{modelValue:e.form.maps,"onUpdate:modelValue":o[6]||(o[6]=t=>e.form.maps=t),variant:"outlined","hide-details":"auto",label:"Koordinat Desa"},{"prepend-inner":m(()=>[D]),_:1},8,["modelValue"]),e.form.maps?(s(),i("div",{key:0,class:"mx-auto mt-6 flex justify-center",innerHTML:e.form.maps},null,8,z)):_("",!0)]),a(c,{onClick:r.updateLocation,class:"mt-5 bg-[#10B981] text-white px-3 py-2"},{default:m(()=>[e.loading?(s(),b(u,{key:1})):(s(),i("span",H,"Update"))]),_:1},8,["onClick"])])])])],64)}const W=h(g,[["render",K]]);export{W as default};
