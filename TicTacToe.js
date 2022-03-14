const Container = document.querySelector("#grid-container");
const cells = document.querySelectorAll(".cell");

let currentPlayer = 'x';
let nextPlayer = 'o';

const gameBoardArray = [];

// const playGame = (player, marker) =>{

//     const getName = () => player;
//     const getMarker = () => marker;
//     return {getName, getMarker};
// };

const currentPlayerMarker = () =>{
// let currentPlayer = 'o';
cells.forEach((cell) => {
    cell.addEventListener('click', (e)=>{
        let clickedCell = e.target;
        index = parseInt(clickedCell.getAttribute('id')); //getting id for cell clicked
        if(gameBoardArray === ''){
            return; 
        }else if(clickedCell.textContent !== currentPlayer){
        gameBoardArray[index] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        console.log(gameBoardArray);      
        }
    });

});
};



currentPlayerMarker();


// const player1 = playGame('Obi', 'x');
// const player2 = playGame('ben', 'x');

// console.log(player1);
