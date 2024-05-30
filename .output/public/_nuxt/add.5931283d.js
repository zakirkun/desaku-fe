import{_ as f}from"./Loader.2f484b9d.js";import{u as h,c as l,a as t,b as a,w as d,d as p,r as s,o as n,f as g}from"./entry.287ce2af.js";import{c as v}from"./createSlug.32ba2e5c.js";const b={class:"grid animate-fade"},k={class:"col-12"},y={class:"card"},B=t("h3",{class:"text-2xl font-medium mb-5"},"Tambah Kategori Potensi Desa",-1),C={key:0,class:"capitalize"},P={data(){return{loading:!1,form:{name:null,slug:null}}},methods:{async addPotensiCategory(){const{valid:i}=await this.$refs.form.validate();i&&(this.loading=!0,this.form.slug=v(this.form.name),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-category",{method:"POST",headers:{Authorization:"Bearer "+p().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/potensi-desa"))}}},T=Object.assign(P,{__name:"add",setup(i){return h({title:"Tambah Kategori Berita"}),(e,r)=>{const m=s("v-text-field"),c=s("v-form"),_=f,u=s("v-btn");return n(),l("div",b,[t("div",k,[t("div",y,[B,a(c,{ref:"form"},{default:d(()=>[t("div",null,[a(m,{rules:[o=>!!o||"Field is required"],modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.name=o),variant:"outlined","hide-details":"auto",label:"Kategori Potensi"},null,8,["rules","modelValue"])])]),_:1},512),a(u,{onClick:e.addPotensiCategory,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:d(()=>[e.loading?(n(),g(_,{key:1})):(n(),l("span",C,"Submit"))]),_:1},8,["onClick"])])])])}}});export{T as default};
