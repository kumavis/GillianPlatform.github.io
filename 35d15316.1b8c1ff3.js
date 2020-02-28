(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var i=n(1),a=n(9),r=(n(0),n(157)),l={id:"structure",title:"Gillian-C: Folder Structure"},o={id:"c/structure",title:"Gillian-C: Folder Structure",description:"\x3c!-- prettier-ignore-start --\x3e",source:"@site/docs/c/structure.md",permalink:"/docs/c/structure",editUrl:"https://github.com/GillianPlatform/GillianPlatform.github.io/edit/source/docs/c/structure.md",sidebar:"someSidebar",previous:{title:"Gillian-C: Introduction",permalink:"/docs/c/intro"},next:{title:"Gillian-C: Symbolic Testing",permalink:"/docs/c/cstest"}},c=[],b={rightToc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Folders marked with the (\u274cPLDI20) annotation are out of scope of the PLDI 2020 Gillian Paper."))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Gillian-C")," can be found in the ",Object(r.b)("inlineCode",{parentName:"p"},"Gillian-C")," folder of the repository. Its implementation implementation consists of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gillian-C"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bin"),": Contains the source of the ",Object(r.b)("inlineCode",{parentName:"li"},"gillian-c")," executable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"environment"),": Execution environment, not part of the repository, created using ",Object(r.b)("inlineCode",{parentName:"li"},"esy init:env"),". It contains useful scripts for testing Gillian-C, and examples are copied in it so that they can be safely modified."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"examples"),": Various examples",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"concrete"),": Small data-structure examples for concrete execution"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"symbolic"),": Small data-structure examples for symbolic testing"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"klee"),": Same small data-structure examples as in ",Object(r.b)("inlineCode",{parentName:"li"},"symbolic")," but written for usage with Klee."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verification"),": Small data-structure examples for verification mode (\u274cPLDI20)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"act"),": Small data-structure examples for Automatic Compositional Testing mode (\u274cPLDI20)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lib"),": The core of Gillian-C",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gilgen.ml/mli"),": Compiler for C#m to GIL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gil_logic_gen.ml"),", ",Object(r.b)("inlineCode",{parentName:"li"},"annot_lexer.mll"),", ",Object(r.b)("inlineCode",{parentName:"li"},"annot_parser.mly"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cLogic.ml"),": Utils for handling a small annotation language for C (\u274cPLDI20)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valueTranslation.ml/mli"),": Serialisation and deserialisation of CompCert values into GIL values"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"semantics.ml/mli"),": Symbolic Memory model and Concrete memory model"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cRunner.ml"),", ",Object(r.b)("inlineCode",{parentName:"li"},"sRunner.ml"),": Configuration for the symbolic and concrete bulk testers (",Object(r.b)("inlineCode",{parentName:"li"},"gillian-c bulk-wpst")," and ",Object(r.b)("inlineCode",{parentName:"li"},"gillian-c bulk-exec"),")"),Object(r.b)("li",{parentName:"ul"},"Other files: Utils such as name generators or configuration flags."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"runtime"),": Implementation of the internals and part of the C standard lib in GIL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scripts"),": Various scripts for setting up the environment and executing analyses")))))}m.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,d=p["".concat(l,".").concat(u)]||p[u]||s[u]||r;return n?a.a.createElement(d,o({ref:t},b,{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);