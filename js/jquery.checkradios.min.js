/*
	CHECKRADIOS - jQuery plugin to allow custom styling of checkboxes
	by Chris McGuckin
	
	
	License: This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License as published
	by the Free Software Foundation; either version 3 of the License, or (at
	your option) any later version. This program is distributed in the hope
	that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
	warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.
	
	
	
	Credits:
	
	icomoon (http://icomoon.io/)
	
	Please refer to icomoon.io for the license regarding their icons.

*/(function(e){e.fn.checkradios=function(t){var n=this,r=e.extend({checkbox:{iconClass:"icon-checkradios-checkmark"},radio:{iconClass:"icon-checkradios-circle"},onChange:function(e,t,n){}},t),i={checkbox:function(t){var n=this;if(!t.parent().hasClass("checkradios-checkbox")){var i=t.attr("class"),s=t.wrap('<div class="checkradios-checkbox '+i+'"/>'),o=s.parent();s.is(":checked")?n.checkboxEnable(s):n.checkboxDisable(s);t.keypress(function(e){var t=e.keyCode;(t<1||t==13||t==32)&&o.click()});t.on({focusin:function(){o.addClass("focus")},focusout:function(){var t=e(this);setTimeout(function(){t.is(":focus")||o.removeClass("focus")},10)}});o.mousedown(function(){setTimeout(function(){t.focus()},10)});t.click(function(e){e.stopPropagation();e.preventDefault()});o.click(function(){if(s.is(":checked")){n.checkboxDisable(s);r.onChange(!1,o,s)}else{n.checkboxEnable(s);r.onChange(!0,o,s)}return!1})}},radio:function(t){var n=this;if(!t.parent().hasClass("checkradios-radio")){var i=t.attr("class"),s=t.wrap('<div class="checkradios-radio '+i+'"/>'),o=s.parent();s.is(":checked")?n.radioEnable(s):n.radioDisable(s);t.on({focusin:function(){o.addClass("focus");n.radioEnable(s);var t=s.attr("name"),i=e("input[name="+t+"]");i.each(function(){if(e(this).is(":checked")){n.radioEnable(e(this));r.onChange(!0,e(this).parent(),e(this))}else{n.radioDisable(e(this));r.onChange(!1,e(this).parent(),e(this))}})},focusout:function(){var t=e(this);setTimeout(function(){t.is(":focus")||o.removeClass("focus")},10)}});o.click(function(){t.focus()});t.click(function(e){e.stopPropagation();e.preventDefault()})}},checkboxEnable:function(e){e.parent().removeClass(r.checkbox.iconClass);e.parent().removeClass("unchecked");e.parent().addClass(r.checkbox.iconClass);e.parent().addClass("checked");e.prop("checked",!0)},checkboxDisable:function(e){e.parent().removeClass(r.checkbox.iconClass);e.parent().addClass("unchecked");e.prop("checked",!1)},radioEnable:function(e){e.parent().removeClass(r.radio.iconClass);e.parent().removeClass("unchecked");e.parent().addClass(r.radio.iconClass);e.parent().addClass("checked");e.prop("checked",!0)},radioDisable:function(e){e.parent().removeClass("checked");e.parent().removeClass(r.radio.iconClass);e.parent().addClass("unchecked");e.prop("checked",!1)}};n.each(function(t,n){$this=e(this);$this.is("input[type=checkbox]")&&i.checkbox($this);$this.is("input[type=radio]")&&i.radio($this);return this})}})(jQuery);