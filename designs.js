//Create elements not in HTML or CSS
const row = document.createElement('row');
document.body.appendChild('row');
const cell = document.createElement('cell');
// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var size = document.getElementById('sizePicker');
// Calling rest of elements below
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
var canvas = document.getElementById('pixelCanvas');
var row = document.getElementById('row'); //In the starter code there are no elements to this ID. It's not declared on HTML code so it's doing nothing with them.
var cell = document.getElementById('cell'); // same as row above
var submit = document.createElement('button'); //Is the right way to declare submit variable and will this fix the event listerner piece below?
// When size is submitted by the user, call makeGrid()
// Not sure if the code below calls makeGrid or if I need to add something else here. Was told to close the brackets within {}

function makeGrid(gridHeight, gridWidth) {
  var table = document.getElementById('pixelCanvas');
  //table.innerHTML = ''; (Not sure if I need this.)
  //Haven't asked mentor about the event listener function.
  submit.addEventListener('click', makeGrid);
//For loop to create a row.
  for (var gridHeight = 0; gridHeight < 1; gridHeight++) {
    var row = document.createElement('tr');
    table.appendChild(row);
//For loop to create a cell within a row.
    for (var gridWidth = 0; gridWidth < 0; gridWidth++) {
        for (var cell = 0; gridWidth >= 1; gridWidth++)
        row.appendChild(cell);
  }
}
}
// appendChid to add row after clicking submit button
    //  table.appendChild(row);
