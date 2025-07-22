function GEN() {
	/* Get the number of characters to generate */
	let numtogen;
	let chars = Number(document.getElementById("length").value);
	console.log("[INFO] Password length requested (chars):", chars);

	/* Get checkbox elements */
	const caps = document.getElementById("caps");
	console.log("[INFO] Capital letters checkbox (caps):", caps);
	const nums = document.getElementById("nums");
	console.log("[INFO] Numbers checkbox (nums):", nums);
	const symbols = document.getElementById("symbols");
	console.log("[INFO] Symbols checkbox (symbols):", symbols);

	/* Set initial choices - always include lowercase (1) */
	let choices_array = [1];
	console.log(
		"[INIT] Starting choices_array (always includes lowercase):",
		choices_array
	);

	let pass = "";
	console.log("[INIT] Starting empty password string:", pass);

	/* Add user-selected options */
	if (caps.checked) {
		choices_array.push(2);
		console.log("[CHOICE] Added uppercase to choices_array:", choices_array);
	}
	if (nums.checked) {
		choices_array.push(3);
		console.log("[CHOICE] Added numbers to choices_array:", choices_array);
	}
	if (symbols.checked) {
		choices_array.push(4);
		console.log("[CHOICE] Added symbols to choices_array:", choices_array);
	}
	while (chars > 0) {
		/* Randomly pick one type to generate for now */
		let choice =
			choices_array[Math.floor(Math.random() * choices_array.length)];
		console.log("[PICK] Randomly selected type to generate (choice):", choice);

		/* Remove the selected type to avoid repetition (for future logic) */
		choices_array = choices_array.filter((n) => n !== choice);
		console.log(
			"[UPDATE] choices_array after removing picked type:",
			choices_array
		);

		/* Decide how many characters to generate */
		if (chars >= 3) {
			numtogen = Math.floor(Math.random() * (chars / 2) + 1);
			console.log(
				`[RANGE] chars >= 3, randomly picking numtogen (less than half): ${numtogen}`
			);
		} else {
			numtogen = chars;
			console.log(
				`[RANGE] chars < 3, using all chars for numtogen: ${numtogen}`
			);
		}

		/* Generate characters based on the chosen type */
		switch (choice) {
			case 1: // lowercase
				console.log("[GEN] Generating lowercase letters...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (122 - 97 + 1)) + 97
					);
					pass += c;
					console.log(`--> Added lowercase '${c}' | current pass: ${pass}`);
				}
				break;

			case 2: // uppercase
				console.log("[GEN] Generating uppercase letters...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (90 - 65 + 1)) + 65
					);
					pass += c;
					console.log(`--> Added uppercase '${c}' | current pass: ${pass}`);
				}
				break;

			case 3: // numbers
				console.log("[GEN] Generating numeric characters...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (57 - 48 + 1)) + 48
					);
					pass += c;
					console.log(`--> Added number '${c}' | current pass: ${pass}`);
				}
				break;

			case 4: // symbols
				console.log("[GEN] Generating symbols...");
				for (let i = 0; i < numtogen; i++) {
					let c = String.fromCharCode(
						Math.floor(Math.random() * (47 - 33 + 1)) + 33
					);
					pass += c;
					console.log(`--> Added symbol '${c}' | current pass: ${pass}`);
				}
				break;
		}

		console.log("[DONE] Final generated part of password:", pass);
		chars = chars - numtogen;
	}
}
