const container = document.querySelector("#grid-container");
const gameBoard = document.querySelectorAll(".cell");

let gameActive =  true;
let currentPlayer = 'x';

const gameBoardArray = ['', '', '', '', '', '', '', '', ''];
const coordinates = [
    ['0', '1', '2'],  //0
    ['3', '4', '5'],  //1
    ['6', '7', '8'],  //2
    ['0', '4', '8'],  //3
    ['2', '4', '6'],  //4
    ['0', '3', '6'],  //5
    ['1', '4', '7'],  //6
    ['2', '5', '8']   //7
]; 

const winningMessage = () => console.log(`${currentPlayer} Wins`);
const drawMessage = () => console.log(`it is a Tie`);

const placeMarker = () =>{
    gameBoard.forEach((cell) => {
    cell.addEventListener('click', (e)=>{
        let clickedCell = e.target;
        
        index = parseInt(clickedCell.getAttribute('id')); //getting id for cell clicked
        
        //if array is not empty and we can't placeMarks on board anymore
        if(gameBoardArray[index] !== '' || !gameActive){
            return; 
        }
        //X or O can;t be changed in each gameboard Cell
        else if(clickedCell.textContent !== currentPlayer){
            
            //switch marks 
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

            //X is stored in gameboard array which is what we use to validate win
            gameBoardArray[index] = currentPlayer;

            //stored x in cell of gameboard
            clickedCell.textContent = currentPlayer;

            //validates win when x is placed on respective coordinates
            checkWin();     
        }
    });

});
};

const checkWin = () =>{
   
    //assign roundWon to false so no win till all coordinates have been checked
    let roundWon = false;

    //assign roundDraw
    let roundDraw;

    //loop through our coordinates
    for(let i = 0; i <= 7; i++){

        //assign our coordinates to variable winCondition
       let winCondition = coordinates[i]; //stores all coordinates in winCondition 
       
       //store winCondition values in coloumns into our gameboardarray
       let a = gameBoardArray[winCondition[0]];    //first column  
       let b = gameBoardArray[winCondition[1]];    //second column
       let c = gameBoardArray[winCondition[2]];    //third column

       //if the variables are empty, move to the next of condition
       if (a === '' || b === '' || c === '') {

        //move to the next if statement
        continue;
    }
        //if a = b and b = c, this is to determine that the marks on each cell are in respect to our coordinates
       if(a===b && b===c){

        //boolean is true
         roundWon = true;
         
         //move out of for loop
         break;
       }
    }

    // if false
    if(roundWon){
        winningMessage();

        //no placing of marks on the board allowed after winning message
        gameActive = false;

        return;
    }

     //check if there are cells in our gameboard array that is still empty
    roundDraw = !gameBoardArray.includes('');

    if(roundDraw){
        drawMessage();
        gameActive = false;
        return;
    }

    placeMarker();
}


placeMarker();



// const playGame = (player, marker) =>{

//     const getName = () => player;
//     const getMarker = () => marker;
//     return {getName, getMarker};
// };

// const player1 = playGame('Obi', 'x');
// const player2 = playGame('ben', 'x');

// console.log(player1);
