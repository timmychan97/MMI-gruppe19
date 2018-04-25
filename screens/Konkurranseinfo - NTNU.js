app["Konkurranseinfo - NTNU"] = {
	image: "Konkurranseinfo - NTNU.png",
	elements: [
		new Button(184, 758, 328, 112, () => {
			if(app.activeComp === null) {
				app.deactivateScreen(app["Konkurranseinfo - NTNU"]);
				app.activateScreen(app["Aktiv konkurranse - NTNU"]);
				app.Navbar.setTab(0);
				app.activeComp = app["Aktiv konkurranse - NTNU"];
			} else {
				app.activateScreen(app["Advarsel - bli med i ny konkurranse"]);
				app["Advarsel - bli med i ny konkurranse"].onClickNo = () => {
					return;
				}
				app["Advarsel - bli med i ny konkurranse"].onClickYes = () => {
					app.deactivateScreen(app["Konkurranseinfo - NTNU"]);
					app.activateScreen(app["Aktiv konkurranse - NTNU"]);
					app.Navbar.setTab(0);
					app.activeComp = app["Aktiv konkurranse - NTNU"];
				}
			}
		}),

		new Button(2, -4, 118, 114, () => {
			app.deactivateScreen(app["Konkurranseinfo - NTNU"]);
			app.activateScreen(app["Konkurranser"]);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}

};