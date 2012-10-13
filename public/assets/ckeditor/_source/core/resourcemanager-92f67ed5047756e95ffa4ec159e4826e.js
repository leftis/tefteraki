/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.resourceManager} class, which is
 *		the base for resource managers, like plugins and themes.
 */
/**
 * Base class for resource managers, like plugins and themes. This class is not
 * intended to be used out of the CKEditor core code.
 * @param {String} basePath The path for the resources folder.
 * @param {String} fileName The name used for resource files.
 * @namespace
 * @example
 */
CKEDITOR.resourceManager=function(e,t){this.basePath=e,this.fileName=t,this.registered={},this.loaded={},this.externals={},this._={waitingList:{}}},CKEDITOR.resourceManager.prototype={add:function(e,t){if(this.registered[e])throw'[CKEDITOR.resourceManager.add] The resource name "'+e+'" is already registered.';CKEDITOR.fire(e+CKEDITOR.tools.capitalize(this.fileName)+"Ready",this.registered[e]=t||{})},get:function(e){return this.registered[e]||null},getPath:function(e){var t=this.externals[e];return CKEDITOR.getUrl(t&&t.dir||this.basePath+e+"/")},getFilePath:function(e){var t=this.externals[e];return CKEDITOR.getUrl(this.getPath(e)+(t&&typeof t.file=="string"?t.file:this.fileName+".js"))},addExternal:function(e,t,n){e=e.split(",");for(var r=0;r<e.length;r++){var i=e[r];this.externals[i]={dir:t,file:n}}},load:function(e,t,n){CKEDITOR.tools.isArray(e)||(e=e?[e]:[]);var r=this.loaded,i=this.registered,s=[],o={},u={};for(var a=0;a<e.length;a++){var f=e[a];if(!f)continue;if(!r[f]&&!i[f]){var l=this.getFilePath(f);s.push(l),l in o||(o[l]=[]),o[l].push(f)}else u[f]=this.get(f)}CKEDITOR.scriptLoader.load(s,function(e,i){if(i.length)throw'[CKEDITOR.resourceManager.load] Resource name "'+o[i[0]].join(",")+'" was not found at "'+i[0]+'".';for(var s=0;s<e.length;s++){var a=o[e[s]];for(var f=0;f<a.length;f++){var l=a[f];u[l]=this.get(l),r[l]=1}}t.call(n,u)},this)}};