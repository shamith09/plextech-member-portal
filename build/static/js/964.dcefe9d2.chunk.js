"use strict";(self.webpackChunkplexfinance=self.webpackChunkplexfinance||[]).push([[964],{95785:function(e,r,n){n.d(r,{C:function(){return g}});var t,o=n(30168),i=n(53115),a=n(42832),s=n(47131),c=n(70501),l=n(10387),d=(n(47313),n(96694)),u=n(32094),h=n.p+"static/media/error.062a662df0ebdd9a7227.png",p=n(46417);function g(e){return(0,p.jsx)(v,{open:e.open,children:(0,p.jsx)(f,{children:(0,p.jsxs)(a.Z,{spacing:2,children:[(0,p.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,p.jsxs)(m,{children:["Error",e.error.errorCode&&" ".concat(e.error.errorCode),":"," ",e.error.errorMessage]}),(0,p.jsx)(s.Z,{onClick:function(){window.location.reload()},children:(0,p.jsx)(u.Z,{})})]}),(0,p.jsxs)(x,{children:["Try refreshing the page and contact"," ",(0,p.jsx)("a",{href:"mailto:shamith09@berkeley.edu?subject=[Plexfinance Error]",children:"shamith09@berkeley.edu"})," ","if the issue persists."]}),(0,p.jsx)("img",{src:h,alt:"error"})]})})})}var f=(0,d.Z)(c.Z)(t||(t=(0,o.Z)(["\n  padding: 48px;\n  border-radius: 48px;\n"]))),m=i.ZP.h1.withConfig({componentId:"sc-khwwpk-0"})(["margin:0px;"]),x=i.ZP.p.withConfig({componentId:"sc-khwwpk-1"})(["margin:0px;"]),v=(0,i.ZP)(l.Z).withConfig({componentId:"sc-khwwpk-2"})(["width:50%;min-width:500px;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;padding:64px;"])},40525:function(e,r,n){n.r(r),n.d(r,{LoginPage:function(){return D}});var t,o,i=n(30168),a=n(1413),s=n(74165),c=n(15861),l=n(29439),d=n(53115),u=n(47313),h=n(65964),p=n(96694),g=n(53422),f=n(19860),m=n(42832),x=n(31427),v=n(41727),Z=n(47131),w=n(69099),k=n(70501),j=n(19536),b=n(85281),C=n(91210),y=n(77406),S=n(12540),P=(0,S.u)((function(){return n.e(10).then(n.bind(n,96010))}),(function(e){return e.SignUpPage})),I=n(95785),M=(0,S.u)((function(){return n.e(12).then(n.bind(n,23012))}),(function(e){return e.ForgotPasswordPage})),T=n(7861),z=n(46417);function D(e){var r=(0,u.useState)(!1),n=(0,l.Z)(r,2),t=n[0],o=n[1],i=(0,u.useState)(!1),d=(0,l.Z)(i,2),p=d[0],k=d[1],j=(0,u.useState)({email:"",password:"",google:!1}),b=(0,l.Z)(j,2),S=b[0],D=b[1],O=(0,u.useState)(!1),A=(0,l.Z)(O,2),U=A[0],_=A[1],J=(0,u.useState)(!1),V=(0,l.Z)(J,2),W=V[0],Y=V[1],G=(0,u.useState)(),H=(0,l.Z)(G,2),K=H[0],Q=H[1],X=(0,u.useState)(!1),$=(0,l.Z)(X,2),ee=$[0],re=$[1],ne=(0,u.useState)(!1),te=(0,l.Z)(ne,2),oe=te[0],ie=te[1],ae=(0,u.useState)({}),se=(0,l.Z)(ae,2),ce=se[0],le=se[1],de=(0,f.Z)();(0,u.useEffect)((function(){google.accounts.id.initialize({client_id:"968100881152-kgabl8upp6j75oset2hj9l512mcaoved.apps.googleusercontent.com",callback:ue}),google.accounts.id.renderButton(document.getElementById("google-signin"),{theme:"dark"===de.palette.mode?"filled_black":"outline",size:"large"})}),[W]),(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ce.email){e.next=3;break}return e.next=3,pe();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[ce]);var ue=function(e){var r=(0,T.Z)(e.credential);D({email:r.email,google:!0}),le(r)},he=function(){k(!p)},pe=function(){var r=(0,c.Z)((0,s.Z)().mark((function r(n){var t,i,c;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n&&n.preventDefault(),S.google||""!==S.email&&""!==S.password){r.next=4;break}return o(!0),r.abrupt("return");case 4:return re(!0),r.prev=5,t="".concat("https://plexfinance-backend-production.up.railway.app","/users/"),r.next=9,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify((0,a.Z)((0,a.Z)({},S),{},{method:"login"}))});case 9:if(i=r.sent,re(!1),404!==i.status){r.next=14;break}return Y(!0),r.abrupt("return");case 14:if(401!==i.status&&422!==i.status&&400!==i.status){r.next=19;break}return _(!0),r.abrupt("return");case 19:if(i.ok){r.next=22;break}return Q({errorCode:i.status,errorMessage:i.statusText}),r.abrupt("return");case 22:return _(!1),r.next=25,i.json();case 25:c=r.sent,e.setToken(c.access_token),o(!1),r.next=34;break;case 30:r.prev=30,r.t0=r.catch(5),console.error(r.t0),Q({errorMessage:r.t0.toString()});case 34:case"end":return r.stop()}}),r,null,[[5,30]])})));return function(e){return r.apply(this,arguments)}}();return W?(0,z.jsx)(P,{onBack:function(){return Y(!1)},setToken:e.setToken}):oe?(0,z.jsx)(M,{onBack:function(){return ie(!1)},setToken:e.setToken,token:e.token}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.ql,{children:[(0,z.jsx)("title",{children:"Login"}),(0,z.jsx)("meta",{name:"description",content:"Login page for PlexTech finance"})]}),K?(0,z.jsx)(I.C,{open:!!K,error:K}):(0,z.jsxs)(q,{children:[(0,z.jsx)(E,{elevation:3,children:(0,z.jsx)("form",{children:(0,z.jsxs)(m.Z,{alignItems:"center",spacing:4,children:[(0,z.jsx)(L,{src:g,alt:"PlexTech logo"}),(0,z.jsx)(N,{children:"Login"}),(0,z.jsxs)(R,{children:[(0,z.jsx)("p",{children:"Email Address"}),(0,z.jsx)(x.Z,{variant:"outlined",required:!0,size:"small",value:S.google?"":S.email,onChange:function(e){var r=e.target;D((function(e){return(0,a.Z)((0,a.Z)({},e),{},{email:r.value})}))},error:t&&""===S.email||S.google&&U||U,helperText:(t&&""===S.email?"Required":S.google&&U&&"You are not registered as a PlexTech member. Contact PlexTech management if this is incorrect.")||U&&"Incorrect email or password."})]}),(0,z.jsxs)(R,{children:[(0,z.jsx)("p",{children:"Password"}),(0,z.jsx)(x.Z,{variant:"outlined",type:p?"text":"password",autoComplete:"current-password",required:!0,size:"small",InputProps:{endAdornment:(0,z.jsx)(v.Z,{position:"end",children:(0,z.jsx)(Z.Z,{onClick:he,onMouseDown:he,children:p?(0,z.jsx)(C.Z,{}):(0,z.jsx)(y.Z,{})})})},value:S.google?"":S.password,onChange:function(e){var r=e.target;D((function(e){return(0,a.Z)((0,a.Z)({},e),{},{password:r.value})}))},error:!S.google&&(t&&""===S.password||U),helperText:!S.google&&(t&&""===S.password?"Required":U&&"Incorrect email or password.")})]}),(0,z.jsxs)(m.Z,{direction:"row",spacing:3,children:[(0,z.jsx)(w.Z,{variant:"contained",onClick:pe,type:"submit",children:ee?(0,z.jsx)(B,{size:20}):"Log In"}),(0,z.jsx)(w.Z,{variant:"text",onClick:function(){ie(!0)},children:"Forgot Password?"})]}),(0,z.jsx)(F,{variant:"middle",light:!0,children:"or"}),(0,z.jsx)("div",{id:"google-signin"}),(0,z.jsx)(w.Z,{variant:"contained",onClick:function(){Y(!0)},children:"Don't have an account yet?"})]})})}),(0,z.jsx)("div",{style:{height:"5%"}})]})]})}var E=(0,p.Z)(k.Z)(t||(t=(0,i.Z)(["\n  min-height: 95%;\n  width: 40%;\n  min-width: 500px;\n  margin: auto;\n  padding: 64px;\n  border-radius: 48px;\n"]))),R=(0,d.ZP)(m.Z).withConfig({componentId:"sc-1iogjhg-0"})(["width:100%;"]),F=(0,d.ZP)(j.Z).withConfig({componentId:"sc-1iogjhg-1"})(["width:100%;"]),N=d.ZP.h1.withConfig({componentId:"sc-1iogjhg-2"})(["margin:0px;font-size:3.052rem;padding-top:24px;"]),L=d.ZP.img.withConfig({componentId:"sc-1iogjhg-3"})(["max-width:80px;"]),q=d.ZP.div.withConfig({componentId:"sc-1iogjhg-4"})(["padding-top:64px;height:100%;"]),B=(0,p.Z)(b.Z)(o||(o=(0,i.Z)(["\n  color: rgb(255, 138, 0);\n"])))},91210:function(e,r,n){var t=n(81171),o=n(46417);r.Z=(0,t.Z)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},77406:function(e,r,n){var t=n(81171),o=n(46417);r.Z=(0,t.Z)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},85281:function(e,r,n){n.d(r,{Z:function(){return D}});var t=n(30168),o=n(63366),i=n(87462),a=n(47313),s=n(83061),c=n(21921),l=n(30686),d=n(91615),u=n(77342),h=n(17592),p=n(77430),g=n(32298);function f(e){return(0,g.Z)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,x,v,Z,w,k,j,b,C=n(46417),y=["className","color","disableShrink","size","style","thickness","value","variant"],S=44,P=(0,l.F4)(w||(w=m||(m=(0,t.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),I=(0,l.F4)(k||(k=x||(x=(0,t.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),M=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,d.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(j||(j=v||(v=(0,t.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),T=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),z=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,d.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(b||(b=Z||(Z=(0,t.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),I)})),D=a.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),t=n.className,a=n.color,l=void 0===a?"primary":a,h=n.disableShrink,p=void 0!==h&&h,g=n.size,m=void 0===g?40:g,x=n.style,v=n.thickness,Z=void 0===v?3.6:v,w=n.value,k=void 0===w?0:w,j=n.variant,b=void 0===j?"indeterminate":j,P=(0,o.Z)(n,y),I=(0,i.Z)({},n,{color:l,disableShrink:p,size:m,thickness:Z,value:k,variant:b}),D=function(e){var r=e.classes,n=e.variant,t=e.color,o=e.disableShrink,i={root:["root",n,"color".concat((0,d.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(n)),o&&"circleDisableShrink"]};return(0,c.Z)(i,f,r)}(I),E={},R={},F={};if("determinate"===b){var N=2*Math.PI*((S-Z)/2);E.strokeDasharray=N.toFixed(3),F["aria-valuenow"]=Math.round(k),E.strokeDashoffset="".concat(((100-k)/100*N).toFixed(3),"px"),R.transform="rotate(-90deg)"}return(0,C.jsx)(M,(0,i.Z)({className:(0,s.Z)(D.root,t),style:(0,i.Z)({width:m,height:m},R,x),ownerState:I,ref:r,role:"progressbar"},F,P,{children:(0,C.jsx)(T,{className:D.svg,ownerState:I,viewBox:"".concat(22," ").concat(22," ").concat(S," ").concat(S),children:(0,C.jsx)(z,{className:D.circle,style:E,ownerState:I,cx:S,cy:S,r:(S-Z)/2,fill:"none",strokeWidth:Z})})}))}))},7861:function(e,r,n){function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,i=0,a=0,s="";o=r.charAt(a++);~o&&(n=i%4?64*n+o:o,i++%4)?s+=String.fromCharCode(255&n>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s};function i(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,r){var n=r.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(r)}catch(e){return o(r)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError",r.Z=function(e,r){if("string"!=typeof e)throw new a("Invalid token specified");var n=!0===(r=r||{}).header?0:1;try{return JSON.parse(i(e.split(".")[n]))}catch(e){throw new a("Invalid token specified: "+e.message)}}}}]);