/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.scriptLoader} object, used to load scripts
 *		asynchronously.
 */
/**
 * Load scripts asynchronously.
 * @namespace
 * @example
 */
CKEDITOR.scriptLoader=function(){var e={},t={};return{load:function(n,r,i,s){var o=typeof n=="string";o&&(n=[n]),i||(i=CKEDITOR);var u=n.length,a=[],f=[],l=function(e){r&&(o?r.call(i,e):r.call(i,a,f))};if(u===0){l(!0);return}var c=function(e,t){(t?a:f).push(e),--u<=0&&(s&&CKEDITOR.document.getDocumentElement().removeStyle("cursor"),l(t))},h=function(n,r){e[n]=1;var i=t[n];delete t[n];for(var s=0;s<i.length;s++)i[s](n,r)},p=function(n){if(e[n]){c(n,!0);return}var i=t[n]||(t[n]=[]);i.push(c);if(i.length>1)return;var s=new CKEDITOR.dom.element("script");s.setAttributes({type:"text/javascript",src:n}),r&&(CKEDITOR.env.ie?s.$.onreadystatechange=function(){if(s.$.readyState=="loaded"||s.$.readyState=="complete")s.$.onreadystatechange=null,h(n,!0)}:(s.$.onload=function(){setTimeout(function(){h(n,!0)},0)},s.$.onerror=function(){h(n,!1)})),s.appendTo(CKEDITOR.document.getHead()),CKEDITOR.fire("download",n)};s&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var d=0;d<u;d++)p(n[d])}}}();