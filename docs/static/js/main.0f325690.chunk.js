(this["webpackJsonpnoticias-api"]=this["webpackJsonpnoticias-api"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),o=t(3),i=t.n(o),s=t(6),u=t(1),m=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"nav-container light-blue darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},b=function(e){var a=e.noticiaProp,t=a.urlToImage,n=a.url,c=a.title,l=a.description,o=a.source,i=t?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t,alt:c}),r.a.createElement("span",{className:"card-title"},o.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},i,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,c),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Ver Noticia Completa"))))},p=function(e){var a=e.noticiasProp;return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(b,{key:e.url,noticiaProp:e})})))},v=function(e,a){var t=Object(n.useState)(e),c=Object(u.a)(t,2),l=c[0],o=c[1];return[l,function(){return r.a.createElement("select",{className:"browser-default",onChange:function(e){return o(e.target.value)},value:l},a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}]},d=t(2),f=t.n(d),E=function(e){var a=e.guardarCategoriaProp,t=v("general",[{value:"general",label:"General"},{value:"business",label:"Negocios"},{value:"entertainment",label:"Entretenimiento"},{value:"health",label:"Salud"},{value:"science",label:"Ciencia"},{value:"sports",label:"Deportes"},{value:"technology",label:"Tecnologia"}]),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"".concat(f.a.buscador," row")},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(c)}},r.a.createElement("h2",{className:"".concat(f.a.heading)},"Encuentra Noticias por Categoria"),r.a.createElement(l,null),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",value:"Buscar",className:"".concat(f.a["btn-block"]," btn-large amber darken-2")})))))};var g=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),b=o[0],v=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=ar&category=".concat(b,"&apiKey=358b0bffab1842399a3c74576d7aac70"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.articles);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{titulo:"Noticias API"}),r.a.createElement(E,{guardarCategoriaProp:v}),r.a.createElement(p,{noticiasProp:t}))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))},2:function(e,a,t){e.exports={heading:"Formulario_heading__sN5Ey",buscador:"Formulario_buscador__2ABO4","btn-block":"Formulario_btn-block__C2qiV"}},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0f325690.chunk.js.map