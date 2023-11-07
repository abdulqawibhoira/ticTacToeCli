const Readline = require('readline')

const getInputFromUser = (instruction) => {
    const readline = Readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => {
        readline.question(instruction, input => {
            resolve(input);
            readline.close();
        });
    })
}

const inputAndValidateUserName = async (instruction) => {
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

const inputAndValidateBoxNumber = async (options) => {
    const { instruction } = options;

    let boxNumber = null;
    while (true) {
        boxNumber = await getInputFromUser(instruction);
        if (!validateBoxNumber({ boxNumber, ...options })) {
            console.log('Invalid Box Number.');
            continue;
        }
        break;
    }
    return boxNumber;
}

const validateBoxNumber = (options) => {
    const { boxNumber, boxIdMapGridRowAndColumnNumber, ticTacToeGrids } = options;

    const rowAndColumnNumber = boxIdMapGridRowAndColumnNumber[boxNumber];
    if (!rowAndColumnNumber) return false;
    if (ticTacToeGrids[rowAndColumnNumber.row][rowAndColumnNumber.column]) return false

    return true;
}

module.exports = {
    getInputFromUser,
    inputAndValidateUserName,
    inputAndValidateBoxNumber,
    validateBoxNumber
}