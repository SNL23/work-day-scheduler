
$(document).ready(function () {
  //this code add and event listener of "click" 
  $(".saveBtn").on("click", function () {
    //this code retrieves the textarea value and the id attribute
    var textarea = $(this).siblings("textarea").val();
    var id = $(this).parent().attr("id");
    //this code saves the textarea value to the local storage
    localStorage.setItem(id, textarea);
  });
});

$(".time-block").each(function () {
  //conditional statments for past, present and future css class
  //get hour from div
  var currentHour =
  //get current hour from dayjs
  var 
  //compare the values down below
  if () {
    
  } else if () {

  } else {

  }

  //this code retrieves the users saved info
  var id = $(this).attr("id");
  var val = localStorage.getItem(id);
  $(this).children("textarea").val(val);
});

//This code goes to each class of "time-block" and takes the hour from the id
var today = dayjs();
var currentHour = today.format("H");
$(".time-block").each(function () {
  var timeBlock = $(this);
  var hour = timeBlock.attr("id").split("-").pop();

});
//Adds the date to the header
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));