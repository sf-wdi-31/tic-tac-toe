// wait for the DOM to finish loading
console.log("Hey I'm JavaScript");
// var paragraphs = $('p');
// var firstParagraph = paragraphs.eq(0);
// var resetBtn = $('.reset-btn');
// var spaceOne =
// var turns
// var
$(document).ready(function() {
var player = 1;
  $('.box').on('click', function(event) {

    var squareSelected = $(this);

    if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
      alert('This square is taken! Try another square.');
    } else {
      if(player === 1) {
        squareSelected.addClass('ex');
        player = 2;
      } else {
        squareSelected.addClass('oh');
        player = 1;
      }
    }
  // all code to manipulate the DOM
  // goes inside this function
    // $('#reset').on('click', function () {
      // $('#reset').button('reset') // button text will be "finished!"
//   for (var i = 0; i < board.eq(0); i++) {
// $('#spaceOne').on('click', function(spaceOneClick){
//
//     console.log(i);


});

function checkifPlayerWon (symbol){

  if($('one').hasClass(symbol) && $('two').hasClass(symbol) && $('three').hasClass(symbol)) {
    return true;
  }  else if ($('four').hasClass(symbol) && $('five').hasClass(symbol) && $('six').hasClass(symbol)) {
    return true;
  }  else if ($('seven').hasClass(symbol) && $('eight').hasClass(symbol) && $('nine').hasClass(symbol))
    return true;
  } else if($('one').hasClass(symbol) && $('four').hasClass(symbol) && $('seven').hasClass(symbol)) {
      return true;
  }  else if ($('two').hasClass(symbol) && $('five').hasClass(symbol) && $('eight').hasClass(symbol)) {
      return true;
  }  else if ($('three').hasClass(symbol) && $('six').hasClass(symbol) && $('nine').hasClass(symbol))
      return true;
  } else if ($('one').hasClass(symbol) && $('two').hasClass(symbol) && $('three').hasClass(symbol)) {
        return true;
  }  else if ($('one').hasClass(symbol) && $('five').hasClass(symbol) && $('nine').hasClass(symbol)) {
        return true;
  }  else if ($('three').hasClass(symbol) && $('five').hasClass(symbol) && $('seven').hasClass(symbol))
        return true;
} else {
  return false;
}

}

});
