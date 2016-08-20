// wait for the DOM to finish loading
// Sanity Check
console.log("Sanity Check")


$(document).ready(function() {
  var player1 = '<img src="imgs/ninja.jpg" alt="" />'
  var player2 = '<img src="imgs/pirate.png" alt="" />'
  var currentPlayer = player1;
  var counter = 0;
  var p1HeldBoxes = [];
  var p2HeldBoxes = [];

  $('.box').on('click', function eventHandler() {

    counter ++;
    if (currentPlayer === player1){
      $(this).html(player1);
      p1HeldBoxes.push($(this).attr('id'));
      console.log(p1HeldBoxes);
      currentPlayer = player2;
      $('#currentPlayer').html("<h3>Current Playa: Pirate!</h3>");
    } else {
      $(this).html(player2)
      p2HeldBoxes.push($(this).attr('id'));
      console.log(p2HeldBoxes);
      $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
      currentPlayer = player1;
    }
    isHorizontal();
    isVertical();
    isDiagonal();
  });

  function isHorizontal() {
    if ((p1HeldBoxes.includes('1') &&
        p1HeldBoxes.includes('2') &&
        p1HeldBoxes.includes('3')) ||
        (p1HeldBoxes.includes('4') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('6'))||
        (p1HeldBoxes.includes('7') &&
        p1HeldBoxes.includes('8') &&
        p1HeldBoxes.includes('9'))){
          $('#currentPlayer').html("<h3>The Winner is Ninja!</h3>");
        };
    if ((p2HeldBoxes.includes('1') &&
        p2HeldBoxes.includes('2') &&
        p2HeldBoxes.includes('3')) ||
        (p2HeldBoxes.includes('4') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('6'))||
        (p2HeldBoxes.includes('7') &&
        p2HeldBoxes.includes('8') &&
        p2HeldBoxes.includes('9'))){
          $('#currentPlayer').html("<h3>The Winner is Pirate!</h3>");
        }
  };
  function isVertical (){
    if ((p1HeldBoxes.includes('1') &&
        p1HeldBoxes.includes('4') &&
        p1HeldBoxes.includes('7')) ||
        (p1HeldBoxes.includes('2') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('8'))||
        (p1HeldBoxes.includes('3') &&
        p1HeldBoxes.includes('6') &&
        p1HeldBoxes.includes('9'))){
          $('#currentPlayer').html("<h3>The Winner is Ninja!</h3>");
        };
    if ((p2HeldBoxes.includes('1') &&
        p2HeldBoxes.includes('4') &&
        p2HeldBoxes.includes('7')) ||
        (p2HeldBoxes.includes('2') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('8'))||
        (p2HeldBoxes.includes('3') &&
        p2HeldBoxes.includes('6') &&
        p2HeldBoxes.includes('9'))){
          $('#currentPlayer').html("<h3>The Winner is Pirate!</h3>");
        }
  };
  function isDiagonal(){
    if ((p1HeldBoxes.includes('1') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('9')) ||
        (p1HeldBoxes.includes('3') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('7'))){
          $('#currentPlayer').html("<h3>The Winner is Ninja!</h3>");
        };
    if ((p2HeldBoxes.includes('1') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('9')) ||
        (p2HeldBoxes.includes('3') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('7'))){
          $('#currentPlayer').html("<h3>The Winner is Pirate!</h3>");
        }
  };

  $('.btn').on('click', function eventHandler(){
    $(".box").html(' ');
    p1HeldBoxes = [];
    p2HeldBoxes = [];
    currentPlayer = player1;
    $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
    counter = 0;
  })
});
