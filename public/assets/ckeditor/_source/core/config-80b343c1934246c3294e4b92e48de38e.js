/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Defines the <code>{@link CKEDITOR.config}</code> object that stores the
 * default configuration settings.
 */
/**
 * Used in conjunction with <code>{@link CKEDITOR.config.enterMode}</code>
 * and <code>{@link CKEDITOR.config.shiftEnterMode}</code> configuration
 * settings to make the editor produce <code>&lt;p&gt;</code> tags when
 * using the <em>Enter</em> key.
 * @constant
 */
CKEDITOR.ENTER_P=1,CKEDITOR.ENTER_BR=2,CKEDITOR.ENTER_DIV=3,CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,baseHref:"",contentsCss:CKEDITOR.basePath+"contents.css",contentsLangDirection:"ui",contentsLanguage:"",language:"",defaultLanguage:"en",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,corePlugins:"",docType:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',bodyId:"",bodyClass:"",fullPage:!1,height:200,plugins:"about,a11yhelp,basicstyles,bidi,blockquote,button,clipboard,colorbutton,colordialog,contextmenu,dialogadvtab,div,elementspath,enterkey,entities,filebrowser,find,flash,font,format,forms,horizontalrule,htmldataprocessor,iframe,image,indent,justify,keystrokes,link,list,liststyle,maximize,newpage,pagebreak,pastefromword,pastetext,popup,preview,print,removeformat,resize,save,scayt,showblocks,showborders,smiley,sourcearea,specialchar,stylescombo,tab,table,tabletools,templates,toolbar,undo,wsc,wysiwygarea",extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,theme:"default",skin:"kama",width:"",baseFloatZIndex:1e4};