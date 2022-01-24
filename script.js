//added Moment variable
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// console.log(currentDate);

// add interval counter to set current time
var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);

// added save to local storage
$(document).ready(function() {
  $(".saveBtn").on("click",function(){
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time,value)
  })
})