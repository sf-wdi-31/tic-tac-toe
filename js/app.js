// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

// testing jQuery linked
//  $(window).on("load", function handleLoad(event) {
//    alert("Your game is ready!");
//  });

//  testing click on box
//  $(".col-md-4").on("click", function handleClick(event) {
//    alert("You clicked a box!");
//  });

//  testing a specific box is clicked
//  $(".box").on("click", function handleClick() {
//    var idValue = $(this).attr("id");
//    console.log(idValue);
//  });

});

//box is clicked//
  $(".box").on("click", function handleClick() {
    var boxClicked = $(this).attr("id");
    //change this line to block another click and/or send x or o image//
    console.log(boxClicked);
  });

//who's playing//
var xPlayer = ???
var oPlayer = ???

//who's turn is it//
  var takingTurns =
    if the number of xPlayer moves < the number of oPlayer moves
      it is xPlayer turn
      if the number of xPlayer moves > the number of oPlayer moves
      it is oPlayer turn
      //x always starts//
      else it is xPlayer turn

//claim a box function//
  var claimBox =
    is the box empty
    if it is empty
    .append("box")
    x || o

//track turns function//
  var xMoves =
    start with 0
    count x boxes
    total x moves

  var oMoves =
    start with 0
    count o boxes
    total o moves

//win//
  var checkForWin =
  if x || o == 1, 2, 3 || 4, 5, 6 || 7, 8, 9 || 1, 5, 9 || 3, 5, 7 || 1, 4, 7 || 2, 5, 8 || 3, 6, 9
    it is a win
  else takingTurns

//reset everything function//
  if (checkForWin) {
    clearBoard
  }

//detect a draw//
  if (1, 2, 3, 4, 5, 6, 7, 8, 9) && !(checkforWin) {
    clearBoard
  }
