//added Moment variable
var rightNow = moment().format("dddd, MMMM Do, YYYY");
// console.log(rightNow);

// add interval counter to set current time
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(rightNow + " " + momentNow.format('hh:mm:ss A'));
  }, 100);

