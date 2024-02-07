var saveBtn = $(".saveBtn");
var userInput = $(".description"); 
var divTags = document.getElementsByTagName("div");
var currentHour = dayjs().format("HH");

//function set to load after all HMTL has been rendered to the page
$(document).ready(function () {
  
  $(".time-block").each(colorCode);
//function to assign color to each div compared against the current hour
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
  // function to save user input to local storage
  function saveTask() {
    var textArea = $(this).siblings('.description').val();
    var divId = $(this).parent().attr('id');
    localStorage.setItem(divId, textArea);
  }
  saveTask();
  // event listener for save button to run saveTask
  saveBtn.on('click', saveTask)
  displayDate();
  //
  // function to display current date 
  function displayDate() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMM D, YYYY"));
  }
});

// function to retain user input in local storage post refresh
$('.time-block').each(function () {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});