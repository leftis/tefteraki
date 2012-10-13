/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){CKEDITOR.htmlParser.cdata=function(e){this.value=e},CKEDITOR.htmlParser.cdata.prototype={type:CKEDITOR.NODE_TEXT,writeHtml:function(e){e.write(this.value)}}})();