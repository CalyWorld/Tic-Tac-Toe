const Container = document.querySelector("#grid-container");
const cells = document.querySelectorAll(".cell");
let activePlayer = 0;
let players = ['x', 'o'];

const gameBoardArray = [];

// const playGame = (player, marker) =>{

//     const getName = () => player;
//     const getMarker = () => marker;
//     return {getName, getMarker};
// };

const PlaceMarker = () =>{
// let currentPlayer = 'o';
cells.forEach((cell) => {
    cell.addEventListener('click', (e)=>{
        let clickedCell = e.target;
        
        index = parseInt(clickedCell.getAttribute('id')); //getting id for cell clicked
        
        if(gameBoardArray === ''){
            return; 
        }
        else if(clickedCell.textContent !== players){
        
            activePlayer = activePlayer == 0 ? 1:0;
            gameBoardArray[index] = players[activePlayer];
            clickedCell.textContent = players[activePlayer];
        
            console.log(gameBoardArray);      
        }
    });

});
};

const checkWin = () =>{
    
};

PlaceMarker();


// const player1 = playGame('Obi', 'x');
// const player2 = playGame('ben', 'x');

// console.log(player1);
