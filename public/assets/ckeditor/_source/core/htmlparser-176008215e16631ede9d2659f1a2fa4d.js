/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * Creates a {@link CKEDITOR.htmlParser} class instance.
 * @class Provides an "event like" system to parse strings of HTML data.
 * @example
 * var parser = new CKEDITOR.htmlParser();
 * parser.onTagOpen = function( tagName, attributes, selfClosing )
 *     {
 *         alert( tagName );
 *     };
 * parser.parse( '&lt;p&gt;Some &lt;b&gt;text&lt;/b&gt;.&lt;/p&gt;' );
 */
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:new RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)-->)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))","g")}},function(){var e=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,t={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(n){var r,i,s=0,o;while(r=this._.htmlPartsRegex.exec(n)){var u=r.index;if(u>s){var a=n.substring(s,u);o?o.push(a):this.onText(a)}s=this._.htmlPartsRegex.lastIndex;if(i=r[1]){i=i.toLowerCase(),o&&CKEDITOR.dtd.$cdata[i]&&(this.onCDATA(o.join("")),o=null);if(!o){this.onTagClose(i);continue}}if(o){o.push(r[0]);continue}if(i=r[3]){i=i.toLowerCase();if(/="/.test(i))continue;var f={},l,c=r[4],h=!!c&&c.charAt(c.length-1)=="/";if(c)while(l=e.exec(c)){var p=l[1].toLowerCase(),d=l[2]||l[3]||l[4]||"";!d&&t[p]?f[p]=p:f[p]=d}this.onTagOpen(i,f,h),!o&&CKEDITOR.dtd.$cdata[i]&&(o=[]);continue}(i=r[2])&&this.onComment(i)}n.length>s&&this.onText(n.substring(s,n.length))}}}();