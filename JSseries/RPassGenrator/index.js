function GEN() {
	/*get ur things*/
	const chars = Number(document.getElementById("length").value);
	console.log("chars:", chars);
	/*check boxes*/
	const caps = document.getElementById("caps");
	console.log("caps:", caps);
	const nums = document.getElementById("nums");
	console.log("nums:", nums);
	const symbols = document.getElementById("symbols");
	console.log("symbols:", symbols);
	choices_array = [1];
	console.log("choices_array:", choices_array);
	let pass = "";
	console.log("pass:", pass);
	if (caps.checked) {
		choices_array.push(2);
		console.log("choices_array:", choices_array);
	}
	if (nums.checked) {
		choices_array.push(3);
		console.log("choices_array:", choices_array);
	}
	if (symbols.checked) {
		choices_array.push(4);
		console.log("choices_array:", choices_array);
	}
	let choice = choices_array[Math.floor(Math.random() * choices_array.length)];
	console.log("choice:", choice);
	/*removes choice from the array */
	choices_array = choices_array.filter((n) => n !== choice);
	console.log("choices_array:", choices_array);

	/* while (chars > 0) { remove for now*/
	if (chars >= 3) {
		/*for picking type of chars to generate LESS the half the length*/
		let numtogen = Math.floor(Math.random() * (chars / 2) + 1);
		console.log("numtogen:", numtogen);
	} else {
		numtogen = chars; /*just fill the rest*/
		console.log("numtogen:", numtogen);
	}
	switch (choice) {
		case 1: // lowercase letters: a–z (97–122)
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (122 - 97 + 1)) + 97
				);
				pass += c;
				console.log("pass:", pass);
			}
			break;

		case 2: // uppercase letters: A–Z (65–90)
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (90 - 65 + 1)) + 65
				);
				pass += c;
				console.log("pass:", pass);
			}
			break;

		case 3: // numbers: 0–9 (48–57)
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (57 - 48 + 1)) + 48
				);
				pass += c;
				console.log("pass:", pass);
			}
			break;

		case 4: // symbols: ! to / (33–47) – can expand if needed
			for (let i = 0; i < numtogen; i++) {
				let c = String.fromCharCode(
					Math.floor(Math.random() * (47 - 33 + 1)) + 33
				);
				pass += c;
				console.log("pass:", pass);
			}
			break;
	}
}
