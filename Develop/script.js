(function ($) {
  //adds the date to the header
  var date = dayjs();
  $("#currentDay").text(date.format('dddd, MMMM D'));

  var today = dayjs().hour();
  //this code add and event listener of "click" 
  $(".saveBtn").on("click", function () {
    //this code retrieves the value of the textarea element and the id attribute of the parent element
    var textarea = $(this).siblings("textarea").val();
    var id = $(this).parent().attr("id");
    //this code saves the textarea value to the local storage
    localStorage.setItem(id, textarea);
    
  });
  //loops through each elemnet 
  $(".time-block").each(function () {
//this code retrieves the users saved info 
    var id = $(this).attr("id");
    var val = localStorage.getItem(id);
    $(this).children("textarea").val(val);
    // conditional statment to add past,present or future 
    //to the element which in turn adds a certain style.
    var currentHour = $(this).attr("id").split("-")[1];
    if (currentHour < today) {
      $(this).addClass("past")
    } else if (currentHour == today) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  });
})(jQuery);


