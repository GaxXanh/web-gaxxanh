const fileHelper = require("./fileHelper");

fileHelper.readFile('data.txt', (array) => {
    fileHelper.writeFile(array, "n", "data2.txt", (result) => {
        if (result) {
            console.log("Complete");
        } else {
            console.log("Incomplete");
        }
    });
});
