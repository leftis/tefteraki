/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
// This file is not required by CKEditor and may be safely ignored.
// It is just a helper file that displays a red message about browser compatibility
// at the top of the samples (if incompatible browser is detected).
window.CKEDITOR&&function(){var e=function(){var e=CKEDITOR.env,t="<p><strong>Your browser is not compatible with CKEditor.</strong>",n={gecko:"Firefox 2.0",ie:"Internet Explorer 6.0",opera:"Opera 9.5",webkit:"Safari 3.0"},r="";for(var i in e)n[i]&&(e[i]?t+=" CKEditor is compatible with "+n[i]+" or higher.":r+=n[i]+"+, ");r=r.replace(/\+,([^,]+), $/,"+ and $1"),t+=" It is also compatible with "+r+".",t+="</p><p>With non compatible browsers, you should still be able to see and edit the contents (HTML) in a plain text field.</p>";var s=document.getElementById("alerts");s&&(s.innerHTML=t)},t=function(){CKEDITOR.env.isCompatible||e()};window.addEventListener?window.addEventListener("load",t,!1):window.attachEvent&&window.attachEvent("onload",t)}();