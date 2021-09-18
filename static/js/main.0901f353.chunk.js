(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=(n(23),n(9)),s=n(10),u=(n(24),n(12)),m=n.n(u),b=n(13),l=n(14),d=n(5),j=n(15),h=n(16),f=n(18),O=n(17),p=n(8),C=n.n(p),v=n(0),x=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(d.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.formSubmitHandler(Object(l.a)({},e.state)),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.form,children:["Name",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange}),"Number",Object(v.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange}),Object(v.jsx)("button",{type:"submit",className:C.a.btnForm,children:"Add contact"})]})}}]),n}(a.Component),g=function(e){var t=e.value,n=e.onChange;return Object(v.jsxs)("label",{children:["Find contacts by name",Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"text",value:t,onChange:n})]})},S=n(6),_=n.n(S),y=function(e){var t=e.visibleContact,n=e.onDeleteCont;return Object(v.jsx)("ul",{className:_.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(v.jsxs)("li",{className:_.a.item,children:[a,":",Object(v.jsx)("span",{children:r}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(t)},className:_.a.btnForm,children:"Delete"})]},t)}))})};var N=function(){var e=Object(a.useState)(b),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&r(Object(i.a)(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(x,{formSubmitHandler:function(e){var t=e.name,a=e.number,c={id:m.a.generate(),name:t,number:a},o=c.name.toLowerCase();n.some((function(e){return e.name.toLowerCase()==="".concat(o)}))?alert("".concat(c.name," is already in contacts")):r([].concat(Object(i.a)(n),[c]))}}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(g,{value:u,onChange:function(e){l(e.currentTarget.value)}}),Object(v.jsx)(y,{visibleContact:function(){var e=u.toLowerCase(),t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));return t}(),onDeleteCont:function(e){r((function(){return n.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={list:"ContactList_list__2wbrt",item:"ContactList_item__1uv0W",btnForm:"ContactList_btnForm__g71cB"}},8:function(e,t,n){e.exports={form:"ContactForm_form__2URGQ",btnForm:"ContactForm_btnForm__24MZm"}}},[[34,1,2]]]);
//# sourceMappingURL=main.0901f353.chunk.js.map