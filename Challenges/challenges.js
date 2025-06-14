/*// Challenge 1.
let username = "per";
let message = "You have tree new notifications";

console.log(message + ", " + username + "!");

let messageToUser = message + ", " + username + "!";
console.log(messageToUser); // Correct solution

let firstName = "Jake";
let greeting1 = "Hi, my name is ";
let myGreeting = greeting1 + firstName;
console.log(myGreeting);

let welcomeEl = document.getElementById("welcome-el");

let name = "Jake campbell Chalmers ";
let greeting = "Welcome back ";

// Render the welcome message using welcomeEl.innerText to the web page (live server)
welcomeEl.innerText = greeting + name;

// welcomeEl.innerText = welcomeEl.innerText + "👋";
welcomeEl.innerText += "👋";
*/

// Variables Practice // 

// let firstName = "Jake";
// let lastName = "Matrix Coder";
// let fullName = firstName + " " +  lastName;

// console.log(fullName);

// CONCATENATE TWO STRINGS IN A FUNCTION // 

let name = "Linda";
let greeting = "Hi there";

function concatenate() {
    console.log(greeting + "," + " " + name + "!");
}
concatenate();