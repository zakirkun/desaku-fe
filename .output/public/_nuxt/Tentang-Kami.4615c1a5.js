import{_ as i,a as m}from"./Footer.65fb128c.js";import{$ as d,b as n,l as s,i as e,e as l,F as r,o}from"./entry.ad1a8891.js";const h={class:"px-[2rem] md:px-[14rem] pt-[2.5rem] min-h-[26rem]"},p=e("div",{class:"flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg"},[e("div",{class:"mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 1024 1024"},[e("path",{fill:"#0088CC",d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"})])]),e("div",null,[e("span",null,"/ Tentang Kami")])],-1),u={class:"pb-8"},g=e("h1",{class:"mb-4 font-semibold text-[#0088CC] text-3xl"},"Tentang Kami",-1),f=["innerHTML"],v={data:()=>({data:null}),async mounted(){const t=await $fetch("http://api.desaku.muhichsan.com/api/tentang");this.data=t.tentang}},T=Object.assign(v,{__name:"Tentang-Kami",setup(t){return d({title:"Tentang Desa"}),(a,x)=>{const c=i,_=m;return o(),n(r,null,[s(c),e("div",h,[p,e("div",u,[g,a.data?(o(),n("div",{key:0,innerHTML:a.data},null,8,f)):l("",!0)])]),s(_)],64)}}});export{T as default};
