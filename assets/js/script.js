// displays the day in the header
// var todaysDay = moment().format("dddd");
// $("#currentDay").text(todaysDay);
// var currentHour = moment().format("HH");
// $("#currentHour").text(currentHour);
$("#currentDay").text("Thursday");
$("#currentHour").text("14");

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

let currentTime = document.querySelector("#currentHour");
// console.log('currentTime: ', currentTime.textContent);

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

let wholeCalendar = document.querySelector("#whole-calendar");
let timeSlot8am = document.querySelector("#time8am");
let timeSlot9am = document.querySelector("#time9am");
let timeSlot10am = document.querySelector("#time10am");
let timeSlot11am = document.querySelector("#time11am");
let timeSlot12pm = document.querySelector("#time12pm");
let timeSlot1pm = document.querySelector("#time1pm");
let timeSlot2pm = document.querySelector("#time2pm");
let timeSlot3pm = document.querySelector("#time3pm");
let timeSlot4pm = document.querySelector("#time4pm");
let timeSlot5pm = document.querySelector("#time5pm");

if (currentTime.textContent.includes("8")){
    timeSlot8am.setAttribute("style", "background-color: #fadcec"); 
    timeSlot9am.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot10am.setAttribute("style", "background-color: #bfe8ba");
    timeSlot11am.setAttribute("style", "background-color: #bfe8ba");
    timeSlot12pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot1pm.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("9")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #fadcec"); 
    timeSlot10am.setAttribute("style", "background-color: #bfe8ba");
    timeSlot11am.setAttribute("style", "background-color: #bfe8ba");
    timeSlot12pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot1pm.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("10")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #fadcec");
    timeSlot11am.setAttribute("style", "background-color: #bfe8ba");
    timeSlot12pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot1pm.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("11")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #fadcec");
    timeSlot12pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot1pm.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("12")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #fadcec");
    timeSlot1pm.setAttribute("style", "background-color: #bfe8ba"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("13")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot1pm.setAttribute("style", "background-color: #fadcec"); 
    timeSlot2pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("14")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot1pm.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot2pm.setAttribute("style", "background-color: #fadcec");
    timeSlot3pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("15")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot1pm.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot2pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot3pm.setAttribute("style", "background-color: #fadcec");
    timeSlot4pm.setAttribute("style", "background-color: #bfe8ba");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("16")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot1pm.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot2pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot3pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot4pm.setAttribute("style", "background-color: #fadcec");
    timeSlot5pm.setAttribute("style", "background-color: #bfe8ba");
}

if (currentTime.textContent.includes("17")){
    timeSlot8am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot9am.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot10am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot11am.setAttribute("style", "background-color: #c9c9c9");
    timeSlot12pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot1pm.setAttribute("style", "background-color: #c9c9c9"); 
    timeSlot2pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot3pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot4pm.setAttribute("style", "background-color: #c9c9c9");
    timeSlot5pm.setAttribute("style", "background-color: #fadcec");
}

