const { readFile, writeFile } = require('fs')

readFile('./Content/SubFolder/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("done with this task")
})
console.log("starting another task")