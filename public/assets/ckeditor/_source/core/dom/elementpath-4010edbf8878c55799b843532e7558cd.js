/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){var e={address:1,blockquote:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,li:1,dt:1,dd:1,legend:1,caption:1},t={body:1,div:1,table:1,tbody:1,tr:1,td:1,th:1,form:1,fieldset:1},n=function(e){var t=e.getChildren();for(var n=0,r=t.count();n<r;n++){var i=t.getItem(n);if(i.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[i.getName()])return!0}return!1};CKEDITOR.dom.elementPath=function(r){var i=null,s=null,o=[],u=r;while(u){if(u.type==CKEDITOR.NODE_ELEMENT){this.lastElement||(this.lastElement=u);var a=u.getName();s||(!i&&e[a]&&(i=u),t[a]&&(!i&&a=="div"&&!n(u)?i=u:s=u)),o.push(u);if(a=="body")break}u=u.getParent()}this.block=i,this.blockLimit=s,this.elements=o}})(),CKEDITOR.dom.elementPath.prototype={compare:function(e){var t=this.elements,n=e&&e.elements;if(!n||t.length!=n.length)return!1;for(var r=0;r<t.length;r++)if(!t[r].equals(n[r]))return!1;return!0},contains:function(e){var t=this.elements;for(var n=0;n<t.length;n++)if(t[n].getName()in e)return t[n];return null}};