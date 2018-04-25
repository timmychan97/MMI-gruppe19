app["Laginfo"] = {
	image: "Laginfo.png",
	elements: [
		new Button(258, 956, 206, 80, () => {
			app.deactivateScreen(app["Laginfo"]);
			app.activateScreen(app["Mitt lag - Sverre"]);
			app.Navbar.setTab(1);
			app.activeTeam = app["Mitt lag - Sverre"];
		}),

		new Button(74, 414, 578, 76, () => {
			app.deactivateScreen(app["Laginfo"]);
			app.activateScreen(app["Brukerprofil"]);
		}),

		new Button(0, -2, 136, 110, () => {
			app.deactivateScreen(app["Laginfo"]);
			app.activateScreen(app["Lagoversikt"]);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};