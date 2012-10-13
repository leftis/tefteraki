/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileSave plugin.
 */
(function(){var e={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(e){var t=e.element.$.form;if(t)try{t.submit()}catch(n){t.submit.click&&t.submit.click()}}},t="save";CKEDITOR.plugins.add(t,{init:function(n){var r=n.addCommand(t,e);r.modes={wysiwyg:!!n.element.$.form},n.ui.addButton("Save",{label:n.lang.save,command:t})}})})();