const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/Inventory', { useNewUrlParser:true });
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
        console.log(`I don dey ooo on port  + ${port}`);
    } );
} );