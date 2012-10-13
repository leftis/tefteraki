/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/**
 * @fileOverview The floating dialog plugin.
 */
/**
 * No resize for this dialog.
 * @constant
 */
CKEDITOR.DIALOG_RESIZE_NONE=0,CKEDITOR.DIALOG_RESIZE_WIDTH=1,CKEDITOR.DIALOG_RESIZE_HEIGHT=2,CKEDITOR.DIALOG_RESIZE_BOTH=3,function(){function t(e){return!!this._.tabs[e][0].$.offsetHeight}function n(){var e=this._.currentTabId,n=this._.tabIdList.length,r=CKEDITOR.tools.indexOf(this._.tabIdList,e)+n;for(var i=r-1;i>r-n;i--)if(t.call(this,this._.tabIdList[i%n]))return this._.tabIdList[i%n];return null}function r(){var e=this._.currentTabId,n=this._.tabIdList.length,r=CKEDITOR.tools.indexOf(this._.tabIdList,e);for(var i=r+1;i<r+n;i++)if(t.call(this,this._.tabIdList[i%n]))return this._.tabIdList[i%n];return null}function i(e,t){var n=e.$.getElementsByTagName("input");for(var r=0,i=n.length;r<i;r++){var s=new CKEDITOR.dom.element(n[r]);s.getAttribute("type").toLowerCase()=="text"&&(t?(s.setAttribute("value",s.getCustomData("fake_value")||""),s.removeCustomData("fake_value")):(s.setCustomData("fake_value",s.getAttribute("value")),s.setAttribute("value","")))}}function s(e,t){var n=this.getInputElement();n&&(e?n.removeAttribute("aria-invalid"):n.setAttribute("aria-invalid",!0)),e||(this.select?this.select():this.focus()),t&&alert(t),this.fire("validated",{valid:e,msg:t})}function o(){var e=this.getInputElement();e&&e.removeAttribute("aria-invalid")}function u(e,t,n){this.element=t,this.focusIndex=n,this.tabIndex=0,this.isFocusable=function(){return!t.getAttribute("disabled")&&t.isVisible()},this.focus=function(){e._.currentFocusIndex=this.focusIndex,this.element.focus()},t.on("keydown",function(e){e.data.getKeystroke()in{32:1,13:1}&&this.fire("click")}),t.on("focus",function(){this.fire("mouseover")}),t.on("blur",function(){this.fire("mouseout")})}function a(e){function n(){e.layout()}var t=CKEDITOR.document.getWindow();t.on("resize",n),e.on("hide",function(){t.removeListener("resize",n)})}function d(e,t){this._={dialog:e},CKEDITOR.tools.extend(this,t)}function v(e){function u(r){var u=e.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize(),f=r.data.$.screenX,l=r.data.$.screenY,c=f-t.x,h=l-t.y,p,d;t={x:f,y:l},n.x+=c,n.y+=h,n.x+o[3]<s?p=-o[3]:n.x-o[1]>a.width-u.width-s?p=a.width-u.width+(i.lang.dir=="rtl"?0:o[1]):p=n.x,n.y+o[0]<s?d=-o[0]:n.y-o[2]>a.height-u.height-s?d=a.height-u.height+o[2]:d=n.y,e.move(p,d,1),r.data.preventDefault()}function a(e){CKEDITOR.document.removeListener("mousemove",u),CKEDITOR.document.removeListener("mouseup",a);if(CKEDITOR.env.ie6Compat){var t=b.getChild(0).getFrameDocument();t.removeListener("mousemove",u),t.removeListener("mouseup",a)}}var t=null,n=null,r=e.getElement().getFirst(),i=e.getParentEditor(),s=i.config.dialog_magnetDistance,o=i.skin.margins||[0,0,0,0];typeof s=="undefined"&&(s=20),e.parts.title.on("mousedown",function(r){t={x:r.data.$.screenX,y:r.data.$.screenY},CKEDITOR.document.on("mousemove",u),CKEDITOR.document.on("mouseup",a),n=e.getPosition();if(CKEDITOR.env.ie6Compat){var i=b.getChild(0).getFrameDocument();i.on("mousemove",u),i.on("mouseup",a)}r.data.preventDefault()},e)}function m(e){function c(f){var l=r.lang.dir=="rtl",c=(f.data.$.screenX-u.x)*(l?-1:1),h=f.data.$.screenY-u.y,p=a.width,d=a.height,v=p+c*(e._.moved?1:2),m=d+h*(e._.moved?1:2),g=e._.element.getFirst(),y=l&&g.getComputedStyle("right"),b=e.getPosition();b.y+m>o.height&&(m=o.height-b.y),(l?y:b.x)+v>o.width&&(v=o.width-(l?y:b.x));if(n==CKEDITOR.DIALOG_RESIZE_WIDTH||n==CKEDITOR.DIALOG_RESIZE_BOTH)p=Math.max(t.minWidth||0,v-i);if(n==CKEDITOR.DIALOG_RESIZE_HEIGHT||n==CKEDITOR.DIALOG_RESIZE_BOTH)d=Math.max(t.minHeight||0,m-s);e.resize(p,d),e._.moved||e.layout(),f.data.preventDefault()}function h(){CKEDITOR.document.removeListener("mouseup",h),CKEDITOR.document.removeListener("mousemove",c),f&&(f.remove(),f=null);if(CKEDITOR.env.ie6Compat){var e=b.getChild(0).getFrameDocument();e.removeListener("mouseup",h),e.removeListener("mousemove",c)}}var t=e.definition,n=t.resizable;if(n==CKEDITOR.DIALOG_RESIZE_NONE)return;var r=e.getParentEditor(),i,s,o,u,a,f,l=CKEDITOR.tools.addFunction(function(t){a=e.getSize();var n=e.parts.contents,r=n.$.getElementsByTagName("iframe").length;r&&(f=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>'),n.append(f)),s=a.height-e.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.opera||CKEDITOR.env.ie&&CKEDITOR.env.quirks)),i=a.width-e.parts.contents.getSize("width",1),u={x:t.screenX,y:t.screenY},o=CKEDITOR.document.getWindow().getViewPaneSize(),CKEDITOR.document.on("mousemove",c),CKEDITOR.document.on("mouseup",h);if(CKEDITOR.env.ie6Compat){var l=b.getChild(0).getFrameDocument();l.on("mousemove",c),l.on("mouseup",h)}t.preventDefault&&t.preventDefault()});e.on("load",function(){var t="";n==CKEDITOR.DIALOG_RESIZE_WIDTH?t=" cke_resizer_horizontal":n==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(t=" cke_resizer_vertical");var i=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+t+" cke_resizer_"+r.lang.dir+'"'+' title="'+CKEDITOR.tools.htmlEncode(r.lang.resize)+'"'+' onmousedown="CKEDITOR.tools.callFunction('+l+', event )"></div>');e.parts.footer.append(i,1)}),r.on("destroy",function(){CKEDITOR.tools.removeFunction(l)})}function w(e){e.data.preventDefault(1)}function E(e){var t=CKEDITOR.document.getWindow(),n=e.config,r=n.dialog_backgroundCoverColor||"white",i=n.dialog_backgroundCoverOpacity,s=n.baseFloatZIndex,o=CKEDITOR.tools.genKey(r,i,s),u=y[o];if(!u){var a=['<div tabIndex="-1" style="position: ',CKEDITOR.env.ie6Compat?"absolute":"fixed","; z-index: ",s,"; top: 0px; left: 0px; ",CKEDITOR.env.ie6Compat?"":"background-color: "+r,'" class="cke_dialog_background_cover">'];if(CKEDITOR.env.ie6Compat){var f=CKEDITOR.env.isCustomDomain(),l="<html><body style=\\'background-color:"+r+";\\'></body></html>";a.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:'),a.push("void((function(){document.open();"+(f?"document.domain='"+document.domain+"';":"")+"document.write( '"+l+"' );"+"document.close();"+"})())"),a.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')}a.push("</div>"),u=CKEDITOR.dom.element.createFromHtml(a.join("")),u.setOpacity(i!=undefined?i:.5),u.on("keydown",w),u.on("keypress",w),u.on("keyup",w),u.appendTo(CKEDITOR.document.getBody()),y[o]=u}else u.show();b=u;var c=function(){var e=t.getViewPaneSize();u.setStyles({width:e.width+"px",height:e.height+"px"})},h=function(){var e=t.getScrollPosition(),n=CKEDITOR.dialog._.currentTop;u.setStyles({left:e.x+"px",top:e.y+"px"});if(n)do{var r=n.getPosition();n.move(r.x,r.y)}while(n=n._.parentDialog)};g=c,t.on("resize",c),c(),(!CKEDITOR.env.mac||!CKEDITOR.env.webkit)&&u.focus();if(CKEDITOR.env.ie6Compat){var p=function(){h(),arguments.callee.prevScrollHandler.apply(this,arguments)};t.$.setTimeout(function(){p.prevScrollHandler=window.onscroll||function(){},window.onscroll=p},0),h()}}function S(){if(!b)return;var e=CKEDITOR.document.getWindow();b.hide(),e.removeListener("resize",g),CKEDITOR.env.ie6Compat&&e.$.setTimeout(function(){var e=window.onscroll&&window.onscroll.prevScrollHandler;window.onscroll=e||null},0),g=null}function x(){for(var e in y)y[e].remove();y={}}var e=CKEDITOR.tools.cssLength;CKEDITOR.dialog=function(e,t){function C(){var e=T._.focusList;e.sort(function(e,t){return e.tabIndex!=t.tabIndex?t.tabIndex-e.tabIndex:e.focusIndex-t.focusIndex});var t=e.length;for(var n=0;n<t;n++)e[n].focusIndex=n}function k(e){var t=T._.focusList;e=e||0;if(t.length<1)return;var n=T._.currentFocusIndex;try{t[n].getInputElement().$.blur()}catch(r){}var i=(n+e+t.length)%t.length,s=i;while(e&&!t[s].isFocusable()){s=(s+e+t.length)%t.length;if(s==i)break}t[s].focus(),t[s].type=="text"&&t[s].select()}function L(t){if(T!=CKEDITOR.dialog._.currentTop)return;var i=t.data.getKeystroke(),s=e.lang.dir=="rtl",o;d=g=0;if(i==9||i==CKEDITOR.SHIFT+9){var u=i==CKEDITOR.SHIFT+9;if(T._.tabBarMode){var a=u?n.call(T):r.call(T);T.selectPage(a),T._.tabs[a][0].focus()}else k(u?-1:1);d=1}else if(i==CKEDITOR.ALT+121&&!T._.tabBarMode&&T.getPageCount()>1)T._.tabBarMode=!0,T._.tabs[T._.currentTabId][0].focus(),d=1;else if(i!=37&&i!=39||!T._.tabBarMode)if(i!=13&&i!=32||!T._.tabBarMode)if(i==13){var f=t.data.getTarget();!f.is("a","button","select","textarea")&&(!f.is("input")||f.$.type!="button")&&(o=this.getButton("ok"),o&&CKEDITOR.tools.setTimeout(o.click,0,o),d=1),g=1}else{if(i!=27)return;o=this.getButton("cancel"),o?CKEDITOR.tools.setTimeout(o.click,0,o):this.fire("cancel",{hide:!0}).hide!==!1&&this.hide(),g=1}else this.selectPage(this._.currentTabId),this._.tabBarMode=!1,this._.currentFocusIndex=-1,k(1),d=1;else a=i==(s?39:37)?n.call(T):r.call(T),T.selectPage(a),T._.tabs[a][0].focus(),d=1;A(t)}function A(e){d?e.data.preventDefault(1):g&&e.data.stopPropagation()}var i=CKEDITOR.dialog._.dialogDefinitions[t],u=CKEDITOR.tools.clone(f),a=e.config.dialog_buttonsOrder||"OS",l=e.lang.dir,c={},h,d,g;(a=="OS"&&CKEDITOR.env.mac||a=="rtl"&&l=="ltr"||a=="ltr"&&l=="rtl")&&u.buttons.reverse(),i=CKEDITOR.tools.extend(i(e),u),i=CKEDITOR.tools.clone(i),i=new p(this,i);var y=CKEDITOR.document,b=e.theme.buildDialog(e);this._={editor:e,element:b.element,name:t,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],currentFocusIndex:0,hasFocus:!1},this.parts=b.parts,CKEDITOR.tools.setTimeout(function(){e.fire("ariaWidget",this.parts.contents)},0,this);var w={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};w[l=="rtl"?"right":"left"]=0,this.parts.dialog.setStyles(w),CKEDITOR.event.call(this),this.definition=i=CKEDITOR.fire("dialogDefinition",{name:t,definition:i},e).definition;if(!("removeDialogTabs"in e._)&&e.config.removeDialogTabs){var E=e.config.removeDialogTabs.split(";");for(h=0;h<E.length;h++){var S=E[h].split(":");if(S.length==2){var x=S[0];c[x]||(c[x]=[]),c[x].push(S[1])}}e._.removeDialogTabs=c}if(e._.removeDialogTabs&&(c=e._.removeDialogTabs[t]))for(h=0;h<c.length;h++)i.removeContents(c[h]);i.onLoad&&this.on("load",i.onLoad),i.onShow&&this.on("show",i.onShow),i.onHide&&this.on("hide",i.onHide),i.onOk&&this.on("ok",function(t){e.fire("saveSnapshot"),setTimeout(function(){e.fire("saveSnapshot")},0),i.onOk.call(this,t)===!1&&(t.data.hide=!1)}),i.onCancel&&this.on("cancel",function(e){i.onCancel.call(this,e)===!1&&(e.data.hide=!1)});var T=this,N=function(e){var t=T._.contents,n=!1;for(var r in t)for(var i in t[r]){n=e.call(this,t[r][i]);if(n)return}};this.on("ok",function(e){N(function(t){if(t.validate){var n=t.validate(this),r=typeof n=="string"||n===!1;return r&&(e.data.hide=!1,e.stop()),s.call(t,!r,typeof n=="string"?n:undefined),r}})},this,null,0),this.on("cancel",function(t){N(function(n){if(n.isChanged())return confirm(e.lang.common.confirmCancel)||(t.data.hide=!1),!0})},this,null,0),this.parts.close.on("click",function(e){this.fire("cancel",{hide:!0}).hide!==!1&&this.hide(),e.data.preventDefault()},this),this.changeFocus=k;var O=this._.element;this.on("show",function(){O.on("keydown",L,this),(CKEDITOR.env.opera||CKEDITOR.env.gecko)&&O.on("keypress",A,this)}),this.on("hide",function(){O.removeListener("keydown",L),(CKEDITOR.env.opera||CKEDITOR.env.gecko)&&O.removeListener("keypress",A),N(function(e){o.apply(e)})}),this.on("iframeAdded",function(e){var t=new CKEDITOR.dom.document(e.data.iframe.$.contentWindow.document);t.on("keydown",L,this,null,0)}),this.on("show",function(){C();if(e.config.dialog_startupFocusTab&&T._.pageCount>1)T._.tabBarMode=!0,T._.tabs[T._.currentTabId][0].focus();else if(!this._.hasFocus){this._.currentFocusIndex=-1;if(i.onFocus){var t=i.onFocus.call(this);t&&t.focus()}else k(1);if(this._.editor.mode=="wysiwyg"&&CKEDITOR.env.ie){var n=e.document.$.selection,r=n.createRange();if(r)if(r.parentElement&&r.parentElement().ownerDocument==e.document.$||r.item&&r.item(0).ownerDocument==e.document.$){var s=document.body.createTextRange();s.moveToElementText(this.getElement().getFirst().$),s.collapse(!0),s.select()}}}},this,null,4294967295),CKEDITOR.env.ie6Compat&&this.on("load",function(e){var t=this.getElement(),n=t.getFirst();n.remove(),n.appendTo(t)},this),v(this),m(this),(new CKEDITOR.dom.text(i.title,CKEDITOR.document)).appendTo(this.parts.title);for(h=0;h<i.contents.length;h++){var M=i.contents[h];M&&this.addPage(M)}this.parts.tabs.on("click",function(e){var t=e.data.getTarget();if(t.hasClass("cke_dialog_tab")){var n=t.$.id;this.selectPage(n.substring(4,n.lastIndexOf("_"))),this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,k(1)),e.data.preventDefault()}},this);var _=[],D=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:i.buttons},_).getChild();this.parts.footer.setHtml(_.join(""));for(h=0;h<D.length;h++)this._.buttons[D[h].id]=D[h]},CKEDITOR.dialog.prototype={destroy:function(){this.hide(),this._.element.remove()},resize:function(){return function(e,t){if(this._.contentSize&&this._.contentSize.width==e&&this._.contentSize.height==t)return;CKEDITOR.dialog.fire("resize",{dialog:this,skin:this._.editor.skinName,width:e,height:t},this._.editor),this.fire("resize",{skin:this._.editor.skinName,width:e,height:t},this._.editor),this._.editor.lang.dir=="rtl"&&this._.position&&(this._.position.x=CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:e,height:t}}}(),getSize:function(){var e=this._.element.getFirst();return{width:e.$.offsetWidth||0,height:e.$.offsetHeight||0}},move:function(e,t,n){var r=this._.element.getFirst(),i=this._.editor.lang.dir=="rtl",s=r.getComputedStyle("position")=="fixed";if(s&&this._.position&&this._.position.x==e&&this._.position.y==t)return;this._.position={x:e,y:t};if(!s){var o=CKEDITOR.document.getWindow().getScrollPosition();e+=o.x,t+=o.y}if(i){var u=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize();e=a.width-u.width-e}var f={top:(t>0?t:0)+"px"};f[i?"right":"left"]=(e>0?e:0)+"px",r.setStyles(f),n&&(this._.moved=1)},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},show:function(){var e=this._.element,t=this.definition;!e.getParent()||!e.getParent().equals(CKEDITOR.document.getBody())?e.appendTo(CKEDITOR.document.getBody()):e.setStyle("display","block");if(CKEDITOR.env.gecko&&CKEDITOR.env.version<10900){var n=this.parts.dialog;n.setStyle("position","absolute"),setTimeout(function(){n.setStyle("position","fixed")},0)}this.resize(this._.contentSize&&this._.contentSize.width||t.width||t.minWidth,this._.contentSize&&this._.contentSize.height||t.height||t.minHeight),this.reset(),this.selectPage(this.definition.contents[0].id),CKEDITOR.dialog._.currentZIndex===null&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex),this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);if(CKEDITOR.dialog._.currentTop===null)CKEDITOR.dialog._.currentTop=this,this._.parentDialog=null,E(this._.editor);else{this._.parentDialog=CKEDITOR.dialog._.currentTop;var r=this._.parentDialog.getElement().getFirst();r.$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2),CKEDITOR.dialog._.currentTop=this}e.on("keydown",N),e.on(CKEDITOR.env.opera?"keypress":"keyup",C),this._.hasFocus=!1,CKEDITOR.tools.setTimeout(function(){this.layout(),a(this),this.parts.dialog.setStyle("visibility",""),this.fireOnce("load",{}),CKEDITOR.ui.fire("ready",this),this.fire("show",{}),this._.editor.fire("dialogShow",this),this.foreach(function(e){e.setInitValue&&e.setInitValue()})},100,this)},layout:function(){var e=this.parts.dialog,t=this.getSize(),n=CKEDITOR.document.getWindow(),r=n.getViewPaneSize(),i=(r.width-t.width)/2,s=(r.height-t.height)/2;CKEDITOR.env.ie6Compat||(t.height+(s>0?s:0)>r.height||t.width+(i>0?i:0)>r.width?e.setStyle("position","absolute"):e.setStyle("position","fixed")),this.move(this._.moved?this._.position.x:i,this._.moved?this._.position.y:s)},foreach:function(e){for(var t in this._.contents)for(var n in this._.contents[t])e.call(this,this._.contents[t][n]);return this},reset:function(){var e=function(e){e.reset&&e.reset(1)};return function(){return this.foreach(e),this}}(),setupContent:function(){var e=arguments;this.foreach(function(t){t.setup&&t.setup.apply(t,e)})},commitContent:function(){var e=arguments;this.foreach(function(t){CKEDITOR.env.ie&&this._.currentFocusIndex==t.focusIndex&&t.getInputElement().$.blur(),t.commit&&t.commit.apply(t,e)})},hide:function(){if(!this.parts.dialog.isVisible())return;this.fire("hide",{}),this._.editor.fire("dialogHide",this),this.selectPage(this._.tabIdList[0]);var e=this._.element;e.setStyle("display","none"),this.parts.dialog.setStyle("visibility","hidden"),L(this);while(CKEDITOR.dialog._.currentTop!=this)CKEDITOR.dialog._.currentTop.hide();if(!this._.parentDialog)S();else{var t=this._.parentDialog.getElement().getFirst();t.setStyle("z-index",parseInt(t.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}CKEDITOR.dialog._.currentTop=this._.parentDialog;if(!this._.parentDialog){CKEDITOR.dialog._.currentZIndex=null,e.removeListener("keydown",N),e.removeListener(CKEDITOR.env.opera?"keypress":"keyup",C);var n=this._.editor;n.focus();if(n.mode=="wysiwyg"&&CKEDITOR.env.ie){var r=n.getSelection();r&&r.unlock(!0)}}else CKEDITOR.dialog._.currentZIndex-=10;delete this._.parentDialog,this.foreach(function(e){e.resetInitValue&&e.resetInitValue()})},addPage:function(e){var t=[],n=e.label?' title="'+CKEDITOR.tools.htmlEncode(e.label)+'"':"",r=e.elements,i=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,{type:"vbox",className:"cke_dialog_page_contents",children:e.elements,expand:!!e.expand,padding:e.padding,style:e.style||"width: 100%;height:100%"},t),s=CKEDITOR.dom.element.createFromHtml(t.join(""));s.setAttribute("role","tabpanel");var o=CKEDITOR.env,u="cke_"+e.id+"_"+CKEDITOR.tools.getNextNumber(),a=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',this._.pageCount>0?" cke_last":"cke_first",n,e.hidden?' style="display:none"':"",' id="',u,'"',o.gecko&&o.version>=10900&&!o.hc?"":' href="javascript:void(0)"',' tabIndex="-1"',' hidefocus="true"',' role="tab">',e.label,"</a>"].join(""));s.setAttribute("aria-labelledby",u),this._.tabs[e.id]=[a,s],this._.tabIdList.push(e.id),!e.hidden&&this._.pageCount++,this._.lastTab=a,this.updateStyle();var f=this._.contents[e.id]={},l,c=i.getChild();while(l=c.shift())f[l.id]=l,typeof l.getChild=="function"&&c.push.apply(c,l.getChild());s.setAttribute("name",e.id),s.appendTo(this.parts.contents),a.unselectable(),this.parts.tabs.append(a),e.accessKey&&(k(this,this,"CTRL+"+e.accessKey,O,A),this._.accessKeyMap["CTRL+"+e.accessKey]=e.id)},selectPage:function(e){if(this._.currentTabId==e)return;if(this.fire("selectPage",{page:e,currentPage:this._.currentTabId})===!0)return;for(var t in this._.tabs){var n=this._.tabs[t][0],r=this._.tabs[t][1];t!=e&&(n.removeClass("cke_dialog_tab_selected"),r.hide()),r.setAttribute("aria-hidden",t!=e)}var s=this._.tabs[e];s[0].addClass("cke_dialog_tab_selected"),CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat?(i(s[1]),s[1].show(),setTimeout(function(){i(s[1],1)},0)):s[1].show(),this._.currentTabId=e,this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,e)},updateStyle:function(){this.parts.dialog[(this._.pageCount===1?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(e){var t=this._.tabs[e]&&this._.tabs[e][0];if(!t||this._.pageCount==1||!t.isVisible())return;e==this._.currentTabId&&this.selectPage(n.call(this)),t.hide(),this._.pageCount--,this.updateStyle()},showPage:function(e){var t=this._.tabs[e]&&this._.tabs[e][0];if(!t)return;t.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},getContentElement:function(e,t){var n=this._.contents[e];return n&&n[t]},getValueOf:function(e,t){return this.getContentElement(e,t).getValue()},setValueOf:function(e,t,n){return this.getContentElement(e,t).setValue(n)},getButton:function(e){return this._.buttons[e]},click:function(e){return this._.buttons[e].click()},disableButton:function(e){return this._.buttons[e].disable()},enableButton:function(e){return this._.buttons[e].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(e,t){if(typeof t=="undefined")t=this._.focusList.length,this._.focusList.push(new u(this,e,t));else{this._.focusList.splice(t,0,new u(this,e,t));for(var n=t+1;n<this._.focusList.length;n++)this._.focusList[n].focusIndex++}}},CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(e,t){if(!this._.dialogDefinitions[e]||typeof t=="function")this._.dialogDefinitions[e]=t},exists:function(e){return!!this._.dialogDefinitions[e]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},okButton:function(){var e=function(e,t){return t=t||{},CKEDITOR.tools.extend({id:"ok",type:"button",label:e.lang.common.ok,"class":"cke_dialog_ui_button_ok",onClick:function(e){var t=e.data.dialog;t.fire("ok",{hide:!0}).hide!==!1&&t.hide()}},t,!0)};return e.type="button",e.override=function(t){return CKEDITOR.tools.extend(function(n){return e(n,t)},{type:"button"},!0)},e}(),cancelButton:function(){var e=function(e,t){return t=t||{},CKEDITOR.tools.extend({id:"cancel",type:"button",label:e.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(e){var t=e.data.dialog;t.fire("cancel",{hide:!0}).hide!==!1&&t.hide()}},t,!0)};return e.type="button",e.override=function(t){return CKEDITOR.tools.extend(function(n){return e(n,t)},{type:"button"},!0)},e}(),addUIElement:function(e,t){this._.uiElementBuilders[e]=t}}),CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null},CKEDITOR.event.implementOn(CKEDITOR.dialog),CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype,!0);var f={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},l=function(e,t,n){for(var r=0,i;i=e[r];r++){if(i.id==t)return i;if(n&&i[n]){var s=l(i[n],t,n);if(s)return s}}return null},c=function(e,t,n,r,i){if(n){for(var s=0,o;o=e[s];s++){if(o.id==n)return e.splice(s,0,t),t;if(r&&o[r]){var u=c(o[r],t,n,r,!0);if(u)return u}}if(i)return null}return e.push(t),t},h=function(e,t,n){for(var r=0,i;i=e[r];r++){if(i.id==t)return e.splice(r,1);if(n&&i[n]){var s=h(i[n],t,n);if(s)return s}}return null},p=function(e,t){this.dialog=e;var n=t.contents;for(var r=0,i;i=n[r];r++)n[r]=i&&new d(e,i);CKEDITOR.tools.extend(this,t)};p.prototype={getContents:function(e){return l(this.contents,e)},getButton:function(e){return l(this.buttons,e)},addContents:function(e,t){return c(this.contents,e,t)},addButton:function(e,t){return c(this.buttons,e,t)},removeContents:function(e){h(this.contents,e)},removeButton:function(e){h(this.buttons,e)}},d.prototype={get:function(e){return l(this.elements,e,"children")},add:function(e,t){return c(this.elements,e,t,"children")},remove:function(e){h(this.elements,e,"children")}};var g,y={},b,T={},N=function(e){var t=e.data.$.ctrlKey||e.data.$.metaKey,n=e.data.$.altKey,r=e.data.$.shiftKey,i=String.fromCharCode(e.data.$.keyCode),s=T[(t?"CTRL+":"")+(n?"ALT+":"")+(r?"SHIFT+":"")+i];if(!s||!s.length)return;s=s[s.length-1],s.keydown&&s.keydown.call(s.uiElement,s.dialog,s.key),e.data.preventDefault()},C=function(e){var t=e.data.$.ctrlKey||e.data.$.metaKey,n=e.data.$.altKey,r=e.data.$.shiftKey,i=String.fromCharCode(e.data.$.keyCode),s=T[(t?"CTRL+":"")+(n?"ALT+":"")+(r?"SHIFT+":"")+i];if(!s||!s.length)return;s=s[s.length-1],s.keyup&&(s.keyup.call(s.uiElement,s.dialog,s.key),e.data.preventDefault())},k=function(e,t,n,r,i){var s=T[n]||(T[n]=[]);s.push({uiElement:e,dialog:t,key:n,keyup:i||e.accessKeyUp,keydown:r||e.accessKeyDown})},L=function(e){for(var t in T){var n=T[t];for(var r=n.length-1;r>=0;r--)(n[r].dialog==e||n[r].uiElement==e)&&n.splice(r,1);n.length===0&&delete T[t]}},A=function(e,t){e._.accessKeyMap[t]&&e.selectPage(e._.accessKeyMap[t])},O=function(e,t){};(function(){CKEDITOR.ui.dialog={uiElement:function(e,t,n,r,i,s,o){if(arguments.length<4)return;var u=(r.call?r(t):r)||"div",a=["<",u," "],f=(i&&i.call?i(t):i)||{},l=(s&&s.call?s(t):s)||{},c=(o&&o.call?o.call(this,e,t):o)||"",h=this.domId=l.id||CKEDITOR.tools.getNextId()+"_uiElement",p=this.id=t.id,d;l.id=h;var v={};t.type&&(v["cke_dialog_ui_"+t.type]=1),t.className&&(v[t.className]=1),t.disabled&&(v.cke_disabled=1);var m=l["class"]&&l["class"].split?l["class"].split(" "):[];for(d=0;d<m.length;d++)m[d]&&(v[m[d]]=1);var g=[];for(d in v)g.push(d);l["class"]=g.join(" "),t.title&&(l.title=t.title);var y=(t.style||"").split(";");if(t.align){var b=t.align;f["margin-left"]=b=="left"?0:"auto",f["margin-right"]=b=="right"?0:"auto"}for(d in f)y.push(d+":"+f[d]);t.hidden&&y.push("display:none");for(d=y.length-1;d>=0;d--)y[d]===""&&y.splice(d,1);y.length>0&&(l.style=(l.style?l.style+"; ":"")+y.join("; "));for(d in l)a.push(d+'="'+CKEDITOR.tools.htmlEncode(l[d])+'" ');a.push(">",c,"</",u,">"),n.push(a.join("")),(this._||(this._={})).dialog=e,typeof t.isChanged=="boolean"&&(this.isChanged=function(){return t.isChanged}),typeof t.isChanged=="function"&&(this.isChanged=t.isChanged),typeof t.setValue=="function"&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(e){return function(n){e.call(this,t.setValue.call(this,n))}})),typeof t.getValue=="function"&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(e){return function(){return t.getValue.call(this,e.call(this))}})),CKEDITOR.event.implementOn(this),this.registerEvents(t),this.accessKeyUp&&this.accessKeyDown&&t.accessKey&&k(this,e,"CTRL+"+t.accessKey);var w=this;e.on("load",function(){var t=w.getInputElement();if(t){var n=w.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":"";t.on("focus",function(){e._.tabBarMode=!1,e._.hasFocus=!0,w.fire("focus"),n&&this.addClass(n)}),t.on("blur",function(){w.fire("blur"),n&&this.removeClass(n)})}}),this.keyboardFocusable&&(this.tabIndex=t.tabIndex||0,this.focusIndex=e._.focusList.push(this)-1,this.on("focus",function(){e._.currentFocusIndex=w.focusIndex})),CKEDITOR.tools.extend(this,t)},hbox:function(t,n,r,i,s){if(arguments.length<4)return;this._||(this._={});var o=this._.children=n,u=s&&s.widths||null,a=s&&s.height||null,f={},l,c=function(){var t=['<tbody><tr class="cke_dialog_ui_hbox">'];for(l=0;l<r.length;l++){var n="cke_dialog_ui_hbox_child",i=[];l===0&&(n="cke_dialog_ui_hbox_first"),l==r.length-1&&(n="cke_dialog_ui_hbox_last"),t.push('<td class="',n,'" role="presentation" '),u?u[l]&&i.push("width:"+e(u[l])):i.push("width:"+Math.floor(100/r.length)+"%"),a&&i.push("height:"+e(a)),s&&s.padding!=undefined&&i.push("padding:"+e(s.padding)),CKEDITOR.env.ie&&CKEDITOR.env.quirks&&o[l].align&&i.push("text-align:"+o[l].align),i.length>0&&t.push('style="'+i.join("; ")+'" '),t.push(">",r[l],"</td>")}return t.push("</tr></tbody>"),t.join("")},h={role:"presentation"};s&&s.align&&(h.align=s.align),CKEDITOR.ui.dialog.uiElement.call(this,t,s||{type:"hbox"},i,"table",f,h,c)},vbox:function(t,n,r,i,s){if(arguments.length<3)return;this._||(this._={});var o=this._.children=n,u=s&&s.width||null,a=s&&s.heights||null,f=function(){var n=['<table role="presentation" cellspacing="0" border="0" '];n.push('style="'),s&&s.expand&&n.push("height:100%;"),n.push("width:"+e(u||"100%"),";"),n.push('"'),n.push('align="',CKEDITOR.tools.htmlEncode(s&&s.align||(t.getParentEditor().lang.dir=="ltr"?"left":"right")),'" '),n.push("><tbody>");for(var i=0;i<r.length;i++){var f=[];n.push('<tr><td role="presentation" '),u&&f.push("width:"+e(u||"100%")),a?f.push("height:"+e(a[i])):s&&s.expand&&f.push("height:"+Math.floor(100/r.length)+"%"),s&&s.padding!=undefined&&f.push("padding:"+e(s.padding)),CKEDITOR.env.ie&&CKEDITOR.env.quirks&&o[i].align&&f.push("text-align:"+o[i].align),f.length>0&&n.push('style="',f.join("; "),'" '),n.push(' class="cke_dialog_ui_vbox_child">',r[i],"</td></tr>")}return n.push("</tbody></table>"),n.join("")};CKEDITOR.ui.dialog.uiElement.call(this,t,s||{type:"vbox"},i,"div",null,{role:"presentation"},f)}}})(),CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},setValue:function(e,t){return this.getInputElement().setValue(e),!t&&this.fire("change",{value:e}),this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){var e=this.getInputElement(),t=e,n;while((t=t.getParent())&&t.$.className.search("cke_dialog_page_contents")==-1);return t?(n=t.getAttribute("name"),this._.dialog._.currentTabId!=n&&this._.dialog.selectPage(n),this):this},focus:function(){return this.selectParentTab().getInputElement().focus(),this},registerEvents:function(e){var t=/^on([A-Z]\w+)/,n,r=function(e,t,n,r){t.on("load",function(){e.getInputElement().on(n,r,e)})};for(var i in e){if(!(n=i.match(t)))continue;this.eventProcessors[i]?this.eventProcessors[i].call(this,this._.dialog,e[i]):r(this,this._.dialog,n[1].toLowerCase(),e[i])}return this},eventProcessors:{onLoad:function(e,t){e.on("load",t,this)},onShow:function(e,t){e.on("show",t,this)},onHide:function(e,t){e.on("hide",t,this)}},accessKeyDown:function(e,t){this.focus()},accessKeyUp:function(e,t){},disable:function(){var e=this.getElement(),t=this.getInputElement();t.setAttribute("disabled","true"),e.addClass("cke_disabled")},enable:function(){var e=this.getElement(),t=this.getInputElement();t.removeAttribute("disabled"),e.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return!this.isEnabled()||!this.isVisible()?!1:!0}},CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(e){return arguments.length<1?this._.children.concat():(e.splice||(e=[e]),e.length<2?this._.children[e[0]]:this._.children[e[0]]&&this._.children[e[0]].getChild?this._.children[e[0]].getChild(e.slice(1,e.length)):null)}},!0),CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox,function(){var e={build:function(e,t,n){var r=t.children,i,s=[],o=[];for(var u=0;u<r.length&&(i=r[u]);u++){var a=[];s.push(a),o.push(CKEDITOR.dialog._.uiElementBuilders[i.type].build(e,i,a))}return new CKEDITOR.ui.dialog[t.type](e,o,s,n,t)}};CKEDITOR.dialog.addUIElement("hbox",e),CKEDITOR.dialog.addUIElement("vbox",e)}(),CKEDITOR.dialogCommand=function(e){this.dialogName=e},CKEDITOR.dialogCommand.prototype={exec:function(e){CKEDITOR.env.opera?CKEDITOR.tools.setTimeout(function(){e.openDialog(this.dialogName)},0,this):e.openDialog(this.dialogName)},canUndo:!1,editorFocus:CKEDITOR.env.ie||CKEDITOR.env.webkit},function(){var e=/^([a]|[^a])+$/,t=/^\d*$/,n=/^\d*(?:\.\d+)?$/,r=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,i=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,s=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1,CKEDITOR.VALIDATE_AND=2,CKEDITOR.dialog.validate={functions:function(){var e=arguments;return function(){var t=this&&this.getValue?this.getValue():e[0],n=undefined,r=CKEDITOR.VALIDATE_AND,i=[],s;for(s=0;s<e.length;s++){if(typeof e[s]!="function")break;i.push(e[s])}s<e.length&&typeof e[s]=="string"&&(n=e[s],s++),s<e.length&&typeof e[s]=="number"&&(r=e[s]);var o=r==CKEDITOR.VALIDATE_AND?!0:!1;for(s=0;s<i.length;s++)r==CKEDITOR.VALIDATE_AND?o=o&&i[s](t):o=o||i[s](t);return o?!0:n}},regex:function(e,t){return function(){var n=this&&this.getValue?this.getValue():arguments[0];return e.test(n)?!0:t}},notEmpty:function(t){return this.regex(e,t)},integer:function(e){return this.regex(t,e)},number:function(e){return this.regex(n,e)},cssLength:function(e){return this.functions(function(e){return i.test(CKEDITOR.tools.trim(e))},e)},htmlLength:function(e){return this.functions(function(e){return r.test(CKEDITOR.tools.trim(e))},e)},inlineStyle:function(e){return this.functions(function(e){return s.test(CKEDITOR.tools.trim(e))},e)},equals:function(e,t){return this.functions(function(t){return t==e},t)},notEqual:function(e,t){return this.functions(function(t){return t!=e},t)}},CKEDITOR.on("instanceDestroyed"
,function(e){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){var t;while(t=CKEDITOR.dialog._.currentTop)t.hide();x()}var n=e.editor._.storedDialogs;for(var r in n)n[r].destroy()})}(),CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(e,t){function a(n){var r=CKEDITOR.dialog._.dialogDefinitions[e],i=u.skin.dialog;if(!i._isLoaded||f&&typeof n=="undefined")return;typeof r!="function"&&(CKEDITOR.dialog._.dialogDefinitions[e]="failed"),u.openDialog(e,t)}if(this.mode=="wysiwyg"&&CKEDITOR.env.ie){var n=this.getSelection();n&&n.lock()}var r=CKEDITOR.dialog._.dialogDefinitions[e],i=this.skin.dialog;CKEDITOR.dialog._.currentTop===null&&E(this);if(typeof r=="function"&&i._isLoaded){var s=this._.storedDialogs||(this._.storedDialogs={}),o=s[e]||(s[e]=new CKEDITOR.dialog(this,e));return t&&t.call(o,o),o.show(),o}if(r=="failed")throw S(),new Error('[CKEDITOR.dialog.openDialog] Dialog "'+e+'" failed when loading definition.');var u=this;if(typeof r=="string"){var f=1;CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(r),a,null,0,1)}return CKEDITOR.skins.load(this,"dialog",a),null}})}(),CKEDITOR.plugins.add("dialog",{requires:["dialogui"]});