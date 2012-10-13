/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.focusManager} class, which is used
 *		to handle the focus on editor instances..
 */
/**
 * Creates a focusManager class instance.
 * @class Manages the focus activity in an editor instance. This class is to be
 * used mainly by UI elements coders when adding interface elements that need
 * to set the focus state of the editor.
 * @param {CKEDITOR.editor} editor The editor instance.
 * @example
 * var focusManager = <b>new CKEDITOR.focusManager( editor )</b>;
 * focusManager.focus();
 */
CKEDITOR.focusManager=function(e){return e.focusManager?e.focusManager:(this.hasFocus=!1,this._={editor:e},this)},CKEDITOR.focusManager.prototype={focus:function(){this._.timer&&clearTimeout(this._.timer);if(!this.hasFocus){CKEDITOR.currentInstance&&CKEDITOR.currentInstance.focusManager.forceBlur();var e=this._.editor;e.container.getChild(1).addClass("cke_focus"),this.hasFocus=!0,e.fire("focus")}},blur:function(){var e=this;e._.timer&&clearTimeout(e._.timer),e._.timer=setTimeout(function(){delete e._.timer,e.forceBlur()},100)},forceBlur:function(){if(this.hasFocus){var e=this._.editor;e.container.getChild(1).removeClass("cke_focus"),this.hasFocus=!1,e.fire("blur")}}};