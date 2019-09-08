(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(33),l=a.n(r),o=a(6),s=a(39),i=(a(48),a(17)),m=a.n(i),u=a(34),p=a(4),f=a(42),b=a(2),d=a(11),E=a(13),O=a.n(E),k=a(38),j=a.n(k),g=function(e){var t=e.types;return 0===t.length?null:c.a.createElement("ul",{className:"pokemon-type-list"},t.map(function(e){return c.a.createElement("li",{key:j()()},e.type.name)}))};g.defaultProps={types:[]};var v=Object(n.memo)(g),y=function(e){return e?"000".substring(0,"000".length-e.toString().length)+e:null},N=function(e){return Array.from(Array(e||10),function(e,t){return t+1})},S={BASE:"/",TYPES:["water","fire","electric","grass"],IMG_PATH:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"},h=Object(n.memo)(function(e){var t=e.pokemon,a=t.name,r=t.id,l=t.types,o=e.onCardClick,s=e.index,i=Object(n.useState)("normal"),m=Object(p.a)(i,2),u=m[0],f=m[1],b="".concat(S.IMG_PATH).concat(y(r),".png"),E=Object(n.useRef)(null);return Object(n.useEffect)(function(){l.some(function(e){var t=e.type.name;return!!S.TYPES.includes(t)&&(f(t),!0)})},[l]),c.a.createElement("button",{ref:E,type:"button",className:O()("pokemon-card",Object(d.a)({},u,u)),onClick:function(){return o(u,b,s)}},c.a.createElement("span",{className:"pokemon-card-title"},a),c.a.createElement("div",{className:"pokemon-card-content"},c.a.createElement(v,{types:l}),c.a.createElement("div",null,c.a.createElement("img",{src:b,alt:"pokemon"}))))}),w=Object(n.memo)(function(e){var t=e.pokemons,a=e.loadMoreData,r=e.isLoading,l=e.onCardClick,o=e.showLoadMore,s=Object(n.useState)(!1),i=Object(p.a)(s,2),m=i[0],u=i[1];Object(n.useEffect)(function(){u(!0)},[]);var f=Object(b.c)({opacity:m?1:0,transform:m?"translateY(0px)":"translateY(50px)"});return c.a.createElement(b.a.div,{style:f,className:"pokemon-list-wrapper"},c.a.createElement("div",{className:"pokemon-list"},t.map(function(e,t){return c.a.createElement("article",{key:e.id},c.a.createElement(h,{pokemon:e,onCardClick:l,index:t}))})),c.a.createElement("div",{className:"load-more-wrapper"},o&&t.length>0&&c.a.createElement("button",{disabled:r,className:"load-more",type:"button",onClick:a},c.a.createElement("i",{className:"material-icons"},"expand_more"))))});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){var t=e.clicked,a=e.className,n=e.imgSrc,r=e.currentPokemon,l=r.name,o=r.types,s=r.id,i=r.height,m=r.weight,u=r.base_experience,p=Object(b.c)({opacity:t?1:0}),f=Object(b.c)({transform:t?"scale(1.2)":"scale(0.5)"}),d=Object(b.c)({config:b.b.stiff,transform:t?"scale(1) translateY(0px)":"scale(0.5) translateY(50px)"}),E=Object(b.c)({config:b.b.stiff,delay:50,transform:t?"translateY(0px)":"translateY(50px)"}),k=Object(b.c)({config:b.b.gentle,delay:50,transform:t?"translateX(0px)":"translateX(200px)"}),j=Object(b.c)({config:b.b.gentle,delay:40,transform:t?"translateY(0px)":"translateY(200px)"});return c.a.createElement(b.a.div,{style:P({},p,{visibility:t?"initial":"hidden"}),className:O()("pokemon-detail",a,{"no-pointer-event":!t})},c.a.createElement("div",{className:"container pokemon-info"},c.a.createElement("div",{className:"pokemon-name-wrapper"},c.a.createElement(b.a.h1,{style:d,className:"title"},l),c.a.createElement(b.a.span,{style:k,className:"pokemon-id"},"#".concat(y(s)))),c.a.createElement(b.a.div,{style:E},c.a.createElement(v,{types:o}))),c.a.createElement("div",{className:"pokemon-slider"},t&&c.a.createElement(b.a.img,{alt:"pokemon",src:n,style:f})),c.a.createElement(b.a.div,{style:j,className:"about-container"},c.a.createElement("div",{className:"container about-content"},c.a.createElement("span",{className:"subtitle"},"About"),c.a.createElement("table",{className:"about-table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"p-t-0"},"Height"),c.a.createElement("td",null,i)),c.a.createElement("tr",null,c.a.createElement("th",null,"Weight"),c.a.createElement("td",null,m)),c.a.createElement("tr",null,c.a.createElement("th",null,"Base experience"),c.a.createElement("td",null,u)))))))};C.defaultProps={className:null,imgSrc:null,domRect:null,currentPokemon:{}};var I=Object(n.memo)(C),Y=function(e){var t=e.setClicked,a=e.clicked,r=e.onFavoriteClick,l=e.onFilterClick,o=e.isFilterClicked,s=e.currentPokemonId,i=Object(n.useState)(!1),m=Object(p.a)(i,2),u=m[0],f=m[1];return Object(n.useEffect)(function(){localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).includes(s)?f(!0):f(!1)},[s]),c.a.createElement("header",{className:"container header-container"},c.a.createElement("nav",{className:O()("nav",{white:a})},a&&c.a.createElement("button",{type:"button",onClick:function(){return t(!1)}},c.a.createElement("i",{className:"material-icons"},"arrow_back")),a?c.a.createElement("button",{className:"m-l-auto",type:"button",onClick:function(){f(!u),r()}},c.a.createElement("i",{className:"material-icons"},u?"favorite":"favorite_border")):c.a.createElement("button",{className:"m-l-auto",type:"button",onClick:l},c.a.createElement("i",{className:"material-icons"},o?"list":"filter_list"))))};Y.defaultProps={currentPokemonId:null};var J=Object(n.memo)(Y),_=new f.a,A=Object(n.memo)(function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),s=o[0],i=o[1],f=Object(n.useState)(10),b=Object(p.a)(f,2),d=b[0],E=b[1],O=Object(n.useState)(!1),k=Object(p.a)(O,2),j=k[0],g=k[1],v=Object(n.useState)(""),y=Object(p.a)(v,2),S=y[0],h=y[1],x=Object(n.useState)("normal"),P=Object(p.a)(x,2),C=P[0],Y=P[1],A=Object(n.useState)({}),D=Object(p.a)(A,2),F=D[0],M=D[1],B=Object(n.useState)(!1),L=Object(p.a)(B,2),T=L[0],H=L[1],R=Object(n.useRef)(null),G=Object(n.useCallback)(Object(u.a)(m.a.mark(function e(){var t,a,n=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:N(d),g(!0),e.next=4,_.getPokemonByName(t);case 4:a=e.sent,r(a),g(!1);case 7:case"end":return e.stop()}},e)})),[d]);Object(n.useEffect)(function(){T||T&&s?G(JSON.parse(localStorage.getItem("favorites"))):G()},[s,G,T]),Object(n.useEffect)(function(){localStorage.getItem("favorites")||localStorage.setItem("favorites","[]")},[]);return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"app",ref:R},c.a.createElement(J,{currentPokemonId:F.id,setClicked:i,clicked:s,isFilterClicked:T,onFavoriteClick:function(){var e=JSON.parse(localStorage.getItem("favorites"));if(e.includes(F.id)){var t=e.filter(function(e){return e!==F.id});localStorage.setItem("favorites",JSON.stringify(t))}else e.push(F.id),localStorage.setItem("favorites",JSON.stringify(e))},onFilterClick:function(){H(!T)}}),c.a.createElement(I,{clicked:s,imgSrc:S,className:C,currentPokemon:F}),c.a.createElement("section",{className:"container"},c.a.createElement("h1",{className:"title"},"Pokedex")),c.a.createElement("section",{className:"pokemon-list-container"},c.a.createElement(w,{pokemons:a,onCardClick:function(e,t,n){h(t),Y(e),i(!0),M(a[n])},loadMoreData:function(){E(d+10),G()},isLoading:j,showLoadMore:!T}))))}),D=function(){return c.a.createElement(s.a,null,c.a.createElement(o.a,{render:function(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:A}),c.a.createElement(o.a,{exact:!0,path:"/",component:A}))}}))};l.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cbe86abc.chunk.js.map