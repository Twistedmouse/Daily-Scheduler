/*
WHEN I open the planner
THEN the current day is displayed at the top of the calendar    
 
IF type text in textArea      
WHEN save button is pressed            
THEN save the text to local storage    
IF page is refreshed                     --TODO
THEN text in local storage stays in textarea

WHEN I view the timeblocks for that day           --TODO
THEN each timeblock is color coded to indicate whether it
is in the past, present, or future
   */

  const timeDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(timeDate);
    console.log(timeDate)

  let save = document.getElementsByClassName("saveBtn")
  

  $(save).click(function (e) { 
    e.preventDefault();

    let userInput = e.currentTarget.parentElement.children[1].value
    let idKey = e.currentTarget.parentElement.children[1].id
    
    console.log(userInput, idKey)
    localStorage.setItem(idKey, userInput)
  });

  let container = document.getElementsByClassName("container")
  console.log(container)
  
  function load() {
    for (let i = 0; i < 9; i++) {
      var element = container[0].children[i].children[1].id;
      // get local storage 
      let storeText = localStorage.getItem(element);
      // display in textarea (innertext?)
      console.log(storeText)
      console.log(element)
      
     if (element != null) {
       document.getElementById(element).innerHTML=storeText
     }
    }
    
  } load()


    
