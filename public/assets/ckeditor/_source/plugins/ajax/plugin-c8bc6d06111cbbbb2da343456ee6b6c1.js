/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the {@link CKEDITOR.ajax} object, which holds ajax methods for
 *		data loading.
 */
(function(){CKEDITOR.plugins.add("ajax",{requires:["xml"]}),CKEDITOR.ajax=function(){var e=function(){if(!CKEDITOR.env.ie||location.protocol!="file:")try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null},t=function(e){return e.readyState==4&&(e.status>=200&&e.status<300||e.status==304||e.status===0||e.status==1223)},n=function(e){return t(e)?e.responseText:null},r=function(e){if(t(e)){var n=e.responseXML;return new CKEDITOR.xml(n&&n.firstChild?n:e.responseText)}return null},i=function(t,n,r){var i=!!n,s=e();return s?(s.open("GET",t,i),i&&(s.onreadystatechange=function(){s.readyState==4&&(n(r(s)),s=null)}),s.send(null),i?"":r(s)):null};return{load:function(e,t){return i(e,t,n)},loadXml:function(e,t){return i(e,t,r)}}}()})();