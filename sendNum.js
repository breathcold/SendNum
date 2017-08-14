;(function($,window,document,undefined){
	"use strict";
	var SendNum = function(options){
		this.default = {
			time : 10,
			clickable : true,
			timeStart : options.time?options.time:10
		}
		this.settings = $.extend({},this.default,{
			ele : options.ele,
			time : options.time,
			func : options.func
		});
		this.init()
	}
	SendNum.prototype.click = function(){
		var __this = this;
		$(document).on('click',__this.settings.ele,function(){
			if(__this.settings.clickable){
				var that = this,timer = setInterval(loop,1000);
				function loop(){
					__this.settings.time--;
					if(__this.settings.time>0){
						$(that).val()?$(that).val(__this.settings.time+'s之后再次发送'):$(that).text(__this.settings.time+'s之后再次发送');
						$(that).attr('disabled', 'true');
						__this.settings.clickable = false;
					}else if(__this.settings.time==0){
						$(that).val()?$(that).val('发送验证码'):$(that).text('发送验证码');
						$(that).removeAttr('disabled');
						__this.settings.clickable = true;
						__this.settings.time = __this.settings.timeStart;
						__this.settings.func && __this.settings.func();
						clearInterval(timer);
					}
				}
			}
		})
	};
	SendNum.prototype.init = function(){
		this.click()
	}
	window["SendNum"]=SendNum
})(jQuery,window,document);