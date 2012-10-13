/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.dom.document} class, which
 *		represents a DOM document.
 */
/**
 * Represents a DOM document.
 * @constructor
 * @augments CKEDITOR.dom.domObject
 * @param {Object} domDocument A native DOM document.
 * @example
 * var document = new CKEDITOR.dom.document( document );
 */
CKEDITOR.dom.document=function(e){CKEDITOR.dom.domObject.call(this,e)},CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{appendStyleSheet:function(e){if(this.$.createStyleSheet)this.$.createStyleSheet(e);else{var t=new CKEDITOR.dom.element("link");t.setAttributes({rel:"stylesheet",type:"text/css",href:e}),this.getHead().append(t)}},appendStyleText:function(e){if(this.$.createStyleSheet){var t=this.$.createStyleSheet("");t.cssText=e}else{var n=new CKEDITOR.dom.element("style",this);n.append(new CKEDITOR.dom.text(e,this)),this.getHead().append(n)}},createElement:function(e,t){var n=new CKEDITOR.dom.element(e,this);return t&&(t.attributes&&n.setAttributes(t.attributes),t.styles&&n.setStyles(t.styles)),n},createText:function(e){return new CKEDITOR.dom.text(e,this)},focus:function(){this.getWindow().focus()},getById:function(e){var t=this.$.getElementById(e);return t?new CKEDITOR.dom.element(t):null},getByAddress:function(e,t){var n=this.$.documentElement;for(var r=0;n&&r<e.length;r++){var i=e[r];if(!t){n=n.childNodes[i];continue}var s=-1;for(var o=0;o<n.childNodes.length;o++){var u=n.childNodes[o];if(t===!0&&u.nodeType==3&&u.previousSibling&&u.previousSibling.nodeType==3)continue;s++;if(s==i){n=u;break}}}return n?new CKEDITOR.dom.node(n):null},getElementsByTag:function(e,t){return(!CKEDITOR.env.ie||document.documentMode>8)&&t&&(e=t+":"+e),new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(e))},getHead:function(){var e=this.$.getElementsByTagName("head")[0];return e?e=new CKEDITOR.dom.element(e):e=this.getDocumentElement().append(new CKEDITOR.dom.element("head"),!0),(this.getHead=function(){return e})()},getBody:function(){var e=new CKEDITOR.dom.element(this.$.body);return(this.getBody=function(){return e})()},getDocumentElement:function(){var e=new CKEDITOR.dom.element(this.$.documentElement);return(this.getDocumentElement=function(){return e})()},getWindow:function(){var e=new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView);return(this.getWindow=function(){return e})()},write:function(e){this.$.open("text/html","replace"),CKEDITOR.env.isCustomDomain()&&(this.$.domain=document.domain),this.$.write(e),this.$.close()}});