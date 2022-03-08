## Goals
- Create a tic-tac-toe board that is playable by two players, potentially one with an AI as the second player(stretch goal).
- Render the HTML for the tic-tac-toe grid dynamically with Javascript
- Code needs to incorporate the use of at least one Class 
    Tip: For most design patterns, you typically use more than one class at a time. For example, in the Composite design pattern, you would need to create at least one Parent class and one Child class
- Entire project must be Object-Oriented and should at least use one of the following design patterns (any additional design patterns are up to
you, including State, Singleton, and more [see Additional Resources at the bottom of the page])
    - Model View Controller (MVC)
    - Composite
- Game should let the players know who's turn it is.
- Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
- The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
- Restart Game button that does not refresh the page (set state).
- Use the symbols X and O.
- On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.

## Page Elements
- Title "Tic Tac Toe"
- Game Board: Grid of 9 (3x3)
- Reset Game Button

## Model View Controller
1. Model (stores data, communicates to controller)
    - Shows who the current player is. X or O. Should start as X.
    - Stores the board information of empty array of 9 (maybe a blank string for earch). Updated by Controller 
    - Stores the set of winning conditions that will be accessed by the Controller when function to check for winning conditions is invoked
    - End Game should be set to false. Controller will change this when winning conditions met

2. View (handles display, communicates to controller)
    - Renders the board model
    - Pushes the board values
    - Creates the elements on the page (document.createElement)
    - Initializes the event listeners for each tile. Potentially appendChild?
    - Creates the reset button and has event listener

3. Controller (handles/controls inputs, communicates to both model and view)
    - Uses Constructor(model,view)
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
        - Set endgame false. Unsure if we want it done this way yet.


## How Many Ways To Win
- set up as an array within an array [0,1,2] for win conditions
- 8 possible wins


constants(constance?) singleton file 


# OBJECTS AND WHAT THEY DO
- Model
    1. currentPlayer: X or O
    2. setBoard: array of 9 []
    3. WIN_CONDITIONS: array of win conditions
    4. endGame: true when win conditions are met
    5. turn counter: keeps track of turns

- Controller
    1. tileClick(): 