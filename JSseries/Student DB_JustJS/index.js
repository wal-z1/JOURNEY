class Students {
	static sscount = 0;

	constructor(name, year, ...courses) {
		this.name = name;
		this.year = year;
		this.courses = courses;
		Students.sscount++; // use class name to access static
	}
}

const student1 = new Students(
	"Alex",
	19,
	{
		name: "Math",
		level: "2CP",
		grade: 19,
	},
	{
		name: "English",
		level: "2CP",
		grade: 17,
	}
);

const student2 = new Students(
	"Walt",
	19,
	{
		name: "Math",
		level: "2CP",
		grade: 13,
	},
	{
		name: "English",
		level: "2CP",
		grade: 13,
	}
);

console.log(student1);
console.log(student2);
console.log(Students.sscount);
