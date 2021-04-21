/*
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

IF type text in textArea
WHEN save button is pressed
THEN save the text to local storage
IF page is refreshed 
THEN text in local storage stays in textarea

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it
is in the past, present, or future
   */

  var timeDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(timeDate);
    console.log(timeDate)


