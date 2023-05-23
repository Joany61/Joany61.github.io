let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let models = require('../models');

//les ROUTES
module.exports = {
    register: (req, res) => {
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        if (email == null || username == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        //recherche de correspondance dans la base de donnée
        models.Users.findOne({
            attributes: ['email'],
            where: {email: email}
        }).then(function(userFound){
            if(!userFound){
                bcrypt.hash(password, 5, function(err, bcryptPassword){
                    var newUser = models.Users.create({
                        email: email,
                        username: username,
                        password: bcryptPassword,
                        isAdmin: 0
                    }).then((newUser) => {
                        return res.status(201).json({
                            'userId': newUser.id
                        }) 
                    }).catch((err) => {
                        return res.status(500).json({'error': 'an error occured'})
                    })
                });
            }
            else{
                return res.status(409).json({'error': 'user already exists'})
            }
        })
    },

    login: (req, res) => {
        
    }
}