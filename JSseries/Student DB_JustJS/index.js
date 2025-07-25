class Students {
	static sscount = 0;

	constructor(name, year, ...courses) {
		this.name = name;
		this.year = year;
		this.courses = courses;
		Students.sscount++; // use class name to access static
	}
}

const walid = new Students("Walid", 19, "Math", "2CP");
console.log(walid);
