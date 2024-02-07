// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $(".saveBtn");
var userInput = document.getElementsByClassName("description")
console.log("userInput");
console.log(userInput);
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var divTags = document.getElementsByTagName("div");
var currentHour = dayjs().format("HH");
$(document).ready(function () {
  console.log("Getting all elements by class timeblock");
  console.log($(`.time-block`));

  $(".time-block").each(colorCode);

  function colorCode() {
    myID = $(this).attr("id");
    hourOfID = Number(myID.substring(5))
    if (currentHour > hourOfID) {
      $(this).addClass("past");
    } else if (currentHour == hourOfID) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  }

  function saveTask() {
    var textArea = $(this).siblings('.description').val();
    var divId = $(this).parent().attr('id');
    console.log("divId")
    console.log(divId, textArea, this);

    localStorage.setItem(divId, textArea);

  }
  saveTask();
  saveBtn.on('click', saveTask)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time(SHOULD BE COMPLETED)
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?(WE HAVE THE HH put in to do so)
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  displayDate();
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayDate() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMM D, YYYY"));
  }
});


$('.time-block').each(function () {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});