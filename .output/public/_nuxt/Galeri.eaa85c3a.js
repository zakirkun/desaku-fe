import{_ as I,i as o,D as P,N as S,U as B,j as y,u as L,c as s,b as u,w as E,a as t,F as b,m as w,k as c,n as F,r as x,o as l,t as k,p as M,g as N}from"./entry.b204a2c1.js";import{_ as T}from"./BreadCrumb.60ef1cac.js";import{P as A}from"./photoswipe.2681c699.js";const g=i=>(M("data-v-88697545"),i=i(),N(),i),R={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},U=g(()=>t("span",null,"Galeri Desa",-1)),j={class:"pb-[1rem]"},H=g(()=>t("h1",{class:"mb-2 font-semibold text-[#0088CC] text-2xl"},"Galeri Video",-1)),O={class:"grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]"},Y=["src"],q={class:"pb-[6rem]"},J=g(()=>t("h1",{class:"mb-8 font-semibold text-[#0088CC] text-2xl"},"Galeri Foto",-1)),K={id:"gallery",class:"grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]"},Q=["href"],W={class:"rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100"},X={key:0},Z={key:1},ee={__name:"Galeri",async setup(i){let a,n;const p=o(null),h=o([]),_=o([]),r=o(1),f=o(0);o(!1),P(async()=>{await S(()=>{p.value||(p.value=new A({gallery:"#gallery",children:"a",pswpModule:()=>B(()=>import("./photoswipe.esm.3ee328cd.js"),[],import.meta.url)}),p.value.init())})}),h.value=([a,n]=y(()=>$fetch("/api/image-gallery")),a=await a,n(),a);const{data:C,total:$}=([a,n]=y(()=>$fetch(`/api/video-gallery?limit=3&page=${r.value}`)),a=await a,n(),a);_.value=C,f.value=Math.ceil($/3);async function G(){const{data:d}=await $fetch(`/api/video-gallery?limit=3&page=${r.value}`);_.value=d}return L({title:"Galeri Desa"}),(d,v)=>{const V=T,z=x("v-pagination"),D=x("v-img");return l(),s("div",R,[u(V,null,{root:E(()=>[U]),_:1}),t("div",j,[H,t("div",O,[(l(!0),s(b,null,w(c(_),(e,m)=>(l(),s("a",{class:"w-full rounded-lg animate-fade",key:m,target:"_blank",rel:"noreferrer"},[t("iframe",{class:"my-6 rounded-lg shadow-sm",width:"100%",height:"245",loading:"lazy",src:e.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Y)]))),128))]),u(z,{size:d.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-6 md:mb-10",modelValue:c(r),"onUpdate:modelValue":[v[0]||(v[0]=e=>F(r)?r.value=e:null),G],"total-visible":5,length:c(f)},null,8,["size","modelValue","length"])]),t("div",q,[J,t("div",K,[(l(!0),s(b,null,w(c(h),(e,m)=>(l(),s("a",{class:"w-full cursor-pointer rounded-lg",key:m,href:e.url,"data-pswp-width":"600","data-pswp-height":"400",target:"_blank",rel:"noreferrer"},[u(D,{"lazy-src":e.url,class:"w-full rounded-t-lg",height:"300",src:e.url,alt:""},null,8,["lazy-src","src"]),t("div",W,[e.description.length>40&&d.$vuetify.display.mobile?(l(),s("span",X,k(e.description.slice(0,40))+"...",1)):(l(),s("span",Z,k(e.description),1))])],8,Q))),128))])])])}}},le=I(ee,[["__scopeId","data-v-88697545"]]);export{le as default};
