app["Registrer bruker"] = {
	image: "Registrer bruker.png",
	elements: [
		// new Button(268, 362, 293, 33),

		new Button(248, 692, 218, 78, () => {
			app.deactivateScreen(app["Registrer bruker"]);
			app.activateScreen(app["Min profil"]);
			app.Navbar.setTab(3);
			app.Navbar.active = true;
			app.anon = app["Registrer bruker"].anon;
		}),

		new InputField(272, 360, 288, 30),
		new InputField(272, 400, 288, 30),
		new InputField(270, 441, 289, 30),
		new InputField(270, 480, 289, 30),
		new InputField(270, 520, 289, 30),

		new Button(538, 578, 18, 18, () => {
			if(!app.anon) {
				app.activateScreen(app["Advarsel - anonymitet_aktivert"]);
			} else {
				app.activateScreen(app["Advarsel - anonymitet_deaktivert"]);
			}
			// app["Registrer bruker"].anon = !app["Registrer bruker"].anon;
		})
	],

	// anon: false,

	update: function() {
		this.elements[1].update();
		this.elements[2].update();
		this.elements[3].update();
		this.elements[4].update();
		this.elements[5].update();
	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0, 
			appWidth*appScaleX, appHeight*appScaleY);
		this.elements[1].draw(ctx);
		this.elements[2].draw(ctx);
		this.elements[3].draw(ctx);
		this.elements[4].draw(ctx);
		this.elements[5].draw(ctx);

		if(app.anon) {
			ctx.fillStyle = "rgb(0, 0, 0)";
			ctx.fillRect(this.elements[6].x, this.elements[6].y,
				this.elements[6].width, this.elements[6].height);
		}
	}
};