// const express = require('express');
// console.log(express)
// const app = express();
const app = require('express')();

const moragan = require('morgan');




//app.use(moragan('dev'));

// user here custom middleware 
function customMiddleware(req, res, next) {

    if (req.url == '/habib') {

        res.send('<h2> sorry this page is only for Admin</h2>');

    };
    next();

}

function tinyMidleware() {

    return (req, res, next) => {
        console.log(req.ur)
        next();


    }
}




//app.use(customMiddleware);

const middleware = [customMiddleware, tinyMidleware()];

app.use(middleware);


app.get('/help', moragan('dev'), (req, res) => {
    res.send('<h1> Im  help Page</h1>')
});

app.get('/about', (req, res) => {
    // res.send('<h1> Im  about Page</h1>')

    res.json({

        "message": "I'm your boss",
    })
})

app.get('/', (req, res) => {
    res.send('<h1>Bangladesh</h1>')

})

app.get('*', (req, res) => {
    res.send('<h1>404 not Found</h1>')

})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log('server is running', PORT)
})