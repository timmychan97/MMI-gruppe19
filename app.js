var app = {
	activeScreens: [],
	activeComp: null,
	activeTeam: null,
	anon: false,

	init: function() {
		inputHandler.mouseDownEvent.subscribe(this.mouseDown.bind(this));
	},

	update: function() {
		this.Navbar.update();
		for(let i = 0; i < this.activeScreens.length; i++) {
			this.activeScreens[i].update();
		}
	},

	draw: function(ctx) {
		for(let i = 0; i < this.activeScreens.length; i++) {
			this.activeScreens[i].draw(ctx);
			if(debug) {
				for(let j = 0; j < this.activeScreens[i].elements.length; j++) {
					//ctx.fillStyle = "hsl(" + Math.floor(j/this.activeScreens[i].elements.length*360) + ", 50%, 100%)";
					ctx.fillStyle = "rgba(200, 40, 40, 0.5)";
					ctx.fillRect(this.activeScreens[i].elements[j].x, this.activeScreens[i].elements[j].y,
						this.activeScreens[i].elements[j].width, this.activeScreens[i].elements[j].height);
				}
			}
		}
		this.Navbar.draw(ctx);
	},

	mouseDown: function(x, y) {
		for(let i = 0; i < this.activeScreens.length; i++) {
			for(let j = 0; j < this.activeScreens[i].elements.length; j++) {
				if(this.activeScreens[i].elements[j].mouseDown(x, y)) { //hit an element, so we stop
					i = this.activeScreens.length;
					break;
				}	
			}
		}
		for(let i = 0; i < this.Navbar.elements.length; i++) {
			this.Navbar.elements[i].mouseDown(x, y);
		}
	},

	deactivateScreen: function(screen) {
		this.activeScreens = this.activeScreens.filter((el) => {
			return el !== screen;
		});
	},

	activateScreen: function(screen) {
		this.activeScreens.push(screen);
	},

	removeAllScreens: function() {
		this.activeScreens = [];
	}

}