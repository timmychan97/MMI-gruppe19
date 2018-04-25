function Button(x, y, width, height, onClick) {
	this.x = x*appScaleX;
	this.y = y*appScaleY;
	this.width = width*appScaleX;
	this.height = height*appScaleY;
	this.onClick = onClick || function() {
		console.log("unimplemented onClick :^)");
	};

	this.mouseDown = function(x, y) {
		if(x > this.x && x < this.x + this.width
			&& y > this.y && y < this.y + this.height) {
			this.onClick();
			return true;
		}
		return false;
	}
}