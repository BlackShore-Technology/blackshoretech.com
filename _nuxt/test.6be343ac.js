import{_ as k,a as v}from"./Header.d4ae96d5.js";import{b as y,o as g,s as V,r as h,H as N,B as r,z as B,a4 as b,a5 as P,c as S,p as c,v as e,A as a,u as t,S as i}from"./entry.18e9a376.js";import{_ as T}from"./Button.vue_vue_type_script_setup_true_lang.c2021050.js";import{_ as H,a as I}from"./Body.3b018e6c.js";import{_ as U}from"./TextInput.vue_vue_type_script_setup_true_lang.a2e864be.js";import{_ as j}from"./Wrapper.d83d9653.js";import{u as A}from"./useLang.8f06f2f5.js";import{c as D}from"./str.e3d4e921.js";import"./_plugin-vue_export-helper.a1a6add7.js";const E={class:"text-2xl font-semibold mb-2"},F=y({__name:"Title",props:{text:{type:String,default:""}},setup(u){return(m,n)=>(g(),V("div",E,[h(m.$slots,"default",{},()=>[N(r(u.text),1)])]))}}),L={class:""},M={class:"mb-2"},W={class:"flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},q={class:"mb-2"},G={class:"capitalize"},J={class:"mb-2"},K={class:"flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},ae=y({__name:"test",setup(u){const{t:m}=A();B(()=>({title:D(m("pages.test.title")),meta:[{name:"description",content:m("pages.test.description")}]}));const n=b(),o=P();return(s,p)=>{const w=k,z=v,_=F,l=T,f=H,x=U,$=I,C=j;return g(),S(C,null,{default:c(()=>[e(z,null,{default:c(()=>[e(w,{text:s.$t("pages.test.title"),class:"capitalize"},null,8,["text"])]),_:1}),e($,null,{default:c(()=>[e(f,null,{default:c(()=>[e(_,{text:s.$t("pages.test.counter"),class:"capitalize"},null,8,["text"]),a("div",L,[a("div",M,"Counter : "+r(t(n).count),1),a("div",W,[e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.increment"),onClick:i(t(n).increment,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto",type:"secondary",size:"sm",text:`${s.$t("pages.test.increment")} 2x`,onClick:i(t(n).increment2x,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.decrement"),onClick:i(t(n).decrement,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.reset"),onClick:i(t(n).reset,["prevent"])},null,8,["text","onClick"])])])]),_:1}),e(f,null,{default:c(()=>[e(_,{text:s.$t("pages.test.identity"),class:"capitalize"},null,8,["text"]),a("div",q,[a("span",G,r(s.$t("pages.test.full_name"))+" : ",1),a("span",null,r(t(o).fullName),1)]),a("div",J,[a("div",K,[e(x,{modelValue:t(o).firstName,"onUpdate:modelValue":p[0]||(p[0]=d=>t(o).firstName=d),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(x,{modelValue:t(o).lastName,"onUpdate:modelValue":p[1]||(p[1]=d=>t(o).lastName=d),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(l,{class:"capitalize w-full md:w-auto",text:s.$t("pages.test.reset"),type:"secondary",size:"md",onClick:i(t(o).reset,["prevent"])},null,8,["text","onClick"])])])]),_:1})]),_:1})]),_:1})}}});export{ae as default};