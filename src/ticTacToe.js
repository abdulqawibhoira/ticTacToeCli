const { inputAndValidateUserName, inputAndValidateBoxNumber } = require('./userInputHelper')
const { GRID_SIZE } = require('./constants');

const startTicTacToe = async () => {
    const player1Name = await inputAndValidateUserName(`Enter player 1 name (Symbol ${getSymbolByPlayerNumber(1)}) : `)
    const player2Name = await inputAndValidateUserName(`Enter player 2 name (Symbol ${getSymbolByPlayerNumber(2)}) : `)
    console.log(`\n`);

    const ticTacToeGrids = createGridArray(GRID_SIZE);
    const { boxIdMapGridRowAndColumnNumber, rowAndColumnNumberMapBoxId } = getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);

    printGrids({ ticTacToeGrids, rowAndColumnNumberMapBoxId });

    let activePlayer = 1;
    while (true) {
        const activeSymbol = getSymbolByPlayerNumber(activePlayer);
        const activePlayerName = activePlayer == 1 ? player1Name : player2Name;

        const boxNumber = await inputAndValidateBoxNumber({
            instruction: `${activePlayerName}'s Turn (Symbol - ${activeSymbol}). Please enter box number : `,
            boxIdMapGridRowAndColumnNumber,
            ticTacToeGrids
        })
        const rowAndColumnNumber = boxIdMapGridRowAndColumnNumber[boxNumber];
        ticTacToeGrids[rowAndColumnNumber.row][rowAndColumnNumber.column] = activeSymbol;

        activePlayer = activePlayer === 1 ? 2 : 1;

        printGrids({ ticTacToeGrids, rowAndColumnNumberMapBoxId });
    }
}

const createGridArray = (gridSize) => {
    const ticTacToeGrids = Array(gridSize);

    for (let i = 0; i < ticTacToeGrids.length; i++) {
        ticTacToeGrids[i] = Array(gridSize).fill(null)
    }

    return ticTacToeGrids;
}

const getSymbolByPlayerNumber = (playerNumber) => playerNumber === 1 ? 'X' : 'O'

const getBoxIdMapGridRowAndColumnNumber = (ticTacToeGrids) => {
    const boxIdMapGridRowAndColumnNumber = {};
    const rowAndColumnNumberMapBoxId = {};

    let boxId = 1;
    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {
            const newBoxId = boxId++;
            boxIdMapGridRowAndColumnNumber[newBoxId] = { row, column };
            rowAndColumnNumberMapBoxId[`${row}#${column}`] = newBoxId
        }
    }
    return { boxIdMapGridRowAndColumnNumber, rowAndColumnNumberMapBoxId }
}

const printGrids = (options) => {
    const { ticTacToeGrids, rowAndColumnNumberMapBoxId } = options;

    let gridString = ``;

    for (let row = 0; row < ticTacToeGrids.length; row++) {
        for (let column = 0; column < ticTacToeGrids[row].length; column++) {
            gridString += `${ticTacToeGrids[row][column] || rowAndColumnNumberMapBoxId[`${row}#${column}`]} | `
        }
        gridString += `\n`
        gridString += `\n`
    }

    console.log(gridString)
    console.log(`Box with numbers are not filled. Enter the box number to fill a particular box \n`)
    return gridString;
}

module.exports = {
    startTicTacToe,
    createGridArray,
    getBoxIdMapGridRowAndColumnNumber,
    printGrids
}