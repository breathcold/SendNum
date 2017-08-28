;(function(win,dom){
	var design = 640,
		root = dom.documentElement,
		//evt = "onorientationchange" in window ? "orientationchange" : "resize";
		evt ="resize";

		function calcRem(){
			var clientW = dom.documentElement.clientWidth,
				r = parseInt(clientW/design*100);
			root.style.fontSize = r +"px";
		};

		calcRem();
		
		win.addEventListener(evt,calcRem,false);
		
}(window,document));
