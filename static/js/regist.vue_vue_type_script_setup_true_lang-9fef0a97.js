import{d as E,ac as N,r as x,al as T,b as p,c as z,e as D,w as o,f as l,u as e,P as f,b1 as m,h as F,g as c,G as g,bo as I}from"./index-8ae11110.js";import{M as u}from"./motion-ba8e41c8.js";import{m as k}from"./message-f47ab698.js";import{u as b,a as A}from"./verifyCode-35ce71cf.js";import{u as _}from"./hooks-85c39407.js";import{d as h}from"./lock-fill-bc8dfce3.js";import{d as G}from"./iphone-427c59de.js";import{d as M}from"./user-3-fill-0a0fdccb.js";const j={class:"w-full flex justify-between"},Y=E({__name:"regist",setup(q){const{t}=N(),V=x(!1),i=x(!1),s=T({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),v=x(),{isDisabled:R,text:C}=b(),P=[{validator:(y,a,n)=>{a===""?n(new Error(f(m("login.passwordSureReg")))):s.password!==a?n(new Error(f(m("login.passwordDifferentReg")))):n()},trigger:"blur"}],U=async y=>{i.value=!0,y&&await y.validate((a,n)=>{if(a)V.value?setTimeout(()=>{k(f(m("login.registerSuccess")),{type:"success"}),i.value=!1},2e3):(i.value=!1,k(f(m("login.tickPrivacy")),{type:"warning"}));else return i.value=!1,n})};function S(){b().end(),I().SET_CURRENTPAGE(0)}return(y,a)=>{const n=p("el-input"),d=p("el-form-item"),w=p("el-button"),$=p("el-checkbox"),B=p("el-form");return z(),D(B,{ref_key:"ruleFormRef",ref:v,model:s,rules:e(A),size:"large"},{default:o(()=>[l(e(u),null,{default:o(()=>[l(d,{rules:[{required:!0,message:e(f)(e(m)("login.usernameReg")),trigger:"blur"}],prop:"username"},{default:o(()=>[l(n,{clearable:"",modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=r=>s.username=r),placeholder:e(t)("login.username"),"prefix-icon":e(_)(e(M))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])]),_:1}),l(e(u),{delay:100},{default:o(()=>[l(d,{prop:"phone"},{default:o(()=>[l(n,{clearable:"",modelValue:s.phone,"onUpdate:modelValue":a[1]||(a[1]=r=>s.phone=r),placeholder:e(t)("login.phone"),"prefix-icon":e(_)(e(G))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:150},{default:o(()=>[l(d,{prop:"verifyCode"},{default:o(()=>[F("div",j,[l(n,{clearable:"",modelValue:s.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=r=>s.verifyCode=r),placeholder:e(t)("login.smsVerifyCode"),"prefix-icon":e(_)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),l(w,{disabled:e(R),class:"ml-2",onClick:a[3]||(a[3]=r=>e(b)().start(v.value,"phone"))},{default:o(()=>[c(g(e(C).length>0?e(C)+e(t)("login.info"):e(t)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),l(e(u),{delay:200},{default:o(()=>[l(d,{prop:"password"},{default:o(()=>[l(n,{clearable:"","show-password":"",modelValue:s.password,"onUpdate:modelValue":a[4]||(a[4]=r=>s.password=r),placeholder:e(t)("login.password"),"prefix-icon":e(_)(e(h))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:250},{default:o(()=>[l(d,{rules:P,prop:"repeatPassword"},{default:o(()=>[l(n,{clearable:"","show-password":"",modelValue:s.repeatPassword,"onUpdate:modelValue":a[5]||(a[5]=r=>s.repeatPassword=r),placeholder:e(t)("login.sure"),"prefix-icon":e(_)(e(h))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(u),{delay:300},{default:o(()=>[l(d,null,{default:o(()=>[l($,{modelValue:V.value,"onUpdate:modelValue":a[6]||(a[6]=r=>V.value=r)},{default:o(()=>[c(g(e(t)("login.readAccept")),1)]),_:1},8,["modelValue"]),l(w,{link:"",type:"primary"},{default:o(()=>[c(g(e(t)("login.privacyPolicy")),1)]),_:1})]),_:1})]),_:1}),l(e(u),{delay:350},{default:o(()=>[l(d,null,{default:o(()=>[l(w,{class:"w-full",size:"default",type:"primary",loading:i.value,onClick:a[7]||(a[7]=r=>U(v.value))},{default:o(()=>[c(g(e(t)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),l(e(u),{delay:400},{default:o(()=>[l(d,null,{default:o(()=>[l(w,{class:"w-full",size:"default",onClick:S},{default:o(()=>[c(g(e(t)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{Y as _};
