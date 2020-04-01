// Question 1
let GST = 0.15;
let priceIncGST = 100.53;
let GSTAmount = priceIncGST - (priceIncGST / (GST + 1));
console.log(GSTAmount);

// Question 2
let height = prompt("Enter your height in meters:");
let weight = prompt("Enter your weight in KG's");
let BMI = weight/(height**2);
if (BMI <= 18.5) {
	console.log("Your BMI is:", BMI, "You are underweight");
}
else if (BMI < 25) {
	console.log("Your BMI is:", BMI, "You are normal weight");
}
else if (BMI < 30) {
	console.log("Your BMI is:", BMI, "You are overweight");
}
else {
	console.log("Your BMI is:", BMI, "You are obese");
}

// Question 3

let max = 0;
let randomValue;
for (let i=0; i<100; i++) {
	randomValue = Math.floor(Math.random() * 1001);
    if (randomValue > max) {
    	max = randomValue;
    }
}
console.log(max);

// Question 4
let currentMax = 10000;
let currentMin = 60000;
let randomNum;
let sum = 0;
for (let i=0; i<100; i++) {
	randomNum = Math.floor((Math.random() * 50001) + 10000);
    sum += randomNum;
    if (randomNum > currentMax) {
    	currentMax = randomNum;
    }
    if (randomNum < currentMin) {
    	currentMin = randomNum;
    }
}

console.log("Max:", currentMax, "Min:", currentMin, "Average:", sum/100);

// Question 5
let word = prompt("Enter a word:");
let len = word.length;
let half = Math.floor(len/2);
let isPalindrome = true;
for (let i=0; i<half; i++) {
	if (word[i] != word[len-i-1]) {
    	isPalindrome = false;
    }
}
console.log(isPalindrome);

// Question 6
let fib1 = 0;
let fib2 = 1;
let temp;
console.log(fib1);
console.log(fib2);
for (let i=0; i<18; i++) {
	temp = fib2;
    fib2 += fib1;
    fib1 = temp;
    console.log(fib2);
}

// Question 7
let playerToken = 10;
let game = true;
let coin = 0
let con = "y"
while (game) {
	con = prompt("You have " + playerToken + " Tokens, type 'y' to continue, 'n' to exit");
	if (con == "y") {
        coin = Math.floor(Math.random() * 2);
        if (coin == 0) {
            // Player got Tails
            playerToken -= 1;
            console.log("You flipped tails, -1 token");
        } else {
            // Player got Heads
            playerToken += 1;
            console.log("You flipped heads, +1 token");
        }
        if (playerToken == 20) {
            console.log("You Win, 20 Tokens.");
            game = false;
        }
        if (playerToken == 0) {
            console.log("You lose, 0 Tokens");
            game = false;
        }
	}else {
    	game = false;
    }
 
}
console.log("ggwp");
