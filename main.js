//GameBoard Module

const GameBoard = (() => {
    const gameboard = [
        "","","",
        "","","",
        "","",""
    ];

    const tile = Array.from(document.querySelectorAll('.item')).map((el, i)=> {
        el.textContent = gameboard[i];
        return el;
    })

    return {tile, gameboard};
})();

const gb = GameBoard;

//Game Module
const Game = (() => {
    const reset = document.querySelector('#reset');
    const {tile, gameboard} = gb;
    const player1 = 'X';
    const player2 = 'O';
    let activePlayer = player1;

    tile.map((el, i) => {
        (function (i) {
            el.addEventListener('click', (e) => {
    
                if(gameboard[i] === "") {
                    gameboard[i] = activePlayer;
                    e.target.textContent = activePlayer;
                    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
                }
                console.log(gameboard[i],e.target, i);
            })
        })(i) 
    })

    const resetGame = () => {
        tile.map((el, i) => {
            gameboard[i] = "";
            el.textContent = gameboard[i];
            return el;
        })
     };
 
     reset.addEventListener('click', resetGame)
})();