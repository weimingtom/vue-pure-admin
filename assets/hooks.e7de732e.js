import{a as p,aN as h,a_ as n,K as f}from"./index.f3ab0d14.js";function D(){var r,s,o;const t=p(),e=h(),u=(r=t.query)!=null&&r.id?(s=t.query)==null?void 0:s.id:(o=t.params)==null?void 0:o.id;function i(a,m){m==="query"?(n().handleTags("push",{path:"/tabs/query-detail",name:"TabQueryDetail",query:{id:String(a)},meta:{title:{zh:`No.${a} - \u8BE6\u60C5\u4FE1\u606F`,en:`No.${a} - DetailInfo`},dynamicLevel:3}}),e.push({name:"TabQueryDetail",query:{id:String(a)}})):(n().handleTags("push",{path:"/tabs/params-detail/:id",name:"TabParamsDetail",params:{id:String(a)},meta:{title:{zh:`No.${a} - \u8BE6\u60C5\u4FE1\u606F`,en:`No.${a} - DetailInfo`}}}),e.push({name:"TabParamsDetail",params:{id:String(a)}}))}function l(a){f(()=>{u&&i(u,a)})}return{toDetail:i,initToDetail:l,id:u,router:e}}export{D as u};
