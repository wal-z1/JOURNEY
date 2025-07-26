//defining classes
class Students {
	static sscount = 0;
	// good idea to bea to access all students;
	static allstudentsarray = [];
	constructor(name, year, ...courses) {
		this.name = name;
		this.year = year;
		this.courses = courses;
		Students.sscount++; // use class name to access static
		Students.allstudentsarray.push(this); //adds the student to the all studnets array;
	}
	//with coef gpa
	get gpa() {
		let total = this.courses.reduce(
			(acc, subject) => acc + subject.grade * subject.coef,
			0
		);
		let NCoef = this.courses.reduce((acc, subject) => acc + subject.coef, 0);
		return total / NCoef;
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
	new Course("Math", "2CP", 13),
	new Course("English", "2CP", 13),
	new Course("French", "2CP", 20, 3)
);

// a fucntion that calculates the gpa (no coef for now)
function gpac(student) {
	//calculates a total using reduce
	let total = student.courses.reduce((acc, subject) => acc + subject.grade, 0);
	let NfCourses = student.courses.length;
	return total / NfCourses;
}

function percoursegpa(course) {}
console.log(student1);
console.log(student2);
console.log(Students.sscount, "Number Of Students for now");
console.log(gpac(student1));
// testing the coef one
console.log(student2.gpa);

//function to add student as variable
function addstudent(name, age, ...courses) {
	return new Students(name, age, ...courses);
}

//function to filter courses with a grade above 18
let abunchofcourses = [
	new Course("French", "2CP", 20, 3),
	new Course("English", "2CP", 13),
	new Course("Math", "2CP", 13),
];
let only13 = abunchofcourses.filter((course) => course.grade === 13);
console.log(abunchofcourses);
console.log(only13);
console.log(Students.allstudentsarray);
