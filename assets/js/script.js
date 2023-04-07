// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let mainContainer = document.getElementById("main-container")
let saveButton = document.querySelectorAll(".saveBtn")

// TODO: Add code to display the current date in the header of the page.
let heroTimer = setInterval(() => {
  //Select the currentHeaderDay text, in that text call on dayJS, which will return a crazy date, and format it like so. UPdate it with the setInterval every 1000ms.
  //I set it to every minute because every second seemed excessive.
  $("#currentHeaderDay").text(dayjs().format("dddd MMMM,  DD"));
}, 6000);


//Maybe I could do something like...call dayjs, get the hh hour.




$(init = () => {

  console.log(mainContainer)

  for(let i = 9; i < 18; i++){
    //only iterates through the numbers 9 - 17, which is 9AM - 5PM.

    //gets elements by their hour ID.
    let element = document.getElementById("hour-" + i)



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
  //Logic for eventListener


  saveButton.addEventListener("click", function(event){
    //When I click on a btn it should give me that button's parent's DIV ID which I will use to store as a key.
    //The value inside the textarea will be saved as the value.
    let currSelector = event.target

    console.log(currSelector.parentNode);
    let parentID = currSelector.parentNode.id;
    let textAreaVal = currSelector.parentNode.children[1].value
    console.log("---parentID---")
    console.log(parentID)
    console.log("---value---")
    console.log(textAreaVal)
  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
