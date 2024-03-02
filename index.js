const express = require("express");
const morgan = require('morgan');

const movieRouter = require('./car');

const app = express();
app.use(express.static('public'))
app.use(morgan('common',{ immediate:true}));
app.use('/cars', movieRouter);

app.get('/', (request, response)=> response.redirect('/cars'));

app.listen(8080,()=> {
    console.log('Server is listening to http://localhost:8080');
})