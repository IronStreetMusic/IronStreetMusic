
const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../models/artist.model');

module.exports.create = (req, res, next) => {
    res.render('artists/profile');
}

// module.exports.list = (req, res, next) => {

// }
