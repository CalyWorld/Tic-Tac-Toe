const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
};

const player1Name = document.getElementById("fname").value;
const player2Name = document.getElementById("lname").value;
const player1Marker = document.getElementById("player1-marker").value;
const player2Marker = document.getElementById("player2-marker").value;

let player1;
let player2;
var currentPlayer;

const GameBoard = (() => {
  var gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  var coordinates = [
    ["0", "1", "2"], //0
    ["3", "4", "5"], //1
    ["6", "7", "8"], //2
    ["0", "4", "8"], //3
    ["2", "4", "6"], //4
    ["0", "3", "6"], //5
    ["1", "4", "7"], //6
    ["2", "5", "8"], //7
  ];

  let gameActive = true;
  const status = document.getElementById("statusMessage");

  const placeMarker = (event) => {
    let clickedCell = event.target;

    let index = parseInt(clickedCell.getAttribute("id"));

    if (gameBoardArray[index] !== "" || !gameActive) {
      return;
    } else if (
      gameBoardArray[index] !== player1 &&
      gameBoardArray[index] !== player2
    ) {
      if (currentPlayer === player1.getMarker()) {
        currentPlayer = player2.getMarker();
        gameBoardArray[index] = currentPlayer;
        clickedCell.textContent = currentPlayer;
      } else if (currentPlayer === player2.getMarker()) {
        currentPlayer = player1.getMarker();
        gameBoardArray[index] = currentPlayer;
        clickedCell.textContent = currentPlayer;
      }

      console.log(gameBoardArray);
      checkWin();
    }
  };

  const player1WinMessage = () => {status.textContent = (`${player1.getName()} wins`); status.setAttribute("style", "display:flex");};

  const player2WinMessage = () => {status.textContent = (`${player2.getName()} wins`); status.setAttribute("style", "display:flex");};

  const drawMessage = () => console.log(`IT IS A TIE`);

  const checkWin = () => {
    let roundDraw = false;

    for (var i = 0; i <= 7; i++) {
      var position = coordinates[i];

      const player1Win = `${player1.getMarker()} ${player1.getMarker()} ${player1.getMarker()}`;
      const player2Win = `${player2.getMarker()} ${player2.getMarker()} ${player2.getMarker()}`;

      let winCoordinates = `${gameBoardArray[position[0]]} ${
        gameBoardArray[position[1]]
      } ${gameBoardArray[position[2]]}`;

      if (winCoordinates == player1Win) {
        player1WinMessage();
        gameActive = false;
      } else if (winCoordinates == player2Win) {
        player2WinMessage();
        gameActive = false;
      }
    }

    roundDraw = !gameBoardArray.includes("");
    if (roundDraw) {
      gameActive = false;
      drawMessage();
      return;
    }
  };

  return {
    placeMarker,
    checkWin,
    player1WinMessage,
    player2WinMessage,
    drawMessage,
  };
})();

const placeNames = () => {
  const formContainer = document.getElementById("form-container");
  const container = document.querySelector("#grid-container");
  const folder = document.getElementById("folder");
  const player1Name = document.getElementById("fname").value;
  const player2Name = document.getElementById("lname").value;
  const player1Marker = document.getElementById("player1-marker").value;
  const player2Marker = document.getElementById("player2-marker").value;

  player1 = Player(player1Name, player1Marker);
  player2 = Player(player2Name, player2Marker);
  currentPlayer = player1.getMarker();

  let firstPlayerHolder = document.createElement("p");
  let secondPLayerHolder = document.createElement("p");

  firstPlayerHolder.textContent = `${player1Name}: ${player1Marker}`;
  secondPLayerHolder.textContent = `${player2Name}: ${player2Marker}`;

  folder.append(firstPlayerHolder);
  folder.append(secondPLayerHolder);

  folder.setAttribute("style", "display:flex; justify-content:center");
  formContainer.setAttribute("style", "display:none");
  container.setAttribute(
    "style",
    "display:grid; gap:5px; justify-content:center; grid-template-columns :repeat(3, 1fr); grid-template-rows:1fr 1fr"
  );
};

const displayController = (() => {
  const startbtn = document.querySelector("#startbtn");
  const selectbtn = document.querySelector("#select-human");
  const gameboard = document.querySelectorAll(".cell");
  const submitBtn = document.querySelector("#submit");
  const formContainer = document.getElementById("form-container");
  const choiceContainer = document.getElementById("select-container");
  const AIbtn = document.querySelector("#select-AI");
  const AIform = document.getElementById("AI-form-Container");
  const selectChoice = () => {
    choiceContainer.setAttribute(
      "style",
      "display:flex; justify-content:center; align-items:center"
    );
  };
  const openForm = () => {
    formContainer.setAttribute(
      "style",
      "display:flex; justify-content:center; align-items:center"
    );
  };
  const selectAI = () => {
    AIform.setAttribute("style", "display:block");
    choiceContainer.setAttribute("style", "display:none");
  };
  startbtn.addEventListener("click", selectChoice);
  selectbtn.addEventListener("click", openForm);
  submitBtn.addEventListener("click", placeNames);
  AIbtn.addEventListener("click", selectAI);
  gameboard.forEach((cell) => {
    cell.addEventListener("click", GameBoard.placeMarker);
  });
  return { openForm, selectChoice, selectAI };
})();
