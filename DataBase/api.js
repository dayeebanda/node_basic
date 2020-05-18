const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routers');

const app = express();
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


app.use('/contacts', router)



// mongodb+srv://habib:<password>@cluster0-jtu43.mongodb.net/test?retryWrites=true&w=majority

//mongo "mongodb+srv://cluster0-jtu43.mongodb.net/test" --username habib




// app.get('/', (req, res) => {
//     res.send('Forbiden page');

// });




//     let Schema = mongoose.Schema;

// let testSchema = new Schema({
//     name: String,

// });


// let Test = mongoose.model('Test', testSchema);

// app.get('/', (req, res) => {


//     let test = new Test({

//         name: 'Habibur Rahman',
//     })
//     test.save()
//         .then(t => {

//             res.json(t)
//         })
//         .catch(t => {
//             console.log(e)
//             res.status(500).json({
//                 error: 'Erro Occared'
//             })
//         })

// });

// app.get('*', (req, res) => {
//     res.send('Forbiden page');

// });



const PORT = process.env.PORT || 8080;

mongoose
    .connect('mongodb+srv://habib:emdad1234@cluster0-2pvwn.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

.then(() => {
    app.listen(PORT, () => {

        console.log('server is running on  PORT' + PORT)
    })

})

.catch(e => {

    console.log(e)
});