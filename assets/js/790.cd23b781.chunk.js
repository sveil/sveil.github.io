(this.webpackChunk_sveil_single=this.webpackChunk_sveil_single||[]).push([[790],{382:(e,t,n)=>{"use strict";n.r(t);var r=n(505),a=n.n(r),l=n(627),c=n.n(l),i=n(592),s=n(176),o=n(812),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(244),n(501);var d=(0,r.lazy)((function(){return n.e(430).then(n.bind(n,430))}));c().render(a().createElement(r.Suspense,{fallback:a().createElement(s.gY,null)},a().createElement(i.zt,{store:o.h},a().createElement(d,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/sw.js";m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):u(t,e)}))}}()},176:(e,t,n)=>{"use strict";n.d(t,{Tb:()=>s,yq:()=>o,Yp:()=>v,ko:()=>N,JC:()=>w,L8:()=>b,gY:()=>k,M1:()=>C,bK:()=>y,$K:()=>M,Kz:()=>A});var r="text",a="",l="",c=n(505),i=n.n(c),s=function(e){var t=e.type,n=void 0===t?r:t,c=e.width,s=void 0===c?a:c,o=e.round,m=void 0===o?l:o,u="";switch(n){case"txt":u="h-4 rounded "+(s||"w-full");break;case"pic":u="h-12 w-12"+(m&&" rounded-full");break;default:u=""}return i().createElement("div",{className:"bg-gray-400 "+u})},o=function(e){var t=e.children;return i().createElement("div",{className:"animate-pulse p-1 w-full"},t)},m=n(592);function u(e,t){void 0===t&&(t=!0);var n=(0,c.useRef)(!1);(0,c.useEffect)((function(){t&&!n.current&&(n.current=!0,e())}),[e,t])}var d=n(812);function g(e,t){return e.present=t,(0,d.rx)(e)}var p=function(e){var t=e.url,n=(0,m.I0)(),r=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t||n(g(r,r.present+1))})),i().createElement("footer",{className:"bg-white relative pt-1"},i().createElement("div",{className:"container mx-auto px-6"},i().createElement("div",{className:"flex flex-col items-center"},t?i().createElement("div",{className:"sm:w-2/3 text-center py-2"},"\u5982\u679c\u4e0d\u80fd\u52a0\u8f7d\u8bf7\u5207\u6362\u5176\u4ed6\u8d44\u6e90\u3002\u5982\u82e5\u8d70\u6563\uff0c\u8bf7\u79fb\u6b65 ",t," \u5bfb\u627e\u6211\u4eec"):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-5/6"}))),i().createElement("div",{className:"flex flex-col items-center"},i().createElement("div",{className:"sm:w-2/3 text-center py-2"},t?i().createElement("p",{className:"text-sm text-gray-600 mb-2"},"Copyright \xa9 ",(new Date).getFullYear()," by"," ",i().createElement("a",{href:"https://"+t,className:"font-bold hover:text-gray-500",target:"_blank"},t),"."):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-3/4"}))))))},x=function(e){var t=e.title,n=e.subTitle,r=(0,m.I0)(),a=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n||r(g(a,a.present+1))})),i().createElement("header",{className:"bg-white shadow text-black"},i().createElement("div",{className:"container mx-auto flex py-6 px-5 items-center justify-center flex-col"},i().createElement("div",{className:"lg:px-8 sm:px-6 text-center lg:w-2/3 lg:text-lg sm:text-sm xs:text-xs"},t?i().createElement("h6",{className:"font-bold leading-loose"},t):i().createElement(o,null,i().createElement(s,{type:"txt"})),n?i().createElement("h6",{className:"leading-loose text-gray-500"},n):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-3/4"})))))};var f=function(e){var t=e.logo,n=e.title,r=(0,m.I0)(),a=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n||r(g(a,a.present+1))})),i().createElement("nav",{className:"bg-black"},i().createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},i().createElement("div",{className:"flex items-center justify-between h-16"},i().createElement("div",{className:"flex items-center"},i().createElement("div",{className:"flex-shrink-0"},t?i().createElement("img",{className:"h-8 w-8",src:t,alt:"Workflow"}):i().createElement(o,null,i().createElement(s,{type:"pic",round:"1"}))),i().createElement("div",{className:"ml-10 flex items-baseline space-x-4 text-white"},n||i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-16"})))),i().createElement("div",{className:"-mr-2 flex md:hidden"},i().createElement("button",{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},i().createElement("span",{className:"sr-only"},"Open main menu"),i().createElement("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},i().createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})),i().createElement("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},i().createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))))))},E=function(e){var t=e.mail,n=e.url,r=e.bitcoin,a=(0,m.I0)(),l=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n&&r||a(g(l,l.present+1))})),i().createElement("section",{className:"bg-gray-100 text-black"},i().createElement("div",{className:"container mx-auto flex px-5 py-6 items-center justify-center flex-col"},i().createElement("div",{className:"text-center lg:w-2/3 w-full"},t?i().createElement("h6",{className:"title-font lg:text-lg sm:text-sm xs:text-xs mb-4 font-medium text-black font-mono"},"\u652f\u6301\u90ae\u7bb1\uff1a",t):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-3/4"})),n?i().createElement("p",{className:"leading-relaxed lg:text-lg sm:text-sm xs:text-xs mb-4 font-normal"},"\u5730\u5740\u53d1\u5e03\u9875\uff1a",i().createElement("a",{href:"https://"+n,className:"text-gray-600 hover:text-gray-500",target:"_blank"},"https://",n)):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-3/4"})),r?i().createElement("div",{className:"flex justify-center lg:text-lg sm:text-sm xs:text-xs"},r):i().createElement(o,null,i().createElement(s,{type:"txt",width:"w-3/4"})))))},y={nav:{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHZpZXdCb3g9IjAgMCAyNDQuNjIgMjQ4LjA5Ij4KICAgIDxkZWZzIC8+CiAgICA8cGF0aCBmaWxsPSIjOGYwMGY4IgogICAgICAgIGQ9Ik0zNDMuNDUgMzI5LjQ4Yy0xMDguMzctMTAxLTI1Ni40IDMyLjYtMTg2LjU4IDE0OS44MyA2LjE4IDEwLjM4IDIxIDcuNDcgMTUuNDItNi43NC02Mi45Mi05MC44MyA0MC44MS0yMzkuNDIgMTcxLjE2LTE0My4wOXpNMTc2LjMxIDUwMy42OGMxMDYuMjQgMTAzLjIzIDI1Ny0yNy4yNCAxODkuNjYtMTQ1LjktNi0xMC41MS0yMC44MS03LjkyLTE1LjU2IDYuNDEgNjEuMDEgOTIuMTItNDUuOCAyMzguNTEtMTc0LjEgMTM5LjQ5eiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM4LjQ2IC0yOTMuNDIpIiAvPgogICAgPHBhdGggZmlsbD0iIzhmMDBmOCIKICAgICAgICBkPSJNMzIzLjgxIDM5MS40M2M0Ljg1IDkuNzYtMTEuMzggMzYuODItMjcgMjMuMTQtMzAuODUtMjctNTkuNjktMTIuOC0zMC42OSA1LjY2IDE1LjI2IDkuNzYgMzkuMjUgMjMuODcgNDYuMTEgMjkgMzAuODQgMjMuMTMgMy44NSA1NC0xMi41MyA1Ni4xLTYuNzUgMS43My0xNy4xNiAxLjczLTI5Ljg4IDEuNzMtOS4xOCAwLTE3LjY2LjA4LTI1LS41NC0xMy41NC0zLjMxLTI5LTE0Ljg4LTM2LjY3LTM4IDMuODUgNy43MSAyNyAzMC44NCA2NS41NCAzMC44NCAzMC44NSAwIDM0LjctMzAuODQgMTEuNTctNDYuMjctMy4zNS0yLjIzLTgxLTQyLjQxLTkyLjUzLTk2LjM5LTUuNjctMjYuMzcgMjctMzQuNyAzOC41NS0yMy4xMyA2OS40LTcuNzEgODMuOSAyMy42NyA4OC42OCAzMC44NCA3LjcgMTEuNTkuOCAyMC45MyAzLjg1IDI3LjAyeiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM4LjQ2IC0yOTMuNDIpIiAvPgo8L3N2Zz4K",title:"\u5168\u7f51\u805a\u5408"},header:{title:"\u5168\u7f51\u805a\u5408 - \u805a\u5408\u6700\u4f18\u8d28\u5168\u7f51\u8d44\u6e90",subTitle:"\u8bf7 ctrl+d \u6536\u85cf\u672c\u7f51\u9875\u5730\u5740\uff0c\u786e\u4fdd\u6c38\u4e45\u8bbf\u95ee"},panel:{mail:"support@sveil.com",url:"sveil.github.io",bitcoin:"\u6bd4\u7279\u5e01\u6536\u6b3e\u5730\u5740\uff1a1HKLRm8vutTYVdp4rYUNxULwYfEQ46appm"},footer:{url:"sveil.github.io"}},v=function(e){var t=e.nav,n=e.header,r=e.panel,a=e.footer,l=e.children,c=(0,m.I0)(),s=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n&&r&&a||c(g(s,s.present+1))})),i().createElement("div",null,void 0===t?i().createElement(f,null):i().createElement(f,{logo:t.logo,title:t.title}),void 0===n?i().createElement(x,null):i().createElement(x,{title:n.title,subTitle:n.subTitle}),i().createElement("main",null,i().createElement("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},i().createElement("div",{className:"px-4 py-6 sm:px-0"},i().createElement("div",{className:"border-4 border-dashed border-gray-200 rounded-lg"},l)))),void 0===r?i().createElement(E,null):i().createElement(E,{bitcoin:r.bitcoin,mail:r.mail,url:r.url}),void 0===a?i().createElement(p,null):i().createElement(p,{url:a.url}))},h=50,N=function(e){var t=e.done,n=void 0===t?h:t;return i().createElement("div",{className:"fixed top-0 left-0 w-full shadow"},i().createElement("div",{className:"overflow-hidden h-1 flex"},i().createElement("div",{className:"z-auto flex flex-col bg-blue-600",style:{width:n+"%"}})))},w=function(e){var t=e.url,n=e.type,r=e.wall,a=(0,m.I0)(),l=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n&&r||a(g(l,l.present+1))})),i().createElement("tbody",{className:"bg-white divide-y divide-gray-200"},i().createElement("tr",null,i().createElement("td",{className:"px-6 py-4 whitespace-nowrap"},t?i().createElement("div",{className:"text-sm font-medium text-gray-900"},i().createElement("a",{href:"https://"+t,className:"text-indigo-600 hover:text-indigo-900",target:"_blank"},t)):i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("td",{className:"px-6 py-4 whitespace-nowrap"},n?i().createElement("div",{className:"text-sm text-gray-900"},n):i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("td",{className:"px-6 py-4 whitespace-nowrap"},r?i().createElement("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},r):i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},t?i().createElement("a",{href:"https://"+t,className:"text-indigo-600 hover:text-indigo-900",target:"_blank"},"\u8bbf\u95ee"):i().createElement(o,null,i().createElement(s,{type:"txt"})))))},M={title:"\u5168\u7f51\u805a\u5408",lang:"zh-CN",description:"\u9996\u9875\u63cf\u8ff0",keywords:"\u9996\u9875\u5173\u952e\u5b57",hostname:"\u670d\u52a1\u5668\u540d",author:"\u4f5c\u8005"},I=n(671),b=function(e){var t=e.title,n=void 0===t?M.title:t,r=e.lang,a=void 0===r?M.lang:r,l=e.description,c=void 0===l?M.description:l,s=e.keywords,o=void 0===s?M.keywords:s,m=e.hostname,u=void 0===m?M.hostname:m,d=e.author,g=void 0===d?M.author:d;return i().createElement(I.Z,{htmlAttributes:{lang:a}},i().createElement("title",null,n),i().createElement("meta",{name:"description",content:c}),i().createElement("meta",{name:"keywords",content:o}),i().createElement("meta",{name:"hostname",content:u}),i().createElement("meta",{name:"author",content:g}))},L=2.25,j=2.25,T="8f00f8",k=function(e){var t=e.width,n=void 0===t?L:t,r=e.height,a=void 0===r?j:r,l=e.color,c=void 0===l?T:l;return i().createElement("svg",{className:"animate-spin",xmlns:"http://www.w3.org/2000/svg",width:n+"rem",height:a+"rem",viewBox:"0 0 100 100"},i().createElement("circle",{className:"animate-progress",fill:"none",cx:"50",cy:"50",r:"45",stroke:"#"+c,strokeWidth:"5",strokeDasharray:"283",strokeDashoffset:"280",strokeLinecap:"round",style:{transformOrigin:"50% 50%"}}))},A={title:{url:"\u7f51\u5740",type:"\u8d44\u6e90\u7c7b\u578b",wall:"\u5fc5\u9700\u7ffb\u5899",action:"\u64cd\u4f5c"},rows:[{url:"sveil.com",type:"\u5f71\u89c6",wall:"\u5426"},{url:"sveil.github.io",type:"\u5f71\u89c6",wall:"\u5426"}]},C=function(e){var t=e.title,n=e.rows,r=(0,m.I0)(),a=(0,m.v9)((function(e){return e.progress.part}));return u((function(){t&&n||r(g(a,a.present+1))})),i().createElement("div",{className:"flex flex-col"},i().createElement("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},i().createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},i().createElement("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},i().createElement("table",{className:"min-w-full divide-y divide-gray-200"},i().createElement("thead",{className:"bg-gray-50"},i().createElement("tr",null,i().createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},t&&t.url?t.url:i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},t&&t.type?t.type:i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},t&&t.wall?t.wall:i().createElement(o,null,i().createElement(s,{type:"txt"}))),i().createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},t&&t.action?t.action:i().createElement(o,null,i().createElement(s,{type:"txt"}))))),n?n.map((function(e){return i().createElement(w,{key:e.url,url:e.url,type:e.type,wall:e.wall})})):[1,2].map((function(e){return i().createElement(w,{key:e})})))))))}},812:(e,t,n)=>{"use strict";n.d(t,{rx:()=>l,h:()=>d});var r,a=n(145);!function(e){e.SETTOTAL="@@Progress/SETTOTAL",e.SETPART="@@Progress/SETPART"}(r||(r={}));var l=function(e){return(0,a.action)(r.SETPART,function(e){return e.past.length>=20&&e.past.pop(),e.past.unshift(e.present),e.future.length>=20&&e.future.pop(),e.future.unshift(e.present),e}(e))},c={progress:{total:{past:[0],present:0,future:[0]},part:{past:[0],present:0,future:[0]}}},i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){switch(void 0===e&&(e=c.progress),t.type){case r.SETTOTAL:return i(i({},e),{total:t.payload});case r.SETPART:return i(i({},e),{part:t.payload});default:return e}},o=n(717),m=n(267),u=(n(73),function(){return(0,o.UY)({progress:s})}),d=function(e){void 0===e&&(e=c);(0,m.Uo)({});return(0,o.MT)(u(),e)}()}}]);