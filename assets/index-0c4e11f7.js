import{j as a}from"./jsx-runtime-4ca860c5.js";import{r as k}from"./index-61bf1805.js";import{t as N,u as T,s as H,p as D}from"./useGetter-60928ef3.js";import{c as M}from"./index-6831fd36.js";const S="_decoration_2469g_553",$="_reversed_2469g_572",E="_textarea_2469g_562",t={decoration:S,"textarea-wrap":"_textarea-wrap_2469g_562",reversed:$,"size-small":"_size-small_2469g_575","size-medium":"_size-medium_2469g_578","size-large":"_size-large_2469g_581",textarea:E,"fade-in-bottom":"_fade-in-bottom_2469g_1","fade-in-top":"_fade-in-top_2469g_1","fade-in":"_fade-in_2469g_1","fade-out-bottom":"_fade-out-bottom_2469g_1","fade-out-top":"_fade-out-top_2469g_1","fade-out":"_fade-out_2469g_1","scale-in-center":"_scale-in-center_2469g_1","scale-in-top":"_scale-in-top_2469g_1","scale-out-top":"_scale-out-top_2469g_1","scale-up-center":"_scale-up-center_2469g_1","shake-horizontal":"_shake-horizontal_2469g_1","slide-in-bottom":"_slide-in-bottom_2469g_1","slide-in-fwd-center":"_slide-in-fwd-center_2469g_1","slide-in-left":"_slide-in-left_2469g_1","slide-in-right":"_slide-in-right_2469g_1","slide-in-top":"_slide-in-top_2469g_1","slide-out-bottom":"_slide-out-bottom_2469g_1","slide-out-left":"_slide-out-left_2469g_1","slide-out-right":"_slide-out-right_2469g_1","slide-out-top":"_slide-out-top_2469g_1","swing-in-top-fwd":"_swing-in-top-fwd_2469g_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_2469g_1"},m=k.forwardRef(({size:n="medium",value:c,onChange:i,children:o,validation:p,className:f,style:g,label:v,reversed:x,fixedDarkMode:h,onInvalid:l,...d},y)=>{const{textareaRef:b,handleTextareaHeight:w}=N(y),[_,z,V]=T(c),{required:u,id:q}=d,{validationMessage:j,validateOnChange:s}=H({validateHandler:p,value:_,key:q});return a.jsx(D.Wrap,{size:"fit-content",className:f,style:g,validationMessage:j,label:v,required:u,fixedDarkMode:h,children:a.jsxs("div",{className:M(`${t["textarea-wrap"]} ${t[`size-${n}`]} ${x&&t.reversed}`),children:[a.jsx("textarea",{...d,value:_,rows:1,className:t.textarea,required:u,ref:b,onChange:({target:e})=>{const{value:r}=e;i==null||i({value:r,preventInnerStateChange:V}),z(r),s==null||s(r),w(e)},onInvalid:e=>{e.preventDefault(),l==null||l(e)}}),o?a.jsx("div",{className:t.decoration,children:o}):null]})})});try{m.displayName="Textarea",m.__docgenInfo={description:"",displayName:"Textarea",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"InnerStateChangeEventHandler<string>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},fixedDarkMode:{defaultValue:null,description:"",name:"fixedDarkMode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},reversed:{defaultValue:null,description:"",name:"reversed",required:!1,type:{name:"boolean"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"ValidateHandler<string>"}}}}}catch{}export{m as T};
//# sourceMappingURL=index-0c4e11f7.js.map