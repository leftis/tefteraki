/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file AutoGrow plugin
 */
(function(){function e(e){var t=e.getStyle("overflow-y"),n=e.getDocument(),r=CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">'+(CKEDITOR.env.webkit?"&nbsp;":"")+"</span>",n);n[CKEDITOR.env.ie?"getBody":"getDocumentElement"]().append(r);var i=r.getDocumentPosition(n).y+r.$.offsetHeight;return r.remove(),e.setStyle("overflow-y",t),i}function t(e){var t=e.document,n=t.getBody(),r=t.getDocumentElement();return t.$.compatMode=="BackCompat"?n:r}var n=function(n){if(!n.window)return;var r=t(n),i=n.window.getViewPaneSize().height,s=e(r);s+=n.config.autoGrow_bottomSpace||0;var o=n.config.autoGrow_minHeight!=undefined?n.config.autoGrow_minHeight:200,u=n.config.autoGrow_maxHeight||Infinity;s=Math.max(s,o),s=Math.min(s,u),s!=i&&(s=n.fire("autoGrow",{currentHeight:i,newHeight:s}).newHeight,n.resize(n.container.getStyle("width"),s,!0)),r.$.scrollHeight>r.$.clientHeight&&s<u?r.setStyle("overflow-y","hidden"):r.removeStyle("overflow-y")};CKEDITOR.plugins.add("autogrow",{init:function(e){e.addCommand("autogrow",{exec:n,modes:{wysiwyg:1},readOnly:1,canUndo:!1,editorFocus:!1});var r={contentDom:1,key:1,selectionChange:1,insertElement:1,mode:1};e.config.autoGrow_onStartup&&(r.instanceReady=1);for(var i in r)e.on(i,function(t){var r=e.getCommand("maximize");t.editor.mode=="wysiwyg"&&(!r||r.state!=CKEDITOR.TRISTATE_ON)&&setTimeout(function(){n(t.editor),n(t.editor)},100)});e.on("beforeCommandExec",function(r){if(r.data.name=="maximize"&&r.editor.mode=="wysiwyg")if(r.data.command.state==CKEDITOR.TRISTATE_OFF){var i=t(e);i.removeStyle("overflow")}else n(e)})}})})();