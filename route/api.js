 const express = require('express');
 // console.log(express)
 // const app = express();
 const app = require('express')();

 const moragan = require('morgan');
 const userRouter = require('./user_route');
 const postRouter = require('./post_route');

 app.use(moragan('dev'));

 app.use('/user', userRouter);
 app.use('/posts', postRouter);


 //  app.get('/products/:producId', (req, res) => {
 //      console.log(req.params)
 //      res.send('<h1>This is porduct id </h1>' + req.params.producId);

 //  })


 app.get('/', (req, res) => {
     res.send('<h1>Bangladesh</h1>')

 })

 //  app.get('*', (req, res) => {
 //      res.send('<h1>404 not Found</h1>')

 //  })


 const PORT = process.env.PORT || 8080;

 app.listen(PORT, () => {

     console.log('server is running', PORT)
 })