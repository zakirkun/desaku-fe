import{_ as h}from"./MediaLibrary.dd50efed.js";import{_ as v}from"./Loader.128f9b66.js";import{u as _,c as d,b as l,a as t,l as g,w as u,F as b,d as w,r,o as i,f as k,v as y}from"./entry.1d4afca0.js";const V=t("div",{class:"flex justify-between items-center mb-3"},[t("div",{class:"text-2xl font-semibold mb-2"},"Pengaturan Header")],-1),L={class:"grid animate-fade mb-6"},C={class:"col-12"},M={class:"card"},B={key:0,class:"relative w-fit mt-4"},H=y('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),S=[H],U={class:"my-1"},I=t("div",{class:"flex items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[t("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),t("div",{class:"ml-1 font-semibold"},"Media Library")],-1),$={key:0,class:"capitalize"},P={data(){return{openMediaLibrary:!1,form:{no_telp:null,email:null,logo:null,site_name:null,description:null},loading:!1}},async mounted(){await this.loadData()},methods:{async loadData(){const s=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/header");this.form=s},async updateHeader(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/header",{method:"PATCH",headers:{Authorization:"Bearer "+w().token},body:this.form}),this.loading=!1,location.reload()},onImageSelected(s){this.form.logo=s}}},A=Object.assign(P,{__name:"Header",setup(s){return _({title:"Pengaturan Header"}),(e,o)=>{const p=h,n=r("v-text-field"),f=r("v-img"),m=r("v-btn"),c=v;return i(),d(b,null,[l(p,{onOnImageSelected:e.onImageSelected,onOnCloseModal:o[0]||(o[0]=a=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),V,t("div",L,[t("div",C,[t("div",M,[l(n,{modelValue:e.form.no_telp,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.no_telp=a),variant:"outlined","hide-details":"auto",label:"No Telepon"},null,8,["modelValue"]),l(n,{class:"my-4",modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.email=a),variant:"outlined","hide-details":"auto",label:"Email"},null,8,["modelValue"]),l(n,{class:"my-4",modelValue:e.form.site_name,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.site_name=a),variant:"outlined","hide-details":"auto",label:"Site Name"},null,8,["modelValue"]),l(n,{class:"my-4",modelValue:e.form.description,"onUpdate:modelValue":o[4]||(o[4]=a=>e.form.description=a),variant:"outlined","hide-details":"auto",label:"Description"},null,8,["modelValue"]),e.form.logo?(i(),d("div",B,[l(f,{src:e.form.logo,width:"300"},null,8,["src"]),t("div",{onClick:o[5]||(o[5]=a=>e.form.logo=null),class:"absolute cursor-pointer right-3 top-3 z-50"},S)])):g("",!0),t("div",U,[l(m,{onClick:o[6]||(o[6]=a=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:u(()=>[I]),_:1})]),l(m,{onClick:e.updateHeader,color:"#10B981",class:"mt-4 text-white px-3 py-2"},{default:u(()=>[e.loading?(i(),k(c,{key:1})):(i(),d("span",$,"Update"))]),_:1},8,["onClick"])])])])],64)}}});export{A as default};
