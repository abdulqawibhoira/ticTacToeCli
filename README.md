# Tic Tac Toe CLI Game 
This is a cli version of a tic tac toe game.

Its written in Node.js version 20.9.0.

## How it works ?
The program first asks for both the player's name sequentially. 

Once the names are entered, it prints the empty grid with the unique box numbers assigned to each box in the grid.

First turn is given to a player 1. Players take turns making thier moves.
Player 1 = X
Player 2 = O

On each player's turn, the program ask for a box number on which the player want to make his move. If a box number entered is invalid or illegal, program prints the error and ask them to enter again.

Once a valid box number is entered, it prints the grid with all the moves of the players since the start of the game. Filled (used by players) boxes will have X and O displayed in green while unfilled boxes will still have box numbers displayed in grey.

The game continues this way until its draw or player is won. It announces a player name if a player wins.

## Steps to start the game on your CLI
### Install dependencies
```sh
npm install
```

### Run the game
```sh
npm start
```

## Test
Run the tests:
```sh
npm test
```

Coverage:
```sh
npm run test_coverage
```
