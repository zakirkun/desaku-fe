import{_ as h}from"./BreadCrumb.8eacce0b.js";import{_ as u}from"./LatestAnnouncement.012a9707.js";import{u as x,i as g,j as f,c as a,b as d,w as v,a as t,F as A,m as w,k as n,o as i,M as b,t as r,s as k}from"./entry.287ce2af.js";import{h as C}from"./moment.a9aaa855.js";const y={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},$={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},B={class:"block col-span-1 md:col-span-4 pb-6"},L=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"},[t("span",null,"Pengumuman")],-1),P=["onClick"],M={class:"block"},N={class:"text-xl font-semibold"},T={class:"text-md flex items-center font-medium mt-2"},V=k('<svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2"></rect><path fill="black" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"></path><path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3"></path><rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5"></rect></g></svg>',1),F={class:"mt-3"},S={class:"col-span-2"},G={__name:"index",async setup(j){let s,l;x({title:"Pengumuman"});const c=g(null);return c.value=([s,l]=f(()=>$fetch("/api/pengumuman")),s=await s,l(),s),(o,m)=>{const p=h,_=u;return i(),a("div",y,[d(p,null,{root:v(()=>[t("span",{onClick:m[0]||(m[0]=e=>("navigateTo"in o?o.navigateTo:n(b))("/pengumuman"))},"Pengumuman")]),_:1}),t("div",$,[t("div",B,[L,(i(!0),a(A,null,w(n(c),e=>(i(),a("div",{onClick:z=>o.$router.push("/pengumuman/"+e.slug),class:"cursor-pointer flex mb-7"},[t("div",M,[t("div",N,[t("span",null,r(e.title),1)]),t("div",T,[V,t("span",null,r(n(C)(e.created_at).format("LL")),1)]),t("div",F,[t("span",null,r(e.description),1)])])],8,P))),256))]),t("div",S,[d(_)])])])}}};export{G as default};
