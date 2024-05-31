import{_ as j}from"./BreadCrumb.01b18bca.js";import{u as y,i as u,j as g,c as a,b as f,w as $,a as t,F as x,m as b,k as n,n as B,t as _,r as S,o as l,q as T}from"./entry.90403ee7.js";const V={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[35rem]"},L=t("span",null,"Struktur Organisasi",-1),O={class:"pb-8 block md:flex"},H={class:"hidden md:block flex-none w-[240px]"},P=["onClick"],q=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.8em",height:"1.8em",viewBox:"0 0 24 24"},[t("path",{fill:"#0088CC",d:"m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71"})],-1),F={class:"flex md:hidden"},J={class:"block flex-1 md:pl-10"},M={key:0},N=t("h1",{class:"mb-4 font-semibold text-[#0088CC] text-2xl"},"Struktur Organisasi",-1),A=["innerHTML"],D={key:1},E={class:"text-xl md:text-2xl mb-5 mt-4 font-semibold"},R={class:"animate-fade grid grid-cols-1 gap-8 md:grid-cols-4"},U=["onClick"],z={class:"w-full h-[180px]"},G=["src"],I={class:"bg-[#0088CC] rounded-b-lg text-white text-base font-medium pa-2"},K=t("br",null,null,-1),Q={class:"text-sm font-normal"},Z={__name:"Struktur-Organisasi",async setup(W){let s,i;y({title:"Struktur Organisasi"});const m=u([]),r=u(null),c=u(null),p=u(null);m.value=([s,i]=g(()=>$fetch("/api/jabatan")),s=await s,i(),s),p.value=([s,i]=g(()=>$fetch("/api/struktur-organisasi")),s=await s,i(),s).content;async function h(o){o||(o=r.value),c.value=await $fetch("/api/jabatan/perangkat/"+o)}return(o,d)=>{var v;const k=j,w=S("v-select");return l(),a("div",V,[f(k,null,{root:$(()=>[L]),_:1}),t("div",O,[t("div",H,[(l(!0),a(x,null,b(n(m),e=>(l(),a("div",{class:"border-b cursor-pointer border-slate-300 py-2 flex",onClick:C=>h(e.uuid)},[q,t("span",null,_(e.name),1)],8,P))),256))]),t("div",F,[f(w,{modelValue:n(r),"onUpdate:modelValue":[d[0]||(d[0]=e=>B(r)?r.value=e:null),d[1]||(d[1]=e=>h(null))],label:"Pilih Jabatan",items:n(m),"item-value":"uuid","item-title":"name"},null,8,["modelValue","items"])]),t("div",J,[n(c)?(l(),a("div",D,[t("p",E,_(((v=n(c)[0])==null?void 0:v.job)??"-"),1),t("div",R,[(l(!0),a(x,null,b(n(c),e=>(l(),a("div",{onClick:C=>("navigateTo"in o?o.navigateTo:n(T))("/perangkat-desa/"+e.slug),class:"cursor-pointer rounded-lg block shadow-lg"},[t("div",z,[t("img",{src:e.image,class:"w-full h-full object-cover rounded-t-lg"},null,8,G)]),t("div",I,[t("span",null,_(e.name),1),K,t("span",Q,_(e.job),1)])],8,U))),256))])])):(l(),a("div",M,[N,t("div",{class:"quill-content",innerHTML:n(p)},null,8,A)]))])])])}}};export{Z as default};
