/*
 * Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
(function(){function e(e,t){var n;try{n=e.getSelection().getRanges()[0]}catch(r){return null}return n.shrink(CKEDITOR.SHRINK_TEXT),n.getCommonAncestor().getAscendant(t,1)}function r(r,i){var s=r.lang.list;if(i=="bulletedListStyle")return{title:s.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:s.type,id:"type",align:"center",style:"width:150px",items:[[s.notset,""],[s.circle,"circle"],[s.disc,"disc"],[s.square,"square"]],setup:function(e){var t=e.getStyle("list-style-type")||n[e.getAttribute("type")]||e.getAttribute("type")||"";this.setValue(t)},commit:function(e){var t=this.getValue();t?e.setStyle("list-style-type",t):e.removeStyle("list-style-type")}}]}],onShow:function(){var t=this.getParentEditor(),n=e(t,"ul");n&&this.setupContent(n)},onOk:function(){var t=this.getParentEditor(),n=e(t,"ul");n&&this.commitContent(n)}};if(i=="numberedListStyle"){var o=[[s.notset,""],[s.lowerRoman,"lower-roman"],[s.upperRoman,"upper-roman"],[s.lowerAlpha,"lower-alpha"],[s.upperAlpha,"upper-alpha"],[s.decimal,"decimal"]];return(!CKEDITOR.env.ie||CKEDITOR.env.version>7)&&o.concat([[s.armenian,"armenian"],[s.decimalLeadingZero,"decimal-leading-zero"],[s.georgian,"georgian"],[s.lowerGreek,"lower-greek"]]),{title:s.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:s.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(s.validateStartNumber),setup:function(e){var n=e.getFirst(t).getAttribute("value")||e.getAttribute("start")||1;n&&this.setValue(n)},commit:function(e){var n=e.getFirst(t),r=n.getAttribute("value")||e.getAttribute("start")||1;e.getFirst(t).removeAttribute("value");var i=parseInt(this.getValue(),10);isNaN(i)?e.removeAttribute("start"):e.setAttribute("start",i);var s=n,o=r,u=isNaN(i)?1:i;while((s=s.getNext(t))&&o++)s.getAttribute("value")==o&&s.setAttribute("value",u+o-r)}},{type:"select",label:s.type,id:"type",style:"width: 100%;",items:o,setup:function(e){var t=e.getStyle("list-style-type")||n[e.getAttribute("type")]||e.getAttribute("type")||"";this.setValue(t)},commit:function(e){var t=this.getValue();t?e.setStyle("list-style-type",t):e.removeStyle("list-style-type")}}]}]}],onShow:function(){var t=this.getParentEditor(),n=e(t,"ol");n&&this.setupContent(n)},onOk:function(){var t=this.getParentEditor(),n=e(t,"ol");n&&this.commitContent(n)}}}}var t=function(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.is("li")},n={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman",1:"decimal",disc:"disc",circle:"circle",square:"square"};CKEDITOR.dialog.add("numberedListStyle",function(e){return r(e,"numberedListStyle")}),CKEDITOR.dialog.add("bulletedListStyle",function(e){return r(e,"bulletedListStyle")})})();