(this["webpackJsonpducktrshessami.github.io"]=this["webpackJsonpducktrshessami.github.io"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(21),i=c.n(n),r=c(6),l=c(2),o=c(0),j=new Date("7/9/1998");function d(){var e=new Date,t=e.getFullYear()-j.getFullYear()-(j.getMonth()<e.getMonth()||j.getMonth()===e.getMonth()&&j.getDate()<=e.getDate()?0:1);return Object(o.jsxs)("article",{children:[Object(o.jsx)("p",{children:"Josh Wee (He/Him)"}),Object(o.jsxs)("p",{children:["Age: ",t]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"I am also a full-stack web developer who has worked with React, MySql, and MongoDB."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Other than a programmer, I am a pianist, fledgling writer, and image editor."})]})}function h(){return Object(o.jsxs)("ul",{className:"card-content",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/ducktrshessami",children:"GitHub"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://greasyfork.org/en/users/3488-ducktrshessami",children:"Greasy Fork"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/josh-wee-b90455106/",children:"LinkedIn"})}),Object(o.jsxs)("li",{children:["Email: ",Object(o.jsx)("a",{href:"mailto:jwee761@gmail.com",children:"jwee761@gmail.com"})]}),Object(o.jsx)("li",{children:"Discord: ducktrshessami#4884"})]})}c(29);function b(){var e="/logo512.png";return Object(o.jsx)("article",{className:"row",children:Object(o.jsxs)("div",{className:"col s12 m8 offset-m2 white-text",children:[Object(o.jsxs)("div",{className:"card blue-grey darken-4 horizontal hide-on-small-only",children:[Object(o.jsx)("img",{src:e,alt:"Logo",className:"card-image horizontal-image"}),Object(o.jsxs)("div",{className:"card-stacked",children:[Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("h1",{className:"card-title",children:"About Me"}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsx)(d,{})]}),Object(o.jsx)(h,{})]})]}),Object(o.jsxs)("div",{className:"card blue-grey darken-4 hide-on-med-and-up",children:[Object(o.jsx)("img",{src:e,alt:"Logo",className:"card-image vertical-image"}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)(d,{})}),Object(o.jsx)(h,{})]})]})})}var u=c(4),m=c(12),O=c(13),x=c(15),p=c(14),f=c(9),g=c.n(f);c(30);function v(e){var t=e.size,c=e.className,s=void 0===c?"":c;return Object(o.jsx)("div",{className:"loading-".concat(t," ").concat(s),children:Object(o.jsx)("div",{className:"preloader-wrapper ".concat(t," active"),children:Object(o.jsxs)("div",{className:"spinner-layer mint-loading",children:[Object(o.jsx)("div",{className:"circle-clipper left",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"gap-patch",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"circle-clipper right",children:Object(o.jsx)("div",{className:"circle"})})]})})})}c(31);function N(e){var t=e.lang,c=e.url;return Object(o.jsx)("li",{className:"lang",children:Object(o.jsx)("img",{src:c,alt:t})})}c(32);function k(e){for(var t=[],c=e.trim().split("\n"),s=0;s<c.length;s++)t.push(Object(o.jsx)("p",{children:c[s]},s)),t.push(Object(o.jsx)("br",{},"".concat(s,"-br")));return t}function w(e){var t=e.title,c=e.description,s=e.langs,a=e.url,n=e.langImages;return Object(o.jsx)("li",{className:"portfolio-item",children:Object(o.jsx)("a",{href:a,className:"project-card card blue-grey darken-4 white-text waves-effect waves-dark",children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("h3",{className:"card-title",children:t}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),k(c),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{className:"project-langs",children:s.map((function(e){var t=e.trim();return Object(o.jsx)(N,{lang:t,url:n[t]},t)}))})]})})})}var y="https://ducktrshessami-portfolio-api.herokuapp.com",C={sendMessage:function(e){return fetch(y+"/message",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})},getLangs:function(){return fetch(y+"/langs").then((function(e){return e.json()}))},getProjects:function(){return fetch(y+"/projects").then((function(e){return e.json()}))},ping:function(){return fetch(y+"/ping")}},M=(c(33),{title:"Error",description:"Could not get project list",langs:[]}),I=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={shown:6,projects:[],langImages:{},loading:!0},e}return Object(O.a)(c,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("portfolioReturningUser")||(localStorage.setItem("portfolioReturningUser",!0),g.a.toast({html:'\n                    <h5 class="hide-on-small-only">Click on an item to be taken to its repository!</h5>\n                    <h5 class="hide-on-med-and-up">Tap on an item to be taken to its repository!</h5>\n                ',classes:"blue-grey darken-2 text-white",displayLength:5e3})),C.getLangs().then((function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{langImages:t}))})).catch(console.error),C.getProjects().then((function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{shown:e.state.shown,projects:t,loading:!1}))})).catch((function(t){console.error(t),e.setState({shown:1,projects:[M]})}))}},{key:"showMore",value:function(){this.setState({shown:this.state.shown+6,projects:this.state.projects})}},{key:"showAll",value:function(){this.setState({shown:this.state.projects.length,projects:this.state.projects})}},{key:"buttons",value:function(){var e=this;if(this.state.shown<this.state.projects.length)return Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)("button",{id:"more-button",className:"portfolio-button btn-large black-text",onClick:function(){return e.showMore()},children:"Show More"}),Object(o.jsx)("button",{id:"all-button",className:"portfolio-button btn-large black-text",onClick:function(){return e.showAll()},children:"Show All"})]})}},{key:"render",value:function(){var e=this;return Object(o.jsx)("section",{className:"row",children:Object(o.jsxs)("div",{className:"col s12 m8 offset-m2",children:[Object(o.jsxs)("ul",{id:"portfolio-list",children:[this.state.loading?Object(o.jsx)(v,{size:"big"}):void 0,this.state.projects.slice(0,this.state.shown).map((function(t){return Object(o.jsx)(w,Object(u.a)(Object(u.a)({},t),{},{langImages:e.state.langImages}),t.title)}))]}),this.buttons()]})})}}]),c}(s.Component),S=c(23);c(34);function A(e){return{html:"<h5 class='hide-on-small-only'>".concat(e,"</h5>"),classes:"blue-grey darken-2 text-white",displayLength:3e3}}function D(){var e=Object(s.useState)(!1),t=Object(S.a)(e,2),c=t[0],a=t[1];return Object(o.jsx)("section",{className:"row",children:Object(o.jsx)("div",{className:"col s12 m8 offset-m2 l6 offset-l3",children:Object(o.jsx)("div",{className:"card blue-grey darken-4 white-text",children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"hide-on-small-only",children:[Object(o.jsx)("h1",{className:"card-title",children:"Contact"}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("form",{id:"contact-form",children:[Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("input",{type:"text",id:"name",name:"name",className:"validate white-text"}),Object(o.jsx)("label",{htmlFor:"name",children:"Name"})]}),Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("input",{type:"email",name:"email",id:"email",className:"validate white-text"}),Object(o.jsx)("label",{htmlFor:"email",children:"E-Mail"})]}),Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("textarea",{name:"message",id:"message",className:"materialize-textarea validate white-text"}),Object(o.jsx)("label",{htmlFor:"message",children:"Message"})]}),Object(o.jsx)("div",{className:"row submit-wrapper",children:Object(o.jsxs)("div",{className:"row col s12 m6",children:[Object(o.jsx)("button",{type:"submit",form:"contact-form",id:"submit",className:"btn waves-effect waves-dark black-text submit-button col",onClick:function(e){var t=document.getElementById("contact-form"),c=function(e){var t=e.name,c=e.email,s=e.message;return{name:t.value,email:c.value,message:s.value}}(t);e.preventDefault(),function(e){var t=e.name,c=e.email,s=e.message;return t&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c)&&s}(c)&&(a(!0),C.sendMessage(c).then((function(e){a(!1),e.ok?(t.reset(),g.a.toast(A("Message posted!"))):g.a.toast(A("Could not post message"))})).catch(console.error))},children:"Submit"}),c?Object(o.jsx)(v,{size:"small",className:"col"}):void 0]})})]})]})})})})}c(35);var z=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={instance:null},e}return Object(O.a)(c,[{key:"componentDidMount",value:function(){this.setState({instance:g.a.Sidenav.init(document.getElementById("sidenav"),{edge:"right"})})}},{key:"clicked",value:function(){this.state.instance.close()}},{key:"render",value:function(){var e=this;return Object(o.jsx)("ul",{id:"sidenav",className:"sidenav",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{path:"/portfolio",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",onClick:function(){return e.clicked()},children:"About Me"})}),Object(o.jsx)("li",{children:Object(o.jsx)("span",{className:"disabled",children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/contact",onClick:function(){return e.clicked()},children:"Contact"})})]}),Object(o.jsxs)(l.a,{path:"/contact",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",onClick:function(){return e.clicked()},children:"About Me"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/portfolio",onClick:function(){return e.clicked()},children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)("span",{className:"disabled",children:"Contact"})})]}),Object(o.jsxs)(l.a,{path:"/",children:[Object(o.jsx)("li",{children:Object(o.jsx)("span",{className:"disabled",children:"About Me"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/portfolio",onClick:function(){return e.clicked()},children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/contact",onClick:function(){return e.clicked()},children:"Contact"})})]})]})})}}]),c}(s.Component);c(43);function L(e){var t=e.route;return Object(o.jsxs)("header",{children:[Object(o.jsxs)("nav",{className:"nav-wrapper",children:[Object(o.jsxs)(r.b,{to:"/",className:"left hide-on-small-only",children:[Object(o.jsx)("img",{src:"/logo192.png",alt:"Logo",className:"logo circle middle"}),Object(o.jsx)("span",Object(u.a)(Object(u.a)({},"/"===t?{className:"active"}:void 0),{},{children:"ducktrshessami"}))]}),Object(o.jsxs)("ul",{className:"left hide-on-small-only",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,Object(u.a)(Object(u.a)({},"/portfolio"===t?{className:"active"}:void 0),{},{to:"/portfolio",children:"Portfolio"}))}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,Object(u.a)(Object(u.a)({},"/contact"===t?{className:"active"}:void 0),{},{to:"/contact",children:"Contact"}))})]}),Object(o.jsx)("span",{className:"brand-logo center hide-on-med-and-up",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/portfolio",children:"Portfolio"}),Object(o.jsx)(l.a,{path:"/contact",children:"Contact"}),Object(o.jsx)(l.a,{path:"/",children:"About Me"})]})}),Object(o.jsx)("div",{role:"button","data-target":"sidenav",className:"sidenav-trigger right hide-on-med-and-up",children:Object(o.jsx)("i",{className:"material-icons",children:"menu"})})]}),Object(o.jsx)(z,{})]})}c(44);function F(){var e=new Date;return Object(o.jsx)("footer",{className:"center middle",children:Object(o.jsxs)("span",{children:["\xa9 Copyright ",e.getFullYear()," Josh Wee"]})})}c(45),c(46);var P=function(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/portfolio",children:Object(o.jsx)(L,{route:"/portfolio"})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(L,{route:"/contact"})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(L,{route:"/"})})]}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/portfolio",children:Object(o.jsx)(I,{})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(D,{})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(b,{})})]})}),Object(o.jsx)(F,{})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),C.ping()}},[[47,1,2]]]);
//# sourceMappingURL=main.b35774cf.chunk.js.map