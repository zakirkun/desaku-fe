import{aq as B,a7 as k,ar as S,a6 as D,b as u,t as d,e as s,k as c,i as r,c as f,w as x,T as N,r as h,o as i,s as T,v as E,F,f as L}from"./entry.ad1a8891.js";import{u as R}from"./layout.7b63edc8.js";const W={key:0,class:"layout-menuitem-root-text"},j=["href","target"],q={class:"layout-menuitem-text"},z={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},O={class:"layout-menuitem-text"},V={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},G={class:"layout-submenu"},P={__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const I=B(),{layoutConfig:M,layoutState:b,setActiveMenuItem:w,onMenuToggle:C}=R(),o=e,m=k(!1),n=k(null);S(()=>{n.value=o.parentItemKey?o.parentItemKey+"-"+o.index:String(o.index);const t=b.activeMenuItem;m.value=t===n.value||t?t.startsWith(n.value+"-"):!1}),D(()=>M.activeMenuItem.value,t=>{m.value=t===n.value||t.startsWith(n.value+"-")});const g=(t,a)=>{if(a.disabled){t.preventDefault();return}const{overlayMenuActive:v,staticMenuMobileActive:y}=b;(a.to||a.url)&&(y.value||v.value)&&C(),a.command&&a.command({originalEvent:t,item:a});const l=a.items?m.value?o.parentItemKey:n:n.value;w(l)},K=t=>I.path===t.to;return(t,a)=>{const v=h("router-link"),y=h("app-menu-item",!0);return i(),u("li",{class:c({"layout-root-menuitem":e.root,"active-menuitem":m.value})},[e.root&&e.item.visible!==!1?(i(),u("div",W,d(e.item.label),1)):s("",!0),(!e.item.to||e.item.items)&&e.item.visible!==!1?(i(),u("a",{key:1,href:e.item.url,onClick:a[0]||(a[0]=l=>g(l,e.item,e.index)),class:c(e.item.class),target:e.item.target,tabindex:"0"},[r("i",{class:c([e.item.icon,"layout-menuitem-icon"])},null,2),r("span",q,d(e.item.label),1),e.item.items?(i(),u("i",z)):s("",!0)],10,j)):s("",!0),e.item.to&&!e.item.items&&e.item.visible!==!1?(i(),f(v,{key:2,onClick:a[1]||(a[1]=l=>g(l,e.item,e.index)),class:c([e.item.class,{"active-route":K(e.item)}]),tabindex:"0",to:e.item.to},{default:x(()=>[r("i",{class:c([e.item.icon,"layout-menuitem-icon"])},null,2),r("span",O,d(e.item.label),1),e.item.items?(i(),u("i",V)):s("",!0)]),_:1},8,["class","to"])):s("",!0),e.item.items&&e.item.visible!==!1?(i(),f(N,{key:3,name:"layout-submenu"},{default:x(()=>[T(r("ul",G,[(i(!0),u(F,null,L(e.item.items,(l,A)=>(i(),f(y,{key:l,index:A,item:l,parentItemKey:n.value,root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[E,e.root?!0:m.value]])]),_:1})):s("",!0)],2)}}};export{P as default};
