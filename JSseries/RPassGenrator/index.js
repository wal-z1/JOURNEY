function GEN() {
	/* Get the number of characters to generate */
	let numtogen;
	const chars = Number(document.getElementById("length").value);

	/* Get checkbox elements */
	const caps = document.getElementById("caps");

	const nums = document.getElementById("nums");

	const symbols = document.getElementById("symbols");

	/* Set initial choices - always include lowercase (1) */
	let choices_array = [1];

	let pass = "";

	/* Add user-selected options */
	if (caps.checked) {
		choices_array.push(2);
	}
	if (nums.checked) {
		choices_array.push(3);
	}
	if (symbols.checked) {
		choices_array.push(4);
	}

	/* Randomly pick one type to generate for now */
	let choice = choices_array[Math.floor(Math.random() * choices_array.length)];

	/* Remove the selected type to avoid repetition (for future logic) */
	choices_array = choices_array.filter((n) => n !== choice);

	/* Decide how many characters to generate */
	if (chars >= 3) {
		numtogen = Math.floor(Math.random() * (chars / 2) + 1);
		console.log();
	} else {
		numtogen = chars;
	}

	/* Generate characters based on the chosen type */
	switch (choice) {
		case 1: // lowercase
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (122 - 97 + 1)) + 97
				);
				pass += c;
			}
			break;

		case 2: // uppercase
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (90 - 65 + 1)) + 65
				);
				pass += c;
			}
			break;

		case 3: // numbers
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (57 - 48 + 1)) + 48
				);
				pass += c;
			}
			break;

		case 4: // symbols
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (47 - 33 + 1)) + 33
				);
				pass += c;
			}
			break;
	}
}
