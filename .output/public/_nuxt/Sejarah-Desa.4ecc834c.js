import{_ as l}from"./BreadCrumb.18f94241.js";import{u as m,i,j as d,c as o,b as p,w as h,a as t,k as n,l as u,o as r}from"./entry.ef846a3b.js";const x={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem]"},f=t("span",null,"Sejarah Desa",-1),j={class:"pb-8"},C=t("h1",{class:"mb-4 font-semibold text-[#0088CC] text-2xl"},"Sejarah Desa",-1),b=["innerHTML"],S={__name:"Sejarah-Desa",async setup(k){let e,s;m({title:"Sejarah Desa"});const a=i(null),{sejarah:c}=([e,s]=d(()=>$fetch("/api/sejarah")),e=await e,s(),e);return a.value=c,(v,w)=>{const _=l;return r(),o("div",x,[p(_,null,{root:h(()=>[f]),_:1}),t("div",j,[C,n(a)?(r(),o("div",{key:0,class:"quill-content",innerHTML:n(a)},null,8,b)):u("",!0)])])}}};export{S as default};