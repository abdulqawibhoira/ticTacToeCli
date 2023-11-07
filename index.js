const { TicTacToe } = require('./src/ticTacToe')
const { GRID_SIZE } = require('./src/constants');

const ticTacToe = new TicTacToe(GRID_SIZE);
ticTacToe.startTicTacToe();