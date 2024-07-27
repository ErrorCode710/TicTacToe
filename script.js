//My flow
//Set Up The Board using my function setUpboard()
//--It will return a 2d array for inserting a token
//InsertToken function is responsible for checking if the token is already inserted
//--this function has a arguement of board, row col and tok
//--If the token already inserted it will return true if not it will return false
//PlayerTurn function is responsible for the alternative turns
//WinCondintions function responsible for checking the possible combination of how we win

let playerX = 0;
let playerO = 0;
let drawScore = 0;
let board;
let move;
function displayScore() {
  const x = document.querySelector("#playerXScore");
  const o = document.querySelector("#playerOScore");
  const draw = document.querySelector("#drawScore");
  x.textContent = playerX;
  o.textContent = playerO;
  draw.textContent = drawScore;
}
function displayPanel(currentPlayer, result = "") {
  const display = document.querySelector("#player-turn");

  if (result === "win") {
    display.textContent = `You win ${currentPlayer}`;
  } else if (result === "draw") {
    display.textContent = "It's a draw!";
  } else {
    if (currentPlayer === "X") {
      display.textContent = `O's turn`;
    } else {
      display.textContent = `X's turn`;
    }
  }
}
function setUpBoard() {
  const row = 3;
  const column = 3;
  const oldBoard = [];

  for (let i = 0; i < row; i++) {
    oldBoard.push([]);
    for (let j = 0; j < column; j++) {
      oldBoard[i].push("");
    }
  }
  return oldBoard;
}
function winConditions(board) {
  const win = [
    //This is the Combinations
    //vertical
    [board[0][0], board[1][0], board[2][0]], // [X,O,O] [O,X,O] [O,O,X]
    [board[0][1], board[1][1], board[2][1]], // [X,O,O] [O,X,O] [O,O,X]
    [board[0][2], board[1][2], board[2][2]], // [X,O,O] [O,X,O] [O,O,X]
    //horizontal
    [board[0][0], board[0][1], board[0][2]], // [X,X,X]
    [board[1][0], board[1][1], board[1][2]], // [X,X,X]
    [board[2][0], board[2][1], board[2][2]], // [X,X,X]
    //diagonal
    [board[0][0], board[1][1], board[2][2]], // [X,O,O] [O,O,X]
    [board[0][2], board[1][1], board[2][0]], // [O,X.O] [O,X.O]
  ]; //<-----------------------------------> // [O,O,X] [X,O,O]

  for (let conditions of win) {
    // I use destructuring to get the value of the array
    const [a, b, c] = conditions; // I can now access the array individually
    if (a === b && a === c && a != "") {
      // this is the comparison a is the token or the X or O
      return a; // ---------------------> // If a is equal to b if its true then compare it again to c if its true compare if its not empty
    }
  }
  return false;
}
function draw(board) {
  // The Draw Function This Is a simple checking of the array if its not empty
  return (
    board.length > 0 &&
    board.every(
      (subArray) =>
        subArray.length > 0 && subArray.every((element) => element != "")
    )
  );
}

function insertToken(board, row, col, tok) {
  if (board[row][col] === "") {
    // Check if the cell is empty
    board[row][col] = tok; // Insert the token
    console.log(`Token '${tok}' placed at row ${row}, column ${col}`);
    return true; // Return true if the token is inserted
  } else {
    console.log(`Hey!`);
    return false; // Return false if the token is not inserted
  }
}
function playerTurns(board) {
  const playerOne = "X"; // declare the token variable on this block to avoid to much variable on the global
  const playerTwo = "O";
  let turn = true;
  return function (row, col) {
    const currentPlayer = turn ? playerOne : playerTwo; // So if turn is true then playerOne (X) is the currentPlayer
    console.log(`current player is ${currentPlayer}`);
    if (insertToken(board, row, col, currentPlayer)) {
      turn = !turn;
      console.table(board);

      return currentPlayer;
    }

    return null;
  };
}

//
function gameLogic() {
  //This is the game rule or logic this is where I put the Ui token too this is understanble
  move = playerTurns(board); //because this is just a simple if statement

  const container = document.querySelector(".board");
  container.addEventListener("click", (event) => {
    if (event.target.classList.contains("grid-item")) {
      const row = parseInt(event.target.dataset.row, 10);
      const col = parseInt(event.target.dataset.col, 10);

      const moveDetails = getMoveDetails(row, col);
      if (moveDetails.currentPlayer) {
        event.target.classList.add(`token-${moveDetails.currentPlayer}`);
        displayPanel(moveDetails.currentPlayer);
      }
      if (moveDetails.currentPlayer && winConditions(board)) {
        if (moveDetails.currentPlayer === "X") {
          playerX++;
          displayPanel("You Win X");
        } else if (moveDetails.currentPlayer === "O") {
          playerO++;
          displayPanel("You Win O");
        }
        displayScore();
        displayPanel(moveDetails.currentPlayer, "win");
        setTimeout(reset, 3000);
      } else if (draw(board)) {
        drawScore++;
        displayScore();
        displayPanel("", "draw");
        setTimeout(reset, 3000);
      }
    }
  });
}
function getMoveDetails(row, col) {
  const currentPlayer = move(row, col);
  return {
    row: row,
    col: col,
    currentPlayer: currentPlayer,
  };
}

function playGame() {
  displayPanel("O");
  gameLogic();
}
function reset() {
  displayPanel("");

  setTimeout(() => {
    board = setUpBoard();
    const container = document.querySelector(".board");
    const grid = container.querySelectorAll(".grid-item");

    grid.forEach((item) => {
      item.classList.remove("token-X", "token-O");
    });
    playGame();
  }, 3000);
}
function newGame() {
  const button = document.querySelector("#newGame");
  button.addEventListener("click", reset);
}
document.addEventListener("DOMContentLoaded", () => {
  board = setUpBoard();
  displayScore();
  playGame();

  newGame();
});
