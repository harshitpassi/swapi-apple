(this["webpackJsonpswapi-apple"]=this["webpackJsonpswapi-apple"]||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/human.0cf5c4bd.svg"},38:function(e,t,n){e.exports=n.p+"static/media/droid.dce70c46.svg"},39:function(e,t,n){e.exports=n.p+"static/media/wookie.b6b4459c.svg"},47:function(e,t,n){e.exports=n(62)},53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){e.exports=n.p+"static/media/star-jedi.7c622ae5.ttf"},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),l=n.n(o),c=(n(52),n(53),n(68)),i=n(69),u=n(65),s=(n(54),n(45)),m=n(64),p=n(72),f=n(66),E=n(74),d=n(70),h=n(67),g=n(6),w=n(73),v=n(46),P=n(37),O=n.n(P),b=n(38),y=n.n(b),S=n(39),_=n.n(S);function k(e){return function(t){return fetch(e).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:"SET_PERSON_PROFILE",profile:e}}(e))}))}}function C(e){return function(t){return fetch(e).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:"SET_PERSON_WORLD",world:e}}(e))}))}}function R(e){return function(t){return Promise.all(e.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){t(function(e){return{type:"SET_PERSON_MOVIES",movies:e}}(e))}))}}function N(e){return function(t){return Promise.all(e.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){t(function(e){return{type:"SET_PERSON_STARSHIPS",starships:e}}(e))}))}}var j=Object(g.b)((function(e,t){return{props:{people:e.people,ownProps:t}}}),(function(e){return{setPerson:function(t,n,r,a){var o=t.split("/")[5];return function(){e(function(e){return{type:"SET_CURRENT_PERSON",id:e}}(o)),e(k(t)),e(C(n)),e(R(r)),e(N(a)),e({type:"MODAL_OPEN"})}}}}))((function(e){var t,n=e.props,r=e.setPerson,o=n.ownProps.currentPerson&&0!==n.ownProps.currentPerson.species.length?n.ownProps.currentPerson.species[0].split("/")[5]:null,l=n.ownProps.currentPerson&&n.ownProps.currentPerson.films,c=n.ownProps.currentPerson&&n.ownProps.currentPerson.starships;switch(o){case"1":t=O.a;break;case"2":t=y.a;break;default:t=_.a}return a.a.createElement(p.a,{onClick:r(n.ownProps.currentPerson.url,n.ownProps.currentPerson.homeworld,n.ownProps.currentPerson.films,n.ownProps.currentPerson.starships),className:"person-card",style:{width:"100%",cursor:"pointer",marginTop:"10px"}},a.a.createElement(p.a.Img,{variant:"top",src:t}),a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,n.ownProps.currentPerson.name)),a.a.createElement(w.a,{className:"list-group-flush person-list"},a.a.createElement(v.a,null,"Films: ",l&&n.ownProps.currentPerson.films.length),a.a.createElement(v.a,null,"Starships: ",c&&n.ownProps.currentPerson.starships.length)))}));function T(e){return function(t){return t({type:"SHOW_LOADER",loading:!0}),fetch("".concat("https://swapi.co/api","/people/?page=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return t(I(e))}))}}function I(e){return{type:"SET_PEOPLE",people:e}}var H=Object(g.b)((function(e){var t=e.person;return{profile:t.profile,world:t.world}}))((function(e){var t=e.profile,n=e.world;return a.a.createElement(a.a.Fragment,null,t.name&&a.a.createElement("p",null,"Name: ",t.name),t.height&&a.a.createElement("p",null,"Height: ",t.height," cm"),t.mass&&a.a.createElement("p",null,"Mass: ",t.mass," kg"),t.gender&&a.a.createElement("p",null,"Gender: ",t.gender),n.name&&a.a.createElement("p",null,"Homeworld: ",n.name))})),L=function(e){return e&&"unknown"!==e},x=Object(g.b)((function(e){return{world:e.person.world}}))((function(e){var t=e.world;return a.a.createElement(a.a.Fragment,null,L(t.name)&&a.a.createElement("p",null,"Name: ",t.name),L(t.population)&&a.a.createElement("p",null,"Population: ",t.population),L(t.rotation_period)&&a.a.createElement("p",null,"Rotation Period: ",t.rotation_period," hours"),L(t.orbital_period)&&a.a.createElement("p",null,"Orbital Period: ",t.orbital_period," days"),L(t.diameter)&&a.a.createElement("p",null,"Diameter: ",t.diameter," km"),L(t.climate)&&a.a.createElement("p",null,"Climate: ",t.climate),L(t.gravity)&&a.a.createElement("p",null,"Gravity: ",t.gravity),L(t.terrain)&&a.a.createElement("p",null,"Terrain: ",t.terrain),L(t.surface_water)&&a.a.createElement("p",null,"Surface Water: ",t.surface_water))})),W=Object(g.b)((function(e){return{movies:e.person.movies}}))((function(e){var t=e.movies;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,t.map((function(e){var t=e.release_date.split("-");return a.a.createElement("li",{key:e.title}," Episode ",e.episode_id," - ",e.title," (",t[0],")")}))))})),B=Object(g.b)((function(e){return{starships:e.person.starships}}))((function(e){var t=e.starships;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.name}," ",e.name)}))))})),F=Object(g.b)((function(e){return{people:e.people,person:e.person,modals:e.modals}}),(function(e){return{closeModal:function(){return function(){e({type:"MODAL_CLOSE"})}},getNewPage:function(t){return e(T(t))}}}))((function(e){var t=e.people,n=e.person,o=e.modals,l=e.closeModal,c=e.getNewPage,i=Object(r.useState)(1),g=Object(s.a)(i,2),w=g[0],v=g[1],P=function(e){v(e),c(e)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{lg:12},a.a.createElement(p.a,null,a.a.createElement(p.a.Header,{as:"h3"},"People"),a.a.createElement(p.a.Body,null,a.a.createElement(u.a,null,t.loading&&a.a.createElement(f.a,{animation:"grow",variant:"info",size:"lg",style:{margin:"auto"}}),!t.loading&&t.data.map((function(e,t){return a.a.createElement(m.a,{key:e.name,md:{span:2,offset:t%5===0?1:0}},a.a.createElement(j,{currentPerson:e}))})))),a.a.createElement(p.a.Footer,{className:"text-center"},a.a.createElement(E.a,{style:{width:"25%",margin:"auto"}},a.a.createElement(E.a.Item,{active:1===w,onClick:function(){return P(1)}},1),a.a.createElement(E.a.Item,{active:2===w,onClick:function(){return P(2)}},2),a.a.createElement(E.a.Item,{active:3===w,onClick:function(){return P(3)}},3),a.a.createElement(E.a.Item,{active:4===w,onClick:function(){return P(4)}},4),a.a.createElement(E.a.Item,{active:5===w,onClick:function(){return P(5)}},5),a.a.createElement(E.a.Item,{active:6===w,onClick:function(){return P(6)}},6),a.a.createElement(E.a.Item,{active:7===w,onClick:function(){return P(7)}},7),a.a.createElement(E.a.Item,{active:8===w,onClick:function(){return P(8)}},8),a.a.createElement(E.a.Item,{active:9===w,onClick:function(){return P(9)}},9))))),a.a.createElement(d.a,{show:o,onHide:l()},a.a.createElement(d.a.Header,{closeButton:!0},a.a.createElement(d.a.Title,null,n.profile.name)),a.a.createElement(d.a.Body,{style:{minWidth:"80%"}},a.a.createElement(u.a,{style:{marginBottom:"15px"}},a.a.createElement(m.a,{md:6},a.a.createElement(p.a,{bg:"success",text:"white"},a.a.createElement(p.a.Header,null,"Profile"),a.a.createElement(p.a.Body,null,n.profile.name&&a.a.createElement(H,null)))),a.a.createElement(m.a,{md:6},"unknown"!==n.world.name&&a.a.createElement(p.a,{bg:"secondary",text:"white"},a.a.createElement(p.a.Header,null,"World"),a.a.createElement(p.a.Body,null,a.a.createElement(x,null))))),a.a.createElement(u.a,null,a.a.createElement(m.a,{md:6},a.a.createElement(p.a,{bg:"warning",text:"white"},a.a.createElement(p.a.Header,null,"Films"),a.a.createElement(p.a.Body,null,n.movies.length>0&&a.a.createElement(W,null)))),a.a.createElement(m.a,{md:6},n.starships.length>0&&a.a.createElement(p.a,{bg:"info",text:"white"},a.a.createElement(p.a.Header,null,"Starships"),a.a.createElement(p.a.Body,null,a.a.createElement(B,null)))))),a.a.createElement(d.a.Footer,null,a.a.createElement(h.a,{variant:"secondary",onClick:l()},"Close"))))})),A=n(71),D=Object(g.b)(null,(function(e){return{goHome:function(){return function(){e(T(1))}}}}))((function(e){var t=e.goHome;return a.a.createElement(A.a,{className:"header-bar",variant:"dark"},a.a.createElement(A.a.Brand,{style:{cursor:"pointer"},onClick:t()},a.a.createElement("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg",width:"90",height:"90",className:"d-inline-block",style:{marginRight:"10px"}})," ","Character Catalogue"))}));var M=Object(g.b)((function(e){return{person:e.person}}))((function(e){return e.person,a.a.createElement(c.a,{fluid:!0},a.a.createElement(D,null),a.a.createElement(i.a,null,a.a.createElement("h1",null,"Star Wars Character Catalogue"),a.a.createElement("p",null,"This is a Star Wars Character Catalogue, built on top of the ",a.a.createElement("a",{href:"https://swapi.co",target:"_blank",rel:"noopener noreferrer"},"SWAPI")," API. You can click on the name of a character to learn all about their characteristics, their homeworlds, the films they appeared in, and more!")),a.a.createElement(u.a,null,a.a.createElement(F,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(61);var G=n(14),J=n(44),U={loading:!0,data:[]},V={},Y={},z=[],$=[],q=Object(G.c)({id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PERSON":return t.id;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_PROFILE":return t.profile;default:return e}},world:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_WORLD":return t.world;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_MOVIES":return t.movies.sort((function(e,t){return e.episode_id-t.episode_id}));default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_STARSHIPS":return t.starships;default:return e}}}),K=Object(G.c)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PEOPLE":return{loading:!1,data:t.people};case"SHOW_LOADER":return{loading:!0};default:return e}},person:q,modals:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODAL_OPEN":return!0;case"MODAL_CLOSE":return!1;default:return e}}}),Q=Object(G.e)(K,Object(G.d)(Object(G.a)(J.a)));Q.dispatch((function(e){return fetch("".concat("https://swapi.co/api","/people")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(t){return e(I(t))}))}));var X=document.getElementById("root");l.a.render(a.a.createElement(g.a,{store:Q},a.a.createElement(M,null)),X),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.39c2118e.chunk.js.map