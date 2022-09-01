import{a4 as ue,i as $,P as se,I as N,T as O,L as y,O as g,$ as S,b as U,k as x,a0 as G,M as de}from"./entry.ff687b2a.js";function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var V=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(V||{}),m=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(m||{});function M({visible:e=!0,features:t=0,...n}){var r;if(e||t&2&&n.props.static)return D(n);if(t&1){let o=(r=n.props.unmount)==null||r?0:1;return w(o,{[0](){return null},[1](){return D({...n,props:{...n.props,hidden:!0,style:{display:"none"}}})}})}return D(n)}function D({props:e,attrs:t,slots:n,slot:r,name:o}){var a;let{as:l,...u}=z(e,["unmount","static"]),i=(a=n.default)==null?void 0:a.call(n,r),d={};if(l==="template"){if(i=Q(i),Object.keys(u).length>0||Object.keys(t).length>0){let[f,...c]=i!=null?i:[];if(!fe(f)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));return ue(f,Object.assign({},u,d))}return Array.isArray(i)&&i.length===1?i[0]:i}return $(l,Object.assign({},u,d),i)}function Q(e){return e.flatMap(t=>t.type===se?Q(t.children):[t])}function We(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function z(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function fe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let ce=0;function pe(){return++ce}function ve(){return pe()}var me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(me||{});function E(e){return e==null||e.value==null?null:"$el"in e.value?e.value.$el:e.value}let J=Symbol("Context");var F=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(F||{});function he(){return K()!==null}function K(){return N(J,null)}function be(e){O(J,e)}function W(e,t){if(e)return e;let n=t!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function _e(e,t){let n=y(W(e.value.type,e.value.as));return g(()=>{n.value=W(e.value.type,e.value.as)}),S(()=>{var r;n.value||!E(t)||E(t)instanceof HTMLButtonElement&&!((r=E(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function ye(e){if(typeof window>"u")return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let B=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var we=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(we||{}),ge=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ge||{}),Ee=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ee||{});function Se(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(B))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function Ge(e,t=0){var n;return e===((n=ye(e))==null?void 0:n.body)?!1:w(t,{[0](){return e.matches(B)},[1](){let r=e;for(;r!==null;){if(r.matches(B))return!0;r=r.parentElement}return!1}})}let Ae=["textarea","input"].join(",");function Te(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ae))!=null?n:!1}function Le(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ve(e,t,n=!0){var r;let o=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,a=Array.isArray(e)?n?Le(e):e:Se(e),l=o.activeElement,u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(l))-1;if(t&4)return Math.max(0,a.indexOf(l))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},f=0,c=a.length,s;do{if(f>=c||f+c<=0)return 0;let p=i+f;if(t&16)p=(p+c)%c;else{if(p<0)return 3;if(p>=c)return 1}s=a[p],s==null||s.focus(d),f+=u}while(s!==o.activeElement);return s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),t&6&&Te(s)&&s.select(),2}var Oe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Oe||{});let Qe=U({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return M({props:{...o,...a},slot:{},attrs:n,slots:t,name:"Hidden"})}}});function xe(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Y(){let e=[],t=[],n={enqueue(r){t.push(r)},requestAnimationFrame(...r){let o=requestAnimationFrame(...r);n.add(()=>cancelAnimationFrame(o))},nextFrame(...r){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...r)})},setTimeout(...r){let o=setTimeout(...r);n.add(()=>clearTimeout(o))},add(r){e.push(r)},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()}};return n}function P(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var H=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(H||{});function Ne(e,t){let n=Y();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[a,l]=[r,o].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,f)=>f-d);return i});return a!==0?n.setTimeout(()=>t("finished"),a+l):t("finished"),n.add(()=>t("cancelled")),n.dispose}function _(e,t,n,r,o,a){let l=Y(),u=a!==void 0?xe(a):()=>{};return L(e,...o),P(e,...t,...n),l.nextFrame(()=>{L(e,...n),P(e,...r),l.add(Ne(e,i=>(L(e,...r,...t),P(e,...o),u(i))))}),l.add(()=>L(e,...t,...n,...r,...o)),l.add(()=>u("cancelled")),l.dispose}function b(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let k=Symbol("TransitionContext");var je=(e=>(e.Visible="visible",e.Hidden="hidden",e))(je||{});function Ce(){return N(k,null)!==null}function De(){let e=N(k,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Pe(){let e=N(R,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let R=Symbol("NestingContext");function j(e){return"children"in e?j(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function X(e){let t=y([]),n=y(!1);g(()=>n.value=!0),G(()=>n.value=!1);function r(a,l=m.Hidden){let u=t.value.findIndex(({id:i})=>i===a);u!==-1&&(w(l,{[m.Unmount](){t.value.splice(u,1)},[m.Hidden](){t.value[u].state="hidden"}}),!j(t)&&n.value&&(e==null||e()))}function o(a){let l=t.value.find(({id:u})=>u===a);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,m.Unmount)}return{children:t,register:o,unregister:r}}let Z=V.RenderStrategy,Be=U({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:o}){if(!Ce()&&he())return()=>$($e,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},r);let a=y(null),l=y("visible"),u=x(()=>e.unmount?m.Unmount:m.Hidden);o({el:a,$el:a});let{show:i,appear:d}=De(),{register:f,unregister:c}=Pe(),s={value:!0},p=ve(),A={value:!1},I=X(()=>{A.value||(l.value="hidden",c(p),t("afterLeave"))});g(()=>{let v=f(p);G(v)}),S(()=>{if(u.value===m.Hidden&&!!p){if(i&&l.value!=="visible"){l.value="visible";return}w(l.value,{hidden:()=>c(p),visible:()=>f(p)})}});let ee=b(e.enter),te=b(e.enterFrom),ne=b(e.enterTo),q=b(e.entered),re=b(e.leave),ae=b(e.leaveFrom),le=b(e.leaveTo);g(()=>{S(()=>{if(l.value==="visible"){let v=E(a);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function oe(v){let C=s.value&&!d.value,h=E(a);!h||!(h instanceof HTMLElement)||C||(A.value=!0,i.value&&t("beforeEnter"),i.value||t("beforeLeave"),v(i.value?_(h,ee,te,ne,q,T=>{A.value=!1,T===H.Finished&&t("afterEnter")}):_(h,re,ae,le,q,T=>{A.value=!1,T===H.Finished&&(j(I)||(l.value="hidden",c(p),t("afterLeave")))})))}return g(()=>{de([i],(v,C,h)=>{oe(h),s.value=!1},{immediate:!0})}),O(R,I),be(x(()=>w(l.value,{visible:F.Open,hidden:F.Closed}))),()=>{let{appear:v,show:C,enter:h,enterFrom:T,enterTo:Ue,entered:Me,leave:ke,leaveFrom:Re,leaveTo:Ie,...ie}=e;return M({props:{...ie,ref:a},slot:{},slots:r,attrs:n,features:Z,visible:l.value==="visible",name:"TransitionChild"})}}}),He=Be,$e=U({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let o=K(),a=x(()=>e.show===null&&o!==null?w(o.value,{[F.Open]:!0,[F.Closed]:!1}):e.show);S(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=y(a.value?"visible":"hidden"),u=X(()=>{l.value="hidden"}),i=y(!0),d={show:a,appear:x(()=>e.appear||!i.value)};return g(()=>{S(()=>{i.value=!1,a.value?l.value="visible":j(u)||(l.value="hidden")})}),O(R,u),O(k,d),()=>{let f=z(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return M({props:{...c,as:"template"},slot:{},slots:{...r,default:()=>[$(He,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...c,...f},r.default)]},attrs:{},features:Z,visible:l.value==="visible",name:"Transition"})}}});export{Ge as F,we as L,Fe as M,Ve as P,V as R,M as T,We as V,Oe as a,ve as b,_e as c,be as d,Le as e,$e as f,F as l,Qe as m,me as o,K as p,Be as s,E as t,w as u,z as w};