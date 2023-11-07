const { getInputFromUser } = require('./inputHelper')
const { GRID_SIZE } = require('./constants');

const startTicTacToe = () => {
    const ticTacToeGrids = createGridArray(GRID_SIZE);


}

const createGridArray = (gridSize) => {
    const ticTacToeGrids = Array(gridSize).fill(Array(gridSize).fill(null));
    const boxIdMapGridRowAndColumnNumber = getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);

    return ticTacToeGrids;
}

const getBoxIdMapGridRowAndColumnNumber = (ticTacToeGrids) => {
    const boxIdMapGridRowAndColumnNumber = {};
    let boxId = 1;

    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {
            boxIdMapGridRowAndColumnNumber[boxId++] = { row, column };
        }
    }

    return boxIdMapGridRowAndColumnNumber
}

const printGrids = (ticTacToeGrids) => {
    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {

        }
    }
}

module.exports = {
    startTicTacToe,
    createGridArray,
    getBoxIdMapGridRowAndColumnNumber
}