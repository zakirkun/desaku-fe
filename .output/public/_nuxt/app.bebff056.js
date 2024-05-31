import{a5 as P,a6 as V,a7 as T,B as O,a8 as W,a9 as H,aa as N,i as $,C as R,D as U,j as I,r as L,o as c,c as g,b as x,w as b,k as C,a as e,t as w,n as Y,l as y,a2 as G,s as K,J as E,F as j,h as Z,_ as B,v as q,m as J,f as k,p as Q,g as X,x as ee,u as te}from"./entry.572b7778.js";function M(l){var o;const i=H(l);return(o=i==null?void 0:i.$el)!=null?o:i}const F=T?window:void 0;function D(...l){let o,i,n,p;if(typeof l[0]=="string"||Array.isArray(l[0])?([i,n,p]=l,o=F):[o,i,n,p]=l,!o)return P;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const d=[],f=()=>{d.forEach(u=>u()),d.length=0},m=(u,v,t,s)=>(u.addEventListener(v,t,s),()=>u.removeEventListener(v,t,s)),r=O(()=>[M(o),H(p)],([u,v])=>{if(f(),!u)return;const t=W(v)?{...v}:v;d.push(...i.flatMap(s=>n.map(_=>m(u,s,_,t))))},{immediate:!0,flush:"post"}),h=()=>{r(),f()};return N(h),h}let S=!1;function se(l,o,i={}){const{window:n=F,ignore:p=[],capture:d=!0,detectIframe:f=!1}=i;if(!n)return P;V&&!S&&(S=!0,Array.from(n.document.body.children).forEach(t=>t.addEventListener("click",P)),n.document.documentElement.addEventListener("click",P));let m=!0;const r=t=>p.some(s=>{if(typeof s=="string")return Array.from(n.document.querySelectorAll(s)).some(_=>_===t.target||t.composedPath().includes(_));{const _=M(s);return _&&(t.target===_||t.composedPath().includes(_))}}),u=[D(n,"click",t=>{const s=M(l);if(!(!s||s===t.target||t.composedPath().includes(s))){if(t.detail===0&&(m=!r(t)),!m){m=!0;return}o(t)}},{passive:!0,capture:d}),D(n,"pointerdown",t=>{const s=M(l);m=!r(t)&&!!(s&&!t.composedPath().includes(s))},{passive:!0}),f&&D(n,"blur",t=>{setTimeout(()=>{var s;const _=M(l);((s=n.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(_!=null&&_.contains(n.document.activeElement))&&o(t)},0)})].filter(Boolean);return()=>u.forEach(t=>t())}const oe={class:"block min-h-screen pb-10 px-3 py-4"},ne={class:"flex justify-between cursor-pointer border-b border-slate-200 pb-4"},le=["src"],ie={class:"ml-3 block font-semibold"},ae={class:"text-sm"},re=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 28 28"},[e("path",{fill:"black",d:"M20.48 3.512a11.966 11.966 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.966 11.966 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.789 9.789 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.789 9.789 0 0 1 2.876-6.943a9.786 9.786 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.785 9.785 0 0 1-2.876 6.942z"}),e("path",{fill:"black",d:"m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"})],-1),ce=[re],de={class:"overflow-y-scroll pb-7",style:{height:"calc(100vh - 60px)"}},me={id:"header",class:"surface-0 flex justify-content-center"},ue={id:"home",class:"w-100 overflow-hidden justify-between"},_e={class:"flex w-full px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] py-2"},pe={class:"flex items-center mr-3"},he=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"})],-1),ve={class:"ml-1 text-sm md:text-base text-white"},fe={class:"flex text-sm md:text-base items-center"},we=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"})],-1),ge={class:"text-white ml-2"},be=["src"],xe={class:"ml-3 block font-semibold"},$e={class:"text-sm"},ke={class:"items-center justify-between flex px-0 md:px-6 lg:px-0 z-2"},Ce={class:"list-none p-0 m-0 items-center select-none md:flex hidden cursor-pointer"},ye={class:"mr-3"},Be=e("span",null,"Profil Desa",-1),Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Le=[Be,Me],Pe={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},Ae={class:"mr-3"},Ee=e("span",null,"Pemerintahan",-1),De=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Ie=[Ee,De],ze={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},Se={class:"mr-3"},He=e("span",null,"Informasi Publik",-1),je=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"#0088CC","fill-rule":"evenodd",d:"M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z","clip-rule":"evenodd"})],-1),Fe=[He,je],Ve={class:"block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"},Te=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"})],-1),Oe=[Te],We={data:()=>({open:["Users"],admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],items:[{type:"header",title:"Beranda",value:"/"},{type:"subheader",title:"Profil Desa"},{title:"Tentang Desa",value:"tentang-desa"},{title:"Visi & Misi",value:"visi-misi"},{title:"Sejarah Desa",value:"sejarah-desa"},{type:"divider"},{type:"subheader",title:"Pemerintahan"},{title:"Struktur Organisasi",value:"struktur-organisasi"},{title:"Perangkat Desa",value:"perangkat-desa"},{title:"Lembaga Desa",value:"lembaga-desa"},{type:"divider"},{type:"subheader",title:"Informasi Publik"},{title:"Galeri",value:"galeri"},{title:"Berita",value:"berita"},{title:"Pengumuman",value:"pengumuman"},{title:"Kegiatan",value:"kegiatan"},{title:"Potensi Desa",value:"potensi-desa"}]})},Ne=Object.assign(We,{__name:"Header",async setup(l){let o,i;const n=$(!1),p=$(null),d=$(!1),f=$(null),m=$(null),r=R({no_telp:null,email:null,logo:null,site_name:null,description:null});U(async()=>{window.addEventListener("scroll",function(){window.scrollY>document.getElementById("header").offsetHeight?n.value=!0:n.value=!1}),window.addEventListener("resize",function(){p.value=window.innerWidth})});const h=([o,i]=I(()=>$fetch("/api/header")),o=await o,i(),o);r.no_telp=h.no_telp,r.email=h.email,r.site_name=h.site_name,r.description=h.description,r.logo=h.logo;function u(){d.value=!d.value,d.value?document.documentElement.classList.add("overflow-hidden"):document.documentElement.classList.remove("overflow-hidden")}function v(){d.value=!1,setTimeout(()=>{Z().push(`${m.value}`)},500)}return se(f,t=>{d.value=!1,document.documentElement.classList.remove("overflow-hidden")}),(t,s)=>{const _=L("v-list"),A=L("v-menu");return c(),g(j,null,[x(G,null,{default:b(()=>[C(d)?(c(),g("div",{key:0,ref_key:"target",ref:f,class:"bg-white shadow-lg min-h-screen fixed w-3/4 right-0",style:{"z-index":"9999"}},[e("div",oe,[e("div",ne,[e("div",{class:"flex-none flex",onClick:s[0]||(s[0]=a=>t.$router.push("/"))},[e("img",{width:"40",src:r.logo,alt:""},null,8,le),e("div",ie,[e("div",null,[e("span",null,w(r.site_name),1)]),e("div",ae,[e("span",null,w(r.description),1)])])]),e("div",{class:"flex items-center",onClick:u},ce)]),e("div",de,[x(_,{selectable:"",selected:C(m),"onUpdate:selected":[s[1]||(s[1]=a=>Y(m)?m.value=a:null),v],items:t.items},null,8,["selected","items"])])])],512)):y("",!0)]),_:1}),e("div",me,[e("div",ue,[e("div",_e,[e("div",pe,[he,e("div",ve,w(r.no_telp??"-"),1)]),e("div",fe,[we,e("div",ge,w(r.email??"-"),1)])]),e("div",{class:K([{"fixed top-0 z-50 animation":C(n)},"py-4 px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] w-full flex items-center bg-white/80 backdrop-blur-sm justify-between top-8"])},[e("div",{class:"flex cursor-pointer",onClick:s[2]||(s[2]=a=>t.$router.push("/"))},[e("img",{width:"40",src:r.logo,alt:""},null,8,be),e("div",xe,[e("div",null,[e("span",null,w(r.site_name),1)]),e("div",$e,[e("span",null,w(r.description),1)])])]),e("div",ke,[e("ul",Ce,[e("div",{onClick:s[3]||(s[3]=a=>t.$router.push("/")),class:"font-semibold text-[#0088CC] mr-5 border-slate-300"}," Beranda"),e("div",ye,[x(A,{"open-on-hover":""},{activator:b(({props:a})=>[e("div",E(a,{class:"flex font-semibold text-[#0088CC] items-center"}),Le,16)]),default:b(()=>[e("div",Pe,[e("div",{onClick:s[4]||(s[4]=a=>t.$router.push("/tentang-desa")),class:"mb-2 border-b border-slate-300 pb-3"}," Tentang Desa"),e("div",{onClick:s[5]||(s[5]=a=>t.$router.push("/visi-misi")),class:"mb-2 border-b border-slate-300 pb-3"}," Visi & Misi"),e("div",{onClick:s[6]||(s[6]=a=>t.$router.push("/sejarah-desa"))},"Sejarah Desa")])]),_:1})]),e("div",Ae,[x(A,{"open-on-hover":""},{activator:b(({props:a})=>[e("div",E(a,{class:"flex font-semibold text-[#0088CC] items-center"}),Ie,16)]),default:b(()=>[e("div",ze,[e("div",{onClick:s[7]||(s[7]=a=>t.$router.push("/struktur-organisasi")),class:"mb-2 border-b border-slate-300 pb-3"}," Struktur Organisasi"),e("div",{onClick:s[8]||(s[8]=a=>t.$router.push("/lembaga-desa")),class:"mb-2 border-b border-slate-300 pb-3"}," Lembaga Desa"),e("div",{onClick:s[9]||(s[9]=a=>t.$router.push("/perangkat-desa"))},"Perangkat Desa")])]),_:1})]),e("div",Se,[x(A,{"open-on-hover":""},{activator:b(({props:a})=>[e("div",E(a,{class:"flex font-semibold text-[#0088CC] items-center"}),Fe,16)]),default:b(()=>[e("div",Ve,[e("div",{onClick:s[10]||(s[10]=a=>t.$router.push("/galeri")),class:"mb-2 border-b border-slate-300 pb-3"}," Galeri"),e("div",{onClick:s[11]||(s[11]=a=>t.$router.push("/berita")),class:"mb-2 border-b border-slate-300 pb-3"}," Berita"),e("div",{onClick:s[12]||(s[12]=a=>t.$router.push("/pengumuman")),class:"mb-2 border-b border-slate-300 pb-3"}," Pengumuman"),e("div",{onClick:s[13]||(s[13]=a=>t.$router.push("/kegiatan"))}," Kegiatan")])]),_:1})]),e("div",{onClick:s[14]||(s[14]=a=>t.$router.push("/potensi-desa")),class:"font-semibold text-[#0088CC] mr-5 border-slate-300"}," Potensi Desa")]),e("div",{onClick:u,class:"md:hidden cursor-pointer bg-[#0088CC] pa-2 rounded-lg"},Oe)])],2)])])],64)}}}),Re={},Ue={xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},Ye=e("path",{fill:"white",d:"M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"},null,-1),Ge=[Ye];function Ke(l,o){return c(),g("svg",Ue,Ge)}const Ze=B(Re,[["render",Ke]]),qe={},Je={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},Qe=e("path",{fill:"white",d:"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"},null,-1),Xe=[Qe];function et(l,o){return c(),g("svg",Je,Xe)}const tt=B(qe,[["render",et]]),st={},ot={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 14 14"},nt=q('<g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="white" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g>',1),lt=[nt];function it(l,o){return c(),g("svg",ot,lt)}const at=B(st,[["render",it]]),rt={},ct={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 16 16"},dt=e("path",{fill:"white",d:"M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"},null,-1),mt=[dt];function ut(l,o){return c(),g("svg",ct,mt)}const _t=B(rt,[["render",ut]]),pt={},ht={class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 24 24"},vt=e("path",{fill:"white","fill-rule":"evenodd",d:"M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47","clip-rule":"evenodd"},null,-1),ft=[vt];function wt(l,o){return c(),g("svg",ht,ft)}const gt=B(pt,[["render",wt]]);const z=l=>(Q("data-v-b1a9cbed"),l=l(),X(),l),bt={class:"flex-none"},xt={class:"grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] text-white py-8"},$t={class:"block"},kt=z(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Profil")],-1)),Ct={class:"text-sm mt-3 leading-6"},yt={class:"block"},Bt=z(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Sosial Media")],-1)),Mt={class:"text-sm mt-3"},Lt={class:"text-base"},Pt={class:"flex items-center"},At=["href"],Et={class:"block"},Dt=z(()=>e("div",{class:"text-xl md:text-2xl font-semibold"},[e("span",null,"Alamat Lengkap")],-1)),It={class:"text-sm mt-3"},zt={class:"bg-[#0077B3] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] text-white py-5"},St={class:"text-base"},Ht={__name:"Footer",async setup(l){let o,i;const n=$([]),p=$([]);return p.value=([o,i]=I(()=>$fetch("/api/social-media")),o=await o,i(),o),n.value=([o,i]=I(()=>$fetch("/api/footer")),o=await o,i(),o),(d,f)=>{const m=Ze,r=tt,h=at,u=_t,v=gt;return c(),g("div",bt,[e("div",xt,[e("div",$t,[kt,e("div",Ct,[e("span",null,w(C(n).profile),1)])]),e("div",yt,[Bt,e("div",Mt,[e("ul",Lt,[(c(!0),g(j,null,J(C(p),t=>(c(),g("li",Pt,[t.name=="Instagram"?(c(),k(m,{key:0})):y("",!0),t.name=="Facebook"?(c(),k(r,{key:1})):y("",!0),t.name=="Twitter"?(c(),k(h,{key:2})):y("",!0),t.name=="Whatsapp"?(c(),k(u,{key:3})):y("",!0),t.name=="Youtube"?(c(),k(v,{key:4})):y("",!0),e("a",{class:"ml-1 text-white",target:"_blank",href:t.link},w(t.name),9,At)]))),256))])])]),e("div",Et,[Dt,e("div",It,[e("span",null,w(C(n).address),1)])])]),e("div",zt,[e("p",St,w(C(n).copyright),1)])])}}},jt=B(Ht,[["__scopeId","data-v-b1a9cbed"]]),Ft={class:"min-h-screen flex flex-col bg-[#F8F9FC]"},Vt={class:"min-h-screen"},Ot=ee({__name:"app",setup(l){return te({titleTemplate:"%s - Desaku"}),(o,i)=>{const n=Ne,p=L("router-view"),d=jt,f=L("v-app"),m=L("v-layout");return c(),k(m,null,{default:b(()=>[x(f,null,{default:b(()=>[e("div",Ft,[x(n),e("div",Vt,[(c(),k(p,{key:o.$route.fullPath}))]),x(d)])]),_:1})]),_:1})}}});export{Ot as default};
