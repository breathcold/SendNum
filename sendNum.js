// 这个分号的作用是防止和其他jquery插件合并时，别人不规范的jquery插件忘记使用分号结束
//影响到我们当前的插件，导致无法运行的问题。 
// undefined作为形参的目的是因为在es3中undefined是可以被修改的
//比如我们可以声明var undefined = 123,这样就影响到了undefined值的判断，幸运的是在es5中,undefined不能被修改了。
// window和document本身是全局变量，在这个地方作为形参的目的是因为js执行是从里到外查找变量的（作用域），把它们作为局部变量传进来，就避免了去外层查找，提高了效率。
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