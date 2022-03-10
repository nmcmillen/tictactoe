console.log('gameboard test')

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

  const gameBoard = ["X","X","X","","","","","",""]
  
  console.log(gameBoard);

function checkWin() {
    WINNING_CONDITIONS.some((inline) => {
        if( gameBoard[inline[0]] &&
            gameBoard[inline[0]] === gameBoard[inline[1]] &&
            gameBoard[inline[1]] === gameBoard[inline[2]]) {
                gameBoard[inline[0]]
                return true
            }
    })
}

checkWin();


// console.log(winningPlayer)


//needs and if statement
//needs to return a true or false
//need to record which player has the win condition
//define winningplayer variable and be able to use it elsewhere

// [this.board[inline[0]]this.board[inline[1]], this.board[inline[2]]]


// if (hour < 18) {
//     greeting = "Good day";
//   }


// function checkWin() {
//     let winningPlayer = WINNING_CONDITIONS.some((inline) => {
//         gameBoard[inline[0]] &&
//         gameBoard[inline[0]] === gameBoard[inline[1]] &&
//         gameBoard[inline[1]] === gameBoard[inline[2]]
//     })
//     console.log("winner")
// }