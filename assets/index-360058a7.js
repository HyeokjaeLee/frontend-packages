import{j as a}from"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import{g as $,h as w,i as k}from"./useGetter-1ab4680d.js";import{c as N}from"./index-6831fd36.js";const q="_button_1jx3z_553",B="_icon_1jx3z_626",D="_delaying_1jx3z_655",V="_primary_1jx3z_659",L="_secondary_1jx3z_687",S="_success_1jx3z_715",C="_warning_1jx3z_743",M="_danger_1jx3z_771",R="_clear_1jx3z_799",E="_dark_1jx3z_831",I="_ghost_1jx3z_864",e={button:q,"delayed-button":"_delayed-button_1jx3z_558","size-small":"_size-small_1jx3z_577","children-type-icon":"_children-type-icon_1jx3z_581","size-medium":"_size-medium_1jx3z_585","size-large":"_size-large_1jx3z_593","children-type-text":"_children-type-text_1jx3z_601","children-type-both":"_children-type-both_1jx3z_609","shape-sharp-corner":"_shape-sharp-corner_1jx3z_613","shape-rounded":"_shape-rounded_1jx3z_617","shape-pill":"_shape-pill_1jx3z_621","icon-direction-left":"_icon-direction-left_1jx3z_626","icon-direction-right":"_icon-direction-right_1jx3z_630","button-content":"_button-content_1jx3z_635",icon:B,"delay-bar":"_delay-bar_1jx3z_647",delaying:D,primary:V,secondary:L,success:S,warning:C,danger:M,clear:R,dark:E,ghost:I,"fade-in-bottom":"_fade-in-bottom_1jx3z_1","fade-in-top":"_fade-in-top_1jx3z_1","fade-in":"_fade-in_1jx3z_1","fade-out-bottom":"_fade-out-bottom_1jx3z_1","fade-out-top":"_fade-out-top_1jx3z_1","fade-out":"_fade-out_1jx3z_1","scale-in-center":"_scale-in-center_1jx3z_1","scale-in-top":"_scale-in-top_1jx3z_1","scale-out-top":"_scale-out-top_1jx3z_1","scale-up-center":"_scale-up-center_1jx3z_1","shake-horizontal":"_shake-horizontal_1jx3z_1","slide-in-bottom":"_slide-in-bottom_1jx3z_1","slide-in-fwd-center":"_slide-in-fwd-center_1jx3z_1","slide-in-left":"_slide-in-left_1jx3z_1","slide-in-right":"_slide-in-right_1jx3z_1","slide-in-top":"_slide-in-top_1jx3z_1","slide-out-bottom":"_slide-out-bottom_1jx3z_1","slide-out-left":"_slide-out-left_1jx3z_1","slide-out-right":"_slide-out-right_1jx3z_1","slide-out-top":"_slide-out-top_1jx3z_1","swing-in-top-fwd":"_swing-in-top-fwd_1jx3z_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1jx3z_1"},c=({delay:t,size:p="medium",theme:s="primary",shape:m="rounded",iconDirection:_="left",icon:n,loading:i=!1,type:r="button",children:o,disabled:d,className:z,onClick:x,...j})=>{const{isDelayButton:l,isDelaying:f}=$({delay:t,disabled:d}),u=(()=>n&&o?"both":n?"icon":"text")(),y=d||l,{isDarkMode:h}=w(),{leftLoadingSpinner:g,rightLoadingSpinner:b,iconLoadingSpinner:v}=k({loading:i,childrenType:u,iconDirection:_});return a.jsxs("button",{...j,onClick:i?void 0:x,type:i&&r==="submit"?"button":r,className:N(`${l?e["delayed-button"]:e.button} ${e[`shape-${m}`]} ${e[`size-${p}`]} ${e[`icon-direction-${_}`]} ${e[`children-type-${u}`]} ${e[s]} ${h&&s==="clear"&&e.dark} ${z}`),disabled:y,children:[t&&l?a.jsx("div",{className:`${e["delay-bar"]} ${f&&e.delaying}`,style:{transition:`transform ${t/1e3}s linear`}}):null,g,o&&a.jsx("div",{className:e["button-content"],children:o}),n?v??a.jsx("div",{className:`${e["button-content"]} ${e.icon}`,children:n}):null,b]})};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"clear"'},{value:'"ghost"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"sharp-corner"'},{value:'"rounded"'},{value:'"pill"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{c as B};
//# sourceMappingURL=index-360058a7.js.map