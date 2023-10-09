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
                this.gameBoard = ["", "", "", "", "", "", "", "", ""];
                this.endGame = false;
                console.log(this);
            }

            checkWin() {
                return WINNING_CONDITIONS.some((inline) => {
                    if (
                        this.gameBoard[inline[0]] &&
                        this.gameBoard[inline[0]] === this.gameBoard[inline[1]] &&
                        this.gameBoard[inline[1]] === this.gameBoard[inline[2]]
                    ) {
                        this.endGame = true;
                        console.log(`${this.currentPlayer} wins!`);
                        document.getElementById("win-message").innerText = `${this.currentPlayer} wins!`;
                        document.getElementById("win-message").style.display = "block";
                        return true;
                    }
                });
            }

            switchCurrentPlayer() {
                this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
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
                this.endGame = x;
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
                console.log(this.cells);
            }

            resetBoard(handleClick) {
                this.cells.forEach((cell, i) => {
                    cell.innerText = '';
                    cell.removeEventListener("click", handleClick);
                });
                this.winMessage.style.display = "none";
                this.drawMessage.style.display = "none";
                console.log("reset render");
                this.render(handleClick);
            }

            init(resetGame) {
                this.cells = Array.from(this.cells);

                this.restartButton.addEventListener("click", resetGame);
            }

            render(handleClick) {
                this.cells.forEach((cell, i) => {
                    cell.addEventListener("click", (e) => handleClick(e, i), { once: true });
                });
            }
        }

        // **CONTROLLER
        class GameController {
            constructor(model, view) {
                this.model = model;
                this.view = view;
                console.log(this.view);
                this.view.init(this.resetGame);
                this.view.render(this.handleClick);
            }

            resetGame = () => {
                this.model.currentPlayer = 'X';
                this.model.gameBoard = ["", "", "", "", "", "", "", "", ""];
                this.model.endGame = false;
                this.view.resetBoard(this.handleClick);
                console.log(this.view.cells);
            };

            handleClick = (e, i) => {
                if (this.model.getEndGame() || this.model.getGameBoard()[i] !== "") {
                    return; // Prevent further moves when the game is over or the cell is already filled.
                }

                e.target.innerText = this.model.currentPlayer;
                this.model.setGameBoard(i);

                if (this.model.checkWin()) {
                    // Check for a win
                    this.model.setEndGame(true);
                } else if (this.model.getGameBoard().every((cell) => cell !== "")) {
                    // Check for a draw and show draw message
                    document.getElementById("draw-message").style.display = "block";
                    this.model.setEndGame(true);
                } else {
                    this.model.switchCurrentPlayer();
                    document.getElementById("current-player").innerText = `Current Player: ${this.model.getCurrentPlayer()}`;
                }
            };
        }

        new GameController(new TicTacToe(), new GameView());