(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__2URGQ",btnForm:"ContactForm_btnForm__24MZm"}},13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=(n(20),n(15)),s=n(3),u=n(4),l=n(7),m=n(6),b=(n(21),n(12)),d=n.n(b),h=n(13),j=n(14),f=n(5),p=n(10),C=n.n(p),O=n(0),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(f.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.formSubmitHandler(Object(j.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.form,children:["Name",Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange}),"Number",Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",className:C.a.btnForm,children:"Add contact"})]})}}]),n}(a.Component),x=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{children:["Find contacts by name",Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})},g=n(8),S=n.n(g),_=function(t){var e=t.visibleContact,n=t.onDeleteCont;return Object(O.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(O.jsxs)("li",{className:S.a.item,children:[a,":",Object(O.jsx)("span",{children:r}),Object(O.jsx)("button",{type:"button",onClick:function(){return n(e)},className:S.a.btnForm,children:"Delete"})]},e)}))})},y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:h,filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r={id:d.a.generate(),name:n,number:a},c=r.name.toLowerCase();t.state.contacts.some((function(t){return t.name.toLowerCase()==="".concat(c)}))?alert("".concat(r.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[r])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.onDeleteCont=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.visibleContact=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{formSubmitHandler:this.formSubmitHandler}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(x,{value:this.state.filter,onChange:this.changeFilter}),Object(O.jsx)(_,{visibleContact:this.visibleContact(),onDeleteCont:this.onDeleteCont})]})}}]),n}(a.Component);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactList_list__2wbrt",item:"ContactList_item__1uv0W",btnForm:"ContactList_btnForm__g71cB"}}},[[31,1,2]]]);
//# sourceMappingURL=main.d55a4222.chunk.js.map