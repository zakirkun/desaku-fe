import l from"./button.esm.4580e9d5.js";import{$ as d,b as m,i as e,l as s,r as c,o as h}from"./entry.72fda17e.js";import"./badge.esm.30cdc01e.js";import"./basecomponent.esm.ab37b9a2.js";import"./index.esm.18136670.js";import"./baseicon.esm.1ec973c5.js";const u={class:"grid"},p={class:"col-12"},_={class:"card"},f=e("h3",{class:"text-2xl font-medium mb-5"},"Ubah Kategori Berita",-1),g={data(){return{data:null,renderRichEditor:!1,form:{name:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title"},{title:"Category",align:"start",key:"category"},{title:"Content",align:"end",key:"content"}],items:[]}},async mounted(){const t=await $fetch("http://api.desaku.muhichsan.com/api/news-category/"+this.$route.query.id);this.form.name=t.name},methods:{async addNews(){this.form.content=this.data,await $fetch("http://api.desaku.muhichsan.com/api/news-category/"+this.$route.query.id,{method:"PATCH",body:this.form}),this.$router.push("/dashboard/news")},contentChange(t){this.data=t}}},C=Object.assign(g,{__name:"edit",setup(t){return d({title:"Edit Kategori Berita"}),(a,o)=>{const i=c("v-text-field"),n=l;return h(),m("div",u,[e("div",p,[e("div",_,[f,e("div",null,[s(i,{modelValue:a.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>a.form.name=r),variant:"outlined","hide-details":"auto",label:"Kategori Berita"},null,8,["modelValue"])]),s(n,{onClick:a.addNews,class:"mt-5 bg-[#10B981] text-white px-3 py-2",label:"Ubah"},null,8,["onClick"])])])])}}});export{C as default};
