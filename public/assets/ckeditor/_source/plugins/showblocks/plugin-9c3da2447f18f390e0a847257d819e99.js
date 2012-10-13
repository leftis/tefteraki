/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview The "showblocks" plugin. Enable it will make all block level
 *               elements being decorated with a border and the element name
 *               displayed on the left-right corner.
 */
(function(){var e=".%2 p,.%2 div,.%2 pre,.%2 address,.%2 blockquote,.%2 h1,.%2 h2,.%2 h3,.%2 h4,.%2 h5,.%2 h6{background-repeat: no-repeat;background-position: top %3;border: 1px dotted gray;padding-top: 8px;padding-%3: 8px;}.%2 p{%1p.png);}.%2 div{%1div.png);}.%2 pre{%1pre.png);}.%2 address{%1address.png);}.%2 blockquote{%1blockquote.png);}.%2 h1{%1h1.png);}.%2 h2{%1h2.png);}.%2 h3{%1h3.png);}.%2 h4{%1h4.png);}.%2 h5{%1h5.png);}.%2 h6{%1h6.png);}",t=/%1/g,n=/%2/g,r=/%3/g,i={readOnly:1,preserveState:!0,editorFocus:!1,exec:function(e){this.toggleState(),this.refresh(e)},refresh:function(e){if(e.document){var t=this.state==CKEDITOR.TRISTATE_ON?"addClass":"removeClass";e.document.getBody()[t]("cke_show_blocks")}}};CKEDITOR.plugins.add("showblocks",{requires:["wysiwygarea"],init:function(s){var o=s.addCommand("showblocks",i);o.canUndo=!1,s.config.startupOutlineBlocks&&o.setState(CKEDITOR.TRISTATE_ON),s.addCss(e.replace(t,"background-image: url("+CKEDITOR.getUrl(this.path)+"images/block_").replace(n,"cke_show_blocks ").replace(r,s.lang.dir=="rtl"?"right":"left")),s.ui.addButton("ShowBlocks",{label:s.lang.showBlocks,command:"showblocks"}),s.on("mode",function(){o.state!=CKEDITOR.TRISTATE_DISABLED&&o.refresh(s)}),s.on("contentDom",function(){o.state!=CKEDITOR.TRISTATE_DISABLED&&o.refresh(s)})}})})();