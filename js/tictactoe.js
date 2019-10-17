

//initiallize all variables
let currentPlayer = "playerOne";
let currentPlay;
let validPlay;
let endGame = false;
let playerScore = 0;
let winner;


let avatar;
let image;
const chooseAvatar = function(avatar) {
  switch (avatar) {
    case "cross":
    return "url('images/cross.png')";
    break;
    case "circle":
    return "url('images/circle.png')";
    break;
    case "dog":
    return "url('images/dog.png')";
    break;
    case "cat":
    return "url('images/grumpycat.png')";
    break;
    case "fire":
    return "url('images/fire.png')";
    break;
    case "moon":
    return "url('images/moon.png')";
    break;
    case "sun":
    return "url('images/sun.png')";
    break;
    case "water":
    return "url('images/water.png')";
    break;
    default:
    return false;
  }
}


//will check game status
const render = function () {

  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame); //check if valid play

  if (validPlay) { //updates play with image
    if (currentPlayer === "playerOne") {
      avatar = $('#player1avatar option:selected').text();
      console.log(avatar);
      $currentPlay.css("background-image", chooseAvatar(avatar));
    } else {
      avatar = $('#player2avatar option:selected').text();
      console.log(avatar);
      $currentPlay.css("background-image", chooseAvatar(avatar));
    }
    endGame = game.isGameOver(currentPlayer); //checks if game finished
  }

  if (endGame && playerScore === 0){ //If GAME OVER
      $(".gameStatus h3").removeClass('hidden'); //shows message
      console.log(winner);
      if (winner === "playerOne") {   //updates score P1
        console.log('i see this');
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').text("Player 1 wins!");
        playerScore = +$('#playerOneScore').html() + 1;
        $('#playerOneScore').html(playerScore);

      }
      else if (winner === "playerTwo") { //updates score P2
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').text("Player 2 wins!");
        playerScore = +$('#playerTwoScore').html() + 1;
        $('#playerTwoScore').html(playerScore);
      }
      else if (winner === "Tie"){
        $('h2.turn').text("It's a tie."); //if a tie
      }
  }
  currentPlayer = game.nextPlayer(currentPlayer, validPlay, endGame); //updates next player
  if (currentPlayer === "playerOne") { //updates html player's turn
    $('h2.turn').html("Player 1's turn");
  } else if (currentPlayer === "playerTwo") {
    $('h2.turn').html("Player 2's turn");
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
    $('.box').css('background-image', '');
    $('h2.turn').html("Player 1 starts");
    $('h2.turn').removeClass('animated');
    $('h2.turn').removeClass('jackInTheBox');
  })
});
