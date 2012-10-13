/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("about",{requires:["dialog"],init:function(e){var t=e.addCommand("about",new CKEDITOR.dialogCommand("about"));t.modes={wysiwyg:1,source:1},t.canUndo=!1,t.readOnly=1,e.ui.addButton("About",{label:e.lang.about.title,command:"about"}),CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}});