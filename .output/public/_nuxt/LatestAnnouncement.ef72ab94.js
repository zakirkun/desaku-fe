import{h as m}from"./moment.0f054168.js";import{i as u,j as d,o as a,c as n,a as t,F as l,m as p,t as c,k as i}from"./entry.40e44078.js";const h=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl md:text-2xl font-semibold py-3"},[t("span",null,"Pengumuman Terbaru")],-1),x={class:"mb-3"},b=["onClick"],f={class:"block"},C={class:"text-[#0088CC] text-md"},v={class:"line-clamp-2"},k={class:"mt-1"},w={__name:"LatestAnnouncement",async setup(g){let s,o;const r=u(null);return r.value=([s,o]=d(()=>$fetch("/api/pengumuman?limit=5")),s=await s,o(),s).data,(_,y)=>(a(),n(l,null,[h,t("div",x,[(a(!0),n(l,null,p(i(r),e=>(a(),n("div",{onClick:L=>_.$router.push("/pengumuman/"+e.slug),class:"cursor-pointer mb-1 py-3 flex"},[t("div",f,[t("div",C,[t("span",v,c(e.title),1)]),t("div",k,[t("span",null,c(i(m)(e.created_at).format("LL")),1)])])],8,b))),256))])],64))}};export{w as _};