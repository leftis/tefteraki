/*
 * Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
(function(){function e(e,t){var n=e.lang.placeholder,r=e.lang.common.generalTab;return{title:n.title,minWidth:300,minHeight:80,contents:[{id:"info",label:r,title:r,elements:[{id:"text",type:"text",style:"width: 100%;",label:n.text,"default":"",required:!0,validate:CKEDITOR.dialog.validate.notEmpty(n.textMissing),setup:function(e){t&&this.setValue(e.getText().slice(2,-2))},commit:function(t){var n="[["+this.getValue()+"]]";CKEDITOR.plugins.placeholder.createPlaceholder(e,t,n)}}]}],onShow:function(){t&&(this._element=CKEDITOR.plugins.placeholder.getSelectedPlaceHoder(e)),this.setupContent(this._element)},onOk:function(){this.commitContent(this._element),delete this._element}}}CKEDITOR.dialog.add("createplaceholder",function(t){return e(t)}),CKEDITOR.dialog.add("editplaceholder",function(t){return e(t,1)})})();