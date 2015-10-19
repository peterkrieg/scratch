// // experiment with scope, hoisting, etc

// function sayThings(){
// 	console.log(name);
// }

// var name = "peter Krieg";

// sayThings();

// (function() {
// 	// Will return undefined, since hoisiting is equivalent as
// 	// var name;
// 	console.log(name);
// 	var name = "peter arthur krieg";
// 	console.log(name);
// })();


// (function() {
// 	var num = 1;
// 	var newNum = num--;
// 	console.log(num, newNum);
// 	console.log(num);
// 	console.log(newNum);
// })();


// ---------------practice with function calls

// function addNums(num1, num2){
// 	return (num1+num2);
// }

// console.log(addNums(2, 4));

// var result = addNums;
// var result2 = addNums(1, 3);

// console.log(result(4, 5));

// console.log(result2);

// console.log(typeof result, typeof result2);


// More practice with JS inheritance
// inherits function copied from before practice
// Example uses 4 levels of inheritance: 
//Person-->Student-->CollegeStudent-->PhysicsCollegeStudent


// function inherits(ctor, superCtor) {
// 	ctor.super_ = superCtor;
// 	ctor.prototype = Object.create(superCtor.prototype, {
// 		constructor: {
// 			value: ctor,
// 			enumerable: false,
// 			writable: true,
// 			configurable: true
// 		}
// 	});
// }

// var Person = function(name, gender, age, alive){
// 	this.human = true;
// 	this.name = name || 'Unnamed Person';
// 	this.gender = gender || 'male';
// 	this.age = age || 22;
// 	this.alive = alive || true;
// 	this.introduction = function(){
// 		console.log('Hello!  My name is ' +this.name + ', I am ' +this.gender+ ', I am '+this.age+ ' years old, and it is ' +this.alive+ ' that I am alive!!!!');
// 	};
// };

// var samantha = new Person('samantha', 'female', 33, true);
// samantha.introduction();

// var Student = function(gradeLevel){
// 	Student.super_.call(this);
// 	this.human = true;
// 	this.gradeLevel = gradeLevel || 'unknown grade level';
// 	this.tired = true;
// 	this.setPerson = function(name, gender, age){
// 		this.name = name;
// 		this.gender = gender;
// 		this.age = age;
// 	};
// };

// var CollegeStudent = function(major, minor, GPA){
// 	CollegeStudent.super_.call(this);
// 	this.major = major || 'uknown major';
// 	this.minor = minor || 'unknown minor';
// 	this.GPA = GPA || 2;
// 	this.setStudent = function(gradeLevel){
// 		this.gradeLevel = gradeLevel;
// 	};
// 	this.resume = function(){
// 		console.log('my name is ' +this.name+', I am a '+this.major+' major, '+this.minor+' minor, and my GPA is: '+this.GPA);
// 	};
// };

// var PhysicsCollegeStudent = function(thesis){
// 	PhysicsCollegeStudent.super_.call(this);
// 	this.thesis = thesis;
// 	this.major = 'physics';
// 	this.alive = false;
// 	this.setCollegeStudent = function(minor, GPA){
// 		this.minor = minor;
// 		this.GPA = GPA;
// 	};
// 	this.introduction2 = function(){
// 		console.log('my name is '+this.name+' my major is physics and my GPA is '+this.GPA);
// 	};

// };

// inherits(Student, Person);
// inherits(CollegeStudent, Student);
// inherits(PhysicsCollegeStudent, CollegeStudent);


// var peterKrieg = new PhysicsCollegeStudent('coding mechanics');
// peterKrieg.setPerson('Peter Krieg', 'male', 22);
// peterKrieg.setStudent(12);
// peterKrieg.setCollegeStudent('math', 3.5);
// console.log(peterKrieg.GPA);

// console.log(peterKrieg.human, peterKrieg.age);
// peterKrieg.introduction();
// peterKrieg.resume();
// console.log(peterKrieg.human);
































