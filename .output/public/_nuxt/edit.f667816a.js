import y from"./button.esm.42d3b006.js";import{Y as $,r as m,o as n,c as b,w as l,l as s,i as e,q as k,b as r,F as x,f as C,k as M,e as h,$ as V,a6 as B}from"./entry.95699424.js";import{c as S,_ as I}from"./RichEditor.client.9ecbdfc1.js";import{_ as L}from"./Loader.21b59792.js";import"./badge.esm.d0e226d1.js";import"./basecomponent.esm.82efc321.js";import"./index.esm.063ab9bc.js";import"./baseicon.esm.5d04c19f.js";const T={data:()=>({openModal:!1,currentTab:"listImage",images:[],imageSelected:null}),props:["open"],watch:{open(){this.openModal=this.open}},async mounted(){await this.loadImages()},methods:{async loadImages(){this.images=await $fetch("http://127.0.0.1:8000/api/image"),this.imageSelected=this.images[1]},closeModal(){this.openModal=!1,this.$emit("onCloseModal")},useImage(){this.$emit("onImageSelected",this.imageSelected),this.openModal=!1,this.$emit("onCloseModal")},async removeImage(){this.imageSelected=this.imageSelected.replace("http://127.0.0.1:8000/storage/",""),await $fetch("http://127.0.0.1:8000/api/image/"+this.imageSelected,{method:"DELETE"}),await this.loadImages()}}},H={class:"flex items-center border-b border-slate-200 pb-3 justify-between"},A=e("div",{class:"text-xl font-semibold"},[e("span",null,"Pustaka Gambar")],-1),E=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.6em",height:"1.6em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),N=[E],R={class:"w-full"},U={class:"flex pt-6"},z={key:0,class:"w-3/4 px-8 grid grid-cols-4 gap-8"},F=["onClick"],O=["src"],j={key:0,class:"absolute right-[2px] top-0",xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 16 16"},G=e("path",{fill:"#10B981",d:"M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"},null,-1),Z=[G],q={class:"bg-[#F6F7F7] flex-1 px-6 pt-4"},D=e("div",{class:"text-xl font-semibold mb-4"},"Gambar Dipilih",-1),P=["src"],K={class:"flex"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 36 36"},[e("path",{fill:"white",d:"M6 9v22a2.93 2.93 0 0 0 2.86 3h18.23A2.93 2.93 0 0 0 30 31V9Zm9 20h-2V14h2Zm8 0h-2V14h2Z",class:"clr-i-solid clr-i-solid-path-1"}),e("path",{fill:"white",d:"M30.73 5H23V4a2 2 0 0 0-2-2h-6.2A2 2 0 0 0 13 4v1H5a1 1 0 1 0 0 2h25.73a1 1 0 0 0 0-2",class:"clr-i-solid clr-i-solid-path-2"}),e("path",{fill:"none",d:"M0 0h36v36H0z"})],-1);function Y(a,t,o,w,u,c){const p=m("v-tab"),g=m("v-tabs"),_=y,v=m("v-card"),f=m("v-dialog");return n(),b(f,{modelValue:a.openModal,"onUpdate:modelValue":t[2]||(t[2]=i=>a.openModal=i),width:"75%"},{default:l(()=>[s(v,{height:"auto",style:{"scrollbar-width":"none"}},{title:l(()=>[e("div",H,[A,e("div",{onClick:t[0]||(t[0]=(...i)=>c.closeModal&&c.closeModal(...i)),class:"cursor-pointer"},N)])]),text:l(()=>[e("div",R,[s(g,{"align-tabs":"start",modelValue:a.currentTab,"onUpdate:modelValue":t[1]||(t[1]=i=>a.currentTab=i),"fixed-tabs":""},{default:l(()=>[s(p,{value:"uploadImage"},{default:l(()=>[k(" Upload Gambar ")]),_:1}),s(p,{value:"listImage"},{default:l(()=>[k(" Semua Gambar ")]),_:1})]),_:1},8,["modelValue"]),e("div",U,[a.currentTab=="listImage"?(n(),r("div",z,[(n(!0),r(x,null,C(a.images,i=>(n(),r("div",{onClick:d=>a.imageSelected=i,class:M([{"border-4 border-[#10B981]":a.imageSelected==i},"relative cursor-pointer h-[146px] items-center flex"])},[e("img",{class:"object-cover w-full",style:{height:"139px"},src:i},null,8,O),a.imageSelected==i?(n(),r("svg",j,Z)):h("",!0)],10,F))),256))])):h("",!0),e("div",q,[D,a.imageSelected?(n(),r("img",{key:0,src:a.imageSelected},null,8,P)):h("",!0),e("div",K,[s(_,{onClick:c.useImage,class:"w-fit mt-6 bg-[#10B981] text-white px-3 mx-1 mb-2 py-2 text-md",label:"Pilih Gambar"},null,8,["onClick"]),s(_,{onClick:c.removeImage,class:"w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md"},{default:l(()=>[J]),_:1},8,["onClick"])])])])])]),_:1})]),_:1},8,["modelValue"])}const Q=$(T,[["render",Y]]),W=S(I),X={class:"flex items-center justify-between"},ee=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Thumbnail?")],-1),te=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),ae=[te],oe=e("div",null,[e("span",null,"Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?")],-1),se={class:"w-full flex justify-end"},le={class:"grid"},ie={class:"col-12"},ne={class:"card"},de=e("h3",{class:"text-2xl font-medium mb-5"},"Ubah Berita",-1),me={class:"mb-8"},re={class:"mb-2"},ce=e("div",{class:"mb-3 text-lg font-medium my-1"},"Thumbnail Berita",-1),he={key:0,class:"relative w-fit"},ue=B('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#A3A3A3" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),pe=[ue],_e={class:"mb-6 mt-6"},ge=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[e("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),e("div",{class:"ml-1 font-semibold"},"Media Library")],-1),ve=e("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),fe={key:0},be={data(){return{modalRemoveThumbnail:!1,data:null,image:null,loading:null,categories:[],renderRichEditor:!1,thumbnailDeleted:!1,form:{title:null,category:null,content:null,thumbnail:""},openMediaLibrary:!1}},async mounted(){await this.loadCategories();const a=await $fetch("http://127.0.0.1:8000/api/news/"+this.$route.query.id);this.form=a,this.data=a.content,this.renderRichEditor=!0},methods:{async loadCategories(){const a=await $fetch("http://127.0.0.1:8000/api/news-category/");this.categories=a.map(t=>t.name)},async updateNews(){this.loading=!0,this.form.content=this.data,await $fetch("http://127.0.0.1:8000/api/news/"+this.$route.query.id,{method:"PATCH",body:this.form}),this.loading=!1,this.$router.push("/dashboard/news")},contentChange(a){this.data=a},onImageSelected(a){this.form.thumbnail=a}}},Be=Object.assign(be,{__name:"edit",setup(a){return V({title:"Edit Berita"}),(t,o)=>{const w=Q,u=y,c=m("v-card"),p=m("v-dialog"),g=m("v-text-field"),_=m("v-select"),v=m("v-img"),f=W,i=L;return n(),r(x,null,[s(w,{onOnImageSelected:t.onImageSelected,onOnCloseModal:o[0]||(o[0]=d=>t.openMediaLibrary=!1),open:t.openMediaLibrary},null,8,["onOnImageSelected","open"]),s(p,{modelValue:t.modalRemoveThumbnail,"onUpdate:modelValue":o[2]||(o[2]=d=>t.modalRemoveThumbnail=d),width:"auto"},{default:l(()=>[s(c,{height:"auto",style:{"scrollbar-width":"none"}},{title:l(()=>[e("div",X,[ee,e("div",{onClick:o[1]||(o[1]=d=>t.modalRemoveThumbnail=!1),class:"cursor-pointer"},ae)])]),text:l(()=>[oe]),actions:l(()=>[e("div",se,[s(u,{onClick:t.removeThumbnailNews,class:"w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",label:"Hapus"},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",le,[e("div",ie,[e("div",ne,[de,e("div",me,[s(g,{modelValue:t.form.title,"onUpdate:modelValue":o[3]||(o[3]=d=>t.form.title=d),variant:"outlined","hide-details":"auto",label:"Judul Berita"},null,8,["modelValue"])]),e("div",re,[s(_,{"item-value":"name","item-text":"name",modelValue:t.form.category,"onUpdate:modelValue":o[4]||(o[4]=d=>t.form.category=d),label:"Kategori Berita",items:t.categories,variant:"outlined"},null,8,["modelValue","items"])]),ce,t.form.thumbnail?(n(),r("div",he,[s(v,{src:t.form.thumbnail,width:"300"},null,8,["src"]),e("div",{onClick:o[5]||(o[5]=d=>t.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},pe)])):h("",!0),e("div",_e,[s(u,{onClick:o[6]||(o[6]=d=>t.openMediaLibrary=!0),class:"flex-none bg-[#10B981] text-white px-3 py-3"},{default:l(()=>[ge]),_:1})]),ve,t.renderRichEditor?(n(),b(f,{key:1,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):h("",!0),s(u,{onClick:t.updateNews,class:"mt-5 bg-[#10B981] text-white px-3 py-2"},{default:l(()=>[t.loading?(n(),b(i,{key:1})):(n(),r("span",fe,"Ubah"))]),_:1},8,["onClick"])])])])],64)}}});export{Be as default};
