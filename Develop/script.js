
$(function () {
    //SETS CURRENT DATE/TIME
    var today = dayjs();
    //SETS CURRENT HOUR
    var hour = dayjs().hour() ; 

    //Saves scheduled tasks to local storage
$('.btn').on("click",function(){
    var hourKey = $(this).parent().attr('id');
    var desc = $(this).siblings('textarea').val();
      localStorage.setItem(hourKey,desc);
  });

    //Updates color of time slot depending on current time
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

    // Renders tasks onto schedule
$('.container-fluid').children().each(function(){
  var hourID = $(this).attr('id');
  var task = localStorage.getItem(hourID);
  $(this).children(1).val(task);
})

  // displays the current date in the header of the page.
$('#currentDay').text(today.format('dddd, MMMM D'));
});
