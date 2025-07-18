//empty
const love = document.getElementById("love");
const like = document.getElementById("like");
const hate = document.getElementById("hate");
const check = document.getElementById("checkboxer");
const submit = document.getElementById("submiter");
const msg1 = document.getElementById("MSG1");
const msg2 = document.getElementById("MSG2");
submit.onclick = function () {
	if (check.checked) {
		msg1.textContent = "checked";
	} else {
		msg1.textContent = "not checked";
	}
	if (like.checked) {
		msg2.textContent = "like";
	} else if (love.checked) {
		msg2.textContent = "love";
	} else {
		msg2.textContent = "hate";
	}
};
