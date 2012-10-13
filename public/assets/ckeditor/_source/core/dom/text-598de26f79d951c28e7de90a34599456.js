/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.dom.text} class, which represents
 *		a DOM text node.
 */
/**
 * Represents a DOM text node.
 * @constructor
 * @augments CKEDITOR.dom.node
 * @param {Object|String} text A native DOM text node or a string containing
 *		the text to use to create a new text node.
 * @param {CKEDITOR.dom.document} [ownerDocument] The document that will contain
 *		the node in case of new node creation. Defaults to the current document.
 * @example
 * var nativeNode = document.createTextNode( 'Example' );
 * var text = CKEDITOR.dom.text( nativeNode );
 * @example
 * var text = CKEDITOR.dom.text( 'Example' );
 */
CKEDITOR.dom.text=function(e,t){typeof e=="string"&&(e=(t?t.$:document).createTextNode(e)),this.$=e},CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node,CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(e){this.$.nodeValue=e},split:function(e){if(CKEDITOR.env.ie&&e==this.getLength()){var t=this.getDocument().createText("");return t.insertAfter(this),t}var n=this.getDocument(),r=new CKEDITOR.dom.text(this.$.splitText(e),n);if(CKEDITOR.env.ie8){var i=new CKEDITOR.dom.text("",n);i.insertAfter(r),i.remove()}return r},substring:function(e,t){return typeof t!="number"?this.$.nodeValue.substr(e):this.$.nodeValue.substring(e,t)}});