//Object with game logic


const game = {
  playerOne: [],    //stores P1 plays
  playerTwo: [],     //stores P2 plays
  winningPlays: [   //Possible plays to win
    ['topleft', 'topmiddle', 'topright'],
    ['middleleft', 'center', 'middleright'],
    ['bottomleft', 'bottommiddle', 'bottomright'],
    ['topleft', 'middleleft', 'bottomleft'],
    ['topmiddle', 'center', 'bottommiddle'],
    ['topright', 'middleright', 'bottomright'],
    ['topleft', 'center', 'bottomright'],
    ['topright', 'center', 'bottomleft']
  ],
  //updates the next player if valid play and game not over
  nextPlayer: function(currentPlayer, validPlay, endGame) {
    if (validPlay && endGame === false) {
      if (currentPlayer === "playerOne") {
        return "playerTwo";
      }
      else if (currentPlayer === "playerTwo") {
        return "playerOne";
      }
    } else {
      return ""; //no action otherwise
    }
  },
  //checks if game over with winner or tie
  isGameOver: function(currentPlayer) {
    for (let i = 0; i < this.winningPlays.length; i++){
      let play = 0;
      for (let j = 0; j < this.winningPlays[i].length; j++) {
        if (this[currentPlayer].includes(this.winningPlays[i][j])) {
          play++;
        }
        if (play === 3) {
          winner = currentPlayer;
          return true;
        }
      }
    }
    if ((this.playerOne.length + this.playerTwo.length) === 9) {
      winner = "Tie";
      return true;
    } else {
      return false;
    }
  },
  //checks if valid play, if valid then adds to player array of plays
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
  //resets boardgame, but not P1 and P2 scores
    resetGame: function() {
      this.playerOne = [];
      this.playerTwo = [];
      currentPlayer = "playerOne";
      endGame = false;
      playerScore = 0;
    }
}
