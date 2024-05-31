import{_}from"./Loader.128f9b66.js";import{u as f,c as d,a as o,b as i,w as r,d as u,r as m,o as l,f as w}from"./entry.1d4afca0.js";const v={class:"grid animate-fade"},g={class:"col-12"},k={class:"card"},b=o("h3",{class:"text-2xl font-medium mb-5"},"Edit Admin",-1),C={class:"grid grid-cols-1 gap-3"},y={class:"col-span-1"},V={class:"grid grid-cols-1 mt-5 gap-3"},B={class:"col-span-1"},P=o("path",{fill:"black",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"},null,-1),$=[P],A=o("path",{fill:"black",d:"M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"},null,-1),L=[A],U={key:0,class:"capitalize"},E={data(){return{data:null,form:{name:null,email:null,password:null},showPassword:!1,loading:!1}},async mounted(){const t=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin/"+this.$route.query.id,{headers:{Authorization:"Bearer "+u().token}});this.form=t},methods:{async editAdmin(){const{valid:t}=await this.$refs.form.validate();t&&(this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/admin/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+u().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/admin"))},contentChange(t){this.data=t}}},z=Object.assign(E,{__name:"edit",setup(t){return f({title:"Edit Admin"}),(s,a)=>{const n=m("v-text-field"),c=m("v-form"),h=_,p=m("v-btn");return l(),d("div",v,[o("div",g,[o("div",k,[b,i(c,{ref:"form"},{default:r(()=>[o("div",C,[o("div",y,[i(n,{rules:[e=>!!e||"Field is required"],modelValue:s.form.name,"onUpdate:modelValue":a[0]||(a[0]=e=>s.form.name=e),variant:"outlined","hide-details":"auto",label:"Nama"},null,8,["rules","modelValue"])])]),o("div",V,[o("div",B,[i(n,{rules:[e=>!!e||"Field is required",e=>/.+@.+/.test(e)||"Invalid Email address"],modelValue:s.form.email,"onUpdate:modelValue":a[1]||(a[1]=e=>s.form.email=e),variant:"outlined","hide-details":"auto",label:"Email"},null,8,["rules","modelValue"])])]),i(n,{type:s.showPassword?"text":"password",modelValue:s.form.password,"onUpdate:modelValue":a[4]||(a[4]=e=>s.form.password=e),class:"mt-5",dense:"",variant:"outlined","hide-details":"auto",label:"Kata Sandi"},{"append-inner":r(()=>[s.showPassword?(l(),d("svg",{key:1,class:"cursor-pointer",onClick:a[3]||(a[3]=e=>s.showPassword=!1),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},L)):(l(),d("svg",{key:0,class:"cursor-pointer",onClick:a[2]||(a[2]=e=>s.showPassword=!0),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},$))]),_:1},8,["type","modelValue"])]),_:1},512),i(p,{onClick:s.editAdmin,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:r(()=>[s.loading?(l(),w(h,{key:1})):(l(),d("span",U,"Submit"))]),_:1},8,["onClick"])])])])}}});export{z as default};
