// displays the day in the header
var todaysDate = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(todaysDate);

let button8am = document.querySelector("#btn8am");
let button9am = document.querySelector("#btn9am");
let button10am = document.querySelector("#btn10am");
let button11am = document.querySelector("#btn11am");
let button12pm = document.querySelector("#btn12pm");
let button1pm = document.querySelector("#btn1pm");
let button2pm = document.querySelector("#btn2pm");
let button3pm = document.querySelector("#btn3pm");
let button4pm = document.querySelector("#btn4pm");
let button5pm = document.querySelector("#btn5pm");

let input8am = document.querySelector("#input8am");
let input9am = document.querySelector("#input9am");
let input10am = document.querySelector("#input10am");
let input11am = document.querySelector("#input11am");
let input12pm = document.querySelector("#input12pm");
let input1pm = document.querySelector("#input1pm");
let input2pm = document.querySelector("#input2pm");
let input3pm = document.querySelector("#input3pm");
let input4pm = document.querySelector("#input4pm");
let input5pm = document.querySelector("#input5pm");

renderTask();

// event listener for the 8am button, when clicked it stores the
// value from the 8am GUI input into localstorage
button8am.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input8am", input8am.value);
    renderTask();

});

button9am.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input9am", input9am.value);
    renderTask();

});

button10am.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input10am", input10am.value);
    renderTask();

});

button11am.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input11am", input11am.value);
    renderTask();

});

button12pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input12pm", input12pm.value);
    renderTask();

});

button1pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input1pm", input1pm.value);
    renderTask();

});

button2pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input2pm", input2pm.value);
    renderTask();

});

button3pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input3pm", input3pm.value);
    renderTask();

});

button4pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input4pm", input4pm.value);
    renderTask();

});

button5pm.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("input5pm", input5pm.value);
    renderTask();

});

// function that renders the input values from local storage and
// puts them in the GUI according to time and persists after a 
// reload
function renderTask () {
    input8am.value = localStorage.getItem("input8am");
    input9am.value = localStorage.getItem("input9am");
    input10am.value = localStorage.getItem("input10am");
    input11am.value = localStorage.getItem("input11am");
    input12pm.value = localStorage.getItem("input12pm");
    input1pm.value = localStorage.getItem("input1pm");
    input2pm.value = localStorage.getItem("input2pm");
    input3pm.value = localStorage.getItem("input3pm");
    input4pm.value = localStorage.getItem("input4pm");
    input5pm.value = localStorage.getItem("input5pm");
}