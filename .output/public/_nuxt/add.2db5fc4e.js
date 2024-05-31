import{_ as V}from"./MediaLibrary.dd50efed.js";import{_ as L,o as r,c as d,a as t,u as $,b as s,w as l,f as c,l as u,F as M,d as P,r as a,e as _}from"./entry.1d4afca0.js";import{c as B,_ as S}from"./RichEditor.client.7d371f9d.js";import{_ as I}from"./Loader.128f9b66.js";import{c as T}from"./createSlug.32ba2e5c.js";const U={},x={xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},O=t("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"},null,-1),z=[O];function R(i,e){return r(),d("svg",x,z)}const D=L(U,[["render",R]]),E=B(S),F={class:"grid animate-fade"},H={class:"col-12"},A={class:"card"},N=t("h3",{class:"text-2xl font-medium mb-5"},"Tambah Potensi Desa",-1),j={class:"grid grid-cols-1 gap-3"},q={class:"col-span-1"},K={class:"mt-4"},J=t("div",{class:"mb-1 text-lg font-medium my-1"},"Thumbnail Berita",-1),Z={key:0,class:"relative w-fit"},G=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 48 48"},[t("defs",null,[t("mask",{id:"ipSCloseOne0"},[t("g",{fill:"none","stroke-linejoin":"round","stroke-width":"4"},[t("path",{fill:"#fff",stroke:"#fff",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"}),t("path",{stroke:"#000","stroke-linecap":"round",d:"M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"})])])]),t("path",{fill:"#10B981",d:"M0 0h48v48H0z",mask:"url(#ipSCloseOne0)"})],-1),Q=[G],W={class:"mb-6 mt-1"},X={class:"flex items-center"},Y=t("div",{class:"ml-1 font-semibold"},"Media Library",-1),ee=t("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),te={key:0,class:"capitalize"},oe={data(){return{openMediaLibrary:!1,potensiCategory:[],renderRichEditor:!1,form:{title:null,description:null,category:null,content:null,thumbnail:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title"},{title:"Content",align:"end",key:"content"}],items:[],toast:!1,loading:!1}},async mounted(){await this.loadPotensiCategory(),this.renderRichEditor=!0},methods:{async addPotensi(){const{valid:i}=await this.$refs.form.validate();if(i){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.slug=T(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-desa",{method:"POST",headers:{Authorization:"Bearer "+P().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/potensi-desa")}},async loadPotensiCategory(){this.potensiCategory=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-category")},contentChange(i){this.form.content=i},onImageSelected(i){this.form.thumbnail=i}}},re=Object.assign(oe,{__name:"add",setup(i){return $({title:"Tambah Potensi Desa"}),(e,n)=>{const m=a("v-btn"),f=a("v-snackbar"),h=V,p=a("v-text-field"),v=a("v-textarea"),g=a("v-select"),b=a("v-img"),y=D,w=a("v-form"),k=E,C=I;return r(),d(M,null,[s(f,{modelValue:e.toast,"onUpdate:modelValue":n[1]||(n[1]=o=>e.toast=o),color:"red",timeout:3e3},{actions:l(()=>[s(m,{color:"white",variant:"text",onClick:n[0]||(n[0]=o=>e.toastUnauthorized=!1)},{default:l(()=>[_(" Tutup ")]),_:1})]),default:l(()=>[_(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),s(h,{onOnImageSelected:e.onImageSelected,onOnCloseModal:n[2]||(n[2]=o=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),t("div",F,[t("div",H,[t("div",A,[N,s(w,{ref:"form"},{default:l(()=>[t("div",j,[t("div",q,[s(p,{rules:[o=>!!o||"Field is required"],modelValue:e.form.title,"onUpdate:modelValue":n[3]||(n[3]=o=>e.form.title=o),variant:"outlined","hide-details":"auto",label:"Judul Potensi Desa"},null,8,["rules","modelValue"])]),t("div",K,[s(v,{rules:[o=>!!o||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Potensi Desa",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":n[4]||(n[4]=o=>e.form.description=o)},null,8,["rules","modelValue"])]),s(g,{rules:[o=>!!o||"Field is required"],modelValue:e.form.category,"onUpdate:modelValue":n[5]||(n[5]=o=>e.form.category=o),variant:"outlined",label:"Kategori Potensi",items:e.potensiCategory,"item-value":"uuid","item-title":"name"},null,8,["rules","modelValue","items"]),J,e.form.thumbnail?(r(),d("div",Z,[s(b,{src:e.form.thumbnail,width:"300"},null,8,["src"]),t("div",{onClick:n[6]||(n[6]=o=>e.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},Q)])):u("",!0),t("div",W,[s(m,{onClick:n[7]||(n[7]=o=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:l(()=>[t("div",X,[s(y),Y])]),_:1})])])]),_:1},512),ee,e.renderRichEditor?(r(),c(k,{key:0,onContentChange:e.contentChange},null,8,["onContentChange"])):u("",!0),s(m,{onClick:e.addPotensi,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:l(()=>[e.loading?(r(),c(C,{key:1})):(r(),d("span",te,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{re as default};
