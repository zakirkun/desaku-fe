import{_ as l,a as d}from"./Footer.8697d72d.js";import{b as i,l as a,i as e,e as _,F as r,o as n}from"./entry.2ba41e71.js";const m={class:"px-[2rem] md:px-[14rem] pt-[2.5rem] min-h-[26rem]"},h=e("div",{class:"flex mb-6 items-center bg-[#f0f0f0] px-3 py-3 rounded-lg"},[e("div",{class:"mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 1024 1024"},[e("path",{fill:"#0088CC",d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"})])]),e("div",null,[e("span",null,"/ Visi Misi")])],-1),p={class:"pb-8"},u=e("h1",{class:"mb-4 font-semibold text-[#0088CC] text-3xl"},"Visi & Misi",-1),v=["innerHTML"],f={data:()=>({data:null,headerActive:!1}),async mounted(){const t=await $fetch("http://localhost:3000/api/visi");this.data=t.visi,window.addEventListener("scroll",function(){window.scrollY>20?headerActive.value=!0:headerActive.value=!1})}},g=Object.assign(f,{__name:"Visi-Misi",setup(t){return(s,w)=>{const o=l,c=d;return n(),i(r,null,[a(o),e("div",m,[h,e("div",p,[u,s.data?(n(),i("div",{key:0,innerHTML:s.data},null,8,v)):_("",!0)])]),a(c)],64)}}});export{g as default};
