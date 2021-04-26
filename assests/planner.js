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
    // console.log(timeDate)
    console.log(moment().format("h a"))
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
      // console.log(storeText)
      // console.log(element)

     if (element != null) {
       document.getElementById(element).innerHTML=storeText
     }
    }
    
  } load()

  let containerArray = Array.from(container[0].children)
  let currentArrayNumber = "";
  console.log(containerArray[0].children[0].innerHTML);
  console.log(container)
function changeColor() { //debugger
  for (let i = 0; i < 9; i++) {
    var timeChange = container[0].children[i].children[0].innerHTML;
    let numberSelector = containerArray.indexOf(containerArray[i]);
    // console.log(moment().format("h a"))
    // console.log(timeChange)
    // console.log(container[0].children)
  
    if (timeChange == moment().format("h a")) { 
      currentArrayNumber = containerArray.indexOf(containerArray[i]);
      $(container[0].children[i].children[1]).addClass("present");
      console.log(currentArrayNumber)

     }else if (currentArrayNumber == "" /*<--represents null*/) {
      $(container[0].children[i].children[1]).addClass("past")

     }else if (numberSelector > currentArrayNumber) {
       
      $(container[0].children[i].children[1]).addClass("future");
      
    }
  }
}changeColor()