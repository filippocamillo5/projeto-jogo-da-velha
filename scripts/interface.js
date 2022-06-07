document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let position = event.target.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert(`The Game is over, Fera! the winner is ${playerTime}`)
        }, 01);
    }
    updateSquares();
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let symbol = board[square.id];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

let btn = document.querySelector(".btn")
btn.addEventListener('click', restart)

// REINICIAR O JOGO
function restart(){
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.innerHTML = ""
    }) 

    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
}



