console.log("Sanity Check: JS is working!");
// wait for the DOM to finish loading

$(document).ready(function(){

  var playerX = 1;
  var playerO = 4;
  var playerUp = 1;
  var turnCount = 0;

  if (playerUp === 1) {
    $('#messageLine').text("Player X is up");
  } else {
    $('#messageLine').text("Player O is up");
  };

  var topArray = [0, 0, 0];
  var middleArray = [0, 0, 0];
  var bottomArray = [0, 0, 0];
  var leftArray = [0, 0, 0];
  var centerArray = [0, 0, 0];
  var rightArray = [0, 0, 0];
  var diagLeftArray = [0, 0, 0];
  var diagRightArray = [0, 0, 0];
  var fullArray = [topArray, middleArray, bottomArray, leftArray, centerArray, rightArray, diagLeftArray, diagRightArray]

  $(".box").on("click", function designate(event) {
    turnCount += 1;
    var clickedBox = $(this);
    if (playerUp === 1) {
      var addCardX = $('<img src="x.png" class="box cardX">');
      $(clickedBox).append(addCardX);
    } else {
      var addCardO = $('<img src="o.png" class="box cardO">');
      $(clickedBox).append(addCardO);
    };
    $(clickedBox).off("click");
    var boxID = $(clickedBox).attr('id')
    eval(boxID + "()");

    for (var i = 0; i < fullArray.length; i++) {
      var sum = fullArray[i].reduce(add, 0);
      function add(a, b) {
        return a + b;
      };
      // console.log(sum);
      if (sum === 3) {
        $('#messageLine').text("Player X is the winner!");
        $(".box").off("click");
        return;
      } else if (sum === 12) {
        $('#messageLine').text("Player O is the winner!");
        $(".box").off("click");
        return;
      }
    }

    if (turnCount === 9) {
      $('#messageLine').text("The game is a draw!");
      $(".box").off("click");
    } else if (playerUp === playerX) {
        playerUp = playerO;
        $('#messageLine').text("Player O is up");
    } else {
        playerUp = playerX;
        $('#messageLine').text("Player X is up");
    }

  });
  //
  // $("#playAgain").on("click", function() {
  //   $('html').replaceWith(DomTreeCopy);
  // });

  var topLeft = function() {
    topArray[0] = playerUp;
    leftArray[0] = playerUp;
    diagLeftArray[0] = playerUp;
  };

  var topCenter = function() {
    topArray[1] = playerUp;
    centerArray[0] = playerUp;
  };

  var topRight = function() {
    topArray[2] = playerUp;
    rightArray[0] = playerUp;
    diagRightArray[0] = playerUp;
  };

  var midLeft = function() {
    middleArray[0] = playerUp;
    leftArray[1] = playerUp;
  };

  var midCenter = function() {
    middleArray[1] = playerUp;
    centerArray[1] = playerUp;
    diagLeftArray[1] = playerUp;
    diagRightArray[1] = playerUp;
  };

  var midRight = function() {
    middleArray[2] = playerUp;
    rightArray[1] = playerUp;
  };

  var bottomLeft = function() {
    bottomArray[0] = playerUp;
    leftArray[2] = playerUp;
    diagRightArray[2] = playerUp;
  };

  var bottomCenter = function() {
    bottomArray[1] = playerUp;
    centerArray[2] = playerUp;
  };

  var bottomRight = function() {
    bottomArray[2] = playerUp;
    rightArray[2] = playerUp;
    diagLeftArray[2] = playerUp;
  };

  // all code to manipulate the DOM
  // goes inside this function

});
