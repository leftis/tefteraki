/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Plugin definition for the a11yhelp, which provides a dialog
 * with accessibility related help.
 */
(function(){var e="a11yhelp",t="a11yHelp";CKEDITOR.plugins.add(e,{requires:["dialog"],availableLangs:{cs:1,cy:1,da:1,de:1,el:1,en:1,eo:1,fa:1,fi:1,fr:1,gu:1,he:1,it:1,ku:1,mk:1,nb:1,nl:1,no:1,"pt-br":1,ro:1,tr:1,ug:1,vi:1,"zh-cn":1},init:function(e){var n=this;e.addCommand(t,{exec:function(){var r=e.langCode;r=n.availableLangs[r]?r:"en",CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(n.path+"lang/"+r+".js"),function(){CKEDITOR.tools.extend(e.lang,n.langEntries[r]),e.openDialog(t)})},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:!1}),CKEDITOR.dialog.add(t,this.path+"dialogs/a11yhelp.js")}})})();