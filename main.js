console.log('hello tictactoe')


let cells = document.querySelectorAll('.grid-cell')
cells = Array.from(cells)

let currentPlayer = 'X'

cells.forEach(function(cell) {
    cell.addEventListener('click', () => {
        cell.innerText = currentPlayer
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    })
})