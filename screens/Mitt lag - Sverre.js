app["Mitt lag - Sverre"] = {
	image: "Mitt lag - Sverre.png",
	elements: [
		new Button(228, 954, 264, 88, () => {
			app.activateScreen(app["Advarsel - forlate"]);
			app["Advarsel - forlate"].onClickNo = () => {
				return;
			}
			app["Advarsel - forlate"].onClickYes = () => {
				app.activeTeam = null;
				app.deactivateScreen(app["Mitt lag - Sverre"]);
				app.activateScreen(app["Mitt lag - ingen lag"]);
			}
		}),

		new Button(74, 414, 578, 70, () => {
			app.deactivateScreen(app["Mitt lag - Sverre"]);
			app.activateScreen(app["Brukerprofil"]);
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};