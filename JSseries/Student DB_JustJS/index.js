//defining classes
class Students {
	static sscount = 0;

	constructor(name, year, ...courses) {
		this.name = name;
		this.year = year;
		this.courses = courses;
		Students.sscount++; // use class name to access static
	}
}
class Course {
	constructor(name, level, grade, coef = 1) {
		this.name = name;
		this.level = level;
		this.grade = grade;
		this.coef = coef;
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
// a fucntion that calculates the gpa (no coef for now)
function gpac(student) {
	//calculates a total using reduce
	let total = student.courses.reduce((acc, subject) => acc + subject.grade, 0);
	let NfCourses = student.courses.length;
	return total / NfCourses;
}
//with coef gpa
function gpa(student) {}

console.log(student1);
console.log(student2);
console.log(Students.sscount, "Number Of Students for now");
console.log(gpac(student1));
