
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //enter code for displaying current date and time on the top of the page 
var DisplayTime = function () {
  currentDate = $('#currentDay')
  currentDate.text("Current Time: " + dayjs().format('MM/DD/YYYY HH:mm:ss'))
}

DisplayTime();
setInterval(DisplayTime, 1000)

// This is the code to render time block color
var currentTime = "hour-" + dayjs().format('HH:mm:ss');
var currentTimeWithOnlyNumber = dayjs().format('HH');
var currentTimeParsed = +currentTimeWithOnlyNumber;
console.log(currentTimeParsed)

//$(this) refers to the current .time-block element within the loop.
var initialRenderTimeBlockColor = function () {
  $('.time-block').each(function () {
    var divElement = $(this).find('div');
    console.log(divElement);
    var getCurrentElementID = $(this).attr("id")
    var parsedCurrentElementID = +getCurrentElementID.replace("hour-", "")
    if (parsedCurrentElementID < currentTimeParsed) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (parsedCurrentElementID === currentTimeParsed) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future")
    } else if (parsedCurrentElementID > currentTimeParsed) {
      $(this).addClass("future");
      $(this).removeClass("past")
      $(this).removeClass("present");
    }
    return;
  })
}
// This function will take in the id of the parent <div> as the name of the object, and the text as the value
//this refers to the <button> element
var saveInputToLocalStorageHandler = function (event) {
  event.preventDefault();
  var findparentIdofButton = $(this).parent().attr("id")
  var findTextofTimeBlock = $(this).siblings(".description").val()
  localStorage.setItem(findparentIdofButton, findTextofTimeBlock);
}

var initialRenderTimeBlockText = function () {
  for (i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
  }
}

$('.btn').on('click', saveInputToLocalStorageHandler);

initialRenderTimeBlockColor();
initialRenderTimeBlockText();

});



//Below are some codes for reference
/*
var timeBlockObjectinLS = {};
var timeBlockObject = {
   id: findparentIdofButton.value,
   textinput: findTextofTimeBlock.value.trim(),
 };
*/

/*
var getCurrentElement = document.getElementsByClassName('time-block')
console.log(getCurrentElement) //logs a list of elements that have class = .timeblock

for (i = 0; i < 9; i++) {
  var getCurrentElementID = getCurrentElement[i].getAttribute('id')
  console.log(getCurrentElementID); // logs a list of string of the id(s) of the .timeblock elements so it can be parsed to have only numbers to be used for time comparsion
  console.log(typeof(getCurrentElementID)); //logs string

  var matchCurrentElementIdNumber = getCurrentElementID.replace('hour-','');
  console.log(matchCurrentElementIdNumber); //logs only number
  console.log(typeof(matchCurrentElementIdNumber)) // logs string

  var changeIdStringtoNumber = +matchCurrentElementIdNumber; //change a string to number
  console.log(typeof(changeIdStringtoNumber)); //logs number
}
*/


//adding code that will render the color of the time-block when initiated
/* var initialRenderTimeBlock = function(){
     getCurrentElementindex.forEach((colorRenderfunction) => {
      var colorRenderfunction= function(){
       var getCurrentId = getCurrentElementindex.getAttribute('id');
       if (getCurrentId > currentTimeWithoutms) {getCurrentElementindex.attr('class','past')}
       else if (getCurrentId = currentTimeWithoutms){getCurrentElementindex.attr('class','present')}
       else if (getCurrentId < currentTimeWithoutms) {getCurrentElementindex.attr('class','future')}
      }
     })
  }
*/


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
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?