/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview The "filebrowser" plugin that adds support for file uploads and
 *               browsing.
 *
 * When a file is uploaded or selected inside the file browser, its URL is
 * inserted automatically into a field defined in the <code>filebrowser</code>
 * attribute. In order to specify a field that should be updated, pass the tab ID and
 * the element ID, separated with a colon.<br /><br />
 *
 * <strong>Example 1: (Browse)</strong>
 *
 * <pre>
 * {
 * 	type : 'button',
 * 	id : 'browse',
 * 	filebrowser : 'tabId:elementId',
 * 	label : editor.lang.common.browseServer
 * }
 * </pre>
 *
 * If you set the <code>filebrowser</code> attribute for an element other than
 * the <code>fileButton</code>, the <code>Browse</code> action will be triggered.<br /><br />
 *
 * <strong>Example 2: (Quick Upload)</strong>
 *
 * <pre>
 * {
 * 	type : 'fileButton',
 * 	id : 'uploadButton',
 * 	filebrowser : 'tabId:elementId',
 * 	label : editor.lang.common.uploadSubmit,
 * 	'for' : [ 'upload', 'upload' ]
 * }
 * </pre>
 *
 * If you set the <code>filebrowser</code> attribute for a <code>fileButton</code>
 * element, the <code>QuickUpload</code> action will be executed.<br /><br />
 *
 * The filebrowser plugin also supports more advanced configuration performed through
 * a JavaScript object.
 *
 * The following settings are supported:
 *
 * <ul>
 * <li><code>action</code> &ndash; <code>Browse</code> or <code>QuickUpload</code>.</li>
 * <li><code>target</code> &ndash; the field to update in the <code><em>tabId:elementId</em></code> format.</li>
 * <li><code>params</code> &ndash; additional arguments to be passed to the server connector (optional).</li>
 * <li><code>onSelect</code> &ndash; a function to execute when the file is selected/uploaded (optional).</li>
 * <li><code>url</code> &ndash; the URL to be called (optional).</li>
 * </ul>
 *
 * <strong>Example 3: (Quick Upload)</strong>
 *
 * <pre>
 * {
 * 	type : 'fileButton',
 * 	label : editor.lang.common.uploadSubmit,
 * 	id : 'buttonId',
 * 	filebrowser :
 * 	{
 * 		action : 'QuickUpload', // required
 * 		target : 'tab1:elementId', // required
 * 		params : // optional
 * 		{
 * 			type : 'Files',
 * 			currentFolder : '/folder/'
 * 		},
 * 		onSelect : function( fileUrl, errorMessage ) // optional
 * 		{
 * 			// Do not call the built-in selectFuntion.
 * 			// return false;
 * 		}
 * 	},
 * 	'for' : [ 'tab1', 'myFile' ]
 * }
 * </pre>
 *
 * Suppose you have a file element with an ID of <code>myFile</code>, a text
 * field with an ID of <code>elementId</code> and a <code>fileButton</code>.
 * If the <code>filebowser.url</code> attribute is not specified explicitly,
 * the form action will be set to <code>filebrowser[<em>DialogWindowName</em>]UploadUrl</code>
 * or, if not specified, to <code>filebrowserUploadUrl</code>. Additional parameters
 * from the <code>params</code> object will be added to the query string. It is
 * possible to create your own <code>uploadHandler</code> and cancel the built-in
 * <code>updateTargetElement</code> command.<br /><br />
 *
 * <strong>Example 4: (Browse)</strong>
 *
 * <pre>
 * {
 * 	type : 'button',
 * 	id : 'buttonId',
 * 	label : editor.lang.common.browseServer,
 * 	filebrowser :
 * 	{
 * 		action : 'Browse',
 * 		url : '/ckfinder/ckfinder.html&amp;type=Images',
 * 		target : 'tab1:elementId'
 * 	}
 * }
 * </pre>
 *
 * In this example, when the button is pressed, the file browser will be opened in a
 * popup window. If you do not specify the <code>filebrowser.url</code> attribute,
 * <code>filebrowser[<em>DialogName</em>]BrowseUrl</code> or
 * <code>filebrowserBrowseUrl</code> will be used. After selecting a file in the file
 * browser, an element with an ID of <code>elementId</code> will be updated. Just
 * like in the third example, a custom <code>onSelect</code> function may be defined.
 */
(function(){function e(e,t){var n=[];if(!t)return e;for(var r in t)n.push(r+"="+encodeURIComponent(t[r]));return e+(e.indexOf("?")!=-1?"&":"?")+n.join("&")}function t(e){e+="";var t=e.charAt(0).toUpperCase();return t+e.substr(1)}function n(n){var r=this.getDialog(),i=r.getParentEditor();i._.filebrowserSe=this;var s=i.config["filebrowser"+t(r.getName())+"WindowWidth"]||i.config.filebrowserWindowWidth||"80%",o=i.config["filebrowser"+t(r.getName())+"WindowHeight"]||i.config.filebrowserWindowHeight||"70%",u=this.filebrowser.params||{};u.CKEditor=i.name,u.CKEditorFuncNum=i._.filebrowserFn,u.langCode||(u.langCode=i.langCode);var a=e(this.filebrowser.url,u);i.popup(a,s,o,i.config.filebrowserWindowFeatures||i.config.fileBrowserWindowFeatures)}function r(e){var t=this.getDialog(),n=t.getParentEditor();return n._.filebrowserSe=this,t.getContentElement(this["for"][0],this["for"][1]).getInputElement().$.value?t.getContentElement(this["for"][0],this["for"][1]).getAction()?!0:!1:!1}function i(t,n,r){var i=r.params||{};i.CKEditor=t.name,i.CKEditorFuncNum=t._.filebrowserFn,i.langCode||(i.langCode=t.langCode),n.action=e(r.url,i),n.filebrowser=r}function s(e,o,u,a){var f,l;for(var c in a){f=a[c],(f.type=="hbox"||f.type=="vbox"||f.type=="fieldset")&&s(e,o,u,f.children);if(!f.filebrowser)continue;if(typeof f.filebrowser=="string"){var h={action:f.type=="fileButton"?"QuickUpload":"Browse",target:f.filebrowser};f.filebrowser=h}if(f.filebrowser.action=="Browse"){var p=f.filebrowser.url;p===undefined&&(p=e.config["filebrowser"+t(o)+"BrowseUrl"],p===undefined&&(p=e.config.filebrowserBrowseUrl)),p&&(f.onClick=n,f.filebrowser.url=p,f.hidden=!1)}else if(f.filebrowser.action=="QuickUpload"&&f["for"]){p=f.filebrowser.url,p===undefined&&(p=e.config["filebrowser"+t(o)+"UploadUrl"],p===undefined&&(p=e.config.filebrowserUploadUrl));if(p){var d=f.onClick;f.onClick=function(e){var t=e.sender;return d&&d.call(t,e)===!1?!1:r.call(t,e)},f.filebrowser.url=p,f.hidden=!1,i(e,u.getContents(f["for"][0]).get(f["for"][1]),f.filebrowser)}}}}function o(e,t){var n=t.getDialog(),r=t.filebrowser.target||null;if(r){var i=r.split(":"),s=n.getContentElement(i[0],i[1]);s&&(s.setValue(e),n.selectPage(i[0]))}}function u(e,t,n){if(n.indexOf(";")!==-1){var r=n.split(";");for(var i=0;i<r.length;i++)if(u(e,t,r[i]))return!0;return!1}var s=e.getContents(t).get(n).filebrowser;return s&&s.url}function a(e,t){var n=this._.filebrowserSe.getDialog(),r=this._.filebrowserSe["for"],i=this._.filebrowserSe.filebrowser.onSelect;r&&n.getContentElement(r[0],r[1]).reset();if(typeof t=="function"&&t.call(this._.filebrowserSe)===!1)return;if(i&&i.call(this._.filebrowserSe,e,t)===!1)return;typeof t=="string"&&t&&alert(t),e&&o(e,this._.filebrowserSe)}CKEDITOR.plugins.add("filebrowser",{init:function(e,t){e._.filebrowserFn=CKEDITOR.tools.addFunction(a,e),e.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)})}}),CKEDITOR.on("dialogDefinition",function(e){var t=e.data.definition,n;for(var r in t.contents)if(n=t.contents[r])s(e.editor,e.data.name,t,n.elements),n.hidden&&n.filebrowser&&(n.hidden=!u(t,n.id,n.filebrowser))})})();