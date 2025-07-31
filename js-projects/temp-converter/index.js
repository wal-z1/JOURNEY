
const button = document.getElementById("but");
const FTOCv = document.getElementById("FTOC");
const res = document.getElementById("res");

function FTOC(x) {
	return ((x - 32) * 5) / 9;
}
function CTOF(x) {
	return (x * 9) / 5 + 32;
}
function decide() {
	const value = Number(document.getElementById("in").value); 
	if (FTOCv.checked) {
		res.textContent = FTOC(value);
	} else {
		res.textContent = CTOF(value);
	}
}

button.onclick = decide;
