//initiallize all variables
let currentPlayer = "playerOne";
let currentPlay;
let validPlay; //bollean
let endGame = false;
let playerScore = 0;
let winner; //stores the winner
let plays = []; //initialises the winning set



//will check game status
const render = function () {

  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame); //check if valid play

  if (validPlay) {
    //choose avatars
    avatar = chooseAvatar(currentPlayer);
    endGame = game.isGameOver(currentPlayer); //endGame true if game over
  }

  if (endGame && playerScore === 0){ //If game is over
      //shows GAME OVER
      $(".gameStatus h3").removeClass('hidden');
      //updates score P1 and message
      if (winner === "playerOne") {
        $('body').addClass('pyro');
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 1 wins!");
        playerScore = +$('#playerOneScore').html() + 1;
        $('#playerOneScore').html(playerScore);
        highlighter(plays);
      }
      //updates score P2 and message
      else if (winner === "playerTwo") {
        $('body').addClass('pyro');
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 2 wins!");
        playerScore = +$('#playerTwoScore').html() + 1;
        $('#playerTwoScore').html(playerScore);
        highlighter(plays);
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



//highlights winning plays
const highlighter = function(plays) {
  for (let i = 0; i < plays.length; i++) {
    let winPlay = plays[i];
    $(`#${winPlay}`).css('background-color', 'rgba(0, 0, 0, 0.01)');
  }
  return true;
}


//Avatar selection
let avatar;
const chooseAvatar = function(currentPlayer) {
  avatar = $('#avatar option:selected').text();

  if (avatar === "noughts vs crosses") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/nought.png')");
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


//function to toggle About popup
const about = function() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



//gets doc ready and sets event listeners
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

  //resets css of the game
  $('#reset').on('click', function() {
    game.resetGame();
    $('.gameStatus h3').addClass('hidden');
    $('.box').css('background-image', '');
    $('.box').css('background-color', '');
    $('h2.turn').html("Player 1 starts");
    $('h2.turn').removeClass('animated');
    $('h2.turn').removeClass('jackInTheBox');
    $('body').removeClass('pyro');
  })

});
