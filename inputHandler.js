var inputHandler = {
	rect: null,
	lmb: false,
	startX: null,
	startY: null,
	x: null,
	y: null,

	//events
	numberKeyEvent: new Event(),
	mouseDownEvent: new Event(),

	init: function() {
		this.rect = can.getBoundingClientRect();
		document.addEventListener("mousedown", this.mouseDown);
		document.addEventListener("mouseup", this.mouseUp);
		document.addEventListener("mousemove", this.mouseMove);
		document.addEventListener("keydown", this.keyDown);
	},

	mouseDown: function(e) {
		var x = e.clientX - inputHandler.rect.left;
		var y = e.clientY - inputHandler.rect.top;
		inputHandler.lmb = true;
		inputHandler.startX = x;
		inputHandler.startY = y;
		inputHandler.x = x;
		inputHandler.y = y;
		inputHandler.mouseDownEvent.fire(x, y);
	},

	mouseUp: function(e) {
		var x = e.clientX - inputHandler.rect.left;
		var y = e.clientY - inputHandler.rect.top;
		console.log("Button(" + inputHandler.startX/appScaleX
			+ ", " + inputHandler.startY/appScaleY
			+ ", " + (x - inputHandler.startX)/appScaleX
			+ ", " + (y - inputHandler.startY)/appScaleY + ")");
		inputHandler.lmb = false;
	},

	mouseMove: function(e) {
		if(inputHandler.lmb) {
			var x = e.clientX - inputHandler.rect.left;
			var y = e.clientY - inputHandler.rect.top;
			inputHandler.x = x;
			inputHandler.y = y;
		}
	},

	keyDown: function(e) {
		if(e.keycode >= 47 && e.keycode <= 56) {
			inputHandler.numberKeyEvent.fire();
		}
	}
};