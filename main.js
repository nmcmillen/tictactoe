console.log('hello tictactoe')

function restartTest() {
  alert('button works')
}

const WINNING_CONDITIONS = [
    // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    // Diagonal
      [0, 4, 8],
      [2, 4, 6]
  ];

// **MODEL**
class TicTacToe {
    constructor() {
        this.currentPlayer = 'X';
        this.gameBoard = ["","","","","","","","",""]
        this.endGame = false;
        this.turnCounter = 0;
        console.log(this)
    }

    checkWin() {
      WINNING_CONDITIONS.some((inline) => {
        if(this.gameBoard[inline[0]] &&
          this.gameBoard[inline[0]] === this.gameBoard[inline[1]] &&
          this.gameBoard[inline[1]] === this.gameBoard[inline[2]]) {
            // console.log(this.gameBoard[inline[0]])
              alert(`${this.currentPlayer} wins`)
                  return true
              }
      })
    }

    switchCurrentPlayer() {
        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    setGameBoard(i) {
        this.gameBoard[i] = this.currentPlayer;
    }

    getGameBoard() {
        return this.gameBoard;
    }

    setEndGame(x) {
        this.endGame= x;
    }

    getEndGame() {
        return this.endGame;
    }

    setTurnCounter(x) {
        this.turnCounter = x;
    }

    getTurnCounter() {
        return this.turnCounter;
    }


}


// **VIEW**
class GameView {
  constructor() {
    this.cells = document.querySelectorAll(".grid-cell");
    this.winMessage = document.getElementById("win-message");
    this.drawMessage = document.getElementById("draw-message");
    this.restartGame = document.getElementById("restart-button");
    console.log(this.cells);
  }

  // this.restartGame.addEventListener("click", restartGame());
  
  render(model) {
    // @TODO: create element div for the grid here

    // Block of code to place and modify the grid cells with X's and O's
    this.cells = Array.from(this.cells);
    this.cells.forEach((cell, i) => {
      cell.addEventListener("click", () => {
          // appends innertext to player's symbol
          cell.innerText = model.currentPlayer;
          model.setGameBoard(i);
          model.checkWin(); // CHECKING THISSSSSS
          model.switchCurrentPlayer();
          console.log('this is cell', i)
        },
        {
          // only allows cell to be clicked once and turns off eventlistener
          once: true,
        }
      );
    }); 
  }

}


// **CONTROLLER
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log(this.view)
        this.view.render(this.model);

    }

  //   restartGame(model) {
  //     this.currentPlayer = model.getCurrentPlayer();
  //     this.gameBoard = model.getGameBoard();
  //     this.endGame = model.getEndGame();
  //     this.turnCounter = model.getTurnCounter();
  // }

    
    // TODO
    // - Create restart game function
    // - Create winning message function
    // - Create draw message function
    // - 
    
    
    
  }
  
  new GameController(new TicTacToe(), new GameView());




//   function checkWin() {
//     WINNING_CONDITIONS.some((inline) => {
//         if( gameBoard[inline[0]] &&
//             gameBoard[inline[0]] === gameBoard[inline[1]] &&
//             gameBoard[inline[1]] === gameBoard[inline[2]]) {
//                 gameBoard[inline[0]]
//                 return true
//             }
//     })
// }