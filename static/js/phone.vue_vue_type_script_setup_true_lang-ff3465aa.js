import{d as w,ac as R,r as C,al as B,b as d,c as N,e as S,w as l,f as o,u as e,h as T,g as _,G as g,P as U,b1 as z,bo as F}from"./index-8ae11110.js";import{M as f}from"./motion-ba8e41c8.js";import{m as I}from"./message-f47ab698.js";import{u as y,p as $}from"./verifyCode-35ce71cf.js";import{u as b}from"./hooks-85c39407.js";import{d as D}from"./iphone-427c59de.js";const E={class:"w-full flex justify-between"},q=w({__name:"phone",setup(G){const{t:n}=R(),r=C(!1),t=B({phone:"",verifyCode:""}),p=C(),{isDisabled:V,text:v}=y(),h=async m=>{r.value=!0,m&&await m.validate((a,i)=>{if(a)setTimeout(()=>{I(U(z("login.loginSuccess")),{type:"success"}),r.value=!1},2e3);else return r.value=!1,i})};function k(){y().end(),F().SET_CURRENTPAGE(0)}return(m,a)=>{const i=d("el-input"),u=d("el-form-item"),c=d("el-button"),x=d("el-form");return N(),S(x,{ref_key:"ruleFormRef",ref:p,model:t,rules:e($),size:"large"},{default:l(()=>[o(e(f),null,{default:l(()=>[o(u,{prop:"phone"},{default:l(()=>[o(i,{clearable:"",modelValue:t.phone,"onUpdate:modelValue":a[0]||(a[0]=s=>t.phone=s),placeholder:e(n)("login.phone"),"prefix-icon":e(b)(e(D))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:100},{default:l(()=>[o(u,{prop:"verifyCode"},{default:l(()=>[T("div",E,[o(i,{clearable:"",modelValue:t.verifyCode,"onUpdate:modelValue":a[1]||(a[1]=s=>t.verifyCode=s),placeholder:e(n)("login.smsVerifyCode"),"prefix-icon":e(b)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(c,{disabled:e(V),class:"ml-2",onClick:a[2]||(a[2]=s=>e(y)().start(p.value,"phone"))},{default:l(()=>[_(g(e(v).length>0?e(v)+e(n)("login.info"):e(n)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(f),{delay:150},{default:l(()=>[o(u,null,{default:l(()=>[o(c,{class:"w-full",size:"default",type:"primary",loading:r.value,onClick:a[3]||(a[3]=s=>h(p.value))},{default:l(()=>[_(g(e(n)("login.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(f),{delay:200},{default:l(()=>[o(u,null,{default:l(()=>[o(c,{class:"w-full",size:"default",onClick:k},{default:l(()=>[_(g(e(n)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{q as _};
