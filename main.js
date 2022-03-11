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
        console.log(this)
    }

    checkWin() {
      WINNING_CONDITIONS.some((inline) => {
        if(this.gameBoard[inline[0]] &&
          this.gameBoard[inline[0]] === this.gameBoard[inline[1]] &&
          this.gameBoard[inline[1]] === this.gameBoard[inline[2]]) {
            // console.log(this.gameBoard[inline[0]])
            console.log(`${this.currentPlayer} wins!`)
            alert(`${this.currentPlayer} wins!`)
              return true
              // need to add something to fire off and change endGame to true and populate lock the board and win message
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
}


// **VIEW**
class GameView {
  constructor() {
    this.cells = document.querySelectorAll(".grid-cell");
    this.winMessage = document.getElementById("win-message");
    this.drawMessage = document.getElementById("draw-message");
    this.restartButton = document.getElementById("restart-button");
    // this.currentPlayer = document.getElementById("current-player")
    console.log(this.cells);
  }

  resetBoard = (handleClick) => {
    this.cells.forEach ((cell, i) => {cell.innerText = ''})
    console.log("reset render")
    this.render(handleClick)
  }

  init(resetGame) {
    // @TODO: create element div for the grid here
    // TITLE
    let gameTitle = document.createElement("h1");
    gameTitle.classList = "game-title";
    gameTitle.innerText = "TIC TAC TOE";
    document.body.appendChild(gameTitle);

    // let playerStatus = document.createElement("p");
    // playerStatus.classList = "player-status";
    // playerStatus.innerText = "Current Player: ABC";
    // document.body.appendChild(playerStatus);

    // GRID (not connecting to this.cells)
    // for (let i = 1; i <= 9; i++){
    //   let gamegrid = document.createElement("div");
    //   gamegrid.classList = "grid-cell";
    //   let grid = document.getElementById("game");
    //   grid.appendChild(gamegrid);
    //  }

    this.cells = Array.from(this.cells);
    
    this.restartButton.addEventListener("click", resetGame);
  }
  
  render(handleClick) {
    // Block of code to place and modify the grid cells with X's and O's
    this.cells.forEach((cell, i) => {
      // only allows cell to be clicked once and turns off eventlistener
      cell.addEventListener("click", (e) => handleClick(e, i), { once: true });
    }); 
  }
}


// **CONTROLLER
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log(this.view)
        this.view.init(this.resetGame);
        this.view.render(this.handleClick);
    }

    // need to remove the event listener on cells (this.something.cells removeeventlistener)

    resetGame = () => {
      // this.model.currentPlayer = 'X'; // these should use setters, this.model.setPlayer('')
      this.model.switchCurrentPlayer();
      this.model.gameBoard = ["","","","","","","","",""]; // these should use setters
      this.model.endGame = false; // these should use setters
      this.view.resetBoard(this.handleClick);

      // this.view.cells.removeEventListener("click", something here)

      console.log(this.view.cells)
    }

    handleClick = (e, i) => {
      // appends innertext to player's symbol
      e.target.innerText = this.model.currentPlayer;
      console.log('this is cell', i)
      this.model.setGameBoard(i);
      this.model.checkWin();
      this.model.switchCurrentPlayer();
      // document.getElementsByClassName("player-status").innerHTML = `Current Player: ${model.currentPlayer}`;
      document.getElementById("current-player").innerText = `Current Player: ${this.model.currentPlayer}`;
    }

    // TODO
    // - Finish restart game function
    //    - Create init(), 
    // - Create winning message function
    // - Create draw message function
    
  }
  
  new GameController(new TicTacToe(), new GameView());