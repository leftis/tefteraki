/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.dom.document} class, which
 *		represents a DOM document.
 */
/**
 * Represents a DOM window.
 * @constructor
 * @augments CKEDITOR.dom.domObject
 * @param {Object} domWindow A native DOM window.
 * @example
 * var document = new CKEDITOR.dom.window( window );
 */
CKEDITOR.dom.window=function(e){CKEDITOR.dom.domObject.call(this,e)},CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){CKEDITOR.env.webkit&&this.$.parent&&this.$.parent.focus(),this.$.focus()},getViewPaneSize:function(){var e=this.$.document,t=e.compatMode=="CSS1Compat";return{width:(t?e.documentElement.clientWidth:e.body.clientWidth)||0,height:(t?e.documentElement.clientHeight:e.body.clientHeight)||0}},getScrollPosition:function(){var e=this.$;if("pageXOffset"in e)return{x:e.pageXOffset||0,y:e.pageYOffset||0};var t=e.document;return{x:t.documentElement.scrollLeft||t.body.scrollLeft||0,y:t.documentElement.scrollTop||t.body.scrollTop||0}}});