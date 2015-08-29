$(document).ready(function(){
  $("#clearbutton").click(function(){
    for(i=0;i<9;i++){
      for(j=0;j<9;j++){
        document.getElementById(i.toString()+j.toString()).value = "";
      }
    }
  });
  $("#solvebutton").click(function(){
    //get the sudoku in an array
    var sudoku= new Array();
    for(i=0;i<9;i++){
      sudoku[i] = new Array();
      for(j=0;j<9;j++){
        sudoku[i][j] = document.getElementById(i.toString()+j.toString()).value;
      }
    }
    solvedSudoku = DSSolve(sudoku);
    //add the solution to the puzzle
    if(solvedSudoku != null){
      for(i=0;i<9;i++){
        for(j=0;j<9;j++){
          document.getElementById(i.toString()+j.toString()).value = solvedSudoku[i][j];
        }
      }
    }
    else{
      alert("Sorry :-( I was not able to solve your puzzle!\nPlease report to dhilipsiva@gmail.com")
    }
  });
});
