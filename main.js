var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");
can.width = appWidth*appScaleX;
can.height = (appHeight + navbarHeight)*appScaleY;
var images = {};
var imageNames = ["Advarsel - bli med i ny konkurranse.png", 
"Advarsel - forlate.png", 
"Aktiv konkurranse - ingen konkurranse.png", 
"Aktiv konkurranse - NTNU.png", 
"Aktiv konkurranse - Thon.png", 
"Brukerprofil.png", 
"Din plassering.png", 
"Konkurranseinfo - NTNU.png", 
"Konkurranseinfo - Thon.png", 
"Konkurranser.png", 
"Laginfo.png", 
"Lagoversikt.png", 
"Min profil.png", 
"Mitt lag - ingen lag.png", 
"Mitt lag - Sverre.png", 
"Navbar.png", 
"Registrer bruker.png", 
"Skritteller.png", 
"Utforsk.png",
"Advarsel - anonymitet_aktivert.png",
"Advarsel - anonymitet_deaktivert.png"];
var numLoadedImages = 0;

var updateQ = [];
var drawQ = [];


function update() {
	app.update();
	for(let index in updateQ) {
		updateQ[index].update();
	}
}

function draw() {
	ctx.fillStyle = "rgb(70, 70, 70)";
	ctx.fillRect(0, 0, can.width, can.height);
	app.draw(ctx);
	if(inputHandler.lmb) {
		ctx.fillStyle = "rgba(200, 40, 40, 0.4)";
		ctx.fillRect(inputHandler.startX, inputHandler.startY,
			inputHandler.x - inputHandler.startX, inputHandler.y - inputHandler.startY);
	}
	for(let index in drawQ) {
		drawQ[index].draw(ctx);
	}
}

function main() {
	update();
	draw();

	requestAnimationFrame(main);
}

(function setup() {
	inputHandler.init();
	app.init();

	for(let i = 0; i < imageNames.length; i++) {
		let newImg = new Image();
		newImg.onload = () => {
			images[imageNames[i]] = newImg;
			// ctx.drawImage(newImg, 0, 0, appWidth, appHeight);
			numLoadedImages++;
			if(numLoadedImages === imageNames.length) {
				main();
			}
		};
		newImg.src = "images/" + imageNames[i];
	}
	app.activeScreens.push(app["Registrer bruker"]);
	// main();
})();