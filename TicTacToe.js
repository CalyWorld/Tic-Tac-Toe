const Player = (name, marker)=>{
    const getName = ()=> name;
    const getMarker = ()=> marker;
    return{getName, getMarker}
};

const player1Name = document.getElementById("fname").value;
const player2Name = document.getElementById("lname").value;
const player1Marker = document.getElementById("player1-marker").value;
const player2Marker = document.getElementById("player2-marker").value;
const player1 = Player(player1Name, player1Marker);
const player2 = Player(player2Name, player2Marker);


const GameBoard = (() => {

var gameBoardArray = ['', '', '', '', '', '', '', '', ''];  
var coordinates =[
    ['0', '1', '2'],  //0
    ['3', '4', '5'],  //1
    ['6', '7', '8'],  //2
    ['0', '4', '8'],  //3
    ['2', '4', '6'],  //4
    ['0', '3', '6'],  //5
    ['1', '4', '7'],  //6
    ['2', '5', '8']   //7
]; 

let gameActive = true;
var currentPlayer = player1.getMarker();
let roundDraw = false;

const placeMarker = (event) => {
    let clickedCell = event.target;
    
    let index = parseInt(clickedCell.getAttribute('id'));

    if(gameBoardArray[index] !== '' || !gameActive){
        return;
    }
    else if(gameBoardArray[index] !== player1 && gameBoardArray[index] !== player2){
        
        if(currentPlayer === player1.getMarker()){

            currentPlayer = player2.getMarker();
            gameBoardArray[index] = currentPlayer;
            clickedCell.textContent = currentPlayer;

        }else if(currentPlayer === player2.getMarker()){

            currentPlayer = player1.getMarker();
            gameBoardArray[index] = currentPlayer;
            clickedCell.textContent = currentPlayer;            
        }
        
        console.log(gameBoardArray);                    
        checkWin();
    };
}
const player1WinMessage = () => console.log(`${player1.getName()} ${currentPlayer} wins`);
const player2WinMessage = () => console.log(`${player2.getName()} ${currentPlayer} wins`);
const drawMessage = () => console.log(`IT IS A TIE`);


const checkWin = () =>{
    for(var i =0; i<=7; i++){
        var position = coordinates[i];

        const player1Win = `${player1.getMarker()} ${player1.getMarker()} ${player1.getMarker()}`;
        const player2Win = `${player2.getMarker()} ${player2.getMarker()} ${player2.getMarker()}`;

        let winCoordinates = `${gameBoardArray[position[0]]} ${gameBoardArray[position[1]]} ${gameBoardArray[position[2]]}`;
        
        if(winCoordinates === ''){
                continue;
            }
        if(winCoordinates == player1Win){
            player1WinMessage();
            gameActive = false;

            }else if(winCoordinates == player2Win){
                player2WinMessage();
                gameActive = false;
            }
    }
    
    roundDraw = !gameBoardArray.includes('');
    if(roundDraw){
        gameActive = false;
        drawMessage();
        return;
    }
            
};

   return{placeMarker, checkWin,player1WinMessage, player2WinMessage, drawMessage}

})();

const placeNames = () =>{

    const formContainer = document.getElementById("form-container");
    const container = document.querySelector("#grid-container");
    const folder = document.getElementById("folder");

    let firstPlayerHolder = document.createElement("p");
    let secondPLayerHolder = document.createElement("p");

    firstPlayerHolder.textContent = `${player1.getName()}: ${player1.getMarker()}`;
    secondPLayerHolder.textContent = `${player2.getName()}: ${player2.getMarker()}`;

    folder.append(firstPlayerHolder);
    folder.append(secondPLayerHolder);

    folder.setAttribute('style', 'display:flex; justify-content:center');
    formContainer.setAttribute('style', 'display:none');
    container.setAttribute('style', 'display:grid; gap:5px; justify-content:center; grid-template-columns :repeat(3, 1fr); grid-template-rows:1fr 1fr');
    
    
};

const displayController = (() =>{
    const gameboard = document.querySelectorAll(".cell");
    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', placeNames);
     gameboard.forEach((cell)=>{
         cell.addEventListener('click', GameBoard.placeMarker);
     });
 
})();




