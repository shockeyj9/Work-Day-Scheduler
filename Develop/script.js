// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //SETS CURRENT DATE/TIME
    var today = dayjs();
    //SETS CURRENT HOUR
    var hour = dayjs().hour() ; 
    var descList =[];

 /* TODO: Add a listener for click events on the save button. This code should
  use the id in the containing time-block as a key to save the user input in
  local storage. 
      HINT: What does `this` reference in the click listener function? 
      How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
      How might the id be useful when saving the description in local storage?
      */
  $('.btn').on("click",function(){
        var desc = $(this).siblings('textarea').val();
        var hourKey = $(this).parent().attr('id');
        descList.push({hourKey,desc});
        localStorage.setItem("descList", JSON.stringify(descList));
        
    });






  /*TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
      HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
      */

$('.container-fluid').children().each(function(){
    var elId = $(this).attr('id').split('hour-')[1];
    var currentClass = $(this).attr('class').split(' ')[2];
    elId = Number(elId);
        if (elId<hour){
            $(this).removeClass(currentClass).addClass('past')
        } else if (elId>hour){
            $(this).removeClass(currentClass).addClass('future')
        }else{
            $(this).removeClass(currentClass).addClass('present')
        }
});





  /*TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  */
  
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D'));
//   console.log($('.container-fluid div').map(function(index,dom){return dom.id}));


});

