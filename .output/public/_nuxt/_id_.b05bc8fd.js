import{H as y,T as C}from"./components.a384dcfb.js";import{_ as k}from"./BreadCrumb.01b18bca.js";import{_ as w}from"./Date.f025e4f6.js";import{_ as H}from"./Tag.52812434.js";import{_ as L,a as P}from"./LatestPotensi.8dfb306c.js";import{h as $,i as B,C as N,j as D,c as V,b as s,w as l,a as t,k as e,s as q,t as a,F,o as I,e as M,q as R}from"./entry.90403ee7.js";import{h as j}from"./moment.a9aaa855.js";import"./asyncData.0e6b9f1d.js";const z={class:"animate-fade flex-1 block pb-[5rem] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},A={class:"block col-span-1 md:col-span-4"},E={class:"text-[#0088CC] text-2xl mb-2 font-semibold py-3"},S={class:"text-md flex items-center font-medium mt-2 mb-4"},G={class:"mx-2"},J={class:"ml-1"},K=["innerHTML"],O={class:"col-span-2"},nt={__name:"[id]",async setup(Q){let n,c;const r=$().currentRoute.value,m=B(null),o=N({title:null,content:null}),{title:p,name:d,content:u}=([n,c]=D(()=>$fetch("/api/potensi-desa/slug/"+r.params.id)),n=await n,c(),n);return o.title=p,o.content=u,m.value=d,(i,_)=>{const f=C,x=y,g=k,h=w,v=H,b=L,T=P;return I(),V(F,null,[s(x,null,{default:l(()=>[s(f,null,{default:l(()=>[M(a(e(o).title),1)]),_:1})]),_:1}),t("div",z,[s(g,{child:e(o).title},{root:l(()=>[t("span",{onClick:_[0]||(_[0]=U=>("navigateTo"in i?i.navigateTo:e(R))("/potensi-desa"))},"Potensi Desa")]),_:1},8,["child"]),t("div",{class:q([i.$vuetify.display.mobile?"pb-12":"pb-4","grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-8"])},[t("div",A,[t("div",E,[t("span",null,a(e(o).title),1)]),t("div",S,[s(h),t("span",G,a(e(j)(e(o).created_at).format("LL")),1),s(v),t("span",J,a(e(m)),1)]),t("div",{class:"w-full font-normal quill-content",innerHTML:e(o).content},null,8,K)]),t("div",O,[s(b),s(T)])],2)])],64)}}};export{nt as default};
