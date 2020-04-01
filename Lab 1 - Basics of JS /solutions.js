// Question 1
/*
Dylan Elley
421537123
*/

// Question 2
let answer = 1 + 2 + 3 + 4 + 5;
console.log(answer);

// Question 3
let height = 50;
let base = 20;
let area = (base * height) / 2;
console.log(area);

// Question 4
// Sphere equation is 4 PI r^2
const PI = 3.14;
let radius = 10;
let sphereArea = 4 * PI * Math.pow(radius, 2);
console.log(sphereArea);

// Question 5
console.log("The sum of 5 and 3 is " + (5+3) + ".");

// Question 6
let age = 33;
console.log("My age is " + age + " years old.");

// Question 7
console.log("in JavaScript, we use the (\\) to escape special characters.");

// Quesiton 8

console.log("Einstein once said: \"Life is like riding a bicycle. To keep your balance you must keep moving.\"");

// Question 9
let num1 = 12;
let num2 = 7;
console.log(num1 >= num2);


// Question 10
let number1 = 10;
let number2 = 9;

console.log((number1 > number2) && (number2 > 0));


// Question 11
let number3 = 13;
let number4 = 13;

console.log((number1 == number2) || (number2 < 10));


// Question 12
let variable = 15;
console.log(typeof(variable) == "number");

// Question 13
let number5 = 3;
let number6 = 1;

let sum = number5 + number6;
let product = number5 * number6;

console.log(sum > product);

// Question 14
// Cone equation = PI * r^2 * h/3
// Cylinder = PI * r^2 * h
let base2 = 3;
let height2 = 99;
let coneVolume = PI * Math.pow(base/2, 2) * height/3;
let cylinderVolume = PI * Math.pow(base/2, 2) * height;

console.log("The volume of the cone", coneVolume, "is greater than the volume of the volume of the cylinder", cylinderVolume, ":", (coneVolume > cylinderVolume));

// Question 15 (extra question)
// XOR evaluates to false when both inputs are equal, true otherwise
let switch1 = false
let switch2 = true

// possable answers
console.log(!((switch1 && switch2) || (!switch1 && !switch2)))

console.log((!switch1 && switch2) || (switch1 && !switch2))

console.log(switch1 != switch2)

