(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),l=a.n(c),i=(a(73),a(1)),s=(a(74),a(2)),o=a.n(s);function m(e){var t=[];for(var a in e)"pop"!==a&&"edm"!==a&&"rap"!==a&&t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}function u(e,t){e.hasOwnProperty(t)?e[t]++:e[t]=1}function f(e,t){for(var a=0,n=0,r=[],c=e.length-1;a<t&&a<c;){if(e[n]){var l=e[n][0];"pop"!==l&&"edm"!==l&&"rap"!==l?(r.push(l),a++):c-=1}n++}return r}var g=function(e){var t=Object(n.useState)({topArtists:[{}]}),a=Object(i.a)(t,2),c=a[0],l=a[1],s=new o.a;return s.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};s.getMyTopArtists(t).then((function(t){l({topSongs:c.topSongs,topArtists:t.items}),e.updateArtists(t.items)}))}()}),[l]),r.a.createElement("div",{className:"top-artists-wrapper"},c.topArtists[0].name?r.a.createElement("div",{className:"top-artists"},r.a.createElement("h1",null,"Top Artists"),r.a.createElement("div",{className:"artists-wrapper"},c.topArtists.slice(0,3).map((function(e,t){return r.a.createElement("div",{className:"artist-wrapper",key:t},r.a.createElement("div",{className:"artist-images"},r.a.createElement("img",{src:e.images[0].url,className:"img1"}),r.a.createElement("img",{src:e.images[0].url,className:"img2"}),r.a.createElement("img",{src:e.images[0].url,className:"img3"})),r.a.createElement("div",{className:"artist-desc"},r.a.createElement("h3",{className:"black"},"#",t+1),r.a.createElement("h3",{className:"green"},e.name)))})))):r.a.createElement("p",null,"Loading..."))};var d=function(e){var t=Object(n.useState)({topSongs:[{}]}),a=Object(i.a)(t,2),c=a[0],l=a[1],s=new o.a;return s.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};s.getMyTopTracks(t).then((function(t){l({topSongs:t.items}),e.updateTracks(t.items)}))}()}),[l]),r.a.createElement("div",{className:"top-songs-wrapper"},c.topSongs[0].name?r.a.createElement("div",{className:"top-songs"},r.a.createElement("div",{className:"song-art"},r.a.createElement("img",{src:c.topSongs[0].album.images[0].url})),r.a.createElement("div",{className:"songs"},r.a.createElement("h2",null,"Your Top Songs"),r.a.createElement("div",{className:"songs-wrapper"},c.topSongs.slice(0,5).map((function(e,t){return r.a.createElement("div",{className:"song-wrapper",key:t},r.a.createElement("div",{className:"song-number"},r.a.createElement("h3",null,"#",t+1)),r.a.createElement("div",{className:"song-details"},r.a.createElement("h3",null,'"',e.name.length>19?e.name.substring(0,19).concat(".."):e.name,'"'),r.a.createElement("p",{className:"pink"},function(e,t){var a="";return e.forEach((function(n,r){a+=n[t],r<e.length-1&&(a+=", ")})),a}(e.artists,"name"))))}))))):r.a.createElement("p",null,"Loading..."))};var p=function(e){var t=Object(n.useState)({genres:{}}),a=Object(i.a)(t,2),c=a[0],l=a[1],s=[{}],g=new o.a;g.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};g.getMyTopArtists(t).then((function(e){s=e.items,l({genres:c.genres}),d()}))}()}),[l]);var d=function(){s.forEach((function(e){e.genres&&e.genres.forEach((function(e){var t=c.genres;u(t,e),l({genres:t})}))})),e.updateGenres(c.genres)};return r.a.createElement("div",{className:"genres-wrapper"},r.a.createElement("div",{className:"genres"},r.a.createElement("h2",null,"Your Top Niche Genres"),r.a.createElement("p",null,"Ever wondered what subgenres of music you listen to most often?"),r.a.createElement("div",{className:"genre-level-wrapper"},function(e){if(Object.keys(e).length>0){var t=[],a=f(m(e),5).map((function(e,t){return r.a.createElement("div",{className:"genre-level",key:t},r.a.createElement("div",{className:"genre-level-front"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"genre-level-side"}))}));return t[0]=a[4],t[1]=a[3],t[2]=a[1],t[3]=a[0],t[4]=a[2],t}return r.a.createElement("p",null,"N/A")}(c.genres))))},v=a(67),h=a.n(v);var E=function(e){var t=Object(n.useState)({palette:{}}),a=Object(i.a)(t,2),c=(a[0],a[1]),l=function(t){var a=document.getElementById("downloadable");a.width=2*a.clientWidth,a.height=2*a.clientHeight;var n=a.getContext("2d");if(window.outerWidth<600?n.scale(1.4,1.4):n.scale(2,2),t.DarkMuted){var r=t.DarkMuted.getRgb();n.fillStyle="rgb("+r[0]+","+r[1]+","+r[2]+")"}else n.fillStyle="rgb(0,0,0)";if(n.fillRect(0,0,a.width,a.height),n.fillStyle="rgb(255,255,255)",n.font="16px 'Circular Spotify'",t.Vibrant){var c=t.Vibrant.getRgb();n.fillStyle="rgb("+c[0]+","+c[1]+","+c[2]+")"}else n.fillStyle="rgb(226,28,164)";n.fillText("QUARANTINE WRAPPED",270,50),n.fillRect(30,43,230,3);var l=new Image;if(l.crossOrigin="Anonymous",e.tracks&&(l.src=e.artists[0].images[0].url||""),l.onload=function(){n.drawImage(l,290,90,140,130),n.drawImage(l,280,115,160,145),n.drawImage(l,270,140,180,170),n.drawImage(l,250,170,220,210)},t.LightVibrant){var i=t.LightVibrant.getRgb();n.fillStyle="rgb("+i[0]+","+i[1]+","+i[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",n.fillText("TOP ARTISTS",30,106),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var o=0;o<5;o++)if(e.artists[o]&&0!=Object.keys(e.artists[o]).length){var m=e.artists[o].name;m.length>19&&(m=m.substring(0,19).concat("..")),s(n,m,30,133+28*o)}if(t.LightVibrant){var u=t.LightVibrant.getRgb();n.fillStyle="rgb("+u[0]+","+u[1]+","+u[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",s(n,"TOP SONGS",30,320),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var f=0;f<5;f++)if(e.tracks[f]){var g=e.tracks[f].name;g.length>19&&(g=g.substring(0,19).concat("..")),s(n,g,30,348+28*f)}if(t.LightVibrant){var d=t.LightVibrant.getRgb();n.fillStyle="rgb("+d[0]+","+d[1]+","+d[2]+")"}else n.fillStyle="rgb(209,255,106)";if(n.font="18px 'Circular Spotify'",s(n,"TOP GENRE",250,430),n.fillStyle="rgb(255,255,255)",n.font="24px 'Circular Spotify'",e.genres&&e.genres[0][0]){var p=e.genres[0][0],v=p.charAt(0).toUpperCase()+p.slice(1);s(n,v,250,460)}if(t.DarkVibrant){var h=t.DarkVibrant.getRgb();n.fillStyle="rgba("+h[0]+","+h[1]+","+h[2]+", 50)"}else n.fillStyle="rgb(255,255,255,50)";n.font="12px 'Circular Spotify'",s(n,"bit.ly/quarantine-wrapped",305,66)},s=function(e,t,a,n){e.fillText(t,a,n)};return Object(n.useEffect)((function(){e.finished>=3&&function(){var t="";e.tracks&&(t=e.artists[0].images[0].url||""),h.a.from(t).getPalette((function(e,t){t&&(c({palette:t}),l(t))}))}()}),[e.finished]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"canvas-graphic"},r.a.createElement("div",{className:"canvas-title"},r.a.createElement("h1",null,"Share with the world."),r.a.createElement("h3",null,"Or hide it away forever."),r.a.createElement("h3",null,"Your choice, really."),r.a.createElement("button",{onClick:function(){var e=document.getElementById("downloadable").toDataURL("image/png");e=(e=e.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var t=document.createElement("a");t.download="quarantine-wrapped.png",t.href=e,t.click()},className:"download-btn"},"Download")),r.a.createElement("canvas",{id:"downloadable",width:"500",height:"500"})))};var b=function(e){var t=Object(n.useState)({timeframe:0,tracks:[{}]}),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([{}]),u=Object(i.a)(s,2),f=u[0],v=u[1],h=Object(n.useState)(0),b=Object(i.a)(h,2),y=b[0],w=b[1],S=Object(n.useState)([{}]),k=Object(i.a)(S,2),N=k[0],T=k[1],O=Object(n.useState)(1),j=Object(i.a)(O,2),A=j[0],C=j[1];(new o.a).setAccessToken(e.token);var x={1:"short_term",2:"medium_term",3:"long_term"},R="#d1ff6a",I="#48937e",L="#e21ca4",q="#191414";Object(n.useEffect)((function(){l({timeframe:2});var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),[l]),window.addEventListener("load",(function(){V()})),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),V()}));var V=function(){var e=window.innerHeight;document.querySelector(".top-songs-wrapper").height=e,document.querySelector(".top-artists-wrapper").height=e,document.querySelector(".genres-wrapper").height=e,document.querySelector(".canvas-graphic-wrapper").height=e};return r.a.createElement("div",null,0===c.timeframe?r.a.createElement("div",{className:"options"},r.a.createElement("div",{onClick:function(){return l({timeframe:1})}},r.a.createElement("h2",null,"4 Weeks")),r.a.createElement("div",{onClick:function(){return l({timeframe:2})}},r.a.createElement("h2",null,"6 months")),r.a.createElement("div",{onClick:function(){return l({timeframe:3})}},r.a.createElement("h2",null,"All Time"))):r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"credit"},"Made with \u2665 by ",r.a.createElement("a",{href:"https://clawang.github.io/",id:"credit-link"},"Claire Wang"),"."),r.a.createElement("div",{className:"navigation"},r.a.createElement("p",null,A," / 4")),r.a.createElement("div",{className:"summary-content",onScroll:function(){var e=document.querySelector(".summary-content"),t=document.querySelector(".top-songs-wrapper"),a=document.querySelector(".genres-wrapper"),n=document.querySelector(".canvas-graphic-wrapper"),r=document.querySelector(".summary-bg");e.scrollTop<t.offsetTop-500?(r.style.backgroundColor=L,C(1)):e.scrollTop>=t.offsetTop-500&&e.scrollTop<a.offsetTop-500?(r.style.backgroundColor=q,C(2)):e.scrollTop>=a.offsetTop-500&&e.scrollTop<n.offsetTop-500?(r.style.backgroundColor=R,C(3)):e.scrollTop>=n.offsetTop-500&&(r.style.backgroundColor=I,C(4))}},r.a.createElement(g,{token:e.token,timeframe:x[c.timeframe],updateArtists:function(e){v(e),w((function(e){return e+1}))}}),r.a.createElement(d,{token:e.token,timeframe:x[c.timeframe],updateTracks:function(e){l({timeframe:c.timeframe,tracks:e}),w((function(e){return e+1}))}}),r.a.createElement(p,{token:e.token,timeframe:x[c.timeframe],updateGenres:function(e){var t=m(e);T(t),w((function(e){return e+1}))}}),r.a.createElement(E,{artists:f,tracks:c.tracks,genres:N,finished:y})),r.a.createElement("div",{className:"summary-bg"})))};var y=function(){var e=Object(n.useState)({loggedIn:!1,token:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=new o.a;return Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&l.setAccessToken(e),c({loggedIn:!!e,token:e})}),[c]),r.a.createElement("div",{className:"App"},a.loggedIn?r.a.createElement("div",null,r.a.createElement(b,{token:a.token})):r.a.createElement("div",{className:"start-screen"},r.a.createElement("div",null,r.a.createElement("div",{className:"heading-1"},r.a.createElement("h1",null,"Ready for your")),r.a.createElement("div",{className:"heading-2"},r.a.createElement("h1",null,"Quarantine Wrapped?")),r.a.createElement("div",{className:"start-descrip"},r.a.createElement("h3",{className:"green"},"Relive and discover the artists and music that have gotten you through."),r.a.createElement("button",null,r.a.createElement("a",{href:"/login"}," Login to Spotify "))),r.a.createElement("p",{className:"disclaimer"},"* NOT affiliated with Spotify"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a(197)},73:function(e,t,a){},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.1e971dbb.chunk.js.map