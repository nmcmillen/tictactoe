let gameBoard = [
    0,1,2,
    3,4,5,
    6,7,8
]

const winningConditions = [
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

// use .forEach first to loop through entire array
// then use .includes to check if anything includes the exact match to the players array of answers/selections


const drawBoard = () => {
  boxes.forEach((box, i) => {
    let styleString = '';
    if (i < 3) {
      styleString += 'border-bottom: 3px solid var(--text);';
    }
    if (i % 3 === 0) {
      styleString += 'border-right: 3px solid var(--text);';
    }
    if (i % 3 === 2) {
      styleString += 'border-left: 3px solid var(--text);';
    }
    if (i > 5) {
      styleString += 'border-top: 3px solid var(--text);';
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked);
  });
};


window.addEventListener("load", function(){
  // (B1) DATA ARRAY
  var data = [
    ["A", "B", "C"],
    ["D", "E", "F"]
  ];
 
  // (B2) LOOP + ADD CELLS
  let container = document.getElementById("grid-cell");
  for (let i of data) { for (let j of i) {
    let cell = document.createElement("div");
    cell.innerHTML = j;
    cell.className = "cell";
    container.appendChild(cell);
  }}
});




{/* <p id="demo"></p>

<script>
const winningConditions = [
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

let board = ['0','1','x','3','x','5','x','7','8'];

document.getElementById("demo").innerHTML = winningConditions.some((line) => {
    let arr = [ board[line[0]],  board[line[1]], board[line[2]] ]
  return arr.
});

function checkWinner(result) {
  return result.includes(6) && result.includes(3) && result.includes(0);
}
</script> */}


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

function drawBoard()
{
    let parent = document.getElementById("game");
    let counter = 1;

    for (let i = 0; i < 3; i++)
    {
        let row = document.createElement("tr");

        for(let x = 0; x < size; x++)
        {
            let col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}