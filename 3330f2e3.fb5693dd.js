(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{120:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(171),o=n.n(c),u=n(121),l=n.n(u),i=function(){return a.a.createElement("div",null,a.a.createElement(o.a,{type:"spin",color:"black"})," Loading...")},s=function(e){var t=e.loading,n=e.error,c=e.ret;return t?a.a.createElement(i,null):n?a.a.createElement("p",null,"An unkown error occured"):a.a.createElement(r.Fragment,null,c.error?a.a.createElement("div",{className:l.a.error},"ANALYSIS WAS NOT SUCCESSFUL"):a.a.createElement("div",{className:l.a.success},"ANALYSIS WAS SUCCESSFUL"),c.stdout&&a.a.createElement("div",null,"STDOUT: ",c.stdout),c.stderr&&a.a.createElement("div",null,"STDERR: ",c.stderr))};t.default=function(e){var t=e.code,n=Object(r.useState)(!0),c=n[0],o=n[1],u=Object(r.useState)(!1),l=u[0],i=u[1],d=Object(r.useState)(null),f=d[0],S=d[1];return"undefined"!=typeof window&&window.fetch&&void 0!==typeof Headers?(Object(r.useEffect)((function(){window.fetchCosette(t,(function(e){return o(e)}),(function(e){return i(e)}),(function(e){return S(e)}))}),[t]),a.a.createElement(s,{loading:c,ret:f,error:l})):a.a.createElement("p",null,"Your web browser is not compatible with this feature.")}}}]);