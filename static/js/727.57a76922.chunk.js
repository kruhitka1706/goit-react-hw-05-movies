"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{83:function(t,e,n){n.d(e,{a:function(){return i}});var o=n(430),r="Loder_loader__eE3WX",a=n(184),i=function(){return(0,a.jsx)("div",{className:r,children:(0,a.jsx)(o.RL,{height:"100",width:"100",radius:"48",color:"#dfdf49",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!1})})}},669:function(t,e,n){n.d(e,{O:function(){return l}});var o=n(689),r=n(87),a="MoviesLayout_galleryMovies__vRtfz",i="MoviesLayout_moviesItem__R8PEs",s="MoviesLayout_moviesImg__9-H0K",c="MoviesLayout_moviesName__JwGve",u=n(184),l=function(t){var e=t.arrayOfMovies,n=(0,o.TH)();return(0,u.jsx)("ul",{className:a,children:e.map((function(t){var e=null;return e=t.title?t.title:t.name,(0,u.jsx)("li",{children:(0,u.jsx)("div",{className:i,children:(0,u.jsxs)(r.OL,{className:c,to:"/movies/".concat(t.id),state:{from:n},children:[(0,u.jsx)("img",{className:s,srcSet:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),(0,u.jsx)("p",{children:e})]})})},t.id)}))})}},787:function(t,e,n){n.d(e,{D:function(){return a}});n(791);var o="Title_title__mrNq5",r=n(184),a=function(t){var e=t.text;return(0,r.jsxs)("h1",{className:o,children:[" ",e," "]})}},603:function(t,e,n){n.r(e),n.d(e,{default:function(){return $}});var o=n(439),r=n(791);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=n(433);function l(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=l(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var f=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=l(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],m=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},v=function(t){return"string"==typeof t},h=function(t){return"function"==typeof t},g=function(t){return v(t)||h(t)?t:null},y=function(t){return(0,r.isValidElement)(t)||v(t)||h(t)||p(t)};function E(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,l=void 0===c?300:c;return function(t){var o=t.children,i=t.position,c=t.preventExitTransition,f=t.done,d=t.nodeRef,m=t.isIn,p=a?"".concat(e,"--").concat(i):e,v=a?"".concat(n,"--").concat(i):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var t,e=d.current,n=p.split(" "),o=function t(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,u.Z)(n)))};(t=e.classList).add.apply(t,(0,u.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()};m||(c?e():(h.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[m]),r.createElement(r.Fragment,null,o)}}function T(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var b={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},_=function(t){var e=t.theme,n=t.type,o=c(t,d);return r.createElement("svg",s({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},O={info:function(t){return r.createElement(_,s({},t),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return r.createElement(_,s({},t),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return r.createElement(_,s({},t),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return r.createElement(_,s({},t),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,r.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),l=i[0],f=i[1],d=(0,r.useRef)(null),E=(0,r.useRef)(new Map).current,_=function(t){return-1!==l.indexOf(t)},I=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:_,getToast:function(t){return E.get(t)}}).current;function C(t){var e=t.containerId;!I.props.limit||e&&I.containerId!==e||(I.count-=I.queue.length,I.queue=[])}function N(t){f((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function j(){var t=I.queue.shift();x(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var a=e.delay,i=e.staleId,u=c(e,m);if(y(t)&&!function(t){return!d.current||I.props.enableMultiContainer&&t.containerId!==I.props.containerId||E.has(t.toastId)&&null==t.updateId}(u)){var l=u.toastId,f=u.updateId,_=u.data,C=I.props,L=function(){return N(l)},w=null==f;w&&I.count++;var M,R,P=s(s(s({},C),{},{style:C.toastStyle,key:I.toastKey++},Object.fromEntries(Object.entries(u).filter((function(t){var e=(0,o.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:f,data:_,closeToast:L,isIn:!1,className:g(u.className||C.toastClassName),bodyClassName:g(u.bodyClassName||C.bodyClassName),progressClassName:g(u.progressClassName||C.progressClassName),autoClose:!u.isLoading&&(M=u.autoClose,R=C.autoClose,!1===M||p(M)&&M>0?M:R),deleteToast:function(){var t=T(E.get(l),"removed");E.delete(l),b.emit(4,t);var e=I.queue.length;if(I.count=null==l?I.count-I.displayedToast:I.count-1,I.count<0&&(I.count=0),e>0){var o=null==l?I.props.limit:1;if(1===e||1===o)I.displayedToast++,j();else{var r=o>e?e:o;I.displayedToast=r;for(var a=0;a<r;a++)j()}}else n()}});P.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,i=null,s={theme:e,type:n};return!1===a||(h(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):v(a)||p(a)?i=a:o?i=O.spinner():function(t){return t in O}(n)&&(i=O[n](s))),i}(P),h(u.onOpen)&&(P.onOpen=u.onOpen),h(u.onClose)&&(P.onClose=u.onClose),P.closeButton=C.closeButton,!1===u.closeButton||y(u.closeButton)?P.closeButton=u.closeButton:!0===u.closeButton&&(P.closeButton=!y(C.closeButton)||C.closeButton);var S=t;(0,r.isValidElement)(t)&&!v(t.type)?S=(0,r.cloneElement)(t,{closeToast:L,toastProps:P,data:_}):h(t)&&(S=t({closeToast:L,toastProps:P,data:_})),C.limit&&C.limit>0&&I.count>C.limit&&w?I.queue.push({toastContent:S,toastProps:P,staleId:i}):p(a)?setTimeout((function(){x(S,P,i)}),a):x(S,P,i)}}function x(t,e,n){var o=e.toastId;n&&E.delete(n);var r={content:t,props:e};E.set(o,r),f((function(t){return[].concat((0,u.Z)(t),[o]).filter((function(t){return t!==n}))})),b.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return I.containerId=t.containerId,b.cancelEmit(3).on(0,L).on(1,(function(t){return d.current&&N(t)})).on(5,C).emit(2,I),function(){E.clear(),b.emit(3,I)}}),[]),(0,r.useEffect)((function(){I.props=t,I.isToastActive=_,I.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(E.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:d,isToastActive:_}}function C(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function N(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function j(t){var e=(0,r.useState)(!1),n=(0,o.Z)(e,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],f=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,r.useRef)(t),p=t.autoClose,v=t.pauseOnHover,g=t.closeToast,y=t.onClick,E=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",j),document.addEventListener("touchmove",I),document.addEventListener("touchend",j);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=C(e.nativeEvent),d.y=N(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?O():_()}}function _(){i(!0)}function O(){i(!1)}function I(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&O(),d.x=C(e),d.y=N(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function j(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",j),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",j);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,r.useEffect)((function(){m.current=t})),(0,r.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),h(t.onOpen)&&t.onOpen((0,r.isValidElement)(t.children)&&t.children.props),function(){var t=m.current;h(t.onClose)&&t.onClose((0,r.isValidElement)(t.children)&&t.children.props)}}),[]),(0,r.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[t.pauseOnFocusLoss]);var L={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return p&&v&&(L.onMouseEnter=O,L.onMouseLeave=_),E&&(L.onClick=function(t){y&&y(t),d.canCloseOnClick&&g()}),{playToast:_,pauseToast:O,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:L}}function L(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(t){var e=t.delay,n=t.isRunning,o=t.closeToast,i=t.type,c=void 0===i?"default":i,u=t.hide,l=t.className,d=t.style,m=t.controlledProgress,p=t.progress,v=t.rtl,g=t.isIn,y=t.theme,E=u||m&&0===p,T=s(s({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});m&&(T.transform="scaleX(".concat(p,")"));var b=f("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":v}),_=h(l)?l({rtl:v,type:c,defaultClassName:b}):f(b,l);return r.createElement("div",a({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:_,style:T},m&&p>=1?"onTransitionEnd":"onAnimationEnd",m&&p<1?null:function(){g&&o()}))}var w=function(t){var e=j(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,c=t.closeButton,u=t.children,l=t.autoClose,d=t.onClick,m=t.type,p=t.hideProgressBar,v=t.closeToast,g=t.transition,y=t.position,E=t.className,T=t.style,b=t.bodyClassName,_=t.bodyStyle,O=t.progressClassName,I=t.progressStyle,C=t.updateId,N=t.role,w=t.progress,M=t.rtl,R=t.toastId,P=t.deleteToast,S=t.isIn,k=t.isLoading,D=t.iconOut,B=t.closeOnClick,z=t.theme,A=f("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":B}),Z=h(E)?E({rtl:M,position:y,type:m,defaultClassName:A}):f(A,E),F=!!w||!l,q={closeToast:v,type:m,theme:z},H=null;return!1===c||(H=h(c)?c(q):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,q):L(q)),r.createElement(g,{isIn:S,done:P,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",s(s({id:R,onClick:d,className:Z},i),{},{style:T,ref:a}),r.createElement("div",s(s({},S&&{role:N}),{},{className:h(b)?b({type:m}):f("Toastify__toast-body",b),style:_}),null!=D&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},D),r.createElement("div",null,u)),H,r.createElement(x,s(s({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:M,theme:z,delay:l,isRunning:n,isIn:S,closeToast:v,hide:p,type:m,style:I,className:O,controlledProgress:F,progress:w||0}))))},M=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},R=E(M("bounce",!0)),P=(E(M("slide",!0)),E(M("zoom")),E(M("flip")),(0,r.forwardRef)((function(t,e){var n=I(t),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,c=t.className,u=t.style,l=t.rtl,d=t.containerId;function m(t){var e=f("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":l});return h(c)?c({position:t,rtl:l,defaultClassName:e}):f(e,g(c))}return(0,r.useEffect)((function(){e&&(e.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(t,e){var n=e.length?s({},u):s(s({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:m(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,a=t.props;return r.createElement(w,s(s({},a),{},{isIn:i(a.toastId),style:s(s({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,k=new Map,D=[],B=1;function z(){return""+B++}function A(t){return t&&(v(t.toastId)||p(t.toastId))?t.toastId:z()}function Z(t,e){return k.size>0?b.emit(0,t,e):D.push({content:t,options:e}),e.toastId}function F(t,e){return s(s({},e),{},{type:e&&e.type||t,toastId:A(e)})}function q(t){return function(e,n){return Z(e,F(t,n))}}function H(t,e){return Z(t,F("default",e))}H.loading=function(t,e){return Z(t,F("default",s({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(t,e,n){var o,r=e.pending,a=e.error,i=e.success;r&&(o=v(r)?H.loading(r,n):H.loading(r.render,s(s({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,r){if(null!=e){var a=s(s(s({type:t},c),n),{},{data:r}),i=v(e)?{render:e}:e;return o?H.update(o,s(s({},a),i)):H(i.render,s(s({},a),i)),r}H.dismiss(o)},l=h(t)?t():t;return l.then((function(t){return u("success",i,t)})).catch((function(t){return u("error",a,t)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(t,e){return Z(t,F("default",s({theme:"dark"},e)))},H.dismiss=function(t){k.size>0?b.emit(1,t):D=D.filter((function(e){return null!=t&&e.options.toastId!==t}))},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),b.emit(5,t)},H.isActive=function(t){var e=!1;return k.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=k.get(n||S);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,a=s(s(s({delay:100},o),e),{},{toastId:e.toastId||t,updateId:z()});a.toastId!==t&&(a.staleId=t);var i=a.render||r;delete a.render,Z(i,a)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return b.on(4,t),function(){b.off(4,t)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b.on(2,(function(t){S=t.containerId||t,k.set(S,t),D.forEach((function(t){b.emit(0,t.content,t.options)})),D=[]})).on(3,(function(t){k.delete(t.containerId||t),0===k.size&&b.off(0).off(1).off(5)}));var Q={form:"SearchingForm_form__X9emU",button:"SearchingForm_button__R716E",input:"SearchingForm_input__tSgyc"},Y=n(185),G=n(184),J=function(t){var e=t.onSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),i=a[0],s=a[1];return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(P,{autoClose:1e3}),(0,G.jsxs)("form",{className:Q.form,onSubmit:function(t){if(t.preventDefault(),""===i.trim())return H("\u043f\u0443\u0441\u0442\u0438\u0439 \u0440\u044f\u0434\u043e\u043a"),void s("");e(i)},children:[(0,G.jsx)("button",{type:"submit",className:Q.button,children:(0,G.jsx)("span",{className:Q.buttonLabel,children:(0,G.jsx)(Y.dVI,{})})}),(0,G.jsx)("input",{className:Q.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:i,onChange:function(t){s(t.currentTarget.value)}})]})]})},W=n(787),U=n(364),V=n(669),X=n(83),K=n(87),$=function(){var t=(0,r.useState)(null),e=(0,o.Z)(t,2),n=e[0],a=e[1],i=(0,r.useState)(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,K.lr)(),f=(0,o.Z)(l,2),d=f[0],m=f[1],p=d.get("query");(0,r.useEffect)((function(){p&&(u(!0),(0,U.Zh)(p).then((function(t){a(t.results)})).catch((function(t){console.log(t)})).finally((function(){u(!1)})))}),[p]);return(0,G.jsxs)("div",{children:[!c&&(0,G.jsx)(X.a,{}),(0,G.jsx)(W.D,{text:"search movie"}),(0,G.jsx)(J,{onSubmit:function(t){m({query:t}),u(!0),(0,U.Zh)(t).then((function(t){a(t.results)})).catch((function(t){console.log(t)})).finally((function(){u(!1)}))}}),n&&(0,G.jsx)(V.O,{arrayOfMovies:n})]})}},364:function(t,e,n){n.d(e,{M1:function(){return c},Pg:function(){return i},Zh:function(){return s},_L:function(){return a},tx:function(){return u}});var o="https://api.themoviedb.org/3/",r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU"}};function a(){var t="".concat(o,"movie/popular");return fetch(t,r).then((function(t){return t.json()}))}function i(t){var e="".concat(o,"movie/").concat(t);return fetch(e,r).then((function(t){return t.json()}))}function s(t){var e="".concat(o,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1");return fetch(e,r).then((function(t){return t.json()}))}function c(t){var e="".concat(o,"movie/").concat(t,"/credits");return fetch(e,r).then((function(t){return t.json()}))}function u(t){var e="".concat(o,"movie/").concat(t,"/reviews");return fetch(e,r).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=727.57a76922.chunk.js.map