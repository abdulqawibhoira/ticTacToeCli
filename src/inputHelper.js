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

module.exports = {
    getInputFromUser
}