!function(q){var z="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports?z&&(z.hljs=q({}),"function"==typeof define&&define.amd&&define([],function(){return z.hljs})):q(exports)}(function(q){function z(ha){return ha.replace(/[&<>]/gm,function(ia){return ga[ia]})}function A(ha){return ha.nodeName.toLowerCase()}function D(ha,ia){var ja=ha&&ha.exec(ia);return ja&&0===ja.index}function F(ha){return ba.test(ha)}function G(ha){var ia,ja,ka,la,ma=ha.className+" ";if(ma+=ha.parentNode?ha.parentNode.className:"",ja=ca.exec(ma))return Y(ja[1])?ja[1]:"no-highlight";for(ma=ma.split(/\s+/),ia=0,ka=ma.length;ka>ia;ia++)if(la=ma[ia],F(la)||Y(la))return la}function H(ha,ia){var ja,ka={};for(ja in ha)ka[ja]=ha[ja];if(ia)for(ja in ia)ka[ja]=ia[ja];return ka}function J(ha){var ia=[];return function ja(ka,la){for(var ma=ka.firstChild;ma;ma=ma.nextSibling)3===ma.nodeType?la+=ma.nodeValue.length:1===ma.nodeType&&(ia.push({event:"start",offset:la,node:ma}),la=ja(ma,la),A(ma).match(/br|hr|img|input/)||ia.push({event:"stop",offset:la,node:ma}));return la}(ha,0),ia}function K(ha,ia,ja){function ka(){return ha.length&&ia.length?ha[0].offset===ia[0].offset?"start"===ia[0].event?ha:ia:ha[0].offset<ia[0].offset?ha:ia:ha.length?ha:ia}function la(sa){pa+="<"+A(sa)+Z.map.call(sa.attributes,function(ua){return" "+ua.nodeName+"=\""+z(ua.value)+"\""}).join("")+">"}function ma(sa){pa+="</"+A(sa)+">"}function na(sa){("start"===sa.event?la:ma)(sa.node)}for(var oa=0,pa="",qa=[];ha.length||ia.length;){var ra=ka();if(pa+=z(ja.substring(oa,ra[0].offset)),oa=ra[0].offset,ra===ha){qa.reverse().forEach(ma);do na(ra.splice(0,1)[0]),ra=ka();while(ra===ha&&ra.length&&ra[0].offset===oa);qa.reverse().forEach(la)}else"start"===ra[0].event?qa.push(ra[0].node):qa.pop(),na(ra.splice(0,1)[0])}return pa+z(ja.substr(oa))}function P(ha){function ia(la){return la&&la.source||la}function ja(la,ma){return new RegExp(ia(la),"m"+(ha.cI?"i":"")+(ma?"g":""))}function ka(la,ma){if(!la.compiled){if(la.compiled=!0,la.k=la.k||la.bK,la.k){var na={},oa=function(ra,sa){ha.cI&&(sa=sa.toLowerCase()),sa.split(" ").forEach(function(ta){var ua=ta.split("|");na[ua[0]]=[ra,ua[1]?+ua[1]:1]})};"string"==typeof la.k?oa("keyword",la.k):$(la.k).forEach(function(ra){oa(ra,la.k[ra])}),la.k=na}la.lR=ja(la.l||/\w+/,!0),ma&&(la.bK&&(la.b="\\b("+la.bK.split(" ").join("|")+")\\b"),la.b||(la.b=/\B|\b/),la.bR=ja(la.b),la.e||la.eW||(la.e=/\B|\b/),la.e&&(la.eR=ja(la.e)),la.tE=ia(la.e)||"",la.eW&&ma.tE&&(la.tE+=(la.e?"|":"")+ma.tE)),la.i&&(la.iR=ja(la.i)),null==la.r&&(la.r=1),la.c||(la.c=[]);var pa=[];la.c.forEach(function(ra){ra.v?ra.v.forEach(function(sa){pa.push(H(ra,sa))}):pa.push("self"===ra?la:ra)}),la.c=pa,la.c.forEach(function(ra){ka(ra,la)}),la.starts&&ka(la.starts,ma);var qa=la.c.map(function(ra){return ra.bK?"\\.?("+ra.b+")\\.?":ra.b}).concat([la.tE,la.i]).map(ia).filter(Boolean);la.t=qa.length?ja(qa.join("|"),!0):{exec:function(){return null}}}}ka(ha)}function Q(ha,ia,ja,ka){function la(Fa,Ga){var Ha,Ia;for(Ha=0,Ia=Ga.c.length;Ia>Ha;Ha++)if(D(Ga.c[Ha].bR,Fa))return Ga.c[Ha]}function ma(Fa,Ga){if(D(Fa.eR,Ga)){for(;Fa.endsParent&&Fa.parent;)Fa=Fa.parent;return Fa}return Fa.eW?ma(Fa.parent,Ga):void 0}function na(Fa,Ga){return!ja&&D(Ga.iR,Fa)}function oa(Fa,Ga){var Ha=va.cI?Ga[0].toLowerCase():Ga[0];return Fa.k.hasOwnProperty(Ha)&&Fa.k[Ha]}function pa(Fa,Ga,Ha,Ia){var Ja=Ia?"":fa.classPrefix,Ka="<span class=\""+Ja,La=Ha?"":ea;return Ka+=Fa+"\">",Ka+Ga+La}function qa(){var Fa,Ga,Ha,Ia;if(!xa.k)return z(Aa);for(Ia="",Ga=0,xa.lR.lastIndex=0,Ha=xa.lR.exec(Aa);Ha;)Ia+=z(Aa.substring(Ga,Ha.index)),Fa=oa(xa,Ha),Fa?(Ba+=Fa[1],Ia+=pa(Fa[0],z(Ha[0]))):Ia+=z(Ha[0]),Ga=xa.lR.lastIndex,Ha=xa.lR.exec(Aa);return Ia+z(Aa.substr(Ga))}function ra(){var Fa="string"==typeof xa.sL;if(Fa&&!_[xa.sL])return z(Aa);var Ga=Fa?Q(xa.sL,Aa,!0,ya[xa.sL]):S(Aa,xa.sL.length?xa.sL:void 0);return 0<xa.r&&(Ba+=Ga.r),Fa&&(ya[xa.sL]=Ga.top),pa(Ga.language,Ga.value,!1,!0)}function sa(){za+=null==xa.sL?qa():ra(),Aa=""}function ta(Fa){za+=Fa.cN?pa(Fa.cN,"",!0):"",xa=Object.create(Fa,{parent:{value:xa}})}function ua(Fa,Ga){if(Aa+=Fa,null==Ga)return sa(),0;var Ha=la(Ga,xa);if(Ha)return Ha.skip?Aa+=Ga:(Ha.eB&&(Aa+=Ga),sa(),Ha.rB||Ha.eB||(Aa=Ga)),ta(Ha,Ga),Ha.rB?0:Ga.length;var Ia=ma(xa,Ga);if(Ia){var Ja=xa;Ja.skip?Aa+=Ga:(Ja.rE||Ja.eE||(Aa+=Ga),sa(),Ja.eE&&(Aa=Ga));do xa.cN&&(za+=ea),xa.skip||(Ba+=xa.r),xa=xa.parent;while(xa!==Ia.parent);return Ia.starts&&ta(Ia.starts,""),Ja.rE?0:Ga.length}if(na(Ga,xa))throw new Error("Illegal lexeme \""+Ga+"\" for mode \""+(xa.cN||"<unnamed>")+"\"");return Aa+=Ga,Ga.length||1}var va=Y(ha);if(!va)throw new Error("Unknown language: \""+ha+"\"");P(va);var wa,xa=ka||va,ya={},za="";for(wa=xa;wa!==va;wa=wa.parent)wa.cN&&(za=pa(wa.cN,"",!0)+za);var Aa="",Ba=0;try{for(var Ca,Da,Ea=0;;){if(xa.t.lastIndex=Ea,Ca=xa.t.exec(ia),!Ca)break;Da=ua(ia.substring(Ea,Ca.index),Ca[0]),Ea=Ca.index+Da}for(ua(ia.substr(Ea)),wa=xa;wa.parent;wa=wa.parent)wa.cN&&(za+=ea);return{r:Ba,value:za,language:ha,top:xa}}catch(Fa){if(Fa.message&&-1!==Fa.message.indexOf("Illegal"))return{r:0,value:z(ia)};throw Fa}}function S(ha,ia){ia=ia||fa.languages||$(_);var ja={r:0,value:z(ha)},ka=ja;return ia.filter(Y).forEach(function(la){var ma=Q(la,ha,!1);ma.language=la,ma.r>ka.r&&(ka=ma),ma.r>ja.r&&(ka=ja,ja=ma)}),ka.language&&(ja.second_best=ka),ja}function U(ha){return fa.tabReplace||fa.useBR?ha.replace(da,function(ia,ja){return fa.useBR&&"\n"===ia?"<br>":fa.tabReplace?ja.replace(/\t/g,fa.tabReplace):void 0}):ha}function V(ha,ia,ja){var ka=ia?aa[ia]:ja,la=[ha.trim()];return ha.match(/\bhljs\b/)||la.push("hljs"),-1===ha.indexOf(ka)&&la.push(ka),la.join(" ").trim()}function W(ha){var ia,ja,ka,la,ma,na=G(ha);F(na)||(fa.useBR?(ia=document.createElementNS("http://www.w3.org/1999/xhtml","div"),ia.innerHTML=ha.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):ia=ha,ma=ia.textContent,ka=na?Q(na,ma,!0):S(ma),ja=J(ia),ja.length&&(la=document.createElementNS("http://www.w3.org/1999/xhtml","div"),la.innerHTML=ka.value,ka.value=K(ja,J(la),ma)),ka.value=U(ka.value),ha.innerHTML=ka.value,ha.className=V(ha.className,na,ka.language),ha.result={language:ka.language,re:ka.r},ka.second_best&&(ha.second_best={language:ka.second_best.language,re:ka.second_best.r}))}function X(){if(!X.called){X.called=!0;var ha=document.querySelectorAll("pre code");Z.forEach.call(ha,W)}}function Y(ha){return ha=(ha||"").toLowerCase(),_[ha]||_[aa[ha]]}var Z=[],$=Object.keys,_={},aa={},ba=/^(no-?highlight|plain|text)$/i,ca=/\blang(?:uage)?-([\w-]+)\b/i,da=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,ea="</span>",fa={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},ga={"&":"&amp;","<":"&lt;",">":"&gt;"};return q.highlight=Q,q.highlightAuto=S,q.fixMarkup=U,q.highlightBlock=W,q.configure=function(ia){fa=H(fa,ia)},q.initHighlighting=X,q.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",X,!1),addEventListener("load",X,!1)},q.registerLanguage=function(ia,ja){var ka=_[ia]=ja(q);ka.aliases&&ka.aliases.forEach(function(la){aa[la]=ia})},q.listLanguages=function(){return $(_)},q.getLanguage=Y,q.inherit=H,q.IR="[a-zA-Z]\\w*",q.UIR="[a-zA-Z_]\\w*",q.NR="\\b\\d+(\\.\\d+)?",q.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",q.BNR="\\b(0b[01]+)",q.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",q.BE={b:"\\\\[\\s\\S]",r:0},q.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[q.BE]},q.QSM={cN:"string",b:"\"",e:"\"",i:"\\n",c:[q.BE]},q.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},q.C=function(ha,ia,ja){var ka=q.inherit({cN:"comment",b:ha,e:ia,c:[]},ja||{});return ka.c.push(q.PWM),ka.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),ka},q.CLCM=q.C("//","$"),q.CBCM=q.C("/\\*","\\*/"),q.HCM=q.C("#","$"),q.NM={cN:"number",b:q.NR,r:0},q.CNM={cN:"number",b:q.CNR,r:0},q.BNM={cN:"number",b:q.BNR,r:0},q.CSSNM={cN:"number",b:q.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},q.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[q.BE,{b:/\[/,e:/\]/,r:0,c:[q.BE]}]},q.TM={cN:"title",b:q.IR,r:0},q.UTM={cN:"title",b:q.UIR,r:0},q.METHOD_GUARD={b:"\\.\\s*"+q.UIR,r:0},q}),hljs.registerLanguage("css",function(q){var z={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[q.ASM,q.QSM]}]},q.CSSNM,q.QSM,q.ASM,q.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[q.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[q.ASM,q.QSM,q.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[q.CBCM,z]}]}}),hljs.registerLanguage("xml",function(q){var z={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},q.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[z],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[z],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},z]}]}}),hljs.registerLanguage("json",function(q){var z={literal:"true false null"},A=[q.QSM,q.CNM],D={e:",",eW:!0,eE:!0,c:A,k:z},F={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[q.BE],i:"\\n"},q.inherit(D,{b:/:/})],i:"\\S"},G={b:"\\[",e:"\\]",c:[q.inherit(D)],i:"\\S"};return A.splice(A.length,0,F,G),{c:A,k:z,i:"\\S"}}),hljs.registerLanguage("javascript",function(q){var z="[A-Za-z$_][0-9A-Za-z$_]*",A={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},D={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:q.CNR}],r:0},F={cN:"subst",b:"\\$\\{",e:"\\}",k:A,c:[]},G={cN:"string",b:"`",e:"`",c:[q.BE,F]};F.c=[q.ASM,q.QSM,G,D,q.RM];var H=F.c.concat([q.CBCM,q.CLCM]);return{aliases:["js","jsx"],k:A,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},q.ASM,q.QSM,G,q.CLCM,q.CBCM,D,{b:/[{,]\s*/,r:0,c:[{b:z+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:z,r:0}]}]},{b:"("+q.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[q.CLCM,q.CBCM,q.RM,{cN:"function",b:"(\\(.*?\\)|"+z+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:z},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:A,c:H}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[q.inherit(q.TM,{b:z}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:H}],i:/\[|%/},{b:/\$[(.]/},q.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},q.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("http",function(){var q="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+q,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+q+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:q},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),hljs.registerLanguage("bash",function(q){var z={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},A={cN:"string",b:/"/,e:/"/,c:[q.BE,z,{cN:"variable",b:/\$\(/,e:/\)/,c:[q.BE]}]},D={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\._]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[q.inherit(q.TM,{b:/\w[\w\d_]*/})],r:0},q.HCM,A,D,z]}});
!function(){(function(){function i(pa){function qa(){try{$.doScroll("left")}catch(ya){return void o.setTimeout(qa,50)}ra("poll")}function ra(ya){("readystatechange"!=ya.type||"complete"==s.readyState)&&(("load"==ya.type?o:s)[wa](xa+ya.type,ra,!1),!ta&&(ta=!0)&&pa.call(o,ya.type||ya))}var sa=s.addEventListener,ta=!1,ua=!0,va=sa?"addEventListener":"attachEvent",wa=sa?"removeEventListener":"detachEvent",xa=sa?"":"on";if("complete"==s.readyState)pa.call(o,"lazy");else{if(s.createEventObject&&$.doScroll){try{ua=!o.frameElement}catch(ya){}ua&&qa()}s[va](xa+"DOMContentLoaded",ra,!1),s[va](xa+"readystatechange",ra,!1),o[va](xa+"load",ra,!1)}}function j(){ja&&i(function(){var pa=ma.length;oa(pa?function(){for(var qa=0;qa<pa;++qa)(function(ra){o.setTimeout(function(){o.exports[ma[ra]].apply(o,arguments)},0)})(qa)}:void 0)})}for(var o=window,s=document,$=s.documentElement,_=s.head||s.getElementsByTagName("head")[0]||$,ea="",fa=s.getElementsByTagName("script"),ga=fa.length;0<=--ga;){var ha=fa[ga],ia=ha.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(ia){ea=ia[1]||"",ha.parentNode.removeChild(ha);break}}var ja=!0,ka=[],la=[],ma=[];for(ea.replace(/[?&]([^&=]+)=([^&]+)/g,function(pa,qa,ra){ra=decodeURIComponent(ra),qa=decodeURIComponent(qa),"autorun"==qa?ja=!/^[0fn]/i.test(ra):"lang"==qa?ka.push(ra):"skin"==qa?la.push(ra):"callback"==qa&&ma.push(ra)}),ga=0,ea=ka.length;ga<ea;++ga)(function(){var pa=s.createElement("script");pa.onload=pa.onerror=pa.onreadystatechange=function(){pa&&(!pa.readyState||/loaded|complete/.test(pa.readyState))&&(pa.onerror=pa.onload=pa.onreadystatechange=null,--na,na||o.setTimeout(j,0),pa.parentNode&&pa.parentNode.removeChild(pa),pa=null)},pa.type="text/javascript",pa.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(ka[ga])+".js",_.insertBefore(pa,_.firstChild)})(ka[ga]);for(var na=ka.length,fa=[],ga=0,ea=la.length;ga<ea;++ga)fa.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(la[ga])+".css");(function(pa){function qa(sa){if(sa!==ra){var ta=s.createElement("link");ta.rel="stylesheet",ta.type="text/css",sa+1<ra&&(ta.error=ta.onerror=function(){qa(sa+1)}),ta.href=pa[sa],_.appendChild(ta)}}var ra=pa.length;qa(0)})(fa);var oa=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var pa;return function(){function qa(Na){function Oa($a){var _a=$a.charCodeAt(0);if(92!==_a)return _a;var ab=$a.charAt(1);return(_a=Ya[ab])?_a:"0"<=ab&&"7">=ab?parseInt($a.substring(1),8):"u"===ab||"x"===ab?parseInt($a.substring(2),16):$a.charCodeAt(1)}function Pa($a){return 32>$a?(16>$a?"\\x0":"\\x")+$a.toString(16):($a=String.fromCharCode($a),"\\"===$a||"-"===$a||"]"===$a||"^"===$a?"\\"+$a:$a)}function Qa($a){var _a=$a.substring(1,$a.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);$a=[];var ab="^"===_a[0],bb=["["];ab&&bb.push("^");for(var ab=ab?1:0,cb=_a.length;ab<cb;++ab){var db=_a[ab];if(/\\[bdsw]/i.test(db))bb.push(db);else{var eb,db=Oa(db);ab+2<cb&&"-"===_a[ab+1]?(eb=Oa(_a[ab+2]),ab+=2):eb=db,$a.push([db,eb]),65>eb||122<db||(65>eb||90<db||$a.push([32|Math.max(65,db),32|Math.min(eb,90)]),97>eb||122<db||$a.push([-33&Math.max(97,db),-33&Math.min(eb,122)]))}}for($a.sort(function(fb,gb){return fb[0]-gb[0]||gb[1]-fb[1]}),_a=[],cb=[],ab=0;ab<$a.length;++ab)db=$a[ab],db[0]<=cb[1]+1?cb[1]=Math.max(cb[1],db[1]):_a.push(cb=db);for(ab=0;ab<_a.length;++ab)db=_a[ab],bb.push(Pa(db[0])),db[1]>db[0]&&(db[1]+1>db[0]&&bb.push("-"),bb.push(Pa(db[1])));return bb.push("]"),bb.join("")}function Ra($a){for(var _a=$a.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),ab=_a.length,bb=[],cb=0,db=0;cb<ab;++cb){var eb=_a[cb];"("===eb?++db:"\\"===eb.charAt(0)&&(eb=+eb.substring(1))&&(eb<=db?bb[eb]=-1:_a[cb]=Pa(eb))}for(cb=1;cb<bb.length;++cb)-1===bb[cb]&&(bb[cb]=++Sa);for(db=cb=0;cb<ab;++cb)eb=_a[cb],"("===eb?(++db,bb[db]||(_a[cb]="(?:")):"\\"===eb.charAt(0)&&(eb=+eb.substring(1))&&eb<=db&&(_a[cb]="\\"+bb[eb]);for(cb=0;cb<ab;++cb)"^"===_a[cb]&&"^"!==_a[cb+1]&&(_a[cb]="");if($a.ignoreCase&&Ta)for(cb=0;cb<ab;++cb)eb=_a[cb],$a=eb.charAt(0),2<=eb.length&&"["===$a?_a[cb]=Qa(eb):"\\"!=$a&&(_a[cb]=eb.replace(/[a-zA-Z]/g,function(fb){return fb=fb.charCodeAt(0),"["+String.fromCharCode(-33&fb,32|fb)+"]"}));return _a.join("")}for(var Sa=0,Ta=!1,Ua=!1,Va=0,Wa=Na.length;Va<Wa;++Va){var Xa=Na[Va];if(Xa.ignoreCase)Ua=!0;else if(/[a-z]/i.test(Xa.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){Ta=!0,Ua=!1;break}}for(var Ya={b:8,t:9,n:10,v:11,f:12,r:13},Za=[],Va=0,Wa=Na.length;Va<Wa;++Va){if(Xa=Na[Va],Xa.global||Xa.multiline)throw Error(""+Xa);Za.push("(?:"+Ra(Xa)+")")}return new RegExp(Za.join("|"),Ua?"gi":"g")}function ra(Na,Oa){function Pa(Va){var Wa=Va.nodeType;if(1!=Wa)(3==Wa||4==Wa)&&(Wa=Va.nodeValue,Wa.length&&(Wa=Oa?Wa.replace(/\r\n?/g,"\n"):Wa.replace(/[ \t\r\n]+/g," "),Ra[Ua]=Wa,Ta[Ua<<1]=Sa,Sa+=Wa.length,Ta[1|Ua++<<1]=Va));else if(!Qa.test(Va.className)){for(Wa=Va.firstChild;Wa;Wa=Wa.nextSibling)Pa(Wa);Wa=Va.nodeName.toLowerCase(),("br"===Wa||"li"===Wa)&&(Ra[Ua]="\n",Ta[Ua<<1]=Sa++,Ta[1|Ua++<<1]=Va)}}var Qa=/(?:^|\s)nocode(?:\s|$)/,Ra=[],Sa=0,Ta=[],Ua=0;return Pa(Na),{a:Ra.join("").replace(/\n$/,""),c:Ta}}function sa(Na,Oa,Pa,Qa,Ra){Pa&&(Na={h:Na,l:1,j:null,m:null,a:Pa,c:null,i:Oa,g:null},Qa(Na),Ra.push.apply(Ra,Na.g))}function ta(Na){for(var Oa=void 0,Pa=Na.firstChild;Pa;Pa=Pa.nextSibling)var Qa=Pa.nodeType,Oa=1===Qa?Oa?Na:Pa:3===Qa?Ja.test(Pa.nodeValue)?Na:Oa:Oa;return Oa===Na?void 0:Oa}function ua(Na,Oa){function Pa(Ta){for(var Ua=Ta.i,Va=Ta.h,Wa=[Ua,"pln"],Xa=0,Ya=Ta.a.match(Ra)||[],Za={},$a=0,_a=Ya.length;$a<_a;++$a){var db,ab=Ya[$a],bb=Za[ab],cb=void 0;if("string"==typeof bb)db=!1;else{var eb=Qa[ab.charAt(0)];if(eb)cb=ab.match(eb[1]),bb=eb[0];else{for(db=0;db<Sa;++db)if(eb=Oa[db],cb=ab.match(eb[1])){bb=eb[0];break}cb||(bb="pln")}!(db=5<=bb.length&&"lang-"===bb.substring(0,5))||cb&&"string"==typeof cb[1]||(db=!1,bb="src"),db||(Za[ab]=bb)}if(eb=Xa,Xa+=ab.length,db){db=cb[1];var fb=ab.indexOf(db),gb=fb+db.length;cb[2]&&(gb=ab.length-cb[2].length,fb=gb-db.length),bb=bb.substring(5),sa(Va,Ua+eb,ab.substring(0,fb),Pa,Wa),sa(Va,Ua+eb+fb,db,ya(bb,db),Wa),sa(Va,Ua+eb+gb,ab.substring(gb),Pa,Wa)}else Wa.push(Ua+eb,bb)}Ta.g=Wa}var Ra,Qa={};(function(){for(var Ta=Na.concat(Oa),Ua=[],Va={},Wa=0,Xa=Ta.length;Wa<Xa;++Wa){var Ya=Ta[Wa],Za=Ya[3];if(Za)for(var $a=Za.length;0<=--$a;)Qa[Za.charAt($a)]=Ya;Ya=Ya[1],Za=""+Ya,Va.hasOwnProperty(Za)||(Ua.push(Ya),Va[Za]=null)}Ua.push(/[\0-\uffff]/),Ra=qa(Ua)})();var Sa=Oa.length;return Pa}function va(Na){var Oa=[],Pa=[];Na.tripleQuotedStrings?Oa.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):Na.multiLineStrings?Oa.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):Oa.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),Na.verbatimStrings&&Pa.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var Qa=Na.hashComments;if(Qa&&(Na.cStyleComments?(1<Qa?Oa.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):Oa.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),Pa.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):Oa.push(["com",/^#[^\r\n]*/,null,"#"])),Na.cStyleComments&&(Pa.push(["com",/^\/\/[^\r\n]*/,null]),Pa.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null])),Qa=Na.regexLiterals){var Ra=(Qa=1<Qa?"":"\n\r")?".":"[\\S\\s]";Pa.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*"+Qa+"])(?:[^/\\x5B\\x5C"+Qa+"]|\\x5C"+Ra+"|\\x5B(?:[^\\x5C\\x5D"+Qa+"]|\\x5C"+Ra+")*(?:\\x5D|$))+/)")])}return(Qa=Na.types)&&Pa.push(["typ",Qa]),Qa=(""+Na.keywords).replace(/^ | $/g,""),Qa.length&&Pa.push(["kwd",new RegExp("^(?:"+Qa.replace(/[\s,]+/g,"|")+")\\b"),null]),Oa.push(["pln",/^\s+/,null," \r\n\t\xA0"]),Qa="^.[^\\s\\w.$@'\"`/\\\\]*",Na.regexLiterals&&(Qa+="(?!s*/)"),Pa.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(Qa),null]),ua(Oa,Pa)}function wa(Na,Oa,Pa){function Qa($a){var _a=$a.nodeType;if(1==_a&&!Sa.test($a.className)){if("br"===$a.nodeName)Ra($a),$a.parentNode&&$a.parentNode.removeChild($a);else for($a=$a.firstChild;$a;$a=$a.nextSibling)Qa($a);}else if((3==_a||4==_a)&&Pa){var ab=$a.nodeValue,bb=ab.match(Ta);bb&&(_a=ab.substring(0,bb.index),$a.nodeValue=_a,(ab=ab.substring(bb.index+bb[0].length))&&$a.parentNode.insertBefore(Ua.createTextNode(ab),$a.nextSibling),Ra($a),_a||$a.parentNode.removeChild($a))}}function Ra($a){function _a(bb,cb){var db=cb?bb.cloneNode(!1):bb,eb=bb.parentNode;if(eb){var eb=_a(eb,1),fb=bb.nextSibling;eb.appendChild(db);for(var gb=fb;gb;gb=fb)fb=gb.nextSibling,eb.appendChild(gb)}return db}for(;!$a.nextSibling;)if($a=$a.parentNode,!$a)return;$a=_a($a.nextSibling,0);for(var ab;(ab=$a.parentNode)&&1===ab.nodeType;)$a=ab;Wa.push($a)}for(var Sa=/(?:^|\s)nocode(?:\s|$)/,Ta=/\r\n?|\n/,Ua=Na.ownerDocument,Va=Ua.createElement("li");Na.firstChild;)Va.appendChild(Na.firstChild);for(var Wa=[Va],Xa=0;Xa<Wa.length;++Xa)Qa(Wa[Xa]);Oa===(0|Oa)&&Wa[0].setAttribute("value",Oa);var Ya=Ua.createElement("ol");Ya.className="linenums",Oa=Math.max(0,0|Oa-1)||0;for(var Xa=0,Za=Wa.length;Xa<Za;++Xa)Va=Wa[Xa],Va.className="L"+(Xa+Oa)%10,Va.firstChild||Va.appendChild(Ua.createTextNode("\xA0")),Ya.appendChild(Va);Na.appendChild(Ya)}function xa(Na,Oa){for(var Pa=Oa.length;0<=--Pa;){var Qa=Oa[Pa];La.hasOwnProperty(Qa)?Aa.console&&console.warn("cannot override language handler %s",Qa):La[Qa]=Na}}function ya(Na,Oa){return Na&&La.hasOwnProperty(Na)||(Na=/^\s*</.test(Oa)?"default-markup":"default-code"),La[Na]}function za(Na){var Oa=Na.j;try{var Pa=ra(Na.h,Na.l),Qa=Pa.a;Na.a=Qa,Na.c=Pa.c,Na.i=0,ya(Oa,Qa)(Na);var Ra=/\bMSIE\s(\d+)/.exec(navigator.userAgent),Ra=Ra&&8>=+Ra[1],Oa=/\n/g,Sa=Na.a,Ta=Sa.length,Pa=0,Ua=Na.c,Va=Ua.length,Qa=0,Wa=Na.g,Xa=Wa.length,Ya=0;Wa[Xa]=Ta;var Za,$a;for($a=Za=0;$a<Xa;)Wa[$a]===Wa[$a+2]?$a+=2:(Wa[Za++]=Wa[$a++],Wa[Za++]=Wa[$a++]);for(Xa=Za,$a=Za=0;$a<Xa;){for(var _a=Wa[$a],ab=Wa[$a+1],bb=$a+2;bb+2<=Xa&&Wa[bb+1]===ab;)bb+=2;Wa[Za++]=_a,Wa[Za++]=ab,$a=bb}Wa.length=Za;var cb=Na.h;Na="",cb&&(Na=cb.style.display,cb.style.display="none");try{for(;Qa<Va;){var gb,db=Ua[Qa+2]||Ta,eb=Wa[Ya+2]||Ta,bb=Math.min(db,eb),fb=Ua[Qa+1];if(1!==fb.nodeType&&(gb=Sa.substring(Pa,bb))){Ra&&(gb=gb.replace(Oa,"\r")),fb.nodeValue=gb;var hb=fb.ownerDocument,ib=hb.createElement("span");ib.className=Wa[Ya+1];var jb=fb.parentNode;jb.replaceChild(ib,fb),ib.appendChild(fb),Pa<db&&(Ua[Qa+1]=fb=hb.createTextNode(Sa.substring(bb,db)),jb.insertBefore(fb,ib.nextSibling))}Pa=bb,Pa>=db&&(Qa+=2),Pa>=eb&&(Ya+=2)}}finally{cb&&(cb.style.display=Na)}}catch(kb){Aa.console&&console.log(kb&&kb.stack||kb)}}var Aa=window,Ba=["break,continue,do,else,for,if,return,while"],Ca=[[Ba,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],Da=[Ca,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],Ea=[Ca,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],Fa=[Ca,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],Ca=[Ca,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],Ga=[Ba,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],Ha=[Ba,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],Ba=[Ba,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],Ia=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,Ja=/\S/,Ka=va({keywords:[Da,Fa,Ea,Ca,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",Ga,Ha,Ba],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),La={};xa(Ka,["default-code"]),xa(ua([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" ")),xa(ua([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),xa(ua([],[["atv",/^[\s\S]+/]]),["uq.val"]),xa(va({keywords:Da,hashComments:!0,cStyleComments:!0,types:Ia}),"c cc cpp cxx cyc m".split(" ")),xa(va({keywords:"null,true,false"}),["json"]),xa(va({keywords:Fa,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:Ia}),["cs"]),xa(va({keywords:Ea,cStyleComments:!0}),["java"]),xa(va({keywords:Ba,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),xa(va({keywords:Ga,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),xa(va({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),xa(va({keywords:Ha,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),xa(va({keywords:Ca,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),xa(va({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),xa(ua([],[["str",/^[\s\S]+/]]),["regex"]);var Ma=Aa.PR={createSimpleLexer:ua,registerLangHandler:xa,sourceDecorator:va,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(Na,Oa,Pa){Pa=Pa||!1,Oa=Oa||null;var Qa=document.createElement("div");return Qa.innerHTML="<pre>"+Na+"</pre>",Qa=Qa.firstChild,Pa&&wa(Qa,Pa,!0),za({j:Oa,m:Pa,h:Qa,l:1,a:null,i:null,c:null,g:null}),Qa.innerHTML},prettyPrint:pa=pa=function(Na,Oa){function Pa(){for(var db=Aa.PR_SHOULD_USE_CONTINUATION?Wa.now()+250:1/0;Xa<Sa.length&&Wa.now()<db;Xa++){for(var eb=Sa[Xa],fb=cb,gb=eb;gb=gb.previousSibling;){var hb=gb.nodeType,ib=(7===hb||8===hb)&&gb.nodeValue;if(ib?!/^\??prettify\b/.test(ib):3!==hb||/\S/.test(gb.nodeValue))break;if(ib){fb={},ib.replace(/\b(\w+)=([\w:.%+-]+)/g,function(lb,mb,nb){fb[mb]=nb});break}}if(gb=eb.className,(fb!==cb||Za.test(gb))&&!$a.test(gb)){for(hb=!1,ib=eb.parentNode;ib;ib=ib.parentNode)if(bb.test(ib.tagName)&&ib.className&&Za.test(ib.className)){hb=!0;break}if(!hb){if(eb.className+=" prettyprinted",hb=fb.lang,!hb){var jb,hb=gb.match(Ya);!hb&&(jb=ta(eb))&&ab.test(jb.tagName)&&(hb=jb.className.match(Ya)),hb&&(hb=hb[1])}if(_a.test(eb.tagName))ib=1;else var ib=eb.currentStyle,kb=Ra.defaultView,ib=(ib=ib?ib.whiteSpace:kb&&kb.getComputedStyle?kb.getComputedStyle(eb,null).getPropertyValue("white-space"):0)&&"pre"===ib.substring(0,3);kb=fb.linenums,(kb="true"===kb||+kb)||(kb=!!(kb=gb.match(/\blinenums\b(?::(\d+))?/))&&(kb[1]&&kb[1].length?+kb[1]:!0)),kb&&wa(eb,kb,ib),za({j:hb,h:eb,m:kb,l:ib,a:null,i:null,c:null,g:null})}}}Xa<Sa.length?Aa.setTimeout(Pa,250):"function"==typeof Na&&Na()}for(var Qa=Oa||document.body,Ra=Qa.ownerDocument||document,Qa=[Qa.getElementsByTagName("pre"),Qa.getElementsByTagName("code"),Qa.getElementsByTagName("xmp")],Sa=[],Ta=0;Ta<Qa.length;++Ta)for(var Ua=0,Va=Qa[Ta].length;Ua<Va;++Ua)Sa.push(Qa[Ta][Ua]);var Qa=null,Wa=Date;Wa.now||(Wa={now:function(){return+new Date}});var Xa=0,Ya=/\blang(?:uage)?-([\w.]+)(?!\S)/,Za=/\bprettyprint\b/,$a=/\bprettyprinted\b/,_a=/pre|xmp/i,ab=/^code$/i,bb=/^(?:pre|code|xmp)$/i,cb={};Pa()}},Da=Aa.define;"function"==typeof Da&&Da.amd&&Da("google-code-prettify",[],function(){return Ma})}(),pa}();na||o.setTimeout(j,0)})()}();
var calendars=document.getElementsByClassName("flatpickr").flatpickr();flatpickr("#example-defaultDate",{enableTime:!0,defaultDate:1477697199863}),document.getElementById("disableRange").flatpickr({disable:[{from:"2016-08-16",to:"2016-08-19"},"2016-08-24",new Date().fp_incr(30)// 30 days from now
]}),document.getElementById("disableOddDays").flatpickr({disable:[function(a){return a.getDate()%2}// disable odd days
]}),document.getElementById("enableNextSeven").flatpickr({enable:[{from:"today",to:new Date().fp_incr(7)}]}),document.getElementById("enableCustom").flatpickr({enable:[function(a){return 0!=a.getDay()%6&&2016===a.getFullYear()}]}),flatpickr("#range-disabled",{mode:"range",disable:[function(a){return 0==a.getDate()%6}]});// Event API
var events=document.getElementById("events");function showHook(a){return function(b,c){events.innerHTML+="<b>"+a+"</b> (<code>"+b+"</code>, <code>"+c+"</code> )<br>",events.scrollTop=events.offsetTop}}document.getElementById("events-api-example").flatpickr({minDate:"today",enableTime:!0,onChange:showHook("onChange"),onOpen:showHook("onOpen"),onClose:showHook("onClose"),onMonthChange:showHook("onMonthChange"),onYearChange:showHook("onYearChange"),onReady:showHook("onReady")}),flatpickr("#dayCreate",{onDayCreate:function(a,b,c,d){0.15>Math.random()?d.innerHTML+="<span class='event'></span>":0.85<Math.random()&&(d.innerHTML+="<span class='event busy'></span>")}}),document.getElementById("fiscal").flatpickr({weekNumbers:!0,getWeek:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(7),b.setDate(28);var d=Math.floor(Math.round((c-b)/8.64e7)/7)+2;return 1>d&&(d=52+d),"FW"+("0"+d).slice(-2)}});// Date format
var formatOutput=document.getElementById("dateFormatOutput"),fp=new Flatpickr(document.createElement("input")),now=new Date;document.getElementById("dateFormatComposer").addEventListener("keyup",function(a){formatOutput.textContent=fp.formatDate(a.target.value,now)}),hljs.initHighlighting();
const theme_sel=document.getElementById("themes"),stylesheet=document.getElementById("cal_style"),themes=["dark","material_blue","material_red","material_orange","material_green","airbnb","confetti"];//theme_sel.href = "dist/flatpickr" + themes[Math.floor(Math.random()*themes.length)] + ".min.css";
for(let a=0;a<themes.length;a++){const b=document.createElement("option");b.className=themes[a],b.value=themes[a],b.innerText=themes[a].replace(/_/g," "),theme_sel.appendChild(b)}theme_sel.addEventListener("change",function(a){return theme_sel.blur(),a.target.value&&"default"!==a.target.value?void(stylesheet.href="bower_components/flatpickr/dist/themes/"+a.target.value+".css"):stylesheet.href="bower_components/flatpickr/dist/flatpickr.css"});
