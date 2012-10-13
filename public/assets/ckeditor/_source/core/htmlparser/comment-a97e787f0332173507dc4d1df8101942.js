/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * A lightweight representation of an HTML comment.
 * @constructor
 * @example
 */
CKEDITOR.htmlParser.comment=function(e){this.value=e,this._={isBlockLike:!1}},CKEDITOR.htmlParser.comment.prototype={type:CKEDITOR.NODE_COMMENT,writeHtml:function(e,t){var n=this.value;if(t){if(!(n=t.onComment(n,this)))return;if(typeof n!="string"){n.parent=this.parent,n.writeHtml(e,t);return}}e.comment(n)}};