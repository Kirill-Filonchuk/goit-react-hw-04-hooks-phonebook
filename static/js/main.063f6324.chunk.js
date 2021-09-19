(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=(n(17),n(9)),s=n(2),u=(n(18),n(11)),m=n.n(u),b=n(12),l=n(8),j=n.n(l),d=n(0);var f=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),u=i[0],m=i[1],b=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"!==n?"number"===n&&m(a):c(a)},l=function(){c(""),m("")};return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.formSubmitHandler({name:r,number:u}),l()},className:j.a.form,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:b}),"Number",Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:b}),Object(d.jsx)("button",{type:"submit",className:j.a.btnForm,children:"Add contact"})]})},O=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",value:t,onChange:n})]})},h=n(6),p=n.n(h),v=function(e){var t=e.visibleContact,n=e.onDeleteCont;return Object(d.jsx)("ul",{className:p.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(d.jsxs)("li",{className:p.a.item,children:[a,":",Object(d.jsx)("span",{children:r}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t)},className:p.a.btnForm,children:"Delete"})]},t)}))})};var x=function(){var e=Object(a.useState)(b),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&r(Object(i.a)(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(f,{formSubmitHandler:function(e){var t=e.name,a=e.number,c={id:m.a.generate(),name:t,number:a},o=c.name.toLowerCase();n.some((function(e){return e.name.toLowerCase()==="".concat(o)}))?alert("".concat(c.name," is already in contacts")):r([].concat(Object(i.a)(n),[c]))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(O,{value:u,onChange:function(e){l(e.currentTarget.value)}}),Object(d.jsx)(v,{visibleContact:function(){var e=u.toLowerCase(),t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));return t}(),onDeleteCont:function(e){r((function(){return n.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={list:"ContactList_list__2wbrt",item:"ContactList_item__1uv0W",btnForm:"ContactList_btnForm__g71cB"}},8:function(e,t,n){e.exports={form:"ContactForm_form__2URGQ",btnForm:"ContactForm_btnForm__24MZm"}}},[[28,1,2]]]);
//# sourceMappingURL=main.063f6324.chunk.js.map