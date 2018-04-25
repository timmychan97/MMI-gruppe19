app["Advarsel - anonymitet_deaktivert"] = {
	image: "Advarsel - anonymitet_deaktivert.png",
	elements: [
		new Button(520, 625, 86, 60, ()=> {
			app.anon = false;
			app.deactivateScreen(app["Advarsel - anonymitet_deaktivert"]);
		})
	],
	height: 377,

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, appHeight*appScaleY/2 - this.height*appScaleY/2,
			appWidth*appScaleX, this.height*appScaleY);
	}
}