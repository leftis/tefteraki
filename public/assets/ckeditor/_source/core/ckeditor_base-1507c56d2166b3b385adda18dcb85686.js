/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview Contains the first and essential part of the {@link CKEDITOR}
 *		object definition.
 */
// #### Compressed Code
// Must be updated on changes in the script as well as updated in the
// ckeditor_source.js and ckeditor_basic_source.js files.
// if(!window.CKEDITOR)window.CKEDITOR=(function(){var a={timestamp:'',version:'3.6.5',revision:'7647',rnd:Math.floor(Math.random()*900)+100,_:{},status:'unloaded',basePath:(function(){var d=window.CKEDITOR_BASEPATH||'';if(!d){var e=document.getElementsByTagName('script');for(var f=0;f<e.length;f++){var g=e[f].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);if(g){d=g[1];break;}}}if(d.indexOf(':/')==-1)if(d.indexOf('/')===0)d=location.href.match(/^.*?:\/\/[^\/]*/)[0]+d;else d=location.href.match(/^[^\?]*\/(?:)/)[0]+d;if(!d)throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return d;})(),getUrl:function(d){if(d.indexOf(':/')==-1&&d.indexOf('/')!==0)d=this.basePath+d;if(this.timestamp&&d.charAt(d.length-1)!='/'&&!/[&?]t=/.test(d))d+=(d.indexOf('?')>=0?'&':'?')+'t='+this.timestamp;return d;}},b=window.CKEDITOR_GETURL;if(b){var c=a.getUrl;a.getUrl=function(d){return b.call(a,d)||c.call(a,d);};}return a;})();
// #### Raw code
// ATTENTION: read the above "Compressed Code" notes when changing this code.
/* @Packager.RemoveLine
// Avoid having the editor code initialized twice. (#7588)
// Use CKEDITOR.dom to check whether the full ckeditor.js code has been loaded
// or just ckeditor_basic.js.
// Remove these lines when compressing manually.
if ( window.CKEDITOR && window.CKEDITOR.dom )
	return;
@Packager.RemoveLine */
window.CKEDITOR||(window.CKEDITOR=function(){var e={timestamp:"C9A85WF",version:"3.6.5",revision:"7647",rnd:Math.floor(Math.random()*900)+100,_:{},status:"unloaded",basePath:function(){var e=window.CKEDITOR_BASEPATH||"";if(!e){var t=document.getElementsByTagName("script");for(var n=0;n<t.length;n++){var r=t[n].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);if(r){e=r[1];break}}}e.indexOf(":/")==-1&&(e.indexOf("/")===0?e=location.href.match(/^.*?:\/\/[^\/]*/)[0]+e:e=location.href.match(/^[^\?]*\/(?:)/)[0]+e);if(!e)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return e}(),getUrl:function(e){return e.indexOf(":/")==-1&&e.indexOf("/")!==0&&(e=this.basePath+e),this.timestamp&&e.charAt(e.length-1)!="/"&&!/[&?]t=/.test(e)&&(e+=(e.indexOf("?")>=0?"&":"?")+"t="+this.timestamp),e}},t=window.CKEDITOR_GETURL;if(t){var n=e.getUrl;e.getUrl=function(r){return t.call(e,r)||n.call(e,r)}}return e}());