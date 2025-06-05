// intialize the count as 0
let count = 0

// define countEL variable and assign document.getElementById("count-el") as its value
let countEl = document.getElementById("count-el"); // pass in arguments

// Create increment function

function increment() {

// increment the count variable 
    count = count + 1

// change the count-el in the HTML to reflect the new count using .innerText
    countEl.innerText = count
}



