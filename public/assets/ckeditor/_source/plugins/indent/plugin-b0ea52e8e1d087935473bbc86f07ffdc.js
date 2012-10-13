/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Increse and decrease indent commands.
 */
(function(){function r(t){if(t.editor.readOnly)return null;var n=t.editor,r=t.data.path,i=r&&r.contains(e),o=r.block||r.blockLimit;if(i)return this.setState(CKEDITOR.TRISTATE_OFF);if(!this.useIndentClasses&&this.name=="indent")return this.setState(CKEDITOR.TRISTATE_OFF);if(!o)return this.setState(CKEDITOR.TRISTATE_DISABLED);if(this.useIndentClasses){var u=o.$.className.match(this.classNameRegex),a=0;return u&&(u=u[1],a=this.indentClassMap[u]),this.name=="outdent"&&!a||this.name=="indent"&&a==n.config.indentClasses.length?this.setState(CKEDITOR.TRISTATE_DISABLED):this.setState(CKEDITOR.TRISTATE_OFF)}var f=parseInt(o.getStyle(s(o)),10);return isNaN(f)&&(f=0),f<=0?this.setState(CKEDITOR.TRISTATE_DISABLED):this.setState(CKEDITOR.TRISTATE_OFF)}function i(e,t){this.name=t,this.useIndentClasses=e.config.indentClasses&&e.config.indentClasses.length>0;if(this.useIndentClasses){this.classNameRegex=new RegExp("(?:^|\\s+)("+e.config.indentClasses.join("|")+")(?=$|\\s)"),this.indentClassMap={};for(var n=0;n<e.config.indentClasses.length;n++)this.indentClassMap[e.config.indentClasses[n]]=n+1}this.startDisabled=t=="outdent"}function s(e,t){return(t||e.getComputedStyle("direction"))=="ltr"?"margin-left":"margin-right"}function o(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.is("li")}var e={ol:1,ul:1},t=CKEDITOR.dom.walker.whitespaces(!0),n=CKEDITOR.dom.walker.bookmark(!1,!0);i.prototype={exec:function(r){function a(s){var o=d.startContainer,a=d.endContainer;while(o&&!o.getParent().equals(s))o=o.getParent();while(a&&!a.getParent().equals(s))a=a.getParent();if(!o||!a)return;var f=o,l=[],c=!1;while(!c)f.equals(a)&&(c=!0),l.push(f),f=f.getNext();if(l.length<1)return;var h=s.getParents(!0);for(var p=0;p<h.length;p++)if(h[p].getName&&e[h[p].getName()]){s=h[p];break}var v=i.name=="indent"?1:-1,m=l[0],g=l[l.length-1],y=CKEDITOR.plugins.list.listToArray(s,u),b=y[g.getCustomData("listarray_index")].indent;for(p=m.getCustomData("listarray_index");p<=g.getCustomData("listarray_index");p++){y[p].indent+=v;if(v>0){var w=y[p].parent;y[p].parent=new CKEDITOR.dom.element(w.getName(),w.getDocument())}}for(p=g.getCustomData("listarray_index")+1;p<y.length&&y[p].indent>b;p++)y[p].indent+=v;var E=CKEDITOR.plugins.list.arrayToList(y,u,null,r.config.enterMode,s.getDirection());if(i.name=="outdent"){var S;if((S=s.getParent())&&S.is("li")){var x=E.listNode.getChildren(),T=[],N=x.count(),C;for(p=N-1;p>=0;p--)(C=x.getItem(p))&&C.is&&C.is("li")&&T.push(C)}}E&&E.listNode.replace(s);if(T&&T.length)for(p=0;p<T.length;p++){var k=T[p],L=k;while((L=L.getNext())&&L.is&&L.getName()in e)CKEDITOR.env.ie&&!k.getFirst(function(e){return t(e)&&n(e)})&&k.append(d.document.createText(" ")),k.append(L);k.insertAfter(S)}}function f(){var e=d.createIterator(),t=r.config.enterMode;e.enforceRealBlocks=!0,e.enlargeBr=t!=CKEDITOR.ENTER_BR;var n;while(n=e.getNextParagraph(t==CKEDITOR.ENTER_P?"p":"div"))l(n)}function l(e,t){if(e.getCustomData("indent_processed"))return!1;if(i.useIndentClasses){var n=e.$.className.match(i.classNameRegex),o=0;n&&(n=n[1],o=i.indentClassMap[n]),i.name=="outdent"?o--:o++;if(o<0)return!1;o=Math.min(o,r.config.indentClasses.length),o=Math.max(o,0),e.$.className=CKEDITOR.tools.ltrim(e.$.className.replace(i.classNameRegex,"")),o>0&&e.addClass(r.config.indentClasses[o-1])}else{var a=s(e,t),f=parseInt(e.getStyle(a),10);isNaN(f)&&(f=0);var l=r.config.indentOffset||40;f+=(i.name=="indent"?1:-1)*l;if(f<0)return!1;f=Math.max(f,0),f=Math.ceil(f/l)*l,e.setStyle(a,f?f+(r.config.indentUnit||"px"):""),e.getAttribute("style")===""&&e.removeAttribute("style")}return CKEDITOR.dom.element.setMarker(u,e,"indent_processed",1),!0}var i=this,u={},c=r.getSelection(),h=c.createBookmarks(1),p=c&&c.getRanges(1),d,v=p.createIterator();while(d=v.getNextRange()){var m=d.getCommonAncestor(),g=m;while(g&&(g.type!=CKEDITOR.NODE_ELEMENT||!e[g.getName()]))g=g.getParent();if(!g){var y=d.getEnclosedNode();y&&y.type==CKEDITOR.NODE_ELEMENT&&y.getName()in e&&(d.setStartAt(y,CKEDITOR.POSITION_AFTER_START),d.setEndAt(y,CKEDITOR.POSITION_BEFORE_END),g=y)}if(g&&d.startContainer.type==CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in e){var b=new CKEDITOR.dom.walker(d);b.evaluator=o,d.startContainer=b.next()}g&&d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in e&&(b=new CKEDITOR.dom.walker(d),b.evaluator=o,d.endContainer=b.previous());if(g){var w=g.getFirst(o),E=!!w.getNext(o),S=d.startContainer,x=w.equals(S)||w.contains(S);(!x||i.name!="indent"&&!i.useIndentClasses&&!parseInt(g.getStyle(s(g)),10)||!l(g,!E&&w.getDirection()))&&a(g)}else f()}CKEDITOR.dom.element.clearAllMarkers(u),r.forceNextSelectionCheck(),c.selectBookmarks(h)}},CKEDITOR.plugins.add("indent",{init:function(e){var t=e.addCommand("indent",new i(e,"indent")),n=e.addCommand("outdent",new i(e,"outdent"));e.ui.addButton("Indent",{label:e.lang.indent,command:"indent"}),e.ui.addButton("Outdent",{label:e.lang.outdent,command:"outdent"}),e.on("selectionChange",CKEDITOR.tools.bind(r,t)),e.on("selectionChange",CKEDITOR.tools.bind(r,n)),(CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat)&&e.addCss("ul,ol{	margin-left: 0px;	padding-left: 40px;}"),e.on("dirChanged",function(t){var n=new CKEDITOR.dom.range(e.document);n.setStartBefore(t.data.node),n.setEndAfter(t.data.node);var r=new CKEDITOR.dom.walker(n),i;while(i=r.next())if(i.type==CKEDITOR.NODE_ELEMENT){if(!i.equals(t.data.node)&&i.getDirection()){n.setStartAfter(i),r=new CKEDITOR.dom.walker(n);continue}var s=e.config.indentClasses;if(s){var o=t.data.dir=="ltr"?["_rtl",""]:["","_rtl"];for(var u=0;u<s.length;u++)i.hasClass(s[u]+o[0])&&(i.removeClass(s[u]+o[0]),i.addClass(s[u]+o[1]))}var a=i.getStyle("margin-right"),f=i.getStyle("margin-left");a?i.setStyle("margin-left",a):i.removeStyle("margin-left"),f?i.setStyle("margin-right",f):i.removeStyle("margin-right")}})},requires:["domiterator","list"]})})();