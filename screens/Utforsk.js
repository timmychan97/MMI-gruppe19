app["Utforsk"] = {
	image: "Utforsk.png",
	elements: [
		new Button(23, 106, 682, 124, () => {
			app.deactivateScreen(app["Utforsk"]);
			app.activateScreen(app["Konkurranser"]);
		}),
		new Button(23, 230, 672, 124, () => {
			app.deactivateScreen(app["Utforsk"]);
			app.activateScreen(app["Lagoversikt"]);
		})
	],
	clickIndicationAnim: false,
	clickIndicationElement: 0,
	clickIndicationA: 0,
	dec: false,
	headerAnim: false,
	headerPos: -108*appScaleY,

	update: function() {
		if(this.clickIndicationAnim) {
			if(this.dec) {
				this.clickIndicationA -= 0.05;
				if(this.clickIndicationA <= 0) {
					this.clickIndicationAnim = false;
					this.dec = false;
				}
			} else {
				this.clickIndicationA += 0.05;
				if(this.clickIndicationA >= 0.4) {
					this.dec = true;
				}
			}
		}
	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
		if(this.clickIndicationAnim) {
			ctx.fillStyle = "rgba(100, 100, 100, " + this.clickIndicationA + ")";
			ctx.fillRect(this.elements[this.clickIndicationElement].x, this.elements[this.clickIndicationElement].y,
				this.elements[this.clickIndicationElement].width, this.elements[this.clickIndicationElement].height);
			ctx.restore();
		}
	},

	generateClickIndication: function(element) {
		if(clickIndication) {
			this.clickIndicationElement = element;
			this.clickIndicationAnim = true;
		}
	}
};