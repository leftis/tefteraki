/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @stylesheetParser plugin.
 */
(function(){function e(e,t,n){var r=e.join(" ");r=r.replace(/(,|>|\+|~)/g," "),r=r.replace(/\[[^\]]*/g,""),r=r.replace(/#[^\s]*/g,""),r=r.replace(/\:{1,2}[^\s]*/g,""),r=r.replace(/\s+/g," ");var i=r.split(" "),s=[];for(var o=0;o<i.length;o++){var u=i[o];n.test(u)&&!t.test(u)&&CKEDITOR.tools.indexOf(s,u)==-1&&s.push(u)}return s}function t(t,n,r){var i=[],s=[],o;for(o=0;o<t.styleSheets.length;o++){var u=t.styleSheets[o],a=u.ownerNode||u.owningElement;if(a.getAttribute("data-cke-temp"))continue;if(u.href&&u.href.substr(0,9)=="chrome://")continue;var f=u.cssRules||u.rules;for(var l=0;l<f.length;l++)s.push(f[l].selectorText)}var c=e(s,n,r);for(o=0;o<c.length;o++){var h=c[o].split("."),p=h[0].toLowerCase(),d=h[1];i.push({name:p+"."+d,element:p,attributes:{"class":d}})}return i}CKEDITOR.plugins.add("stylesheetparser",{requires:["styles"],onLoad:function(){var e=CKEDITOR.editor.prototype;e.getStylesSet=CKEDITOR.tools.override(e.getStylesSet,function(e){return function(n){var r=this;e.call(this,function(e){var i=r.config.stylesheetParser_skipSelectors||/(^body\.|^\.)/i,s=r.config.stylesheetParser_validSelectors||/\w+\.\w+/;n(r._.stylesDefinitions=e.concat(t(r.document.$,i,s)))})}})}})})();