app["Aktiv konkurranse - ingen konkurranse"] = {
	image: "Aktiv konkurranse - ingen konkurranse.png",
	elements: [
		new Button(240, 594, 238, 82, () => {
			app.deactivateScreen(app["Aktiv konkurranse - ingen konkurranse"]);
			app.activateScreen(app["Utforsk"]);
			app.Navbar.setTab(2);
			app["Utforsk"].generateClickIndication(0);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};