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
  })
  // function to compare current time with time slot on daily planner
  // target css classes to change color based on time of day 
  function hourHandler() {
    var timeNow = moment().hours()
    $(".time-block").each(function (){
      var hourBlock = parseInt($(this).attr("id").split("-")[1])
        if (hourBlock < timeNow){
            $(this).addClass("past")
        }
        else if (hourBlock === timeNow){
            $(this).addClass("present")
            $(this).removeClass("past")
        }
        else {
            $(this).addClass("future")
            $(this).removeClass("present")

        }
    })
}
hourHandler();

// pull data stored in local storage
  $("#hour-8 .description").val(localStorage.getItem("hour-8"))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#hour-18 .description").val(localStorage.getItem("hour-18"))
});
