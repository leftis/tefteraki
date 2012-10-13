/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * A lightweight representation of an HTML DOM structure.
 * @constructor
 * @example
 */
CKEDITOR.htmlParser.fragment=function(){this.children=[],this.parent=null,this._={isBlockLike:!0,hasInlineStarted:!1}},function(){function i(e){return e.name=="a"&&e.attributes.href||CKEDITOR.dtd.$removeEmpty[e.name]}var e=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),t=CKEDITOR.env.ie&&CKEDITOR.env.version<8?{dd:1,dt:1}:{},n={ol:1,ul:1},r=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1});CKEDITOR.htmlParser.fragment.fromHtml=function(s,o,u){function v(e){var t;if(l.length>0)for(var n=0;n<l.length;n++){var r=l[n],i=r.name,s=CKEDITOR.dtd[i],o=h.name&&CKEDITOR.dtd[h.name];(!o||o[i])&&(!e||!s||s[e]||!CKEDITOR.dtd[e])?(t||(m(),t=1),r=r.clone(),r.parent=h,h=r,l.splice(n,1),n--):i==h.name&&(g(h,h.parent,1),n--)}}function m(){while(c.length)g(c.shift(),h)}function g(e,t,n){if(e.previous!==undefined)return;t=t||h||f;var r=h;if(o&&(!t.type||t.name=="body")){var i,s;e.attributes&&(s=e.attributes["data-cke-real-element-type"])?i=s:i=e.name,i&&!(i in CKEDITOR.dtd.$body||i=="body"||e.isOrphan)&&(h=t,a.onTagOpen(o,{}),e.returnPoint=t=h)}if(e._.isBlockLike&&e.name!="pre"&&e.name!="textarea"){var u=e.children.length,l=e.children[u-1],c;l&&l.type==CKEDITOR.NODE_TEXT&&((c=CKEDITOR.tools.rtrim(l.value))?l.value=c:e.children.length=u-1)}t.add(e),e.name=="pre"&&(d=!1),e.name=="textarea"&&(p=!1),e.returnPoint?(h=e.returnPoint,delete e.returnPoint):h=n?t:r}var a=new CKEDITOR.htmlParser,f=u||new CKEDITOR.htmlParser.fragment,l=[],c=[],h=f,p=!1,d=!1;a.onTagOpen=function(s,o,u,f){var y=new CKEDITOR.htmlParser.element(s,o);y.isUnknown&&u&&(y.isEmpty=!0),y.isOptionalClose=s in t||f;if(i(y)){l.push(y);return}if(s=="pre")d=!0;else{if(s=="br"&&d){h.add(new CKEDITOR.htmlParser.text("\n"));return}s=="textarea"&&(p=!0)}if(s=="br"){c.push(y);return}for(;;){var b=h.name,w=b?CKEDITOR.dtd[b]||(h._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):r;if(!(!y.isUnknown&&!h.isUnknown&&!w[s]))break;if(h.isOptionalClose)a.onTagClose(b);else if(s in n&&b in n){var E=h.children,S=E[E.length-1];(!S||S.name!="li")&&g(S=new CKEDITOR.htmlParser.element("li"),h),!y.returnPoint&&(y.returnPoint=h),h=S}else if(s in CKEDITOR.dtd.$listItem&&b!=s)a.onTagOpen(s=="li"?"ul":"dl",{},0,1);else if(b in e&&b!=s)!y.returnPoint&&(y.returnPoint=h),h=h.parent;else{b in CKEDITOR.dtd.$inline&&l.unshift(h);if(!h.parent){y.isOrphan=1;break}g(h,h.parent,1)}}v(s),m(),y.parent=h,y.isEmpty?g(y):h=y},a.onTagClose=function(e){for(var t=l.length-1;t>=0;t--)if(e==l[t].name){l.splice(t,1);return}var n=[],r=[],i=h;while(i!=f&&i.name!=e)i._.isBlockLike||r.unshift(i),n.push(i),i=i.returnPoint||i.parent;if(i!=f){for(t=0;t<n.length;t++){var s=n[t];g(s,s.parent)}h=i,i._.isBlockLike&&m(),g(i,i.parent),i==h&&(h=h.parent),l=l.concat(r)}e=="body"&&(o=!1)},a.onText=function(t){if((!h._.hasInlineStarted||c.length)&&!d&&!p){t=CKEDITOR.tools.ltrim(t);if(t.length===0)return}var i=h.name,s=i?CKEDITOR.dtd[i]||(h._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):r;if(!p&&!s["#"]&&i in e){a.onTagOpen(i in n?"li":i=="dl"?"dd":i=="table"?"tr":i=="tr"?"td":""),a.onText(t);return}m(),v(),o&&(!h.type||h.name=="body")&&CKEDITOR.tools.trim(t)&&this.onTagOpen(o,{},0,1),!d&&!p&&(t=t.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," ")),h.add(new CKEDITOR.htmlParser.text(t))},a.onCDATA=function(e){h.add(new CKEDITOR.htmlParser.cdata(e))},a.onComment=function(e){m(),v(),h.add(new CKEDITOR.htmlParser.comment(e))},a.parse(s),m(!CKEDITOR.env.ie&&1);while(h!=f)g(h,h.parent,1);return f},CKEDITOR.htmlParser.fragment.prototype={add:function(e,t){isNaN(t)&&(t=this.children.length);var n=t>0?this.children[t-1]:null;if(n){if(e._.isBlockLike&&n.type==CKEDITOR.NODE_TEXT){n.value=CKEDITOR.tools.rtrim(n.value);if(n.value.length===0){this.children.pop(),this.add(e);return}}n.next=e}e.previous=n,e.parent=this,this.children.splice(t,0,e),this._.hasInlineStarted=e.type==CKEDITOR.NODE_TEXT||e.type==CKEDITOR.NODE_ELEMENT&&!e._.isBlockLike},writeHtml:function(e,t){var n;this.filterChildren=function(){var e=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml.call(this,e,t,!0);var r=e.getHtml();this.children=(new CKEDITOR.htmlParser.fragment.fromHtml(r)).children,n=1},!this.name&&t&&t.onFragment(this),this.writeChildrenHtml(e,n?null:t)},writeChildrenHtml:function(e,t){for(var n=0;n<this.children.length;n++)this.children[n].writeHtml(e,t)}}}();