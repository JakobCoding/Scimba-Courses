/*

* Create two variables, firstCard and secondCard. 

* Set their values to a random number between 2-11

* Create a variable, sum, and set it to the sum of the two cards


* How to Generate a random number between 2 & 11

let firstCard = Math.floor(Math.random() * 10) + 2;
console.log(firstCard)

let secondCard = Math.floor(Math.random() * 10) + 2;
console.log(firstCard)
*/


let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21){
    console.log("Woohoo! BlackJack you Win!")
} else {
    console.log("Oh no, you Bust!, You're out of the game!")
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
    console.log("Sorry, you cannot enter the casino.")
} else {
    console.log("Welcome to the Casino, Have fun!")
}