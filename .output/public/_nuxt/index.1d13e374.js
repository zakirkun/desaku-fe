import{_ as v}from"./nuxt-link.01eb670d.js";import{u as w,c as d,b as o,w as s,a as e,F as g,d as f,r as l,o as c,t as b}from"./entry.1d4afca0.js";const k={class:"flex items-center justify-between"},x=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Pengumuman?")],-1),y=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),C=[y],N=e("div",null,[e("span",null,"Pengumuman yang dihapus tidak bisa dikembalikan kembali.")],-1),B={class:"w-full flex justify-end"},L=e("span",{class:"capitalize"},"Hapus",-1),R={class:"flex justify-between items-center mb-3"},D=e("div",{class:"text-2xl font-semibold mb-2"},"Pengumuman",-1),A={class:"text-md font-semibold mb-2"},H=e("span",{class:"capitalize"},"Tambah Pengumuman +",-1),P={class:"grid animate-fade mb-6"},$={class:"col-12"},z={class:"card"},I=["innerHTML"],M={key:1},V={class:"flex justify-center"},T=["href"],j=e("div",{class:"cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"})])],-1),U=[j],E=["onClick"],F=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121","fill-rule":"evenodd",d:"M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98","clip-rule":"evenodd"})],-1),O=[F],S=["onClick"],q=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"#212121",d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"})],-1),G=[q],J={data(){return{laodingData:!1,modalRemoveNews:!1,modalRemoveNewsCategory:!1,removedAnnouncementId:null,data:null,form:{title:null,category:null,content:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title",width:"300px"},{title:"Description",align:"start",sortable:!1,key:"description",width:"300px"},{title:"Content",align:"end",key:"content"},{title:"Actions",align:"center",key:"actions",sortable:!1}],items:[]}},async mounted(){await this.loadData()},methods:{async loadData(){this.loadingData=!0;const{data:a}=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/announcement");this.items=a,this.loadingData=!1},openModalRemoveAnnouncement(a){this.modalRemoveNews=!0,this.removedAnnouncementId=a},async removeNews(){await $fetch(this.$config.public.API_PUBLIC_URL+"/api/announcement/"+this.removedAnnouncementId,{method:"DELETE",headers:{Authorization:"Bearer "+f().token}}),this.modalRemoveNews=!1,await this.loadData()}}},W=Object.assign(J,{__name:"index",setup(a){return w({title:"Pengumuman"}),(n,i)=>{const m=l("v-btn"),r=l("v-card"),h=l("v-dialog"),_=v,u=l("v-data-table");return c(),d(g,null,[o(h,{modelValue:n.modalRemoveNews,"onUpdate:modelValue":i[1]||(i[1]=t=>n.modalRemoveNews=t),width:"auto"},{default:s(()=>[o(r,{height:"auto",style:{"scrollbar-width":"none"}},{title:s(()=>[e("div",k,[x,e("div",{onClick:i[0]||(i[0]=t=>n.modalRemoveNews=!1),class:"cursor-pointer"},C)])]),text:s(()=>[N]),actions:s(()=>[e("div",B,[o(m,{variant:"flat",onClick:n.removeNews,color:"#FC4100",class:"w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"},{default:s(()=>[L]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",R,[D,e("div",A,[o(_,{to:"/dashboard/announcement/add"},{default:s(()=>[o(m,{onClick:n.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:s(()=>[H]),_:1},8,["onClick"])]),_:1})])]),e("div",P,[e("div",$,[e("div",z,[o(u,{loading:n.loadingData,headers:n.headers,items:n.items,"item-key":"name"},{bottom:s(()=>[]),"item.content":s(({value:t})=>[t?(c(),d("span",{key:0,innerHTML:t.slice(0,100)},null,8,I)):(c(),d("span",M,"-"))]),"item.description":s(({value:t})=>[e("span",null,b(t.slice(0,80))+"...",1)]),"item.actions":s(({item:t})=>[e("div",V,[e("a",{href:`/pengumuman/${t.slug}`,target:"_blank"},U,8,T),e("div",{onClick:p=>n.$router.push("/dashboard/announcement/edit?id="+t.uuid),class:"cursor-pointer mx-1"},O,8,E),e("div",{class:"cursor-pointer",onClick:p=>n.openModalRemoveAnnouncement(t.uuid)},G,8,S)])]),_:1},8,["loading","headers","items"])])])])],64)}}});export{W as default};
