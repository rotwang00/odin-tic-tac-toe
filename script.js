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

const initialize = () => {
  for (let i = 0; i <= 8; i++) {
    let block = document.getElementById(`block_${i}`);
    block.addEventListener(
      "click",
      function () {
        makeMove(i, block, gameState);
      },
      false
    );
  }
};

// const b0 = document.getElementById("block_0");
// b0.addEventListener(
//   "click",
//   function () {
//     makeMove(b0, gameState);
//   },
//   false
// );

const makeMove = function (i, block, gameState) {
  if (gameState.board[i] === 0) {
    if (gameState.turn === 1) {
      gameState.board[i] = 1;
      block.textContent = "X";
      checkForGameOver(gameState);
      gameState.turn = 2;
    } else {
      gameState.board[i] = 2;
      block.textContent = "O";
      checkForGameOver(gameState);
      gameState.turn = 1;
    }
  }
};

const checkForGameOver = function (gameState) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
};

initialize();
