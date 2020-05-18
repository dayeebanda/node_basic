const express = require('express');
const morgan = require('morgan');
//var bodyParser = require('body-parser');
const contactRoute = require('./contactRouter');

const app = express();
app.use(morgan('dev'));

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.bodyParser());
//app.use(bodyParser.json());


app.use('/contacts', contactRoute);

// app.get('/', (req, res) => {
//     res.send('welcome our page');

// });

app.get('*', (req, res) => {
    res.send('Forbiden page');

});



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {

    console.log('server is running on  PORT' + PORT);
});