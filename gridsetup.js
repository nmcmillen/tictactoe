function drawBoard()
{
    let parent = document.getElementById("grid-cell");
    let counter = 1;

    for (let i = 0; i < 3; i++)
    {
        let row = document.createElement("div");

        for(let x = 0; x < 3; x++)
        {
            let col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
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