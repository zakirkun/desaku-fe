import{_ as k}from"./Loader.2f484b9d.js";import{u as b,c as d,a as o,b as s,w as r,F as _,d as v,r as m,o as n,m as M,f as p}from"./entry.287ce2af.js";const y=o("div",{class:"flex justify-between items-center mb-3"},[o("div",{class:"text-2xl font-semibold mb-2"},"Pengaturan Footer")],-1),S={class:"grid animate-fade mb-6"},V={class:"col-12"},x={class:"card"},C=o("div",{class:"mb-5 text-lg font-medium my-1"},"Sosial Media",-1),U={class:"block"},B={class:"mb-6 flex w-full"},F={class:"w-1/3 flex-none"},L={class:"flex-none flex pt-3"},P=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.8em",height:"1.8em",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v14m-7-7h14"})],-1),$=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"})],-1),I={key:0,class:"capitalize"},A={data(){return{form:{profile_desa:null,address:null,copyright:null},formSocialMedia:[{name:"Instagram",link:null}],loading:!1}},async mounted(){await this.loadData(),await this.loadSocialMedia()},methods:{async loadData(){const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/footer");this.form=i},async loadSocialMedia(){const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/social-media");this.formSocialMedia=i},async updateFooter(){const{valid:i}=await this.$refs.form.validate();i&&(this.loading=!0,await this.updateSocialMedia(),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/footer",{method:"PATCH",headers:{Authorization:"Bearer "+v().token},body:this.form}),this.loading=!1)},async updateSocialMedia(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/social-media",{method:"POST",headers:{Authorization:"Bearer "+v().token},body:{social_media:this.formSocialMedia}})},addSocialMedia(){this.formSocialMedia.push({name:null,link:null})},removeSocialMedia(i){this.formSocialMedia=this.formSocialMedia.filter((a,t)=>t!=i)}}},R=Object.assign(A,{__name:"Footer",setup(i){return b({title:"Setting Footer"}),(a,t)=>{const u=m("v-textarea"),f=m("v-text-field"),c=m("v-btn"),g=m("v-form"),w=k;return n(),d(_,null,[y,o("div",S,[o("div",V,[o("div",x,[s(g,{ref:"form"},{default:r(()=>[s(u,{rules:[e=>!!e||"Field is required"],rows:"3",variant:"outlined",label:"Profil Desa",clearable:"",modelValue:a.form.profile,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.profile=e)},null,8,["rules","modelValue"]),s(u,{rules:[e=>!!e||"Field is required"],rows:"2",variant:"outlined",label:"Alamat Lengkap",clearable:"",modelValue:a.form.address,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.address=e)},null,8,["rules","modelValue"]),s(u,{rules:[e=>!!e||"Field is required"],rows:"2",variant:"outlined",label:"Copyright",clearable:"",modelValue:a.form.copyright,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.copyright=e)},null,8,["rules","modelValue"]),C,o("div",U,[(n(!0),d(_,null,M(a.formSocialMedia,(e,h)=>(n(),d("div",B,[o("div",F,[s(f,{rules:[l=>!!l||"Field is required"],modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,variant:"outlined","hide-details":"auto",label:"Nama Sosial Media"},null,8,["rules","modelValue","onUpdate:modelValue"])]),s(f,{rules:[l=>!!l||"Field is required"],class:"mx-3",modelValue:e.link,"onUpdate:modelValue":l=>e.link=l,variant:"outlined","hide-details":"auto",label:"Link"},null,8,["rules","modelValue","onUpdate:modelValue"]),o("div",L,[h==a.formSocialMedia.length-1?(n(),p(c,{key:0,onClick:t[3]||(t[3]=l=>a.addSocialMedia()),color:"#10B981",style:{height:"40px !important",width:"20px !important",padding:"0 0px !important"}},{default:r(()=>[P]),_:1})):(n(),p(c,{key:1,onClick:l=>a.removeSocialMedia(h),color:"#FC4100",style:{height:"40px !important",width:"20px !important",padding:"0 0px !important"}},{default:r(()=>[$]),_:2},1032,["onClick"]))])]))),256))])]),_:1},512),s(c,{onClick:a.updateFooter,color:"#10B981",class:"mt-1 text-white px-3 py-2"},{default:r(()=>[a.loading?(n(),p(w,{key:1})):(n(),d("span",I,"Update"))]),_:1},8,["onClick"])])])])],64)}}});export{R as default};
