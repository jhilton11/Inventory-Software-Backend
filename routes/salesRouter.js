const express = require('express');

const router = express.Router();

function routes (Sale) {
    router.route('/sales')
    .get( (req, res)=> {
        Sale.find( (err, sales) => {
            if (err) {
                return res.status(400).json(err);
            }

            return res.json(sales);
        } );
    } )
    .post( (req, res) => {
        const sale = new Sale(req.body);
        console.log(req.body);
        sale.save( (err, data) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(201).json(data);
        } );
    } );

    return router;
}

module.exports = routes;