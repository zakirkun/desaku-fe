import{c as r,_ as d}from"./RichEditor.client.9ecbdfc1.js";import l from"./button.esm.42d3b006.js";import{Y as m,b as h,i as e,c as p,e as _,l as u,F as f,o as s}from"./entry.95699424.js";import"./badge.esm.d0e226d1.js";import"./basecomponent.esm.82efc321.js";import"./index.esm.063ab9bc.js";import"./baseicon.esm.5d04c19f.js";const C=r(d),x={data(){return{data:null,renderRichEditor:!1,openMediaLibrary:!1}},async mounted(){const t=await $fetch("http://127.0.0.1:8000/api/sejarah");this.data=t.sejarah,this.renderRichEditor=!0},methods:{async updateContent(){await $fetch("http://127.0.0.1:8000/api/sejarah",{method:"POST",body:{content:this.data}})},contentChange(t){this.data=t},onImageSelected(t){console.log(t)}}},b=e("div",{class:"text-2xl font-semibold mb-2"},"Sejarah Desa",-1),g={class:"grid"},k={class:"col-12"},y={class:"card"},v=e("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1);function B(t,o,E,j,a,n){const c=C,i=l;return s(),h(f,null,[e("div",{class:"cursor-pointer",onClick:o[0]||(o[0]=w=>a.openMediaLibrary=!0)},"Halo"),b,e("div",g,[e("div",k,[e("div",y,[v,a.renderRichEditor?(s(),p(c,{key:0,data:a.data,onContentChange:n.contentChange},null,8,["data","onContentChange"])):_("",!0),u(i,{onClick:n.updateContent,class:"mt-3 bg-[#10B981] text-white px-3 py-2",label:"Submit"},null,8,["onClick"])])])])],64)}const M=m(x,[["render",B]]);export{M as default};
