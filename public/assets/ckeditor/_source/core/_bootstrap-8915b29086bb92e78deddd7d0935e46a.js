/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview API initialization code.
 */
(function(){if(CKEDITOR.env.webkit){CKEDITOR.env.hc=!1;return}var e=CKEDITOR.dom.element.createFromHtml('<div style="width:0px;height:0px;position:absolute;left:-10000px;border: 1px solid;border-color: red blue;"></div>',CKEDITOR.document);e.appendTo(CKEDITOR.document.getHead());try{CKEDITOR.env.hc=e.getComputedStyle("border-top-color")==e.getComputedStyle("border-right-color")}catch(t){CKEDITOR.env.hc=!1}CKEDITOR.env.hc&&(CKEDITOR.env.cssClass+=" cke_hc"),e.remove()})(),CKEDITOR.plugins.load(CKEDITOR.config.corePlugins.split(","),function(){CKEDITOR.status="loaded",CKEDITOR.fire("loaded");var e=CKEDITOR._.pending;if(e){delete CKEDITOR._.pending;for(var t=0;t<e.length;t++)CKEDITOR.add(e[t])}});if(CKEDITOR.env.ie)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){};