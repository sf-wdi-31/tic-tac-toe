// *********** GLOBAL VARIABLES  ***********
var play = 0;

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

//SUCCESS box is clicked//
  $(".box").on("click", function handleClick() {

    $(this).addClass("symbol");

  });

//SUCCESS counts turns and sends x or o//
  $(".box").on("click", function handleClick() {

    play++;

    if (!$(this).hasClass("x") && !$(this).hasClass("o")) {

      if (play % 2 == 0) {
        $(this).text("o");
        $(this).addClass("o");
      }

      else {
        $(this).text("x");
        $(this).addClass("x");
      }

    };

    playerArrays();

  });

//SUCCESS play again button - reset board//
  $(".btn-default").on("click", function handleClick() {

    $(".box").removeClass("symbol o x");

    play = 0;

    $(".box").text("");

    $("#results").text("");

    $(".box").on("click");

  });

}); // document.ready();


function playerArrays () {

  var oArray = [];
  var xArray = [];

  $(".o").each(function (item) {
    oArray.push($(this).attr("id"));
  });

  $(".x").each(function (item) {
    xArray.push($(this).attr("id"));
  });

  if (checkforWin(xArray)) {
    $("#results").text("Congratulations X! You won!");
    $(".box").off("click");
//    alert("Congratulations X! You won!");
  }

  else if (checkforWin(oArray)) {
    $("#results").text("Congratulations O! You won!");
    $(".box").off("click");
//    alert("Congratulations O! You won!");
  }

  else if (oArray.length + xArray.length == 9) {
    $("#results").text("It's a draw! Play again!");
    $(".box").off("click");
//  alert("It's a draw! Play again!");
  }
};


function checkforWin (playerArray) {

  var winningArrays = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
  ["1", "5", "9"], ["3", "5", "7"], ["1", "4", "7"], ["2", "5", "8"],
  ["3", "6", "9"]];

  var playerArrayIncludes = function (element) {
    return playerArray.includes(element);
  }

  for (var i = 0; i < winningArrays.length; i++) {

    var arr = winningArrays[i];

    if (arr.every(playerArrayIncludes)) {
      return true;
    }
  }

  return false;
}
