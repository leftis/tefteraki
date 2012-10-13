/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.plugins} object, which is used to
 *		manage plugins registration and loading.
 */
/**
 * Manages plugins registration and loading.
 * @namespace
 * @augments CKEDITOR.resourceManager
 * @example
 */
CKEDITOR.plugins=new CKEDITOR.resourceManager("_source/plugins/","plugin"),CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(e){return function(t,n,r){var i={},s=function(t){e.call(this,t,function(e){CKEDITOR.tools.extend(i,e);var t=[];for(var o in e){var u=e[o],a=u&&u.requires;if(a)for(var f=0;f<a.length;f++)i[a[f]]||t.push(a[f])}if(t.length)s.call(this,t);else{for(o in i)u=i[o],u.onLoad&&!u.onLoad._called&&(u.onLoad(),u.onLoad._called=1);n&&n.call(r||window,i)}},this)};s.call(this,t)}}),CKEDITOR.plugins.setLang=function(e,t,n){var r=this.get(e),i=r.langEntries||(r.langEntries={}),s=r.lang||(r.lang=[]);CKEDITOR.tools.indexOf(s,t)==-1&&s.push(t),i[t]=n};