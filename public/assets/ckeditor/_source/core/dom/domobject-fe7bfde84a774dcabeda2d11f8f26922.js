/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.editor} class, which is the base
 *		for other classes representing DOM objects.
 */
/**
 * Represents a DOM object. This class is not intended to be used directly. It
 * serves as the base class for other classes representing specific DOM
 * objects.
 * @constructor
 * @param {Object} nativeDomObject A native DOM object.
 * @augments CKEDITOR.event
 * @example
 */
CKEDITOR.dom.domObject=function(e){e&&(this.$=e)},CKEDITOR.dom.domObject.prototype=function(){var e=function(e,t){return function(n){typeof CKEDITOR!="undefined"&&e.fire(t,new CKEDITOR.dom.event(n))}};return{getPrivate:function(){var e;return(e=this.getCustomData("_"))||this.setCustomData("_",e={}),e},on:function(t){var n=this.getCustomData("_cke_nativeListeners");n||(n={},this.setCustomData("_cke_nativeListeners",n));if(!n[t]){var r=n[t]=e(this,t);this.$.addEventListener?this.$.addEventListener(t,r,!!CKEDITOR.event.useCapture):this.$.attachEvent&&this.$.attachEvent("on"+t,r)}return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(e){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(e)){var t=this.getCustomData("_cke_nativeListeners"),n=t&&t[e];n&&(this.$.removeEventListener?this.$.removeEventListener(e,n,!1):this.$.detachEvent&&this.$.detachEvent("on"+e,n),delete t[e])}},removeAllListeners:function(){var e=this.getCustomData("_cke_nativeListeners");for(var t in e){var n=e[t];this.$.detachEvent?this.$.detachEvent("on"+t,n):this.$.removeEventListener&&this.$.removeEventListener(t,n,!1),delete e[t]}}}}(),function(e){var t={};CKEDITOR.on("reset",function(){t={}}),e.equals=function(e){return e&&e.$===this.$},e.setCustomData=function(e,n){var r=this.getUniqueId(),i=t[r]||(t[r]={});return i[e]=n,this},e.getCustomData=function(e){var n=this.$["data-cke-expando"],r=n&&t[n];return r&&r[e]},e.removeCustomData=function(e){var n=this.$["data-cke-expando"],r=n&&t[n],i=r&&r[e];return typeof i!="undefined"&&delete r[e],i||null},e.clearCustomData=function(){this.removeAllListeners();var e=this.$["data-cke-expando"];e&&delete t[e]},e.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())},CKEDITOR.event.implementOn(e)}(CKEDITOR.dom.domObject.prototype);