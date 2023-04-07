// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  setInterval(function () {
    $("#currentHeaderDay").text(dayjs().format("dddd MMMM,  DD"));
  }, 6000);
  mainContainer = document.getElementById("main-container")
  saveButton = document.getElementsByClassName("saveBtn")

  for(let i = 9; i < 18; i++){
    //only iterates through the numbers 9 - 17, which is 9AM - 5PM.
          //Logic to add in our previously saved values.
    //Get our value by stringID
    let currGetItem = localStorage.getItem("hour-" + i)

    //Set that value into the currentID's value.

    //gets elements by their hour ID.
    let element = document.getElementById("hour-" + i)
    //Sets the value of the text area to our saved value.
    element.children[1].value = currGetItem


    //compare it to the current hour and determine what their class should be.
    if (i == dayjs().format("H")){
      //If there is a match, then set its class to their appropriate coloring.
      element.className = "row time-block present";
      //parse the number because it's actually a string.
    } else if (i > parseInt(dayjs().format("H"))){
      element.className = "row time-block future";
    } else {
      element.className = "row time-block past"
    }
  }

  //Logic for eventListener -- saves to local storage on click.
    mainContainer.addEventListener("click", function(event){
      event.preventDefault();
    //When I click on a btn it should give me that button's parent's DIV ID which I will use to store as a key.
    //The value inside the textarea will be saved as the value.
      let currSelector = event.target
    if(event.target.tagName == "BUTTON"){
        //Use the parentID as a key and its textAreaVal as a value and store it.
      let parentID = currSelector.parentNode.id;
      let textAreaVal = currSelector.parentNode.children[1].value
      localStorage.setItem(parentID, textAreaVal);
      }

  })
});
