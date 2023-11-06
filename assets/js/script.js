// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 
});

//enter code for displaying current date and time on the top of the page 
var DisplayTime = function(){
 currentDate =$('#currentDay')
currentDate.text("Current Time: " + dayjs().format('MM/DD/YYYY HH:mm:ss'))
}
DisplayTime();
setInterval(DisplayTime,1000)

var currentTime ="hour-" + dayjs().format('HH:mm:ss');
var currentTimeWithoutms = "hour-" + dayjs().format('HH');
var testtime = 'Hour-24'
console.log(currentTime)
console.log(currentTime < testtime);

var getCurrentElementindex = document.querySelectorAll('.time-block')
console.log(getCurrentElementindex)


 var initialRenderTimeBlock = function(){ 
     getCurrentElementindex.forEach((colorRenderfunction) => {
      var colorRenderfunction= function(){
       var getCurrentId = getCurrentElementindex.getAttribute('id');
       if (getCurrentId > currentTime) {getCurrentElementindex.attr('class','past')}
       else if (getCurrentId = currentTimeWithoutms){getCurrentElementindex.attr('class','present')}
       else if (getCurrentId < currentTime) {getCurrentElementindex.attr('class','future')}
      }
     })
  }

 
 initialRenderTimeBlock()



 var TimeBlockArray =[];

var timeblockinput = $('')

var timeBlockinput = {
  Text: 1 ,
  index: 1,
};

var saveInputToLocalStorage = function(event){
  event.preventDefault();
  element = event.target;
  var getCurrentElementindex = element.parent().attr('data-index')
  console.log(getCurrentElementindex);
  console.log(element);
  var test = element.parent();
  console.log(test)
}

var saveButton = $('<button>')
saveButton.on('click','.btn', saveInputToLocalStorage);