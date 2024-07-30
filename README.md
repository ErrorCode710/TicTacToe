# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented in JavaScript. It allows two players to play against each other on a 3x3 board. The game keeps track of player scores and detects win or draw conditions.

Live Preview: https://cozy-heliotrope-5fa5fc.netlify.app/

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)

## Features

- Two-player mode (Player X and Player O)
- Score tracking for both players
- Detects win and draw conditions
- Interactive UI with clickable board
- Reset and start a new game

## How to Play

1. The game starts with Player O's turn.
2. Players take turns clicking on the empty cells to place their tokens (X or O).
3. The game checks for a win or draw condition after each move.
4. If a player wins, their score is updated, and a message is displayed.
5. If the game ends in a draw, the draw score is updated, and a message is displayed.
6. Click the "New Game" button to reset the board and start a new game.

## Project Structure

- **HTML**: The game layout and structure are defined in the `index.html` file.
- **CSS**: The styles for the game are in the `styles.css` file.
- **JavaScript**: The game logic and interactions are implemented in the `script.js` file.

## Code Overview

### Key Functions

- `setUpBoard()`: Initializes a 3x3 board for the game.
- `insertToken(board, row, col, tok)`: Places a token on the board if the cell is empty.
- `winConditions(board)`: Checks if there is a winning combination on the board.
- `draw(board)`: Checks if the board is full and the game is a draw.
- `playerTurns(board)`: Alternates turns between Player X and Player O.
- `gameLogic()`: Manages game flow and UI updates.
- `reset()`: Resets the board and scores for a new game.

### Game Flow

1. **Set Up Board**: The board is initialized with the `setUpBoard()` function.
2. **Player Turn**: Players take turns placing tokens using the `playerTurns()` function.
3. **Check Win/Draw**: After each move, the game checks for a win or draw condition using `winConditions()` and `draw()` functions.
4. **Update UI**: The UI is updated to show the current player's turn, the winner, or a draw message.
5. **New Game**: The board can be reset, and a new game can be started with the "New Game" button.

## Notes

- This project is a beginner-level implementation of Tic Tac Toe using JavaScript, HTML, and CSS.
- The game is designed to be simple and easy to understand, making it a great project for learning basic JavaScript concepts.
## Feedback

Your feedback is important to help improve this project. If you have any suggestions or comments, please consider the following:

1. **Usability**: Is the game easy to understand and play? Are there any aspects of the user interface that could be improved?
2. **Functionality**: Did you encounter any bugs or issues while playing the game? Are there any features that you think are missing or could be added?
3. **Code Quality**: Is the code well-organized and easy to follow? Are there any areas where you think the code could be improved or optimized?
4. **Suggestions**: Do you have any additional features or improvements you would like to see in this project?


Thank you for taking the time to help improve this project!

