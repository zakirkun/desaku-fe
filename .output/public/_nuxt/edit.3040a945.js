import{_ as C}from"./MediaLibrary.dd50efed.js";import{c as B,_ as V}from"./RichEditor.client.7d371f9d.js";import{_ as L}from"./Loader.128f9b66.js";import{u as $,c as m,b as s,w as l,a,l as u,f as c,F as M,d as U,r as n,o as r,e as h,v as I}from"./entry.1d4afca0.js";import{c as S}from"./createSlug.32ba2e5c.js";const R=B(V),z={class:"grid animate-fade"},N={class:"col-12"},O={class:"card"},P=a("h3",{class:"text-2xl font-medium mb-5"},"Ubah Berita",-1),T={class:"grid grid-cols-3 gap-3"},A={class:"col-span-2"},E={class:"mt-3"},H=a("div",{class:"mb-3 text-lg font-medium my-1"},"Thumbnail Berita",-1),q={key:0,class:"relative w-fit"},F=I('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),x=[F],j={class:"mb-6 mt-6"},K=a("div",{class:"flex items-center"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[a("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),a("div",{class:"ml-1 font-semibold"},"Media Library")],-1),D=a("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),J={key:0,class:"capitalize"},Z={data(){return{modalRemoveThumbnail:!1,data:null,image:null,loading:null,categories:[],renderRichEditor:!1,toast:!1,form:{title:null,category_id:null,content:null,thumbnail:"",slug:null},openMediaLibrary:!1}},async mounted(){await this.loadCategories();const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.$route.query.id);this.form=i,this.data=i.content,this.renderRichEditor=!0},methods:{async loadCategories(){const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news-category/");this.categories=i},async updateNews(){const{valid:i}=await this.$refs.form.validate();if(i){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.content=this.data,this.form.slug=S(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+U().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/news")}},contentChange(i){this.data=i},onImageSelected(i){this.form.thumbnail=i}}},ee=Object.assign(Z,{__name:"edit",setup(i){return $({title:"Edit Berita"}),(e,o)=>{const d=n("v-btn"),f=n("v-snackbar"),p=C,_=n("v-text-field"),v=n("v-select"),g=n("v-textarea"),b=n("v-form"),w=n("v-img"),k=R,y=L;return r(),m(M,null,[s(f,{modelValue:e.toast,"onUpdate:modelValue":o[1]||(o[1]=t=>e.toast=t),color:"red",timeout:3e3},{actions:l(()=>[s(d,{color:"white",variant:"text",onClick:o[0]||(o[0]=t=>e.toastUnauthorized=!1)},{default:l(()=>[h(" Tutup ")]),_:1})]),default:l(()=>[h(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),s(p,{onOnImageSelected:e.onImageSelected,onOnCloseModal:o[2]||(o[2]=t=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),a("div",z,[a("div",N,[a("div",O,[P,s(b,{ref:"form"},{default:l(()=>[a("div",T,[a("div",A,[s(_,{rules:[t=>!!t||"Field is required"],modelValue:e.form.title,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.title=t),variant:"outlined","hide-details":"auto",label:"Judul Berita"},null,8,["rules","modelValue"])]),a("div",null,[s(v,{rules:[t=>!!t||"Field is required"],"item-value":"uuid","item-title":"name",modelValue:e.form.category_id,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.category_id=t),label:"Kategori Berita",items:e.categories,variant:"outlined"},null,8,["rules","modelValue","items"])])]),a("div",E,[s(g,{rules:[t=>!!t||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Berita",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.description=t)},null,8,["rules","modelValue"])])]),_:1},512),H,e.form.thumbnail?(r(),m("div",q,[s(w,{src:e.form.thumbnail,width:"300"},null,8,["src"]),a("div",{onClick:o[6]||(o[6]=t=>e.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},x)])):u("",!0),a("div",j,[s(d,{onClick:o[7]||(o[7]=t=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:l(()=>[K]),_:1})]),D,e.renderRichEditor?(r(),c(k,{key:1,data:e.data,onContentChange:e.contentChange},null,8,["data","onContentChange"])):u("",!0),s(d,{onClick:e.updateNews,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:l(()=>[e.loading?(r(),c(y,{key:1})):(r(),m("span",J,"Ubah"))]),_:1},8,["onClick"])])])])],64)}}});export{ee as default};
