const fs = require('fs');

let fileObj = {

    name: 'habib',
    email: 'habib@gmail.com',
    address: {


        city: 'dhaka',
        country: 'BD'
    }
}

const data = JSON.stringify(fileObj)

fs.writeFile('./test.json', data, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('file write successfully')
    }


})