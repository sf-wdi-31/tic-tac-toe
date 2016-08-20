// wait for the DOM to finish loading
// Sanity Check
console.log("Sanity Check")
function winner(){
  if ()
}

$(document).ready(function() {
  var player1 = '<img src="imgs/ninja.jpg" alt="" />'
  var player2 = '<img src="imgs/pirate.png" alt="" />'
  var currentPlayer = player1;
  var counter = 0;

  $('.box').on('click', function eventHandler() {

    counter ++;
    if (currentPlayer === player1){
      $(this).html(player1);
      currentPlayer = player2 ;
    } else {
      $(this).html(player2)
      currentPlayer = player1;
    }
    if (counter > 3){
      console.log(winner());
    }
  });
  $('.btn').on('click', function eventHandler(){
    $(".box").html(' ');
    currentPlayer = '<img src="imgs/ninja.jpg" alt="" />';
    counter = 0;
  })
});
