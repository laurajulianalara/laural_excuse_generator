import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {


let who = ['the dog' , 'my grandma' ];
let action = ['ate' , 'broke' ];
let what = ['my phone' , 'my car'];
let when = ['this morning.' , 'while I was sleeping.'];

// let randomIndex = Math.floor(Math.random() * 2);
// let selectedWho = who[randomIndex]

// randomIndex = Math.floor(Math.random() * 2);
// let selectedAction = action[randomIndex]

// randomIndex = Math.floor(Math.random() * 2);
// let selectedWhat = what[randomIndex];

// randomIndex = Math.floor(Math.random() * 2);
// let selectedWhen = when[randomIndex];

function selectExcuse(array) {

  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let selectedWho = selectExcuse(who);
let selectedAction = selectExcuse(action);
let selectedWhat = selectExcuse (what);
let selectedWhen = selectExcuse (when);


console.log(selectedWho + " " + selectedAction + " " + selectedWhat + " " + selectedWhen);

let htmlElement = document.querySelector(".excuse");
htmlElement . innerHTML = selectedWho + " " + selectedAction + " " + selectedWhat + " " + selectedWhen;
 



};
