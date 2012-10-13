/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("link",{requires:["fakeobjects","dialog"],init:function(e){e.addCommand("link",new CKEDITOR.dialogCommand("link")),e.addCommand("anchor",new CKEDITOR.dialogCommand("anchor")),e.addCommand("unlink",new CKEDITOR.unlinkCommand),e.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand),e.ui.addButton("Link",{label:e.lang.link.toolbar,command:"link"}),e.ui.addButton("Unlink",{label:e.lang.unlink,command:"unlink"}),e.ui.addButton("Anchor",{label:e.lang.anchor.toolbar,command:"anchor"}),CKEDITOR.dialog.add("link",this.path+"dialogs/link.js"),CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");var t=e.lang.dir=="rtl"?"right":"left",n="background:url("+CKEDITOR.getUrl(this.path+"images/anchor.gif")+") no-repeat "+t+" center;"+"border:1px dotted #00f;";e.addCss("a.cke_anchor,a.cke_anchor_empty"+(CKEDITOR.env.ie&&CKEDITOR.env.version<7?"":",a[name],a[data-cke-saved-name]")+"{"+n+"padding-"+t+":18px;"+"cursor:auto;"+"}"+(CKEDITOR.env.ie?"a.cke_anchor_empty{display:inline-block;}":"")+"img.cke_anchor"+"{"+n+"width:16px;"+"min-height:15px;"+"height:1.15em;"+"vertical-align:"+(CKEDITOR.env.opera?"middle":"text-bottom")+";"+"}"),e.on("selectionChange",function(t){if(e.readOnly)return;var n=e.getCommand("unlink"),r=t.data.path.lastElement&&t.data.path.lastElement.getAscendant("a",!0);r&&r.getName()=="a"&&r.getAttribute("href")&&r.getChildCount()?n.setState(CKEDITOR.TRISTATE_OFF):n.setState(CKEDITOR.TRISTATE_DISABLED)}),e.on("doubleclick",function(t){var n=CKEDITOR.plugins.link.getSelectedLink(e)||t.data.element;n.isReadOnly()||(n.is("a")?(t.data.dialog=n.getAttribute("name")&&(!n.getAttribute("href")||!n.getChildCount())?"anchor":"link",e.getSelection().selectElement(n)):CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,n)&&(t.data.dialog="anchor"))}),e.addMenuItems&&e.addMenuItems({anchor:{label:e.lang.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:e.lang.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:e.lang.link.menu,command:"link",group:"link",order:1},unlink:{label:e.lang.unlink,command:"unlink",group:"link",order:5}}),e.contextMenu&&e.contextMenu.addListener(function(t,n){if(!t||t.isReadOnly())return null;var r=CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,t);if(!r&&!(r=CKEDITOR.plugins.link.getSelectedLink(e)))return null;var i={};return r.getAttribute("href")&&r.getChildCount()&&(i={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF}),r&&r.hasAttribute("name")&&(i.anchor=i.removeAnchor=CKEDITOR.TRISTATE_OFF),i})},afterInit:function(e){var t=e.dataProcessor,n=t&&t.dataFilter,r=t&&t.htmlFilter,i=e._.elementsPath&&e._.elementsPath.filters;n&&n.addRules({elements:{a:function(t){var n=t.attributes;if(!n.name)return null;var r=!t.children.length;if(CKEDITOR.plugins.link.synAnchorSelector){var i=r?"cke_anchor_empty":"cke_anchor",s=n["class"];n.name&&(!s||s.indexOf(i)<0)&&(n["class"]=(s||"")+" "+i),r&&CKEDITOR.plugins.link.emptyAnchorFix&&(n.contenteditable="false",n["data-cke-editable"]=1)}else if(CKEDITOR.plugins.link.fakeAnchor&&r)return e.createFakeParserElement(t,"cke_anchor","anchor");return null}}}),CKEDITOR.plugins.link.emptyAnchorFix&&r&&r.addRules({elements:{a:function(e){delete e.attributes.contenteditable}}}),i&&i.push(function(t,n){if(n=="a")if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,t)||t.getAttribute("name")&&(!t.getAttribute("href")||!t.getChildCount()))return"anchor"})}}),CKEDITOR.plugins.link={getSelectedLink:function(e){try{var t=e.getSelection();if(t.getType()==CKEDITOR.SELECTION_ELEMENT){var n=t.getSelectedElement();if(n.is("a"))return n}var r=t.getRanges(!0)[0];r.shrink(CKEDITOR.SHRINK_TEXT);var i=r.getCommonAncestor();return i.getAscendant("a",!0)}catch(s){return null}},fakeAnchor:CKEDITOR.env.opera||CKEDITOR.env.webkit,synAnchorSelector:CKEDITOR.env.ie,emptyAnchorFix:CKEDITOR.env.ie&&CKEDITOR.env.version<8,tryRestoreFakeAnchor:function(e,t){if(t&&t.data("cke-real-element-type")&&t.data("cke-real-element-type")=="anchor"){var n=e.restoreRealElement(t);if(n.data("cke-saved-name"))return n}}},CKEDITOR.unlinkCommand=function(){},CKEDITOR.unlinkCommand.prototype={exec:function(e){var t=e.getSelection(),n=t.createBookmarks(),r=t.getRanges(),i,s;for(var o=0;o<r.length;o++){i=r[o].getCommonAncestor(!0),s=i.getAscendant("a",!0);if(!s)continue;r[o].selectNodeContents(s)}t.selectRanges(r),e.document.$.execCommand("unlink",!1,null),t.selectBookmarks(n)},startDisabled:!0},CKEDITOR.removeAnchorCommand=function(){},CKEDITOR.removeAnchorCommand.prototype={exec:function(e){var t=e.getSelection(),n=t.createBookmarks(),r;if(t&&(r=t.getSelectedElement())&&(CKEDITOR.plugins.link.fakeAnchor&&!r.getChildCount()?CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,r):r.is("a")))r.remove(1);else if(r=CKEDITOR.plugins.link.getSelectedLink(e))r.hasAttribute("href")?(r.removeAttributes({name:1,"data-cke-saved-name":1}),r.removeClass("cke_anchor")):r.remove(1);t.selectBookmarks(n)}},CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0,linkShowTargetTab:!0});