

//initiallize all variables
let currentPlayer = "playerOne";
let currentPlay;
let validPlay;
let endGame = false;
let playerScore = 0;



//will check game status
const render = function () {

  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame); //check if valid play

  if (validPlay) { //updates play with image
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/knot.png')");
    } else {
      $currentPlay.css("background-image", "url('images/circle.png')");
    }
    endGame = game.isGameOver(currentPlayer); //checks if game finished
  }

  if (endGame && playerScore === 0){ //If GAME OVER
      $(".gameStatus h3").removeClass('hidden'); //shows message
      $('.turn').addClass('hidden');

      if (currentPlayer === "playerOne") {   //updates score P1
        $('#finalScore').html(`Player 1 wins!`);
        playerScore = +$('#playerOneScore').html() + 1;
        $('#playerOneScore').html(playerScore);

      }
      else if (currentPlayer === "playerTwo") { //updates score P2
        $('#finalScore').html(`Player 2 wins.`);
        playerScore = +$('#playerTwoScore').html() + 1;
        $('#playerTwoScore').html(playerScore);
      }
      else {
        $('#finalScore').html("It's a tie"); //if a tie
      }
  }
  currentPlayer = game.nextPlayer(currentPlayer, validPlay, endGame); //updates next player
  if (currentPlayer === "playerOne") { //updates html player's turn
    $('.turn span').html(1);
  } else {
    $('.turn span').html(2);
  }
}






//get doc ready and set event listeners
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

  //resets game css
  $('#reset').on('click', function() {
    game.resetGame();
    $('.gameStatus h3').addClass('hidden');
    $('.turn').removeClass('hidden');
    $('.box').css('background-image', '');
    $('.turn span').html(1);
  })
});
