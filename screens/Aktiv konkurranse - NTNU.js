app["Aktiv konkurranse - NTNU"] = {
	image: "Aktiv konkurranse - NTNU.png",
	elements: [
		new Button(154, 942, 414, 88, () => {
			app.activateScreen(app["Advarsel - forlate"]);
			app["Advarsel - forlate"].onClickNo = () => {
				return;
			}
			app["Advarsel - forlate"].onClickYes = () => {
				app.activeComp = null;
				app.deactivateScreen(app["Aktiv konkurranse - NTNU"]);
				app.activateScreen(app["Aktiv konkurranse - ingen konkurranse"]);
			}
		}),

		new Button(570, 102, 154, 146, () => {
			app.deactivateScreen(app["Aktiv konkurranse - NTNU"]);
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