/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @class
 */
CKEDITOR.dom.nodeList=function(e){this.$=e},CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(e){var t=this.$[e];return t?new CKEDITOR.dom.node(t):null}};