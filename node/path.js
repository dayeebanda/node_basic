//console.log(__filename)

const path = require('path')

const myCurrentPath = __filename

console.log(path.basename(__dirname))
console.log(path.extname(myCurrentPath))

let obPath = {
    dir: '/user',
    name: 'habib',
    ext: '.js'

}

console.log(path.format(obPath))
console.log(path.isAbsolute(myCurrentPath))
console.log(path.isAbsolute('./math.js'))

console.log(path.join('usr', 'habib', 'tom.js'))

console.log(path.resolve(__dirname, 'habib', 'tom.js'))
console.log(path.parse(myCurrentPath))