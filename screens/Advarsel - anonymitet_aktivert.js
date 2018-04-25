app["Advarsel - anonymitet_aktivert"] = {
	image: "Advarsel - anonymitet_aktivert.png",
	elements: [
		new Button(520, 625, 86, 60, ()=> {
			app.anon = true;
			// app["Advarsel - anonymitet_aktivert"].onOk();
			app.deactivateScreen(app["Advarsel - anonymitet_aktivert"]);

		})
	],

	height: 377,
	onOk: null,

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, appHeight*appScaleY/2 - this.height*appScaleY/2,
			appWidth*appScaleX, this.height*appScaleY);
	}
}