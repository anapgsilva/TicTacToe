# TicTacToe

This project was built as part of the Software Engineering Immersive Course at General Assembly, Sydney.

> This game is a classic that takes seconds to learn but minutes to master!

#### How to play the game

The players take turns playing their avatar and the winner is the first to have three of their symbols in a row, in a column or in a diagonal.

The players can choose their own marker/avatar from a drop down menu. The score is tracked for each player, and the board game can be reset by pressing "reset" button. To start a whole new game with scores at zero, just reload your page in the browser.


#### Game building process:

I used HTML, CSS, JavaScript and jQuery to build the game.

Started by building the HTML/CSS page to have a simple board to check the code. Then I wrote the game logic as an object (the game) that contained properties (data) and methods. I had an array for each player to save their plays. These arrays were then compared  to an array of possible winning plays to see if player was a winner. If maximum number of plays were reached and there was no winner, then there was a tie.
Methods that were generated for the game were to check if play is valid, if the game was over, to find the next player and to reset the game.

After I had the game logic (JS) outlined, I then worked on the jQuery part, to set the event listeners, initialise the game and update the board game after every play.

At the end, I improved the variability of the game by adding the option of different avatars and some animations.
