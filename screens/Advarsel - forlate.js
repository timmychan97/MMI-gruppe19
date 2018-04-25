app["Advarsel - forlate"] = {
	image: "Advarsel - forlate.png",
	elements: [
		new Button(500, 616, 116, 82, () => {
			app.deactivateScreen(app["Advarsel - forlate"]);
			app["Advarsel - forlate"].onClickYes();
		}),

		new Button(366, 624, 128, 68, () => {
			app.deactivateScreen(app["Advarsel - forlate"]);
			app["Advarsel - forlate"].onClickNo();
		})
	],
	onClickYes: null,
	onClickNo: null,
	height: 377,


	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, appHeight*appScaleY/2 - this.height*appScaleY/2,
			appWidth*appScaleX, this.height*appScaleY);
	}
};