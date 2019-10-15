
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
  nextPlayer: function(currentPlayer) {  //updates the next player
    if (currentPlayer === "playerOne") {
      currentPlayer = "playerTwo";
      console.log(`Next player is `, currentPlayer);
      return currentPlayer;
    } else if (currentPlayer === "playerTwo") {
      currentPlayer = "playerOne";
      console.log(`Next player is `, currentPlayer);
      return currentPlayer;
    }
  },

  isGameOver: function(currentPlayer) {   //checks if game over with winner or tie
    for (let i = 0; i < this.winningPlays.length; i++){
      let play = 0;
      for (let j = 0; j < this.winningPlays[i].length; j++) {
        if (this[currentPlayer].includes(this.winningPlays[i][j])) {
          console.log(this.winningPlays[i][j]);
          play++;
          console.log(play);
        }
        if (play === 3) {
          console.log(`winner is`, currentPlayer );
          return currentPlayer;
        }
      }
    }
    if ((this.playerOne.length + this.playerTwo.length) === 9) {
      return "It's a tie";
    } else {
      return false;
    }
  },

  resetGame: function() {
    this.playerOne = [];
    this.playerTwo = [];
    console.log(this.playerOne);
    console.log(this.playerTwo);
  },

  isValidPlay: function(currentPlay, currentPlayer) {
    if (this.playerOne.includes(currentPlay) || this.playerTwo.includes(currentPlay)) {
      console.log(`invalid play`);
      return false;
    } else if (currentPlayer === "playerOne") {
      game.playerOne.push(currentPlay);
      console.log(`valid play for 1`);
      return true;
    } else if (currentPlayer === "playerTwo") {
      game.playerTwo.push(currentPlay);
      console.log(`valid play for 2`);
      return true;
    }
  }
}
