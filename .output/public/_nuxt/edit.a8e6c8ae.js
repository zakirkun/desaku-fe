import{_ as f}from"./Loader.128f9b66.js";import{u as h,c as l,a,b as s,w as r,d as b,r as n,o as i,f as p}from"./entry.1d4afca0.js";const v={class:"grid animate-fade"},g={class:"col-12"},k={class:"card"},j=a("h3",{class:"text-2xl font-medium mb-5"},"Tambah Jabatan",-1),y={class:"grid grid-cols-1 gap-3"},B={class:"mt-3"},$={key:0,class:"capitalize"},C={data(){return{form:{job:null},loading:!1}},async mounted(){const t=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/jabatan/"+this.$route.query.id);this.form.job=t.name},methods:{async addJabatan(){const{valid:t}=await this.$refs.form.validate();t&&(this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/jabatan/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+b().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/jabatan"))}}},J=Object.assign(C,{__name:"edit",setup(t){return h({title:"Tambah Jabatan"}),(e,d)=>{const c=n("v-text-field"),_=n("v-form"),m=f,u=n("v-btn");return i(),l("div",v,[a("div",g,[a("div",k,[j,s(_,{ref:"form"},{default:r(()=>[a("div",y,[a("div",B,[s(c,{rules:[o=>!!o||"Field is required"],modelValue:e.form.job,"onUpdate:modelValue":d[0]||(d[0]=o=>e.form.job=o),variant:"outlined","hide-details":"auto",label:"Jabatan"},null,8,["rules","modelValue"])])])]),_:1},512),s(u,{onClick:e.addJabatan,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:r(()=>[e.loading?(i(),p(m,{key:1})):(i(),l("span",$,"Submit"))]),_:1},8,["onClick"])])])])}}});export{J as default};
