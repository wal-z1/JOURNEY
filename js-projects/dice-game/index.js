const Diceres = document.getElementById("Diceres");
const Diceimg = document.getElementById("Diceimg");
const DiceIT = [];
const DiceNT = [];

function DiceFunc() {
	DiceNT.length = 0; // Clears the arrays each time
	DiceIT.length = 0;
	const NUMofDice = document.getElementById("num").value;
	/*works here better until click then we read*/
	for (i = 1; i <= NUMofDice; i++) {
		/*filled an array of randomly genrate numbers*/
		let x = Math.floor(Math.random() * 6 + 1);
		DiceNT.unshift(x);
		/*link the path to the element*/
		DiceIT.unshift(`<img src="dice-${x}.png" alt="Dice Images" >`);
	}
	/*debuggin*/
	console.log(...DiceNT);
	console.log(...DiceIT);
	Diceres.textContent = DiceNT.join(" ,  ");
	Diceimg.innerHTML = DiceIT.join("  ");
}
