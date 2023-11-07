const { getInputFromUser } = require('./userInputHelper')
const chalk = require('chalk');

class TicTacToe {
    constructor(gridSize) {
        this.createGridArray(gridSize);
        this.generateBoxIdMapGridRowAndColumnNumber();
    }

    get getTicTacToeGrids() {
        return this.ticTacToeGrids
    }

    get getBoxIdMapGridRowAndColumnNumber() {
        return this.boxIdMapGridRowAndColumnNumber
    }

    get getRowAndColumnNumberMapBoxId() {
        return this.rowAndColumnNumberMapBoxId
    }

    async startTicTacToe() {
        this.player1Name = await this.inputAndValidateUserName(`Enter player 1 name (Symbol ${this.getSymbolByPlayerNumber(1)}) : `)
        this.player2Name = await this.inputAndValidateUserName(`Enter player 2 name (Symbol ${this.getSymbolByPlayerNumber(2)}) : `)
        console.log(`\n`);

        this.printGrids();

        let activePlayer = 1;
        while (true) {
            const activeSymbol = this.getSymbolByPlayerNumber(activePlayer);
            const activePlayerName = activePlayer == 1 ? this.player1Name : this.player2Name;

            const boxNumber = await this.inputAndValidateBoxNumber(`${activePlayerName}'s Turn (Symbol - ${activeSymbol}). Please enter a box number : `)
            const rowAndColumnNumber = this.boxIdMapGridRowAndColumnNumber[boxNumber];
            this.setBoxValue(rowAndColumnNumber.row, rowAndColumnNumber.column, activeSymbol);

            // Change the player's turn
            activePlayer = activePlayer === 1 ? 2 : 1;

            this.printGrids();
        }
    }

    setBoxValue(row, column, symbol) {
        this.ticTacToeGrids[row][column] = symbol;
    }

    createGridArray(gridSize) {
        this.ticTacToeGrids = Array(gridSize);

        for (let i = 0; i < this.ticTacToeGrids.length; i++) {
            this.ticTacToeGrids[i] = Array(gridSize).fill(null)
        }
    }

    getSymbolByPlayerNumber(playerNumber) {
        return playerNumber === 1 ? 'X' : 'O'
    }

    generateBoxIdMapGridRowAndColumnNumber() {
        this.boxIdMapGridRowAndColumnNumber = {};
        this.rowAndColumnNumberMapBoxId = {};

        let boxId = 1;
        for (let row = 0; row < this.ticTacToeGrids.length; row++) {
            for (let column = 0; column < this.ticTacToeGrids[row].length; column++) {
                const newBoxId = boxId++;
                this.boxIdMapGridRowAndColumnNumber[newBoxId] = { row, column };
                this.rowAndColumnNumberMapBoxId[`${row}#${column}`] = newBoxId
            }
        }
    }

    printGrids() {
        let gridString = ``;

        for (let row = 0; row < this.ticTacToeGrids.length; row++) {
            for (let column = 0; column < this.ticTacToeGrids[row].length; column++) {
                const gridValue = this.ticTacToeGrids[row][column] || this.rowAndColumnNumberMapBoxId[`${row}#${column}`];
                const isFilled = this.ticTacToeGrids[row][column] || false;

                gridString += `${isFilled ? chalk.green(gridValue) : chalk.blackBright(gridValue)} | `
            }
            gridString += `\n`
            gridString += `\n`
        }

        console.log(gridString)
        return gridString;
    }

    async inputAndValidateUserName(instruction) {
        let playerName = null;
        while (true) {
            playerName = await getInputFromUser(instruction);
            if (!playerName.trim()) {
                console.log('Invalid Name.');
                continue;
            }
            break;
        }
        return playerName;
    }

    async inputAndValidateBoxNumber(instruction) {
        let boxNumber = null;
        while (true) {
            boxNumber = await getInputFromUser(instruction);
            if (!this.validateBoxNumber(boxNumber)) {
                console.log('Invalid Box Number.');
                continue;
            }
            break;
        }
        return boxNumber;
    }

    validateBoxNumber(boxNumber) {
        const rowAndColumnNumber = this.boxIdMapGridRowAndColumnNumber[boxNumber];
        if (!rowAndColumnNumber) return false;
        if (this.ticTacToeGrids[rowAndColumnNumber.row][rowAndColumnNumber.column]) return false;

        return true;
    }
}

module.exports = {
    TicTacToe
}