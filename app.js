const fs = require('fs')
const arg = process.argv[2] > process.argv[3] ? 'yes' : 'no'
console.log(arg)

/* fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data, err) // все происходит асинхронно
})
console.log('====================================') */

/* let text = fs.readFileSync('t1.txt', 'utf-8')
console.log(text) // синхронная
console.log('====================================') */

fs.readdir('one', (err, data) => {
    console.log(data)
    data.forEach(file => console.log(file))
})