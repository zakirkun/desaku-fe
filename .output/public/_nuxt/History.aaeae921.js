import{c as i,_ as r}from"./RichEditor.client.9ecbdfc1.js";import d from"./button.esm.42d3b006.js";import{Y as h,b as m,i as t,c as l,e as _,l as p,F as u,o}from"./entry.95699424.js";import"./badge.esm.d0e226d1.js";import"./basecomponent.esm.82efc321.js";import"./index.esm.063ab9bc.js";import"./baseicon.esm.5d04c19f.js";const f=i(r),C={data(){return{data:null,renderRichEditor:!1}},async mounted(){const e=await $fetch("http://127.0.0.1:8000/api/sejarah");this.data=e.sejarah,this.renderRichEditor=!0},methods:{async updateContent(){await $fetch("http://127.0.0.1:8000/api/sejarah",{method:"POST",body:{content:this.data}})},contentChange(e){this.data=e}}},x=t("div",{class:"text-2xl font-semibold mb-2"},"Sejarah Desa",-1),b={class:"grid"},k={class:"col-12"},g={class:"card"},y=t("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1);function B(e,E,j,v,a,n){const s=f,c=d;return o(),m(u,null,[x,t("div",b,[t("div",k,[t("div",g,[y,a.renderRichEditor?(o(),l(s,{key:0,data:a.data,onContentChange:n.contentChange},null,8,["data","onContentChange"])):_("",!0),p(c,{onClick:n.updateContent,class:"mt-3 bg-[#10B981] text-white px-3 py-2",label:"Submit"},null,8,["onClick"])])])])],64)}const O=h(C,[["render",B]]);export{O as default};
