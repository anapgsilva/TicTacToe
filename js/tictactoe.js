

//initiallize current player
let currentPlayer = "playerOne";
let currentPlay;
let result;

// debugger;

//To do - reset game (css: remove bottom result, remove symbols, reset players arrays add reset button)
//add images dog/cat; sun/moon;
//shows whose turn it is


//will check game status
const render = function () {
  console.log(currentPlayer);
  console.log(currentPlay);
  if (currentPlayer === "playerOne") {
    $currentPlay.css("background-image", "url('images/knot.png')");
  } else {
    $currentPlay.css("background-image", "url('images/circle.png')");
  }

  if (game.isValidPlay(currentPlay, currentPlayer)) { //checks if valid play
    result = game.isGameOver(currentPlayer); //checks if game finished
  }

  if (result !== false){
      $(".hidden").removeClass('hidden');    //shows message
      if (result === "playerOne") {   //if winner playerOne
        $('#finalScore').html(`The winner is Player 1.`);
        let player1score = +$('#playerOneScore').html();
        return $('#playerOneScore').html(player1score + 1);
      }
      else if (result === "playerTwo") {    //if winner playerTwo
        $('#finalScore').html(`The winner is Player 2.`);
        let player2score = +$('#playerTwoScore').html();
        return $('#playerTwoScore').html(player2score + 1);
      } else {
        return $('#finalScore').html(result);
      }
      return game.resetGame();

  } else {
    currentPlayer = game.nextPlayer(currentPlayer);
  }
}






//get all box as event listeners
$(document).ready(function () {

  $('#topleft').on('click', function() {
    $currentPlay = $('#topleft');
    currentPlay = 'topleft';
    render();
  });
  $('#topmiddle').on('click', function() {
    $currentPlay = $('#topmiddle');
    currentPlay = 'topmiddle';
    render();
  });
  $('#topright').on('click', function() {
    $currentPlay = $('#topright');
    currentPlay = 'topright';
    render();
  });
  $('#middleleft').on('click', function() {
    $currentPlay = $('#middleleft');
    currentPlay = 'middleleft';
    render();
  });
  $('#center').on('click', function() {
    $currentPlay = $('#center');
    currentPlay = 'center';
    render();
  });
  $('#middleright').on('click', function() {
    $currentPlay = $('#middleright');
    currentPlay = 'middleright';
    render();
  });
  $('#bottomleft').on('click', function() {
    $currentPlay = $('#bottomleft');
    currentPlay = 'bottomleft';
    render();
  });
  $('#bottommiddle').on('click', function() {
    $currentPlay = $('#bottommiddle');
    currentPlay = 'bottommiddle';
    render();
  });
  $('#bottomright').on('click', function() {
    $currentPlay = $('#bottomright');
    currentPlay = 'bottomright';
    render();
  });
});
