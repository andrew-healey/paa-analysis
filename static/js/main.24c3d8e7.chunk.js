(this["webpackJsonppeople-also-asked"]=this["webpackJsonppeople-also-asked"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19),r=n.n(c),l=(n(31),n(6)),u=n(25),i=n(1),s=(n(32),n(16)),m=n(20),p=n(21);function d(){var e=Object(m.a)(["\n    :hover {\n        background:#DDDDDD;\n        border:2px solid;\n    }\n    border:1px solid;\n    background:#FFFFFF;\n"]);return d=function(){return e},e}var h=window.location.origin.startsWith("http://localhost")?"http://localhost:4000":"https://people-also-asked.herokuapp.com",f=p.a.li(d());function b(e){var t=e.question,n=e.answer,a=e.idx,c=e.selectQuestion;return o.a.createElement(f,{onClick:c,key:a},o.a.createElement("h2",null,t),o.a.createElement("p",null,n))}function v(e){var t=e.question,n=e.endTerm,c=e.allowAnswer,r=Object(a.useState)([]),u=Object(l.a)(r,2),i=u[0],m=u[1],p=Object(a.useState)(!1),d=Object(l.a)(p,2),f=d[0],v=d[1],E=Object(a.useState)(null),w=Object(l.a)(E,2),j=w[0],O=w[1];return Object(a.useEffect)((function(){fetch("".concat(h,"/challenge"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,endTerm:n,allowAnswer:c})}).then((function(e){return e.json().then((function(e){var t=e.id,n=e.questions,a=e.completed;v(a),m(n),O(t)}))}))}),[t,n,c]),o.a.createElement("div",null,f?o.a.createElement("h1",null,"You won!"):null,o.a.createElement("ul",null,i.map((function(e,t){var n=e.question,a=e.answer;return o.a.createElement(b,{selectQuestion:function(e){return function(e){return fetch("".concat(h,"/click?id=").concat(encodeURIComponent(j),"&idx=").concat(encodeURIComponent(e))).then((function(e){return e.json()})).then((function(e){var t=e.questions,n=e.completed;m([].concat(Object(s.a)(i),Object(s.a)(t))),v(n)}))}(t)},question:n,answer:a,idx:t})}))))}var E=function(){var e=Object(a.useState)("Irish potato famine"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("fish"),s=Object(l.a)(r,2),m=s[0],p=s[1],d=Object(a.useState)(!1),h=Object(l.a)(d,2),f=h[0],b=h[1];return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/"},o.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("input",{value:m,onChange:function(e){return p(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("input",{type:"button",value:f,onClick:function(){return b(!f)}}),o.a.createElement(v,{question:n,endTerm:m,allowAnswer:f})),o.a.createElement(i.a,{path:"/old"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.24c3d8e7.chunk.js.map