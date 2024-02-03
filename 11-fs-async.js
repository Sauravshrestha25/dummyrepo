const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./Content/SubFolder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return null;
    }
    const first = result;
    readFile('./Content/SubFolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return null;
        }
        const second = result
        writeFile('./Content/SubFolder/result.txt', 'This is kinda new', { flag: 'w' }, (err, result) => {
            if (err) {
                console.log(err)
                return null;
            }
            console.log('done with this task')
        });
    })
})
console.log('starting next task')