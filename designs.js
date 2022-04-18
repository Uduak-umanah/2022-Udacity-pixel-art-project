// variables
const table = document.querySelector('#pixelCanvas');
const selectColor = document.querySelector('#colorPicker');
let heightOfgrid, widthOfgrid;

//draw the grid when dimensions are submitted
const pickSize = document.querySelector('#sizePicker');
pickSize.addEventListener('submit', function (event) {
  event.preventDefault(); //stop the default action of submit
  makeGrid(); // call the make grid function
});

function makeGrid() {
  //removes all existing table rows
  table.innerHTML = '';

  heightOfgrid = document.querySelector('#inputHeight');
  widthOfgrid = document.querySelector('#inputWidth');

  //draw table grid and add event listener for each cell
  for (let i = 0; i < heightOfgrid.value; i++) {
    let row = document.createElement('tr'); //creates new table row elements
    table.appendChild(row); //insert table row into table

    for (let d = 0; d < widthOfgrid.value; d++) {
      let cell = document.createElement('td'); //creates table data elements
      row.appendChild(cell);
      //change the background color when the mouse click on grid
      cell.addEventListener('click', function (event) {
        event.currentTarget.style.backgroundColor = selectColor.value;
      });

      //remove grid colour when mouse is double clicked on grid
      cell.addEventListener('dblclick', function (event) {
        event.currentTarget.style.backgroundColor = '';
      });
    }
  }
}
