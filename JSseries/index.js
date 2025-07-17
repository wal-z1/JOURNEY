// learning input
let username;
console.log(username);
let howmanytimes = 0;
const x = Math.PI;

document.getElementById("submitform").onclick = function () {
	username = document.getElementById("userform").value;
	document.getElementById("user").textContent = ` UPDATED ${username} ${x}`;
	howmanytimes++;
	document.getElementById("times").textContent = `${howmanytimes}`;
};
