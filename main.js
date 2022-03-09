console.log('hello tictactoe')

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

    switchCurrentPlayer() {
        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    setGameBoard(x) {
        this.gameBoard = x;
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
    this.cells = document.querySelectorAll(".grid-cell"); //how to convert the working code for this into MVC???
    // this.updateCells = unsure; //same as the .cells???
    this.winMessage = document.getElementById("win-message");
    this.drawMessage = document.getElementById("draw-message");
    this.restartGame = document.getElementById("restart-button");
    console.log(this.cells);
  }

  render(model) {
    // @TODO: create element div for the grid here

    // //
    // Block of code to place and modify the grid cells with X's and O's
    this.cells = Array.from(this.cells); //unsure

    // controller
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
          // appends innertext to player's symbol
          cell.innerText = model.currentPlayer;
          model.switchCurrentPlayer();
        },
        {
          // only allows cell to be clicked once and turns off eventlistener
          once: true,
        }
      );
    });
    // End block of code for X and O placement
    // //
  }
}

// //
// Block of code to place and modify the grid cells with X's and O's
// let cells = document.querySelectorAll('.grid-cell') //view
// cells = Array.from(cells) //unsure

// let currentPlayer = 'X' //model?

// // controller
// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         // appends innertext to player's symbol
//         cell.innerText = currentPlayer
//         currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
//     },{
//         // only allows cell to be clicked once and turns off eventlistener
//         once:true
//     })
// })
// End block of code for X and O placement
// //


// **CONTROLLER
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log(this.view)
        this.view.render(this.model);

    }



}

new GameController(new TicTacToe(), new GameView());