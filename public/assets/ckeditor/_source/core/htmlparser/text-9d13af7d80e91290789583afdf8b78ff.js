/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){CKEDITOR.htmlParser.text=function(e){this.value=e,this._={isBlockLike:!1}},CKEDITOR.htmlParser.text.prototype={type:CKEDITOR.NODE_TEXT,writeHtml:function(e,t){var n=this.value;if(t&&!(n=t.onText(n,this)))return;e.text(n)}}})();