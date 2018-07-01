// declaration of variables
var rows;
var columns;

// variable assignment to HTML elements
rows = document.getElementById("input_height").value;
columns = document.getElementById("input_width").value;

// function to create grid
function gridMaker(){
  var table = document.getElementById("pixelCanvas");
  
  // loop to create the grid
  for (i = 0; i < rows; i++){
    var createRow;
    createRow = table.insertRow(i);
    createRow.setAttribute("class", "row");
    for (j = 0; j < columns; j++){
      var createColumn;
      createColumn = createRow.insertCell(j);

      //event listener to listen for click on created columns to add color to them

      createColumn.addEventListener("click", function(colorSel){
    colorSel.target.style.backgroundColor = document.getElementById("colorPicker").value;
  });
    }
  }
  return false;
}

// event listener to run function gridMaker when submit button is clicked on
document.getElementById("submit").addEventListener("click", function (eventSelector){
  
//to prevent the defaults
  eventSelector.preventDefault();
  gridMaker();
    

});
