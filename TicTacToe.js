const container = document.querySelector("#grid-container");
const gameBoard = document.querySelectorAll(".cell");
let activePlayer = true;
let players = ['x', 'o'];

const gameBoardArray = ['', '', '', '', '', '', '', '', ''];
const coordinates = [
    ['0', '1', '2'],  //0
    ['3', '4', '5'],  //1
    ['6', '7', '8'],  //2
    ['0', '4', '8'],  //3
    ['2', '4', '6'],  //4
    ['0', '3', '6'],  //5
    ['1', '4', '7'],  //6
    ['2', '5', '8']  //7
]; 

// const playGame = (player, marker) =>{

//     const getName = () => player;
//     const getMarker = () => marker;
//     return {getName, getMarker};
// };

const winningMessage = () => console.log(`Player wins`);

const placeMarker = () =>{
// let currentPlayer = 'o';
    gameBoard.forEach((cell) => {
    cell.addEventListener('click', (e)=>{
        let clickedCell = e.target;
        
        index = parseInt(clickedCell.getAttribute('id')); //getting id for cell clicked
        
        if(gameBoardArray === ''){
            return; 
        }
        else if(clickedCell.textContent !== players[activePlayer]){
        
            activePlayer = activePlayer == 0 ? 1:0;
            gameBoardArray[index] = players[activePlayer];
            clickedCell.textContent = players[activePlayer];
        
            console.log(gameBoardArray);      
        }
    });

});
};





const checkWin = () =>{
    let roundWon = false;
    for(let i = 0; i <= 7; i++){
       let winCondition = coordinates[i]; //stores first array in winCondition
       let a  = gameBoardArray[winCondition[0]];
       let b = gameBoardArray[winCondition[1]];
       let c = gameBoardArray[winCondition[2]];
       if(a === '' || b === '' || c === ''){
           continue;
       }else if(a===b && b===c){
            roundWon = true;
            break;
       }
    }
    if(roundWon){
        winningMessage();
        activePlayer = false;
        return;
    }
}

placeMarker();
checkWin();
// const player1 = playGame('Obi', 'x');
// const player2 = playGame('ben', 'x');

// console.log(player1);
