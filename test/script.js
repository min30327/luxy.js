
	var windowWidth;
	var bgSection = document.querySelectorAll('.bg-section');
	var vhElement = document.querySelectorAll('.vh-element');

	
	function resize(){
		if(windowWidth != window.innerWidth){
			windowWidth = window.innerWidth;
			for (var i = bgSection.length - 1; i >= 0; i--) {
				bgSection[i].style.height = window.innerHeight + 'px';
			}
			for (var i = vhElement.length - 1; i >= 0; i--) {
				var props = vhElement[i].getAttribute('data-props').split(',');
				var values = vhElement[i].getAttribute('data-values').split(',');
				for (var l = props.length - 1; l >= 0; l--) {
					vhElement[i].style[props[l]] = (window.innerHeight * values[l] / 100) + 'px';
				}
			}
		}
		isResize = false;
	}
	
	resize();

	window.addEventListener('resize',function(){
		if(!isResize){
			setTimeout(function(){
				isResize = true;
				resize();
			},200)
		}
	})