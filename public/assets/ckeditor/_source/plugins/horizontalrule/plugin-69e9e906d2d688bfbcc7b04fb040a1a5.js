/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Horizontal Rule plugin.
 */
(function(){var e={canUndo:!1,exec:function(e){var t=e.document.createElement("hr");e.insertElement(t)}},t="horizontalrule";CKEDITOR.plugins.add(t,{init:function(n){n.addCommand(t,e),n.ui.addButton("HorizontalRule",{label:n.lang.horizontalrule,command:t})}})})();