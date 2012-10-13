/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){function a(e){var t="";for(var n in e){var r=e[n],i=(n+":"+r).replace(u,";");t+=i}return t}function f(e){var t={};return(e||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(e,n,r){t[n.toLowerCase()]=r}),t}function l(e){return e.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(e,t,n,r){t=parseInt(t,10).toString(16),n=parseInt(n,10).toString(16),r=parseInt(r,10).toString(16);var i=[t,n,r];for(var s=0;s<i.length;s++)i[s]=String("0"+i[s]).slice(-2);return"#"+i.join("")})}CKEDITOR.on("dialogDefinition",function(e){var t,n=e.data.name,r=e.data.definition;n=="link"?(r.removeContents("target"),r.removeContents("upload"),r.removeContents("advanced"),t=r.getContents("info"),t.remove("emailSubject"),t.remove("emailBody")):n=="image"&&(r.removeContents("advanced"),t=r.getContents("Link"),t.remove("cmbTarget"),t=r.getContents("info"),t.remove("txtAlt"),t.remove("basic"))});var e={b:"strong",u:"u",i:"em",color:"span",size:"span",quote:"blockquote",code:"code",url:"a",email:"span",img:"span","*":"li",list:"ol"},t={strong:"b",b:"b",u:"u",em:"i",i:"i",code:"code",li:"*"},n={strong:"b",em:"i",u:"u",li:"*",ul:"list",ol:"list",code:"code",a:"link",img:"img",blockquote:"quote"},r={color:"color",size:"font-size"},i={url:"href",email:"mailhref",quote:"cite",list:"listType"},s=CKEDITOR.dtd,o=CKEDITOR.tools.extend({table:1},s.$block,s.$listItem,s.$tableContent,s.$list),u=/\s*(?:;\s*|$)/,c={smiley:":)",sad:":(",wink:";)",laugh:":D",cheeky:":P",blush:":*)",surprise:":-o",indecision:":|",angry:">:(",angel:"o:)",cool:"8-)",devil:">:-)",crying:";(",kiss:":-*"},h={},p=[];for(var d in c)h[c[d]]=d,p.push(c[d].replace(/\(|\)|\:|\/|\*|\-|\|/g,function(e){return"\\"+e}));p=new RegExp(p.join("|"),"g");var v=function(){var e=[],t={nbsp:" ",shy:"­",gt:">",lt:"<"};for(var n in t)e.push(n);return e=new RegExp("&("+e.join("|")+");","g"),function(n){return n.replace(e,function(e,n){return t[n]})}}();CKEDITOR.BBCodeParser=function(){this._={bbcPartsRegex:/(?:\[([^\/\]=]*?)(?:=([^\]]*?))?\])|(?:\[\/([a-z]{1,16})\])/ig}},CKEDITOR.BBCodeParser.prototype={parse:function(t){var n,s,o=0;while(n=this._.bbcPartsRegex.exec(t)){var u=n.index;if(u>o){var f=t.substring(o,u);this.onText(f,1)}o=this._.bbcPartsRegex.lastIndex,s=(n[1]||n[3]||"").toLowerCase();if(s&&!e[s]){this.onText(n[0]);continue}if(n[1]){var l=e[s],c={},h={},p=n[2];p&&(s=="list"&&(isNaN(p)?/^[a-z]+$/.test(p)?p="lower-alpha":/^[A-Z]+$/.test(p)&&(p="upper-alpha"):p="decimal"),r[s]?(s=="size"&&(p+="%"),h[r[s]]=p,c.style=a(h)):i[s]&&(c[i[s]]=p));if(s=="email"||s=="img")c.bbcode=s;this.onTagOpen(l,c,CKEDITOR.dtd.$empty[l])}else n[3]&&this.onTagClose(e[s])}t.length>o&&this.onText(t.substring(o,t.length),1)}},CKEDITOR.htmlParser.fragment.fromBBCode=function(e){function f(e){if(i.length>0)for(var t=0;t<i.length;t++){var n=i[t],r=n.name,s=CKEDITOR.dtd[r],o=u.name&&CKEDITOR.dtd[u.name];(!o||o[r])&&(!e||!s||s[e]||!CKEDITOR.dtd[e])&&(n=n.clone(),n.parent=u,u=n,i.splice(t,1),t--)}}function l(e,t){var r=u.children.length,i=r>0&&u.children[r-1],a=!i&&m.getRule(n[u.name],"breakAfterOpen"),f=i&&i.type==CKEDITOR.NODE_ELEMENT&&m.getRule(n[i.name],"breakAfterClose"),l=e&&m.getRule(n[e],t?"breakBeforeClose":"breakBeforeOpen");s&&(a||f||l)&&s--,s&&e in o&&s++;while(s&&s--)u.children.push(i=new CKEDITOR.htmlParser.element("br"))}function c(e,t){l(e.name,1),t=t||u||r;var n=t.children.length,i=n>0&&t.children[n-1]||null;e.previous=i,e.parent=t,t.children.push(e),e.returnPoint&&(u=e.returnPoint,delete e.returnPoint)}var t=new CKEDITOR.BBCodeParser,r=new CKEDITOR.htmlParser.fragment,i=[],s=0,u=r,a;t.onTagOpen=function(e,n,r){var s=new CKEDITOR.htmlParser.element(e,n);if(CKEDITOR.dtd.$removeEmpty[e]){i.push(s);return}var o=u.name,h=o&&(CKEDITOR.dtd[o]||(u._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span));if(h&&!h[e]){var p=!1,d;e==o?c(u,u.parent):e in CKEDITOR.dtd.$listItem?(t.onTagOpen("ul",{}),d=u,p=!0):(c(u,u.parent),i.unshift(u),p=!0),d?u=d:u=u.returnPoint||u.parent;if(p){t.onTagOpen.apply(this,arguments);return}}f(e),l(e),s.parent=u,s.returnPoint=a,a=0,s.isEmpty?c(s):u=s},t.onTagClose=function(e){for(var t=i.length-1;t>=0;t--)if(e==i[t].name){i.splice(t,1);return}var n=[],r=[],s=u;while(s.type&&s.name!=e)s._.isBlockLike||r.unshift(s),n.push(s),s=s.parent;if(s.type){for(t=0;t<n.length;t++){var o=n[t];c(o,o.parent)}u=s,c(s,s.parent),s==u&&(u=u.parent),i=i.concat(r)}},t.onText=function(e){var t=CKEDITOR.dtd[u.name];if(!t||t["#"])l(),f(),e.replace(/([\r\n])|[^\r\n]*/g,function(e,t){if(t!==undefined&&t.length)s++;else if(e.length){var n=0;e.replace(p,function(t,r){c(new CKEDITOR.htmlParser.text(e.substring(n,r)),u),c(new CKEDITOR.htmlParser.element("smiley",{desc:h[t]}),u),n=r+t.length}),n!=e.length&&c(new CKEDITOR.htmlParser.text(e.substring(n,e.length)),u)}})},t.parse(CKEDITOR.tools.htmlEncode(e));while(u.type){var d=u.parent,v=u;c(v,d),u=d}return r},CKEDITOR.htmlParser.BBCodeWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[],rules:[]},this.setRules("list",{breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1}),this.setRules("*",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:1,breakAfterClose:0}),this.setRules("quote",{breakBeforeOpen:1,breakAfterOpen:0,breakBeforeClose:0,breakAfterClose:1})},proto:{setRules:function(e,t){var n=this._.rules[e];n?CKEDITOR.tools.extend(n,t,!0):this._.rules[e]=t},getRule:function(e,t){return this._.rules[e]&&this._.rules[e][t]},openTag:function(t,n){t in e&&(this.getRule(t,"breakBeforeOpen")&&this.lineBreak(1),this.write("[",t))},openTagClose:function(t){t=="br"?this._.output.push("\n"):t in e&&(this.write("]"),this.getRule(t,"breakAfterOpen")&&this.lineBreak(1))},attribute:function(e,t){e=="option"&&(typeof t=="string"&&(t=t.replace(/&amp;/g,"&")),this.write("=",t))},closeTag:function(t){t in e&&(this.getRule(t,"breakBeforeClose")&&this.lineBreak(1),t!="*"&&this.write("[/",t,"]"),this.getRule(t,"breakAfterClose")&&this.lineBreak(1))},text:function(e){this.write(e)},comment:function(){},lineBreak:function(){!this._.hasLineBreak&&this._.output.length&&(this.write("\n"),this._.hasLineBreak=1)},write:function(){this._.hasLineBreak=0;var e=Array.prototype.join.call(arguments,"");this._.output.push(e)},reset:function(){this._.output=[],this._.hasLineBreak=0},getHtml:function(e){var t=this._.output.join("");return e&&this.reset(),v(t)}}});var m=new CKEDITOR.htmlParser.BBCodeWriter;CKEDITOR.plugins.add("bbcode",{requires:["htmldataprocessor","entities"],beforeInit:function(e){var t=e.config;CKEDITOR.tools.extend(t,{enterMode:CKEDITOR.ENTER_BR,basicEntities:!1,entities:!1,fillEmptyBlocks:!1},!0)},init:function(e){function r(e){var t=CKEDITOR.htmlParser.fragment.fromBBCode(e),n=new CKEDITOR.htmlParser.basicWriter;return t.writeHtml(n,i),n.getHtml(!0)}var n=e.config,i=new CKEDITOR.htmlParser.filter;i.addRules({elements:{blockquote:function(e){var t=new CKEDITOR.htmlParser.element("div");t.children=e.children,e.children=[t];var n=e.attributes.cite;if(n){var r=new CKEDITOR.htmlParser.element("cite");r.add(new CKEDITOR.htmlParser.text(n.replace(/^"|"$/g,""))),delete e.attributes.cite,e.children.unshift(r)}},span:function(e){var t;if(t=e.attributes.bbcode)t=="img"?(e.name="img",e.attributes.src=e.children[0].value,e.children=[]):t=="email"&&(e.name="a",e.attributes.href="mailto:"+e.children[0].value),delete e.attributes.bbcode},ol:function(e){e.attributes.listType?e.attributes.listType!="decimal"&&(e.attributes.style="list-style-type:"+e.attributes.listType):e.name="ul",delete e.attributes.listType},a:function(e){e.attributes.href||(e.attributes.href=e.children[0].value)},smiley:function(e){e.name="img";var t=e.attributes.desc,r=n.smiley_images[CKEDITOR.tools.indexOf(n.smiley_descriptions,t)],i=CKEDITOR.tools.htmlEncode(n.smiley_path+r);e.attributes={src:i,"data-cke-saved-src":i,title:t,alt:t}}}}),e.dataProcessor.htmlFilter.addRules({elements:{$:function(n){var r=n.attributes,i=f(r.style),s,o=n.name;if(o in t)o=t[o];else if(o=="span"){if(s=i.color)o="color",s=l(s);else if(s=i["font-size"]){var u=s.match(/(\d+)%$/);u&&(s=u[1],o="size")}}else if(o=="ol"||o=="ul"){if(s=i["list-style-type"])switch(s){case"lower-alpha":s="a";break;case"upper-alpha":s="A"}else o=="ol"&&(s=1);o="list"}else if(o=="blockquote"){try{var a=n.children[0],h=n.children[1],p=a.name=="cite"&&a.children[0].value;p&&(s='"'+p+'"',n.children=h.children)}catch(d){}o="quote"}else if(o=="a"){if(s=r.href)if(s.indexOf("mailto:")!==-1)o="email",n.children=[new CKEDITOR.htmlParser.text(s.replace("mailto:",""))],s="";else{var v=n.children.length==1&&n.children[0];v&&v.type==CKEDITOR.NODE_TEXT&&v.value==s&&(s=""),o="url"}}else if(o=="img"){n.isEmpty=0;var m=r["data-cke-saved-src"];if(m&&m.indexOf(e.config.smiley_path)!=-1)return new CKEDITOR.htmlParser.text(c[r.alt]);n.children=[new CKEDITOR.htmlParser.text(m)]}return n.name=o,s&&(n.attributes.option=s),null},br:function(e){var t=e.next;if(t&&t.name in o)return!1}}},1),e.dataProcessor.writer=m,e.on("beforeSetMode",function(t){t.removeListener();var n=e._.modes.wysiwyg;n.loadData=CKEDITOR.tools.override(n.loadData,function(e){return function(t){return e.call(this,r(t))}})})},afterInit:function(e){var t;e._.elementsPath&&(t=e._.elementsPath.filters)&&t.push(function(t){var r=t.getName(),i=n[r]||!1;if(i=="link"&&t.getAttribute("href").indexOf("mailto:")===0)i="email";else if(r=="span")t.getStyle("font-size")?i="size":t.getStyle("color")&&(i="color");else if(i=="img"){var s=t.data("cke-saved-src");s&&s.indexOf(e.config.smiley_path)===0&&(i="smiley")}return i})}})})();