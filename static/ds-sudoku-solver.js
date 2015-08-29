/*
 * ds-sudoku-solver.js
 * Copyright (C) 2015 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
CleanElements = function(comp_ary, Qsudoku){
  for(i=0; i<9; i++){
    for(j=0; j<9; j++){
      /*if(Qsudoku[i][j] != ""){
        comp_ary[i][j]=[];
        }*/
      for(k=0; k<9; k++){
        i_index = comp_ary[i][k].indexOf(Qsudoku[i][j]);
        if(i_index != -1){
          comp_ary[i][k].splice(i_index, 1);
        }
        j_index = comp_ary[k][j].indexOf(Qsudoku[i][j]);
        if(j_index != -1){
          comp_ary[k][j].splice(j_index, 1);
        }
      }
      if(i < 3){
        i_min = 0;
        i_max = 2;
      }
      else if(i < 6){
        i_min = 3;
        i_max = 5;
      }
      else{
        i_min = 6;
        i_max = 8;
      }

      if(j < 3){
        j_min = 0;
        j_max = 2;
      }
      else if(j < 6){
        j_min = 3;
        j_max = 5;
      }
      else{
        j_min = 6;
        j_max = 8;
      }

      for(i_box=i_min; i_box<=i_max; i_box++){
        for(j_box=j_min; j_box<=j_max; j_box++){
          index = comp_ary[i_box][j_box].indexOf(Qsudoku[i][j]);
          if(index != -1){
            comp_ary[i_box][j_box].splice(index, 1);
          }
        }
      }
    }
  }
  return comp_ary;
}

FindElements = function(comp_ary, Qsudoku){
  for(i=0; i<9; i++){
    for(j=0; j<9; j++){
      if(comp_ary[i][j].length == 1){
        if (Qsudoku[i][j] == ""){
          Qsudoku[i][j] = comp_ary[i][j][0];
          comp_ary[i][j] = [];
        }
      }
    }
  }
  return Qsudoku;
}

IsThereNullElement = function(Qsudoku){
  for(i=0; i<9; i++){
    for(j=0; j<9; j++){
      if(Qsudoku[i][j] == ""){
        return false;
      }
    }
  }
  return true;
}

InitEmptyArray = function(){
  empty_ary = Array();
  for(i=0; i<9; i++){
    empty_ary[i] = Array();
    for(j=0; j<9; j++){
      empty_ary[i][j] = Array();
      for(k=0; k<9; k++){
        empty_ary[i][j][k] = (k+1).toString();
      }
    }
  }
  return empty_ary;
}

DSSolve = function(Qsudoku){
  comp_ary = InitEmptyArray(); //Complementary Array
  window.comp_ary_old = comp_ary;
  IterationMax = 5000;

  while(true){
    IterationMax -= 1;
    comp_ary = CleanElements(comp_ary, Qsudoku);
    console.log(comp_ary);

    if(window.comp_ary_old == comp_ary){
      //implement this.
    }
    else{
      window.comp_ary_old = comp_ary;
    }

    Qsudoku = FindElements(comp_ary, Qsudoku);
    //console.log(Qsudoku);

    if(IsThereNullElement(Qsudoku)){
      return Qsudoku;
    }

    if(IterationMax == 0){
      return null;
    }
  }
}
