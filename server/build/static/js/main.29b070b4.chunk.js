(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(67),i=a.n(l),c=(a(74),a(1)),s=(a(75),a(2)),o=a.n(s);function m(e){var t=[];for(var a in e)"pop"!==a&&"edm"!==a&&"rap"!==a&&t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}function u(e,t){e.hasOwnProperty(t)?e[t]++:e[t]=1}function g(e,t){for(var a=0,n=0,r=[],l=e.length-1;a<t&&a<l;){if(e[n]){var i=e[n][0];"pop"!==i&&"edm"!==i&&"rap"!==i?(r.push(i),a++):l-=1}n++}return r}function d(e,t){var a="";return e.forEach((function(n,r){a+=n[t],r<e.length-1&&(a+=", ")})),a}function f(e){Object(n.useEffect)((function(){t()}),[]);var t=function(){document.querySelectorAll(".img3, .img2, .img1").forEach((function(e){var t=e.clientWidth;e.style.height=t+"px"}))};return window.addEventListener("resize",(function(){t()})),r.a.createElement("div",{className:"artist-images"},r.a.createElement("img",{src:e.artist.images[0].url,className:"img1",alt:e.artist.name}),r.a.createElement("img",{src:e.artist.images[0].url,className:"img2",alt:e.artist.name}),r.a.createElement("img",{src:e.artist.images[0].url,className:"img3",alt:e.artist.name}))}var p=function(e){var t=Object(n.useState)({topArtists:[{}]}),a=Object(c.a)(t,2),l=a[0],i=a[1],s=new o.a;return s.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};s.getMyTopArtists(t,(function(t,a){t?e.setError(1):(i({topSongs:l.topSongs,topArtists:a.items}),e.updateArtists(a.items))}))}()}),[i]),r.a.createElement("div",{className:"top-artists-wrapper"},l.topArtists[0].name?r.a.createElement("div",{className:"top-artists"},r.a.createElement("h1",null,"Top Artists"),r.a.createElement("div",{className:"artists-wrapper"},l.topArtists.slice(0,3).map((function(e,t){return r.a.createElement("div",{className:"artist-wrapper",key:t},r.a.createElement(f,{artist:e}),r.a.createElement("div",{className:"artist-desc"},r.a.createElement("h3",{className:"black"},"#",t+1),r.a.createElement("h3",{className:"green"},e.name)))})))):r.a.createElement("p",null,"Loading..."))};function h(e){return r.a.createElement("div",{className:"song-cover song-"+e.index,onMouseOver:e.handleHover,onMouseLeave:e.handleMouseLeave},r.a.createElement("img",{src:e.src,alt:e.name}))}var v=function(e){var t=Object(n.useState)({topSongs:[{}]}),a=Object(c.a)(t,2),l=a[0],i=a[1],s=Object(n.useState)({name:"",artists:[{}],number:0}),m=Object(c.a)(s,2),u=m[0],g=m[1],f=Object(n.useState)(!1),p=Object(c.a)(f,2),v=p[0],E=p[1],b=new o.a;b.setAccessToken(e.token);var w=function(e,t,a){g({name:e,artists:t,number:a})};return Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};b.getMyTopTracks(t).then((function(t){i({topSongs:t.items}),e.updateTracks(t.items)}))}(),window.innerWidth<800&&E(!0)}),[i]),window.addEventListener("resize",(function(){window.innerWidth<800?E(!0):E(!1)})),r.a.createElement("div",{className:"top-songs-wrapper"},l.topSongs[0].name?r.a.createElement("div",{className:"top-songs"},r.a.createElement("div",{className:"songs-header"},r.a.createElement("div",{className:"songs-header-wrapper"},r.a.createElement("h2",null,"You loved these songs the most."))),r.a.createElement("div",{className:"songs-text-wrapper"},v?l.topSongs.slice(0,5).map((function(e,t){return r.a.createElement("div",{className:"song-wrapper",key:t},r.a.createElement("div",{className:"song-number"},r.a.createElement("h3",null,t+1)),r.a.createElement("div",{className:"song-details"},r.a.createElement("h3",null,e.name.length>25?e.name.substring(0,25).concat(".."):e.name),r.a.createElement("p",{className:"pink"},d(e.artists,"name"))))})):r.a.createElement("p",null)),r.a.createElement("div",{className:"songs-wrapper"},r.a.createElement("div",{className:"songs-3d"},l.topSongs.slice(0,v?5:10).map((function(e,t){return r.a.createElement(h,{src:e.album.images[0].url,name:e.name,index:t,key:t,handleHover:function(){return w(e.name,e.artists,t)},handleMouseLeave:function(){return w("",[{}],0)}})})))),r.a.createElement("div",{className:"featured-song-container"},u.name?r.a.createElement("div",{className:"featured-song"},r.a.createElement("h3",{className:"featured-song-number"},u.number+1),r.a.createElement("h3",null,u.name.length>24?u.name.substring(0,24).concat(".."):u.name),r.a.createElement("p",null,d(u.artists,"name"))):r.a.createElement("p",null))):r.a.createElement("p",null,"Loading..."))};var E=function(e){var t=Object(n.useState)({genres:{}}),a=Object(c.a)(t,2),l=a[0],i=a[1],s=[{}],d=new o.a;d.setAccessToken(e.token),Object(n.useEffect)((function(){!function(){var t={time_range:e.timeframe};d.getMyTopArtists(t).then((function(e){s=e.items,i({genres:l.genres}),f()}))}()}),[i]);var f=function(){s.forEach((function(e){e.genres&&e.genres.forEach((function(e){var t=l.genres;u(t,e),i({genres:t})}))})),e.updateGenres(l.genres)};return r.a.createElement("div",{className:"genres-wrapper"},r.a.createElement("div",{className:"genres"},r.a.createElement("h2",null,"Your Top Niche Genres"),r.a.createElement("p",null,"Ever wondered what subgenres of music you listen to most often?"),r.a.createElement("div",{className:"genre-level-wrapper"},function(e){if(Object.keys(e).length>0){var t=[],a=g(m(e),5).map((function(e,t){return r.a.createElement("div",{className:"genre-level",key:t},r.a.createElement("div",{className:"genre-level-front"},r.a.createElement("h3",null,e)),r.a.createElement("div",{className:"genre-level-side"}))}));return t[0]=a[4],t[1]=a[3],t[2]=a[1],t[3]=a[0],t[4]=a[2],t}return r.a.createElement("p",null,"N/A")}(l.genres))))},b=a(68),w=a.n(b);var y=function(e){var t=Object(n.useState)({palette:{}}),a=Object(c.a)(t,2),l=(a[0],a[1]),i=function(t){var a=document.getElementById("downloadable");a.width=2*a.clientWidth,a.height=2*a.clientHeight;var n=a.getContext("2d");if(window.innerWidth<600?n.scale(1.4,1.4):n.scale(2,2),t.DarkMuted){var r=t.DarkMuted.getRgb();n.fillStyle="rgb("+r[0]+","+r[1]+","+r[2]+")"}else n.fillStyle="rgb(0,0,0)";if(n.fillRect(0,0,a.width,a.height),n.fillStyle="rgb(255,255,255)",n.font="16px 'Circular Spotify'",t.Vibrant){var l=t.Vibrant.getRgb();n.fillStyle="rgb("+l[0]+","+l[1]+","+l[2]+")"}else n.fillStyle="rgb(226,28,164)";n.fillText("QUARANTINE WRAPPED",270,50),n.fillRect(30,43,230,3);var i=new Image;if(i.crossOrigin="Anonymous",e.tracks&&(i.src=e.artists[0].images[0].url||""),i.onload=function(){if(i.naturalWidth<i.naturalHeight){var e=(i.naturalHeight-i.naturalWidth)/2;n.drawImage(i,0,e,i.naturalWidth,i.naturalWidth,290,90,140,140),n.drawImage(i,0,e,i.naturalWidth,i.naturalWidth,280,105,160,160),n.drawImage(i,0,e,i.naturalWidth,i.naturalWidth,265,125,190,190),n.drawImage(i,0,e,i.naturalWidth,i.naturalWidth,250,150,220,220)}else if(i.naturalWidth>i.naturalHeight){var t=(i.naturalWidth-i.naturalHeight)/2;n.drawImage(i,t,0,i.naturalHeight,i.naturalHeight,290,90,140,140),n.drawImage(i,t,0,i.naturalHeight,i.naturalHeight,280,105,160,160),n.drawImage(i,t,0,i.naturalHeight,i.naturalHeight,265,125,190,190),n.drawImage(i,t,0,i.naturalHeight,i.naturalHeight,250,150,220,220)}else n.drawImage(i,290,90,140,140),n.drawImage(i,280,105,160,160),n.drawImage(i,265,125,190,190),n.drawImage(i,250,150,220,220)},t.LightVibrant){var c=t.LightVibrant.getRgb();n.fillStyle="rgb("+c[0]+","+c[1]+","+c[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",n.fillText("TOP ARTISTS",30,106),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var o=0;o<5;o++)if(e.artists[o]&&0!=Object.keys(e.artists[o]).length){var m=e.artists[o].name;m.length>18&&(m=m.substring(0,18).concat("..")),s(n,m,30,133+28*o)}if(t.LightVibrant){var u=t.LightVibrant.getRgb();n.fillStyle="rgb("+u[0]+","+u[1]+","+u[2]+")"}else n.fillStyle="rgb(209,255,106)";n.font="18px 'Circular Spotify'",s(n,"TOP SONGS",30,320),n.fillStyle="rgb(255,255,255)",n.font="20px 'Circular Spotify'";for(var g=0;g<5;g++)if(e.tracks[g]){var d=e.tracks[g].name;d.length>18&&(d=d.substring(0,18).concat("..")),s(n,d,30,348+28*g)}if(t.LightVibrant){var f=t.LightVibrant.getRgb();n.fillStyle="rgb("+f[0]+","+f[1]+","+f[2]+")"}else n.fillStyle="rgb(209,255,106)";if(n.font="18px 'Circular Spotify'",s(n,"TOP GENRE",250,430),n.fillStyle="rgb(255,255,255)",n.font="24px 'Circular Spotify'",e.genres&&e.genres[0][0]){var p=e.genres[0][0],h=p.charAt(0).toUpperCase()+p.slice(1);s(n,h,250,460)}if(t.DarkVibrant){var v=t.DarkVibrant.getRgb();n.fillStyle="rgba("+v[0]+","+v[1]+","+v[2]+", 50)"}else n.fillStyle="rgb(255,255,255,50)";n.font="12px 'Circular Spotify'",s(n,"bit.ly/quarantine-wrapped",305,66)},s=function(e,t,a,n){e.fillText(t,a,n)};return Object(n.useEffect)((function(){e.finished>=3&&function(){var t="";e.tracks&&(t=e.artists[0].images[0].url||""),w.a.from(t).getPalette((function(e,t){t&&(l({palette:t}),i(t))}))}()}),[e.finished]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"canvas-graphic"},r.a.createElement("div",{className:"canvas-title"},r.a.createElement("h1",null,"Share with the world."),r.a.createElement("h3",null,"Or hide it away forever."),r.a.createElement("h3",null,"Your choice, really."),r.a.createElement("button",{onClick:function(){var e=document.getElementById("downloadable").toDataURL("image/png");e=(e=e.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var t=document.createElement("a");t.download="quarantine-wrapped.png",t.href=e,t.click()},className:"download-btn"},"Download")),r.a.createElement("canvas",{id:"downloadable",width:"500",height:"500"})))},S=a(12);var k=function(e){return r.a.createElement("div",{className:"loading"},0===e.state?r.a.createElement("h2",null,"Gathering your Spotify data..."):r.a.createElement("div",null,r.a.createElement("h2",null,"Looks like your authorization token has expired."),r.a.createElement("button",null,r.a.createElement("a",{href:"/"},"Try Again"))))};var N=function(e){var t=Object(n.useState)({timeframe:2,tracks:[{}]}),a=Object(c.a)(t,2),l=a[0],i=a[1],s=Object(n.useState)([{}]),u=Object(c.a)(s,2),g=u[0],d=u[1],f=Object(n.useState)(0),h=Object(c.a)(f,2),b=h[0],w=h[1],N=Object(n.useState)([{}]),O=Object(c.a)(N,2),T=O[0],j=O[1],A=Object(n.useState)(1),I=Object(c.a)(A,2),W=I[0],x=I[1],C=Object(n.useState)(0),L=Object(c.a)(C,2),R=L[0],H=L[1];(new o.a).setAccessToken(e.token);var M={1:"short_term",2:"medium_term",3:"long_term"},V="#d1ff6a",q="#48937e",D="#e21ca4",P="#191414";return Object(n.useEffect)((function(){i({timeframe:2})}),[i]),r.a.createElement("div",{className:"summary"},b<3?r.a.createElement(S.a,null,r.a.createElement(k,{state:R})):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"credit"},"Made with \u2665 by ",r.a.createElement("a",{href:"https://clawang.github.io/",id:"credit-link"},"Claire Wang"),"."),r.a.createElement("div",{className:"navigation"},r.a.createElement("p",null,W," / 4")),r.a.createElement("div",{className:"summary-content"},r.a.createElement(S.a,{className:"full-height",onScroll:function(){var e=document.querySelector(".full-height"),t=document.querySelector(".top-songs-wrapper"),a=document.querySelector(".genres-wrapper"),n=document.querySelector(".canvas-graphic-wrapper"),r=document.querySelector(".summary-bg");e.scrollTop<t.offsetTop-500?(r.style.backgroundColor=D,x(1)):e.scrollTop>=t.offsetTop-500&&e.scrollTop<a.offsetTop-500?(r.style.backgroundColor=P,x(2)):e.scrollTop>=a.offsetTop-500&&e.scrollTop<n.offsetTop-500?(r.style.backgroundColor=V,x(3)):e.scrollTop>=n.offsetTop-500&&(r.style.backgroundColor=q,x(4))}},r.a.createElement(p,{token:e.token,timeframe:M[l.timeframe],updateArtists:function(e){d(e),w((function(e){return e+1}))},setError:H}),r.a.createElement(v,{token:e.token,timeframe:M[l.timeframe],updateTracks:function(e){i({timeframe:l.timeframe,tracks:e}),w((function(e){return e+1}))}}),r.a.createElement(E,{token:e.token,timeframe:M[l.timeframe],updateGenres:function(e){var t=m(e);j(t),w((function(e){return e+1}))}}),r.a.createElement(y,{artists:g,tracks:l.tracks,genres:T,finished:b}))),r.a.createElement("div",{className:"summary-bg"}))};var O=function(){var e=Object(n.useState)({loggedIn:!1,token:""}),t=Object(c.a)(e,2),a=t[0],l=t[1],i=new o.a;return Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&i.setAccessToken(e),l({loggedIn:!!e,token:e})}),[l]),r.a.createElement("div",{className:"App"},a.loggedIn?r.a.createElement("div",null,r.a.createElement(N,{token:a.token})):r.a.createElement(S.a,null,r.a.createElement("div",{className:"start-screen"},r.a.createElement("div",null,r.a.createElement("div",{className:"heading-1"},r.a.createElement("h1",null,"Ready for your")),r.a.createElement("div",{className:"heading-2"},r.a.createElement("h1",null,"Quarantine Wrapped?")),r.a.createElement("div",{className:"start-descrip"},r.a.createElement("h3",{className:"green"},"Relive and discover the artists and music that have gotten you through."),r.a.createElement("button",null,r.a.createElement("a",{href:"/login"}," Login to Spotify "))),r.a.createElement("p",{className:"disclaimer"},"* NOT affiliated with Spotify")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(198)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.29b070b4.chunk.js.map