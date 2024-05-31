import{_ as B}from"./MediaLibrary.0b1335fb.js";import{a as V,c as L,_ as $}from"./RichEditor.client.6ef886bc.js";import{_ as M}from"./Loader.2a51ef4d.js";import{u as U,c as m,b as n,w as s,a,l as u,F as I,d as S,r as l,o as r,e as c,f as h,v as O}from"./entry.90403ee7.js";import{c as R}from"./createSlug.32ba2e5c.js";const z=L($),N={class:"grid animate-fade"},P={class:"col-12"},T={class:"card"},A=a("h3",{class:"text-2xl font-medium mb-5"},"Ubah Berita",-1),E={class:"grid grid-cols-3 gap-3"},H={class:"col-span-2"},q={class:"mt-3"},x=a("div",{class:"mb-3 text-lg font-medium my-1"},"Thumbnail Berita",-1),F={key:0,class:"relative w-fit"},j=O('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),K=[j],D={class:"mb-6 mt-6"},J=a("div",{class:"flex items-center"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[a("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),a("div",{class:"ml-1 font-semibold"},"Media Library")],-1),Z=a("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),G={key:0,class:"capitalize"},Q={data(){return{modalRemoveThumbnail:!1,data:null,image:null,loading:null,categories:[],renderRichEditor:!1,toast:!1,form:{title:null,category_id:null,content:null,thumbnail:"",slug:null},openMediaLibrary:!1}},async mounted(){await this.loadCategories();const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.$route.query.id);this.form=i,this.data=i.content,this.renderRichEditor=!0},methods:{async loadCategories(){const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news-category/");this.categories=i},async updateNews(){const{valid:i}=await this.$refs.form.validate();if(i){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.content=this.data,this.form.slug=R(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+S().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/news")}},contentChange(i){this.data=i},onImageSelected(i){this.form.thumbnail=i}}},oe=Object.assign(Q,{__name:"edit",setup(i){return U({title:"Edit Berita"}),(e,o)=>{const d=l("v-btn"),f=l("v-snackbar"),_=B,p=l("v-text-field"),v=l("v-select"),g=l("v-textarea"),b=l("v-form"),w=l("v-img"),k=z,y=V,C=M;return r(),m(I,null,[n(f,{modelValue:e.toast,"onUpdate:modelValue":o[1]||(o[1]=t=>e.toast=t),color:"red",timeout:3e3},{actions:s(()=>[n(d,{color:"white",variant:"text",onClick:o[0]||(o[0]=t=>e.toastUnauthorized=!1)},{default:s(()=>[c(" Tutup ")]),_:1})]),default:s(()=>[c(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),n(_,{onOnImageSelected:e.onImageSelected,onOnCloseModal:o[2]||(o[2]=t=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),a("div",N,[a("div",P,[a("div",T,[A,n(b,{ref:"form"},{default:s(()=>[a("div",E,[a("div",H,[n(p,{rules:[t=>!!t||"Field is required"],modelValue:e.form.title,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.title=t),variant:"outlined","hide-details":"auto",label:"Judul Berita"},null,8,["rules","modelValue"])]),a("div",null,[n(v,{rules:[t=>!!t||"Field is required"],"item-value":"uuid","item-title":"name",modelValue:e.form.category_id,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.category_id=t),label:"Kategori Berita",items:e.categories,variant:"outlined"},null,8,["rules","modelValue","items"])])]),a("div",q,[n(g,{rules:[t=>!!t||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Berita",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.description=t)},null,8,["rules","modelValue"])])]),_:1},512),x,e.form.thumbnail?(r(),m("div",F,[n(w,{src:e.form.thumbnail,width:"300"},null,8,["src"]),a("div",{onClick:o[6]||(o[6]=t=>e.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},K)])):u("",!0),a("div",D,[n(d,{onClick:o[7]||(o[7]=t=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:s(()=>[J]),_:1})]),Z,n(y,null,{default:s(()=>[e.renderRichEditor?(r(),h(k,{key:0,data:e.data,onContentChange:e.contentChange},null,8,["data","onContentChange"])):u("",!0)]),_:1}),n(d,{onClick:e.updateNews,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:s(()=>[e.loading?(r(),h(C,{key:1})):(r(),m("span",G,"Ubah"))]),_:1},8,["onClick"])])])])],64)}}});export{oe as default};
