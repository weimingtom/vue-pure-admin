import{d as ie,r as w,au as q,s as l,av as Te,c as R,k as W,u as e,a3 as M,ah as ne,aw as z,ap as oe,h as L,n as Ce,ax as Me,ay as ke,R as xe}from"./index-21b55a35.js";const Ee=()=>{window.cancelAnimationFrame=(()=>window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(u){return window.clearTimeout(u)})(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){return window.setTimeout(u,1e3/60)}}()},Be=(u,h)=>{if(u===h)return!0;if(u.length!==h.length)return!1;for(let r=0;r<u.length;++r)if(u[r]!==h[r])return!1;return!0};function se(){Array.isArray||(Array.isArray=function(g){return Object.prototype.toString.call(g)==="[object Array]"});let u,h,r,c,S,C,t=1,n=arguments[0]||{},f=!1,b=arguments.length;if(typeof n=="boolean"&&(f=n,n=arguments[1]||{},t++),typeof n!="object"&&typeof n!="function"&&(n={}),t===b)return n;for(;t<b;t++)if((h=arguments[t])!=null)for(u in h)r=n[u],c=h[u],S=Array.isArray(c),f&&c&&(typeof c=="object"||S)?(S?(S=!1,C=r&&Array.isArray(r)?r:[]):C=r&&typeof r=="object"?r:{},n[u]=se(f,C,c)):c!==void 0&&(n[u]=c);return n}const De=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:Ee,arrayEqual:Be,copyObj:se},Symbol.toStringTag,{value:"Module"})),Oe=["innerHTML"],$e=ie({name:"ReSeamlessScroll"}),He=ie({...$e,props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(u,{expose:h,emit:r}){const c=u,{animationFrame:S,copyObj:C}=De;S();const t=w(0),n=w(0),f=w(0),b=w(0),g=w(0),F=w(0),k=w(0),x=w("");let y=null,Y=null,E=null,N=null,I=null,B=!1,D="ease-in";const{classOption:m}=c;m.key===void 0&&(m.key=0);const U=q(`wrap${m.key}`,null),X=q(`slotList${m.key}`,null),V=q(`realBox${m.key}`,null),G=l(()=>e(t)<0),J=l(()=>Math.abs(e(t))<e(F)-e(g)),le=l(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),i=l(()=>C({},e(le),m)),ae=l(()=>e(G)?"":e(i).switchDisabledClass),re=l(()=>e(J)?"":e(i).switchDisabledClass),ue=l(()=>({position:"absolute",margin:`${e(b)/2}px 0 0 -${e(i).switchOffset}px`,transform:"translate(-100%,-50%)"})),ce=l(()=>({position:"absolute",margin:`${e(b)/2}px 0 0 ${e(g)+e(i).switchOffset}px`,transform:"translateY(-50%)"})),O=l(()=>e(i).direction!=="bottom"&&e(i).direction!=="top"),K=l(()=>e(O)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),fe=l(()=>({transform:`translate(${e(t)}px,${e(n)}px)`,transition:`all ${D} ${e(f)}ms`,overflow:"hidden"})),$=l(()=>e(i).navigation),H=l(()=>e($)?!1:e(i).autoPlay),Q=l(()=>c.data.length>=e(i).limitMoveNum),Z=l(()=>e(i).hoverStop&&e(H)&&e(Q)),P=l(()=>e(i).openTouch),ee=l(()=>e(i).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),_=l(()=>e(i).singleWidth*e(ee)),j=l(()=>e(i).singleHeight*e(ee)),p=l(()=>{let o;const s=e(i).step;if(e(O)?o=e(_):o=e(j),o>0&&o%s>0)throw"\u5982\u679C\u8BBE\u7F6E\u4E86\u5355\u6B65\u6EDA\u52A8\uFF0Cstep\u9700\u662F\u5355\u6B65\u5927\u5C0F\u7684\u7EA6\u6570\uFF0C\u5426\u5219\u65E0\u6CD5\u4FDD\u8BC1\u5355\u6B65\u6EDA\u52A8\u7ED3\u675F\u7684\u4F4D\u7F6E\u662F\u5426\u51C6\u786E";return s});function he(){t.value=0,n.value=0,A(),te()}function me(){if(!!e(G)){if(Math.abs(e(t))<e(i).switchSingleStep){t.value=0;return}t.value+=e(i).switchSingleStep}}function de(){if(!!e(J)){if(e(F)-e(g)+e(t)<e(i).switchSingleStep){t.value=e(g)-e(F);return}t.value-=e(i).switchSingleStep}}function A(){cancelAnimationFrame(Y||"")}function pe(o){if(!e(P))return;let s;const a=o.targetTouches[0],{waitTime:d,singleHeight:T,singleWidth:Ae}=e(i);E={x:a.pageX,y:a.pageY},N=e(n),I=e(t),!!T&&!!Ae?(s&&clearTimeout(s),s=setTimeout(()=>{A()},d+20)):A()}function ve(o){if(!e(P)||o.targetTouches.length>1||o.scale&&o.scale!==1)return;const s=o.targetTouches[0],{direction:a}=e(i),d={x:s.pageX-E.x,y:s.pageY-E.y};o.preventDefault();const T=Math.abs(d.x)<Math.abs(d.y)?1:0;T===1&&a==="bottom"||T===1&&a==="top"?n.value=N+d.y:(T===0&&a==="left"||T===0&&a==="right")&&(t.value=I+d.x)}function we(){if(!e(P))return;let o;const s=e(i).direction;if(f.value=50,s==="top")e(n)>0&&(n.value=0);else if(s==="bottom"){const a=e(k)/2*-1;e(n)<a&&(n.value=a)}else if(s==="left")e(t)>0&&(t.value=0);else if(s==="right"){const a=e(F)*-1;e(t)<a&&(t.value=a)}o&&clearTimeout(o),o=setTimeout(()=>{f.value=0,v()},e(f))}function ge(){e(Z)&&be()}function ye(){e(Z)&&Se()}function v(){B||(Y=requestAnimationFrame(function(){const o=e(k)/2,s=e(F)/2,{direction:a,waitTime:d}=e(i);a==="top"?(Math.abs(e(n))>=o&&(r("scrollEnd"),n.value=0),n.value-=p.value):a==="bottom"?(e(n)>=0&&(r("scrollEnd"),n.value=o*-1),n.value+=p.value):a==="left"?(Math.abs(e(t))>=s&&(r("scrollEnd"),t.value=0),t.value-=p.value):a==="right"&&(e(t)>=0&&(r("scrollEnd"),t.value=s*-1),t.value+=p.value),y&&clearTimeout(y),e(j)?Math.abs(e(n))%e(j)<e(p)?y=setTimeout(()=>{v()},d):v():e(_)&&Math.abs(e(t))%e(_)<e(p)?y=setTimeout(()=>{v()},d):v()}))}function te(){Ce(()=>{const{switchDelay:o}=e(i);if(x.value="",e(O)){b.value=e(U).offsetHeight,g.value=e(U).offsetWidth;let s=e(X).offsetWidth;e(H)&&(s=s*2+1),e(V).style.width=s+"px",F.value=s}if(e(H))D="ease-in",f.value=0;else{D="linear",f.value=o;return}e(Q)?(x.value=e(X).innerHTML,setTimeout(()=>{var s;k.value=(s=e(V))==null?void 0:s.offsetHeight,v()},0)):(A(),n.value=t.value=0)})}function Se(){B=!1,v()}function be(){B=!0,y&&clearTimeout(y),A()}function Fe(o){e(i).direction==="left"||e(i).direction==="right"||Me(()=>{o.deltaY>0?n.value-=p.value:n.value+=p.value},50)()}return Te(()=>{te()}),ke(()=>{A(),clearTimeout(y)}),h({reset:he}),(o,s)=>(R(),W("div",{ref:"wrap"+e(m).key},[e($)?(R(),W("div",{key:0,style:M(e(ue)),class:ne(e(ae)),onClick:me},[z(o.$slots,"left-switch")],6)):oe("",!0),e($)?(R(),W("div",{key:1,style:M(e(ce)),class:ne(e(re)),onClick:de},[z(o.$slots,"right-switch")],6)):oe("",!0),L("div",{ref:"realBox"+e(m).key,style:M(e(fe)),onMouseenter:ge,onMouseleave:ye,onTouchstartPassive:pe,onTouchmovePassive:ve,onTouchend:we,onMousewheelPassive:Fe},[L("div",{ref:"slotList"+e(m).key,style:M(e(K))},[z(o.$slots,"default")],4),L("div",{innerHTML:x.value,style:M(e(K))},null,12,Oe)],36)],512))}}),Pe=xe(He),je=Pe;export{je as S};