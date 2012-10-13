/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * Creates a command class instance.
 * @class Represents a command that can be executed on an editor instance.
 * @param {CKEDITOR.editor} editor The editor instance this command will be
 *		related to.
 * @param {CKEDITOR.commandDefinition} commandDefinition The command
 *		definition.
 * @augments CKEDITOR.event
 * @example
 * var command = new CKEDITOR.command( editor,
 *     {
 *         exec : function( editor )
 *         {
 *             alert( editor.document.getBody().getHtml() );
 *         }
 *     });
 */
CKEDITOR.command=function(e,t){this.uiItems=[],this.exec=function(n){return this.state==CKEDITOR.TRISTATE_DISABLED?!1:(this.editorFocus&&e.focus(),this.fire("exec")===!0?!0:t.exec.call(this,e,n)!==!1)},this.refresh=function(){return this.fire("refresh")===!0?!0:t.refresh&&t.refresh.apply(this,arguments)!==!1},CKEDITOR.tools.extend(this,t,{modes:{wysiwyg:1},editorFocus:1,state:CKEDITOR.TRISTATE_OFF}),CKEDITOR.event.call(this)},CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.setState(!this.preserveState||typeof this.previousState=="undefined"?CKEDITOR.TRISTATE_OFF:this.previousState)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(e){return this.state==e?!1:(this.previousState=this.state,this.state=e,this.fire("state"),!0)},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}},CKEDITOR.event.implementOn(CKEDITOR.command.prototype,!0);