//random number generator test
let max, min;
document.getElementById("but").onclick = function () {
	max = Number(document.getElementById("maxin").value);
	min = Number(document.getElementById("minin").value);
	document.getElementById("num").value = Math.floor(Math.random() * max + min);
};
