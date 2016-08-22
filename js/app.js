var gameBoard = [[],[],[]];
var currentPlayer = 'x';
// run game only while there is no winner
var winner = false;

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM goes inside this function

	$('.btn').click(resetBoard);
  	$('.box').click(function () { 
  		
  		// if we have a winner, do not run function
  		if (winner) {
  			return;
  		}
  		
  		// retrieve the id of the block you click on
  		var id = $(this).attr('id');
  		
  		// split the div id into an array i.e. 0-0 --> ['0', '0']
  		var indices = id.split('-');
  		
  		// convert indices to integers and assign the current player's value (x or o) to the clicked game board's position
  		gameBoard[parseInt(indices[0])][parseInt(indices[1])] = currentPlayer;
  		
  		// enter current player's value into clicked box
  		$(this).text(currentPlayer);

  		// each time we click, we check for a winner; if we do, then winner = true and game ends
  		if (currentPlayer === "x") {
  			winner = checkWinner(currentPlayer, gameBoard);
  			currentPlayer = 'o';
  		} 
  		else if (currentPlayer === 'o') {
			winner = checkWinner(currentPlayer, gameBoard);
	  		currentPlayer = 'x';
  		}
	});
});

function checkWinner () {
	console.log('current player: ' + currentPlayer);
	//horizontal check
	for (var i = 0; i < 3; i++) {
		if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
			alert("PLAYER " + currentPlayer.toUpperCase() + ' WINS!!!!!!!');
			return true;
		}
	}
	//vertical check
	for (var i = 0; i < 3; i++) {
		if (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer) {
			alert("PLAYER " + currentPlayer.toUpperCase() + ' WINS!!!!!!!');
			return true;
		}
	}
	
	//diagonal check
	if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
			alert("PLAYER " + currentPlayer.toUpperCase() + ' WINS!!!!!!!');
			return true;
	}	
	if (gameBoard[2][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[0][2] === currentPlayer) {
			alert("PLAYER " + currentPlayer.toUpperCase() + ' WINS!!!!!!!');
			return true;
	}
	return false;
}


function resetBoard () {
	console.log('reset');
	$('.box').text('');
	currentPlayer = 'x';
	gameBoard = [[],[],[]];
	winner = false;
}