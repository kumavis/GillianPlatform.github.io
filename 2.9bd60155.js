(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},135:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},136:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"deepMerge",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"makeCancelable",{enumerable:!0,get:function(){return a.default}});var o=n(r(159)),u=n(r(163)),i=n(r(164)),a=n(r(165))},138:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DiffEditor",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ControlledEditor",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"monaco",{enumerable:!0,get:function(){return a.monaco}}),t.default=void 0;var o=n(r(149)),u=n(r(168)),i=n(r(170)),a=r(136),c=o.default;t.default=c},139:function(e,t,r){var n=r(151);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=u?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}},142:function(e,t,r){var n=r(152),o=r(153),u=r(154);e.exports=function(e,t){return n(e)||o(e,t)||u()}},143:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),u=n(r(155)),i=(0,o.memo)(u.default);t.default=i},144:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMount",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useUpdate",{enumerable:!0,get:function(){return u.default}});var o=n(r(166)),u=n(r(167))},145:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={"night-dark":{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#202124"}}};t.default=n},149:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),u=n(r(150)),i=(0,o.memo)(u.default);t.default=i},150:function(e,t,r){"use strict";var n=r(139),o=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(135)),i=o(r(142)),a=n(r(0)),c=o(r(8)),f=o(r(143)),d=r(136),l=r(144),s=o(r(145));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var v=function(e){var t=e.value,r=e.language,n=e.editorDidMount,o=e.theme,c=e.line,v=e.width,g=e.height,y=e.loading,b=e.options,h=e._isControlledMode,O=(0,a.useState)(!1),m=(0,i.default)(O,2),j=m[0],P=m[1],w=(0,a.useState)(!0),M=(0,i.default)(w,2),_=M[0],S=M[1],E=(0,a.useRef)(),D=(0,a.useRef)(),k=(0,a.useRef)();(0,l.useMount)((function(e){var t=d.monaco.init();return t.then((function(e){return(D.current=e)&&S(!1)})).catch((function(e){return console.error("An error occurred during initialization of Monaco:",e)})),function(e){return E.current?x():t.cancel()}})),(0,l.useUpdate)((function(e){if(b.readOnly)E.current.setValue(t);else{if(E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:t}]),h){var r=E.current.getModel();r.forceTokenization(r.getLineCount())}E.current.pushUndoStop()}}),[t],j),(0,l.useUpdate)((function(e){E.current.setValue(t),D.current.editor.setModelLanguage(E.current.getModel(),r)}),[r],j),(0,l.useUpdate)((function(e){E.current.setScrollPosition({scrollTop:c})}),[c],j),(0,l.useUpdate)((function(e){D.current.editor.setTheme(o)}),[o],j),(0,l.useUpdate)((function(e){E.current.updateOptions(b)}),[b],j);var T=(0,a.useCallback)((function(e){E.current=D.current.editor.create(k.current,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({value:t,language:r,automaticLayout:!0},b)),n(E.current.getValue.bind(E.current),E.current),D.current.editor.defineTheme("dark",s.default["night-dark"]),D.current.editor.setTheme(o),P(!0)}),[n,r,b,o,t]);(0,a.useEffect)((function(e){!_&&!j&&T()}),[_,j,T]);var x=function(e){return E.current.dispose()};return a.default.createElement(f.default,{width:v,height:g,isEditorReady:j,loading:y,_ref:k})};v.propTypes={value:c.default.string,language:c.default.string,editorDidMount:c.default.func,theme:c.default.string,line:c.default.number,width:c.default.oneOfType([c.default.number,c.default.string]),height:c.default.oneOfType([c.default.number,c.default.string]),loading:c.default.oneOfType([c.default.element,c.default.string]),options:c.default.object,_isControlledMode:c.default.bool},v.defaultProps={editorDidMount:d.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{},_isControlledMode:!1};var g=v;t.default=g},151:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},152:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},153:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}}},154:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},155:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(135)),u=n(r(0)),i=n(r(8)),a=n(r(156)),c=n(r(158));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.width,r=e.height,n=e.isEditorReady,o=e.loading,i=e._ref;return u.default.createElement("section",{style:d({},c.default.wrapper,{width:t,height:r})},!n&&u.default.createElement(a.default,{content:o}),u.default.createElement("div",{ref:i,style:d({},c.default.fullWidth,{},!n&&c.default.hide)}))};l.propTypes={width:i.default.oneOfType([i.default.number,i.default.string]).isRequired,height:i.default.oneOfType([i.default.number,i.default.string]).isRequired,loading:i.default.oneOfType([i.default.element,i.default.string]).isRequired,isEditorReady:i.default.bool.isRequired};var s=l;t.default=s},156:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(157)).default;t.default=o},157:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),u={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var i=function(e){var t=e.content;return o.default.createElement("div",{style:u},t)};t.default=i},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};t.default=n},159:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(160)),u=n(r(161)),i=n(r(135)),a=n(r(162)),c=r(136),f=new(function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.default)(this,e),(0,i.default)(this,"handleMainScriptLoad",(function(e){document.removeEventListener("monaco_init",t.handleMainScriptLoad),t.resolve(window.monaco)})),(0,i.default)(this,"isInitialized",!1),(0,i.default)(this,"wrapperPromise",new Promise((function(e,r){t.resolve=e,t.reject=r}))),this.__config=r}return(0,u.default)(e,[{key:"config",value:function(e){return e&&(this.__config=(0,c.deepMerge)(this.__config,e)),this}},{key:"injectScripts",value:function(e){document.body.appendChild(e)}},{key:"createScript",value:function(e){var t=document.createElement("script");return e&&(t.src=e),t}},{key:"createMonacoLoaderScript",value:function(e){var t=this,r=this.createScript(this.__config.urls.monacoLoader);return r.onload=function(r){return t.injectScripts(e)},r.onerror=this.reject,r}},{key:"createMainScript",value:function(){var e=this.createScript();return e.innerHTML="\n      require.config({ paths: { 'vs': '".concat(this.__config.urls.monacoBase,"' } });\n      require(['vs/editor/editor.main'], function() {\n        document.dispatchEvent(new Event('monaco_init'));\n      });\n    "),e.onerror=this.reject,e}},{key:"init",value:function(){if(!this.isInitialized){if(window.monaco&&window.monaco.editor)return new Promise((function(e,t){return e(window.monaco)}));document.addEventListener("monaco_init",this.handleMainScriptLoad);var e=this.createMainScript(),t=this.createMonacoLoaderScript(e);this.injectScripts(t)}return this.isInitialized=!0,(0,c.makeCancelable)(this.wrapperPromise)}}]),e}())(a.default);t.default=f},160:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},161:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={urls:{monacoLoader:"https://cdn.jsdelivr.net/npm/monaco-editor@0.19.3/min/vs/loader.js",monacoBase:"https://cdn.jsdelivr.net/npm/monaco-editor@0.19.3/min/vs"}};t.default=n},163:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){};t.default=n},164:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(135));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var i=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&Object.assign(r[n],e(t[n],r[n]))})),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{},r)};t.default=i},165:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n("operation is manually canceled"):r(e)})),e.catch((function(e){return n(e)}))}));return r.cancel=function(e){return t=!0},r};t.default=n},166:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),o=function(e){return(0,n.useEffect)(e,[])};t.default=o},167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0),o=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=(0,n.useRef)(!0);(0,n.useEffect)(o.current||!r?function(e){o.current=!1}:e,t)};t.default=o},168:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),u=n(r(169)),i=(0,o.memo)(u.default);t.default=i},169:function(e,t,r){"use strict";var n=r(139),o=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(135)),i=o(r(142)),a=n(r(0)),c=o(r(8)),f=o(r(143)),d=r(136),l=r(144),s=o(r(145));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var v=function(e){var t=e.original,r=e.modified,n=e.language,o=e.originalLanguage,c=e.modifiedLanguage,v=e.editorDidMount,g=e.theme,y=e.line,b=e.width,h=e.height,O=e.loading,m=e.options,j=(0,a.useState)(!1),P=(0,i.default)(j,2),w=P[0],M=P[1],_=(0,a.useState)(!0),S=(0,i.default)(_,2),E=S[0],D=S[1],k=(0,a.useRef)(),T=(0,a.useRef)(),x=(0,a.useRef)();(0,l.useMount)((function(e){var t=d.monaco.init();return t.then((function(e){return(T.current=e)&&D(!1)})).catch((function(e){return console.error("An error occurred during initialization of Monaco:",e)})),function(e){return k.current?R():t.cancel()}})),(0,l.useUpdate)((function(e){k.current.getModel().modified.setValue(r)}),[r],w),(0,l.useUpdate)((function(e){k.current.getModel().original.setValue(t)}),[t],w),(0,l.useUpdate)((function(e){var t=k.current.getModel(),r=t.original,u=t.modified;T.current.editor.setModelLanguage(r,o||n),T.current.editor.setModelLanguage(u,c||n)}),[n,o,c],w),(0,l.useUpdate)((function(e){k.current.setScrollPosition({scrollTop:y})}),[y],w),(0,l.useUpdate)((function(e){T.current.editor.setTheme(g)}),[g],w),(0,l.useUpdate)((function(e){k.current.updateOptions(m)}),[m],w);var L=(0,a.useCallback)((function(e){var u=T.current.editor.createModel(t,o||n),i=T.current.editor.createModel(r,c||n);k.current.setModel({original:u,modified:i})}),[n,r,c,t,o]),C=(0,a.useCallback)((function(e){k.current=T.current.editor.createDiffEditor(x.current,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({automaticLayout:!0},m)),L();var t=k.current.getModel(),r=t.original,n=t.modified;v(n.getValue.bind(n),r.getValue.bind(r),k.current),T.current.editor.defineTheme("dark",s.default["night-dark"]),T.current.editor.setTheme(g),M(!0)}),[v,m,g,L]);(0,a.useEffect)((function(e){!E&&!w&&C()}),[E,w,C]);var R=function(e){return k.current.dispose()};return a.default.createElement(f.default,{width:b,height:h,isEditorReady:w,loading:O,_ref:x})};v.propTypes={original:c.default.string,modified:c.default.string,language:c.default.string,originalLanguage:c.default.string,modifiedLanguage:c.default.string,editorDidMount:c.default.func,theme:c.default.string,line:c.default.number,width:c.default.oneOfType([c.default.number,c.default.string]),height:c.default.oneOfType([c.default.number,c.default.string]),loading:c.default.oneOfType([c.default.element,c.default.string]),options:c.default.object},v.defaultProps={editorDidMount:d.noop,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{}};var g=v;t.default=g},170:function(e,t,r){"use strict";var n=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),u=n(r(171)),i=(0,o.memo)(u.default);t.default=i},171:function(e,t,r){"use strict";var n=r(139),o=r(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(172)),i=o(r(173)),a=n(r(0)),c=o(r(8)),f=o(r(138)),d=r(136),l=function(e){var t=e.value,r=e.onChange,n=e.editorDidMount,o=(0,i.default)(e,["value","onChange","editorDidMount"]),c=(0,a.useRef)(t);return a.default.createElement(f.default,(0,u.default)({value:t,editorDidMount:function(e,t){t.onDidChangeModelContent((function(e){var n=t.getValue();if(n!==c.current&&!e.isUndoing&&!e.isRedoing){c.current=n;var o=r(e,n);"string"==typeof o&&n!==o&&t.setValue(o)}})),n(e,t)},_isControlledMode:!0},o))};l.propTypes={value:c.default.string,editorDidMount:c.default.func,onChange:c.default.func},l.defaultProps={editorDidMount:d.noop,onChange:d.noop};var s=l;t.default=s},172:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},173:function(e,t,r){var n=r(174);e.exports=function(e,t){if(null==e)return{};var r,o,u=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}},174:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}}}]);