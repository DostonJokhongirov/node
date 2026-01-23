const fs = require("fs");
const path = require("path");
const { buffer } = require("stream/consumers");

// fs.mkdir(path.join(__dirname, 'templates'), err => {
//     if (err) {
//         console.error(err);
//         throw new Error();
//     }

//     console.log("Folder was created successfully");
// })

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     if (err) {
//         console.error(err);
//         throw new Error();
//     }

//     console.log("Folder was created successfully");
// });

fs.writeFile(path.join(__dirname, "notes", "index.txt"), "This is the practice part of node.js", err => {
    if (err) {
        console.error(err);
        throw new Error()
    }

    console.log("File was created successfully!");

    fs.appendFile(path.join(__dirname, "notes", 'index.txt'), " This is the appended part", err => {
        if (err) {
            console.error(err);
            throw new Error()
        }

        console.log("File changed successfully!");
    })
}
);

fs.readFile(path.join(__dirname, "notes", 'index.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        throw new Error()
    }

    console.log(data);
})