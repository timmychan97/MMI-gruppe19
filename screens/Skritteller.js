app["Skritteller"] = {
	image: "Skritteller.png",
	elements: [
		new Button(402, 314, 168, 70, () => {
			app.deactivateScreen(app["Skritteller"]);
			app.activateScreen(app["Min profil"]);
			app["Min profil"].numSteps += parseInt(app["Skritteller"].currInput);
			app["Skritteller"].isReceivingInput = false;
			app["Skritteller"].currInput = "";
		}),

		new Button(0, -4, 116, 116, () => {
			app.deactivateScreen(app["Skritteller"]);
			app.activateScreen(app["Min profil"]);
			app["Skritteller"].isReceivingInput = false;
			app["Skritteller"].currInput = "";
		}),

		new Button(220, 324, 146, 52, ()=> {
			app["Skritteller"].isReceivingInput = true;
		})
	],
	isReceivingInput: false,
	cursorA: 0, //cursor alpha
	cAInc: false,
	currInput: "",

	update: function() {
		if(this.isReceivingInput) {
			this.cursorA += this.cAInc ? 0.05 : -0.05;
			if(this.cursorA >= 1) {
				this.cAInc = false,
				this.cursorA = 1;
			} else if(this.cursorA <= 0) {
				this.cursorA = 0;
				this.cAInc = true;
			}
		}
	},

	draw: function(ctx) {
		ctx.drawImage(images[this.image], 0, 0,
			appWidth*appScaleX, appHeight*appScaleY);
		ctx.textAlign = "start";
		ctx.fillText(this.currInput, 223*appScaleX, 350*appScaleY);
		ctx.fillStyle = "rgba(0, 0, 0, " + this.cursorA + ")";
		ctx.fillText("|", 223*appScaleX + ctx.measureText(this.currInput).width, 350*appScaleY)
	},

	onInput: function(e) {
		console.log(e);
		if(app["Skritteller"].isReceivingInput) {
			if(e.keyCode >= 48 && e.keyCode <= 57) {
				app["Skritteller"].currInput += "" + (e.keyCode - 48);
			}
		}
	}
};
document.addEventListener("keydown", (e) => {
	app["Skritteller"].onInput(e);
});
