/*
-intialize the count as 0
-define countEL variable and assign document.getElementById("count-el") as its value
*/

let countEl = document.getElementById
("count-el"); 
let saveEl = document.getElementById("save-el")
let count = 0;

/*
-Create increment function
-increment the count variable
-change the count-el in the HTML to reflect the new count using .innerText
*/

function increment() {
	count += 1;
	countEl.textContent = count;
}

/*
- Create a function, save(), which logs  out the count when it's called
- Grab the save-el paragraph and store it in a variable called saveEl
- Create a variable that contains both the count and the dash separator, i.e. "12 - "
- Render the variable in the saveEl using innerText
- NB: Make sure to not delete the existing content of the paragraph
*/

function save() { 
	let countStr = count + " - "
	saveEl.textContent += countStr
}

