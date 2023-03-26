// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
  // jQuery methods go here...
});
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(function () {
      $(".saveBtn").on("click", function() {
       var textarea = $(this).siblings("textarea").val();
       var id = $(this).parent().attr("id");
       localStorage.setItem(id, textarea);
      });
      $(".time-block").each(function(){
        //conditional statments for past, present and future css class
        //get hour from div
        //get current hour from dayjs

        //compare the values down below
        //if () {
          
       // }else if () {

        //}else{

        //}



      //this code retrieves the users saved info
        var id = $(this).attr("id");
        var val = localStorage.getItem(id);
        $(this).children("textarea").val(val);
      });

    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // USING DAYJS HOW CAN I GET THE CURRENT HOUR IN MILITARY TIME
    //LOOPOVER EACH TIME BLOCK
    var today = dayjs();
    var currentHour = today.format("H");
    $(".time-block").each(function(){
      var timeBlock = $(this);
      var hour = timeBlock.attr("id").split("-").pop();
      
    });
    
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM d'));