// Challenge 1. 
let username = "per"
let message = "You have tree new notifications"

console.log(message + ", " + username + "!")

// Create a variable, messageToUser, that contains the message we have logged
 
let messageToUser = message + ", " + username + "!"
 console.log(messageToUser) // Correct solution 

// Challenge 2: Create two variables, name and greeting. The name variable should store your name, and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let firstName = "Jake"
let greeting1 = "Hi, my name is "
let myGreeting = greeting1 + firstName
console.log(myGreeting); 

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Jake!"
let greeting = "Hi, Welcome to the page "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
