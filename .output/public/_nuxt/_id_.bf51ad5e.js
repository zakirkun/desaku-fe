import{_ as L}from"./BreadCrumb.ffe4c294.js";import{h as T,_ as z}from"./moment.1dbebeb1.js";import{_ as P}from"./Tag.fb31ebd5.js";import{_ as R,a as D}from"./LatestNews.700ee5f7.js";import{_ as E,u as x,h as F,i as m,j as H,c as r,b as o,w as j,k as s,a as t,e as q,t as l,l as A,F as M,m as S,n as U,r as g,o as d,q as G}from"./entry.078e507d.js";const J={id:"list_berita",class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},K={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},O={class:"block col-span-1 md:col-span-4"},Q={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},W={key:0},X=["onClick"],Y={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},Z={class:"block pl-4"},tt={class:"tetx-base md:text-xl font-semibold"},et={class:"line-clamp-2"},st={class:"text-xs md:text-base block md:flex items-center font-medium mt-2"},at={class:"flex"},ot={class:"ml-1 mr-2"},nt={class:"hidden sm:flex"},it={class:"ml-1"},lt={class:"mt-2 text-sm md:text-base"},ct={class:"line-clamp-2 sm:line-clamp-3"},_t={class:"col-span-2"},mt={__name:"[id]",async setup(rt){let _,u;x({title:"Berita"});const h=F().currentRoute.value,p=m(null),a=m(1),c=m(null),v=m(0),{data:b,total:f,category_name:y}=([_,u]=H(()=>$fetch(`/api/berita?limit=5&page=${a.value}&category=${h.params.id}`)),_=await _,u(),_);p.value=b,c.value=y,v.value=Math.ceil(f/5);async function C(){const{data:n,category_name:i}=await $fetch(`/api/berita?limit=5&page=${a.value}&category=${h.params.id}`);p.value=n,c.value=i,document.getElementById("list_berita").scrollIntoView({behavior:"smooth"})}return x({title:"Berita: "+c.value}),(n,i)=>{const k=L,$=g("v-img"),B=z,V=P,N=g("v-pagination"),w=R,I=D;return d(),r("div",J,[o(k,{child:s(c)},{root:j(()=>[t("span",{onClick:i[0]||(i[0]=e=>("navigateTo"in n?n.navigateTo:s(G))("/berita"))},"Berita")]),_:1},8,["child"]),t("div",K,[t("div",O,[t("div",Q,[t("span",null,[q("Berita: "+l(s(c))+" ",1),s(a)!=1?(d(),r("span",W,": Halaman "+l(s(a)),1)):A("",!0)])]),(d(!0),r(M,null,S(s(p),e=>(d(),r("div",{onClick:dt=>n.$router.push("/berita/"+e.slug),class:"cursor-pointer animate-fade flex items-center mb-10"},[t("div",Y,[o($,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",Z,[t("div",tt,[t("span",et,l(e.title),1)]),t("div",st,[t("div",at,[o(B),t("span",ot,l(s(T)(e.created_at).format("LL")),1)]),t("div",nt,[o(V),t("span",it,l(e.name),1)])]),t("div",lt,[t("span",ct,l(e.description),1)])])],8,X))),256)),o(N,{size:n.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:s(a),"onUpdate:modelValue":[i[1]||(i[1]=e=>U(a)?a.value=e:null),C],"total-visible":5,length:s(v)},null,8,["size","modelValue","length"])]),t("div",_t,[o(w),o(I)])])])}}},gt=E(mt,[["__scopeId","data-v-0841d2eb"]]);export{gt as default};