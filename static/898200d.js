(window.webpackJsonp=window.webpackJsonp||[]).push([[10,37],{611:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(element,t){if("PRE"===element.tagName&&element.classList.contains(e)){var n=element.querySelector(".line-numbers-rows");if(n){var r=parseInt(element.getAttribute("data-start"),10)||1,o=r+(n.children.length-1);t<r&&(t=r),t>o&&(t=o);var l=t-r;return n.children[l]}}},resize:function(element){o([element])},assumeViewportIndependence:!0},r=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var code=n.element,pre=code.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&!code.querySelector(".line-numbers-rows")&&Prism.util.isActive(code,e)){code.classList.remove(e),pre.classList.add(e);var r,l=n.code.match(t),c=l?l.length+1:1,d=new Array(c+1).join("<span></span>");(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=d,pre.hasAttribute("data-start")&&(pre.style.counterReset="linenumber "+(parseInt(pre.getAttribute("data-start"),10)-1)),n.element.appendChild(r),o([pre]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function o(e){if(0!=(e=e.filter((function(e){var t=function(element){if(!element)return null;return window.getComputedStyle?getComputedStyle(element):element.currentStyle||null}(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var n=e.map((function(element){var e=element.querySelector("code"),n=element.querySelector(".line-numbers-rows");if(e&&n){var r=element.querySelector(".line-numbers-sizer"),o=e.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",e.appendChild(r)),r.innerHTML="0",r.style.display="block";var l=r.getBoundingClientRect().height;return r.innerHTML="",{element:element,lines:o,lineHeights:[],oneLinerHeight:l,sizer:r}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,r=e.lineHeights,o=e.oneLinerHeight;r[n.length-1]=void 0,n.forEach((function(line,e){if(line&&line.length>1){var n=t.appendChild(document.createElement("span"));n.style.display="block",n.textContent=line}else r[e]=o}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,r=0,i=0;i<n.length;i++)void 0===n[i]&&(n[i]=t.children[r++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}}()},612:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],map={},t=function(){};Prism.plugins.toolbar={};var n=Prism.plugins.toolbar.registerButton=function(t,n){var r;r="function"==typeof n?n:function(e){var element;return"function"==typeof n.onClick?((element=document.createElement("button")).type="button",element.addEventListener("click",(function(){n.onClick.call(this,e)}))):"string"==typeof n.url?(element=document.createElement("a")).href=n.url:element=document.createElement("span"),n.className&&element.classList.add(n.className),element.textContent=n.text,element},t in map?console.warn('There is a button with the key "'+t+'" registered already.'):e.push(map[t]=r)},r=Prism.plugins.toolbar.hook=function(n){var pre=n.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&!pre.parentNode.classList.contains("code-toolbar")){var r=document.createElement("div");r.classList.add("code-toolbar"),pre.parentNode.insertBefore(r,pre),r.appendChild(pre);var o=document.createElement("div");o.classList.add("toolbar");var l=e,c=function(element){for(;element;){var e=element.getAttribute("data-toolbar-order");if(null!=e)return(e=e.trim()).length?e.split(/\s*,\s*/g):[];element=element.parentElement}}(n.element);c&&(l=c.map((function(e){return map[e]||t}))),l.forEach((function(e){var element=e(n);if(element){var t=document.createElement("div");t.classList.add("toolbar-item"),t.appendChild(element),o.appendChild(t)}})),r.appendChild(o)}};n("label",(function(e){var pre=e.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&pre.hasAttribute("data-label")){var element,template,text=pre.getAttribute("data-label");try{template=document.querySelector("template#"+text)}catch(e){}return template?element=template.content:(pre.hasAttribute("data-url")?(element=document.createElement("a")).href=pre.getAttribute("data-url"):element=document.createElement("span"),element.textContent=text),element}})),Prism.hooks.add("complete",r)}}()},613:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document)if(Prism.plugins.toolbar){var e={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",(function(t){var pre=t.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)){var n,r=pre.getAttribute("data-language")||e[t.language]||((n=t.language)?(n.substring(0,1).toUpperCase()+n.substring(1)).replace(/s(?=cript)/,"S"):n);if(r){var element=document.createElement("span");return element.textContent=r,element}}}))}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}()},614:function(e,t){!function(){function e(element,e){element.addEventListener("click",(function(){!function(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}(e)}))}function t(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout((function(){n?e.success():e.error()}),1)}catch(t){setTimeout((function(){e.error(t)}),1)}document.body.removeChild(t)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(t){var element=t.element,n=function(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var n in t){for(var r="data-prismjs-"+n,element=e;element&&!element.hasAttribute(r);)element=element.parentElement;element&&(t[n]=element.getAttribute(r))}return t}(element),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var o=document.createElement("span");return r.appendChild(o),c("copy"),e(r,{getText:function(){return element.textContent},success:function(){c("copy-success"),l()},error:function(){c("copy-error"),setTimeout((function(){!function(element){window.getSelection().selectAllChildren(element)}(element)}),1),l()}}),r;function l(){setTimeout((function(){c("copy")}),n["copy-timeout"])}function c(e){o.textContent=n[e],r.setAttribute("data-copy-state",e)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}()}}]);