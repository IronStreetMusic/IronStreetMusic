
const createError = require('http-errors');
const mongoose = require('mongoose');
const vipUsers = require('../models/vip.model');
const visUsers = require('../models/vis.model');


module.exports.login = (req , res ,next) => {
    res.render('index');
};

module.exports.signin = (req, res, next) => {

}

module.exports.signup = (req, res, next) => {
    res.render('signup');
};

module.exports.doCreate = (req, res, next) => {
    console.info("ha entrado en el doCreate")
    visUsers.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.render('users/signup', {
                    user: req.body,
                    errors: {
                        email: 'Email already registered'
                    }
                });
            } else {
                user = new visUsers(req.body);
                return user.save()
                    .then(user => {
                        console.info("se supone que ha guardado el usuario")
                        res.redirect('/');
                    });
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('/signup')
                // res.render('signup', {
                //     user: req.body,
                //     errors: error.errors
                // });
            } else {
                next(error);
            }
        })
}
