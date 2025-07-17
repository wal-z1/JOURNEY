// learning input
let username;
console.log(username);
let howmanytimes = 0;

document.getElementById("submitform").onclick = function () {
	username = document.getElementById("userform").value;
	document.getElementById("user").textContent = ` UPDATED ${username}`;
	howmanytimes++;
	document.getElementById("times").textContent = `${howmanytimes}`;
};
