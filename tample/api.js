const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Page ' });

});
app.get('/contact', (req, res) => {
    res.render('pages/contact');

});


// mongodb+srv://habib:<password>@cluster0-jtu43.mongodb.net/test?retryWrites=true&w=majority


app.get('/', (req, res) => {
    //res.send('welcome our page');
    let post = {

        title: 'new boot stap',
        body: 'Test body',
        publish: true,

    }

    let posts = [
        { title: 'title One', author: 'Habib' },
        { title: 'title two', author: 'Habib' },
        { title: 'title three', author: 'Habib' },
        { title: 'title four', author: 'Habib' },
        { title: 'title five', author: 'Habib' },
    ];

    res.render('pages/index', { title: 'Home ', post, posts });

});

// app.get('*', (req, res) => {
//     res.send('Forbiden page');

// });



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {

    console.log('server is running on  PORT' + PORT);
});