let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

//le ROUTES
module.exports = {
    register: (req, res) => {
        var email = req.body.email;
        var usename = req.body.username;
        var password = req.body.password;

        if (email == null || username == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
    },

    login: (req, res) => {

    }
}