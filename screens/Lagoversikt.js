app["Lagoversikt"] = {
	image: "Lagoversikt.png",
	elements: [
		new Button(-2, 108, 726, 96, () => {
			if(app.activeTeam !== app["Mitt lag - Sverre"]) {
				app.deactivateScreen(app["Lagoversikt"]);
				app.activateScreen(app["Laginfo"]);
			} else {
				app.deactivateScreen(app["Lagoversikt"]);
				app.activateScreen(app.activeTeam);
				app.Navbar.setTab(1);
			}
		}),

		new Button(2, 0, 120, 110, () => {
			app.deactivateScreen(app["Lagoversikt"]);
			app.activateScreen(app["Utforsk"]);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};