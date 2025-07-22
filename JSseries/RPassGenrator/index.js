const chars = document.getElementById("length").value; /*chaneg later on*/
const caps = document.getElementById("caps").value;
const nums = document.getElementById("nums").value;
const symbols = document.getElementById("symbols").value;

function GEN() {
	let pass = "";
	let c,
		n,
		s = false;
	if (caps.checked) {
		c = true;
	}
	if (nums.checked) {
		n = true;
	}
	if (symbols.checked) {
		s = true;
	}
}
