/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.dom.event} class, which
 *		represents the a native DOM event object.
 */
/**
 * Represents a native DOM event object.
 * @constructor
 * @param {Object} domEvent A native DOM event object.
 * @example
 */
CKEDITOR.dom.event=function(e){this.$=e},CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var e=this.getKey();if(this.$.ctrlKey||this.$.metaKey)e+=CKEDITOR.CTRL;return this.$.shiftKey&&(e+=CKEDITOR.SHIFT),this.$.altKey&&(e+=CKEDITOR.ALT),e},preventDefault:function(e){var t=this.$;t.preventDefault?t.preventDefault():t.returnValue=!1,e&&this.stopPropagation()},stopPropagation:function(){var e=this.$;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},getTarget:function(){var e=this.$.target||this.$.srcElement;return e?new CKEDITOR.dom.node(e):null},getPageOffset:function(){var e=this.getTarget().getDocument().$,t=this.$.pageX||this.$.clientX+(e.documentElement.scrollLeft||e.body.scrollLeft),n=this.$.pageY||this.$.clientY+(e.documentElement.scrollTop||e.body.scrollTop);return{x:t,y:n}}},CKEDITOR.CTRL=1114112,CKEDITOR.SHIFT=2228224,CKEDITOR.ALT=4456448;