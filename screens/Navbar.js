app["Navbar"] = {
	image: "Navbar.png",
	elements: [
		new Button(0, appHeight, appWidth/4, navbarHeight, () => {
			if(!app.Navbar.active) {
				return;
			}
			app.Navbar.setTab(0);
			app.removeAllScreens();
			if(app.activeComp === null) {
				app.activateScreen(app["Aktiv konkurranse - ingen konkurranse"]);
			} else {
				app.activateScreen(app.activeComp);
			}
		}),
		new Button(appWidth*1/4, appHeight, appWidth/4, navbarHeight, () => {
			if(!app.Navbar.active) {
				return;
			}
			app.Navbar.setTab(1);
			app.removeAllScreens();
			if(app.activeTeam === null) {
				app.activateScreen(app["Mitt lag - ingen lag"]);
			} else {
				app.activateScreen(app.activeTeam);
			}
		}),
		new Button(appWidth*2/4, appHeight, appWidth/4, navbarHeight, () => {
			if(!app.Navbar.active) {
				return;
			}
			app.Navbar.setTab(2);
			app.removeAllScreens();
			app.activateScreen(app["Utforsk"]);
		}),
		new Button(appWidth*3/4, appHeight, appWidth/4, navbarHeight, () => {
			if(!app.Navbar.active) {
				return;
			}
			app.Navbar.setTab(3);
			app.removeAllScreens();
			app.activateScreen(app["Min profil"]);
		})
	],

	activeTab: 5,
	targetTab: 5,
	active: false,

	setTab: function(tabNr) {
		this.targetTab = tabNr;
	},

	update: function() {
		if(this.activeTab !== this.targetTab) {
			this.activeTab += (this.targetTab - this.activeTab)*0.2;
		}
	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, appHeight*appScaleY,
			appWidth*appScaleX, navbarHeight*appScaleY);
		if(this.activeTab !== null) {
			ctx.fillStyle = "rgba(40, 40, 40, 0.3)";
			ctx.shadowBlur = 20;
			ctx.shadowColor = "black";
			ctx.fillRect(this.activeTab*appWidth*appScaleX/4, appHeight*appScaleY,
				appWidth*appScaleX/4, navbarHeight*appScaleY);
			ctx.shadowBlur = 0;
		}
		if(!this.active) {
			ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
			ctx.fillRect(0, appHeight*appScaleY,
				appWidth*appScaleX, navbarHeight*appScaleY);
		}
	}
};