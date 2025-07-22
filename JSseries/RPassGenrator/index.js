function GEN() {
	let numtogen;
	let chars = Number(document.getElementById("length").value);
	console.log("Length:", chars);
	const caps = document.getElementById("caps");
	const nums = document.getElementById("nums");
	const symbols = document.getElementById("symbols");
	const arraysy = `!@#$%^&*()_+-=[]{}|;:',.<>?/`;
	let choices_array = [1];
	let pass = "";

	if (caps.checked) {
		choices_array.push(2);
		console.log("Uppercase: ON");
	}
	if (nums.checked) {
		choices_array.push(3);
		console.log("Numbers: ON");
	}
	if (symbols.checked) {
		choices_array.push(4);
		console.log("Symbols: ON");
	}

	while (chars > 0) {
		let choice =
			choices_array[Math.floor(Math.random() * choices_array.length)];
		choices_array = choices_array.filter((n) => n !== choice);

		if (chars >= 3) {
			numtogen = Math.floor(Math.random() * (chars / 2) + 1);
			console.log("Chunk size:", numtogen);
		} else {
			numtogen = chars;
			console.log("Leftover size:", numtogen);
		}

		switch (choice) {
			case 1:
				console.log("Adding lowercase...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (122 - 97 + 1)) + 97
					);
					pass += c;
					console.log("-", c);
				}
				break;

			case 2:
				console.log("Adding uppercase...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (90 - 65 + 1)) + 65
					);
					pass += c;
					console.log("-", c);
				}
				break;

			case 3:
				console.log("Adding numbers...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (57 - 48 + 1)) + 48
					);
					pass += c;
					console.log("-", c);
				}
				break;

			case 4:
				console.log("Adding symbols...");
				for (let i = 0; i < numtogen; i++) {
					let c = arraysy[Math.floor(Math.random() * arraysy.length)];
					pass += c;
					console.log("-", c);
				}
				break;
		}

		console.log("Current pass:", pass);
		chars = chars - numtogen;
	}
	document.getElementById("result").textContent = pass;
}
