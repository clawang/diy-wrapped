(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){},235:function(e,t,a){e.exports=a.p+"static/media/gradient2.f4d46500.jpg"},236:function(e,t,a){e.exports=a.p+"static/media/spotify1.c7677681.JPG"},237:function(e,t,a){e.exports=a.p+"static/media/spotify2.0814b338.JPG"},238:function(e,t,a){e.exports=a.p+"static/media/spotify3.a63b63cb.JPG"},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(79),c=a.n(i),l=(a(91),a(2)),s=a(5),o=(a(92),a(111),a(80)),u=a.n(o),d=a(9),f=a.n(d),m=a(27),p=a(81),g=a.n(p),h=a(82),b=a.n(h),x=(a(235),a(83)),v=a.n(x),E=a(84),y=a.n(E),w=a(85),k=a.n(w);a(236),a(237),a(238);var O=function(e){var t=Object(n.useState)({palette:{}}),a=Object(l.a)(t,2),i=(a[0],a[1]),c=function(e,t){var a=e.indexOf("(");return a>0?e.substring(0,a):e.substring(0,e.length-t).concat("..")},s=function(){var t=Object(m.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,m,g,h,b,x,E,w,k,O,S,j,A,T;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,console.log(a),450,800,(n=document.getElementById("story")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),t.next=11,p(r,y.a,0,0,n.width,n.height);case 11:return i=120,l="rgb(0,0,0)",s="rgb(177,197,252)",o="rgb(247,210,201)",r.fillStyle=l,r.fillRect(50,75,350,650),t.next=19,p(r,v.a,75,i+25,300,200);case 19:return t.next=21,p(r,e.data.artists[0].images[1].url,100,i,250,250);case 21:for(r.fillStyle="rgb(255,255,255)",r.font="16px 'Circular'",r.fillText("TOP ARTISTS",70,i+300),r.font="14px 'Circular'",u=0;u<5;u++)e.data.artists[u]&&0!=Object.keys(e.data.artists[u]).length&&(m=e.data.artists[u].name,g=r.measureText(m),(h=g.width)>200&&(b=h/m.length,x=Math.ceil((h-200)/b),m=c(m,x+1)),r.fillStyle=s,d(r,m,85,i+325+18*u),r.fillStyle="rgb(255,255,255)",d(r,u+1,70,i+325+18*u));for(r.font="16px 'Circular'",r.fillText("TOP SONGS",230,i+300),r.font="14px 'Circular'",E=0;E<5;E++)e.data.tracks[E]&&(w=e.data.tracks[E].name,k=r.measureText(w),(O=k.width)>100&&(S=O/w.length,j=Math.ceil((O-100)/S),w=c(w,j+1)),r.fillStyle=s,d(r,w,245,i+325+18*E),r.fillStyle="rgb(255,255,255)",d(r,E+1,230,i+325+18*E));r.fillStyle="rgb(255,255,255)",r.font="16px 'Circular'",r.fillText("TOP GENRE",70,i+470),r.fillStyle=s,r.font="32px 'Circular'",e.genre&&(A=e.genre,T=A.charAt(0).toUpperCase()+A.slice(1),d(r,T,70,i+510)),50,r.fillStyle=o,r.fillRect(50,675,350,50),r.fillStyle=l,r.font="18px 'Circular'",r.textAlign="center",d(r,"bit.ly/quarantine-wrapped",225,i+550+25+8);case 43:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(m.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,m,g,h,b,x;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,450,800,(n=document.getElementById("artists")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),"rgb(229,187,241)",i="rgb(239,210,10)",l="rgb(226,28,164)",r.fillStyle="rgb(255,255,255)",r.fillRect(0,0,n.width,n.height),t.next=15,p(r,k.a,0,0,450,800);case 15:r.fillStyle=l,r.fillRect(50,75,350,650),r.font="32px 'Circular'",r.fillStyle="rgb(255,255,255)",r.textAlign="center",d(r,"My Top Artists",225,150),s=180,o=85,r.textAlign="left",u=0;case 25:if(!(u<5)){t.next=43;break}if(!e.data.artists[u]){t.next=40;break}return t.next=29,p(r,e.data.artists[u].images[1].url,o,s+100*u,90,90);case 29:r.font="18px 'Circular'",r.fillStyle=i,d(r,"#"+(u+1),o+105,s+35+100*u),r.fillStyle="rgb(255,255,255)",m=e.data.artists[u].name,g=r.measureText(m),h=g.width,180,h>180&&(b=h/m.length,x=Math.ceil((h-180)/b),m=c(m,x+1)),r.font="22px 'Circular'",d(r,m,o+105,s+65+100*u);case 40:u++,t.next=25;break;case 43:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(m.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,m,g,h,x,v,E;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,450,800,(n=document.getElementById("songs")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),"rgb(226,139,5)",i="rgb(228,203,46)",l="rgb(205,38,2)",s="rgb(0,196,230)",r.fillStyle="rgb(255,255,255)",r.fillRect(0,0,n.width,n.height),t.next=16,p(r,b.a,0,0,450,800);case 16:r.fillStyle=i,r.fillRect(50,75,350,650),r.font="32px 'Circular'",r.fillStyle="rgb(0,0,0)",r.textAlign="center",d(r,"My Top Songs",225,150),o=180,u=85,r.textAlign="left",m=0;case 26:if(!(m<5)){t.next=46;break}if(!e.data.tracks[m]){t.next=43;break}return t.next=30,p(r,e.data.tracks[m].album.images[1].url,u,o+100*m,90,90);case 30:r.font="18px 'Circular'",r.fillStyle=s,d(r,"#"+(m+1),u+105,o+30+100*m),r.fillStyle="rgb(0,0,0)",g=e.data.tracks[m].name,h=r.measureText(g),x=h.width,180,x>180&&(v=x/g.length,E=Math.ceil((x-180)/v),g=c(g,E+1)),d(r,g,u+105,o+52+100*m),r.font="16px 'Circular'",r.fillStyle=l,d(r,e.data.tracks[m].artists[0].name,u+105,o+75+100*m);case 43:m++,t.next=26;break;case 46:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(e,t,a,n){e.fillText(t,a,n)},p=function(e,t,a,n,r,i){return new Promise((function(c,l){var s=new Image;s.crossOrigin="Anonymous",s.src=t,s.onload=function(){e.drawImage(s,a,n,r,i),c()}}))};return Object(n.useEffect)((function(){console.log(e.done),e.data&&e.done&&function(){var t="";e.data.tracks&&(t=e.data.artists[0].images[0].url||""),g.a.from(t).getPalette((function(e,t){console.log(t),t&&(i({palette:t}),u(),s(),o())}))}()}),[e.data]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"graphics-wrapper"},r.a.createElement("canvas",{id:"songs",width:"450",height:"800"}),r.a.createElement("canvas",{id:"story",width:"450",height:"800"}),r.a.createElement("canvas",{id:"artists",width:"450",height:"800"})))};function S(e){var t,a;return r.a.createElement("div",{className:"results-item",onClick:function(t){e.setEntityData(e.data)}},r.a.createElement("img",{src:(null===(t=e.data.album.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.url)?e.data.album.images[0].url:"song.png"}),r.a.createElement("div",null,r.a.createElement("h3",null,e.data.name),r.a.createElement("h4",null,e.data.artists.map((function(e){return e.name})).reduce((function(e,t){return e+", "+t})))))}function j(e){var t,a;return r.a.createElement("div",{className:"results-item",onClick:function(t){e.setEntityData(e.data)}},r.a.createElement("img",{src:(null===(t=e.data.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.url)?e.data.images[0].url:"user.jpeg"}),r.a.createElement("div",null,r.a.createElement("h3",null,e.data.name)))}var A=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),u=o[0],d=o[1],f=Object(n.useState)(!1),m=Object(l.a)(f,2),p=m[0],g=m[1],h=function(){e.tracks?e.spotifyApi.searchTracks(i).then((function(e){d(e.tracks.items),g(!0)})):e.spotifyApi.searchArtists(i).then((function(e){d(e.artists.items),g(!0)}))};return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"text",value:i,placeholder:"Search "+(e.tracks?"a track":"an artist"),onChange:function(e){c(e.target.value),g(!1)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),h()}},r.a.createElement("img",{src:"./search.png"}))),u.length>0?r.a.createElement("div",{className:"results"},u.map((function(t){return e.tracks?r.a.createElement(S,{data:t,setEntityData:e.setData}):r.a.createElement(j,{data:t,setEntityData:e.setData})}))):p?r.a.createElement("div",{className:"results"},r.a.createElement("p",null,"There were no results for your query.")):r.a.createElement(r.a.Fragment,null))};var T=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){i.name&&(d(!0),e.tracks?e.dispatch({type:"ADD_TRACK",index:e.index-1,data:i}):e.dispatch({type:"ADD_ARTIST",index:e.index-1,data:i}))}),[i]),r.a.createElement("div",{className:"entity-wrapper"},r.a.createElement("p",{className:"entity-number"},e.index+"."),u&&i?r.a.createElement("div",{className:"selected-entity"},r.a.createElement("p",null,r.a.createElement("span",null,i.name+(e.tracks?" - "+i.artists.map((function(e){return e.name})).reduce((function(e,t){return e+", "+t})):"")),r.a.createElement("a",{className:"change-link",onClick:function(e){e.preventDefault(),d(!1),c({})}},"Change"))):r.a.createElement(A,{spotifyApi:e.spotifyApi,dispatch:e.dispatch,setData:c,tracks:e.tracks}))},C=(a(239),{tracks:new Array(5),artists:new Array(5),genre:"",time:0});function D(e,t){switch(t.type){case"ADD_TRACK":var a=e.tracks;return a[t.index]=t.data,Object(s.a)(Object(s.a)({},e),{},{tracks:a});case"ADD_ARTIST":var n=e.artists;return n[t.index]=t.data,Object(s.a)(Object(s.a)({},e),{},{artists:n});case"UPDATE_GENRE":return Object(s.a)(Object(s.a)({},e),{},{genre:t.data});case"UPDATE_TIME":return Object(s.a)(Object(s.a)({},e),{},{time:t.data});case"UPDATE_DATA":return t.data;default:throw new Error}}var N=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useReducer)(D,C),s=Object(l.a)(c,2),o=s[0],d=s[1],f=new u.a;Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&f.setAccessToken(e)}),[i]);var m=function(e){for(var t=[],a=0;a<5;a++)t.push(r.a.createElement(T,{key:a,tracks:e,index:a+1,spotifyApi:f,dispatch:d}));return t};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"DIY WRAPPED"),r.a.createElement("div",{className:"selections-wrapper"},r.a.createElement("div",{className:"selections"},r.a.createElement("h2",null,"Top Tracks"),m(!0)),r.a.createElement("div",{className:"selections"},r.a.createElement("h2",null,"Top Artists"),m(!1))),r.a.createElement("button",{onClick:function(e){for(var t=!0,a=0;a<5;a++)t=!(!o.tracks[a]||!o.artists[a]);i(t),t||alert("Please make sure all fields are filled in.")}},"Create My Wrapped"),r.a.createElement(O,{data:o,done:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a.p+"static/media/gradient1.d7a28196.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/gradient3.a5e57412.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/gradient4.5f015694.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/gradient5.e2e75598.png"},86:function(e,t,a){e.exports=a(240)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.fd05e21a.chunk.js.map