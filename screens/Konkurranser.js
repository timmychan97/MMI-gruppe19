app["Konkurranser"] = {
	image: "Konkurranser.png",
	elements: [
		new Button(0, 512, 726, 98, () => {
			if(app.activeComp === app["Aktiv konkurranse - NTNU"]) {
				app.deactivateScreen(app["Konkurranser"]);
				app.Navbar.setTab(0);
				app.activateScreen(app.activeComp);
			} else {
				app.deactivateScreen(app["Konkurranser"]);
				app.activateScreen(app["Konkurranseinfo - NTNU"]);
			}
		}),
		new Button(0, 908, 726, 104, () => {
			if(app.activeComp === app["Aktiv konkurranse - Thon"]) {
				app.deactivateScreen(app["Konkurranser"]);
				app.Navbar.setTab(0);
				app.activateScreen(app.activeComp);
			} else {
				app.deactivateScreen(app["Konkurranser"]);
				app.activateScreen(app["Konkurranseinfo - Thon"]);
			}
		}),

		new Button(2, 0, 120, 110, () => {
			app.deactivateScreen(app["Konkurranser"]);
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