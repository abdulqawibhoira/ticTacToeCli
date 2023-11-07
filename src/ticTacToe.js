const { getInputFromUser } = require('./inputHelper')
const { GRID_SIZE } = require('./constants');

const startTicTacToe = async () => {
    const ticTacToeGrids = createGridArray(GRID_SIZE);
    const { boxIdMapGridRowAndColumnNumber, rowAndColumnNumbarMapBoxId } = getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);

    printGrids({ ticTacToeGrids, rowAndColumnNumbarMapBoxId });

    const userXName = await getInputFromUser("Enter first user's name (Symbol X) : ");
    const userOName = await getInputFromUser("Enter second user's name (Symbol O) : ");
}

const createGridArray = (gridSize) => {
    const ticTacToeGrids = Array(gridSize).fill(Array(gridSize).fill(null));

    return ticTacToeGrids;
}

const getBoxIdMapGridRowAndColumnNumber = (ticTacToeGrids) => {
    const boxIdMapGridRowAndColumnNumber = {};
    const rowAndColumnNumbarMapBoxId = {};

    let boxId = 1;

    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {
            const newBoxId = boxId++;
            boxIdMapGridRowAndColumnNumber[newBoxId] = { row, column };
            rowAndColumnNumbarMapBoxId[`${row}#${column}`] = newBoxId
        }
    }

    return { boxIdMapGridRowAndColumnNumber, rowAndColumnNumbarMapBoxId }
}

const printGrids = (options) => {
    const { ticTacToeGrids, rowAndColumnNumbarMapBoxId } = options;

    let gridString = ``;

    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {
            gridString += `${ticTacToeGrids[row][column] || rowAndColumnNumbarMapBoxId[`${row}#${column}`]} | `
        }
        if (row !== ticTacToeGrids.length - 1) {
            gridString += `\n`
            gridString += `\n`
        }

    }

    console.log(gridString)

    return gridString;
}

module.exports = {
    startTicTacToe,
    createGridArray,
    getBoxIdMapGridRowAndColumnNumber,
    printGrids
}