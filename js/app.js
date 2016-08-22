// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  // pop up box says the following
	// console.log('Are you ready for some fun?!');


//testing when click on box works'
	// $('.col-md-4').on('click', function handleClick(event) {
	// 	console.log('You clicked a box ');
	// });



	var turn = 0;
	var icon = 'X';
	var player = 'Player 1'


	//clicking event. Switch from X to O and draw the corresponding icon every turn, plus incrementing the turn counter
	$('.box').click(function(){
	  if($(this).html()==""){
	    if (turn%2!==0) {
	      icon = "O";
	      player = 'Game Over! O';
	    } else {
	      icon = 'X';
	      player = 'Game Over! X';
	    }
	    $(this).html(icon);
	    checkWin();
	    turn++
	  }
	});
	//restart the game. Maybe better to remove the button and do this with a timer function.
	$('#restart').click(function(){
	  $('.box').html('');
	  $('.box').removeClass('won');
	  turn = 0;
	});
	//check if any of the winning possibilities are true
	function checkWin(){
	  if ($('#one').html()===icon && $('#two').html()===icon && $('#three').html()===icon ) {
	    $('#one, #two, #three').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#four').html()===icon && $('#five').html()===icon && $('#six').html()===icon ) {
	    $('#four, #seven, #six').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#seven').html()===icon && $('#eight').html()===icon && $('#nine').html()===icon ) {
	    $('#seven, #eight, #nine').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#seven').html()===icon && $('#four').html()===icon && $('#one').html()===icon ) {
	    $('#seven, #four, #one').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#eight').html()===icon && $('#five').html()===icon && $('#two').html()===icon ) {
	    $('#eight, #five, #two').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#nine').html()===icon && $('#six').html()===icon && $('#three').html()===icon ) {
	    $('#nine, #six, #three').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#seven').html()===icon && $('#five').html()===icon && $('#three').html()===icon ) {
	    $('#seven, #five, #three').addClass('won');
	    alert(player + ' won!');
	  } else if ($('#nine').html()===icon && $('#five').html()===icon && $('#one').html()===icon ) {
	    $('#nine, #five, #one').addClass('won');
	    alert(player + ' won!');
	  }
	  //check if all the squares are taken
	  else if (turn === 8) {
	    alert("It's a draw!")
	  }
	}

	function MachineAI() {
	  icon = 'O';
	  player = 'Computer';
	  switch (true) {
	    case $('#seven').text() == '':
	      $('#seven').html(icon);
	      break;
	    case $('#eight').text()== '':
	      $('#eight').html(icon);
	      break;
	    case $('#nine').text()== '':
	      $('#nine').html(icon);
	      break;
	    case $('#four').text()== '':
	      $('#four').html(icon);
	      break;
	    case $('#five').text()== '':
	      $('#five').html(icon);
	      break;
	    case $('#six').text()== '':
	      $('#six').html(icon);
	      break;
	    case $('#one').text()== '':
	      $('#one').html(icon);
	      break;
	    case $('#two').text()== '':
	      $('#two').html(icon);
	      break;
	    case $('#three').text()== '':
	      $('#three').html(icon);
	      break;
	  }}

});


