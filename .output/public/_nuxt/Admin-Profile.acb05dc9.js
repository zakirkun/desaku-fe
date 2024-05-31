import{_ as f}from"./Loader.128f9b66.js";import{u as h,c as i,a as s,b as n,w as m,F as w,d as r,r as u,o as t,f as _}from"./entry.1d4afca0.js";const v=s("div",{class:"flex justify-between items-center mb-3"},[s("div",{class:"text-2xl font-semibold mb-2"},"Admin Profile")],-1),b={class:"grid animate-fade mb-6"},g={class:"col-12"},k={class:"card"},y=s("path",{fill:"black",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"},null,-1),P=[y],C=s("path",{fill:"black",d:"M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"},null,-1),V=[C],B={key:0,class:"capitalize"},A={data(){return{form:{name:null,email:null,password:null},showPassword:!1,loading:!1}},async mounted(){await this.loadData()},methods:{async loadData(){const l=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin",{headers:{Authorization:"Bearer "+r().token}});this.form.name=l.name,this.form.email=l.email,this.form.password=l.password},async updateAdmin(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin-profile/",{method:"PATCH",headers:{Authorization:"Bearer "+r().token},body:this.form}),this.loading=!1}}},$=Object.assign(A,{__name:"Admin-Profile",setup(l){return h({title:"Admin Profile"}),(e,a)=>{const d=u("v-text-field"),c=f,p=u("v-btn");return t(),i(w,null,[v,s("div",b,[s("div",g,[s("div",k,[n(d,{modelValue:e.form.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.form.name=o),variant:"outlined","hide-details":"auto",label:"Name"},null,8,["modelValue"]),n(d,{class:"my-5",modelValue:e.form.email,"onUpdate:modelValue":a[1]||(a[1]=o=>e.form.email=o),variant:"outlined","hide-details":"auto",label:"Email*"},null,8,["modelValue"]),n(d,{type:e.showPassword?"text":"password",modelValue:e.form.password,"onUpdate:modelValue":a[4]||(a[4]=o=>e.form.password=o),dense:"",variant:"outlined","hide-details":"auto",label:"Kata Sandi"},{"append-inner":m(()=>[e.showPassword?(t(),i("svg",{key:1,class:"cursor-pointer",onClick:a[3]||(a[3]=o=>e.showPassword=!1),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},V)):(t(),i("svg",{key:0,class:"cursor-pointer",onClick:a[2]||(a[2]=o=>e.showPassword=!0),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},P))]),_:1},8,["type","modelValue"]),n(p,{onClick:e.updateAdmin,color:"#10B981",class:"mt-6 text-white px-3 py-2"},{default:m(()=>[e.loading?(t(),_(c,{key:1})):(t(),i("span",B,"Update"))]),_:1},8,["onClick"])])])])],64)}}});export{$ as default};
