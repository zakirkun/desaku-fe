import{_ as g}from"./MediaLibrary.dd50efed.js";import{_ as b}from"./Loader.128f9b66.js";import{u as w,c as m,b as s,w as i,a as o,l as k,F as y,d as L,r as l,o as r,e as c,f as M,v as C}from"./entry.1d4afca0.js";const V={class:"grid animate-fade"},B={class:"col-12"},S={class:"card"},$=o("h3",{class:"text-2xl font-medium mb-5"},"Tambah Gambar Galeri",-1),x=o("div",{class:"mb-3 text-xl font-medium my-1"},"Gambar",-1),I={key:0,class:"relative w-fit"},z=C('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),G=[z],H={class:"my-1"},O=o("div",{class:"flex items-center"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[o("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),o("div",{class:"ml-1 font-semibold"},"Media Library")],-1),T={key:0,class:"capitalize"},N={data(){return{data:null,loading:!1,form:{description:null,image:null},toast:!1,openMediaLibrary:!1}},methods:{async addImageHomepage(){const{valid:n}=await this.$refs.form.validate();if(n){if(!this.form.image){this.toast=!0;return}this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery",{method:"POST",headers:{Authorization:"Bearer "+L().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/gallery")}},onImageSelected(n){this.form.image=n}}},F=Object.assign(N,{__name:"add",setup(n){return w({title:"Tambah Gambar Galeri"}),(e,t)=>{const d=l("v-btn"),f=l("v-snackbar"),u=g,p=l("v-textarea"),h=l("v-form"),v=l("v-img"),_=b;return r(),m(y,null,[s(f,{modelValue:e.toast,"onUpdate:modelValue":t[1]||(t[1]=a=>e.toast=a),color:"red",timeout:3e3},{actions:i(()=>[s(d,{color:"white",variant:"text",onClick:t[0]||(t[0]=a=>e.toastUnauthorized=!1)},{default:i(()=>[c(" Tutup ")]),_:1})]),default:i(()=>[c(" Gambar wajib diisi! ")]),_:1},8,["modelValue"]),s(u,{onOnImageSelected:e.onImageSelected,onOnCloseModal:t[2]||(t[2]=a=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),o("div",V,[o("div",B,[o("div",S,[$,s(h,{ref:"form"},{default:i(()=>[o("div",null,[s(p,{rules:[a=>!!a||"Field is required"],rows:"2",variant:"outlined",label:"Deskripsi Gambar",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.description=a)},null,8,["rules","modelValue"])])]),_:1},512),x,e.form.image?(r(),m("div",I,[s(v,{src:e.form.image,width:"300"},null,8,["src"]),o("div",{onClick:t[4]||(t[4]=a=>e.form.image=null),class:"absolute cursor-pointer right-3 top-3 z-50"},G)])):k("",!0),o("div",H,[s(d,{onClick:t[5]||(t[5]=a=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:i(()=>[O]),_:1})]),s(d,{onClick:e.addImageHomepage,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:i(()=>[e.loading?(r(),M(_,{key:1})):(r(),m("span",T,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{F as default};
