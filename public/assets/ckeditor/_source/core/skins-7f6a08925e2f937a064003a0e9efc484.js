/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.skins} object, which is used to
 *		manage skins loading.
 */
/**
 * Manages skins loading.
 * @namespace
 * @example
 */
CKEDITOR.skins=function(){var e={},t={},n=function(n,r,i,s){function a(e,t){return e.replace(/url\s*\(([\s'"]*)(.*?)([\s"']*)\)/g,function(e,n,r,i){return/^\/|^\w?:/.test(r)?e:"url("+t+n+r+i+")"})}var o=e[r];n.skin||(n.skin=o,o.init&&o.init(n));var u=function(e){for(var n=0;n<e.length;n++)e[n]=CKEDITOR.getUrl(t[r]+e[n])};i=o[i];var f=!i||!!i._isLoaded;if(f)s&&s();else{var l=i._pending||(i._pending=[]);l.push(s);if(l.length>1)return;var c=!i.css||!i.css.length,h=!i.js||!i.js.length,p=function(){if(c&&h){i._isLoaded=1;for(var e=0;e<l.length;e++)l[e]&&l[e]()}};if(!c){var d=i.css;if(CKEDITOR.tools.isArray(d)){u(d);for(var v=0;v<d.length;v++)CKEDITOR.document.appendStyleSheet(d[v])}else d=a(d,CKEDITOR.getUrl(t[r])),CKEDITOR.document.appendStyleText(d);i.css=d,c=1}h||(u(i.js),CKEDITOR.scriptLoader.load(i.js,function(){h=1,p()})),p()}};return{add:function(n,r){e[n]=r,r.skinPath=t[n]||(t[n]=CKEDITOR.getUrl("_source/skins/"+n+"/"))},load:function(r,i,s){var o=r.skinName,u=r.skinPath;e[o]?n(r,o,i,s):(t[o]=u,CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(u+"skin.js"),function(){n(r,o,i,s)}))}}}();