// Question 1
function getLargest(x, y=undefined) {
	if (y==undefined) {
  	return x;
  }
  else if (x > y) {
  	return x;
  }
  else {
  	return y;
  }
}

// Question 2
let student = 
  {id: "123456", firstName: "Jack", lastName: "Smith", DOB: "27-05-1998", major: "Infosys", currentYearOfStudy: 2020};

// Quesition 3.1
function viewStudent(student) {
	console.log("Student ID: ", student.id);
  console.log("First Name: ", student.firstName);
  console.log("Last Name: ", student.lastName);
  console.log("Date of birth: ", student.DOB);
  console.log("Major: ", student.major);
  console.log("Current year of study: ", student.currentYearOfStudy);
}

//Question 3.2
function viewStudentProperty(student, property) {
	if (property in student) {
  	return student[property];
  }
  else {
  	return "N/A";
  }
}

// Question 3.3
function updateProperty(object, property, value) {
	if (property in object) {
  	object[property] = value;
    return true;
  }
  else {
  	return false;
  }
}

// Question 4
let order = [
{itemName: "Vegetable slicer", price: 48, quantity: 1},
{itemName: "Grill mat", price: 10, quantity: 10},
{itemName: "Meal container", price: 10, quantity: 2},
{itemName: "Stainless steel tumbler", price: 15, quantity: 2}
];

function total(order) {
	let total = 0;
  for (var i=0; i<order.length; i++) {
  	total += (order[i].price) * (order[i].quantity);
  }
  return total
}

// Question 5
let staff = [
  {id: "U1", name: "Jose", age: 33},
  {id: "U2", name: "John", age: 20}, 
  {id: "U3", name: "Mary", age: 27},
  {id: "U4", name: "Paul", age: 26},
  {id: "U5", name: "Jack", age: 30},
  {id: "U6", name: "Pedro", age: 31}
];

function findClosestAge(staff, person) {
	let diff = 1000
  let newPerson
	for(var i=0; i<staff.length; i++) {
  	if (staff[i] != person) {
    	if (Math.abs(person.age - staff[i].age) < diff) {
      	newPerson = staff[i];
        diff = Math.abs(person.age - staff[i].age);
      }
    }
  }
  return newPerson;
}
console.log(findClosestAge(staff, staff[3]))