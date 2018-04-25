app["Konkurranseinfo - Thon"] = {
	image: "Konkurranseinfo - Thon.png",
	elements: [
		new Button(196, 672, 326, 126, () => {
			if(app.activeComp === null) {
				app.deactivateScreen(app["Konkurranseinfo - Thon"]);
				app.activateScreen(app["Aktiv konkurranse - Thon"]);
				app.Navbar.setTab(0);
				app.activeComp = app["Aktiv konkurranse - Thon"];
			} else {
				app.activateScreen(app["Advarsel - bli med i ny konkurranse"]);
				app["Advarsel - bli med i ny konkurranse"].onClickNo = () => {
					return;
				}
				app["Advarsel - bli med i ny konkurranse"].onClickYes = () => {
					app.deactivateScreen(app["Konkurranseinfo - Thon"]);
					app.activateScreen(app["Aktiv konkurranse - Thon"]);
					app.Navbar.setTab(0);
					app.activeComp = app["Aktiv konkurranse - Thon"];
				}
			}
		}),

		new Button(2, -4, 118, 114, () => {
			app.deactivateScreen(app["Konkurranseinfo - Thon"]);
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