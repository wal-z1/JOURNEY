class Students {
	static sscount = 0;

	constructor(name, year, ...courses) {
		this.name = name;
		this.year = year;
		this.courses = courses;
		sscount++;
	}
}

const walid = new Students("Walid", 19, "Math", "2CP");
console.log(walid);
