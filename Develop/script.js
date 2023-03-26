(function ($) {
  //Adds the date to the header
  var today = dayjs().hour();

  //this code add and event listener of "click" 
  $(".saveBtn").on("click", function () {
    //this code retrieves the textarea value and the id attribute
    var textarea = $(this).siblings("textarea").val();
    var id = $(this).parent().attr("id");
    //this code saves the textarea value to the local storage
    localStorage.setItem(id, textarea);
  });


$(".time-block").each(function () {
  var currentHour = $(this).attr("id").split("-")[1];
  console.log($(this).attr("id").split("-")[1],);
  console.log(currentHour);
  if (currentHour < today) {
    $(this).addClass("past")
  } else if (currentHour == today) {
    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  }
  //this code retrieves the users saved info
  var id = $(this).attr("id");
  var val = localStorage.getItem(id);
  $(this).children("textarea").val(val);
});
})(jQuery);

//This code goes to each class of "time-block" and takes the hour from the id
var today = dayjs();
var currentHour = today.format("H");
$(".time-block").each(function () {
  var timeBlock = $(this);
  var hour = timeBlock.attr("id").split("-").pop();
})

