app["Din plassering"] = {
	image: "Din plassering.png",
	elements: [
		new Button(-4, -2, 128, 112, () => {
			app.deactivateScreen(app["Din plassering"]);
			app.activateScreen(app.activeComp);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};