function drawBoard() {
    let gameTitle = document.createElement("h1");
    gameTitle.innerText = "TIC TAC TOE";
    document.body.appendChild(gameTitle);

    let currentPlayerText = document.createElement("p");
    currentPlayerText.innerText = "Current Player: FILL IN";
    document.body.appendChild(currentPlayerText);

    
    
    
    // console.log(newTitle)
    // newTitle.textContent = "Tic Tac Toe"
    // const content = document.querySelector(".game")
    // content.appendChild(newTitle)


    //create board
    for (let i = 1; i <= 9; i++){
     let newDiv = document.createElement("div");
      newDiv.classList.add("grid-cell");
     let grid = document.getElementById("game");
      grid.appendChild(newDiv);
   }

drawBoard();



// function drawBoard()
// {
//     let parent = document.getElementById("grid-cell");
//     let counter = 12;

//     for (let i = 0; i < 3; i++)
//     {
//         let row = document.createElement("tr");

//         for(let x = 0; x < 3; x++)
//         {
//             let col = document.createElement("td");
//             col.innerHTML = counter;

//             row.appendChild(col);
//         }
//         parent.appendChild(row);
//     }
// }