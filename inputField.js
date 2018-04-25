function InputField(x, y, width, height, eventCreator) {
	this.x = x*appScaleX;
	this.y = y*appScaleY;
	this.width = width*appScaleX;
	this.height = height*appScaleY;

	var receivingInput = false;
	var currInput = "";
	var textWidth = 0;
	var fontSize = 15;
	var alpha = 0;
	var inc = true;

	this.update = function() {
		if(inc) {
			alpha += 0.05;
			if(alpha >= 1) {
				alpha = 1;
				inc = false;
			}
		} else {
			alpha -= 0.05;
			if(alpha <= 0) {
				alpha = 0;
				inc = true;
			}
		}
	}

	this.draw = function(ctx) {
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.textBaseline = "middle";
		ctx.textAlign = "start";
		ctx.font = fontSize + "px Arial";
		ctx.fillText(currInput, this.x, this.y + this.height/2);
		if(receivingInput) {
			ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
			ctx.fillText("|", this.x + textWidth, this.y + this.height/2);
		}
	}

	this.mouseDown = function(x, y) {
		if(x > this.x && x < this.x + this.width
			&& y > this.y && y < this.y + this.height) {
			receivingInput = true;
			return true;
		}
		receivingInput = false;
		return false;
	}

	this.keyDown = function(e) {
		if(receivingInput) {
			currInput += e.key;
			textWidth = ctx.measureText(currInput).width;
		}
	}
	document.addEventListener("keydown", this.keyDown);

}