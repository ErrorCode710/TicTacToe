// let turn = true;
function setUpBoard() {
  //To Set Up the Grid or The Board
  const row = 3;
  const column = 3;
  const board = []; // [[" ", " ", " "][" ", " ", ""][" ", " " , " "]]
  // [[""]]

  for (let i = 0; i < row; i++) {
    board.push([]);
    for (let j = 0; j < column; j++) {
      board[i].push("");
    }
  }
  return board;
}

function playerTurns() {
  // X is the first turn
  //if player token is X then he is the first turn
  const playerOne = "X";
  const playerTwo = "O";
  let turn = true;

  //
  // Declare a variable turn, this is the basis of turn if its true then execute the insertoken after
  // that make the turn false indicate it done.
  //

  return function (board) {
    const currentPlayer = turn ? playerOne : playerTwo;
    console.log(`current player is ${currentPlayer}`);
    if (insertToken(board, currentPlayer)) {
      turn = !turn;
      console.table(board);

      return currentPlayer;
    }
    console.table(board);
    return null;
  };
}
function insertToken(board, tok) {
      // if the grid item clicked it will send to this function
  //Create the Token X or O; X must Come First

  const row = prompt("Enter Which Row");
  const col = prompt("Enter Which Col");

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
function winConditions(board) {
  const win = [
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
  ]; //<--------------------------------------> // [O,O,X] [X,O,O]
  // compare the board or the array to the win conditions IF board is similar to win conditions then WIN
  // 1. Compare board and  //
  //  1. We need to iterate each item of the winCondition to Compare

  for (let conditions of win) {
    const [a, b, c] = conditions;
    if (a === b && a === c && a != "") {
      return `You Win ${a}`;
    }
  }
  return false;
}
function playGame(board) {
  const move = playerTurns();

  let gameOver = false;

  while (!gameOver) {
    const currentPlayer = move(board);

    if (currentPlayer && winConditions(board)) {
      console.log(`The Winner is ${currentPlayer}`);
      gameOver = true;
    }
  }

  //if person move is win return Win if else back to game or opponent move
}
const board = setUpBoard();

// const board = setUpBoard();
playGame(board);
// const board = [
//   ["X", "", ""],
//   ["", "X", ""],
//   ["", "", "X"],
// ];
