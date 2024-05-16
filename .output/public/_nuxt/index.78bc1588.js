import u from"./button.esm.4580e9d5.js";import{_}from"./nuxt-link.18e09aa1.js";import{$ as g,b as w,l as o,w as a,i as e,F as b,r as n,o as f}from"./entry.72fda17e.js";import"./badge.esm.30cdc01e.js";import"./basecomponent.esm.ab37b9a2.js";import"./index.esm.18136670.js";import"./baseicon.esm.1ec973c5.js";const y={class:"flex items-center justify-between"},k=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Gambar?")],-1),x=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),V=[x],I=e("div",null,[e("span",null,"Gambar yang dihapus tidak bisa dikembalikan kembali.")],-1),C={class:"w-full flex justify-end"},R={class:"flex items-center justify-between"},H=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Kategori Berita?")],-1),B=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),G=[B],N=e("div",{class:"mt-3"},[e("span",null,"Video yang dihapus tidak bisa dikembalikan kembali.")],-1),$={class:"flex justify-between items-center mb-3"},z=e("div",{class:"text-2xl font-semibold mb-2"},"Gambar Galeri",-1),E={class:"text-md font-semibold mb-2"},j={class:"grid mb-6"},L={class:"col-12"},M={class:"card"},T={class:"flex justify-center"},D=["onClick"],F=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),A=[F],U={class:"flex justify-between items-center mb-3"},K=e("div",{class:"text-2xl font-semibold mb-2"},"Video",-1),O={class:"text-md font-semibold mb-2"},Y={class:"grid mb-6"},q={class:"col-12"},J={class:"card"},P=["src"],Q={class:"flex float-right"},S=["onClick"],W=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),X=[W],Z={data(){return{modalRemoveImage:!1,modalRemoveNewsCategory:!1,removedNewsId:null,data:null,renderRichEditor:!1,form:{title:null,category:null,content:null},headersImages:[{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Image",align:"start",key:"url"},{title:"Actions",align:"center",key:"actions",sortable:!1}],headersVideos:[{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Video",align:"start",key:"url"},{title:"Actions",align:"end",key:"actions",sortable:!1}],images:[],videos:[]}},async mounted(){await this.loadImage(),await this.loadVideo()},methods:{async loadImage(){const i=await $fetch("http://api.desaku.muhichsan.com/api/image-gallery");this.images=i},async loadVideo(){const i=await $fetch("http://api.desaku.muhichsan.com/api/video-gallery");this.videos=i},openModalRemoveImages(i){this.modalRemoveImage=!0,this.removedImageId=i},openModalRemoveVideos(i){this.modalRemoveNewsCategory=!0,this.removedNewsCategoryId=i},async removeImageGallery(){await $fetch("http://api.desaku.muhichsan.com/api/image-gallery/"+this.removedImageId,{method:"DELETE"}),this.modalRemoveImage=!1,await this.loadImage()},async removeVideoGallery(){await $fetch("http://api.desaku.muhichsan.com/api/video-gallery/"+this.removedNewsCategoryId,{method:"DELETE"}),this.modalRemoveVideo=!1,await this.loadVideo()}}},de=Object.assign(Z,{__name:"index",setup(i){return g({title:"Galeri"}),(t,l)=>{const d=u,m=n("v-card"),r=n("v-dialog"),c=_,v=n("v-img"),h=n("v-data-table");return f(),w(b,null,[o(r,{modelValue:t.modalRemoveImage,"onUpdate:modelValue":l[1]||(l[1]=s=>t.modalRemoveImage=s),width:"auto"},{default:a(()=>[o(m,{height:"auto",style:{"scrollbar-width":"none"}},{title:a(()=>[e("div",y,[k,e("div",{onClick:l[0]||(l[0]=s=>t.modalRemoveImage=!1),class:"cursor-pointer"},V)])]),text:a(()=>[I]),actions:a(()=>[e("div",C,[o(d,{onClick:t.removeImageGallery,class:"w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",label:"Hapus"},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),o(r,{modelValue:t.modalRemoveVideo,"onUpdate:modelValue":l[3]||(l[3]=s=>t.modalRemoveVideo=s),width:"auto"},{default:a(()=>[o(m,{height:"auto",style:{"scrollbar-width":"none"},class:"pa-4 px-4"},{actions:a(()=>[o(d,{onClick:t.removeVideoGallery,class:"mt-6 bg-[#FC4100] text-white px-3 py-2 text-md",label:"Hapus"},null,8,["onClick"])]),default:a(()=>[e("div",R,[H,e("div",{onClick:l[2]||(l[2]=s=>t.modalRemoveVideo=!1),class:"cursor-pointer"},G)]),N]),_:1})]),_:1},8,["modelValue"]),e("div",$,[z,e("div",E,[o(c,{to:"/dashboard/gallery/image/add"},{default:a(()=>[o(d,{class:"mt-3 bg-[#10B981] text-white px-3 py-2 text-md",label:"Tambah Gambar +"})]),_:1})])]),e("div",j,[e("div",L,[e("div",M,[o(h,{headers:t.headersImages,items:t.images,"item-key":"name"},{"item.url":a(({value:s})=>[o(v,{src:s,width:"100",height:"100"},null,8,["src"])]),"item.actions":a(({item:s})=>[e("div",T,[e("div",{class:"cursor-pointer",onClick:p=>t.openModalRemoveNews(s.uuid)},A,8,D)])]),_:1},8,["headers","items"])])])]),e("div",U,[K,e("div",O,[o(c,{to:"/dashboard/gallery/video/add"},{default:a(()=>[o(d,{class:"mt-3 bg-[#10B981] text-white px-3 py-2 text-md",label:"Tambah Video +"})]),_:1})])]),e("div",Y,[e("div",q,[e("div",J,[o(h,{headers:t.headersVideos,items:t.videos,"item-key":"name"},{"item.url":a(({value:s})=>[e("iframe",{class:"my-6",width:"260",height:"165",src:s,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,P)]),"item.actions":a(({item:s})=>[e("div",Q,[e("div",{class:"cursor-pointer",onClick:p=>t.openModalRemoveVideos(s.uuid)},X,8,S)])]),_:1},8,["headers","items"])])])])],64)}}});export{de as default};
