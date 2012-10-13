/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @file Horizontal Page Break
 */
// Register a plugin named "pagebreak".
CKEDITOR.plugins.add("pagebreak",{init:function(e){e.addCommand("pagebreak",CKEDITOR.plugins.pagebreakCmd),e.ui.addButton("PageBreak",{label:e.lang.pagebreak,command:"pagebreak"});var t=["{","background: url("+CKEDITOR.getUrl(this.path+"images/pagebreak.gif")+") no-repeat center center;","clear: both;","width:100%; _width:99.9%;","border-top: #999999 1px dotted;","border-bottom: #999999 1px dotted;","padding:0;","height: 5px;","cursor: default;","}"].join("").replace(/;/g," !important;");e.addCss("div.cke_pagebreak"+t),CKEDITOR.env.opera&&e.on("contentDom",function(){e.document.on("click",function(t){var n=t.data.getTarget();n.is("div")&&n.hasClass("cke_pagebreak")&&e.getSelection().selectElement(n)})})},afterInit:function(e){var t=e.lang.pagebreakAlt,n=e.dataProcessor,r=n&&n.dataFilter,i=n&&n.htmlFilter;i&&i.addRules({attributes:{"class":function(e,t){var n=e.replace("cke_pagebreak","");if(n!=e){var r=CKEDITOR.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>');t.children.length=0,t.add(r);var i=t.attributes;delete i["aria-label"],delete i.contenteditable,delete i.title}return n}}},5),r&&r.addRules({elements:{div:function(e){var n=e.attributes,r=n&&n.style,i=r&&e.children.length==1&&e.children[0],s=i&&i.name=="span"&&i.attributes.style;s&&/page-break-after\s*:\s*always/i.test(r)&&/display\s*:\s*none/i.test(s)&&(n.contenteditable="false",n["class"]="cke_pagebreak",n["data-cke-display-name"]="pagebreak",n["aria-label"]=t,n.title=t,e.children.length=0)}}})},requires:["fakeobjects"]}),CKEDITOR.plugins.pagebreakCmd={exec:function(e){var t=e.lang.pagebreakAlt,n=CKEDITOR.dom.element.createFromHtml('<div style="page-break-after: always;"contenteditable="false" title="'+t+'" '+'aria-label="'+t+'" '+'data-cke-display-name="pagebreak" '+'class="cke_pagebreak">'+"</div>",e.document),r=e.getSelection().getRanges(!0);e.fire("saveSnapshot");for(var i,s=r.length-1;s>=0;s--){i=r[s],s<r.length-1&&(n=n.clone(!0)),i.splitBlock("p"),i.insertNode(n);if(s==r.length-1){var o=n.getNext();i.moveToPosition(n,CKEDITOR.POSITION_AFTER_END),(!o||o.type==CKEDITOR.NODE_ELEMENT&&!o.isEditable())&&i.fixBlock(!0,e.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p"),i.select()}}e.fire("saveSnapshot")}};