function gameBoard() {
  const rows = 3;
  const cols = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < cols; j++) {
      board[i].push("");
    }
  }
  return board;
}

function insertToken(board, row, col, token) {
  if (board[row][col] === "") {
    board[row][col] = token;
    return true;
  } else {
    return false;
  }
  
}


function checkWin(board) {
  const winConditions = [
    // Horizontal
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    // Vertical
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    // Diagonal
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (let conditions of winConditions) {
    const [a, b, c] = conditions;
    if (a && a === b && a === c) {
      return `${a} Wins!`;
    }
  }
  return null;
}

function makeMove(board, row, col, token) {
  if (insertToken(board, row, col, token)) {
    const result = checkWin(board);
    if (result) {
      return result;
    }
  } else {
    return "Invalid Move";
  }
  return board;
}


// Testing
const board = gameBoard();
makeMove(board, 0, 0, "X");
console.log(board); 
