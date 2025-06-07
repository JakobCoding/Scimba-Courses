/*
-intialize the count as 0
-define countEL variable and assign document.getElementById("count-el") as its value
*/

let count = 0;
let countEl = document.getElementById("count-el"); // pass in arguments

/*
-Create increment function
-increment the count variable
-change the count-el in the HTML to reflect the new count using .innerText
*/

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

//- Create a function, save(), which logs  out the count when it's called

function save() {
  console.log(count);
}
