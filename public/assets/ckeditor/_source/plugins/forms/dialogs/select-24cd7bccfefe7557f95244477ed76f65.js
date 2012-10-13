/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("select",function(e){function t(e,t,n,r,i){e=f(e);var s;return r?s=r.createElement("OPTION"):s=document.createElement("OPTION"),!e||!s||s.getName()!="option"?!1:(CKEDITOR.env.ie?(isNaN(parseInt(i,10))?e.$.options.add(s.$):e.$.options.add(s.$,i),s.$.innerHTML=t.length>0?t:"",s.$.value=n):(i!==null&&i<e.getChildCount()?e.getChild(i<0?0:i).insertBeforeMe(s):e.append(s),s.setText(t.length>0?t:""),s.setValue(n)),s)}function n(e){e=f(e);var t=o(e);for(var n=e.getChildren().count()-1;n>=0;n--)e.getChild(n).$.selected&&e.getChild(n).remove();u(e,t)}function r(e,t,n,r){e=f(e);if(t<0)return!1;var i=e.getChild(t);return i.setText(n),i.setValue(r),i}function i(e){e=f(e);while(e.getChild(0)&&e.getChild(0).remove());}function s(e,n,r){e=f(e);var i=o(e);if(i<0)return!1;var s=i+n;s=s<0?0:s,s=s>=e.getChildCount()?e.getChildCount()-1:s;if(i==s)return!1;var a=e.getChild(i),l=a.getText(),c=a.getValue();return a.remove(),a=t(e,l,c,r?r:null,s),u(e,s),a}function o(e){return e=f(e),e?e.$.selectedIndex:-1}function u(e,t){e=f(e);if(t<0)return null;var n=e.getChildren().count();return e.$.selectedIndex=t>=n?n-1:t,e}function a(e){return e=f(e),e?e.getChildren():!1}function f(e){return e&&e.domId&&e.getInputElement().$?e.getInputElement():e&&e.$?e:!1}return{title:e.lang.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){delete this.selectBox,this.setupContent("clear");var e=this.getParentEditor().getSelection().getSelectedElement();if(e&&e.getName()=="select"){this.selectBox=e,this.setupContent(e.getName(),e);var t=a(e);for(var n=0;n<t.count();n++)this.setupContent("option",t.getItem(n))}},onOk:function(){var e=this.getParentEditor(),t=this.selectBox,n=!t;n&&(t=e.document.createElement("select")),this.commitContent(t);if(n){e.insertElement(t);if(CKEDITOR.env.ie){var r=e.getSelection(),i=r.createBookmarks();setTimeout(function(){r.selectBookmarks(i)},0)}}},contents:[{id:"info",label:e.lang.select.selectInfo,title:e.lang.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(e,t){e=="clear"?this.setValue(this["default"]||""):e=="select"&&this.setValue(t.data("cke-saved-name")||t.getAttribute("name")||"")},commit:function(e){this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)},setup:function(e,t){e=="clear"?this.setValue(""):e=="option"&&t.getAttribute("selected")&&this.setValue(t.$.value)}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:e.lang.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var t=CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed);return this.getValue()===""||t.apply(this)},setup:function(e,t){e=="select"&&this.setValue(t.getAttribute("size")||""),CKEDITOR.env.webkit&&this.getInputElement().setStyle("width","86px")},commit:function(e){this.getValue()?e.setAttribute("size",this.getValue()):e.removeAttribute("size")}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:e.lang.select.opText,style:"width:115px",setup:function(e,t){e=="clear"&&this.setValue("")}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue"),n=e.getContentElement("info","txtOptName"),r=e.getContentElement("info","txtOptValue"),i=o(this);u(t,i),n.setValue(this.getValue()),r.setValue(t.getValue())},setup:function(e,n){e=="clear"?i(this):e=="option"&&t(this,n.getText(),n.getText(),this.getDialog().getParentEditor().document)},commit:function(e){var n=this.getDialog(),r=a(this),s=a(n.getContentElement("info","cmbValue")),o=n.getContentElement("info","txtValue").getValue();i(e);for(var u=0;u<r.count();u++){var f=t(e,r.getItem(u).getValue(),s.getItem(u).getValue(),n.getParentEditor().document);s.getItem(u).getValue()==o&&(f.setAttribute("selected","selected"),f.selected=!0)}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:e.lang.select.opValue,style:"width:115px",setup:function(e,t){e=="clear"&&this.setValue("")}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","txtOptName"),r=e.getContentElement("info","txtOptValue"),i=o(this);u(t,i),n.setValue(t.getValue()),r.setValue(this.getValue())},setup:function(e,n){if(e=="clear")i(this);else if(e=="option"){var r=n.getValue();t(this,r,r,this.getDialog().getParentEditor().document),n.getAttribute("selected")=="selected"&&this.getDialog().getContentElement("info","txtValue").setValue(r)}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",style:"",label:e.lang.select.btnAdd,title:e.lang.select.btnAdd,style:"width:100%;",onClick:function(){var e=this.getDialog(),n=e.getParentEditor(),r=e.getContentElement("info","txtOptName"),i=e.getContentElement("info","txtOptValue"),s=e.getContentElement("info","cmbName"),o=e.getContentElement("info","cmbValue");t(s,r.getValue(),r.getValue(),e.getParentEditor().document),t(o,i.getValue(),i.getValue(),e.getParentEditor().document),r.setValue(""),i.setValue("")}},{type:"button",id:"btnModify",label:e.lang.select.btnModify,title:e.lang.select.btnModify,style:"width:100%;",onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","txtOptName"),n=e.getContentElement("info","txtOptValue"),i=e.getContentElement("info","cmbName"),s=e.getContentElement("info","cmbValue"),u=o(i);u>=0&&(r(i,u,t.getValue(),t.getValue()),r(s,u,n.getValue(),n.getValue()))}},{type:"button",id:"btnUp",style:"width:100%;",label:e.lang.select.btnUp,title:e.lang.select.btnUp,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");s(t,-1,e.getParentEditor().document),s(n,-1,e.getParentEditor().document)}},{type:"button",id:"btnDown",style:"width:100%;",label:e.lang.select.btnDown,title:e.lang.select.btnDown,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");s(t,1,e.getParentEditor().document),s(n,1,e.getParentEditor().document)}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:e.lang.select.btnSetValue,title:e.lang.select.btnSetValue,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue"),n=e.getContentElement("info","txtValue");n.setValue(t.getValue())}},{type:"button",id:"btnDelete",label:e.lang.select.btnDelete,title:e.lang.select.btnDelete,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),r=e.getContentElement("info","cmbValue"),i=e.getContentElement("info","txtOptName"),s=e.getContentElement("info","txtOptValue");n(t),n(r),i.setValue(""),s.setValue("")}},{id:"chkMulti",type:"checkbox",label:e.lang.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(e,t){e=="select"&&this.setValue(t.getAttribute("multiple")),CKEDITOR.env.webkit&&this.getElement().getParent().setStyle("vertical-align","middle")},commit:function(e){this.getValue()?e.setAttribute("multiple",this.getValue()):e.removeAttribute("multiple")}}]}]}]}});