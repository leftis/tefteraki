/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.colordialog={requires:["dialog"],init:function(e){e.addCommand("colordialog",new CKEDITOR.dialogCommand("colordialog")),CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js")}},CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);