"use strict";(self.webpackChunkplexfinance=self.webpackChunkplexfinance||[]).push([[332],{5211:function(e,o,a){var r=a(64836);o.Z=void 0;var n=r(a(45045)),t=a(46417),i=(0,n.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");o.Z=i},94469:function(e,o,a){var r=a(4942),n=a(63366),t=a(87462),i=a(47313),l=a(83061),c=a(21921),s=a(33362),p=a(91615),d=a(10387),u=a(32530),f=a(70501),h=a(77342),v=a(17592),m=a(85560),Z=a(63909),x=a(91554),g=a(19860),b=a(46417),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],W=(0,v.ZP)(x.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,o){return o.backdrop}})({zIndex:-1}),k=(0,v.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,o){return o.root}})({"@media print":{position:"absolute !important"}}),w=(0,v.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,o){var a=e.ownerState;return[o.container,o["scroll".concat((0,p.Z)(a.scroll))]]}})((function(e){var o=e.ownerState;return(0,t.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=(0,v.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,o){var a=e.ownerState;return[o.paper,o["scrollPaper".concat((0,p.Z)(a.scroll))],o["paperWidth".concat((0,p.Z)(String(a.maxWidth)))],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})((function(e){var o=e.theme,a=e.ownerState;return(0,t.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&(0,r.Z)({maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit)},"&.".concat(m.Z.paperScrollBody),(0,r.Z)({},o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),a.maxWidth&&"xs"!==a.maxWidth&&(0,r.Z)({maxWidth:"".concat(o.breakpoints.values[a.maxWidth]).concat(o.breakpoints.unit)},"&.".concat(m.Z.paperScrollBody),(0,r.Z)({},o.breakpoints.down(o.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&(0,r.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(m.Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),y=i.forwardRef((function(e,o){var a=(0,h.Z)({props:e,name:"MuiDialog"}),r=(0,g.Z)(),d={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},v=a["aria-describedby"],x=a["aria-labelledby"],y=a.BackdropComponent,P=a.BackdropProps,M=a.children,C=a.className,B=a.disableEscapeKeyDown,R=void 0!==B&&B,N=a.fullScreen,j=void 0!==N&&N,A=a.fullWidth,T=void 0!==A&&A,F=a.maxWidth,I=void 0===F?"sm":F,E=a.onBackdropClick,K=a.onClose,H=a.open,X=a.PaperComponent,Y=void 0===X?f.Z:X,z=a.PaperProps,L=void 0===z?{}:z,V=a.scroll,q=void 0===V?"paper":V,G=a.TransitionComponent,J=void 0===G?u.Z:G,O=a.transitionDuration,Q=void 0===O?d:O,U=a.TransitionProps,$=(0,n.Z)(a,S),_=(0,t.Z)({},a,{disableEscapeKeyDown:R,fullScreen:j,fullWidth:T,maxWidth:I,scroll:q}),ee=function(e){var o=e.classes,a=e.scroll,r=e.maxWidth,n=e.fullWidth,t=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,p.Z)(a))],paper:["paper","paperScroll".concat((0,p.Z)(a)),"paperWidth".concat((0,p.Z)(String(r))),n&&"paperFullWidth",t&&"paperFullScreen"]};return(0,c.Z)(i,m.D,o)}(_),oe=i.useRef(),ae=(0,s.Z)(x),re=i.useMemo((function(){return{titleId:ae}}),[ae]);return(0,b.jsx)(k,(0,t.Z)({className:(0,l.Z)(ee.root,C),closeAfterTransition:!0,components:{Backdrop:W},componentsProps:{backdrop:(0,t.Z)({transitionDuration:Q,as:y},P)},disableEscapeKeyDown:R,onClose:K,open:H,ref:o,onClick:function(e){oe.current&&(oe.current=null,E&&E(e),K&&K(e,"backdropClick"))},ownerState:_},$,{children:(0,b.jsx)(J,(0,t.Z)({appear:!0,in:H,timeout:Q,role:"presentation"},U,{children:(0,b.jsx)(w,{className:(0,l.Z)(ee.container),onMouseDown:function(e){oe.current=e.target===e.currentTarget},ownerState:_,children:(0,b.jsx)(D,(0,t.Z)({as:Y,elevation:24,role:"dialog","aria-describedby":v,"aria-labelledby":ae},L,{className:(0,l.Z)(ee.paper,L.className),ownerState:_,children:(0,b.jsx)(Z.Z.Provider,{value:re,children:M})}))})}))}))}));o.Z=y},63909:function(e,o,a){var r=a(47313).createContext({});o.Z=r},85560:function(e,o,a){a.d(o,{D:function(){return t}});var r=a(77430),n=a(32298);function t(e){return(0,n.Z)("MuiDialog",e)}var i=(0,r.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);o.Z=i},4117:function(e,o,a){a.d(o,{Z:function(){return m}});var r=a(63366),n=a(87462),t=a(47313),i=a(83061),l=a(21921),c=a(17592),s=a(77342),p=a(77430),d=a(32298);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,p.Z)("MuiDialogActions",["root","spacing"]);var f=a(46417),h=["className","disableSpacing"],v=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,!a.disableSpacing&&o.spacing]}})((function(e){var o=e.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=t.forwardRef((function(e,o){var a=(0,s.Z)({props:e,name:"MuiDialogActions"}),t=a.className,c=a.disableSpacing,p=void 0!==c&&c,d=(0,r.Z)(a,h),m=(0,n.Z)({},a,{disableSpacing:p}),Z=function(e){var o=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(a,u,o)}(m);return(0,f.jsx)(v,(0,n.Z)({className:(0,i.Z)(Z.root,t),ownerState:m,ref:o},d))}))},33604:function(e,o,a){var r=a(87462),n=a(63366),t=a(47313),i=a(83061),l=a(21921),c=a(61113),s=a(17592),p=a(77342),d=a(93174),u=a(63909),f=a(46417),h=["className","id"],v=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,o){return o.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=t.forwardRef((function(e,o){var a=(0,p.Z)({props:e,name:"MuiDialogTitle"}),c=a.className,s=a.id,m=(0,n.Z)(a,h),Z=a,x=function(e){var o=e.classes;return(0,l.Z)({root:["root"]},d.a,o)}(Z),g=t.useContext(u.Z).titleId,b=void 0===g?s:g;return(0,f.jsx)(v,(0,r.Z)({component:"h2",className:(0,i.Z)(x.root,c),ownerState:Z,ref:o,variant:"h6",id:null!=s?s:b},m))}));o.Z=m},93174:function(e,o,a){a.d(o,{a:function(){return t}});var r=a(77430),n=a(32298);function t(e){return(0,n.Z)("MuiDialogTitle",e)}var i=(0,r.Z)("MuiDialogTitle",["root"]);o.Z=i}}]);