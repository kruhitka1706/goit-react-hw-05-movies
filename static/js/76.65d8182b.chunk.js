"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(439),c=e(364),i=e(689),a=e(791),o=e(83),u="Cast_cast__m5y0R",s=e(184),h=function(){var n=(0,i.UO)().movieId,t=(0,a.useState)(null),e=(0,r.Z)(t,2),h=e[0],f=e[1],l=(0,a.useState)(!1),d=(0,r.Z)(l,2),j=d[0],m=d[1];return(0,a.useEffect)((function(){m(!0),(0,c.M1)(n).then((function(n){f(n.cast)})).finally((function(){m(!1)}))}),[n]),(0,s.jsxs)("div",{children:[!j&&(0,s.jsx)(o.a,{}),!h&&(0,s.jsx)("p",{children:"there is no cast"}),h&&(0,s.jsx)("ul",{className:u,children:h.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{srcSet:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:"",width:"300px",height:"450px"})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:n.name})})]})},n.id)}))})]})}},83:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(430),c="Loder_loader__eE3WX",i=e(184),a=function(){return(0,i.jsx)("div",{className:c,children:(0,i.jsx)(r.RL,{height:"100",width:"100",radius:"48",color:"#dfdf49",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!1})})}},364:function(n,t,e){e.d(t,{M1:function(){return u},Pg:function(){return a},Zh:function(){return o},_L:function(){return i},tx:function(){return s}});var r="https://api.themoviedb.org/3/",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU"}};function i(){var n="".concat(r,"movie/popular");return fetch(n,c).then((function(n){return n.json()}))}function a(n){var t="".concat(r,"movie/").concat(n);return fetch(t,c).then((function(n){return n.json()}))}function o(n){var t="".concat(r,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");return fetch(t,c).then((function(n){return n.json()}))}function u(n){var t="".concat(r,"movie/").concat(n,"/credits");return fetch(t,c).then((function(n){return n.json()}))}function s(n){var t="".concat(r,"movie/").concat(n,"/reviews");return fetch(t,c).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=76.65d8182b.chunk.js.map