// Question 2
let year = prompt("Enter a year");
let isLeap = false;
if (year % 4 == 0) {
  isLeap = true;
}
if (year % 100 == 0) {
	if (year % 400 == 0) {
  	isLeap = true;
  }
  else {
  	isLeap = false;
  }
}

console.log(isLeap);

// Question 3
let a = 15;
let b = 15;
let c = 19;

if (a >= b && a >= c) {
	console.log("A is the largest number with a value of", a);
}
else if (b >= a && b >= c) {
	console.log("B is the largest number with a value of", b);
}
else {
		console.log("C is the largest number with a value of", c);
}

// Question 4
let card = Math.floor((Math.random() * 13) + 2);
let cardType = card % 2;

let userGuess = prompt("Enter a card value: (2-10, j, q, k, a)");
let userCard = userGuess;

switch (userCard) {
	case "a":
  	userCard = 14;
  	break;
  case "j":
  	userCard = 11;
    break;
  case "q":
  	userCard = 12;
    break;
  case "k":
  	userCard = 13;
}

switch (card) {
	case 14:
  	card = "a";
  	break;
  case 11:
  	card = "j";
    break;
  case 12:
  	card = "q";
    break;
  case 13:
  	card = "k";
}

if (userCard % 2 == cardType) {
	console.log("You picked card", userGuess, "The card was", card, "You Win!");
}
else {
	console.log("You picked card", userGuess, "The card was", card, "You Lose!");
}
