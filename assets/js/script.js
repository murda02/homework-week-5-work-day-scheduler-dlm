var todaysDate = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(todaysDate);

// column 2 needs to be an input (html)
// column 3 needs to be a button (html?)
// then create an eventListener that saves user input (from column 2) to 
// local storage