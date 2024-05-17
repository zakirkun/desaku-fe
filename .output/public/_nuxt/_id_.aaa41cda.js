import{H as w,T as g}from"./components.87d1e7a8.js";import{_ as x,a as v}from"./Footer.65fb128c.js";import{h as d}from"./moment.a9aaa855.js";import{b as i,l as n,w as r,i as t,t as o,u as h,F as c,f as m,a2 as b,o as l,q as C}from"./entry.ad1a8891.js";const y={class:"block px-[2rem] md:px-[14rem] bg-[#F8F9FC] pt-6"},A={class:"flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg"},k=t("div",{class:"mr-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 1024 1024"},[t("path",{fill:"#0088CC",d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"})])],-1),L={class:"pb-12 grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},N={class:"block col-span-1 md:col-span-4"},H={class:"text-[#0088CC] mb-2 text-3xl font-semibold py-3"},T={class:"text-md flex items-center font-medium mt-2 mb-4"},V=b('<svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2"></rect><path fill="black" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"></path><path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3"></path><rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5"></rect></g></svg>',1),B=["innerHTML"],F={class:"col-span-2"},M=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl md:mt-0 mt-4 font-semibold py-3"},[t("span",null,"Kategori")],-1),$={class:"flex flex-wrap"},D={class:"bg-[#0088CC] font-semibold text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"},S=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-2xl font-semibold py-3"},[t("span",null,"Berita Terbaru")],-1),j={class:"mb-2 px-2 py-3 flex"},q={class:"w-[300px] h-full"},z=["src"],E={class:"block ml-3"},K={class:"text-[#0088CC] text-md"},O={class:"mt-1"},G={data:()=>({news:[],newsCategory:[],moment:d,post:{title:null,content:null}}),head(){return{title:this.post.title}},async mounted(){const e=await $fetch("http://api.desaku.muhichsan.com/api/news/slug/"+this.$route.params.id);this.post.title=e.title,this.post.content=e.content,await this.loadData(),await this.loadNewsCategory()},methods:{async loadData(){const e=await $fetch("http://api.desaku.muhichsan.com/api/news?limit=5");this.news=e,this.latestNews=e},async loadNewsCategory(){const e=await $fetch("http://api.desaku.muhichsan.com/api/news-category");this.newsCategory=e}}},U=Object.assign(G,{__name:"[id]",setup(e){return(s,I)=>{const _=g,p=w,u=x,f=v;return l(),i(c,null,[n(p,null,{default:r(()=>[n(_,null,{default:r(()=>[C(o(s.post.title),1)]),_:1})]),_:1}),n(u),t("div",y,[t("div",A,[k,t("div",null,[t("span",null,"/ "+o(s.post.title),1)])]),t("div",L,[t("div",N,[t("div",H,[t("span",null,o(s.post.title),1)]),t("div",T,[V,t("span",null,o(h(d)(s.post.created_at).format("LL")),1)]),t("div",{innerHTML:s.post.content},null,8,B)]),t("div",F,[M,t("div",$,[(l(!0),i(c,null,m(s.newsCategory,a=>(l(),i("div",D,[t("span",null,o(a.name),1)]))),256))]),S,(l(!0),i(c,null,m(s.latestNews,a=>(l(),i("div",j,[t("div",q,[t("img",{class:"rounded-md",src:a.thumbnail,alt:""},null,8,z)]),t("div",E,[t("div",K,[t("span",null,o(a.title),1)]),t("div",O,[t("span",null,o(h(d)(a.created_at).format("LL")),1)])])]))),256))])])]),n(f)],64)}}});export{U as default};
