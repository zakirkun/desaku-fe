import{_ as u}from"./BreadCrumb.60ef1cac.js";import{u as g,i as h,j as f,c as o,b as i,w as b,a as t,F as v,m as w,k as m,r as y,o as n,q as C,s as k,t as l}from"./entry.b204a2c1.js";const L={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},$={class:"pb-8"},B=t("h1",{class:"mb-8 font-semibold text-[#0088CC] text-2xl"},"Lembaga Desa",-1),D={class:"w-full"},z={class:"shadow overflow-hidden rounded border-b border-gray-200"},N={class:"min-w-full bg-white"},T=t("thead",{class:"bg-gray-700 text-white"},[t("tr",null,[t("th",{class:"w-1/3 text-left py-3 px-4 uppercase font-medium text-sm"},"Nama Lembaga"),t("th",{class:"w-1/3 text-left py-3 px-4 uppercase font-medium text-sm"},"Alamat Kantor"),t("th",{class:"text-left py-3 px-4 uppercase font-medium text-sm"},"Logo")])],-1),A={class:"text-gray-700"},F=["onClick"],V={class:"text-[#0088CC] font-normal tw-1/3 text-left text-base md:text-xl py-3 px-4"},j={class:"bg-[#0088CC] text-white w-fit px-2 text-sm md:text-base rounded-md py-1 mt-2"},q={class:"w-1/3 text-left py-3 px-4 text-base md:text-xl"},E={class:"text-left py-3 px-4"},I={__name:"index",async setup(H){let s,r;g({title:"Lembaga Desa"});const d=h(null);return d.value=([s,r]=f(()=>$fetch("/api/lembaga")),s=await s,r(),s),(a,c)=>{const p=u,_=y("v-img");return n(),o("div",L,[i(p,null,{root:b(()=>[t("span",{onClick:c[0]||(c[0]=e=>("navigateTo"in a?a.navigateTo:m(C))("/lembaga-desa"))},"Lembaga Desa")]),_:1}),t("div",$,[B,t("div",D,[t("div",z,[t("table",N,[T,t("tbody",A,[(n(!0),o(v,null,w(m(d),(e,x)=>(n(),o("tr",{onClick:K=>a.$router.push("/lembaga-desa/"+e.slug),class:k(["cursor-pointer",x%2==0?"bg-gray-100":""])},[t("td",V,[t("div",null,l(e.name),1),t("div",j,l(e.surname),1)]),t("td",q,l(e.address),1),t("td",E,[i(_,{"lazy-src":e.image,src:e.image,class:"rounded-md",cover:"",width:"160","aspect-ratio":"16/9"},null,8,["lazy-src","src"])])],10,F))),256))])])])])])])}}};export{I as default};
