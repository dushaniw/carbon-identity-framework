'use strict';(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],d):d(CodeMirror)})(function(d){d.registerHelper("fold","brace",function(e,a){function b(h){for(var c=a.ch,b=0;;)if(c=0>=c?-1:f.lastIndexOf(h,c-1),-1==c){if(1==b)break;b=1;c=f.length}else{if(1==b&&c<a.ch)break;k=e.getTokenTypeAt(d.Pos(g,c+1));if(!/^(comment|string)/.test(k))return c+1;--c}}var g=a.line,f=e.getLine(g),k,
h="{",r="}",l=b("{");null==l&&(h="[",r="]",l=b("["));if(null!=l){var t=1,v=e.lastLine(),m=g;a:for(;m<=v;++m)for(var n=e.getLine(m),c=m==g?l:0;;){var p=n.indexOf(h,c),c=n.indexOf(r,c);0>p&&(p=n.length);0>c&&(c=n.length);c=Math.min(p,c);if(c==n.length)break;if(e.getTokenTypeAt(d.Pos(m,c+1))==k)if(c==p)++t;else if(!--t){var q=m;var u=c;break a}++c}if(null!=q&&(g!=q||u!=l))return{from:d.Pos(g,l),to:d.Pos(q,u)}}});d.registerHelper("fold","import",function(e,a){function b(h){if(h<e.firstLine()||h>e.lastLine())return null;
var a=e.getTokenAt(d.Pos(h,1));/\S/.test(a.string)||(a=e.getTokenAt(d.Pos(h,a.end+1)));if("keyword"!=a.type||"import"!=a.string)return null;var b=h;for(h=Math.min(e.lastLine(),h+10);b<=h;++b){var f=e.getLine(b).indexOf(";");if(-1!=f)return{startCh:a.end,end:d.Pos(b,f)}}}a=a.line;var g=b(a),f;if(!g||b(a-1)||(f=b(a-2))&&f.end.line==a-1)return null;for(f=g.end;;){var k=b(f.line+1);if(null==k)break;f=k.end}return{from:e.clipPos(d.Pos(a,g.startCh+1)),to:f}});d.registerHelper("fold","include",function(e,
a){function b(a){if(a<e.firstLine()||a>e.lastLine())return null;var b=e.getTokenAt(d.Pos(a,1));/\S/.test(b.string)||(b=e.getTokenAt(d.Pos(a,b.end+1)));if("meta"==b.type&&"#include"==b.string.slice(0,8))return b.start+8}a=a.line;var g=b(a);if(null==g||null!=b(a-1))return null;for(var f=a;null!=b(f+1);)++f;return{from:d.Pos(a,g+1),to:e.clipPos(d.Pos(f))}})});