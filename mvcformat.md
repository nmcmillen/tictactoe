Model
- Title: Tic Tac Toe
- Score
- Turn: Bolean (light switch)
- Board
- Button restart
- Win conditions
- End Game: false
- Setters & Getters



View
- "Render" model
- Push board values
- Create the elements on page (document.createElement)
- Initialize event listeners for the tiles
- Document.createelementbyid
    - appendChild
- Create reset button



Controller
- Constructor(model,view)
- Compare player tiles to win conditions (something turns, show x or o)(if over 5 turns check this)
- Display winner
- When tile clicked
    - mark current players symbol
    - remove event listener
    - switch turn/add to turn counter
    - if counter > 4, then compare or run check winning conditions function (use the .some method)
    - set state to current board
    - switch the persons turn
- Run reset function
    - Set endgame false



    // function checkWin(currentClass) {
//     return WINNING_COMBINATIONS.some(combination => {
//       return combination.every(index => {
//         return cellElements[index].classList.contains(currentClass)
//       })
//     })
//   }