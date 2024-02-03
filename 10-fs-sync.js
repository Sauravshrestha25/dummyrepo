const { readFileSync, writeFileSync } = require('fs')

console.log('start');
const first = readFileSync('./Content/SubFolder/first.txt', 'utf-8')
const second = readFileSync('./Content/SubFolder/second.txt', 'utf-8')

//console.log(first+"\n" + second)

writeFileSync(`./Content/SubFolder/result.txt`, `Here is the result`, { flag: 'a' }); 
console.log('done with this task')
console.log('starting the next task')