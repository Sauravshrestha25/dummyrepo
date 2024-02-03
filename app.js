const { readFile,writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await getText('./Content/SubFolder/first.txt')
        const second = await getText('./Content/SubFolder/second.txt')
        console.log(first, second)
    }
    catch (error) {
        console.log(error)
    }
}

start()

//const getText = (path) => {
//    return new Promise((resolve, reject) => {
//        readFile(path, 'utf8', (err, data) => {
//            if (err) {
//                reject(err)
//            }
//            else {
//                resolve(data)
//            }
//        })
//    })
//}