/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * Contains UI features related to an editor instance.
 * @constructor
 * @param {CKEDITOR.editor} editor The editor instance.
 * @example
 */
CKEDITOR.ui=function(e){return e.ui?e.ui:(this._={handlers:{},items:{},editor:e},this)},CKEDITOR.ui.prototype={add:function(e,t,n){this._.items[e]={type:t,command:n.command||null,args:Array.prototype.slice.call(arguments,2)}},create:function(e){var t=this._.items[e],n=t&&this._.handlers[t.type],r=t&&t.command&&this._.editor.getCommand(t.command),i=n&&n.create.apply(this,t.args);return t&&(i=CKEDITOR.tools.extend(i,this._.editor.skin[t.type],!0)),r&&r.uiItems.push(i),i},addHandler:function(e,t){this._.handlers[e]=t}},CKEDITOR.event.implementOn(CKEDITOR.ui);