let express = require('express');
let userCtl = require('./control/userCtl');

exports.router = (() => {
    var apiRouter = express.Router();

    //route ou api pour les users
    apiRouter.route('/users/register/').post(userCtl.register);
    apiRouter.route('/users/login/').post(userCtl.login);

    return apiRouter;
})(); //on a créé l'instance de la fonction / appel auto