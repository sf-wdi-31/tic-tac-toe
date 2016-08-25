// wait for the DOM to finish loading
// Sanity Check
console.log("Sanity Check")


$(document).ready(function() {
  var player1 = '<img class="col-md-12 col-xs-12" id="ninja" src="imgs/ninja.svg" alt="" />'
  var player2 = '<img class="col-md-12 col-xs-12"  src="imgs/pirate.png" alt="" />'
  var currentPlayer = player1;
  var counter = 0;
  var p1HeldBoxes = [];
  var p2HeldBoxes = [];
  var p1Wins = 0;
  var p2Wins = 0;


  $('.box').on('click', function eventHandler() {

    if (p1HeldBoxes.indexOf($(this).attr('id')) !== -1 ||
        p2HeldBoxes.indexOf($(this).attr('id')) !== -1 ||
        $('#currentPlayer').html() === "<h3>The Winner is Ninja!</h3>" ||
        $('#currentPlayer').html() === "<h3>The Winner is Pirate!</h3>") {
          $(this).preventDefault();
        }

    counter ++;
    if (currentPlayer === player1){
      $(this).html(player1);
      p1HeldBoxes.push($(this).attr('id'));
      currentPlayer = player2;
      $('#currentPlayer').html("<h3>Current Playa: Pirate!</h3>");
    } else {
      $(this).html(player2)
      p2HeldBoxes.push($(this).attr('id'));
      $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
      currentPlayer = player1;
    }

    isHorizontal();
    isVertical();
    isDiagonal();
    isDraw();
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
          p1Wins ++;
          $('#p1Score').html("<h3>Ninja Score: "+ p1Wins +"</h3>");
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
          p2Wins ++;
          $('#p2Score').html("<h3>Pirate Score: "+ p2Wins +"</h3>");
        } else { return false}
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
          p1Wins ++;
          $('#p1Score').html("<h3>Ninja Score: "+ p1Wins +"</h3>");
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
          p2Wins ++;
          $('#p2Score').html("<h3>Pirate Score: "+ p2Wins +"</h3>");
        } else { return false}
  };
  function isDiagonal(){
    if ((p1HeldBoxes.includes('1') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('9')) ||
        (p1HeldBoxes.includes('3') &&
        p1HeldBoxes.includes('5') &&
        p1HeldBoxes.includes('7'))){
          $('#currentPlayer').html("<h3>The Winner is Ninja!</h3>");
          p1Wins ++;
          $('#p1Score').html("<h3>Ninja Score: "+ p1Wins +"</h3>");
        };
    if ((p2HeldBoxes.includes('1') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('9')) ||
        (p2HeldBoxes.includes('3') &&
        p2HeldBoxes.includes('5') &&
        p2HeldBoxes.includes('7'))){
          $('#currentPlayer').html("<h3>The Winner is Pirate!</h3>");
          p2Wins ++;
          $('#p2Score').html("<h3>Pirate Score: "+ p2Wins +"</h3>");
        } else { return false}
  };
  function isDraw(){
    if ((p1HeldBoxes.length + p2HeldBoxes.length === 9) &&
        isHorizontal() === false &&
        isVertical() === false &&
        isDiagonal() === false){
          $('#currentPlayer').html("<h3>Nobody wins! You gonna let him get away with that?</h3>");
        }
  }

  $('.boardBtn').on('click', function eventHandler(){
    $(".box").html(' ');
    p1HeldBoxes = [];
    p2HeldBoxes = [];
    currentPlayer = player1;
    $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
    counter = 0;
  });
  $('.scoreBtn').on('click', function eventHandler(){
    p1Wins = 0;
    p2Wins = 0;
    $('#p2Score').html("<h3>Pirate Score: "+ p2Wins +"</h3>");
    $('#p1Score').html("<h3>Ninja Score: "+ p1Wins +"</h3>");
  })
});
