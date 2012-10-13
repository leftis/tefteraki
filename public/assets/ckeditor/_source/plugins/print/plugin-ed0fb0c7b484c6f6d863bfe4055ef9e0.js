/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Print Plugin
 */
CKEDITOR.plugins.add("print",{init:function(e){var t="print",n=e.addCommand(t,CKEDITOR.plugins.print);e.ui.addButton("Print",{label:e.lang.print,command:t})}}),CKEDITOR.plugins.print={exec:function(e){if(CKEDITOR.env.opera)return;CKEDITOR.env.gecko?e.window.$.print():e.document.$.execCommand("Print")},canUndo:!1,readOnly:1,modes:{wysiwyg:!CKEDITOR.env.opera}};