let Name = "Walid Bouhenika";
let firstname = Name.slice(0, Name.indexOf(" "));
console.log(firstname);
let lastname = Name.slice(Name.indexOf(" ") + 1, Name.length);
console.log(lastname);
//now standarlizing
let username = window.prompt("please type a username");
username =
	username.trim().charAt(0).toUpperCase() +
	username.slice(1, username.length).toLowerCase().replaceAll(" ", "_") +
	"_" +
	username.length;
console.log(username);
