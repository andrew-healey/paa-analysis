(this["webpackJsonppeople-also-asked"]=this["webpackJsonppeople-also-asked"]||[]).push([[0],{12:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(6),r=t.n(c),l=(t(17),t(1)),u=(t(18),t(7)),i=t(8);function s(){var e=Object(u.a)(["\n    :hover {\n        background:#DDDDDD;\n        border:2px solid;\n    }\n    border:1px solid;\n    background:#FFFFFF;\n"]);return s=function(){return e},e}var m=window.location.origin.startsWith("http://localhost")?"http://localhost:4000":"https://people-also-asked.herokuapp.com",p=i.a.li(s());function d(e){var n=e.question,t=e.answer,o=e.idx,c=e.selectQuestion;return a.a.createElement(p,{onClick:c,key:o},a.a.createElement("h2",null,n),a.a.createElement("p",null,t))}function h(e){var n=e.question,t=e.endTerm,c=e.allowAnswer,r=Object(o.useState)([]),u=Object(l.a)(r,2),i=u[0],s=u[1];console.log(i);var p=Object(o.useState)(!1),h=Object(l.a)(p,2),f=h[0],b=h[1],v=Object(o.useState)(null),w=Object(l.a)(v,2),g=w[0],E=w[1];return Object(o.useEffect)((function(){console.log("Running!"),fetch("".concat(m,"/challenge"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,endTerm:t,allowAnswer:c})}).then((function(e){return e.json().then((function(e){var n=e.id,t=e.questions,o=e.complete;b(o),s(t),E(n)}))}))}),[n,t,c]),a.a.createElement("div",null,f?a.a.createElement("h1",null,"You won!"):null,a.a.createElement("ul",null,console.log("ques",i)||i.map((function(e,n){var t=e.question,o=e.answer;return a.a.createElement(d,{selectQuestion:function(e){return function(e){return fetch("".concat(m,"/click?id=").concat(encodeURIComponent(g),"&idx=").concat(encodeURIComponent(e))).then((function(e){return e.json()})).then((function(e){var n=e.questions,t=e.complete;s(n),b(t)}))}(n)},question:t,answer:o,idx:n})}))))}var f=function(){var e=Object(o.useState)("Irish potato famine"),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)("fish"),u=Object(l.a)(r,2),i=u[0],s=u[1],m=Object(o.useState)(!1),p=Object(l.a)(m,2),d=p[0],f=p[1];return Object(o.useEffect)((function(){console.log(t,i,d)})),a.a.createElement("div",{className:"App"},a.a.createElement("input",{value:t,onChange:function(e){return c(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:d,onClick:function(){return f(!d)}}),a.a.createElement(h,{question:t,endTerm:i,allowAnswer:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.b2ea0ef3.chunk.js.map