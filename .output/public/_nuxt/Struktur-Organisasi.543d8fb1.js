import{c as d,_}from"./RichEditor.client.c278917d.js";import{_ as l}from"./Loader.0e379327.js";import{u,c as o,a as e,f as s,l as h,b as m,w as p,F as f,d as g,r as C,o as n}from"./entry.be2507a6.js";const k=d(_),b=e("div",{class:"text-2xl font-semibold mb-2"},"Struktur Organisasi",-1),y={class:"grid animate-fade"},B={class:"col-12"},v={class:"card"},x=e("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1),w={key:0,class:"capitalize"},R={data(){return{data:null,renderRichEditor:!1,loading:!1}},async mounted(){const a=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/struktur-organisasi");this.data=a.content,this.renderRichEditor=!0},methods:{async updateContent(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/struktur-organisasi",{method:"PATCH",headers:{Authorization:"Bearer "+g().token},body:{content:this.data}}),this.loading=!1},contentChange(a){this.data=a}}},A=Object.assign(R,{__name:"Struktur-Organisasi",setup(a){return u({title:"Struktur Organisasi"}),(t,E)=>{const i=k,c=l,r=C("v-btn");return n(),o(f,null,[b,e("div",y,[e("div",B,[e("div",v,[x,t.renderRichEditor?(n(),s(i,{key:0,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):h("",!0),m(r,{onClick:t.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:p(()=>[t.loading?(n(),s(c,{key:1})):(n(),o("span",w,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{A as default};