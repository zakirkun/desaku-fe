import{_ as c}from"./Loader.21b59792.js";import p from"./button.esm.42d3b006.js";import{$ as u,b as d,i as t,l,w as _,F as f,r as h,o as s,c as b}from"./entry.95699424.js";import"./badge.esm.d0e226d1.js";import"./basecomponent.esm.82efc321.js";import"./index.esm.063ab9bc.js";import"./baseicon.esm.5d04c19f.js";const g=t("div",{class:"flex justify-between items-center mb-3"},[t("div",{class:"text-2xl font-semibold mb-2"},"Pengaturan Header")],-1),v={class:"grid mb-6"},k={class:"col-12"},y={class:"card"},V={key:0},w={data(){return{form:{no_telp:null,email:null},loading:!1}},async mounted(){await this.loadData()},methods:{async loadData(){const n=await $fetch("http://127.0.0.1:8000/api/header");this.form=n},async updateHeader(){this.loading=!0,await $fetch("http://127.0.0.1:8000/api/header",{method:"PATCH",body:this.form}),this.loading=!1}}},j=Object.assign(w,{__name:"Header",setup(n){return u({title:"Setting Header"}),(e,a)=>{const i=h("v-text-field"),m=c,r=p;return s(),d(f,null,[g,t("div",v,[t("div",k,[t("div",y,[l(i,{modelValue:e.form.no_telp,"onUpdate:modelValue":a[0]||(a[0]=o=>e.form.no_telp=o),variant:"outlined","hide-details":"auto",label:"No Telepon"},null,8,["modelValue"]),l(i,{class:"my-4",modelValue:e.form.email,"onUpdate:modelValue":a[1]||(a[1]=o=>e.form.email=o),variant:"outlined","hide-details":"auto",label:"Email"},null,8,["modelValue"]),l(r,{onClick:e.updateHeader,class:"mt-1 bg-[#10B981] text-white px-3 py-2"},{default:_(()=>[e.loading?(s(),b(m,{key:1})):(s(),d("span",V,"Update"))]),_:1},8,["onClick"])])])])],64)}}});export{j as default};