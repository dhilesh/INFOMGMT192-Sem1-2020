/* Question 1
Dylan Elley
421537123
*/

// Question 2
answer = 1 + 2 + 3 + 4 + 5
console.log(answer)

// Question 3
height = 50
base = 20
area = (base * height) / 2
console.log(area)

// Question 4
// Sphere equation is 4 PI r^2
const PI = 3.14
radius = 10
sphereArea = 4 * PI * Math.pow(radius, 2)
console.log(sphereArea)

// Question 5

console.log("The sum of 5 and 3 is " + (5+3) + ".")

// Question 6
age = 33
console.log("My age is " + age + " years old.")

// Question 7
console.log("in JavaScript, we use the (\\) to escape special characters.")

// Quesiton 8
console.log('Einstein once said: "Life is like riding a bicycle. To keep your balance you must keep moving."')

console.log("Einstein once said: \"Life is like riding a bicycle. To keep your balance you must keep moving.\"")

// Question 9
num1 = 12
num2 = 7
if (num1 >= num2) {
	console.log("Number 1 is greater or equal to number 2.")
}
else {
	console.log("Number 1 is not greater or equal to number 2")
}

// Question 10
// XOR evaluates to false when both variables have equal states otherwise true
switch1 = true
switch2 = false

if ((switch1 && switch2) || (!switch1 && !switch2)) {
	console.log("Both Switch 1 and 2 have the same state")
}
else {
	console.log("switch 1 and 2 are different")
}

// Question 11
number1 = 10
number2 = 9

if ((number1 > number2) && (number2 > 0)) {
	console.log("These numbers satisfy the conditions")
}
else {
	console.log("These numbers do not satisfy the conditions")
}

// Question 12
number1 = 13
number2 = 13

if ((number1 == number2) && (number2 > 0)) {
	console.log("These numbers satisfy the conditions")
}
else {
	console.log("These numbers do not satisfy the conditions")
}

// Question 13
variable = "15"

if (typeof(variable) == "number") {
	console.log("This variable is a number")
}
else {
	console.log("This variable is not a number")
}

// Question 14
number1 = 3
number2 = 1

if ((number1 + number2) > (number1 * number2)) {
	console.log("The sum of the two numbers is greater then their product")
}
else {
	console.log("The sum of the two numbers is not greater then their product")
}

// Question 15
// Cone equation = PI * r^2 * h/3
// Cylinder = PI * r^2 * h
base = 3
height = 99
coneVolume = PI * Math.pow(base/2, 2) * height/3
cylinderVolume = PI * Math.pow(base/2, 2) * height

if (coneVolume > cylinderVolume) {
	console.log("The volume of the cone " + coneVolume + " is greater than the volume of the cylinder " + cylinderVolume)
}
else {
	console.log("The volume of the cone " + coneVolume + " is not greater than the volume of the cylinder " + cylinderVolume)
}

// PART II
const GST = 0.15
// This product has no GST included
productPrice = 18
gstToBeAdded = (productPrice * GST)
console.log("The initial product price was " + productPrice + "$, we must add " + gstToBeAdded + "$ for a total of " + (productPrice + gstToBeAdded) + "$")

// This product price already has GST included
productPriceIncludesGST = 120
productRemovedGST = productPriceIncludesGST / (GST + 1)
console.log("The price of the product including GST was " + productPriceIncludesGST + "$, The GST added was " + (productPriceIncludesGST - productRemovedGST) + "$, The origonal product price is " + productRemovedGST + "$")



