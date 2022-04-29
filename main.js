//The gameBoard Module

const GameBoard = (() => {
    const player1 = 'X';
    const player2 = 'O';
    let activePlayer = player1;

    const gameboard = [
        "","","",
        "","","",
        "","",""
    ];

    const tile = Array.from(document.querySelectorAll('.item')).map((el, i)=> {
        el.textContent = gameboard[i];
        (function (i) {
            el.addEventListener('click', (e) => {

                if(gameboard[i] === "") {
                    gameboard[i] = activePlayer;
                    e.target.textContent = activePlayer;
                    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
                }
                console.log(gameboard[i], i);
                console.log(e.target, i);
            })
        })(i) 

        return el;
    })

    const render = () => {
        //todo render screen
    }

    const reset = () => {
        //reset game
    }

    console.log(tile);

    return {gameboard};
})();

//Players Factory

const Player = (name) => {

    const move = () => {
        //todo
    }

    return {name, move}
}