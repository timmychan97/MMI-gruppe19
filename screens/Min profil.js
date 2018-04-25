app["Min profil"] = {
	image: "Min profil.png",
	yOffset: 0,
	elements: [
		new Button(410, 0, 212, 84, () => {
			app.deactivateScreen(app["Min profil"]);
			app.activateScreen(app["Skritteller"]);
		}),

		new Button(536, 1020, 30, 30, () => {
			if(!app.anon) {
				app.activateScreen(app["Advarsel - anonymitet_aktivert"]);
			} else {
				app.activateScreen(app["Advarsel - anonymitet_deaktivert"]);
			}
		})
	],
	totalHeight: 1836,
	numSteps: 123,
	maxTextWidth: 300,

	update: function() {
		if(this.yOffset < 0) {
			this.yOffset -= (this.yOffset)*0.1;
		} else if(this.yOffset > this.totalHeight*appScaleY - appHeight*appScaleY) {
			this.yOffset -= (this.yOffset + appHeight*appScaleY - this.totalHeight*appScaleY)*0.1;
		}
		//skritteller button y pos
		this.elements[0].y = appHeight*appScaleY - this.yOffset + 80*appScaleY;
		this.elements[1].y = (appHeight - 45)*appScaleY - this.yOffset;
	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image],
			0, this.yOffset/appScaleY,
			appWidth, appHeight,
			0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
		if(this.yOffset > 0) {
			ctx.drawImage(images[this.image],
				0, 0,
				appWidth, navbarHeight,
				0, 0,
				appWidth*appScaleX, navbarHeight*appScaleY);
		}
		//draw "Skritt: 234234" text
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect(0, appHeight*appScaleY - this.yOffset + 80*appScaleY, appWidth*appScaleX/2, 80*appScaleY);
		ctx.textBaseline = "middle";
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.font = "18px Arial";
		ctx.fillText("Skritt: " + this.numSteps, 115*appScaleX, appHeight*appScaleY - this.yOffset + 120*appScaleY);
		
		//draw anon checkbox
		if(app.anon) {
			ctx.fillRect(540*appScaleX, (appHeight - 45)*appScaleY - this.yOffset, 
				20*appScaleX, 20*appScaleY);
		}
	},

	scroll: function(e) {
		app["Min profil"].yOffset += e.deltaY;
	}
};

document.addEventListener("wheel", app["Min profil"].scroll);