/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("htmlwriter"),CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base(),this.indentationChars="	",this.selfClosingEnd=" />",this.lineBreakChars="\n",this.forceSimpleAmpersand=0,this.sortAttributes=1,this._.indent=0,this._.indentation="",this._.inPre=0,this._.rules={};var e=CKEDITOR.dtd;for(var t in CKEDITOR.tools.extend({},e.$nonBodyContent,e.$block,e.$listItem,e.$tableContent))this.setRules(t,{indent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:!e[t]["#"],breakAfterClose:1});this.setRules("br",{breakAfterOpen:1}),this.setRules("title",{indent:0,breakAfterOpen:0}),this.setRules("style",{indent:0,breakBeforeClose:1}),this.setRules("pre",{indent:0})},proto:{openTag:function(e,t){var n=this._.rules[e];this._.indent?this.indentation():n&&n.breakBeforeOpen&&(this.lineBreak(),this.indentation()),this._.output.push("<",e)},openTagClose:function(e,t){var n=this._.rules[e];t?this._.output.push(this.selfClosingEnd):(this._.output.push(">"),n&&n.indent&&(this._.indentation+=this.indentationChars)),n&&n.breakAfterOpen&&this.lineBreak(),e=="pre"&&(this._.inPre=1)},attribute:function(e,t){typeof t=="string"&&(this.forceSimpleAmpersand&&(t=t.replace(/&amp;/g,"&")),t=CKEDITOR.tools.htmlEncodeAttr(t)),this._.output.push(" ",e,'="',t,'"')},closeTag:function(e){var t=this._.rules[e];t&&t.indent&&(this._.indentation=this._.indentation.substr(this.indentationChars.length)),this._.indent?this.indentation():t&&t.breakBeforeClose&&(this.lineBreak(),this.indentation()),this._.output.push("</",e,">"),e=="pre"&&(this._.inPre=0),t&&t.breakAfterClose&&this.lineBreak()},text:function(e){this._.indent&&(this.indentation(),!this._.inPre&&(e=CKEDITOR.tools.ltrim(e))),this._.output.push(e)},comment:function(e){this._.indent&&this.indentation(),this._.output.push("<!--",e,"-->")},lineBreak:function(){!this._.inPre&&this._.output.length>0&&this._.output.push(this.lineBreakChars),this._.indent=1},indentation:function(){this._.inPre||this._.output.push(this._.indentation),this._.indent=0},setRules:function(e,t){var n=this._.rules[e];n?CKEDITOR.tools.extend(n,t,!0):this._.rules[e]=t}}});