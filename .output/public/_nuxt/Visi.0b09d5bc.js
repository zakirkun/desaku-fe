import{c as i,_ as r}from"./RichEditor.client.1206b165.js";import d from"./button.esm.4580e9d5.js";import{Y as m,b as l,i as t,c as _,e as h,l as p,F as u,o}from"./entry.72fda17e.js";import"./badge.esm.30cdc01e.js";import"./basecomponent.esm.ab37b9a2.js";import"./index.esm.18136670.js";import"./baseicon.esm.1ec973c5.js";const f=i(r),C={data(){return{data:null,renderRichEditor:!1}},async mounted(){const e=await $fetch("http://api.desaku.muhichsan.com/api/visi");this.data=e.tentang,this.renderRichEditor=!0},methods:{async updateContent(){await $fetch("http://api.desaku.muhichsan.com/api/visi",{method:"POST",body:{content:this.data}})},contentChange(e){this.data=e}}},x=t("div",{class:"text-2xl font-semibold mb-2"},"Visi Misi",-1),b={class:"grid"},g={class:"col-12"},k={class:"card"},v=t("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1);function y(e,B,E,V,n,a){const s=f,c=d;return o(),l(u,null,[x,t("div",b,[t("div",g,[t("div",k,[v,n.renderRichEditor?(o(),_(s,{key:0,data:n.data,onContentChange:a.contentChange},null,8,["data","onContentChange"])):h("",!0),p(c,{onClick:a.updateContent,class:"mt-3 bg-[#10B981] text-white px-3 py-2",label:"Submit"},null,8,["onClick"])])])])],64)}const K=m(C,[["render",y]]);export{K as default};
