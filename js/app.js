// wait for the DOM to finish loading
// Sanity Check
console.log("Sanity Check")


$(document).ready(function() {
  var player1 = '<img src="imgs/ninja.jpg" alt="" />'
  var player2 = '<img src="imgs/pirate.png" alt="" />'
  var currentPlayer = player1;
  var counter = 0;

  $('.box').on('click', function eventHandler() {

    counter ++;
    if (currentPlayer === player1){
      $(this).html(player1);
      currentPlayer = player2;
      $('#currentPlayer').html("<h3>Current Playa: Pirate!</h3>");
    } else {
      $(this).html(player2)
      $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
      currentPlayer = player1;
    }
    if (counter > 3){
      if ($('#a1').html()=== $('#a2').html() === $('#a3').html()){
        alert("The Winner is " + currentPlayer);
      }
    }
  });
  $('.btn').on('click', function eventHandler(){
    $(".box").html(' ');
    currentPlayer = player1;
    $('#currentPlayer').html("<h3>Current Playa: Ninja!</h3>");
    counter = 0;
  })
});
