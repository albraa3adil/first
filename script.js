var color1 = document.querySelectorAll("input")[0]
var color2 = document.querySelectorAll("input")[1]
var h3 = document.querySelector("h3")
var body = document.getElementById('bod')

function x() {
	body.style.background = 
	("linear-gradient(to right, "+color1.value+", "+ color2.value+ ")");
	h3.textContent = body.style.background + ";"

}


color1.addEventListener("input", x);

color2.addEventListener("input", x);