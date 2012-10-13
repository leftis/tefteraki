/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview The "show border" plugin. The command display visible outline
 * border line around all table elements if table doesn't have a none-zero 'border' attribute specified.
 */
(function(){var e="cke_show_border",t,n=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:[".%1 table.%2,",".%1 table.%2 > tr > td, .%1 table.%2 > tr > th,",".%1 table.%2 > tbody > tr > td, .%1 table.%2 > tbody > tr > th,",".%1 table.%2 > thead > tr > td, .%1 table.%2 > thead > tr > th,",".%1 table.%2 > tfoot > tr > td, .%1 table.%2 > tfoot > tr > th","{","border : #d3d3d3 1px dotted","}"]).join("");t=n.replace(/%2/g,e).replace(/%1/g,"cke_show_borders ");var r={preserveState:!0,editorFocus:!1,readOnly:1,exec:function(e){this.toggleState(),this.refresh(e)},refresh:function(e){if(e.document){var t=this.state==CKEDITOR.TRISTATE_ON?"addClass":"removeClass";e.document.getBody()[t]("cke_show_borders")}}};CKEDITOR.plugins.add("showborders",{requires:["wysiwygarea"],modes:{wysiwyg:1},init:function(n){var i=n.addCommand("showborders",r);i.canUndo=!1,n.config.startupShowBorders!==!1&&i.setState(CKEDITOR.TRISTATE_ON),n.addCss(t),n.on("mode",function(){i.state!=CKEDITOR.TRISTATE_DISABLED&&i.refresh(n)},null,null,100),n.on("contentDom",function(){i.state!=CKEDITOR.TRISTATE_DISABLED&&i.refresh(n)}),n.on("removeFormatCleanup",function(t){var r=t.data;n.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&r.is("table")&&(!r.hasAttribute("border")||parseInt(r.getAttribute("border"),10)<=0)&&r.addClass(e)})},afterInit:function(t){var n=t.dataProcessor,r=n&&n.dataFilter,i=n&&n.htmlFilter;r&&r.addRules({elements:{table:function(t){var n=t.attributes,r=n["class"],i=parseInt(n.border,10);(!i||i<=0)&&(!r||r.indexOf(e)==-1)&&(n["class"]=(r||"")+" "+e)}}}),i&&i.addRules({elements:{table:function(t){var n=t.attributes,r=n["class"];r&&(n["class"]=r.replace(e,"").replace(/\s{2}/," ").replace(/^\s+|\s+$/,""))}}})}}),CKEDITOR.on("dialogDefinition",function(t){var n=t.data.name;if(n=="table"||n=="tableProperties"){var r=t.data.definition,i=r.getContents("info"),s=i.get("txtBorder"),o=s.commit;s.commit=CKEDITOR.tools.override(o,function(t){return function(n,r){t.apply(this,arguments);var i=parseInt(this.getValue(),10);r[!i||i<=0?"addClass":"removeClass"](e)}});var u=r.getContents("advanced"),a=u&&u.get("advCSSClasses");a&&(a.setup=CKEDITOR.tools.override(a.setup,function(e){return function(){e.apply(this,arguments),this.setValue(this.getValue().replace(/cke_show_border/,""))}}),a.commit=CKEDITOR.tools.override(a.commit,function(e){return function(t,n){e.apply(this,arguments),parseInt(n.getAttribute("border"),10)||n.addClass("cke_show_border")}}))}})})();