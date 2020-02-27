(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(9),a=(n(0),n(155)),o={id:"developing",title:"Developing Gillian"},c={id:"development/developing",title:"Developing Gillian",description:"This page describes our workflow when developing Gillian, if you are interested in contributing, or if you want to play with the source code.",source:"@site/docs/development/develop.md",permalink:"/docs/development/developing",editUrl:"https://github.com/GillianPlatform/GillianPlatform.github.io/edit/source/docs/development/develop.md",sidebar:"someSidebar",previous:{title:"Setting up for development",permalink:"/docs/development/install"},next:{title:"Gillian-JS: Introduction",permalink:"/docs/js/intro"}},l=[{value:"Executing a command in the test environment",id:"executing-a-command-in-the-test-environment",children:[]},{value:"Rebuilding after modifications",id:"rebuilding-after-modifications",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page describes our workflow when developing Gillian, if you are interested in contributing, or if you want to play with the source code."),Object(a.b)("h3",{id:"executing-a-command-in-the-test-environment"},"Executing a command in the test environment"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"esy")," lets you execute a command in a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://esy.sh/docs/en/environment.html#test-environment"}),"test environment")," where every built binaries and installed files are correctly in your path. In particular, Gillian-JS, Gillian-C and Wisl export some environment variable that allow them to properly find their respective runtime files."),Object(a.b)("p",null,"To run any command under this environment, run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"esy x CMD\n")),Object(a.b)("p",null,"In particular, to access the different manuals, you can use:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"esy x gillian-js --help\nesy x gillian-c --help\n")),Object(a.b)("p",null,"To get more precise help on the verification mode of Gillian-JS in particular for example, use:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"esy x gillian-js verify --help\n")),Object(a.b)("h3",{id:"rebuilding-after-modifications"},"Rebuilding after modifications"),Object(a.b)("p",null,"As we use ",Object(a.b)("inlineCode",{parentName:"p"},"esy")," as our package manager / build system, after every modification, running the ",Object(a.b)("inlineCode",{parentName:"p"},"esy")," command without argument is enough to rebuild the project."),Object(a.b)("div",{className:"admonition admonition-info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Due to a bug in the current version of esy, the ",Object(a.b)("inlineCode",{parentName:"p"},"esy")," command has to called from the root of the workspace for the modifications to apply properly."))))}s.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.a.createElement(b,c({ref:t},p,{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);