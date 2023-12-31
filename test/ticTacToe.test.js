const { TicTacToe } = require('../src/ticTacToe');
const chalk = require('chalk');

test('Creates a 2d array for a grid size 3', () => {
    const ticTacToe = new TicTacToe(3);
    const ticTacToeGrids = ticTacToe.getTicTacToeGrids

    expect(ticTacToeGrids.length).toBe(3);

    for (let i = 0; i < 3; i++) {
        expect(ticTacToeGrids[i].length).toBe(3);
    }
});

test(`Generates a boxId for each grid's box and map it against a row and column number of a box. Grid size 3`, () => {
    const ticTacToe = new TicTacToe(3);

    const boxIdMapGridRowAndColumnNumber = ticTacToe.getBoxIdMapGridRowAndColumnNumber

    expect(boxIdMapGridRowAndColumnNumber[1]).toMatchObject({ row: 0, column: 0 });
    expect(boxIdMapGridRowAndColumnNumber[2]).toMatchObject({ row: 0, column: 1 });
    expect(boxIdMapGridRowAndColumnNumber[3]).toMatchObject({ row: 0, column: 2 });
    expect(boxIdMapGridRowAndColumnNumber[4]).toMatchObject({ row: 1, column: 0 });
    expect(boxIdMapGridRowAndColumnNumber[5]).toMatchObject({ row: 1, column: 1 });
    expect(boxIdMapGridRowAndColumnNumber[6]).toMatchObject({ row: 1, column: 2 });
    expect(boxIdMapGridRowAndColumnNumber[7]).toMatchObject({ row: 2, column: 0 });
    expect(boxIdMapGridRowAndColumnNumber[8]).toMatchObject({ row: 2, column: 1 });
    expect(boxIdMapGridRowAndColumnNumber[9]).toMatchObject({ row: 2, column: 2 });

});

test(`Prints an empty Grid. Grid with just boxIds`, () => {
    const expectedGridString = `${chalk.blackBright('1')} | ${chalk.blackBright('2')} | ${chalk.blackBright('3')} | 

${chalk.blackBright('4')} | ${chalk.blackBright('5')} | ${chalk.blackBright('6')} | 

${chalk.blackBright('7')} | ${chalk.blackBright('8')} | ${chalk.blackBright('9')} | 

`;

    const ticTacToe = new TicTacToe(3);
    const gridString = ticTacToe.printGrids();

    expect(gridString).toBe(expectedGridString);
});

test(`Prints a half filled Grid.`, () => {
    const expectedGridString = `${chalk.green('X')} | ${chalk.green('X')} | ${chalk.green('X')} | 

${chalk.blackBright('4')} | ${chalk.blackBright('5')} | ${chalk.blackBright('6')} | 

${chalk.blackBright('7')} | ${chalk.blackBright('8')} | ${chalk.blackBright('9')} | 

`;

    const ticTacToe = new TicTacToe(3);
    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(0, 1, 'X')
    ticTacToe.setBoxValue(0, 2, 'X')
    const gridString = ticTacToe.printGrids();

    expect(gridString).toBe(expectedGridString);
});

test(`Should not pass validation when wrong box number is given and should pass if correct given. Grid Size 3`, () => {
    const ticTacToe = new TicTacToe(3);

    expect(ticTacToe.validateBoxNumber(10)).toBe(false)
    expect(ticTacToe.validateBoxNumber("abc")).toBe(false)
    expect(ticTacToe.validateBoxNumber(-1)).toBe(false)
    expect(ticTacToe.validateBoxNumber(0)).toBe(false)
    expect(ticTacToe.validateBoxNumber(1)).toBe(true)
    expect(ticTacToe.validateBoxNumber(9)).toBe(true)
});

test(`Should not pass the validation when already filled box number is given and should pass when an empty box number is given`, () => {
    const ticTacToe = new TicTacToe(3);
    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(0, 1, 'X')
    ticTacToe.setBoxValue(0, 2, 'X')

    expect(ticTacToe.validateBoxNumber(1)).toBe(false)
    expect(ticTacToe.validateBoxNumber(2)).toBe(false)
    expect(ticTacToe.validateBoxNumber(3)).toBe(false)
    expect(ticTacToe.validateBoxNumber(4)).toBe(true)
});

test(`First row filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(0, 1, 'X')
    ticTacToe.setBoxValue(0, 2, 'X')

    ticTacToe.setBoxValue(1, 0, 'O')
    ticTacToe.setBoxValue(1, 1, 'O')

    expect(ticTacToe.checkIsRowFilled('X')).toBe(true)
});

test(`Second row filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(1, 0, 'X')
    ticTacToe.setBoxValue(1, 1, 'X')
    ticTacToe.setBoxValue(1, 2, 'X')

    ticTacToe.setBoxValue(0, 0, 'O')
    ticTacToe.setBoxValue(0, 1, 'O')

    expect(ticTacToe.checkIsRowFilled('X')).toBe(true)
});

test(`Third row filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(2, 0, 'X')
    ticTacToe.setBoxValue(2, 1, 'X')
    ticTacToe.setBoxValue(2, 2, 'X')

    ticTacToe.setBoxValue(0, 0, 'O')
    ticTacToe.setBoxValue(0, 1, 'O')

    expect(ticTacToe.checkIsRowFilled('X')).toBe(true)
});

test(`First column filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(1, 0, 'X')
    ticTacToe.setBoxValue(2, 0, 'X')

    ticTacToe.setBoxValue(0, 1, 'O')
    ticTacToe.setBoxValue(1, 1, 'O')

    expect(ticTacToe.checkIsColumnFilled('X')).toBe(true)
});

test(`Second column filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 1, 'X')
    ticTacToe.setBoxValue(1, 1, 'X')
    ticTacToe.setBoxValue(2, 1, 'X')

    ticTacToe.setBoxValue(0, 0, 'O')
    ticTacToe.setBoxValue(1, 0, 'O')

    expect(ticTacToe.checkIsColumnFilled('X')).toBe(true)
});

test(`Third column filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 2, 'X')
    ticTacToe.setBoxValue(1, 2, 'X')
    ticTacToe.setBoxValue(2, 2, 'X')

    ticTacToe.setBoxValue(0, 0, 'O')
    ticTacToe.setBoxValue(1, 0, 'O')

    expect(ticTacToe.checkIsColumnFilled('X')).toBe(true)
});

test(`Left to right diagional filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(1, 1, 'X')
    ticTacToe.setBoxValue(2, 2, 'X')

    ticTacToe.setBoxValue(0, 1, 'O')
    ticTacToe.setBoxValue(1, 0, 'O')

    expect(ticTacToe.checkIsLeftToRightDiagnoalFilled('X')).toBe(true)
});

test(`Right to left diagional filled tests`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 2, 'X')
    ticTacToe.setBoxValue(1, 1, 'X')
    ticTacToe.setBoxValue(2, 0, 'X')

    ticTacToe.setBoxValue(0, 1, 'O')
    ticTacToe.setBoxValue(1, 0, 'O')

    expect(ticTacToe.checkIsRightToLeftDiagnoalFilled('X')).toBe(true)
});

test(`Game Draw Test`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(0, 1, 'O')
    ticTacToe.setBoxValue(0, 2, 'X')

    ticTacToe.setBoxValue(1, 0, 'X')
    ticTacToe.setBoxValue(1, 1, 'O')
    ticTacToe.setBoxValue(1, 2, 'X')

    ticTacToe.setBoxValue(2, 0, 'O')
    ticTacToe.setBoxValue(2, 1, 'X')
    ticTacToe.setBoxValue(2, 2, 'O')

    expect(ticTacToe.checkIsGameDraw()).toBe(true)
    expect(ticTacToe.checkIsPlayerWon('X')).toBe(false)
    expect(ticTacToe.checkIsPlayerWon('O')).toBe(false)
});

test(`Game Win Test`, () => {
    const ticTacToe = new TicTacToe(3);

    ticTacToe.setBoxValue(0, 0, 'X')
    ticTacToe.setBoxValue(0, 1, 'X')
    ticTacToe.setBoxValue(0, 2, 'X')

    ticTacToe.setBoxValue(1, 0, 'O')
    ticTacToe.setBoxValue(1, 1, 'O')
    ticTacToe.setBoxValue(1, 2, 'X')

    ticTacToe.setBoxValue(2, 0, 'O')
    ticTacToe.setBoxValue(2, 1, 'O')
    ticTacToe.setBoxValue(2, 2, 'X')

    expect(ticTacToe.checkIsPlayerWon('X')).toBe(true)
    expect(ticTacToe.checkIsPlayerWon('O')).toBe(false)
    expect(ticTacToe.checkIsGameDraw()).toBe(true)

});