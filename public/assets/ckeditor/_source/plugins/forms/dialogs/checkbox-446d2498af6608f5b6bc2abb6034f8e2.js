/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("checkbox",function(e){return{title:e.lang.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){delete this.checkbox;var e=this.getParentEditor().getSelection().getSelectedElement();e&&e.getAttribute("type")=="checkbox"&&(this.checkbox=e,this.setupContent(e))},onOk:function(){var e,t=this.checkbox,n=!t;n&&(e=this.getParentEditor(),t=e.document.createElement("input"),t.setAttribute("type","checkbox"),e.insertElement(t)),this.commitContent({element:t})},contents:[{id:"info",label:e.lang.checkboxAndRadio.checkboxTitle,title:e.lang.checkboxAndRadio.checkboxTitle,startupFocus:"txtName",elements:[{id:"txtName",type:"text",label:e.lang.common.name,"default":"",accessKey:"N",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:function(e){var t=e.element;this.getValue()?t.data("cke-saved-name",this.getValue()):(t.data("cke-saved-name",!1),t.removeAttribute("name"))}},{id:"txtValue",type:"text",label:e.lang.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(e){var t=e.getAttribute("value");this.setValue(CKEDITOR.env.ie&&t=="on"?"":t)},commit:function(t){var n=t.element,r=this.getValue();if(r&&(!CKEDITOR.env.ie||r!="on"))n.setAttribute("value",r);else if(CKEDITOR.env.ie){var i=new CKEDITOR.dom.element("input",n.getDocument());n.copyAttributes(i,{value:1}),i.replace(n),e.getSelection().selectElement(i),t.element=i}else n.removeAttribute("value")}},{id:"cmbSelected",type:"checkbox",label:e.lang.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(e){this.setValue(e.getAttribute("checked"))},commit:function(t){var n=t.element;if(CKEDITOR.env.ie){var r=!!n.getAttribute("checked"),i=!!this.getValue();if(r!=i){var s=CKEDITOR.dom.element.createFromHtml('<input type="checkbox"'+(i?' checked="checked"':"")+"/>",e.document);n.copyAttributes(s,{type:1,checked:1}),s.replace(n),e.getSelection().selectElement(s),t.element=s}}else{var o=this.getValue();o?n.setAttribute("checked","checked"):n.removeAttribute("checked")}}}]}]}});