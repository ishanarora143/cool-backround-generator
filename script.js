var colors = '0123456789ABCDEF'
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient");
var button = document.getElementById("random");
var css    =document.querySelector("h3");
 setGradient();

function genColor(){
	var color = "#";
	var colo  = "#";
	for (i=0;i<6;i++){
		color +=getRandom();
		colo  +=getRandom();
	}
	color1.value = color;
	color2.value = colo;

	setGradient();
}

 setGradient();
 function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}



function getRandom(){
	x=colors[Math.floor(Math.random()*16)];
	return x;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);