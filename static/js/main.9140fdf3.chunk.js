(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),o=n(18),r=n.n(o),a=(n(23),n(24),"31c5922e6ef19e6cb836a9dfe6768e66"),s={fetchTreding:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(a),fetchNetflixOriginal:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(a,"&with_networks=213"),fetchTopRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(a,"&language=en-US"),fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_generes=28"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_generes=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_generes=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_generes=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_generes=99")},l=n(3),h=n.n(l),d=n(6),u=n(8),b=n(7),p=n.n(b),f=(n(44),n(0)),v=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,o=Object(c.useState)([]),r=Object(u.a)(o,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(a),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"row_posters",children:a.map((function(e){return Object(f.jsx)("img",{className:"row_poster ".concat(i&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))})]})},j=(n(46),function(){var e,t,n=Object(c.useState)([]),i=Object(u.a)(n,2),o=i[0],r=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(s.fetchNetflixOriginal);case 2:return t=e.sent,n=Math.floor(Math.random()*t.data.results.length),r(t.data.results[n]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),Object(f.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(o.backdrop_path,'"'),backgroundSize:"cover",backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(f.jsx)("h3",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner__fadebottom"})]})});var g=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(j,{}),Object(f.jsx)(v,{title:"NetFlix Originals",fetchUrl:s.fetchNetflixOriginal,isLargeRow:!0}),Object(f.jsx)(v,{title:"Trending Now",fetchUrl:s.fetchTreding}),Object(f.jsx)(v,{title:"Action Movies",fetchUrl:s.fetchActionMovies}),Object(f.jsx)(v,{title:"Top Rated",fetchUrl:s.fetchTopRated}),Object(f.jsx)(v,{title:"Horror Movies",fetchUrl:s.fetchHorrorMovies}),Object(f.jsx)(v,{title:"Romance",fetchUrl:s.fetchRomanceMovies}),Object(f.jsx)(v,{title:"Comedy",fetchUrl:s.fetchComedyMovies}),Object(f.jsx)(v,{title:"Documentaries",fetchUrl:s.fetchDocumentaries})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),m()}},[[47,1,2]]]);
//# sourceMappingURL=main.9140fdf3.chunk.js.map