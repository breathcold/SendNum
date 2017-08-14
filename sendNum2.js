;(function($,window,document,undefined){
	$.fn.sendNum = function(options){
		this.defaults = {
			time : 10,
			clickable : true,
			timeStart : options.time?options.time:10
		}
		this.settings = $.extend(true, this.defaults, options);
		var that = this;//this = $("#elem"),this[0]将jq对象转成js原生对象
		this[0].addEventListener('click',function(event){
			event.preventDefault();
			if(that.settings.clickable){
				var timer = setInterval(loop,1000);
				function loop(){
					that.settings.time--;
					if(that.settings.time>0){
						that.val()?that.val(that.settings.time+'s之后再次发送'):that.text(that.settings.time+'s之后再次发送');
						that.attr('disabled', 'true');
						that.settings.clickable = false;
					}else if(that.settings.time==0){
						that.val()?that.val('发送验证码'):that.text('发送验证码');
						that.removeAttr('disabled');
						that.settings.clickable = true;
						that.settings.time = that.settings.timeStart;
						that.settings.func && that.settings.func();
						clearInterval(timer);
					}
				}
			}
		})
		/*$(document).on('click', this, function(event) {
			event.preventDefault();
			//这种方法会导致点击一个所有元素上的点击事件都会触发
		});
		this.click(function(event) {
			event.preventDefault();
			//这种方法会导致动态加上的元素不能绑定事件
		});*/
		return this //返回这个对象就可以对他进行链式调用
	}
})(jQuery,window,document);