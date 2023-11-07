const ticTacToe = require('../src/ticTacToe')
const userInputHelper = require('../src/userInputHelper')

test(`Should not validate the box number when wrong box number is given and validate if correct given. Grid Size 3`, () => {
    const ticTacToeGrids = ticTacToe.createGridArray(3);
    const { boxIdMapGridRowAndColumnNumber } = ticTacToe.getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);


    expect(userInputHelper.validateBoxNumber({ boxNumber: 10, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: "abc", ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: -1, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 0, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 1, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(true)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 9, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(true)
});

test(`Should not validate the box number when already filled box number is given and validate when empty box number is given`, () => {
    const ticTacToeGrids = ticTacToe.createGridArray(3);
    ticTacToeGrids[0][0] = 'X'
    ticTacToeGrids[0][1] = 'X'
    ticTacToeGrids[0][2] = 'X'

    const { boxIdMapGridRowAndColumnNumber } = ticTacToe.getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);

    expect(userInputHelper.validateBoxNumber({ boxNumber: 1, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 2, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 3, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(false)
    expect(userInputHelper.validateBoxNumber({ boxNumber: 4, ticTacToeGrids, boxIdMapGridRowAndColumnNumber })).toBe(true)
});