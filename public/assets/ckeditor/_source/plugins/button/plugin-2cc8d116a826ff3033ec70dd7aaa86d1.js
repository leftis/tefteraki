/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("button",{beforeInit:function(e){e.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}}),CKEDITOR.UI_BUTTON="button",CKEDITOR.ui.button=function(e){CKEDITOR.tools.extend(this,e,{title:e.label,className:e.className||e.command&&"cke_button_"+e.command||"",click:e.click||function(t){t.execCommand(e.command)}}),this._={}},CKEDITOR.ui.button.handler={create:function(e){return new CKEDITOR.ui.button(e)}},function(){CKEDITOR.ui.button.prototype={render:function(e,t){var n=CKEDITOR.env,r=this._.id=CKEDITOR.tools.getNextId(),i="",s=this.command,o;this._.editor=e;var u={id:r,button:this,editor:e,focus:function(){var e=CKEDITOR.document.getById(r);e.focus()},execute:function(){CKEDITOR.env.ie&&CKEDITOR.env.version<7?CKEDITOR.tools.setTimeout(function(){this.button.click(e)},0,this):this.button.click(e)}},a=CKEDITOR.tools.addFunction(function(e){if(u.onkey)return e=new CKEDITOR.dom.event(e),u.onkey(u,e.getKeystroke())!==!1}),f=CKEDITOR.tools.addFunction(function(e){var t;return u.onfocus&&(t=u.onfocus(u,new CKEDITOR.dom.event(e))!==!1),CKEDITOR.env.gecko&&CKEDITOR.env.version<10900&&e.preventBubble(),t});u.clickFn=o=CKEDITOR.tools.addFunction(u.execute,u);if(this.modes){var l={};function c(){var t=e.mode;if(t){var n=this.modes[t]?l[t]!=undefined?l[t]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;this.setState(e.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:n)}}e.on("beforeModeUnload",function(){e.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(l[e.mode]=this._.state)},this),e.on("mode",c,this),!this.readOnly&&e.on("readOnly",c,this)}else s&&(s=e.getCommand(s),s&&(s.on("state",function(){this.setState(s.state)},this),i+="cke_"+(s.state==CKEDITOR.TRISTATE_ON?"on":s.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off")));s||(i+="cke_off"),this.className&&(i+=" "+this.className),t.push('<span class="cke_button'+(this.icon&&this.icon.indexOf(".png")==-1?" cke_noalphafix":"")+'">','<a id="',r,'" class="',i,'"',n.gecko&&n.version>=10900&&!n.hc?"":'" href="javascript:void(\''+(this.title||"").replace("'","")+"')\"",' title="',this.title,'" tabindex="-1" hidefocus="true" role="button" aria-labelledby="'+r+'_label"'+(this.hasArrow?' aria-haspopup="true"':"")),(n.opera||n.gecko&&n.mac)&&t.push(' onkeypress="return false;"'),n.gecko&&t.push(' onblur="this.style.cssText = this.style.cssText;"'),t.push(' onkeydown="return CKEDITOR.tools.callFunction(',a,', event);" onfocus="return CKEDITOR.tools.callFunction(',f,', event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction(',o,', this); return false;"><span class="cke_icon"');if(this.icon){var h=(this.iconOffset||0)*-16;t.push(' style="background-image:url(',CKEDITOR.getUrl(this.icon),");background-position:0 "+h+'px;"')}return t.push('>&nbsp;</span><span id="',r,'_label" class="cke_label">',this.label,"</span>"),this.hasArrow&&t.push('<span class="cke_buttonarrow">'+(CKEDITOR.env.hc?"&#9660;":"&nbsp;")+"</span>"),t.push("</a>","</span>"),this.onRender&&this.onRender(),u},setState:function(e){if(this._.state==e)return!1;this._.state=e;var t=CKEDITOR.document.getById(this._.id);return t?(t.setState(e),e==CKEDITOR.TRISTATE_DISABLED?t.setAttribute("aria-disabled",!0):t.removeAttribute("aria-disabled"),e==CKEDITOR.TRISTATE_ON?t.setAttribute("aria-pressed",!0):t.removeAttribute("aria-pressed"),!0):!1}}}(),CKEDITOR.ui.prototype.addButton=function(e,t){this.add(e,CKEDITOR.UI_BUTTON,t)};