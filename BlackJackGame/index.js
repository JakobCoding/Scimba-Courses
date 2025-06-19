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

if (sum === 21){
    console.log("BlackJack you Win!")
}