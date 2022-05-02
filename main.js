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
    const container = document.querySelector('.container');

    const {tile, gameboard} = gb;

    const player1 = 'X';
    const player2 = 'O';
    let activePlayer = player1;
    let movesLeft = 9;

    tile.map((el, i) => {
        (function (i) {
            el.addEventListener('click', (e) => {    
                if(gameboard[i] === "") {
                    gameboard[i] = activePlayer;
                    e.target.textContent = activePlayer;

                    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
                }

                movesLeft--;
                verifyWin(gameboard);
            })
        })(i) 
    })

    const verifyWin = (gameboard) => {
        //Player 1 wins condition
        if(gameboard[0] == 'X' && gameboard[1] == 'X' && gameboard[2] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[3] == 'X' && gameboard[4] == 'X' && gameboard[5] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[6] == 'X' && gameboard[7] == 'X' && gameboard[8] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[0] == 'X' && gameboard[3] == 'X' && gameboard[6] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[1] == 'X' && gameboard[4] == 'X' && gameboard[7] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[2] == 'X' && gameboard[5] == 'X' && gameboard[8] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[0] == 'X' && gameboard[4] == 'X' && gameboard[8] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        } else if(gameboard[2] == 'X' && gameboard[4] == 'X' && gameboard[6] == 'X') {
            console.log('Player 1 wins!');
            disableGame();
        }

        //Player 2 wins condition
          else if(gameboard[0] == 'O' && gameboard[1] == 'O' && gameboard[2] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[3] == 'O' && gameboard[4] == 'O' && gameboard[5] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[6] == 'O' && gameboard[7] == 'O' && gameboard[8] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[0] == 'O' && gameboard[3] == 'O' && gameboard[6] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[1] == 'O' && gameboard[4] == 'O' && gameboard[7] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[2] == 'O' && gameboard[5] == 'O' && gameboard[8] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[0] == 'O' && gameboard[4] == 'O' && gameboard[8] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else if(gameboard[2] == 'O' && gameboard[4] == 'O' && gameboard[6] == 'O') {
            console.log('Player 2 wins!');
            disableGame();
        } else {
            verifyTie(movesLeft);
        }
    }

    const verifyTie = (moves) => {
        if(moves === 0) {
            console.log(`It's a tie!`);
            disableGame();
        }
    }


    const resetGame = () => {
        tile.map((el, i) => {
            gameboard[i] = "";
            el.textContent = gameboard[i];
            return el;
        })

        activePlayer = player1;
        movesLeft = 9;
        container.classList.remove('disable');
     };

     const disableGame = () => {
         container.classList.add('disable');
     }
 
     reset.addEventListener('click', resetGame)
})();

//Display Controller
const DisplayController = (() => {

})();

//Player Factory
