const express = require('express');

const router = express.Router();

function userRouter (User) {
    router.route('/users') 
        .get( (req, res) => {
            User.find( (err, users) => {
                if (err) {
                    return res.status(400).json(err);
                }

                return res.status(200).json(users);
            } );
        } )
        .post( (req, res) => {
            const user = new User(req.body);

            user.save( (err, data) => {
                if (err) {
                    return res.status(400).json(err);
                }

                return res.status(200).json(data);
            } );
        } )
        .delete( query, (req, res) => {
            
        } )

    return router;
} 

module.exports = userRouter;