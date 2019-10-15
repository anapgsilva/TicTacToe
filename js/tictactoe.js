

//initiallize current player
let currentPlayer = "playerOne";
let currentPlay;
let validPlay;
let endGame = false;

// debugger;

//To do - make boxes not work after game is over
//add images dog/cat; sun/moon;
//shows whose turn it is


//will check game status
const render = function () {
  console.log(`currentPlayer`, currentPlayer);
  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame); //check if valid play
  console.log(`validPlay`, validPlay);

  if (validPlay) { //updates play with image
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/knot.png')");
    } else {
      $currentPlay.css("background-image", "url('images/circle.png')");
    }
    endGame = game.isGameOver(currentPlayer); //checks if game finished
  }
  console.log(`isGameOver`,endGame);

  if (endGame){
      $(".hidden").removeClass('hidden');    //shows message
      if (currentPlayer === "playerOne") {   //if winner playerOne
        $('#finalScore').html(`Player 1 wins!`);
        let player1score = +$('#playerOneScore').html();
        $('#playerOneScore').html(player1score + 1);

      }
      else if (endGame === "playerTwo") {    //if winner playerTwo
        $('#finalScore').html(`Player 2 wins.`);
        let player2score = +$('#playerTwoScore').html();
        $('#playerTwoScore').html(player2score + 1);
      } else {
        $('#finalScore').html("It's a tie");
      }
  }
  console.log('can i see this');
  currentPlayer = game.nextPlayer(currentPlayer, validPlay, endGame);
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
  $('#reset').on('click', function() {
    game.resetGame();
    $('.gameStatus h3').addClass('hidden');
    $('.box').css('background-image', '');
  })
});
