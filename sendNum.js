
"use strict";

var SendNum = function(options){},clickable = true,timeStart = time;



SendNum.prototype = {
	"click" : function(){
		$(document).on('click',options.ele,function(){
			if(clickable){
				var that = this,timer = setInterval(loop,1000);
				function loop(){
					options.time--;
					if(options.time>0){
						$(that).val()?$(that).val(options.time+'s之后再次发送'):$(that).text(options.time+'s之后再次发送');
						$(that).attr('disabled', 'true');
						clickable = false;
					}else if(options.time==0){
						$(that).val()?$(that).val('发送验证码'):$(that).text('发送验证码');
						$(that).removeAttr('disabled');
						clickable = true;
						options.time = timeStart;
						options.func && options.func();
						clearInterval(timer);
					}
				}
			}
		})
	},
	"init" : function(){
		var options = $.extend({
			time : 60
		},options);
		this.click()
	}
}

SendNum.init(options)	

