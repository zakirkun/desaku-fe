import{H as T,T as j}from"./components.a384dcfb.js";import{_ as D}from"./BreadCrumb.01b18bca.js";import{_ as $,h as z,i as H,C as I,j as f,c as p,b as i,w as u,a as s,k as t,t as o,F as h,m as L,r as N,o as b,e as P,q as B,s as S,p as V,g as M}from"./entry.90403ee7.js";const d=c=>(V("data-v-8fe97eb0"),c=c(),M(),c),q={class:"animate-fade flex-1 pb-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[30rem]"},F={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-6"},R={class:"block col-span-1 md:col-span-4"},A={class:"text-[#0088CC] mb-6 text-2xl md:text-2xl font-semibold py-3"},E={class:"block md:flex"},J={class:"w-full md:w-[240px]"},G={class:"md:ml-6 flex-1 py-5 md:pl-4 md:pr-10 md:border rounded-md text-base sm:text-lg h-fit border-slate-300"},K={class:"flex border-b border-slate-300 pb-3 mb-2"},O=d(()=>s("div",{class:"font-semibold w-[140px]"},[s("span",null,"Nama Lengkap")],-1)),Q={class:"flex border-b border-slate-300 pb-3 mb-2"},U=d(()=>s("div",{class:"font-semibold w-[140px]"},[s("span",null,"Jabatan")],-1)),W={class:"flex border-b border-slate-300 pb-3 mb-2"},X=d(()=>s("div",{class:"font-semibold w-[140px]"},[s("span",null,"NIP")],-1)),Y=d(()=>s("p",{class:"font-semibold text-base sm:text-lg mb-4 mt-3"},"Visi & Misi",-1)),Z=["innerHTML"],ss={class:"col-span-2"},es=d(()=>s("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"},[s("span",null,"Perangkat Desa Lainya")],-1)),ts={class:"mb-3 px-5 pt-3 rounded-md border border-slate-300"},as=["onClick"],os={class:"flex-none mr-4"},ns={class:"block"},ls={class:"font-medium text-[#0088CC] text-base md:text-lg"},is={class:"font-medium text-sm md:text-base"},ds={__name:"[id]",async setup(c){let a,r;const g=z().currentRoute.value,m=H([]),e=I({name:null,job:null,image:null,nip:null,visi:null}),l=([a,r]=f(()=>$fetch("/api/perangkat-desa/slug/"+g.params.id)),a=await a,r(),a);return e.name=l.name,e.job=l.job,e.image=l.image,e.visi=l.visi,e.nip=l.nip,m.value=([a,r]=f(()=>$fetch("/api/perangkat-desa?limit=5")),a=await a,r(),a),(_,v)=>{const C=j,k=T,y=D,x=N("v-img");return b(),p(h,null,[i(k,null,{default:u(()=>[i(C,null,{default:u(()=>[P(o(t(e).name)+" Perangkat Desa",1)]),_:1})]),_:1}),s("div",q,[i(y,{child:t(e).name},{root:u(()=>[s("span",{onClick:v[0]||(v[0]=n=>("navigateTo"in _?_.navigateTo:t(B))("/perangkat-desa"))},"Perangkat Desa")]),_:1},8,["child"]),s("div",F,[s("div",R,[s("div",A,[s("span",null,o(t(e).name),1)]),s("div",E,[s("div",J,[i(x,{class:"w-full rounded-lg flex-none mx-auto mb-6 md:mb-0",width:"100%","aspect-ratio":"1","lazy-src":t(e).image,src:t(e).image,alt:""},null,8,["lazy-src","src"])]),s("div",G,[s("div",K,[O,s("div",null,[s("span",null,":   "+o(t(e).name),1)])]),s("div",Q,[U,s("div",null,[s("span",null,":   "+o(t(e).job),1)])]),s("div",W,[X,s("div",null,[s("span",null,":   "+o(t(e).nip??"-"),1)])]),s("div",null,[Y,s("div",{class:"quill-content",innerHTML:t(e).visi??"-"},null,8,Z)])])])]),s("div",ss,[es,s("div",ts,[(b(!0),p(h,null,L(t(m),(n,w)=>(b(),p("div",{onClick:cs=>_.$router.push("/perangkat-desa/"+n.slug),class:S(["border-slate-300 pb-5 cursor-pointer mb-1 py-2 flex",w!=t(m).length-1?"border-b":""])},[s("div",os,[i(x,{class:"rounded-md",width:"60","aspect-ratio":"1","lazy-src":n.image,src:n.image,alt:""},null,8,["lazy-src","src"])]),s("div",ns,[s("div",ls,[s("span",null,o(n.name),1)]),s("div",is,[s("span",null,o(n.job),1)])])],10,as))),256))])])])])],64)}}},ps=$(ds,[["__scopeId","data-v-8fe97eb0"]]);export{ps as default};
