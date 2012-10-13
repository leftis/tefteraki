/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Horizontal Page Break
 */
// Register a plugin named "newpage".
CKEDITOR.plugins.add("newpage",{init:function(e){e.addCommand("newpage",{modes:{wysiwyg:1,source:1},exec:function(e){var t=this;e.setData(e.config.newpage_html||"",function(){setTimeout(function(){e.fire("afterCommandExec",{name:"newpage",command:t}),e.selectionChange()},200)}),e.focus()},async:!0}),e.ui.addButton("NewPage",{label:e.lang.newPage,command:"newpage"})}});