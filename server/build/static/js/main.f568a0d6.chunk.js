(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){},234:function(e,t,a){e.exports=a.p+"static/media/gradient2.f4d46500.jpg"},235:function(e,t,a){e.exports=a.p+"static/media/spotify1.c7677681.JPG"},236:function(e,t,a){e.exports=a.p+"static/media/spotify2.0814b338.JPG"},237:function(e,t,a){e.exports=a.p+"static/media/spotify3.a63b63cb.JPG"},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(79),c=a.n(i),l=(a(91),a(4)),s=(a(80),a(110),a(9)),o=a.n(s);var u=a(8),f=a.n(u),g=a(27),d=a(81),p=a.n(d),m=a(82),h=a.n(m),x=(a(234),a(83)),b=a.n(x),w=a(84),v=a.n(w),y=a(85),E=a.n(y);a(235),a(236),a(237);var S=function(e){var t=Object(n.useState)({palette:{}}),a=Object(l.a)(t,2),i=(a[0],a[1]),c=function(e,t){var a=e.indexOf("(");return a>0?e.substring(0,a):e.substring(0,e.length-t).concat("..")},s=function(){var t=Object(g.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,g,p,h,x,w,y,E,S,k,C,O,j,T;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,console.log(a),450,800,(n=document.getElementById("story")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),t.next=11,m(r,v.a,0,0,n.width,n.height);case 11:return i=120,console.log(e.artists),l="rgb(0,0,0)",s="rgb(177,197,252)",o="rgb(247,210,201)",r.fillStyle=l,r.fillRect(50,75,350,650),t.next=20,m(r,b.a,75,i+25,300,200);case 20:return t.next=22,m(r,e.artists[0].images[1].url,100,i,250,250);case 22:for(r.fillStyle="rgb(255,255,255)",r.font="16px 'Circular'",r.fillText("TOP ARTISTS",70,i+300),r.font="14px 'Circular'",u=0;u<5;u++)e.artists[u]&&0!=Object.keys(e.artists[u]).length&&(g=e.artists[u].name,p=r.measureText(g),(h=p.width)>200&&(x=h/g.length,w=Math.ceil((h-200)/x),g=c(g,w+1)),r.fillStyle=s,d(r,g,85,i+325+18*u),r.fillStyle="rgb(255,255,255)",d(r,u+1,70,i+325+18*u));for(r.font="16px 'Circular'",r.fillText("TOP SONGS",230,i+300),r.font="14px 'Circular'",y=0;y<5;y++)e.tracks[y]&&(E=e.tracks[y].name,S=r.measureText(E),(k=S.width)>100&&(C=k/E.length,O=Math.ceil((k-100)/C),E=c(E,O+1)),r.fillStyle=s,d(r,E,245,i+325+18*y),r.fillStyle="rgb(255,255,255)",d(r,y+1,230,i+325+18*y));r.fillStyle="rgb(255,255,255)",r.font="16px 'Circular'",r.fillText("TOP GENRE",70,i+470),r.fillStyle=s,r.font="32px 'Circular'",e.genres&&e.genres[0][0]&&(j=e.genres[0][0],T=j.charAt(0).toUpperCase()+j.slice(1),d(r,T,70,i+510)),50,r.fillStyle=o,r.fillRect(50,675,350,50),r.fillStyle=l,r.font="18px 'Circular'",r.textAlign="center",d(r,"bit.ly/quarantine-wrapped",225,i+550+25+8);case 44:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(g.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,g,p,h,x,b;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,450,800,(n=document.getElementById("artists")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),"rgb(229,187,241)",i="rgb(239,210,10)",l="rgb(226,28,164)",r.fillStyle="rgb(255,255,255)",r.fillRect(0,0,n.width,n.height),t.next=15,m(r,E.a,0,0,450,800);case 15:r.fillStyle=l,r.fillRect(50,75,350,650),r.font="32px 'Circular'",r.fillStyle="rgb(255,255,255)",r.textAlign="center",d(r,"My Top Artists",225,150),s=180,o=85,r.textAlign="left",u=0;case 25:if(!(u<5)){t.next=44;break}if(!e.artists[u]){t.next=41;break}return console.log(e.artists[u]),t.next=30,m(r,e.artists[u].images[1].url,o,s+100*u,90,90);case 30:r.font="18px 'Circular'",r.fillStyle=i,d(r,"#"+(u+1),o+105,s+35+100*u),r.fillStyle="rgb(255,255,255)",g=e.artists[u].name,p=r.measureText(g),h=p.width,180,h>180&&(x=h/g.length,b=Math.ceil((h-180)/x),g=c(g,b+1)),r.font="22px 'Circular'",d(r,g,o+105,s+65+100*u);case 41:u++,t.next=25;break;case 44:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(g.a)(f.a.mark((function t(){var a,n,r,i,l,s,o,u,g,p,x,b,w,v;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.devicePixelRatio,450,800,(n=document.getElementById("songs")).width=450*a,n.height=800*a,(r=n.getContext("2d")).scale(a,a),"rgb(226,139,5)",i="rgb(228,203,46)",l="rgb(205,38,2)",s="rgb(0,196,230)",r.fillStyle="rgb(255,255,255)",r.fillRect(0,0,n.width,n.height),t.next=16,m(r,h.a,0,0,450,800);case 16:r.fillStyle=i,r.fillRect(50,75,350,650),r.font="32px 'Circular'",r.fillStyle="rgb(0,0,0)",r.textAlign="center",d(r,"My Top Songs",225,150),o=180,u=85,r.textAlign="left",g=0;case 26:if(!(g<5)){t.next=46;break}if(!e.tracks[g]){t.next=43;break}return t.next=30,m(r,e.tracks[g].album.images[1].url,u,o+100*g,90,90);case 30:r.font="18px 'Circular'",r.fillStyle=s,d(r,"#"+(g+1),u+105,o+30+100*g),r.fillStyle="rgb(0,0,0)",p=e.tracks[g].name,x=r.measureText(p),b=x.width,180,b>180&&(w=b/p.length,v=Math.ceil((b-180)/w),p=c(p,v+1)),d(r,p,u+105,o+52+100*g),r.font="16px 'Circular'",r.fillStyle=l,d(r,e.tracks[g].artists[0].name,u+105,o+75+100*g);case 43:g++,t.next=26;break;case 46:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(e,t,a,n){e.fillText(t,a,n)},m=function(e,t,a,n,r,i){return new Promise((function(c,l){var s=new Image;s.crossOrigin="Anonymous",s.src=t,s.onload=function(){e.drawImage(s,a,n,r,i),c()}}))};return Object(n.useEffect)((function(){e.finished>=3&&function(){var t="";e.tracks&&(t=e.artists[0].images[0].url||""),p.a.from(t).getPalette((function(e,t){t&&(i({palette:t}),u(),s(),o())}))}()}),[e.finished]),r.a.createElement("div",{className:"canvas-graphic-wrapper"},r.a.createElement("div",{className:"canvas-container"},r.a.createElement("div",{className:"canvas-graphic"},r.a.createElement("div",{className:"canvas-title"},r.a.createElement("h1",null,"Share with the world."),r.a.createElement("h3",null,"Or hide it away forever."),r.a.createElement("h3",null,"Your choice, really."),r.a.createElement("button",{onClick:function(){var e=document.getElementById("story").toDataURL("image/png");e=(e=e.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var t=document.createElement("a");t.download="quarantine-wrapped.png",t.href=e,t.click()},className:"download-btn"},"Download")),r.a.createElement("div",{className:"graphics-wrapper"},r.a.createElement("canvas",{id:"songs",width:"450",height:"800"}),r.a.createElement("canvas",{id:"story",width:"450",height:"800"}),r.a.createElement("canvas",{id:"artists",width:"450",height:"800"})),r.a.createElement("div",{className:"canvas-credit"},"Made with \u2665 by ",r.a.createElement("a",{href:"https://clawang.github.io/",id:"credit-link"},"Claire Wang"),"."))))};a(238);var k=function(){var e=Object(n.useState)({loggedIn:!1,token:""}),t=Object(l.a)(e,2),a=(t[0],t[1]),i=Object(n.useState)(""),c=Object(l.a)(i,2),s=c[0],u=c[1],f=new o.a;return Object(n.useEffect)((function(){var e=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}().access_token;e&&f.setAccessToken(e),a({loggedIn:!!e,token:e})}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{type:"submit",onClick:function(e){e.preventDefault()}}))),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a.p+"static/media/gradient1.d7a28196.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/gradient3.a5e57412.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/gradient4.5f015694.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/gradient5.e2e75598.png"},86:function(e,t,a){e.exports=a(239)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.f568a0d6.chunk.js.map