// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//added Moment variable
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// console.log(currentDate);

// add interval counter to set current time
var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss a"));
}, 100);

// added save to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  // add functionality for past/present/future
  // (target classes)
  function updateTime() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
      var timeNow = parseInt($(this).attr("id").split("-")[1]);
      if (timeNow < currentTime) {
        $(this).addClass("past");
      } else if (timeNow === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
      }
    });
  }
  updateTime();
  $("#hour8 .description").val(localStorage.getItem("hour8"))
  $("#hour9 .description").val(localStorage.getItem("hour9"))
  $("#hour10 .description").val(localStorage.getItem("hour10"))
  $("#hour11 .description").val(localStorage.getItem("hour11"))
  $("#hour12 .description").val(localStorage.getItem("hour12"))
  $("#hour13 .description").val(localStorage.getItem("hour13"))
  $("#hour14 .description").val(localStorage.getItem("hour14"))
  $("#hour15 .description").val(localStorage.getItem("hour15"))
  $("#hour16 .description").val(localStorage.getItem("hour16"))
  $("#hour17 .description").val(localStorage.getItem("hour17"))
  $("#hour18 .description").val(localStorage.getItem("hour18"))
});
