(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{782:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{const r=e[n],o=typeof r;"object"!==o&&"function"!==o||Object.isFrozen(r)||t(r)})),e}class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const l=e=>!!e.scope;class d{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(text){this.buffer+=o(text)}openNode(e){if(!l(e))return;const n=((e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,i)=>`${e}${"_".repeat(i+1)}`))].join(" ")}return`${n}${e}`})(e.scope,{prefix:this.classPrefix});this.span(n)}closeNode(e){l(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const h=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class f{constructor(){this.rootNode=h(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=h({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{f._collapse(e)})))}}class L extends f{constructor(e){super(),this.options=e}addText(text){""!==text&&this.add(text)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,n){const t=e.root;n&&(t.scope=`language:${n}`),this.add(t)}toHTML(){return new d(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function source(e){return e?"string"==typeof e?e:e.source:null}function m(e){return E("(?=",e,")")}function x(e){return E("(?:",e,")*")}function w(e){return E("(?:",e,")?")}function E(...e){return e.map((e=>source(e))).join("")}function y(...e){const n=function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(n.capture?"":"?:")+e.map((e=>source(e))).join("|")+")"}function _(e){return new RegExp(e.toString()+"|").exec("").length-1}const v=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function k(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let r=source(e),o="";for(;r.length>0;){const e=v.exec(r);if(!e){o+=r;break}o+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o})).map((e=>`(${e})`)).join(n)}const O="[a-zA-Z]\\w*",S="[a-zA-Z_]\\w*",j="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",M="\\b(0b[01]+)",R={begin:"\\\\[\\s\\S]",relevance:0},A={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},I={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},T=function(e,n,t={}){const r=c({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=y("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:E(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},B=T("//","$"),H=T("/\\*","\\*/"),P=T("#","$"),D={scope:"number",begin:j,relevance:0},C={scope:"number",begin:N,relevance:0},$={scope:"number",begin:M,relevance:0},U={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},z={scope:"title",begin:O,relevance:0},W={scope:"title",begin:S,relevance:0},X={begin:"\\.\\s*"+S,relevance:0};var G=Object.freeze({__proto__:null,APOS_STRING_MODE:A,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:$,BINARY_NUMBER_RE:M,COMMENT:T,C_BLOCK_COMMENT_MODE:H,C_LINE_COMMENT_MODE:B,C_NUMBER_MODE:C,C_NUMBER_RE:N,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})},HASH_COMMENT_MODE:P,IDENT_RE:O,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:X,NUMBER_MODE:D,NUMBER_RE:j,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:I,REGEXP_MODE:U,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=E(n,/.*\b/,e.binary,/\b.*/)),c({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},TITLE_MODE:z,UNDERSCORE_IDENT_RE:S,UNDERSCORE_TITLE_MODE:W});function K(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function F(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function Z(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=K,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function J(e,n){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function V(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Y(e,n){void 0===e.relevance&&(e.relevance=1)}const Q=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=E(t.beforeMatch,m(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},ee=["of","and","for","in","not","or","if","then","parent","list","value"],ne="keyword";function te(e,n,t=ne){const r=Object.create(null);return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach((function(t){Object.assign(r,te(e[t],n,t))})),r;function o(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");r[t[0]]=[e,re(t[0],t[1])]}))}}function re(e,n){return n?Number(n):function(e){return ee.includes(e.toLowerCase())}(e)?0:1}const ae={},ie=e=>{console.error(e)},ge=(e,...n)=>{console.log(`WARN: ${e}`,...n)},se=(e,n)=>{ae[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ae[`${e}/${n}`]=!0)},oe=new Error;function ce(e,n,{key:t}){let r=0;const o=e[t],c={},l={};for(let i=1;i<=n.length;i++)l[i+r]=o[i],c[i+r]=!0,r+=_(n[i-1]);e[t]=l,e[t]._emit=c,e[t]._multi=!0}function ue(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),oe;if("object"!=typeof e.beginScope||null===e.beginScope)throw ie("beginScope must be object"),oe;ce(e,e.begin,{key:"beginScope"}),e.begin=k(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"),oe;if("object"!=typeof e.endScope||null===e.endScope)throw ie("endScope must be object"),oe;ce(e,e.end,{key:"endScope"}),e.end=k(e.end,{joinWith:""})}}(e)}function le(e){function n(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=_(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(k(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex(((e,i)=>i>0&&void 0!==e)),n=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,n)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let n=e.exec(s);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,n=e.exec(s)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=c(e.classNameAliases||{}),function t(o,l){const d=o;if(o.isCompiled)return d;[F,V,ue,Q].forEach((e=>e(o,l))),e.compilerExtensions.forEach((e=>e(o,l))),o.__beforeBegin=null,[Z,J,Y].forEach((e=>e(o,l))),o.isCompiled=!0;let h=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),h=o.keywords.$pattern,delete o.keywords.$pattern),h=h||/\w+/,o.keywords&&(o.keywords=te(o.keywords,e.case_insensitive)),d.keywordPatternRe=n(h,!0),l&&(o.begin||(o.begin=/\B|\b/),d.beginRe=n(d.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(d.endRe=n(d.end)),d.terminatorEnd=source(d.end)||"",o.endsWithParent&&l.terminatorEnd&&(d.terminatorEnd+=(o.end?"|":"")+l.terminatorEnd)),o.illegal&&(d.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return c(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(de(e))return c(e,{starts:e.starts?c(e.starts):null});if(Object.isFrozen(e))return c(e);return e}("self"===e?o:e)}))),o.contains.forEach((function(e){t(e,d)})),o.starts&&t(o.starts,l),d.matcher=function(e){const n=new r;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(d),d}(e)}function de(e){return!!e&&(e.endsWithParent||de(e.starts))}class he extends Error{constructor(e,html){super(e),this.name="HTMLInjectionError",this.html=html}}const fe=o,pe=c,Le=Symbol("nomatch"),be=function(e){const n=Object.create(null),o=Object.create(null),c=[];let l=!0;const d="Could not find the language '{}', did you forget to load/include a language module?",h={disableAutodetect:!0,name:"Plain text",contains:[]};let f={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:L};function _(e){return f.noHighlightRe.test(e)}function v(e,n,t){let code="",r="";"object"==typeof n?(code=e,t=n.ignoreIllegals,r=n.language):(se("10.7.0","highlight(lang, code, ...args) has been deprecated."),se("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,code=n),void 0===t&&(t=!0);const o={code:code,language:r};I("before:highlight",o);const c=o.result?o.result:k(o.language,o.code,t);return c.code=o.code,I("after:highlight",c),c}function k(e,t,o,c){const h=Object.create(null);function L(){if(!I.keywords)return void B.addText(H);let e=0;I.keywordPatternRe.lastIndex=0;let n=I.keywordPatternRe.exec(H),t="";for(;n;){t+=H.substring(e,n.index);const o=N.case_insensitive?n[0].toLowerCase():n[0],data=(r=o,I.keywords[r]);if(data){const[e,r]=data;if(B.addText(t),t="",h[o]=(h[o]||0)+1,h[o]<=7&&(P+=r),e.startsWith("_"))t+=n[0];else{const t=N.classNameAliases[e]||e;x(n[0],t)}}else t+=n[0];e=I.keywordPatternRe.lastIndex,n=I.keywordPatternRe.exec(H)}var r;t+=H.substring(e),B.addText(t)}function m(){null!=I.subLanguage?function(){if(""===H)return;let e=null;if("string"==typeof I.subLanguage){if(!n[I.subLanguage])return void B.addText(H);e=k(I.subLanguage,H,!0,T[I.subLanguage]),T[I.subLanguage]=e._top}else e=O(H,I.subLanguage.length?I.subLanguage:null);I.relevance>0&&(P+=e.relevance),B.__addSublanguage(e._emitter,e.language)}():L(),H=""}function x(e,n){""!==e&&(B.startScope(n),B.addText(e),B.endScope())}function w(e,n){let i=1;const t=n.length-1;for(;i<=t;){if(!e._emit[i]){i++;continue}const t=N.classNameAliases[e[i]]||e[i],text=n[i];t?x(text,t):(H=text,L(),H=""),i++}}function E(e,n){return e.scope&&"string"==typeof e.scope&&B.openNode(N.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(x(H,N.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),H=""):e.beginScope._multi&&(w(e.beginScope,n),H="")),I=Object.create(e,{parent:{value:I}}),I}function y(e,n,t){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(o){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.isMatchIgnored&&(o=!1)}if(o){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return y(e.parent,n,t)}function _(e){return 0===I.matcher.regexIndex?(H+=e[0],1):($=!0,0)}function v(e){const n=e[0],r=t.substring(e.index),o=y(I,e,r);if(!o)return Le;const c=I;I.endScope&&I.endScope._wrap?(m(),x(n,I.endScope._wrap)):I.endScope&&I.endScope._multi?(m(),w(I.endScope,e)):c.skip?H+=n:(c.returnEnd||c.excludeEnd||(H+=n),m(),c.excludeEnd&&(H=n));do{I.scope&&B.closeNode(),I.skip||I.subLanguage||(P+=I.relevance),I=I.parent}while(I!==o.parent);return o.starts&&E(o.starts,e),c.returnEnd?0:n.length}let S={};function j(n,c){const d=c&&c[0];if(H+=n,null==d)return m(),0;if("begin"===S.type&&"end"===c.type&&S.index===c.index&&""===d){if(H+=t.slice(c.index,c.index+1),!l){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=S.rule,n}return 1}if(S=c,"begin"===c.type)return function(e){const n=e[0],t=e.rule,o=new r(t),c=[t.__beforeBegin,t["on:begin"]];for(const t of c)if(t&&(t(e,o),o.isMatchIgnored))return _(n);return t.skip?H+=n:(t.excludeBegin&&(H+=n),m(),t.returnBegin||t.excludeBegin||(H=n)),E(t,e),t.returnBegin?0:n.length}(c);if("illegal"===c.type&&!o){const e=new Error('Illegal lexeme "'+d+'" for mode "'+(I.scope||"<unnamed>")+'"');throw e.mode=I,e}if("end"===c.type){const e=v(c);if(e!==Le)return e}if("illegal"===c.type&&""===d)return 1;if(C>1e5&&C>3*c.index){throw new Error("potential infinite loop, way more iterations than matches")}return H+=d,d.length}const N=M(e);if(!N)throw ie(d.replace("{}",e)),new Error('Unknown language: "'+e+'"');const R=le(N);let A="",I=c||R;const T={},B=new f.__emitter(f);!function(){const e=[];for(let n=I;n!==N;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>B.openNode(e)))}();let H="",P=0,D=0,C=0,$=!1;try{if(N.__emitTokens)N.__emitTokens(t,B);else{for(I.matcher.considerAll();;){C++,$?$=!1:I.matcher.considerAll(),I.matcher.lastIndex=D;const e=I.matcher.exec(t);if(!e)break;const n=j(t.substring(D,e.index),e);D=e.index+n}j(t.substring(D))}return B.finalize(),A=B.toHTML(),{language:e,value:A,relevance:P,illegal:!1,_emitter:B,_top:I}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:fe(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:D,context:t.slice(D-100,D+100),mode:n.mode,resultSoFar:A},_emitter:B};if(l)return{language:e,value:fe(t),illegal:!1,relevance:0,errorRaised:n,_emitter:B,_top:I};throw n}}function O(code,e){e=e||f.languages||Object.keys(n);const t=function(code){const e={value:fe(code),illegal:!1,relevance:0,_top:h,_emitter:new f.__emitter(f)};return e._emitter.addText(code),e}(code),r=e.filter(M).filter(A).map((e=>k(e,code,!1)));r.unshift(t);const o=r.sort(((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(M(a.language).supersetOf===b.language)return 1;if(M(b.language).supersetOf===a.language)return-1}return 0})),[c,l]=o,d=c;return d.secondBest=l,d}function S(element){let e=null;const n=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=f.languageDetectRe.exec(n);if(t){const n=M(t[1]);return n||(ge(d.replace("{}",t[1])),ge("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>_(e)||M(e)))}(element);if(_(n))return;if(I("before:highlightElement",{el:element,language:n}),element.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",element);if(element.children.length>0&&(f.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(element)),f.throwUnescapedHTML)){throw new he("One of your code blocks includes unescaped HTML.",element.innerHTML)}e=element;const text=e.textContent,t=n?v(text,{language:n,ignoreIllegals:!0}):O(text);element.innerHTML=t.value,element.dataset.highlighted="yes",function(element,e,n){const t=e&&o[e]||n;element.classList.add("hljs"),element.classList.add(`language-${t}`)}(element,n,t.language),element.result={language:t.language,re:t.relevance,relevance:t.relevance},t.secondBest&&(element.secondBest={language:t.secondBest.language,relevance:t.secondBest.relevance}),I("after:highlightElement",{el:element,result:t,text:text})}let j=!1;function N(){if("loading"===document.readyState)return void(j=!0);document.querySelectorAll(f.cssSelector).forEach(S)}function M(e){return e=(e||"").toLowerCase(),n[e]||n[o[e]]}function R(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{o[e.toLowerCase()]=n}))}function A(e){const n=M(e);return n&&!n.disableAutodetect}function I(e,n){const t=e;c.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){j&&N()}),!1),Object.assign(e,{highlight:v,highlightAuto:O,highlightAll:N,highlightElement:S,highlightBlock:function(e){return se("10.7.0","highlightBlock will be removed entirely in v12.0"),se("10.7.0","Please use highlightElement now."),S(e)},configure:function(e){f=pe(f,e)},initHighlighting:()=>{N(),se("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){N(),se("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,r){let o=null;try{o=r(e)}catch(e){if(ie("Language definition for '{}' could not be registered.".replace("{}",t)),!l)throw e;ie(e),o=h}o.name||(o.name=t),n[t]=o,o.rawDefinition=r.bind(null,e),o.aliases&&R(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(o))o[n]===e&&delete o[n]},listLanguages:function(){return Object.keys(n)},getLanguage:M,registerAliases:R,autoDetection:A,inherit:pe,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=data=>{e["before:highlightBlock"](Object.assign({block:data.el},data))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=data=>{e["after:highlightBlock"](Object.assign({block:data.el},data))})}(e),c.push(e)},removePlugin:function(e){const n=c.indexOf(e);-1!==n&&c.splice(n,1)}}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString="11.9.0",e.regex={concat:E,lookahead:m,either:y,optional:w,anyNumberOfTimes:x};for(const e in G)"object"==typeof G[e]&&t(G[e]);return Object.assign(e,G),e},me=be({});me.newInstance=()=>be({}),e.exports=me,me.HighlightJS=me,me.default=me},996:function(e,n,t){var r=t(782);r.registerLanguage("1c",t(783)),r.registerLanguage("abnf",t(784)),r.registerLanguage("accesslog",t(785)),r.registerLanguage("actionscript",t(786)),r.registerLanguage("ada",t(787)),r.registerLanguage("angelscript",t(788)),r.registerLanguage("apache",t(789)),r.registerLanguage("applescript",t(790)),r.registerLanguage("arcade",t(791)),r.registerLanguage("arduino",t(792)),r.registerLanguage("armasm",t(793)),r.registerLanguage("xml",t(794)),r.registerLanguage("asciidoc",t(795)),r.registerLanguage("aspectj",t(796)),r.registerLanguage("autohotkey",t(797)),r.registerLanguage("autoit",t(798)),r.registerLanguage("avrasm",t(799)),r.registerLanguage("awk",t(800)),r.registerLanguage("axapta",t(801)),r.registerLanguage("bash",t(802)),r.registerLanguage("basic",t(803)),r.registerLanguage("bnf",t(804)),r.registerLanguage("brainfuck",t(805)),r.registerLanguage("c",t(806)),r.registerLanguage("cal",t(807)),r.registerLanguage("capnproto",t(808)),r.registerLanguage("ceylon",t(809)),r.registerLanguage("clean",t(810)),r.registerLanguage("clojure",t(811)),r.registerLanguage("clojure-repl",t(812)),r.registerLanguage("cmake",t(813)),r.registerLanguage("coffeescript",t(814)),r.registerLanguage("coq",t(815)),r.registerLanguage("cos",t(816)),r.registerLanguage("cpp",t(817)),r.registerLanguage("crmsh",t(818)),r.registerLanguage("crystal",t(819)),r.registerLanguage("csharp",t(820)),r.registerLanguage("csp",t(821)),r.registerLanguage("css",t(822)),r.registerLanguage("d",t(823)),r.registerLanguage("markdown",t(824)),r.registerLanguage("dart",t(825)),r.registerLanguage("delphi",t(826)),r.registerLanguage("diff",t(827)),r.registerLanguage("django",t(828)),r.registerLanguage("dns",t(829)),r.registerLanguage("dockerfile",t(830)),r.registerLanguage("dos",t(831)),r.registerLanguage("dsconfig",t(832)),r.registerLanguage("dts",t(833)),r.registerLanguage("dust",t(834)),r.registerLanguage("ebnf",t(835)),r.registerLanguage("elixir",t(836)),r.registerLanguage("elm",t(837)),r.registerLanguage("ruby",t(838)),r.registerLanguage("erb",t(839)),r.registerLanguage("erlang-repl",t(840)),r.registerLanguage("erlang",t(841)),r.registerLanguage("excel",t(842)),r.registerLanguage("fix",t(843)),r.registerLanguage("flix",t(844)),r.registerLanguage("fortran",t(845)),r.registerLanguage("fsharp",t(846)),r.registerLanguage("gams",t(847)),r.registerLanguage("gauss",t(848)),r.registerLanguage("gcode",t(849)),r.registerLanguage("gherkin",t(850)),r.registerLanguage("glsl",t(851)),r.registerLanguage("gml",t(852)),r.registerLanguage("go",t(853)),r.registerLanguage("golo",t(854)),r.registerLanguage("gradle",t(855)),r.registerLanguage("graphql",t(856)),r.registerLanguage("groovy",t(857)),r.registerLanguage("haml",t(858)),r.registerLanguage("handlebars",t(859)),r.registerLanguage("haskell",t(860)),r.registerLanguage("haxe",t(861)),r.registerLanguage("hsp",t(862)),r.registerLanguage("http",t(863)),r.registerLanguage("hy",t(864)),r.registerLanguage("inform7",t(865)),r.registerLanguage("ini",t(866)),r.registerLanguage("irpf90",t(867)),r.registerLanguage("isbl",t(868)),r.registerLanguage("java",t(869)),r.registerLanguage("javascript",t(870)),r.registerLanguage("jboss-cli",t(871)),r.registerLanguage("json",t(872)),r.registerLanguage("julia",t(873)),r.registerLanguage("julia-repl",t(874)),r.registerLanguage("kotlin",t(875)),r.registerLanguage("lasso",t(876)),r.registerLanguage("latex",t(877)),r.registerLanguage("ldif",t(878)),r.registerLanguage("leaf",t(879)),r.registerLanguage("less",t(880)),r.registerLanguage("lisp",t(881)),r.registerLanguage("livecodeserver",t(882)),r.registerLanguage("livescript",t(883)),r.registerLanguage("llvm",t(884)),r.registerLanguage("lsl",t(885)),r.registerLanguage("lua",t(886)),r.registerLanguage("makefile",t(887)),r.registerLanguage("mathematica",t(888)),r.registerLanguage("matlab",t(889)),r.registerLanguage("maxima",t(890)),r.registerLanguage("mel",t(891)),r.registerLanguage("mercury",t(892)),r.registerLanguage("mipsasm",t(893)),r.registerLanguage("mizar",t(894)),r.registerLanguage("perl",t(895)),r.registerLanguage("mojolicious",t(896)),r.registerLanguage("monkey",t(897)),r.registerLanguage("moonscript",t(898)),r.registerLanguage("n1ql",t(899)),r.registerLanguage("nestedtext",t(900)),r.registerLanguage("nginx",t(901)),r.registerLanguage("nim",t(902)),r.registerLanguage("nix",t(903)),r.registerLanguage("node-repl",t(904)),r.registerLanguage("nsis",t(905)),r.registerLanguage("objectivec",t(906)),r.registerLanguage("ocaml",t(907)),r.registerLanguage("openscad",t(908)),r.registerLanguage("oxygene",t(909)),r.registerLanguage("parser3",t(910)),r.registerLanguage("pf",t(911)),r.registerLanguage("pgsql",t(912)),r.registerLanguage("php",t(913)),r.registerLanguage("php-template",t(914)),r.registerLanguage("plaintext",t(915)),r.registerLanguage("pony",t(916)),r.registerLanguage("powershell",t(917)),r.registerLanguage("processing",t(918)),r.registerLanguage("profile",t(919)),r.registerLanguage("prolog",t(920)),r.registerLanguage("properties",t(921)),r.registerLanguage("protobuf",t(922)),r.registerLanguage("puppet",t(923)),r.registerLanguage("purebasic",t(924)),r.registerLanguage("python",t(925)),r.registerLanguage("python-repl",t(926)),r.registerLanguage("q",t(927)),r.registerLanguage("qml",t(928)),r.registerLanguage("r",t(929)),r.registerLanguage("reasonml",t(930)),r.registerLanguage("rib",t(931)),r.registerLanguage("roboconf",t(932)),r.registerLanguage("routeros",t(933)),r.registerLanguage("rsl",t(934)),r.registerLanguage("ruleslanguage",t(935)),r.registerLanguage("rust",t(936)),r.registerLanguage("sas",t(937)),r.registerLanguage("scala",t(938)),r.registerLanguage("scheme",t(939)),r.registerLanguage("scilab",t(940)),r.registerLanguage("scss",t(941)),r.registerLanguage("shell",t(942)),r.registerLanguage("smali",t(943)),r.registerLanguage("smalltalk",t(944)),r.registerLanguage("sml",t(945)),r.registerLanguage("sqf",t(946)),r.registerLanguage("sql",t(947)),r.registerLanguage("stan",t(948)),r.registerLanguage("stata",t(949)),r.registerLanguage("step21",t(950)),r.registerLanguage("stylus",t(951)),r.registerLanguage("subunit",t(952)),r.registerLanguage("swift",t(953)),r.registerLanguage("taggerscript",t(954)),r.registerLanguage("yaml",t(955)),r.registerLanguage("tap",t(956)),r.registerLanguage("tcl",t(957)),r.registerLanguage("thrift",t(958)),r.registerLanguage("tp",t(959)),r.registerLanguage("twig",t(960)),r.registerLanguage("typescript",t(961)),r.registerLanguage("vala",t(962)),r.registerLanguage("vbnet",t(963)),r.registerLanguage("vbscript",t(964)),r.registerLanguage("vbscript-html",t(965)),r.registerLanguage("verilog",t(966)),r.registerLanguage("vhdl",t(967)),r.registerLanguage("vim",t(968)),r.registerLanguage("wasm",t(969)),r.registerLanguage("wren",t(970)),r.registerLanguage("x86asm",t(971)),r.registerLanguage("xl",t(972)),r.registerLanguage("xquery",t(973)),r.registerLanguage("zephir",t(974)),r.HighlightJS=r,r.default=r,e.exports=r}}]);