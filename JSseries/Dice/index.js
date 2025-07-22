const Diceres = document.getElementById("Diceres");
const Diceimg = document.getElementById("Diceimg");
const DiceIT = [];
const DiceNT = [];

function DiceFunc() {
	const NUMofDice = document.getElementById("num").value;
	/*works here better until click then we read*/
	for (i = 1; i < NUMofDice; i++) {
		let x = Math.floor(Math.random() * 6 + 1);
		DiceNT.unshift(x);
		console(DiceNT);
	}
}
