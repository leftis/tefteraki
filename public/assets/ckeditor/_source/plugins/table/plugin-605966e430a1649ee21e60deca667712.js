/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("table",{requires:["dialog"],init:function(e){var t=CKEDITOR.plugins.table,n=e.lang.table;e.addCommand("table",new CKEDITOR.dialogCommand("table")),e.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties")),e.ui.addButton("Table",{label:n.toolbar,command:"table"}),CKEDITOR.dialog.add("table",this.path+"dialogs/table.js"),CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js"),e.addMenuItems&&e.addMenuItems({table:{label:n.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:n.deleteTable,command:"tableDelete",group:"table",order:1}}),e.on("doubleclick",function(e){var t=e.data.element;t.is("table")&&(e.data.dialog="tableProperties")}),e.contextMenu&&e.contextMenu.addListener(function(e,t){if(!e||e.isReadOnly())return null;var n=e.hasAscendant("table",1);return n?{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}:null})}});