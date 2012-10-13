/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview jQuery adapter provides easy use of basic CKEditor functions
 *   and access to internal API. It also integrates some aspects of CKEditor with
 *   jQuery framework.
 *
 * Every TEXTAREA, DIV and P elements can be converted to working editor.
 *
 * Plugin exposes some of editor's event to jQuery event system. All of those are namespaces inside
 * ".ckeditor" namespace and can be binded/listened on supported textarea, div and p nodes.
 *
 * Available jQuery events:
 * - instanceReady.ckeditor( editor, rootNode )
 *   Triggered when new instance is ready.
 * - destroy.ckeditor( editor )
 *   Triggered when instance is destroyed.
 * - getData.ckeditor( editor, eventData )
 *   Triggered when getData event is fired inside editor. It can change returned data using eventData reference.
 * - setData.ckeditor( editor )
 *   Triggered when getData event is fired inside editor.
 *
 * @example
 * <script src="jquery.js"></script>
 * <script src="ckeditor.js"></script>
 * <script src="adapters/jquery/adapter.js"></script>
 */
(function(){CKEDITOR.config.jqueryOverrideVal=typeof CKEDITOR.config.jqueryOverrideVal=="undefined"?!0:CKEDITOR.config.jqueryOverrideVal;var e=window.jQuery;if(typeof e=="undefined")return;e.extend(e.fn,{ckeditorGet:function(){var e=this.eq(0).data("ckeditorInstance");if(!e)throw"CKEditor not yet initialized, use ckeditor() with callback.";return e},ckeditor:function(t,n){if(!CKEDITOR.env.isCompatible)return this;if(!e.isFunction(t)){var r=n;n=t,t=r}return n=n||{},this.filter("textarea, div, p").each(function(){var r=e(this),i=r.data("ckeditorInstance"),s=r.data("_ckeditorInstanceLock"),o=this;if(i&&!s)t&&t.apply(i,[this]);else if(!s){if(n.autoUpdateElement||typeof n.autoUpdateElement=="undefined"&&CKEDITOR.config.autoUpdateElement)n.autoUpdateElementJquery=!0;n.autoUpdateElement=!1,r.data("_ckeditorInstanceLock",!0),i=CKEDITOR.replace(o,n),r.data("ckeditorInstance",i),i.on("instanceReady",function(e){var n=e.editor;setTimeout(function(){if(!n.element){setTimeout(arguments.callee,100);return}e.removeListener("instanceReady",this.callee),n.on("dataReady",function(){r.trigger("setData.ckeditor",[n])}),n.on("getData",function(e){r.trigger("getData.ckeditor",[n,e.data])},999),n.on("destroy",function(){r.trigger("destroy.ckeditor",[n])});if(n.config.autoUpdateElementJquery&&r.is("textarea")&&r.parents("form").length){var i=function(){r.ckeditor(function(){n.updateElement()})};r.parents("form").submit(i),r.parents("form").bind("form-pre-serialize",i),r.bind("destroy.ckeditor",function(){r.parents("form").unbind("submit",i),r.parents("form").unbind("form-pre-serialize",i)})}n.on("destroy",function(){r.data("ckeditorInstance",null)}),r.data("_ckeditorInstanceLock",null),r.trigger("instanceReady.ckeditor",[n]),t&&t.apply(n,[o])},0)},null,null,9999)}else CKEDITOR.on("instanceReady",function(e){var n=e.editor;setTimeout(function(){if(!n.element){setTimeout(arguments.callee,100);return}n.element.$==o&&t&&t.apply(n,[o])},0)},null,null,9999)}),this}}),CKEDITOR.config.jqueryOverrideVal&&(e.fn.val=CKEDITOR.tools.override(e.fn.val,function(t){return function(n,r){var i=typeof n!="undefined",s;return this.each(function(){var o=e(this),u=o.data("ckeditorInstance");if(!r&&o.is("textarea")&&u){if(!i)return s=u.getData(),null;u.setData(n)}else{if(!i)return s=t.call(o),null;t.call(o,n)}return!0}),i?this:s}}))})();