/*
* CHALLENGE 1 

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

* Render the welcome message using welcomeEl.innerText to the web page (live server)

welcomeEl.innerText = greeting + name;

* welcomeEl.innerText = welcomeEl.innerText + "👋";

welcomeEl.innerText += "👋";


* Variables Practice // 

 let firstName = "Jake";
 let lastName = "Matrix Coder";
 let fullName = firstName + " " +  lastName;

 console.log(fullName);

* CONCATENATE TWO STRINGS IN A FUNCTION // 

 let name = "Linda";
 let greeting = "Hi there";

 function concatenate() {
     console.log(greeting + "," + " " + name + "!");
 }
 concatenate();



* INCREMENTING AND DECREMENTING
* Create two functions, add3Points() and remove1Point(),    and have them
* add/remove points to/from the myPoints variable
* Call the functions to that the line below logs out 10


let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point (){
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

* RENDERING AN ERROR MESSAGE *

* When the user clicks the purchase button, render out
* "Something went wrong, please try again" in the paragraph
* that has the id="error".
*/

let showText = document.getElementById("text-content");
    console.log(showText)

function howToRender() {
    console.log("button clicked!")
    showText.textContent = "create a button with an id, store the id in variable let showText = document.getElementByID('id'), create function howToShowText(){}, Inside function type - showText.textContent = 'Hooray you rendered text!'";
   
}
