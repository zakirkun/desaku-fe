import{_ as y}from"./MediaLibrary.0b1335fb.js";import{c as C,_ as L}from"./RichEditor.client.6ef886bc.js";import{_ as V}from"./Loader.2a51ef4d.js";import{u as M,c as m,b as a,w as s,a as e,F as $,d as B,r as l,o as r,e as u,l as c,f as h}from"./entry.90403ee7.js";import{c as U}from"./createSlug.32ba2e5c.js";const S=C(L),A={class:"grid animate-fade"},I={class:"col-12"},x={class:"card"},z=e("h3",{class:"text-2xl font-medium mb-5"},"Ubah Kegiatan",-1),O={class:"mb-8"},R={class:"mt-3"},T=e("div",{class:"mb-3 text-lg font-medium my-1"},"Thumbnail",-1),E={key:0,class:"relative w-fit"},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 48 48"},[e("defs",null,[e("mask",{id:"ipSCloseOne0"},[e("g",{fill:"none","stroke-linejoin":"round","stroke-width":"4"},[e("path",{fill:"#fff",stroke:"#fff",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"}),e("path",{stroke:"#000","stroke-linecap":"round",d:"M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"})])])]),e("path",{fill:"#10B981",d:"M0 0h48v48H0z",mask:"url(#ipSCloseOne0)"})],-1),P=[H],q={class:"mb-6 mt-6"},F=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[e("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),e("div",{class:"ml-1 font-semibold"},"Media Library")],-1),K=e("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),N={key:0,class:"capitalize"},j={data(){return{modalRemoveThumbnail:!1,data:null,image:null,renderRichEditor:!1,thumbnailDeleted:!1,loading:!1,form:{title:null,category:null,description:null,content:null,thumbnail:null},toast:!1,openMediaLibrary:!1}},async mounted(){const n=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/activities/"+this.$route.query.id);this.form=n,this.data=n.content,this.renderRichEditor=!0},methods:{async updateActivity(){const{valid:n}=await this.$refs.form.validate();if(n){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.content=this.data,this.form.slug=U(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/activities/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+B().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/activities")}},contentChange(n){this.data=n},onImageSelected(n){this.form.thumbnail=n}}},W=Object.assign(j,{__name:"edit",setup(n){return M({title:"Edit Activity"}),(t,o)=>{const d=l("v-btn"),f=l("v-snackbar"),p=y,_=l("v-text-field"),v=l("v-textarea"),b=l("v-img"),g=S,w=V,k=l("v-form");return r(),m($,null,[a(f,{modelValue:t.toast,"onUpdate:modelValue":o[1]||(o[1]=i=>t.toast=i),color:"red",timeout:3e3},{actions:s(()=>[a(d,{color:"white",variant:"text",onClick:o[0]||(o[0]=i=>t.toastUnauthorized=!1)},{default:s(()=>[u(" Tutup ")]),_:1})]),default:s(()=>[u(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),a(p,{onOnImageSelected:t.onImageSelected,onOnCloseModal:o[2]||(o[2]=i=>t.openMediaLibrary=!1),open:t.openMediaLibrary},null,8,["onOnImageSelected","open"]),e("div",A,[e("div",I,[a(k,{ref:"form"},{default:s(()=>[e("div",x,[z,e("div",O,[a(_,{rules:[i=>!!i||"Field is required"],modelValue:t.form.title,"onUpdate:modelValue":o[3]||(o[3]=i=>t.form.title=i),variant:"outlined","hide-details":"auto",label:"Judul Kegiatan"},null,8,["rules","modelValue"])]),e("div",R,[a(v,{rules:[i=>!!i||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Kegiatan",clearable:"",modelValue:t.form.description,"onUpdate:modelValue":o[4]||(o[4]=i=>t.form.description=i)},null,8,["rules","modelValue"])]),T,t.form.thumbnail?(r(),m("div",E,[a(b,{src:t.form.thumbnail,width:"300"},null,8,["src"]),e("div",{onClick:o[5]||(o[5]=i=>t.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},P)])):c("",!0),e("div",q,[a(d,{onClick:o[6]||(o[6]=i=>t.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:s(()=>[F]),_:1})]),K,t.renderRichEditor?(r(),h(g,{key:1,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):c("",!0),a(d,{onClick:t.updateActivity,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:s(()=>[t.loading?(r(),h(w,{key:1})):(r(),m("span",N,"Ubah"))]),_:1},8,["onClick"])])]),_:1},512)])])],64)}}});export{W as default};
