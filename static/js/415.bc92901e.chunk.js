"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{83:function(t,n,e){e.d(n,{a:function(){return i}});var r=e(430),c="Loder_loader__eE3WX",a=e(184),i=function(){return(0,a.jsx)("div",{className:c,children:(0,a.jsx)(r.RL,{height:"100",width:"100",radius:"48",color:"#dfdf49",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!1})})}},669:function(t,n,e){e.d(n,{O:function(){return l}});var r=e(689),c=e(87),a="MoviesLayout_galleryMovies__vRtfz",i="MoviesLayout_moviesItem__R8PEs",o="MoviesLayout_moviesImg__9-H0K",u="MoviesLayout_moviesName__JwGve",s=e(184),l=function(t){var n=t.arrayOfMovies,e=(0,r.TH)();return(0,s.jsx)("ul",{className:a,children:n.map((function(t){var n=null;return n=t.title?t.title:t.name,(0,s.jsx)("li",{children:(0,s.jsx)("div",{className:i,children:(0,s.jsxs)(c.OL,{className:u,to:"/movies/".concat(t.id),state:{from:e},children:[(0,s.jsx)("img",{className:o,srcSet:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),(0,s.jsx)("p",{children:n})]})})},t.id)}))})}},787:function(t,n,e){e.d(n,{D:function(){return a}});e(791);var r="Title_title__mrNq5",c=e(184),a=function(t){var n=t.text;return(0,c.jsxs)("h1",{className:r,children:[" ",n," "]})}},415:function(t,n,e){e.r(n);var r=e(439),c=e(364),a=e(669),i=e(787),o=e(791),u=e(83),s=e(184);n.default=function(){var t=(0,o.useState)(null),n=(0,r.Z)(t,2),e=n[0],l=n[1],f=(0,o.useState)(!1),h=(0,r.Z)(f,2),m=h[0],v=h[1];return(0,o.useEffect)((function(){v(!0),(0,c._L)().then((function(t){l(t.results)})).catch((function(t){console.log(t)})).finally((function(){v(!1)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[!m&&(0,s.jsx)(u.a,{}),!e&&(0,s.jsx)("p",{children:"NO RESULTS"}),e&&(0,s.jsx)(i.D,{text:"Trending today"}),e&&(0,s.jsx)(a.O,{arrayOfMovies:e})]})}},364:function(t,n,e){e.d(n,{M1:function(){return u},Pg:function(){return i},Zh:function(){return o},_L:function(){return a},tx:function(){return s}});var r="https://api.themoviedb.org/3/",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU"}};function a(){var t="".concat(r,"movie/popular");return fetch(t,c).then((function(t){return t.json()}))}function i(t){var n="".concat(r,"movie/").concat(t);return fetch(n,c).then((function(t){return t.json()}))}function o(t){var n="".concat(r,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1");return fetch(n,c).then((function(t){return t.json()}))}function u(t){var n="".concat(r,"movie/").concat(t,"/credits");return fetch(n,c).then((function(t){return t.json()}))}function s(t){var n="".concat(r,"movie/").concat(t,"/reviews");return fetch(n,c).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=415.bc92901e.chunk.js.map