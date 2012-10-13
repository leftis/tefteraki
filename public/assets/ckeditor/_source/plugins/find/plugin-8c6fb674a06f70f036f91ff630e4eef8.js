/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("find",{requires:["dialog"],init:function(e){var t=CKEDITOR.plugins.find;e.ui.addButton("Find",{label:e.lang.findAndReplace.find,command:"find"});var n=e.addCommand("find",new CKEDITOR.dialogCommand("find"));n.canUndo=!1,n.readOnly=1,e.ui.addButton("Replace",{label:e.lang.findAndReplace.replace,command:"replace"});var r=e.addCommand("replace",new CKEDITOR.dialogCommand("replace"));r.canUndo=!1,CKEDITOR.dialog.add("find",this.path+"dialogs/find.js"),CKEDITOR.dialog.add("replace",this.path+"dialogs/find.js")},requires:["styles"]}),CKEDITOR.config.find_highlight={element:"span",styles:{"background-color":"#004",color:"#fff"}};