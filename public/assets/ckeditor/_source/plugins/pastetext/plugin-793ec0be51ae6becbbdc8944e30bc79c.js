/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Paste as plain text plugin
 */
(function(){var e={exec:function(e){var t=CKEDITOR.tools.tryThese(function(){var e=window.clipboardData.getData("Text");if(!e)throw 0;return e});return t?(e.fire("paste",{text:t}),!0):(e.openDialog("pastetext"),!1)}};CKEDITOR.plugins.add("pastetext",{init:function(t){var n="pastetext",r=t.addCommand(n,e);t.ui.addButton("PasteText",{label:t.lang.pasteText.button,command:n}),CKEDITOR.dialog.add(n,CKEDITOR.getUrl(this.path+"dialogs/pastetext.js")),t.config.forcePasteAsPlainText&&(t.on("beforeCommandExec",function(e){var n=e.data.commandData;e.data.name=="paste"&&n!="html"&&(t.execCommand("pastetext"),e.cancel())},null,null,0),t.on("beforePaste",function(e){e.data.mode="text"})),t.on("pasteState",function(e){t.getCommand("pastetext").setState(e.data)})},requires:["clipboard"]})})();