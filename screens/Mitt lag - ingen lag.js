app["Mitt lag - ingen lag"] = {
	image: "Mitt lag - ingen lag.png",
	elements: [
	new Button(240, 596, 240, 78, () => {
		app.Navbar.setTab(2);
		app.deactivateScreen(app["Mitt lag - ingen lag"]);
		app.activateScreen(app["Utforsk"]);
		app["Utforsk"].generateClickIndication(1);
	})],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};