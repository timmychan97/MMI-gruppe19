app["Brukerprofil"] = {
	image: "Brukerprofil.png",
	elements: [
		new Button(2, 2, 130, 106, () => {
			app.deactivateScreen(app["Brukerprofil"]);
			if(app.activeTeam) {
				app.activateScreen(app.activeTeam);
			} else {
				app.activateScreen(app["Laginfo"]);
				
			}
		})
	],

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
	}
};