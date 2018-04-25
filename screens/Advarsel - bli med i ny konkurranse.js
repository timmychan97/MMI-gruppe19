app["Advarsel - bli med i ny konkurranse"] = {
	image: "Advarsel - bli med i ny konkurranse.png",
	elements: [
		new Button(264, 644, 164, 80, () => {
			app.deactivateScreen(app["Advarsel - bli med i ny konkurranse"]);
			app["Advarsel - bli med i ny konkurranse"].onClickNo();
		}),
		new Button(428, 650, 174, 70, () => {
			app.deactivateScreen(app["Advarsel - bli med i ny konkurranse"]);
			app["Advarsel - bli med i ny konkurranse"].onClickYes();
		})
	],
	height: 507,
	onClickYes: null,
	onClickNo: null,

	update: function() {

	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, appHeight*appScaleY/2 - this.height*appScaleY/2,
			appWidth*appScaleX, this.height*appScaleY);
	}
};