(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),s=n.n(o),d=(n(13),n(4)),u=n(0),r=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Todos List"})})},a=n(8),j=n(18),l=function(t){var e=t.input,n=t.setInput,i=t.todos,o=t.setTodos,s=t.editTodo,d=t.setEditTodo;Object(c.useEffect)((function(){n(s?s.title:"")}),[n,s]);return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s?function(t,e,n){var c=i.map((function(c){return c.id===e?{title:t,id:e,completed:n}:c}));o(c),d("")}(e,s.id,s.completed):(o([].concat(Object(a.a)(i),[{id:Object(j.a)(),title:e,completed:!1}])),n(""))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a Todo here...",className:"task-input",value:e,required:!0,onChange:function(t){n(t.target.value)}}),Object(u.jsx)("button",{className:"button-add",type:"submit",children:s?"OK":"Add"})]})},b=(n(6),function(t){var e=t.todos,n=t.setTodos,c=t.setEditTodo;return Object(u.jsx)("div",{children:e.map((function(t){return Object(u.jsxs)("li",{className:"list-item",children:[Object(u.jsx)("input",{type:"text",value:t.title,className:"list",onChange:function(t){return t.preventDefault()}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"button-edit task-button",onClick:function(){return function(t){var n=t.id,i=e.find((function(t){return t.id===n}));c(i)}(t)},children:"edit"}),Object(u.jsx)("button",{className:"button-delete",onClick:function(){return function(t){var c=t.id;n(e.filter((function(t){return t.id!==c})))}(t)},children:"del"})]})]},t.id)}))})}),O=(n(15),function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),s=Object(d.a)(o,2),a=s[0],j=s[1],O=Object(c.useState)(null),f=Object(d.a)(O,2),p=f[0],h=f[1];return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"app-wrapper",children:[Object(u.jsx)("div",{children:Object(u.jsx)(r,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(l,{input:n,setInput:i,todos:a,setTodos:j,editTodo:p,setEditTodo:h})}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{todos:a,setTodos:j,setEditTodo:h})})]})})}),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.c0cab930.chunk.js.map