// wait for the DOM to finish loading
console.log("Hey I'm JavaScript");

$(document).ready(function() {

  $('.btn-primary').on('click', function(event) {
      $( ".box" ).removeClass('glyphicon glyphicon-fire');
      $('.box').removeClass('glyphicon glyphicon-tint');
      player = 1;
  })

var player = 1;
  $('.box').on('click', function(event) {

    var squareSelected = $(this);

    if(squareSelected.hasClass('glyphicon glyphicon-fire') || squareSelected.hasClass('glyphicon glyphicon-tint')) {
      alert('This spot is taken! Try another square.');
  } else {
      if(player === 1) {
        squareSelected.addClass('glyphicon glyphicon-fire');
        if(checkifPlayerWon('glyphicon glyphicon-fire')) {
          alert("Nice job player "+player+ "!!  Rematch?");
        } else {
        player = 2;
        }
      } else {
        squareSelected.addClass('glyphicon glyphicon-tint');
        if(checkifPlayerWon('glyphicon glyphicon-tint')) {
          alert("Nice job player "+player+ "!! Rematch?");
        } else {
          player = 1;
      }
    }
  }
});

function checkifPlayerWon (symbol){

  if($('.one').hasClass(symbol) && $('.two').hasClass(symbol) && $('.three').hasClass(symbol)) {
    return true;
  }  else if ($('.four').hasClass(symbol) && $('.five').hasClass(symbol) && $('.six').hasClass(symbol)) {
    return true;
  }  else if ($('.seven').hasClass(symbol) && $('.eight').hasClass(symbol) && $('.nine').hasClass(symbol)) {
    return true;
  } else if($('.one').hasClass(symbol) && $('.four').hasClass(symbol) && $('.seven').hasClass(symbol)) {
      return true;
  }  else if ($('.two').hasClass(symbol) && $('.five').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
  }  else if ($('.three').hasClass(symbol) && $('.six').hasClass(symbol) && $('.nine').hasClass(symbol)) {
      return true;
  }  else if ($('one').hasClass(symbol) && $('.five').hasClass(symbol) && $('.nine').hasClass(symbol)) {
        return true;
  }  else if ($('.three').hasClass(symbol) && $('.five').hasClass(symbol) && $('.seven').hasClass(symbol)) {
        return true;
} else {
  return false;
}
}
});
