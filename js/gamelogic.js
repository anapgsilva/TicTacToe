
//can only put a symbol when empty
//if empty add symbol


const game = {
  playerOne: [],    //stores the plays for player 1
  playerTwo: [],     //stores the plays for player 2
  winningPlays: [   //set of winning plays to win
    ['topleft', 'topmiddle', 'topright'],
    ['middleleft', 'center', 'middleright'],
    ['bottomleft', 'bottommiddle', 'bottomright'],
    ['topleft', 'middleleft', 'bottomleft'],
    ['topmiddle', 'center', 'bottommiddle'],
    ['topright', 'middleright', 'bottomright'],
    ['topleft', 'center', 'bottomright'],
    ['topright', 'center', 'bottomleft']
  ],
  nextPlayer: function(currentPlayer, validPlay, endGame) {  //updates the next player
    if (validPlay && endGame === false) {
      if (currentPlayer === "playerOne") {
        return "playerTwo";
      }
      else if (currentPlayer === "playerTwo") {
        return "playerOne";
      }
    } else {
      return validPlay, currentPlayer;
    }
  },

  isGameOver: function(currentPlayer) {   //checks if game over with winner or tie
    for (let i = 0; i < this.winningPlays.length; i++){
      let play = 0;
      for (let j = 0; j < this.winningPlays[i].length; j++) {
        if (this[currentPlayer].includes(this.winningPlays[i][j])) {
          play++;
        }
        if (play === 3) {
          console.log(`winner is`, currentPlayer );
          return true;
        }
      }
    }
    if ((this.playerOne.length + this.playerTwo.length) === 9) {
      return true;
    } else {
      return false;
    }
  },

  isValidPlay: function(currentPlay, currentPlayer, endGame) {
    if (this.playerOne.includes(currentPlay) || this.playerTwo.includes(currentPlay)) {
      console.log(`invalid play`);
      return false;
    } else if (currentPlayer === "playerOne" && endGame === false) {
      game.playerOne.push(currentPlay);
      return true;
    } else if (currentPlayer === "playerTwo" && endGame === false) {
      game.playerTwo.push(currentPlay);
      return true;
    }
  },

    resetGame: function() {
      this.playerOne = [];
      this.playerTwo = [];
      currentPlayer = "playerOne";
      endGame = false;
    }
}
