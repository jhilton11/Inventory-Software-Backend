const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://admin:adminpassword@cluster0.xx0ls.mongodb.net/inventory?retryWrites=true&w=majority', { useNewUrlParser:true, useUnifiedTopology: true });
const app = express();
const port = process.env.port || 4000;

const Sale = require('./model/saleItem');
const saleRouter = require('./routes/salesRouter')(Sale);

app.use( bodyParser.urlencoded( { extended:true } ) );
app.use( bodyParser.json() );
app.use('', saleRouter);

const db = mongoose.connection;
//db.on('error', console.log('Error connecting to db'));
db.once('open', ()=> {
    console.log('Database connected!')
    app.listen( port, ()=> {
        console.log('Everything dey alright ooo');
        console.log(`I don dey ooo on port  + ${port}`);
    } );
} );