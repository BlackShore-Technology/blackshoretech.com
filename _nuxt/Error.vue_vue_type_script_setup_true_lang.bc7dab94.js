import{_ as i}from"./Wrapper.c70199f6.js";import{_}from"./Button.vue_vue_type_script_setup_true_lang.6e22407a.js";import{b as m,k as d,o as u,c as f,p as x,A as t,B as n,u as s,v as b,C as h,D as B}from"./entry.ff687b2a.js";const g={class:"text-center mb-6 leading-3"},k={class:"font-bold text-8xl block"},w={class:"block italic"},z=m({__name:"Error",props:{code:{type:Number,default:400},wrap:{type:Boolean,default:!1}},setup(r){const e=r,c=i,p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found"},a=d(()=>{const{code:o}=e;return{code:o,message:p[o.toString()]||"Unknown Error"}});return(o,y)=>{const l=_;return u(),f(B(e.wrap?s(c):"div"),{class:h(e.wrap?"flex flex-col items-center justify-center":"")},{default:x(()=>[t("h1",g,[t("span",k,n(s(a).code),1),t("span",w,n(s(a).message),1)]),b(l,{text:"Home",to:"/",size:"sm"})]),_:1},8,["class"])}}});export{z as _};