import{d as s,r as n,b as c,c as l,e as u,w as a,h as e,av as _}from"./index-c80d305d.js";const d=e("div",{class:"card-header"},[e("span",{class:"font-medium"},"\u901A\u8FC7iframe\u5F15\u5165\u6309\u94AE\u9875\u9762")],-1),m=["src"],f=s({name:"Button"}),B=s({...f,setup(h){const{VITE_PUBLIC_PATH:t}=_(),o=n(`${t}html/button.html`);return(i,p)=>{const r=c("el-card");return l(),u(r,null,{header:a(()=>[d]),default:a(()=>[e("iframe",{src:o.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,m)]),_:1})}}});export{B as default};
