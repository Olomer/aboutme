"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{2281:(t,e,n)=>{n.d(e,{Anchor:()=>p});var r=n(7437),o=n(4839);n(2265);var a=n(591),i=n(869),s=n(6293),c={root:"m_849cf0da"};let l={underline:"hover"},p=(0,i.b)((t,e)=>{let{underline:n,className:i,unstyled:p,mod:u,...d}=(0,a.w)("Anchor",l,t);return(0,r.jsx)(s.Text,{component:"a",ref:e,className:(0,o.Z)({[c.root]:!p},i),...d,mod:[{underline:n},u],__staticSelector:"Anchor",unstyled:p})});p.classes=c,p.displayName="@mantine/core/Anchor"},4704:(t,e,n)=>{n.d(e,{z:()=>F});var r=n(7437),o=n(1607),a=n(2265),i=n(4120),s=n(5593),c=n(591),l=n(9830),p=n(6449),u=n(869),d=n(5027),m=n(3147),y=n(4839),f={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let h=(0,a.forwardRef)((t,e)=>{let{className:n,...o}=t;return(0,r.jsxs)(p.x,{component:"span",className:(0,y.Z)(f.barsLoader,n),...o,ref:e,children:[(0,r.jsx)("span",{className:f.bar}),(0,r.jsx)("span",{className:f.bar}),(0,r.jsx)("span",{className:f.bar})]})});h.displayName="@mantine/core/Bars";let v=(0,a.forwardRef)((t,e)=>{let{className:n,...o}=t;return(0,r.jsxs)(p.x,{component:"span",className:(0,y.Z)(f.dotsLoader,n),...o,ref:e,children:[(0,r.jsx)("span",{className:f.dot}),(0,r.jsx)("span",{className:f.dot}),(0,r.jsx)("span",{className:f.dot})]})});v.displayName="@mantine/core/Dots";let g=(0,a.forwardRef)((t,e)=>{let{className:n,...o}=t;return(0,r.jsx)(p.x,{component:"span",className:(0,y.Z)(f.ovalLoader,n),...o,ref:e})});g.displayName="@mantine/core/Oval";let b={bars:h,oval:g,dots:v},x={loaders:b,type:"oval"},w=(0,s.Z)((t,e)=>{let{size:n,color:r}=e;return{root:{"--loader-size":(0,i.ap)(n,"loader-size"),"--loader-color":r?(0,d.p)(r,t):void 0}}}),j=(0,m.d5)((t,e)=>{let n=(0,c.w)("Loader",x,t),{size:o,color:a,type:i,vars:s,className:u,style:d,classNames:m,styles:y,unstyled:h,loaders:v,variant:g,children:b,...j}=n,S=(0,l.y)({name:"Loader",props:n,classes:f,className:u,style:d,classNames:m,styles:y,unstyled:h,vars:s,varsResolver:w});return b?(0,r.jsx)(p.x,{...S("root"),ref:e,...j,children:b}):(0,r.jsx)(p.x,{...S("root"),ref:e,component:v[i],variant:g,size:o,...j})});j.defaultLoaders=b,j.classes=f,j.displayName="@mantine/core/Loader";let S=t=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(".concat((0,o.h)("bottom"===t?10:-10),")")},transitionProperty:"transform, opacity"}),N={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-20),") skew(-10deg, -5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") skew(-10deg, -5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(-5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...S("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...S("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...S("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...S("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...S("top"),common:{transformOrigin:"top right"}}},z={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var A=n(4887),_=n(5624),R=n(5274);function P(t){let{keepMounted:e,transition:n="fade",duration:o=250,exitDuration:i=o,mounted:s,children:c,timingFunction:l="ease",onExit:p,onEntered:u,onEnter:d,onExited:m,enterDelay:y,exitDelay:f}=t,{transitionDuration:h,transitionStatus:v,transitionTimingFunction:g}=function(t){let{duration:e,exitDuration:n,timingFunction:r,mounted:o,onEnter:i,onExit:s,onEntered:c,onExited:l,enterDelay:p,exitDelay:u}=t,d=(0,R.rZ)(),m=(0,_.a)("(prefers-reduced-motion: reduce)",void 0,void 0),y=!!d.respectReducedMotion&&m,[f,h]=(0,a.useState)(y?0:e),[v,g]=(0,a.useState)(o?"entered":"exited"),b=(0,a.useRef)(-1),x=(0,a.useRef)(-1),w=(0,a.useRef)(-1),j=t=>{let r=t?i:s,o=t?c:l;window.clearTimeout(b.current);let a=y?0:t?e:n;h(a),0===a?("function"==typeof r&&r(),"function"==typeof o&&o(),g(t?"entered":"exited")):w.current=requestAnimationFrame(()=>{A.flushSync(()=>{g(t?"pre-entering":"pre-exiting")}),w.current=requestAnimationFrame(()=>{"function"==typeof r&&r(),g(t?"entering":"exiting"),b.current=window.setTimeout(()=>{"function"==typeof o&&o(),g(t?"entered":"exited")},a)})})},S=t=>{if(window.clearTimeout(x.current),"number"!=typeof(t?p:u)){j(t);return}x.current=window.setTimeout(()=>{j(t)},t?p:u)};return!function(t,e){let n=(0,a.useRef)(!1);(0,a.useEffect)(()=>()=>{n.current=!1},[]),(0,a.useEffect)(()=>{if(n.current)return t();n.current=!0},e)}(()=>{S(o)},[o]),(0,a.useEffect)(()=>()=>{window.clearTimeout(b.current),cancelAnimationFrame(w.current)},[]),{transitionDuration:f,transitionStatus:v,transitionTimingFunction:r||"ease"}}({mounted:s,exitDuration:i,duration:o,timingFunction:l,onExit:p,onEntered:u,onEnter:d,onExited:m,enterDelay:y,exitDelay:f});return 0===h?s?(0,r.jsx)(r.Fragment,{children:c({})}):e?c({display:"none"}):null:"exited"===v?e?c({display:"none"}):null:(0,r.jsx)(r.Fragment,{children:c(function(t){let{transition:e,state:n,duration:r,timingFunction:o}=t,a={transitionDuration:"".concat(r,"ms"),transitionTimingFunction:o};return"string"==typeof e?e in N?{transitionProperty:N[e].transitionProperty,...a,...N[e].common,...N[e][z[n]]}:{}:{transitionProperty:e.transitionProperty,...a,...e.common,...e[z[n]]}}({transition:n,duration:h,state:v,timingFunction:g}))})}P.displayName="@mantine/core/Transition";var k={root:"m_87cf2631"};let T={__staticSelector:"UnstyledButton"},E=(0,u.b)((t,e)=>{let n=(0,c.w)("UnstyledButton",T,t),{className:o,component:a="button",__staticSelector:i,unstyled:s,classNames:u,styles:d,style:m,...y}=n,f=(0,l.y)({name:i,props:n,classes:k,className:o,style:m,classNames:u,styles:d,unstyled:s});return(0,r.jsx)(p.x,{...f("root",{focusable:!0}),component:a,ref:e,type:"button"===a?"button":void 0,...y})});E.classes=k,E.displayName="@mantine/core/UnstyledButton";var O={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};let Z={orientation:"horizontal"},L=(0,s.Z)((t,e)=>{let{borderWidth:n}=e;return{group:{"--button-border-width":(0,o.h)(n)}}}),C=(0,m.d5)((t,e)=>{let n=(0,c.w)("ButtonGroup",Z,t),{className:o,style:a,classNames:i,styles:s,unstyled:u,orientation:d,vars:m,borderWidth:y,variant:f,mod:h,...v}=(0,c.w)("ButtonGroup",Z,t),g=(0,l.y)({name:"ButtonGroup",props:n,classes:O,className:o,style:a,classNames:i,styles:s,unstyled:u,vars:m,varsResolver:L,rootSelector:"group"});return(0,r.jsx)(p.x,{...g("group"),ref:e,variant:f,mod:[{"data-orientation":d},h],role:"group",...v})});C.classes=O,C.displayName="@mantine/core/ButtonGroup";let Y={in:{opacity:1,transform:"translate(-50%, calc(-50% + ".concat((0,o.h)(1),"))")},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},B={},X=(0,s.Z)((t,e)=>{let{radius:n,color:r,gradient:o,variant:a,size:s,justify:c,autoContrast:l}=e,p=t.variantColorResolver({color:r||t.primaryColor,theme:t,gradient:o,variant:a||"filled",autoContrast:l});return{root:{"--button-justify":c,"--button-height":(0,i.ap)(s,"button-height"),"--button-padding-x":(0,i.ap)(s,"button-padding-x"),"--button-fz":(null==s?void 0:s.includes("compact"))?(0,i.yv)(s.replace("compact-","")):(0,i.yv)(s),"--button-radius":void 0===n?void 0:(0,i.H5)(n),"--button-bg":r||a?p.background:void 0,"--button-hover":r||a?p.hover:void 0,"--button-color":p.color,"--button-bd":r||a?p.border:void 0,"--button-hover-color":r||a?p.hoverColor:void 0}}}),F=(0,u.b)((t,e)=>{let n=(0,c.w)("Button",B,t),{style:o,vars:a,className:i,color:s,disabled:u,children:d,leftSection:m,rightSection:y,fullWidth:f,variant:h,radius:v,loading:g,loaderProps:b,gradient:x,classNames:w,styles:S,unstyled:N,"data-disabled":z,autoContrast:A,mod:_,...R}=n,k=(0,l.y)({name:"Button",props:n,classes:O,className:i,style:o,classNames:w,styles:S,unstyled:N,vars:a,varsResolver:X}),T=!!m,Z=!!y;return(0,r.jsxs)(E,{ref:e,...k("root",{active:!u&&!g&&!z}),unstyled:N,variant:h,disabled:u||g,mod:[{disabled:u||z,loading:g,block:f,"with-left-section":T,"with-right-section":Z},_],...R,children:[(0,r.jsx)(P,{mounted:!!g,transition:Y,duration:150,children:t=>(0,r.jsx)(p.x,{component:"span",...k("loader",{style:t}),"aria-hidden":!0,children:(0,r.jsx)(j,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...b})})}),(0,r.jsxs)("span",{...k("inner"),children:[m&&(0,r.jsx)(p.x,{component:"span",...k("section"),mod:{position:"left"},children:m}),(0,r.jsx)(p.x,{component:"span",mod:{loading:g},...k("label"),children:d}),y&&(0,r.jsx)(p.x,{component:"span",...k("section"),mod:{position:"right"},children:y})]})]})});F.classes=O,F.displayName="@mantine/core/Button",F.Group=C},6608:(t,e,n)=>{n.d(e,{Z:()=>y});var r=n(7437),o=n(2265),a=n(4120),i=n(5593),s=n(591),c=n(9830),l=n(6449),p=n(3147),u={root:"m_4081bf90"};let d={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},m=(0,i.Z)((t,e,n)=>{let{grow:r,preventGrowOverflow:o,gap:i,align:s,justify:c,wrap:l}=e,{childWidth:p}=n;return{root:{"--group-child-width":r&&o?p:void 0,"--group-gap":(0,a.bG)(i),"--group-align":s,"--group-justify":c,"--group-wrap":l}}}),y=(0,p.d5)((t,e)=>{let n=(0,s.w)("Group",d,t),{classNames:i,className:p,style:y,styles:f,unstyled:h,children:v,gap:g,align:b,justify:x,wrap:w,grow:j,preventGrowOverflow:S,vars:N,variant:z,__size:A,mod:_,...R}=n,P=o.Children.toArray(v).filter(Boolean),k=P.length,T=(0,a.bG)(null!=g?g:"md"),E="calc(".concat(100/k,"% - (").concat(T," - ").concat(T," / ").concat(k,"))"),O=(0,c.y)({name:"Group",props:n,stylesCtx:{childWidth:E},className:p,style:y,classes:u,classNames:i,styles:f,unstyled:h,vars:N,varsResolver:m});return(0,r.jsx)(l.x,{...O("root"),ref:e,variant:z,mod:[{grow:j},_],size:A,...R,children:P})});y.classes=u,y.displayName="@mantine/core/Group"},6293:(t,e,n)=>{n.d(e,{Text:()=>f});var r=n(7437);n(2265);var o=n(4120),a=n(5593),i=n(5027),s=n(2442),c=n(591),l=n(9830),p=n(6449),u=n(869),d={root:"m_b6d8b162"};let m={inherit:!1},y=(0,a.Z)((t,e)=>{let{variant:n,lineClamp:r,gradient:a,size:c,color:l}=e;return{root:{"--text-fz":(0,o.yv)(c),"--text-lh":(0,o.Dp)(c),"--text-gradient":"gradient"===n?(0,s.u)(a,t):void 0,"--text-line-clamp":"number"==typeof r?r.toString():void 0,"--text-color":l?(0,i.p)(l,t):void 0}}}),f=(0,u.b)((t,e)=>{let n=(0,c.w)("Text",m,t),{lineClamp:o,truncate:a,inline:i,inherit:s,gradient:u,span:f,__staticSelector:h,vars:v,className:g,style:b,classNames:x,styles:w,unstyled:j,variant:S,mod:N,size:z,...A}=n,_=(0,l.y)({name:["Text",h],props:n,classes:d,className:g,style:b,classNames:x,styles:w,unstyled:j,vars:v,varsResolver:y});return(0,r.jsx)(p.x,{..._("root",{focusable:!0}),ref:e,component:f?"span":"p",variant:S,mod:[{"data-truncate":function(t){return"start"===t?"start":"end"===t||t?"end":void 0}(a),"data-line-clamp":"number"==typeof o,"data-inline":i,"data-inherit":s},N],size:z,...A})});f.classes=d,f.displayName="@mantine/core/Text"},9763:(t,e,n)=>{n.d(e,{Title:()=>f});var r=n(7437);n(2265);var o=n(5593),a=n(591),i=n(9830),s=n(6449),c=n(3147),l=n(1607);let p=["h1","h2","h3","h4","h5","h6"],u=["xs","sm","md","lg","xl"];var d={root:"m_8a5d1357"};let m={order:1},y=(0,o.Z)((t,e)=>{let{order:n,size:r,lineClamp:o,textWrap:a}=e,i=function(t,e){let n=void 0!==e?e:"h".concat(t);return p.includes(n)?{fontSize:"var(--mantine-".concat(n,"-font-size)"),fontWeight:"var(--mantine-".concat(n,"-font-weight)"),lineHeight:"var(--mantine-".concat(n,"-line-height)")}:u.includes(n)?{fontSize:"var(--mantine-font-size-".concat(n,")"),fontWeight:"var(--mantine-h".concat(t,"-font-weight)"),lineHeight:"var(--mantine-h".concat(t,"-line-height)")}:{fontSize:(0,l.h)(n),fontWeight:"var(--mantine-h".concat(t,"-font-weight)"),lineHeight:"var(--mantine-h".concat(t,"-line-height)")}}(n,r);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0,"--title-text-wrap":a}}}),f=(0,c.d5)((t,e)=>{let n=(0,a.w)("Title",m,t),{classNames:o,className:c,style:l,styles:p,unstyled:u,order:f,vars:h,size:v,variant:g,lineClamp:b,textWrap:x,mod:w,...j}=n,S=(0,i.y)({name:"Title",props:n,classes:d,className:c,style:l,classNames:o,styles:p,unstyled:u,vars:h,varsResolver:y});return[1,2,3,4,5,6].includes(f)?(0,r.jsx)(s.x,{...S("root"),component:"h".concat(f),variant:g,ref:e,mod:[{order:f,"data-line-clamp":"number"==typeof b},w],size:v,...j}):null});f.classes=d,f.displayName="@mantine/core/Title"},6449:(t,e,n)=>{n.d(e,{x:()=>z});var r=n(7437),o=n(2265),a=n(4839),i=n(8150),s=n(9481);function c(t){return(0,s.X)(t).reduce((e,n)=>void 0!==t[n]?"".concat(e).concat(n.replace(/[A-Z]/g,t=>"-".concat(t.toLowerCase())),":").concat(t[n],";"):e,"").trim()}function l(t){let e=(0,i.R7)();return(0,r.jsx)("style",{"data-mantine-styles":"inline",nonce:null==e?void 0:e(),dangerouslySetInnerHTML:{__html:function(t){let{selector:e,styles:n,media:r,container:o}=t,a=n?c(n):"",i=Array.isArray(r)?r.map(t=>"@media".concat(t.query,"{").concat(e,"{").concat(c(t.styles),"}}")):[],s=Array.isArray(o)?o.map(t=>"@container ".concat(t.query,"{").concat(e,"{").concat(c(t.styles),"}}")):[];return"".concat(a?"".concat(e,"{").concat(a,"}"):"").concat(i.join("")).concat(s.join("")).trim()}(t)}})}var p=n(8891),u=n(5274);function d(t){return t.startsWith("data-")?t:"data-".concat(t)}function m(t,e){return Array.isArray(t)?[...t].reduce((t,n)=>({...t,...m(n,e)}),{}):"function"==typeof t?t(e):null==t?{}:t}var y=n(686);let f={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var h=n(1607),v=n(5762);function g(t,e){let n=(0,v.E)({color:t,theme:e});return"dimmed"===n.color?"var(--mantine-color-dimmed)":"bright"===n.color?"var(--mantine-color-bright)":n.variable?"var(".concat(n.variable,")"):n.color}let b={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"},x=["h1","h2","h3","h4","h5","h6"],w=["h1","h2","h3","h4","h5","h6"],j={color:g,textColor:function(t,e){let n=(0,v.E)({color:t,theme:e});return n.isThemeColor&&void 0===n.shade?"var(--mantine-color-".concat(n.color,"-text)"):g(t,e)},fontSize:function(t,e){return"string"==typeof t&&t in e.fontSizes?"var(--mantine-font-size-".concat(t,")"):"string"==typeof t&&x.includes(t)?"var(--mantine-".concat(t,"-font-size)"):"number"==typeof t||"string"==typeof t?(0,h.h)(t):t},spacing:function(t,e){if("number"==typeof t)return(0,h.h)(t);if("string"==typeof t){let n=t.replace("-","");if(!(n in e.spacing))return(0,h.h)(t);let r="--mantine-spacing-".concat(n);return t.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return t},identity:function(t){return t},size:function(t){return"number"==typeof t?(0,h.h)(t):t},lineHeight:function(t,e){return"string"==typeof t&&t in e.lineHeights?"var(--mantine-line-height-".concat(t,")"):"string"==typeof t&&w.includes(t)?"var(--mantine-".concat(t,"-line-height)"):t},fontFamily:function(t){return"string"==typeof t&&t in b?b[t]:t},border:function(t,e){if("number"==typeof t)return(0,h.h)(t);if("string"==typeof t){let[n,r,...o]=t.split(" ").filter(t=>""!==t.trim()),a="".concat((0,h.h)(n));return r&&(a+=" ".concat(r)),o.length>0&&(a+=" ".concat(g(o.join(" "),e))),a.trim()}return t}};function S(t){return t.replace("(min-width: ","").replace("em)","")}let N=(0,o.forwardRef)((t,e)=>{var n;let{component:c,style:h,__vars:v,className:g,variant:b,mod:x,size:w,hiddenFrom:N,visibleFrom:z,lightHidden:A,darkHidden:_,renderRoot:R,__size:P,...k}=t,T=(0,u.rZ)(),{styleProps:E,rest:O}=function(t){let{m:e,mx:n,my:r,mt:o,mb:a,ml:i,mr:s,me:c,ms:l,p,px:u,py:d,pt:m,pb:f,pl:h,pr:v,pe:g,ps:b,bd:x,bg:w,c:j,opacity:S,ff:N,fz:z,fw:A,lts:_,ta:R,lh:P,fs:k,tt:T,td:E,w:O,miw:Z,maw:L,h:C,mih:Y,mah:B,bgsz:X,bgp:F,bgr:H,bga:W,pos:q,top:G,left:I,bottom:M,right:D,inset:U,display:V,flex:K,hiddenFrom:$,visibleFrom:J,lightHidden:Q,darkHidden:tt,sx:te,...tn}=t;return{styleProps:(0,y.L)({m:e,mx:n,my:r,mt:o,mb:a,ml:i,mr:s,me:c,ms:l,p,px:u,py:d,pt:m,pb:f,pl:h,pr:v,pe:g,ps:b,bd:x,bg:w,c:j,opacity:S,ff:N,fz:z,fw:A,lts:_,ta:R,lh:P,fs:k,tt:T,td:E,w:O,miw:Z,maw:L,h:C,mih:Y,mah:B,bgsz:X,bgp:F,bgr:H,bga:W,pos:q,top:G,left:I,bottom:M,right:D,inset:U,display:V,flex:K,hiddenFrom:$,visibleFrom:J,lightHidden:Q,darkHidden:tt,sx:te}),rest:tn}}(k),Z=(0,i.dv)(),L=null==Z?void 0:null===(n=Z())||void 0===n?void 0:n(E.sx),C=function(){let t=(0,o.useId)().replace(/:/g,"");return"__m__-".concat(t)}(),Y=function(t){let{styleProps:e,data:n,theme:r}=t;return function(t){let{media:e,...n}=t,r=Object.keys(e).sort((t,e)=>Number(S(t))-Number(S(e))).map(t=>({query:t,styles:e[t]}));return{...n,media:r}}((0,s.X)(e).reduce((t,o)=>{var a,i;if("hiddenFrom"===o||"visibleFrom"===o||"sx"===o)return t;let c=n[o],l=Array.isArray(c.property)?c.property:[c.property],p="object"==typeof(i=e[o])&&null!==i?"base"in i?i.base:void 0:i;if(!function(t){if("object"!=typeof t||null===t)return!1;let e=Object.keys(t);return 1!==e.length||"base"!==e[0]}(e[o]))return l.forEach(e=>{t.inlineStyles[e]=j[c.type](p,r)}),t;t.hasResponsiveStyles=!0;let u="object"==typeof(a=e[o])&&null!==a?(0,s.X)(a).filter(t=>"base"!==t):[];return l.forEach(n=>{p&&(t.styles[n]=j[c.type](p,r)),u.forEach(a=>{var i;let s="(min-width: ".concat(r.breakpoints[a],")");t.media[s]={...t.media[s],[n]:j[c.type]("object"==typeof(i=e[o])&&null!==i&&a in i?i[a]:i,r)}})}),t},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}({styleProps:E,theme:T,data:f}),B={ref:e,style:function(t){let{theme:e,style:n,vars:r,styleProps:o}=t,a=m(n,e),i=m(r,e);return{...a,...i,...o}}({theme:T,style:h,vars:v,styleProps:Y.inlineStyles}),className:(0,a.Z)(g,L,{[C]:Y.hasResponsiveStyles,"mantine-light-hidden":A,"mantine-dark-hidden":_,["mantine-hidden-from-".concat(N)]:N,["mantine-visible-from-".concat(z)]:z}),"data-variant":b,"data-size":(0,p.s)(w)?void 0:w||void 0,size:P,...function t(e){return e?"string"==typeof e?{[d(e)]:!0}:Array.isArray(e)?[...e].reduce((e,n)=>({...e,...t(n)}),{}):Object.keys(e).reduce((t,n)=>{let r=e[n];return void 0===r||""===r||!1===r||null===r||(t[d(n)]=e[n]),t},{}):null}(x),...O};return(0,r.jsxs)(r.Fragment,{children:[Y.hasResponsiveStyles&&(0,r.jsx)(l,{selector:".".concat(C),styles:Y.styles,media:Y.media}),"function"==typeof R?R(B):(0,r.jsx)(c||"div",{...B})]})});N.displayName="@mantine/core/Box";let z=N},1597:(t,e,n)=>{n.d(e,{X:()=>s});var r=n(2265),o=n(5624),a=n(8150);function i(t){let e=document.createElement("style");return e.setAttribute("data-mantine-styles","inline"),e.innerHTML="*, *::before, *::after {transition: none !important;}",e.setAttribute("data-mantine-disable-transition","true"),t&&e.setAttribute("nonce",t),document.head.appendChild(e),()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach(t=>t.remove())}function s(){var t;let{keepTransitions:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,r.useRef)(),s=(0,r.useRef)(),c=(0,r.useContext)(a.XD),l=(0,a.R7)(),p=(0,r.useRef)(null==l?void 0:l());if(!c)throw Error("[@mantine/core] MantineProvider was not found in tree");let u=t=>{c.setColorScheme(t),n.current=e?()=>{}:i(p.current),window.clearTimeout(s.current),s.current=window.setTimeout(()=>{var t;null===(t=n.current)||void 0===t||t.call(n)},10)},d=(t={getInitialValueInEffect:!1},(0,o.a)("(prefers-color-scheme: dark)",!1,t)?"dark":"light"),m="auto"===c.colorScheme?d:c.colorScheme,y=(0,r.useCallback)(()=>u("light"===m?"dark":"light"),[u,m]);return(0,r.useEffect)(()=>()=>{var t;null===(t=n.current)||void 0===t||t.call(n),window.clearTimeout(s.current)},[]),{colorScheme:c.colorScheme,setColorScheme:u,clearColorScheme:()=>{c.clearColorScheme(),n.current=e?()=>{}:i(p.current),window.clearTimeout(s.current),s.current=window.setTimeout(()=>{var t;null===(t=n.current)||void 0===t||t.call(n)},10)},toggleColorScheme:y}}},591:(t,e,n)=>{n.d(e,{w:()=>a});var r=n(686);n(2265),n(7437);var o=n(5274);function a(t,e,n){var a;let i=(0,o.rZ)(),s=null===(a=i.components[t])||void 0===a?void 0:a.defaultProps,c="function"==typeof s?s(i):s;return{...e,...c,...(0,r.L)(n)}}},3147:(t,e,n)=>{n.d(e,{d5:()=>i,yR:()=>a});var r=n(7437),o=n(2265);function a(t){return t}function i(t){let e=(0,o.forwardRef)(t);return e.extend=a,e.withProps=t=>{let n=(0,o.forwardRef)((n,o)=>(0,r.jsx)(e,{...t,...n,ref:o}));return n.extend=e.extend,n.displayName="WithProps(".concat(e.displayName,")"),n},e}},869:(t,e,n)=>{n.d(e,{b:()=>i});var r=n(7437),o=n(2265),a=n(3147);function i(t){let e=(0,o.forwardRef)(t);return e.withProps=t=>{let n=(0,o.forwardRef)((n,o)=>(0,r.jsx)(e,{...t,...n,ref:o}));return n.extend=e.extend,n.displayName="WithProps(".concat(e.displayName,")"),n},e.extend=a.yR,e}},5593:(t,e,n)=>{n.d(e,{Z:()=>r});function r(t){return t}},9830:(t,e,n)=>{n.d(e,{y:()=>m}),n(2265),n(7437);var r=n(8150),o=n(5274),a=n(4839);let i={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"},s={};function c(t){let{theme:e,classNames:n,props:r,stylesCtx:o}=t;return function(t){let e={};return t.forEach(t=>{Object.entries(t).forEach(t=>{let[n,r]=t;e[n]?e[n]=(0,a.Z)(e[n],r):e[n]=r})}),e}((Array.isArray(n)?n:[n]).map(t=>"function"==typeof t?t(e,r,o):t||s))}function l(t){let{selector:e,stylesCtx:n,theme:r,classNames:o,props:a}=t;return c({theme:r,classNames:o,props:a,stylesCtx:n})[e]}function p(t){let{theme:e,styles:n,props:r,stylesCtx:o}=t;return(Array.isArray(n)?n:[n]).reduce((t,n)=>"function"==typeof n?{...t,...n(e,r,o)}:{...t,...n},{})}function u(t){let{style:e,theme:n}=t;return Array.isArray(e)?[...e].reduce((t,e)=>({...t,...u({style:e,theme:n})}),{}):"function"==typeof e?e(n):null==e?{}:e}var d=n(686);function m(t){let{name:e,classes:n,props:s,stylesCtx:m,className:y,style:f,rootSelector:h="root",unstyled:v,classNames:g,styles:b,vars:x,varsResolver:w}=t,j=(0,o.rZ)(),S=(0,r.uK)(),N=(0,r.Nu)(),z=(0,r.DE)(),A=(Array.isArray(e)?e:[e]).filter(t=>t),{withStylesTransform:_,getTransformedStyles:R}=function(t){var e;let{props:n,stylesCtx:a,themeName:i}=t,s=(0,o.rZ)(),c=null===(e=(0,r.sZ)())||void 0===e?void 0:e();return{getTransformedStyles:t=>c?[...t.map(t=>c(t,{props:n,theme:s,ctx:a})),...i.map(t=>{var e;return c(null===(e=s.components[t])||void 0===e?void 0:e.styles,{props:n,theme:s,ctx:a})})].filter(Boolean):[],withStylesTransform:!!c}}({props:s,stylesCtx:m,themeName:A});return(t,e)=>({className:function(t){let{theme:e,options:n,themeName:r,selector:o,classNamesPrefix:s,classNames:p,classes:u,unstyled:d,className:m,rootSelector:y,props:f,stylesCtx:h,withStaticClasses:v,headless:g,transformedStyles:b}=t;return(0,a.Z)(function(t){let{theme:e,options:n,unstyled:r}=t;return(0,a.Z)((null==n?void 0:n.focusable)&&!r&&(e.focusClassName||i[e.focusRing]),(null==n?void 0:n.active)&&!r&&e.activeClassName)}({theme:e,options:n,unstyled:d||g}),function(t){let{themeName:e,theme:n,selector:r,props:o,stylesCtx:a}=t;return e.map(t=>{var e,i;return null===(e=c({theme:n,classNames:null===(i=n.components[t])||void 0===i?void 0:i.classNames,props:o,stylesCtx:a}))||void 0===e?void 0:e[r]})}({theme:e,themeName:r,selector:o,props:f,stylesCtx:h}),function(t){let{options:e,classes:n,selector:r,unstyled:o}=t;return(null==e?void 0:e.variant)&&!o?n["".concat(r,"--").concat(e.variant)]:void 0}({options:n,classes:u,selector:o,unstyled:d}),l({selector:o,stylesCtx:h,theme:e,classNames:p,props:f}),l({selector:o,stylesCtx:h,theme:e,classNames:b,props:f}),function(t){let{selector:e,stylesCtx:n,options:r,props:o,theme:a}=t;return c({theme:a,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:n})[e]}({selector:o,stylesCtx:h,options:n,props:f,theme:e}),function(t){let{rootSelector:e,selector:n,className:r}=t;return e===n?r:void 0}({rootSelector:y,selector:o,className:m}),function(t){let{selector:e,classes:n,unstyled:r}=t;return r?void 0:n[e]}({selector:o,classes:u,unstyled:d||g}),v&&!g&&function(t){let{themeName:e,classNamesPrefix:n,selector:r,withStaticClass:o}=t;return!1===o?[]:e.map(t=>"".concat(n,"-").concat(t,"-").concat(r))}({themeName:r,classNamesPrefix:s,selector:o,withStaticClass:null==n?void 0:n.withStaticClass}),null==n?void 0:n.className)}({theme:j,options:e,themeName:A,selector:t,classNamesPrefix:S,classNames:g,classes:n,unstyled:v,className:y,rootSelector:h,props:s,stylesCtx:m,withStaticClasses:N,headless:z,transformedStyles:R([null==e?void 0:e.styles,b])}),style:function(t){let{theme:e,themeName:n,selector:r,options:o,props:a,stylesCtx:i,rootSelector:s,styles:c,style:l,vars:m,varsResolver:y,headless:f,withStylesTransform:h}=t;return{...!h&&function(t){let{theme:e,themeName:n,props:r,stylesCtx:o,selector:a}=t;return n.map(t=>{var n;return p({theme:e,styles:null===(n=e.components[t])||void 0===n?void 0:n.styles,props:r,stylesCtx:o})[a]}).reduce((t,e)=>({...t,...e}),{})}({theme:e,themeName:n,props:a,stylesCtx:i,selector:r}),...!h&&p({theme:e,styles:c,props:a,stylesCtx:i})[r],...!h&&p({theme:e,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:i})[r],...function(t){var e;let{vars:n,varsResolver:r,theme:o,props:a,stylesCtx:i,selector:s,themeName:c,headless:l}=t;return null===(e=[l?{}:null==r?void 0:r(o,a,i),...c.map(t=>{var e,n,r;return null===(r=o.components)||void 0===r?void 0:null===(n=r[t])||void 0===n?void 0:null===(e=n.vars)||void 0===e?void 0:e.call(n,o,a,i)}),null==n?void 0:n(o,a,i)].reduce((t,e)=>(e&&Object.keys(e).forEach(n=>{t[n]={...t[n],...(0,d.L)(e[n])}}),t),{}))||void 0===e?void 0:e[s]}({theme:e,props:a,stylesCtx:i,vars:m,varsResolver:y,selector:r,themeName:n,headless:f}),...s===r?u({style:l,theme:e}):null,...u({style:null==o?void 0:o.style,theme:e})}}({theme:j,themeName:A,selector:t,options:e,props:s,stylesCtx:m,rootSelector:h,styles:b,style:f,vars:x,varsResolver:w,headless:z,withStylesTransform:_})})}},686:(t,e,n)=>{n.d(e,{L:()=>r});function r(t){return Object.keys(t).reduce((e,n)=>(void 0!==t[n]&&(e[n]=t[n]),e),{})}},4120:(t,e,n)=>{n.d(e,{Dp:()=>l,H5:()=>s,ap:()=>a,bG:()=>i,yv:()=>c});var r=n(8891),o=n(1607);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==t)return(0,r.s)(t)?n?(0,o.h)(t):t:"var(--".concat(e,"-").concat(t,")")}function i(t){return a(t,"mantine-spacing")}function s(t){return void 0===t?"var(--mantine-radius-default)":a(t,"mantine-radius")}function c(t){return a(t,"mantine-font-size")}function l(t){return a(t,"mantine-line-height",!1)}},8891:(t,e,n)=>{n.d(e,{s:()=>r});function r(t){if("number"==typeof t)return!0;if("string"==typeof t){if(t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&""!==t.trim())return!0;let e=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return t.trim().split(/\s+/).every(t=>e.test(t))}return!1}},5624:(t,e,n)=>{n.d(e,{a:()=>o});var r=n(2265);function o(t,e){let{getInitialValueInEffect:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[o,a]=(0,r.useState)(n?e:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(t).matches),i=(0,r.useRef)();return(0,r.useEffect)(()=>{if("matchMedia"in window)return i.current=window.matchMedia(t),a(i.current.matches),function(t,e){try{return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}catch(n){return t.addListener(e),()=>t.removeListener(e)}}(i.current,t=>a(t.matches))},[t]),o}},4839:(t,e,n)=>{n.d(e,{Z:()=>r});let r=function(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(r&&(r+=" "),r+=e);return r}}}]);