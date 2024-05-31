import{_}from"./MediaLibrary.0b1335fb.js";import{_ as g}from"./Loader.2a51ef4d.js";import{u as v,c as r,b as s,a as o,w as d,l as b,F as w,d as k,r as l,o as n,f as y,v as L}from"./entry.90403ee7.js";const M={class:"grid animate-fade"},B={class:"col-12"},C={class:"card"},S=o("h3",{class:"text-2xl font-medium mb-5"},"Tambah Gambar Galeri",-1),I={key:0,class:"relative w-fit"},V=L('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),$=[V],x={class:"my-1"},H=o("div",{class:"flex items-center"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[o("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),o("div",{class:"ml-1 font-semibold"},"Media Library")],-1),O={key:0,class:"capitalize"},z={data(){return{data:null,loading:!1,form:{description:null,image:null},openMediaLibrary:!1}},methods:{async addImageHomepage(){const{valid:i}=await this.$refs.form.validate();i&&(this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery",{method:"POST",headers:{Authorization:"Bearer "+k().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/gallery"))},onImageSelected(i){this.form.image=i}}},A=Object.assign(z,{__name:"add",setup(i){return v({title:"Tambah Gambar Galeri"}),(e,a)=>{const c=_,p=l("v-textarea"),f=l("v-form"),h=l("v-img"),m=l("v-btn"),u=g;return n(),r(w,null,[s(c,{onOnImageSelected:e.onImageSelected,onOnCloseModal:a[0]||(a[0]=t=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),o("div",M,[o("div",B,[o("div",C,[S,s(f,{ref:"form"},{default:d(()=>[o("div",null,[s(p,{rules:[t=>!!t||"Field is required"],rows:"2",variant:"outlined",label:"Deskripsi Gambar",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.description=t)},null,8,["rules","modelValue"])])]),_:1},512),e.form.image?(n(),r("div",I,[s(h,{src:e.form.image,width:"300"},null,8,["src"]),o("div",{onClick:a[2]||(a[2]=t=>e.form.image=null),class:"absolute cursor-pointer right-3 top-3 z-50"},$)])):b("",!0),o("div",x,[s(m,{onClick:a[3]||(a[3]=t=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:d(()=>[H]),_:1})]),s(m,{onClick:e.addImageHomepage,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:d(()=>[e.loading?(n(),y(u,{key:1})):(n(),r("span",O,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{A as default};
