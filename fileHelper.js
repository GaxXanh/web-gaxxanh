const fs = require('fs');
const readline = require('readline');

module.exports = {
    readFile
}

function readFile(filePath, callback) {

    var result = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });

    rl.on('line', (line) => {
        result.push(line);
    });

    rl.on('close', () => {
        callback(result);
    })
}
