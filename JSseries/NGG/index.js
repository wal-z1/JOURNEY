let wcounter = 0;
let ccounter = 0;
const sub = document.getElementById("sub");
sub.onclick = function game() {
	//reading values
	const min = Number(document.getElementById("min").value);
	const max = Number(document.getElementById("max").value);
	const number = Math.floor(Math.random() * max + min);
	const res = document.getElementById("res");
	const guess = Number(document.getElementById("guess").value);
	////checking
	console.log(max);
	console.log(min);
	console.log(guess);
	console.log(number);
	if (max >= min) {
		if (min === 0 && max === 0 && guess === 0) {
			res.textContent = `Fill all fields `;
		} else if (guess === number) {
			ccounter++;
			res.textContent = `CORRECT Attemps : \n ${ccounter} `;
		} else {
			wcounter++;
			res.textContent = `Wrong Attemps :\n ${wcounter} `;
		}
	} else {
		res.textContent = `Maximum must bigger then minimum `;
	}
};
