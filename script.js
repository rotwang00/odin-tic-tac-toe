"use strict";

/*
Tic-tac-toe

Objects needed
  Player 1
  Player 2

  Game state object that gets passed around
    State of the board (array of ints)
      
      0 1 2
      3 4 5
      6 7 8

      0 = blank, 1 = X, 2 = O
    
    Whose turn it is (int)
      1 = X, 2 = O
  
  Display control
    Update display
  
  Game control
    Indicates whose turn it is
    Listens for clicks
    If click is legal move, places X or O
    Checks for win or draw
    Announces win or draw
    Resets for next game
*/

const gameState = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Board is blank to start
  let turn = 1; // X will go first
  return { board, turn };
})();

gameState.board[5] = 1;
console.log(gameState.board);
console.log(gameState.turn);
