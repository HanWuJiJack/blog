/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{277:function(e,t,n){"use strict";var r=n(14),o=n(19),l=n(85),c=n(177),f=n(12),m=r.RegExp,d=m.prototype;o&&f((function(){var e=!0;try{m(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},l={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var c in e&&(l.hasIndices="d"),l)o(c,l[c]);return Object.getOwnPropertyDescriptor(d,"flags").get.call(t)!==r||n!==r}))&&l(d,"flags",{configurable:!0,get:c})},297:function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);e.exports=function(t,n){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="object"===("undefined"==typeof document?"undefined":r(document))&&"string"==typeof document.cookie,s="object"===(void 0===t?"undefined":r(t))&&"object"===(void 0===n?"undefined":r(n))&&void 0!==e,u=!a&&!s||a&&s,l=function(e){if(s){var r=t.headers.cookie||"";return e&&(r=(r=n.getHeaders())["set-cookie"]?r["set-cookie"].map((function(e){return e.split(";")[0]})).join(";"):""),r}if(a)return document.cookie||""},c=function(){var e=n.getHeader("Set-Cookie");return(e="string"==typeof e?[e]:e)||[]},p=function(e){return n.setHeader("Set-Cookie",e)},f=function(e,t){if(!t)return e;try{return JSON.parse(e)}catch(t){return e}},m={parseJSON:i,set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};if(!u)if(t="object"===(void 0===t?"undefined":r(t))?JSON.stringify(t):t,s){var i=c();i.push(o.serialize(e,t,n)),p(i)}else document.cookie=o.serialize(e,t,n)},setAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];u||Array.isArray(e)&&e.forEach((function(e){var t=e.name,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,i=e.opts,a=void 0===i?{path:"/"}:i;m.set(n,o,a)}))},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromRes:!1,parseJSON:m.parseJSON};if(u)return"";var n=o.parse(l(t.fromRes))[e];return f(n,t.parseJSON)},getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromRes:!1,parseJSON:m.parseJSON};if(u)return{};var t=o.parse(l(e.fromRes));for(var n in t)t[n]=f(t[n],e.parseJSON);return t},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"};u||(t.expires=new Date(0),m.set(e,"",t))},removeAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:"/"};if(!u){var t=o.parse(l());for(var n in t)m.remove(n,e)}},nodeCookie:o};return m}},function(e,t,n){"use strict";function i(e,t){try{return t(e)}catch(t){return e}}t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},o=e.split(u),s=r.decode||a,l=0;l<o.length;l++){var c=o[l],p=c.indexOf("=");if(!(p<0)){var f=c.substr(0,p).trim(),m=c.substr(++p,c.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),null==n[f]&&(n[f]=i(m,s))}}return n},t.serialize=function(e,t,n){var o=n||{},l=o.encode||s;if("function"!=typeof l)throw new TypeError("option encode is invalid");if(!r.test(e))throw new TypeError("argument name is invalid");var i=l(t);if(i&&!r.test(i))throw new TypeError("argument val is invalid");var a=e+"="+i;if(null!=o.maxAge){var u=o.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(u)}if(o.domain){if(!r.test(o.domain))throw new TypeError("option domain is invalid");a+="; Domain="+o.domain}if(o.path){if(!r.test(o.path))throw new TypeError("option path is invalid");a+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(a+="; HttpOnly"),o.secure&&(a+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a};var a=decodeURIComponent,s=encodeURIComponent,u=/; */,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/}])},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(100),o=n(21);n(46),n(70),n(71),n(422),n(69),n(423),n(424),n(425),n(15),n(51),n(31),n(32);function l(e){if(null===e||"object"!==Object(o.a)(e))return!1;var t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&(!(Symbol.iterator in e)&&(!(Symbol.toStringTag in e)||"[object Module]"===Object.prototype.toString.call(e)))}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",o=arguments.length>3?arguments[3]:void 0;if(!l(t))return c(e,{},n,o);var object=Object.assign({},t);for(var f in e)if("__proto__"!==f&&"constructor"!==f){var m=e[f];null!=m&&(o&&o(object,f,m,n)||(Array.isArray(m)&&Array.isArray(object[f])?object[f]=[].concat(Object(r.a)(m),Object(r.a)(object[f])):l(m)&&l(object[f])?object[f]=c(m,object[f],(n?"".concat(n,"."):"")+f.toString(),o):object[f]=m))}return object}function f(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.reduce((function(p,t){return c(p,t,"",e)}),{})}}var m=f();f((function(object,e,t){if(void 0!==object[e]&&"function"==typeof t)return object[e]=t(object[e]),!0})),f((function(object,e,t){if(Array.isArray(object[e])&&"function"==typeof t)return object[e]=t(object[e]),!0}))},736:function(e,t,n){"use strict";var r=n(9),o=n(991),l=n(130);r({target:"Array",proto:!0},{fill:o}),l("fill")},983:function(e,t,n){"use strict";n(984)},984:function(e,t,n){"use strict";var r=n(9),o=n(20),l=n(13),c=n(42),f=n(17),m=n(66),d=n(180),h=n(22),y=n(80),v=n(178),T=n(248),N=n(16),S=n(29),A=N("replace"),w=TypeError,E=l("".indexOf),x=l("".replace),O=l("".slice),k=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,l,N,_,C,L,R,D,M=c(this),I=0,U=0,F="";if(!m(e)){if((n=d(e))&&(r=h(c(v(e))),!~E(r,"g")))throw new w("`.replaceAll` does not allow non-global regexes");if(l=y(e,A))return o(l,e,M,t);if(S&&n)return x(h(M),e,t)}for(N=h(M),_=h(e),(C=f(t))||(t=h(t)),L=_.length,R=k(1,L),I=E(N,_);-1!==I;)D=C?h(t(_,I,N)):T(_,N,I,[],void 0,t),F+=O(N,U,I)+D,U=I+L,I=I+R>N.length?-1:E(N,_,I+R);return U<N.length&&(F+=O(N,U)),F}})},987:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,p){return t=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},t(e,p)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,l){return r=n()?Reflect.construct:function(e,n,r){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function o(e){return l(e)||c(e)||f(e)||d()}function l(e){if(Array.isArray(e))return m(e)}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h=Object.hasOwnProperty,y=Object.setPrototypeOf,v=Object.isFrozen,T=Object.getPrototypeOf,N=Object.getOwnPropertyDescriptor,S=Object.freeze,A=Object.seal,w=Object.create,E="undefined"!=typeof Reflect&&Reflect,x=E.apply,O=E.construct;x||(x=function(e,t,n){return e.apply(t,n)}),S||(S=function(e){return e}),A||(A=function(e){return e}),O||(O=function(e,t){return r(e,o(t))});var k=H(Array.prototype.forEach),_=H(Array.prototype.pop),C=H(Array.prototype.push),L=H(String.prototype.toLowerCase),R=H(String.prototype.toString),D=H(String.prototype.match),M=H(String.prototype.replace),I=H(String.prototype.indexOf),U=H(String.prototype.trim),F=H(RegExp.prototype.test),j=z(TypeError);function H(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return x(e,t,r)}}function z(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(e,n)}}function P(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:L,y&&y(e,null);for(var o=t.length;o--;){var element=t[o];if("string"==typeof element){var l=n(element);l!==element&&(v(t)||(t[o]=l),element=l)}e[element]=!0}return e}function B(object){var e,t=w(null);for(e in object)!0===x(h,object,[e])&&(t[e]=object[e]);return t}function G(object,e){for(;null!==object;){var desc=N(object,e);if(desc){if(desc.get)return H(desc.get);if("function"==typeof desc.value)return H(desc.value)}object=T(object)}function t(element){return console.warn("fallback value for",element),null}return t}var W=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),J=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Y=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$=S(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),K=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),V=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=S(["#text"]),html=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),svg=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),X=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Z=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Q=A(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ee=A(/<%[\w\W]*|[\w\W]*%>/gm),te=A(/\${[\w\W]*}/gm),ne=A(/^data-[\-\w.\u00B7-\uFFFF]/),re=A(/^aria-[\-\w]+$/),oe=A(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ie=A(/^(?:\w+script|data):/i),ae=A(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),le=A(/^html$/i),ce=function(){return"undefined"==typeof window?null:window},ue=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var l="dompurify"+(r?"#"+r:"");try{return t.createPolicy(l,{createHTML:function(html){return html},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function se(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),n=function(e){return se(e)};if(n.version="2.4.7",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,l=t.document,c=t.DocumentFragment,f=t.HTMLTemplateElement,m=t.Node,d=t.Element,h=t.NodeFilter,y=t.NamedNodeMap,v=void 0===y?t.NamedNodeMap||t.MozNamedAttrMap:y,T=t.HTMLFormElement,N=t.DOMParser,A=t.trustedTypes,w=d.prototype,E=G(w,"cloneNode"),x=G(w,"nextSibling"),O=G(w,"childNodes"),H=G(w,"parentNode");if("function"==typeof f){var template=l.createElement("template");template.content&&template.content.ownerDocument&&(l=template.content.ownerDocument)}var z=ue(A,r),fe=z?z.createHTML(""):"",pe=l,me=pe.implementation,de=pe.createNodeIterator,he=pe.createDocumentFragment,ge=pe.getElementsByTagName,ye=r.importNode,ve={};try{ve=B(l).documentMode?l.documentMode:{}}catch(e){}var be={};n.isSupported="function"==typeof H&&me&&void 0!==me.createHTMLDocument&&9!==ve;var Te,Ne,Se=Q,Ae=ee,we=te,Ee=ne,xe=re,Oe=ie,ke=ae,_e=oe,Ce=null,Le=P({},[].concat(o(W),o(J),o(Y),o(K),o(text))),Re=null,De=P({},[].concat(o(html),o(svg),o(X),o(Z))),Me=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Ue=null,Fe=!0,je=!0,He=!1,ze=!0,Pe=!1,Be=!1,Ge=!1,We=!1,Je=!1,qe=!1,Ye=!1,$e=!0,Ke=!1,Ve="user-content-",Xe=!0,Ze=!1,Qe={},et=null,tt=P({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,ot=P({},["audio","video","img","source","image","track"]),it=null,at=P({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),lt="http://www.w3.org/1998/Math/MathML",ct="http://www.w3.org/2000/svg",ut="http://www.w3.org/1999/xhtml",st=ut,ft=!1,pt=null,mt=P({},[lt,ct,ut],R),ht=["application/xhtml+xml","text/html"],gt="text/html",yt=null,vt=l.createElement("form"),bt=function(e){return e instanceof RegExp||e instanceof Function},Tt=function(t){yt&&yt===t||(t&&"object"===e(t)||(t={}),t=B(t),Te=Te=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?gt:t.PARSER_MEDIA_TYPE,Ne="application/xhtml+xml"===Te?R:L,Ce="ALLOWED_TAGS"in t?P({},t.ALLOWED_TAGS,Ne):Le,Re="ALLOWED_ATTR"in t?P({},t.ALLOWED_ATTR,Ne):De,pt="ALLOWED_NAMESPACES"in t?P({},t.ALLOWED_NAMESPACES,R):mt,it="ADD_URI_SAFE_ATTR"in t?P(B(at),t.ADD_URI_SAFE_ATTR,Ne):at,nt="ADD_DATA_URI_TAGS"in t?P(B(ot),t.ADD_DATA_URI_TAGS,Ne):ot,et="FORBID_CONTENTS"in t?P({},t.FORBID_CONTENTS,Ne):tt,Ie="FORBID_TAGS"in t?P({},t.FORBID_TAGS,Ne):{},Ue="FORBID_ATTR"in t?P({},t.FORBID_ATTR,Ne):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Fe=!1!==t.ALLOW_ARIA_ATTR,je=!1!==t.ALLOW_DATA_ATTR,He=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ze=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Be=t.WHOLE_DOCUMENT||!1,Je=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,Ye=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,$e=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Xe=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,_e=t.ALLOWED_URI_REGEXP||_e,st=t.NAMESPACE||ut,Me=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&bt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Me.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&bt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Me.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Me.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(je=!1),qe&&(Je=!0),Qe&&(Ce=P({},o(text)),Re=[],!0===Qe.html&&(P(Ce,W),P(Re,html)),!0===Qe.svg&&(P(Ce,J),P(Re,svg),P(Re,Z)),!0===Qe.svgFilters&&(P(Ce,Y),P(Re,svg),P(Re,Z)),!0===Qe.mathMl&&(P(Ce,K),P(Re,X),P(Re,Z))),t.ADD_TAGS&&(Ce===Le&&(Ce=B(Ce)),P(Ce,t.ADD_TAGS,Ne)),t.ADD_ATTR&&(Re===De&&(Re=B(Re)),P(Re,t.ADD_ATTR,Ne)),t.ADD_URI_SAFE_ATTR&&P(it,t.ADD_URI_SAFE_ATTR,Ne),t.FORBID_CONTENTS&&(et===tt&&(et=B(et)),P(et,t.FORBID_CONTENTS,Ne)),Xe&&(Ce["#text"]=!0),Be&&P(Ce,["html","head","body"]),Ce.table&&(P(Ce,["tbody"]),delete Ie.tbody),S&&S(t),yt=t)},Nt=P({},["mi","mo","mn","ms","mtext"]),St=P({},["foreignobject","desc","title","annotation-xml"]),At=P({},["title","style","font","a","script"]),wt=P({},J);P(wt,Y),P(wt,$);var Et=P({},K);P(Et,V);var xt=function(element){var e=H(element);e&&e.tagName||(e={namespaceURI:st,tagName:"template"});var t=L(element.tagName),n=L(e.tagName);return!!pt[element.namespaceURI]&&(element.namespaceURI===ct?e.namespaceURI===ut?"svg"===t:e.namespaceURI===lt?"svg"===t&&("annotation-xml"===n||Nt[n]):Boolean(wt[t]):element.namespaceURI===lt?e.namespaceURI===ut?"math"===t:e.namespaceURI===ct?"math"===t&&St[n]:Boolean(Et[t]):element.namespaceURI===ut?!(e.namespaceURI===ct&&!St[n])&&!(e.namespaceURI===lt&&!Nt[n])&&!Et[t]&&(At[t]||!wt[t]):!("application/xhtml+xml"!==Te||!pt[element.namespaceURI]))},Ot=function(e){C(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=fe}catch(t){e.remove()}}},kt=function(e,t){try{C(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Re[e])if(Je||qe)try{Ot(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},_t=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=D(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Te&&st===ut&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=z?z.createHTML(e):e;if(st===ut)try{t=(new N).parseFromString(o,Te)}catch(e){}if(!t||!t.documentElement){t=me.createDocument(st,"template",null);try{t.documentElement.innerHTML=ft?fe:o}catch(e){}}var body=t.body||t.documentElement;return e&&n&&body.insertBefore(l.createTextNode(n),body.childNodes[0]||null),st===ut?ge.call(t,Be?"html":"body")[0]:Be?t.documentElement:body},Ct=function(e){return de.call(e.ownerDocument||e,e,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null,!1)},Lt=function(e){return e instanceof T&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof v)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Rt=function(object){return"object"===e(m)?object instanceof m:object&&"object"===e(object)&&"number"==typeof object.nodeType&&"string"==typeof object.nodeName},Dt=function(e,t,data){be[e]&&k(be[e],(function(e){e.call(n,t,data,yt)}))},Mt=function(e){var content;if(Dt("beforeSanitizeElements",e,null),Lt(e))return Ot(e),!0;if(F(/[\u0080-\uFFFF]/,e.nodeName))return Ot(e),!0;var t=Ne(e.nodeName);if(Dt("uponSanitizeElement",e,{tagName:t,allowedTags:Ce}),e.hasChildNodes()&&!Rt(e.firstElementChild)&&(!Rt(e.content)||!Rt(e.content.firstElementChild))&&F(/<[/\w]/g,e.innerHTML)&&F(/<[/\w]/g,e.textContent))return Ot(e),!0;if("select"===t&&F(/<template/i,e.innerHTML))return Ot(e),!0;if(!Ce[t]||Ie[t]){if(!Ie[t]&&Ut(t)){if(Me.tagNameCheck instanceof RegExp&&F(Me.tagNameCheck,t))return!1;if(Me.tagNameCheck instanceof Function&&Me.tagNameCheck(t))return!1}if(Xe&&!et[t]){var r=H(e)||e.parentNode,o=O(e)||e.childNodes;if(o&&r)for(var i=o.length-1;i>=0;--i)r.insertBefore(E(o[i],!0),x(e))}return Ot(e),!0}return e instanceof d&&!xt(e)?(Ot(e),!0):"noscript"!==t&&"noembed"!==t&&"noframes"!==t||!F(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(content=e.textContent,content=M(content,Se," "),content=M(content,Ae," "),content=M(content,we," "),e.textContent!==content&&(C(n.removed,{element:e.cloneNode()}),e.textContent=content)),Dt("afterSanitizeElements",e,null),!1):(Ot(e),!0)},It=function(e,t,n){if($e&&("id"===t||"name"===t)&&(n in l||n in vt))return!1;if(je&&!Ue[t]&&F(Ee,t));else if(Fe&&F(xe,t));else if(!Re[t]||Ue[t]){if(!(Ut(e)&&(Me.tagNameCheck instanceof RegExp&&F(Me.tagNameCheck,e)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(e))&&(Me.attributeNameCheck instanceof RegExp&&F(Me.attributeNameCheck,t)||Me.attributeNameCheck instanceof Function&&Me.attributeNameCheck(t))||"is"===t&&Me.allowCustomizedBuiltInElements&&(Me.tagNameCheck instanceof RegExp&&F(Me.tagNameCheck,n)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(n))))return!1}else if(it[t]);else if(F(_e,M(n,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==I(n,"data:")||!nt[e])if(He&&!F(Oe,M(n,ke,"")));else if(n)return!1;return!0},Ut=function(e){return e.indexOf("-")>0},Ft=function(t){var r,o,l,c;Dt("beforeSanitizeAttributes",t,null);var f=t.attributes;if(f){var m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Re};for(c=f.length;c--;){var d=r=f[c],h=d.name,y=d.namespaceURI;if(o="value"===h?r.value:U(r.value),l=Ne(h),m.attrName=l,m.attrValue=o,m.keepAttr=!0,m.forceKeepAttr=void 0,Dt("uponSanitizeAttribute",t,m),o=m.attrValue,!m.forceKeepAttr&&(kt(h,t),m.keepAttr))if(ze||!F(/\/>/i,o)){Pe&&(o=M(o,Se," "),o=M(o,Ae," "),o=M(o,we," "));var v=Ne(t.nodeName);if(It(v,l,o)){if(!Ke||"id"!==l&&"name"!==l||(kt(h,t),o=Ve+o),z&&"object"===e(A)&&"function"==typeof A.getAttributeType)if(y);else switch(A.getAttributeType(v,l)){case"TrustedHTML":o=z.createHTML(o);break;case"TrustedScriptURL":o=z.createScriptURL(o)}try{y?t.setAttributeNS(y,h,o):t.setAttribute(h,o),_(n.removed)}catch(e){}}}else kt(h,t)}Dt("afterSanitizeAttributes",t,null)}},jt=function e(t){var n,r=Ct(t);for(Dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Dt("uponSanitizeShadowNode",n,null),Mt(n)||(n.content instanceof c&&e(n.content),Ft(n));Dt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var body,l,f,d,h,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ft=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!Rt(o)){if("function"!=typeof o.toString)throw j("toString is not a function");if("string"!=typeof(o=o.toString()))throw j("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(Rt(o))return t.toStaticHTML(o.outerHTML)}return o}if(Ge||Tt(y),n.removed=[],"string"==typeof o&&(Ze=!1),Ze){if(o.nodeName){var v=Ne(o.nodeName);if(!Ce[v]||Ie[v])throw j("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof m)1===(l=(body=_t("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?body=l:body.appendChild(l);else{if(!Je&&!Pe&&!Be&&-1===o.indexOf("<"))return z&&Ye?z.createHTML(o):o;if(!(body=_t(o)))return Je?null:Ye?fe:""}body&&We&&Ot(body.firstChild);for(var T=Ct(Ze?o:body);f=T.nextNode();)3===f.nodeType&&f===d||Mt(f)||(f.content instanceof c&&jt(f.content),Ft(f),d=f);if(d=null,Ze)return o;if(Je){if(qe)for(h=he.call(body.ownerDocument);body.firstChild;)h.appendChild(body.firstChild);else h=body;return(Re.shadowroot||Re.shadowrootmod)&&(h=ye.call(r,h,!0)),h}var N=Be?body.outerHTML:body.innerHTML;return Be&&Ce["!doctype"]&&body.ownerDocument&&body.ownerDocument.doctype&&body.ownerDocument.doctype.name&&F(le,body.ownerDocument.doctype.name)&&(N="<!DOCTYPE "+body.ownerDocument.doctype.name+">\n"+N),Pe&&(N=M(N,Se," "),N=M(N,Ae," "),N=M(N,we," ")),z&&Ye?z.createHTML(N):N},n.setConfig=function(e){Tt(e),Ge=!0},n.clearConfig=function(){yt=null,Ge=!1},n.isValidAttribute=function(e,t,n){yt||Tt({});var r=Ne(e),o=Ne(t);return It(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(be[e]=be[e]||[],C(be[e],t))},n.removeHook=function(e){if(be[e])return _(be[e])},n.removeHooks=function(e){be[e]&&(be[e]=[])},n.removeAllHooks=function(){be={}},n}return se()}()}}]);