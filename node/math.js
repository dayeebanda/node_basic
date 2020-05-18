exports.add = (a, b) => a + b
exports.sub = (a, b) => a - b
const div = (a, b) => a / b

exports.test = (a, b) => add(a, b) / sub(a, b)

//module.exports = test
//module.exports.test = test

// module.exports = {

//     test,
//     add
// }


//console.log(module)