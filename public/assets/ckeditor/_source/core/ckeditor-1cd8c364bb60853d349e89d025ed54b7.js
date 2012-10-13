/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Contains the third and last part of the {@link CKEDITOR} object
 *		definition.
 */
// Remove the CKEDITOR.loadFullCore reference defined on ckeditor_basic.
delete CKEDITOR.loadFullCore,CKEDITOR.instances={},CKEDITOR.document=new CKEDITOR.dom.document(document),CKEDITOR.add=function(e){CKEDITOR.instances[e.name]=e,e.on("focus",function(){CKEDITOR.currentInstance!=e&&(CKEDITOR.currentInstance=e,CKEDITOR.fire("currentInstance"))}),e.on("blur",function(){CKEDITOR.currentInstance==e&&(CKEDITOR.currentInstance=null,CKEDITOR.fire("currentInstance"))})},CKEDITOR.remove=function(e){delete CKEDITOR.instances[e.name]},CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")}),CKEDITOR.loader.load("core/_bootstrap"),CKEDITOR.TRISTATE_ON=1,CKEDITOR.TRISTATE_OFF=2,CKEDITOR.TRISTATE_DISABLED=0;