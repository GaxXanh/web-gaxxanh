const fs = require('fs');
const readline = require('readline');

module.exports = {
    readFile,
    writeFile
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

function writeFile(array, option, filePath, callback) {
    var fullText = "";

    for (var text of array) {
        fullText = fullText.concat(text);
        fullText += "\n"
    }

    if (option == "n") {
        fs.writeFile(filePath, fullText, (err) => {
            if (err) {
                throw err;
                callback(0);
            }
            console.log("It\'s save");
            callback(1);
        })
    } else if (option == "a") {
        fs.readFile(filePath, (err, data) => {
            fullText = data.toString() + fullText;
            fs.writeFile(filePath, fullText, (err) => {
                if (err) {
                    throw err;
                    callback(0);
                }
                console.log("It\'s save");
                callback(1);
            })
        })
    }
}
