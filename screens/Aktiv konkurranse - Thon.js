app["Aktiv konkurranse - Thon"] = {
	image: "Aktiv konkurranse - Thon.png",
	elements: [
		new Button(152, 940, 418, 92, () => {
			app.activateScreen(app["Advarsel - forlate"]);
			app["Advarsel - forlate"].onClickNo = () => {
				return;
			}
			app["Advarsel - forlate"].onClickYes = () => {
				app.activeComp = null;
				app.deactivateScreen(app["Aktiv konkurranse - Thon"]);
				app.activateScreen(app["Aktiv konkurranse - ingen konkurranse"]);
			}
		}),
		new Button(570, 102, 154, 146, () => {
			app.deactivateScreen(app["Aktiv konkurranse - Thon"]);
			app.activateScreen(app["Din plassering"]);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};