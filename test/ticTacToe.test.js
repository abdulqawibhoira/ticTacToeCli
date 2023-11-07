const ticTacToe = require('../src/ticTacToe')

test('Creates a 2d array for a grid size 3', () => {
    const ticTacToeGrids = ticTacToe.createGridArray(3);
    expect(ticTacToeGrids.length).toBe(3);

    for (let i = 0; i < 3; i++) {
        expect(ticTacToeGrids[i].length).toBe(3);
    }
});

test(`Generates a boxId for each grid's box and map it against a row and column number of a box. Grid size 3`, () => {
    const ticTacToeGrids = ticTacToe.createGridArray(3);
    const boxIdMapGridRowAndColumnNumber = ticTacToe.getBoxIdMapGridRowAndColumnNumber(ticTacToeGrids);

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