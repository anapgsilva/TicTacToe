//initiallize all variables
let currentPlayer = "playerOne";
let currentPlay;
let validPlay;
let endGame = false;
let playerScore = 0;
let winner;


let avatar;
const chooseAvatar = function(currentPlayer) {
  avatar = $('#avatar option:selected').text();

  if (avatar === "knots vs crosses") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/knot.png')");
    } else {
      $currentPlay.css("background-image", "url('images/cross.png')");
    }
  }
  else if (avatar === "dogs vs cats") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/dog.png')");
    } else {
      $currentPlay.css("background-image", "url('images/grumpycat.png')");
    }
  }
  else if (avatar === "water vs fire") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/water.png')");
    } else {
      $currentPlay.css("background-image", "url('images/fire.png')");
    }
  }
  else if (avatar === "day vs night") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/sun.png')");
    } else {
      $currentPlay.css("background-image", "url('images/moon.png')");
    }
  }
}


//will check game status
const render = function () {

  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame); //check if valid play

  if (validPlay) {
    //choose avatars
    avatar = chooseAvatar(currentPlayer);

    endGame = game.isGameOver(currentPlayer); //endGame true if game over
  }

  if (endGame && playerScore === 0){ //If game is over
      //shows message
      $(".gameStatus h3").removeClass('hidden');
      //updates score P1 and message
      if (winner === "playerOne") {
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 1 wins!");
        playerScore = +$('#playerOneScore').html() + 1;
        $('#playerOneScore').html(playerScore);
      }
      //updates score P2 and message
      else if (winner === "playerTwo") {
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 2 wins!");
        playerScore = +$('#playerTwoScore').html() + 1;
        $('#playerTwoScore').html(playerScore);
      }
      //If it's a Tie shows message
      else if (winner === "Tie"){
        $('h2.turn').text("It's a tie.");
      }
  }
  //updates next player
  currentPlayer = game.nextPlayer(currentPlayer, validPlay, endGame);
  //updates player's turn headline
  if (endGame === false) {
    if (currentPlayer === "playerOne") {
      $('h2.turn').html("Player 1's turn");
    } else if (currentPlayer === "playerTwo") {
      $('h2.turn').html("Player 2's turn");
    }
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
