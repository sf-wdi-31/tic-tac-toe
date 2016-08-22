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

var play = 0;

//SUCCESS box is clicked//
  $(".box").on("click", function handleClick() {

    $(this).addClass("symbol");

  });

//SUCCESS counts turns and sends x or o//
  $(".box").on("click", function handleClick() {

    play++;

    if (play % 2 == 0) {
      $(this).text("o");
      $(this).addClass("o");
      }
    else {
      $(this).text("x");
      $(this).addClass("x");
      }
    checkforWin();
    });

//SUCCESS check for a win//

  function checkforWin () {

    var oArray = [];
    var xArray = [];

    $(".o").each(function (item) {
      oArray.push($(this).attr("id"));
    });

    $(".x").each(function (item) {
      xArray.push($(this).attr("id"));
    });

  };

//  var threeInARow = [("1" && "2" && "3") || ("4" && "5" && "6") || ("7" && "8" && "9") || ("1" && "5" && "9") || ("3" && "5" && "7") || ("1" && "4" && "7") || ("2" && "5" && "8") || ("3" && "6" && "9")];

//  $(".box").on("click", function handleClick() {
//    if ($(".x") == threeInARow) {
//      alert("Congratulations X! You won!");
//    };
//    else if ($(".o") == threeInARow) {
//      alert("Congratulations O! You won!");
//    };
//    else {
//      null;
//    }


//}

//SUCCESS play again button - reset board//
  $(".btn-default").on("click", function handleClick() {

    $(".box").removeClass("symbol");

    play = 0;

    $(".box").text("");

  });

//detect a draw//
//  if (1, 2, 3, 4, 5, 6, 7, 8, 9) && !(checkforWin) {
//  $("#board").removeClass("symbol");
//  }

});
