const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.login = (req , res ,next) => {
    res.render('index');
};

module.exports.signup = (req, res, next) => {
    res.render('signup');
};
