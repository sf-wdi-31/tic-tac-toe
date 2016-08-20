// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

// SUCCESS testing jQuery linked
//  $(window).on("load", function handleLoad(event) {
//    alert("Your game is ready!");
//  });

//  SUCCESS testing click on box
//  $(".col-md-4").on("click", function handleClick(event) {
//    alert("You clicked a box!");
//  });

//  SUCCESS testing a specific box is clicked
//  $(".box").on("click", function handleClick() {
//    var idValue = $(this).attr("id");
//    console.log(idValue);
//  });

//declares players//
var xPlayer
var oPlayer

//SUCCESS box is clicked//
  $(".box").on("click", function handleClick() {
//    console.log("click");
    $(this).addClass("symbol");
//  return playerMoves
  });

//counts each players moves//
//var playerMoves = function () {
//  var count = 0
//  var total = 0 + [i];
//  for (var i = 0; i ??? ; i++) {
//    return total
//  }
//}

//whose turn is it//
//var takingTurns = function() {
//  if (xPlayer)
//}
//      if the number of xPlayer moves < the number of oPlayer moves
//        it is xPlayer turn
//        if the number of xPlayer moves > the number of oPlayer moves
//        it is oPlayer turn
        //x always starts//
//        else it is xPlayer turn

//UNTESTED claim a box function//
var claimBox = function() {
    if (xPlayer) {
      $(this).text("x");
    }
    else if (oPlayer) {
      $(this).text("o");
    }
    else {
      $(this).text(null);
    }
}

//play again button - reset board//
  $(".btn-default").on("click", function handleClick() {
    //    console.log("click");
    $(".box").removeClass("symbol");
    //  return playerMoves
  });

});




//win//
//  var checkForWin = function () {
//    if ((x === "1" && "2" & "3") || (x === "4" && "5" & "6")
//
//    )(x === "1" && "2" & "3"); {
//      alert("You won!");
//    }
//    else if ()
//    alert("You won!");
//  }
//  if x || o == 1, 2, 3 || 4, 5, 6 || 7, 8, 9 || 1, 5, 9 || 3, 5, 7 || 1, 4, 7 || 2, 5, 8 || 3, 6, 9
//    it is a win
//  else takingTurns

//detect a draw//
//  if (1, 2, 3, 4, 5, 6, 7, 8, 9) && !(checkforWin) {
//    clearBoard
//  }
