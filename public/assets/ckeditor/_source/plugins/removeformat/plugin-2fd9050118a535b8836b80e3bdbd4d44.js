/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("removeformat",{requires:["selection"],init:function(e){e.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat),e.ui.addButton("RemoveFormat",{label:e.lang.removeFormat,command:"removeFormat"}),e._.removeFormat={filters:[]}}}),CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(e){var t=e._.removeFormatRegex||(e._.removeFormatRegex=new RegExp("^(?:"+e.config.removeFormatTags.replace(/,/g,"|")+")$","i")),n=e._.removeAttributes||(e._.removeAttributes=e.config.removeFormatAttributes.split(",")),r=CKEDITOR.plugins.removeformat.filter,i=e.getSelection().getRanges(1),s=i.createIterator(),o;while(o=s.getNextRange()){o.collapsed||o.enlarge(CKEDITOR.ENLARGE_ELEMENT);var u=o.createBookmark(),a=u.startNode,f=u.endNode,l,c=function(n){var i=new CKEDITOR.dom.elementPath(n),s=i.elements;for(var o=1,u;u=s[o];o++){if(u.equals(i.block)||u.equals(i.blockLimit))break;t.test(u.getName())&&r(e,u)&&n.breakParent(u)}};c(a);if(f){c(f),l=a.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);while(l){if(l.equals(f))break;var h=l.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);(l.getName()!="img"||!l.data("cke-realelement"))&&r(e,l)&&(t.test(l.getName())?l.remove(1):(l.removeAttributes(n),e.fire("removeFormatCleanup",l))),l=h}}o.moveToBookmark(u)}e.getSelection().selectRanges(i)}}},filter:function(e,t){var n=e._.removeFormat.filters;for(var r=0;r<n.length;r++)if(n[r](t)===!1)return!1;return!0}},CKEDITOR.editor.prototype.addRemoveFormatFilter=function(e){this._.removeFormat.filters.push(e)},CKEDITOR.config.removeFormatTags="b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";